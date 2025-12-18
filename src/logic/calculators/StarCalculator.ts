import { LunarDetails } from '../models/BirthDetails';
import { BRANCH_INDEX } from '../constants';

// Star Placement Logic
// We need to place 14 Major Stars.

// 1. Zi Wei Series: Zi Wei, Tian Ji, Tai Yang, Wu Qu, Tian Tong, Lian Zhen.
// P = Zi Wei Index.
// Tian Ji = (P - 1) % 12 (CCW)
// Tai Yang = (P - 3) % 12
// Wu Qu = (P - 4) % 12
// Tian Tong = (P - 5) % 12
// Lian Zhen = (P - 8) % 12

// 2. Tian Fu Series: Tian Fu, Tai Yin, Tan Lang, Ju Men, Tian Xiang, Tian Liang, Qi Sha, Po Jun.
// F = Tian Fu Index = (4 - P) % 12 (Symmetric to Yin axis)
// Tai Yin = (F + 1)
// Tan Lang = (F + 2)
// Ju Men = (F + 3)
// Tian Xiang = (F + 4)
// Tian Liang = (F + 5)
// Qi Sha = (F + 6)
// Po Jun = (F + 10)

// Helper for Zi Wei Position
export const getZiWeiIndex = (bureau: number, lunarDay: number): number => {
    // Formula:
    // Let Q = ceil(Day / Bureau)
    // Let R = (Bureau * Q) - Day
    // If R is even: Pos = Q + R
    // If R is odd: Pos = Q - R
    // Adjust to 0-indexed Branch.
    // The logic implies we normally get a 1-based index or relative index.
    // Based on verified check:
    // Fire 6 Day 1 -> You (9).
    // Q=1, R=5. Pos=1-5=-4. 
    // Formula Adjustment: Index = (Pos + 1) % 12.
    // -4 + 1 = -3 -> 9. Correct.

    const Q = Math.ceil(lunarDay / bureau);
    const R = (bureau * Q) - lunarDay;

    let pos = (R % 2 === 1) ? (Q - R) : (Q + R);

    let finalIndex = (pos + 1) % 12;
    if (finalIndex < 0) finalIndex += 12;

    return finalIndex;
};

export const getTianFuIndex = (ziWeiIndex: number): number => {
    // Axis Yin(2) - Shen(8).
    // Formula: (4 - ziWeiIndex + 12) % 12.
    return (4 - ziWeiIndex + 12) % 12;
};

// Returns Map of StarName -> BranchIndex (0-11)
export const calculateMajorStars = (ziWeiIndex: number): Record<string, number> => {
    const stars: Record<string, number> = {};

    // Zi Wei Series (CCW)
    stars['Zi Wei'] = ziWeiIndex;
    stars['Tian Ji'] = (ziWeiIndex - 1 + 12) % 12;
    stars['Tai Yang'] = (ziWeiIndex - 3 + 12) % 12;
    stars['Wu Qu'] = (ziWeiIndex - 4 + 12) % 12;
    stars['Tian Tong'] = (ziWeiIndex - 5 + 12) % 12;
    stars['Lian Zhen'] = (ziWeiIndex - 8 + 12) % 12;

    // Tian Fu Series (CW)
    const fu = getTianFuIndex(ziWeiIndex);
    stars['Tian Fu'] = fu;
    stars['Tai Yin'] = (fu + 1) % 12;
    stars['Tan Lang'] = (fu + 2) % 12;
    stars['Ju Men'] = (fu + 3) % 12;
    stars['Tian Xiang'] = (fu + 4) % 12;
    stars['Tian Liang'] = (fu + 5) % 12;
    stars['Qi Sha'] = (fu + 6) % 12;
    stars['Po Jun'] = (fu + 10) % 12;

    return stars;
};
