// Liu Nian is simply the palace corresponding to the Year Branch.
// The Year Branch here is the CURRENT PREDICTION YEAR, not birth year.
// E.g. Predicting for 2024 (Jia Chen) -> Liu Nian is at Chen Palace.
// Note: This assumes the "Chen Palace" in the grid (Fixed Position 4).
export const calculateLiuNian = (subBranchIndex: number): number => {
    return subBranchIndex;
};

// Liu Yue (Current Month)
// Classic Method: "Dou Jun" (Bureau Commander/Leader)
// 1. Locate Yearly Dou Jun.
//    Start at Year Branch (Liu Nian).
//    Count CCW to Birth Month.
//    Count CW to Birth Hour.
//    This is Month 1.
// 2. Count CW to Target Month.
export const calculateLiuYue = (
    liuNianIndex: number,   // Current Year Branch Index
    birthMonth: number,     // Lunar Birth Month (1-12)
    birthHourIndex: number, // Lunar Birth Hour Branch Index (0-11)
    targetMonth: number     // Targeted Lunar Month (1-12)
): number => {
    // Step 1: Find Dou Jun (Month 1)
    // Formula: Year - (Month - 1) + Hour
    let douJun = (liuNianIndex - (birthMonth - 1) + birthHourIndex) % 12;
    if (douJun < 0) douJun += 12;

    // Step 2: Target Month Position
    const liuYue = (douJun + (targetMonth - 1)) % 12;

    return liuYue;
};
