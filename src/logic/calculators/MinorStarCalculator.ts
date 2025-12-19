// Help Types
// (Removed unused BranchIndex)

export const calculateMinorStars = (
    yearGanIndex: number,
    lunarMonth: number,
    lunarHourIndex: number,
    yearZhiIndex: number
): Record<string, number> => {
    const stars: Record<string, number> = {};

    // 1. Lucun, Qingyang, Tuoluo (Year Gan)
    // Mapping: Jia(0)->Yin(2)...
    const luCunMap = [2, 3, 5, 6, 5, 6, 8, 9, 11, 0];
    const luCunPos = luCunMap[yearGanIndex];
    stars['祿存'] = luCunPos;
    stars['擎羊'] = (luCunPos + 1) % 12;
    stars['陀羅'] = (luCunPos - 1 + 12) % 12;

    // 2. Tian Kui, Tian Yue (Year Gan)
    // Kui=1,0,11,11,1,0,1,6,3,3
    // Yue=7,8,9,9,7,8,7,2,5,5
    const kuiMap = [1, 0, 11, 11, 1, 0, 1, 6, 3, 3];
    const yueMap = [7, 8, 9, 9, 7, 8, 7, 2, 5, 5];
    stars['天魁'] = kuiMap[yearGanIndex];
    stars['天鉞'] = yueMap[yearGanIndex];
    // Wait, previous file had Kui=yueMap? 
    // "Jia Wu Geng Niu(Chou) Yang(Wei)". 
    // Standard: Gui Ren (Noble): Day Noble (Kui), Night Noble (Yue).
    // Jia: Chou(1) is Kui? Wei(7) is Yue?
    // Let's stick to standard names relative to positions.
    // Revised map from previous step:
    // kuiMap = [1...] which is Chou. So that's Kui.

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
