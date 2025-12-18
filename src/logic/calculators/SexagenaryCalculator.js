// HEAVENLY_STEMS unused
// Returns the Stem index (0-9) for the Yin palace (index 2 in Branch array)
// based on the Year Stem index (0-9).
export const getYinPalaceStemIndex = (yearStemIndex) => {
    // Wu Hu Dun (Five Tigers Chasing Month)
    // Jia(0)/Ji(5) -> Bing(2) Yin
    // Yi(1)/Geng(6) -> Wu(4) Yin
    // ...
    const i = yearStemIndex % 5;
    return (i * 2 + 2) % 10;
};
// Returns array of 12 Stem indices for Branches [Zi, Chou, Yin, ...]
// Note: We need to fill them correctly.
// The sequence starts at Yin (Index 2).
export const getPalaceStemIndices = (yearStemIndex) => {
    const yinStem = getYinPalaceStemIndex(yearStemIndex);
    const stems = new Array(12).fill(0);
    // Fill from Yin (2) to Hai (11)
    for (let b = 2; b < 12; b++) {
        const offset = b - 2;
        stems[b] = (yinStem + offset) % 10;
    }
    // Fill Zi (0) and Chou (1) - they continue from Hai
    // Hai is at offset 9 from Yin. So Zi is offset 10, Chou is 11.
    stems[0] = (yinStem + 10) % 10;
    stems[1] = (yinStem + 11) % 10;
    return stems;
};
