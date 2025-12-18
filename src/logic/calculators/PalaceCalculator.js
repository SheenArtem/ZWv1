import { EARTHLY_BRANCHES } from '../constants';
// Yin is index 2 in 0-indexed array (Zi=0, Chou=1, Yin=2)
const YIN_INDEX = 2;
export const calculatePalaces = (lunar) => {
    const month = lunar.lunarMonth; // 1-12
    // We assume lunar.timeZhi is the Branch Name. We need its index.
    // We need to robustly map timeZhi to number.
    // Let's assume input is valid.
    const branchMap = {};
    EARTHLY_BRANCHES.forEach((b, i) => branchMap[b] = i);
    // Also support chinese characters if lunar-javascript returns them
    const chineseBranches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
    chineseBranches.forEach((b, i) => branchMap[b] = i);
    const hourIndex = branchMap[lunar.timeZhi];
    // Ming Formula: Yin(2) + Month - 1 (since month starts at 1) - Hour + 1 (?? check formula)
    // Standard: Start at Yin. Count Month steps CW. (Yin is 1).
    // Pos = YinIndex + (Month - 1)
    // Then Count Hour steps CCW. (Zi is 1).
    // Pos = Pos - (HourIndex) 
    // Wait, let's normalize.
    // Formula: Index = ( (YinIndex + (Month - 1)) - (HourIndex) ) % 12
    // If negative, +12.
    // Let's verify with an example: 
    // Month 1 (Yin), Hour 1 (Zi). 
    // Ming should be at Yin?
    // Yin + 0 - 0 = Yin. Correct.
    let mingPos = (YIN_INDEX + (month - 1) - hourIndex) % 12;
    if (mingPos < 0)
        mingPos += 12;
    // Shen Formula: Start at Yin. Count Month steps CW. Then Hour steps CW.
    // Pos = YinIndex + (Month - 1) + HourIndex
    let shenPos = (YIN_INDEX + (month - 1) + hourIndex) % 12;
    // Now determine the branche for each of the 12 palaces.
    // The palaces are fixed in order (Life, Siblings...) but they rotate relative to the branches?
    // No, the Palaces (Life, etc) are assigned to branches based on Ming.
    // But usually we say "The Life Palace is at [Branch]".
    // So if Ming is at Yin, Life Palace is at Yin.
    // Then the next palace (Siblings) is at... CCW or CW?
    // Palaces are arranged Counter-Clockwise on the board.
    // Life -> Siblings -> Spouse -> Children...
    // So if Life is at Index M, Siblings is at M-1.
    // Wait, standard chart direction:
    // Layout is usually fixed branches:
    // Si   Wu   Wei   Shen
    // Chen            You
    // Mao             Xu
    // Yin  Chou Zi    Hai
    // Palaces fill these slots CCW.
    // Life (Ming) is at some Branch X.
    // Siblings (Xiong Di) is at X-1 (CCW).
    // We will return an array of 12 numbers representing the Branch Index for each Palace [Life, Siblings, ...]
    const palaceBranches = [];
    for (let i = 0; i < 12; i++) {
        // CCW decrement
        let branch = (mingPos - i) % 12;
        if (branch < 0)
            branch += 12;
        palaceBranches.push(branch);
    }
    // But wait, the return type should probably map Palace Name -> Branch Name/Index?
    // Let's return the simplified structure first.
    return {
        mingIndex: mingPos,
        shenIndex: shenPos,
        palaces: palaceBranches.map(idx => EARTHLY_BRANCHES[idx] || chineseBranches[idx]) // Return simple debug strings for now
    };
};
