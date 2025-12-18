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
const { Solar } = LunarJS;

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
const formatSiHua = (map: Record<string, string>): string => {
    return Object.entries(map).map(([star, type]) => {
        const typeChar = { 'Lu': '祿', 'Quan': '權', 'Ke': '科', 'Ji': '忌' }[type];
        return `${typeChar}: ${star}`;
    }).join('  ');
};

const GAN_CHARS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];

const getStemIndex = (char: string): number => {
    return GAN_CHARS.indexOf(char);
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
    const bureau = getBureau(mingStemIndex, mingIndex);

    // 4. Stars & Mutagens
    const ziWeiIndex = getZiWeiIndex(bureau, lunar.lunarDay);
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

    const auxStarsMap = calculateAuxiliaryStars(yearZhiIndex, lunar.lunarMonth, lunarHourIndex, lunar.lunarDay);

    const siHuaMap = calculateSiHua(yearGanIndex);
    const siHuaSummary = formatSiHua(siHuaMap);

    // 5. Gods
    const luCunPos = minorStarsMap['祿存'] || 0;
    const godsCalc = calculateTwelveGods(bureau, input.gender, yearGanIndex, luCunPos, yearZhiIndex);

    // 6. Limits
    const limitsCalc = calculatelimits(mingIndex, bureau, input.gender, yearGanIndex);

    // 7. Prediction Indices & Si Hua
    let liuNianIndex: number | undefined;
    let liuYueIndex: number | undefined;
    let liuNianSiHuaSummary: string | undefined;
    let liuYueSiHuaSummary: string | undefined;
    let lnSiHuaMap: Record<string, any> = {};
    let lySiHuaMap: Record<string, any> = {};

    if (predictionDate) {
        const pSolar = Solar.fromDate(predictionDate);
        const pLunar = pSolar.getLunar();

        // Liu Nian
        const pYear = pLunar.getYear();
        let pBranchIndex = (pYear - 4) % 12;
        if (pBranchIndex < 0) pBranchIndex += 12;
        liuNianIndex = calculateLiuNian(pBranchIndex);

        // Liu Nian Si Hua - Use pure math calculation
        let pYearGanIndex = (pYear - 4) % 10;
        if (pYearGanIndex < 0) pYearGanIndex += 10;
        lnSiHuaMap = calculateSiHua(pYearGanIndex);
        liuNianSiHuaSummary = formatSiHua(lnSiHuaMap);

        // Liu Yue
        const birthMonth = lunar.lunarMonth;
        const pMonth = Math.abs(pLunar.getMonth());
        liuYueIndex = calculateLiuYue(liuNianIndex, birthMonth, lunarHourIndex, pMonth);

        // Liu Yue Si Hua - Use pure math calculation (Wu Hu Dun formula)
        // Month Gan formula: First month starts at (Year Gan % 5 + 1) * 2
        // Then add (month - 1) to get current month's Gan
        const startMonthStem = ((pYearGanIndex % 5) + 1) * 2;
        let pMonthGanIndex = (startMonthStem + (pMonth - 1)) % 10;
        lySiHuaMap = calculateSiHua(pMonthGanIndex);
        liuYueSiHuaSummary = formatSiHua(lySiHuaMap);
    }

    // 8. Assemble
    const palaces: PalaceData[] = [];
    const mingZhu = getMingZhu(mingIndex);
    const shenZhu = getShenZhu(yearZhiIndex);

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
                    mutagen: siHuaMap[starName],
                    liuNianMutagen: lnSiHuaMap[starName],
                    liuYueMutagen: lySiHuaMap[starName]
                });
            }
        }
        for (const [starName, starBranch] of Object.entries(auxStarsMap)) {
            if (starBranch === b) {
                cellMinorStars.push({
                    name: starName,
                    type: 'aux',
                    mutagen: siHuaMap[starName],
                    liuNianMutagen: lnSiHuaMap[starName],
                    liuYueMutagen: lySiHuaMap[starName]
                });
            }
        }

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
            gods,
            daXian: limits.daXian,
            xiaoXian: ages
        });
    }

    return {
        bureau,
        palaces,
        liuNianIndex,
        liuYueIndex,
        mingZhu,
        shenZhu,
        siHuaSummary,
        liuNianSiHuaSummary,
        liuYueSiHuaSummary
    };
};
