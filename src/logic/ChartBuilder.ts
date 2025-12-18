import { BirthDetails } from './models/BirthDetails';
import { ChartData, PalaceData, Star } from './models/ChartData';
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

export const generateChart = (input: BirthDetails, predictionDate?: Date): ChartData => {
    // 1. Convert to Lunar
    const lunar = convertToLunar(input);

    // 2. Palace Positions
    const { mingIndex } = calculatePalaces(lunar);

    // 3. Palace Stems
    const yearGanChar = lunar.ganZhiYear.substring(0, 1);
    const GAN_CHARS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
    let yearGanIndex = GAN_CHARS.indexOf(yearGanChar);
    if (yearGanIndex === -1) {
        yearGanIndex = (lunar.lunarYear - 4) % 10;
        if (yearGanIndex < 0) yearGanIndex += 10;
    }

    const stems = getPalaceStemIndices(yearGanIndex);

    // 4. Ming Stem/Branch
    const mingStemIndex = stems[mingIndex];
    // const mingBranchIndex = mingIndex;

    // 5. Bureau
    const bureau = getBureau(mingStemIndex, mingIndex);

    // 6. Major Stars
    const ziWeiIndex = getZiWeiIndex(bureau, lunar.lunarDay);
    const majorStarsMap = calculateMajorStars(ziWeiIndex);

    // 7. Minor Stars
    // Need Year Branch Index.
    // lunar.ganZhiYear "JiaChen" -> Chen=4.
    // (Year-4)%12.
    let yearZhiIndex = (lunar.lunarYear - 4) % 12;
    if (yearZhiIndex < 0) yearZhiIndex += 12;

    // We need Lunar Hour Index (0-11)
    const lunarHourIndex = Math.floor((input.hour + 1) / 2) % 12;

    const minorStarsMap = calculateMinorStars(yearGanIndex, lunar.lunarMonth, lunarHourIndex, yearZhiIndex);

    // 8. Twelve Gods Setup
    const godsCalc = calculateTwelveGods(
        bureau,
        input.gender,
        yearGanIndex,
        minorStarsMap['Lù Cún'] || 0, // Lu Cun Pos
        yearZhiIndex
    );

    // 9. Limits (Da Xian / Xiao Xian) Setup
    const limitsCalc = calculatelimits(mingIndex, bureau, input.gender, yearGanIndex);

    // 10. Prediction
    let liuNianIndex: number | undefined;
    let liuYueIndex: number | undefined;

    if (predictionDate) {
        const pSolar = Solar.fromDate(predictionDate);
        const pLunar = pSolar.getLunar();
        const pYear = pLunar.getYear();
        let pBranchIndex = (pYear - 4) % 12;
        if (pBranchIndex < 0) pBranchIndex += 12;

        liuNianIndex = calculateLiuNian(pBranchIndex);

        // Liu Yue
        const birthMonth = lunar.lunarMonth;
        const pMonth = Math.abs(pLunar.getMonth());
        liuYueIndex = calculateLiuYue(liuNianIndex, birthMonth, lunarHourIndex, pMonth);
    }

    // 11. Assemble Palaces
    const palaces: PalaceData[] = [];

    for (let b = 0; b < 12; b++) {
        const stemIdx = stems[b];
        const nameIndex = (mingIndex - b + 12) % 12;
        const pName = ZWDS_PALACE_NAMES[nameIndex];

        // Collect Major Stars
        const cellMajorStars: Star[] = [];
        for (const [starName, starBranch] of Object.entries(majorStarsMap)) {
            if (starBranch === b) {
                cellMajorStars.push({
                    name: starName,
                    type: 'major',
                    brightness: getBrightness(starName, b)
                });
            }
        }

        // Collect Minor Stars
        const cellMinorStars: Star[] = [];
        for (const [starName, starBranch] of Object.entries(minorStarsMap)) {
            if (starBranch === b) {
                // Determine type (good/bad/aux) strictly?
                // Simplified: 'minor' for now.
                // Special coloring logic in UI can handle 'bad' stars (Sha).
                // List of Sha: Qing Yang, Tuo Luo, Huo Xing, Ling Xing, Di Kong, Di Jie.
                const isBad = ['Qíng Yáng', 'Tuó Luó', 'Huǒ Xīng', 'Líng Xīng', 'Dì Kōng', 'Dì Jié'].includes(starName);
                cellMinorStars.push({
                    name: starName,
                    type: isBad ? 'bad' : 'minor'
                });
            }
        }

        // Gods
        const gods = godsCalc.getGods(b);

        // Limits
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
            xiaoXian: ages // Using the age sequence string
        });
    }

    return {
        bureau,
        palaces,
        liuNianIndex,
        liuYueIndex
    };
};
