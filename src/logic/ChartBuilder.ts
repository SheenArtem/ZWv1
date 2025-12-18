import { BirthDetails } from './models/BirthDetails';
import { ChartData, PalaceData } from './models/ChartData';
import { convertToLunar } from './converters/LunarConverter';
import { calculatePalaces } from './calculators/PalaceCalculator';
import { getPalaceStemIndices } from './calculators/SexagenaryCalculator';
import { getBureau } from './calculators/FiveElements';
import { getZiWeiIndex, calculateMajorStars } from './calculators/StarCalculator';
import { calculateLiuNian, calculateLiuYue } from './calculators/TimeCalculator';
import { HEAVENLY_STEMS, EARTHLY_BRANCHES, ZWDS_PALACE_NAMES } from './constants';
import { Solar } from 'lunar-javascript';

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

    // 4. Determine Ming Palace Stem and Branch
    const mingStemIndex = stems[mingIndex];
    const mingBranchIndex = mingIndex;

    // 5. Determine Bureau (Ju)
    const bureau = getBureau(mingStemIndex, mingBranchIndex);

    // 6. Star Placement
    const ziWeiIndex = getZiWeiIndex(bureau, lunar.lunarDay);
    const starsMap = calculateMajorStars(ziWeiIndex);

    // 7. Calculate Liu Nian / Liu Yue
    let liuNianIndex: number | undefined;
    let liuYueIndex: number | undefined;

    if (predictionDate) {
        const pSolar = Solar.fromDate(predictionDate);
        const pLunar = pSolar.getLunar();

        // Liu Nian: Year Branch
        const pYear = pLunar.getYear();
        let pBranchIndex = (pYear - 4) % 12;
        if (pBranchIndex < 0) pBranchIndex += 12;

        liuNianIndex = calculateLiuNian(pBranchIndex);

        // Liu Yue: Needs Birth Month, Birth Hour, Prediction Month
        const birthMonth = lunar.lunarMonth;
        const birthHourIndex = Math.floor((input.hour + 1) / 2) % 12;
        const pMonth = Math.abs(pLunar.getMonth());

        liuYueIndex = calculateLiuYue(liuNianIndex, birthMonth, birthHourIndex, pMonth);
    }

    // 8. Assemble Palaces
    const palaces: PalaceData[] = [];

    for (let b = 0; b < 12; b++) {
        const stemIdx = stems[b];
        const nameIndex = (mingIndex - b + 12) % 12;
        const pName = ZWDS_PALACE_NAMES[nameIndex];

        const cellStars: string[] = [];
        for (const [starName, starBranch] of Object.entries(starsMap)) {
            if (starBranch === b) {
                cellStars.push(starName);
            }
        }

        palaces.push({
            branchIndex: b,
            branchName: EARTHLY_BRANCHES[b],
            stemIndex: stemIdx,
            stemName: HEAVENLY_STEMS[stemIdx],
            palaceName: pName,
            majorStars: cellStars
        });
    }

    return {
        bureau,
        palaces,
        liuNianIndex,
        liuYueIndex
    };
};
