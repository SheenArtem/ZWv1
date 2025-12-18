import { BirthDetails } from './models/BirthDetails';
import { ChartData, PalaceData } from './models/ChartData';
import { convertToLunar } from './converters/LunarConverter';
import { calculatePalaces } from './calculators/PalaceCalculator';
import { getPalaceStemIndices } from './calculators/SexagenaryCalculator';
import { getBureau } from './calculators/FiveElements';
import { getZiWeiIndex, calculateMajorStars } from './calculators/StarCalculator';
import { HEAVENLY_STEMS, EARTHLY_BRANCHES, ZWDS_PALACE_NAMES } from './constants';

export const generateChart = (input: BirthDetails): ChartData => {
    // 1. Convert to Lunar
    const lunar = convertToLunar(input);

    // 2. Palace Positions
    // Returns mingIndex, etc.
    const { mingIndex } = calculatePalaces(lunar);

    // 3. Palace Stems
    // Need Year Stem Index.
    // lunar.ganZhiYear is string like "JiaChen".
    // We can parse or rely on lunar-javascript yearGan index if available.
    // Or map first char.
    const yearGanChar = lunar.ganZhiYear.substring(0, 1);
    // Simple map check (assuming Chinese chars)
    const GAN_CHARS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
    let yearGanIndex = GAN_CHARS.indexOf(yearGanChar);
    if (yearGanIndex === -1) {
        // Fallback if library returns pinyin (unlikely based on default usage)
        // Or just calculate from year number?
        // (Year - 4) % 10 = index? (1984 is JiaZi). 1984 - 4 = 1980 % 10 = 0.
        // Yes, (Year - 4) % 10 works for standard Gregorian.
        // But verify with Lunar year (roughly same).
        yearGanIndex = (lunar.lunarYear - 4) % 10;
        if (yearGanIndex < 0) yearGanIndex += 10;
    }

    const stems = getPalaceStemIndices(yearGanIndex);

    // 4. Determine Ming Palace Stem and Branch
    const mingStemIndex = stems[mingIndex];
    const mingBranchIndex = mingIndex; // Ming is at this branch

    // 5. Determine Bureau (Ju)
    const bureau = getBureau(mingStemIndex, mingBranchIndex);

    // 6. Star Placement
    const ziWeiIndex = getZiWeiIndex(bureau, lunar.lunarDay);
    const starsMap = calculateMajorStars(ziWeiIndex);

    // 7. Assemble Palaces
    const palaces: PalaceData[] = [];

    // We need to map ZWDS_PALACE_NAMES to the specific branches based on Ming.
    // Ming is at 'mingIndex'. Its name is 'Life'.
    // Proceed CCW for names: Life, Siblings, Spouse...
    // So Palace at mingIndex is Life.
    // Palace at (mingIndex - 1) is Siblings.

    // But we want to return array for Zi, Chou, Yin... usually for UI grid?
    // UI Grid is usually fixed layout: Zi, Chou...
    // So we assume the returned array `palaces` is indexed by Branch Index 0..11 (Zi..Hai).

    for (let b = 0; b < 12; b++) {
        const stemIdx = stems[b];

        // Determine Palace Name
        // Ming is at mingIndex.
        // Distance CCW from Ming determines name.
        // Steps = (mingIndex - b + 12) % 12.
        // If b == mingIndex, steps=0 -> Name=ZWDS_PALACE_NAMES[0] (Life)
        // If b == mingIndex - 1, steps=1 -> Name=ZWDS_PALACE_NAMES[1] (Siblings)
        const nameIndex = (mingIndex - b + 12) % 12;
        const pName = ZWDS_PALACE_NAMES[nameIndex];

        // Find stars in this branch
        const cellStars: string[] = [];
        for (const [starName, starBranch] of Object.entries(starsMap)) {
            if (starBranch === b) {
                cellStars.push(starName);
            }
        }

        palaces.push({
            branchIndex: b,
            branchName: EARTHLY_BRANCHES[b], // Returns Pinyin or we can use mapping to Chinese
            stemIndex: stemIdx,
            stemName: HEAVENLY_STEMS[stemIdx],
            palaceName: pName,
            majorStars: cellStars
        });
    }

    return {
        bureau,
        palaces
    };
};
