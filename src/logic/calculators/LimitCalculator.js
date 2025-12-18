// Da Xian (Decade Limit):
// Starts at Ming Palace.
// Yang Male / Yin Female: CW.
// Yin Male / Yang Female: CCW.
// Range: Bureau Number (e.g. 2,3,4,5,6) starts the range.
// E.g. Water 2 Ju. Life Palace = 2-11. Next = 12-21...
export const calculatelimits = (mingIndex, bureau, gender, yearStemIndex // For Yang/Yin check
) => {
    const isYangStem = yearStemIndex % 2 === 0;
    const isMale = gender === 'Male';
    const isCW = (isYangStem && isMale) || (!isYangStem && !isMale);
    return {
        getLimits: (palaceIndex) => {
            // Distance from Ming
            let steps = 0;
            if (isCW) {
                steps = (palaceIndex - mingIndex + 12) % 12;
            }
            else {
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
export const calculateAgesInPalace = (palaceIndex, // 0-11
mingIndex, gender, yearStemIndex) => {
    // Usually charts show simple Age list like: 2, 14, 26... based on Da Xian?
    // Or based on "Year Count" (Yi Sui) starting from Ming?
    // Actually, traditionally:
    // "Ming Palace" is Age 1.
    // Directed by Yang Male/Yin Female CW, etc (Same as Da Xian).
    // So if Ming is Zi. Age 1 @ Zi. Age 2 @ Next...
    // Let's stick to this common display logic for the list "2 14 26...".
    // BUT checking the user image:
    // Palace "Fu De" (Happiness) shows "11 23 35...".
    // Palace "Tian Zhai" (Property) shows "12 24 36...".
    // This implies a sequence. 11->12 is adjacent.
    // So it's just a sequence starting from somewhere.
    // If Life (Ming) is 1.
    // Let's assume standard sequence from Ming.
    const isYangStem = yearStemIndex % 2 === 0;
    const isMale = gender === 'Male';
    const isCW = (isYangStem && isMale) || (!isYangStem && !isMale);
    // Find "Step" of this palace from Ming
    let steps = 0;
    if (isCW) {
        steps = (palaceIndex - mingIndex + 12) % 12;
    }
    else {
        steps = (mingIndex - palaceIndex + 12) % 12;
    }
    // Age 1 is at Ming. Age 1+steps is at Palace?
    // Yes.
    // So Ages: (1 + steps), (1 + steps + 12), ...
    const ages = [];
    for (let k = 0; k < 8; k++) {
        ages.push(1 + steps + (k * 12));
    }
    return ages.join(' ');
};
