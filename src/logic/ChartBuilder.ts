import { BirthDetails } from './models/BirthDetails';
import { ChartData, PalaceData, Star } from './models/ChartData';
import { convertToLunar } from './converters/LunarConverter';
import { calculatePalaces } from './calculators/PalaceCalculator';
import { getPalaceStemIndices } from './calculators/SexagenaryCalculator';
import { getBureau } from './calculators/FiveElements';
import { getZiWeiIndex, calculateMajorStars } from './calculators/StarCalculator';
import { calculateLiuNian, calculateLiuYue } from './calculators/TimeCalculator';
import { calculateMinorStars } from './calculators/MinorStarCalculator';
import { calculateAuxiliaryStars } from './calculators/AuxiliaryStarCalculator';
import { calculateTwelveGods } from './calculators/TwelveGodsCalculator';
import { getBrightness } from './calculators/StarBrightnessMap';
import { calculateSiHua } from './calculators/SiHuaCalculator';
import { calculatelimits, calculateAgesInPalace } from './calculators/LimitCalculator';
import { HEAVENLY_STEMS, EARTHLY_BRANCHES, ZWDS_PALACE_NAMES } from './constants';
import LunarJS from 'lunar-javascript';
const { Solar, Lunar } = LunarJS;

// Masters Logic
const getMingZhu = (mingPadIndex: number): string => {
    const map = ['貪狼', '巨門', '祿存', '文曲', '廉貞', '武曲', '破軍', '武曲', '廉貞', '文曲', '祿存', '巨門'];
    return map[mingPadIndex];
};

const getShenZhu = (yearBranchIndex: number): string => {
    const map = ['火星', '天相', '天梁', '天同', '文昌', '天機', '火星', '天相', '天梁', '天同', '文昌', '天機'];
    return map[yearBranchIndex];
};

// Helper: Format Si Hua Map to String
const formatSiHua = (map: Record<string, 'Lu' | 'Quan' | 'Ke' | 'Ji'>): string | undefined => {
    // Invert to find Star by Type
    const typeToStar: Record<string, string> = {};
    Object.entries(map).forEach(([star, type]) => {
        typeToStar[type] = star;
    });

    const lu = typeToStar['Lu'];
    const quan = typeToStar['Quan'];
    const ke = typeToStar['Ke'];
    const ji = typeToStar['Ji'];

    if (!lu && !quan && !ke && !ji) return undefined;

    // Line 1: Lu, Quan
    const line1 = [
        lu ? `${lu}化祿` : '',
        quan ? `${quan}化權` : ''
    ].filter(Boolean).join('   ');

    // Line 2: Ke, Ji
    const line2 = [
        ke ? `${ke}化科` : '',
        ji ? `${ji}化忌` : ''
    ].filter(Boolean).join('   ');

    return [line1, line2].filter(Boolean).join('\n');
};

const GAN_CHARS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];

const getStemIndex = (char: string): number => {
    return GAN_CHARS.indexOf(char);
};

const ZODIAC_MAP: Record<string, string> = {
    '子': '鼠', '丑': '牛', '寅': '虎', '卯': '兔',
    '辰': '龍', '巳': '蛇', '午': '馬', '未': '羊',
    '申': '猴', '酉': '雞', '戌': '狗', '亥': '豬'
};

