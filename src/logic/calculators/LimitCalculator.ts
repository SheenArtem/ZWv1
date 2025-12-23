// Da Xian (Decade Limit):
// Starts at Ming Palace.
// Yang Male / Yin Female: CW.
// Yin Male / Yang Female: CCW.
// Range: Bureau Number (e.g. 2,3,4,5,6) starts the range.
// E.g. Water 2 Ju. Life Palace = 2-11. Next = 12-21...

export const calculatelimits = (
    mingIndex: number,
    bureau: number,
    gender: 'Male' | 'Female',
    yearStemIndex: number // For Yang/Yin check
) => {
    const isYangStem = yearStemIndex % 2 === 0;
    const isMale = gender === 'Male';
    const isCW = (isYangStem && isMale) || (!isYangStem && !isMale);

    return {
        getLimits: (palaceIndex: number) => {
            // Distance from Ming
            let steps = 0;
            if (isCW) {
                steps = (palaceIndex - mingIndex + 12) % 12;
            } else {
                steps = (mingIndex - palaceIndex + 12) % 12;
            }

            const startAge = bureau + (steps * 10);
            const endAge = startAge + 9;

            return {
                daXian: `${startAge} - ${endAge}`,
                // Xiao Xian logic is complex (starts at Chen/Xu and moves), 
                // will keep simple or placeholder for now as requested "Detailed" usually stresses Da Xian.
                // Let's defer Xiao Xian or use logic: 
                // Male: CW (or check rules). Usually 1 at Ming? No.
                // Xiao Xian is calculated yearly. On the chart usually "Age 1" position is marked?
                // Actually usually standard charts show "Small Limit" for the current year, OR
                // show the starting palace for Age 1.
                // Let's return empty string for Xiao Xian if not strictly required, 
                // BUT the reference image shows "Small Limit Year" checks (e.g. 乙巳).
                // Let's implement Age at Palace if feasible, otherwise leave for next iteration.
                // The prompt demanded comparison to image.
                // Image shows: "1 13 25 37..." in the grid.
                // This denotes "Ages" that fall into this palace.
                // This is "Yearly Age" (Sui Ci).
                // Formula: Current Age falls here?
                // Let's calculate a string of ages: "startAge, startAge+12..."
                // No, Age 1 starts at a specific palace.
                xiaoXian: ''
            };
        }
    };
};

// Xiao Xian (Small Limit) Logic
// 1. Start Palace based on Birth Year Branch (San He)
//    - Yin/Wu/Xu (2,6,10) -> Chen (4)
//    - Shen/Zi/Chen (8,0,4) -> Xu (10)
//    - Si/You/Chou (5,9,1) -> Wei (7)
//    - Hai/Mao/Wei (11,3,7) -> Chou (1)
// 2. Direction: Male CW, Female CCW.
// 3. Age 1 starts at Start Palace.

export const calculateXiaoXianStartPalace = (yearZhiIndex: number): number => {
    // Groupings
    const map: Record<number, number> = {
        2: 4, 6: 4, 10: 4, // Yin/Wu/Xu -> Chen
        8: 10, 0: 10, 4: 10, // Shen/Zi/Chen -> Xu
        5: 7, 9: 7, 1: 7, // Si/You/Chou -> Wei
        11: 1, 3: 1, 7: 1 // Hai/Mao/Wei -> Chou
    };
    return map[yearZhiIndex] ?? 0;
};

export const calculateAgesInPalace = (
    palaceIndex: number, // 0-11
    _mingIndex: number,
    gender: 'Male' | 'Female',
    _yearStemIndex: number, // Unused for Xiao Xian direction, but kept for compatibility
    yearZhiIndex: number
) => {
    // Traditional Xiao Xian Logic
    const startPalace = calculateXiaoXianStartPalace(yearZhiIndex);
    const isMale = gender === 'Male';
    // Male CW, Female CCW
    const isCW = isMale;

    // Find steps from Start Palace to Current Palace
    let steps = 0;
    if (isCW) {
        steps = (palaceIndex - startPalace + 12) % 12;
    } else {
        steps = (startPalace - palaceIndex + 12) % 12;
    }

    // Age 1 is at Start Palace.
    // Age at Current = 1 + steps.
    const startAge = 1 + steps;

    const ages = [];
    for (let k = 0; k < 8; k++) {
        const age = startAge + (k * 12);
        if (age > 120) break; // Reasonable cap
        ages.push(age);
    }
    return ages.join(' ');
};
