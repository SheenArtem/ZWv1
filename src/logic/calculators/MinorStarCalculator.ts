// Help Types
// (Removed unused BranchIndex)

// Helper for reuse (Decade/Year stars)
export const calculateLuYangTuoKuiYue = (stemIndex: number) => {
    const stars: Record<string, number> = {};

    // 1. Lucun, Qingyang, Tuoluo (Gan)
    // Mapping: Jia(0)->Yin(2)...
    const luCunMap = [2, 3, 5, 6, 5, 6, 8, 9, 11, 0];
    const luCunPos = luCunMap[stemIndex];
    stars['祿存'] = luCunPos;
    stars['擎羊'] = (luCunPos + 1) % 12;
    stars['陀羅'] = (luCunPos - 1 + 12) % 12;

    // 2. Tian Kui, Tian Yue (Gan)
    const kuiMap = [1, 0, 11, 11, 1, 0, 1, 6, 3, 3];
    const yueMap = [7, 8, 9, 9, 7, 8, 7, 2, 5, 5];
    stars['天魁'] = kuiMap[stemIndex];
    stars['天鉞'] = yueMap[stemIndex];

    return stars;
};

export const calculateMinorStars = (
    yearGanIndex: number,
    lunarMonth: number,
    lunarHourIndex: number,
    yearZhiIndex: number
): Record<string, number> => {
    const stars: Record<string, number> = {};

    // 1 & 2. Lu Yang Tuo Kui Yue
    const baseStars = calculateLuYangTuoKuiYue(yearGanIndex);
    Object.assign(stars, baseStars);

    // 3. Zuo Fu, You Bi (Lunar Month)
    stars['左輔'] = (4 + (lunarMonth - 1)) % 12;
    stars['右弼'] = (10 - (lunarMonth - 1) + 12) % 12;

    // 4. Wen Chang, Wen Qu (Birth Hour)
    stars['文昌'] = (10 - lunarHourIndex + 12) % 12;
    stars['文曲'] = (4 + lunarHourIndex) % 12;

    // 5. Huo Xing, Ling Xing (Year Branch + Hour)
    let huoStart = 0, lingStart = 0;
    const isIn = (arr: number[], val: number) => arr.includes(val);

    if (isIn([2, 6, 10], yearZhiIndex)) { // Yin Wu Xu
        huoStart = 1; lingStart = 3;
    } else if (isIn([8, 0, 4], yearZhiIndex)) { // Shen Zi Chen
        huoStart = 2; lingStart = 10;
    } else if (isIn([5, 9, 1], yearZhiIndex)) { // Si You Chou
        huoStart = 3; lingStart = 10;
    } else { // Hai Mao Wei
        huoStart = 9; lingStart = 10;
    }

    stars['火星'] = (huoStart + lunarHourIndex) % 12;
    stars['鈴星'] = (lingStart + lunarHourIndex) % 12;

    // 6. Di Kong, Di Jie (Birth Hour)
    stars['地劫'] = (11 + lunarHourIndex) % 12;
    stars['地空'] = (11 - lunarHourIndex + 12) % 12;

    // 7. Tian Ma (Year Branch)
    if (isIn([2, 6, 10], yearZhiIndex)) stars['天馬'] = 8;
    else if (isIn([8, 0, 4], yearZhiIndex)) stars['天馬'] = 2;
    else if (isIn([5, 9, 1], yearZhiIndex)) stars['天馬'] = 11;
    else stars['天馬'] = 5;

    return stars;
};
