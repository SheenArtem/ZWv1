// Star Placement Logic - Localized
// Returns Map of StarName -> BranchIndex (0-11)

export const getZiWeiIndex = (bureau: number, lunarDay: number): number => {
    // Formula:
    // Let Q = ceil(Day / Bureau)
    // Let R = (Bureau * Q) - Day
    // If R is even: Pos = Q + R
    // If R is odd: Pos = Q - R
    // Adjust to 0-indexed Branch.
    const Q = Math.ceil(lunarDay / bureau);
    const R = (bureau * Q) - lunarDay;
    let pos = (R % 2 === 1) ? (Q - R) : (Q + R);
    let finalIndex = (pos + 1) % 12;
    if (finalIndex < 0) finalIndex += 12;
    return finalIndex;
};

export const getTianFuIndex = (ziWeiIndex: number): number => {
    return (4 - ziWeiIndex + 12) % 12;
};

export const calculateMajorStars = (ziWeiIndex: number): Record<string, number> => {
    const stars: Record<string, number> = {};

    // Zi Wei Series
    stars['紫微'] = ziWeiIndex;
    stars['天機'] = (ziWeiIndex - 1 + 12) % 12;
    stars['太陽'] = (ziWeiIndex - 3 + 12) % 12;
    stars['武曲'] = (ziWeiIndex - 4 + 12) % 12;
    stars['天同'] = (ziWeiIndex - 5 + 12) % 12;
    stars['廉貞'] = (ziWeiIndex - 8 + 12) % 12;

    // Tian Fu Series
    const fu = getTianFuIndex(ziWeiIndex);
    stars['天府'] = fu;
    stars['太陰'] = (fu + 1) % 12;
    stars['貪狼'] = (fu + 2) % 12;
    stars['巨門'] = (fu + 3) % 12;
    stars['天相'] = (fu + 4) % 12;
    stars['天梁'] = (fu + 5) % 12;
    stars['七殺'] = (fu + 6) % 12;
    stars['破軍'] = (fu + 10) % 12;

    return stars;
};
