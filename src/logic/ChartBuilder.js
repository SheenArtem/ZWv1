import { convertToLunar } from './converters/LunarConverter';
import { calculatePalaces } from './calculators/PalaceCalculator';
import { getPalaceStemIndices } from './calculators/SexagenaryCalculator';
import { getBureau } from './calculators/FiveElements';
import { getZiWeiIndex, calculateMajorStars } from './calculators/StarCalculator';
import { calculateLiuNian, calculateLiuYue } from './calculators/TimeCalculator';
import { calculateMinorStars } from './calculators/MinorStarCalculator';
import { calculateTwelveGods } from './calculators/TwelveGodsCalculator';
import { getBrightness } from './calculators/StarBrightnessMap';
import { calculatelimits, calculateAgesInPalace } from './calculators/LimitCalculator';
import { HEAVENLY_STEMS, EARTHLY_BRANCHES, ZWDS_PALACE_NAMES } from './constants';
import LunarJS from 'lunar-javascript';
const { Solar } = LunarJS;
// Masters Logic
const getMingZhu = (mingPadIndex) => {
    // Ming branch: Zi(0)..Hai(11)
    // Zi: Tan Lang, Chou: Ju Men, Yin: Lu Cun, Mao: Wen Qu, Chen: Lian Zhen, Si: Wu Qu
    // Wu: Po Jun, Wei: Wu Qu, Shen: Lian Zhen, You: Wen Qu, Xu: Lu Cun, Hai: Ju Men
    const map = ['貪狼', '巨門', '祿存', '文曲', '廉貞', '武曲', '破軍', '武曲', '廉貞', '文曲', '祿存', '巨門'];
    return map[mingPadIndex];
};
const getShenZhu = (yearBranchIndex) => {
    // Year branch: Zi(0)..Hai(11)
    // Zi: Huo Xing, Chou: Tian Xiang, Yin: Tian Liang, Mao: Tian Tong, Chen: Wen Chang, Si: Tian Ji
    // Wu: Huo Xing, Wei: Tian Xiang, Shen: Tian Liang, You: Tian Tong, Xu: Wen Chang, Hai: Tian Ji
    const map = ['火星', '天相', '天梁', '天同', '文昌', '天機', '火星', '天相', '天梁', '天同', '文昌', '天機'];
    return map[yearBranchIndex];
};
export const generateChart = (input, predictionDate) => {
    // 1. Convert to Lunar
    const lunar = convertToLunar(input);
    // 2. Palace Positions
    const { mingIndex } = calculatePalaces(lunar);
    // 3. Palace Stems
    // Determine Year Gan Index for Wu Hu Dun
    // ZWDS uses Lunar Year Gan. 
    // 'Jia'(0) etc.
    const GAN_CHARS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
    const yearGanChar = lunar.ganZhiYear.substring(0, 1);
    let yearGanIndex = GAN_CHARS.indexOf(yearGanChar);
    if (yearGanIndex === -1) {
        // Fallback if parsing failed
        yearGanIndex = (lunar.lunarYear - 4) % 10;
        if (yearGanIndex < 0)
            yearGanIndex += 10;
    }
    const stems = getPalaceStemIndices(yearGanIndex);
    // 4. Bureau
    // Ming Stem comes from stems[mingIndex]
    const mingStemIndex = stems[mingIndex];
    const bureau = getBureau(mingStemIndex, mingIndex);
    // 5. Major Stars
    const ziWeiIndex = getZiWeiIndex(bureau, lunar.lunarDay);
    const majorStarsMap = calculateMajorStars(ziWeiIndex);
    // 6. Minor Stars
    // Year Branch (Zhi) Index
    const ZHI_CHARS = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
    const yearZhiChar = lunar.ganZhiYear.substring(1, 2);
    let yearZhiIndex = ZHI_CHARS.indexOf(yearZhiChar);
    if (yearZhiIndex === -1) {
        yearZhiIndex = (lunar.lunarYear - 4) % 12;
        if (yearZhiIndex < 0)
            yearZhiIndex += 12;
    }
    const lunarHourIndex = Math.floor((input.hour + 1) / 2) % 12;
    const minorStarsMap = calculateMinorStars(yearGanIndex, lunar.lunarMonth, lunarHourIndex, yearZhiIndex);
    // 7. Gods
    // Lu Cun is Chinese key now.
    const luCunPos = minorStarsMap['祿存'] || 0;
    const godsCalc = calculateTwelveGods(bureau, input.gender, yearGanIndex, luCunPos, yearZhiIndex);
    // 8. Limits
    const limitsCalc = calculatelimits(mingIndex, bureau, input.gender, yearGanIndex);
    // 9. Prediction
    let liuNianIndex;
    let liuYueIndex;
    if (predictionDate) {
        const pSolar = Solar.fromDate(predictionDate);
        const pLunar = pSolar.getLunar();
        const pYear = pLunar.getYear();
        let pBranchIndex = (pYear - 4) % 12;
        if (pBranchIndex < 0)
            pBranchIndex += 12;
        liuNianIndex = calculateLiuNian(pBranchIndex);
        const birthMonth = lunar.lunarMonth;
        const pMonth = Math.abs(pLunar.getMonth());
        liuYueIndex = calculateLiuYue(liuNianIndex, birthMonth, lunarHourIndex, pMonth);
    }
    // 10. Masters
    const mingZhu = getMingZhu(mingIndex);
    const shenZhu = getShenZhu(yearZhiIndex);
    // 11. Assemble
    const palaces = [];
    for (let b = 0; b < 12; b++) {
        const stemIdx = stems[b];
        // Palace Name: Shifted so Ming is at mingIndex.
        // Logic: Name Index 0 (Life) is at mingIndex. 
        // Name Index 1 (Siblings) is at mingIndex - 1.
        // So Name Index i is at mingIndex - i.
        // Reverse: At branch b, what is Name Index?
        // b = mingIndex - i => i = mingIndex - b.
        const nameIndex = (mingIndex - b + 12) % 12;
        const pName = ZWDS_PALACE_NAMES[nameIndex];
        // Collect Major Stars
        const cellMajorStars = [];
        for (const [starName, starBranch] of Object.entries(majorStarsMap)) {
            if (starBranch === b) {
                cellMajorStars.push({
                    name: starName,
                    type: 'major',
                    // Brightness map now expects Chinese keys
                    brightness: getBrightness(starName, b)
                });
            }
        }
        // Collect Minor Stars
        const cellMinorStars = [];
        for (const [starName, starBranch] of Object.entries(minorStarsMap)) {
            if (starBranch === b) {
                const isBad = ['擎羊', '陀羅', '火星', '鈴星', '地空', '地劫'].includes(starName);
                cellMinorStars.push({
                    name: starName,
                    type: isBad ? 'bad' : 'minor'
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
            minorStars: cellMinorStars,
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
        shenZhu
    };
};