export const generateChart = (input: BirthDetails, predictionDate?: Date): ChartData => {
    // 1. Convert to Lunar
    const lunar = convertToLunar(input);

    // 2. Palace Positions
    const { mingIndex } = calculatePalaces(lunar);

    // 3. Palace Stems (Year Gan)
    const yearGanChar = lunar.ganZhiYear.substring(0, 1);
    let yearGanIndex = getStemIndex(yearGanChar);
    if (yearGanIndex === -1) {
        yearGanIndex = (lunar.lunarYear - 4) % 10;
        if (yearGanIndex < 0) yearGanIndex += 10;
    }
    const stems = getPalaceStemIndices(yearGanIndex);
    const mingStemIndex = stems[mingIndex];
    // Mod: Map Bureau Number to String
    const bureauNum = getBureau(mingStemIndex, mingIndex);
    const bureauMap = ['水二局', '木三局', '金四局', '土五局', '火六局'];
    // Bureau Num: 2,3,4,5,6
    const bureau = bureauMap[bureauNum - 2] || String(bureauNum);

    // 4. Stars & Mutagens
    const ziWeiIndex = getZiWeiIndex(bureauNum, lunar.lunarDay); // Pass num to star calc
    const majorStarsMap = calculateMajorStars(ziWeiIndex);

    const ZHI_CHARS = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
    const yearZhiChar = lunar.ganZhiYear.substring(1, 2);
    let yearZhiIndex = ZHI_CHARS.indexOf(yearZhiChar);
    if (yearZhiIndex === -1) {
        yearZhiIndex = (lunar.lunarYear - 4) % 12;
        if (yearZhiIndex < 0) yearZhiIndex += 12;
    }
    const lunarHourIndex = Math.floor((input.hour + 1) / 2) % 12;

    const minorStarsMap = calculateMinorStars(yearGanIndex, lunar.lunarMonth, lunarHourIndex, yearZhiIndex);

    // Calculate Ming/Shen Indices for Aux Stars
    const mingBranchIndex = mingIndex;
    let shenBranchIndex = 0;

    shenBranchIndex = (2 + (lunar.lunarMonth - 1) + lunarHourIndex) % 12;

    const auxStarsMap = calculateAuxiliaryStars(
        yearGanIndex,
        yearZhiIndex,
        lunar.lunarMonth,
        lunarHourIndex,
        lunar.lunarDay,
        mingBranchIndex,
        shenBranchIndex
    );

    const siHuaMap = calculateSiHua(yearGanIndex);
    const siHuaSummary = formatSiHua(siHuaMap);

    // 5. Gods - Moved to before Assemble loop
    // const luCunPos = minorStarsMap['祿存'] || 0;
    // const godsCalc = calculateTwelveGods(bureau, input.gender, yearGanIndex, luCunPos, yearZhiIndex);

    // 6. Limits (Pass Number if needed? calculatelimits uses bureau number)
    // calculatelimits expected number or string?
    // Usually it expects number. `bureau` variable is now string.
    // So pass `bureauNum`.
    const limitsCalc = calculatelimits(mingIndex, bureauNum, input.gender, yearGanIndex);

    // 7. Prediction Indices & Si Hua
    let liuNianIndex: number | undefined;
    let liuYueIndex: number | undefined;
    let liuNianSiHuaSummary: string | undefined;
    let liuYueSiHuaSummary: string | undefined;
    let lnSiHuaMap: Record<string, any> = {};
    let lySiHuaMap: Record<string, any> = {};

    // Prediction Display Info
    let predictionDisplayDate: string | undefined;
    let predictionLunarDate: string | undefined;
    let predictionGanZhi: string | undefined;
    let liuNianDateRange: string | undefined;
    let liuYueDateRange: string | undefined;

    if (predictionDate) {
        const pSolar = Solar.fromDate(predictionDate);
        const pLunar = pSolar.getLunar();

        // Populate Prediction Display Info
        predictionDisplayDate = `${pSolar.getYear()}年${pSolar.getMonth()}月${pSolar.getDay()}日`; // Still calculated but likely unused in UI
        predictionLunarDate = `${pLunar.getYearInGanZhi()}年 ${pLunar.getMonthInChinese()}月`; // Fixed: Month only (No Day)
        predictionGanZhi = `${pLunar.getYearInGanZhi()}年 ${pLunar.getMonthInGanZhi()}月`; // Fixed: Month only (No Day)

        // Calculate Date Ranges
        try {
            // Liu Nian Range (Lunar Year Start to End)
            const lnStart = Lunar.fromYmd(pLunar.getYear(), 1, 1).getSolar();
            const lnEnd = Lunar.fromYmd(pLunar.getYear() + 1, 1, 1).next(-1).getSolar();
            liuNianDateRange = `${lnStart.toYmd()} ~ ${lnEnd.toYmd()}`;

            // Liu Yue Range (Lunar Month Start to End)
            const pMonth = pLunar.getMonth();
            const lyStart = Lunar.fromYmd(pLunar.getYear(), pMonth, 1);
            const msgStart = lyStart.getSolar();
            // Try to get days in month using API, default to 30 if failed to avoid crash
            let daysInMonth = 30;
            if (typeof lyStart.getDayInMonth === 'function') {
                daysInMonth = lyStart.getDayInMonth();
            }
            const lyEnd = lyStart.next(daysInMonth - 1).getSolar();
            liuYueDateRange = `${msgStart.toYmd()} ~ ${lyEnd.toYmd()}`;
        } catch (e) {
            console.error('Date Range Calc Error:', e);
        }

        // Liu Nian
        const pYear = pLunar.getYear();
        let pBranchIndex = (pYear - 4) % 12;
        if (pBranchIndex < 0) pBranchIndex += 12;
        liuNianIndex = calculateLiuNian(pBranchIndex);

        // Liu Nian Si Hua
        let pYearGanIndex = (pYear - 4) % 10;
        if (pYearGanIndex < 0) pYearGanIndex += 10;

        try {
            lnSiHuaMap = calculateSiHua(pYearGanIndex);
            liuNianSiHuaSummary = formatSiHua(lnSiHuaMap);
        } catch (e) {
            console.error(e);
        }

        // Liu Yue
        const birthMonth = lunar.lunarMonth;
        const pMonth = Math.abs(pLunar.getMonth());
        liuYueIndex = calculateLiuYue(liuNianIndex, birthMonth, lunarHourIndex, pMonth);

        // Liu Yue Si Hua
        const startMonthStem = ((pYearGanIndex % 5) + 1) * 2;
        let pMonthGanIndex = (startMonthStem + (pMonth - 1)) % 10;

        try {
            lySiHuaMap = calculateSiHua(pMonthGanIndex);
            liuYueSiHuaSummary = formatSiHua(lySiHuaMap);
        } catch (e) {
            console.error(e);
        }
    }

    // 8. Assemble
    const palaces: PalaceData[] = [];
    const mingZhu = getMingZhu(mingIndex);
    const shenZhu = getShenZhu(yearZhiIndex);

    // Determine Branch for Gods (Birth or Liu Nian)
    // If Prediction Date is set, we use Liu Nian Branch (e.g. 2024 Chen) for Gods? 
    // Standard practice: "Annual Gods" replace "Birth Gods" in Annual view.
    // The User Reference clearly uses Annual Gods (Chen Year) while having Birth Palaces.
    // We will switch to Liu Nian Zhi if available.
    // However, `liuNianIndex` is the Palace Index of Life Palace for the Year. 
    // We need the Year Branch Index (e.g. Chen=4). 
    // `liuNianIndex` calculation: (YearBranch - 4) ... wait.
    // Let's get the Prediction Year Branch directly.
    let targetGodsBranch = yearZhiIndex;
    if (predictionDate && liuNianIndex !== undefined) {
        const pSolar = Solar.fromDate(predictionDate);
        const pLunar = pSolar.getLunar();
        const pYear = pLunar.getYear();
        let pBranchIndex = (pYear - 4) % 12;
        if (pBranchIndex < 0) pBranchIndex += 12;
        targetGodsBranch = pBranchIndex;
    }

    // 5. Gods (Calculate once with target branch)
    const luCunPos = minorStarsMap['祿存'] || 0;
    // Note: Gods calc uses (Bureau, Gender, Gan, Lu, Zhi).
    // For Annual Gods, do we use Birth Bureau/Gender? Yes.
    // Do we use Birth Gan? Yes (Year Gan of Birth usually, unless Liu Nian Gan?).
    // "Sui Jian" (Tai Sui) follows the Annual Branch.
    // "Jiang Xing" follows Annual Branch?
    // "Bo Shi" follows Lu Cun. (Which Lu Cun? Birth or Annual?).
    // User Ref: "Bo Shi" (Doctor) at Zi?
    // User Ref (Zi): Bo Shi. 
    // 1983 Lu Cun at Zi. 
    // 2024 Lu Cun at Si (Bing Year) or ...? 2024 is Jia Chen. Lu Cun at Yin.
    // If User Ref has Bo Shi at Zi, it follows BIRTH Lu Cun.
    // So: Gods Calculation uses Annual Branch (for Tai Sui) but Birth Lu Cun (for Bo Shi)?
    // Or maybe Bo Shi logic is different.
    // Let's assume ONLY Branch-based Gods switch.
    const godsCalc = calculateTwelveGods(bureauNum, input.gender, yearGanIndex, luCunPos, targetGodsBranch);

    for (let b = 0; b < 12; b++) {
        const stemIdx = stems[b];
        const nameIndex = (mingIndex - b + 12) % 12;
        const pName = ZWDS_PALACE_NAMES[nameIndex];

        // Major
        const cellMajorStars: Star[] = [];
        for (const [starName, starBranch] of Object.entries(majorStarsMap)) {
            if (starBranch === b) {
                cellMajorStars.push({
                    name: starName,
                    type: 'major',
                    brightness: getBrightness(starName, b),
                    mutagen: siHuaMap[starName],
                    liuNianMutagen: lnSiHuaMap[starName],
                    liuYueMutagen: lySiHuaMap[starName]
                });
            }
        }

        // Minor
        const cellMinorStars: Star[] = [];
        for (const [starName, starBranch] of Object.entries(minorStarsMap)) {
            if (starBranch === b) {
                const isBad = ['擎羊', '陀羅', '火星', '鈴星', '地空', '地劫'].includes(starName);
                cellMinorStars.push({
                    name: starName,
                    type: isBad ? 'bad' : 'minor',
                    brightness: getBrightness(starName, b), // Mod: Fetch Brightness
                    mutagen: siHuaMap[starName],
                    liuNianMutagen: lnSiHuaMap[starName],
                    liuYueMutagen: lySiHuaMap[starName]
                });
            }
        }
        for (const [starName, starBranch] of Object.entries(auxStarsMap)) {
            if (starBranch === b) {
                // Standard Name Aliasing
                let displayName = starName;
                if (starName === '旬空1' || starName === '旬空2') displayName = '旬空';

                cellMinorStars.push({
                    name: displayName,
                    type: 'aux',
                    mutagen: siHuaMap[starName], // Use original key for mutagens if any (none usually for Aux)
                    liuNianMutagen: lnSiHuaMap[starName],
                    liuYueMutagen: lySiHuaMap[starName]
                });
            }
        }

        // const gods = godsCalc.getGods(b); // Moved logic out
        const gods = godsCalc.getGods(b);
        const limits = limitsCalc.getLimits(b);
        const ages = calculateAgesInPalace(b, mingIndex, input.gender, yearGanIndex);

        palaces.push({
            branchIndex: b,
            branchName: EARTHLY_BRANCHES[b],
            stemIndex: stemIdx,
            stemName: HEAVENLY_STEMS[stemIdx],
            palaceName: pName,
            majorStars: cellMajorStars,
            minorStars: cellMinorStars, // includes Aux now
            gods: {
                ...gods,
                suiJian: gods.jiangQian,  // User Ref "Sui Jian" = My Jiang Qian (Year Branch)
                jiangQian: gods.suiJian   // User Ref "Jiang Qian" = My Sui Jian (Year Station)
            },
            daXian: limits.daXian,
            xiaoXian: ages
        });
    }

    const zodiacChar = yearZhiChar;
    const zodiacAnimal = ZODIAC_MAP[zodiacChar] || '';

    return {
        bureau,
        palaces,
        liuNianIndex,
        liuYueIndex,
        mingZhu,
        shenZhu,
        siHuaSummary,
        liuNianSiHuaSummary,
        liuYueSiHuaSummary,

        // Display Info
        birthDate: `${input.year}年${input.month}月${input.day}日 ${input.hour}時`,
        lunarDate: `${lunar.lunarYear}年${lunar.lunarMonth}月${lunar.lunarDay}日`,
        baZi: lunar.eightChar,
        zodiac: `${zodiacChar}${zodiacAnimal}`, // e.g. 辰龍
        gender: input.gender,
        yinYangGender: (yearGanIndex % 2 === 0 ? '陽' : '陰') + (input.gender === 'Male' ? '男' : '女'),

        // Prediction Info
        predictionDate: predictionDisplayDate,
        predictionLunarDate: predictionLunarDate,
        predictionGanZhi: predictionGanZhi,
        liuNianDateRange,
        liuYueDateRange
    };
};
