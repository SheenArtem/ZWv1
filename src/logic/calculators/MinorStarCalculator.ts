// Imports removed as they were unused
// Help Types
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
    // Lu Cun Position by Year Stem (Jia=0/Yin, Yi=1/Mao, etc. special mapping)
    // Mapping:
    // Gan: Jia(0) Yi(1) Bing(2) Ding(3) Wu(4) Ji(5) Geng(6) Xin(7) Ren(8) Gui(9)
    // Pos: Yin(2) Mao(3) Si(5)  Wu(6)  Si(5) Wu(6) Shen(8) You(9) Hai(11) Zi(0)
    // Notice Wu/Ji Same as Bing/Ding? Or Wu/Ji -> Si/Wu? 
    // Standard:
    // Jia->Yin(2), Yi->Mao(3), Bing/Wu->Si(5), Ding/Ji->Wu(6), Geng->Shen(8), Xin->You(9), Ren->Hai(11), Gui->Zi(0).
    const luCunMap = [2, 3, 5, 6, 5, 6, 8, 9, 11, 0];
    const luCunPos = luCunMap[yearGanIndex];
    stars['Lù Cún'] = luCunPos; // 祿存
    stars['Qíng Yáng'] = (luCunPos + 1) % 12; // 擎羊 (Lu + 1)
    stars['Tuó Luó'] = (luCunPos - 1 + 12) % 12; // 陀羅 (Lu - 1)

    // 2. Tian Kui, Tian Yue (Year Gan)
    // Kui (Yang Noble), Yue (Yin Noble)
    // Jia/Wu/Geng -> Chou(1)/Wei(7). Jia/Wu/Geng: Kui=1, Yue=7. (Wait, differ by source)
    // Standard:
    // Jia/Wu/Geng: Chou(1), Wei(7).
    // Bing/Ding: Hai(11), You(9). 
    // Yi/Ji: Zi(0), Shen(8).
    // Xin: Wu(6), Yin(2).
    // Ren/Gui: Mao(3), Si(5).
    // Let's implement specific map.
    // Gan: 0(Jia),1(Yi),2(Bing),3(Ding),4(Wu),5(Ji),6(Geng),7(Xin),8(Ren),9(Gui)
    // Kui: 1, 0, 11, 11, 1, 0, 1, 6, 3, 3
    // Yue: 7, 8, 9, 9, 7, 8, 7, 2, 5, 5
    // Note: There are variations (Jia/Wu/Geng vs Jia/Wu Geng). Using standard ZWDS.
    // Correct verse: "甲戊庚牛羊" (Jia Wu Geng, Ox/Goat). Ox=Chou(1), Goat=Wei(7).
    // "乙己鼠猴鄉" (Yi Ji, Rat/Monkey). Rat=Zi(0), Monkey=Shen(8).
    // "丙丁豬雞位" (Bing Ding, Pig/Chicken). Pig=Hai(11), Chicken=You(9).
    // "壬癸兔蛇藏" (Ren Gui, Rabbit/Snake). Rabbit=Mao(3), Snake=Si(5).
    // "六辛逢虎馬" (Six Xin, Tiger/Horse). Tiger=Yin(2), Horse=Wu(6).
    // Where Kui is usually the first, Yue the second.
    // Actually, Yang Noble = Kui, Yin Noble = Yue.
    const kuiMap = [1, 0, 11, 11, 1, 0, 1, 6, 3, 3];
    const yueMap = [7, 8, 9, 9, 7, 8, 7, 2, 5, 5];
    stars['Tiān Kuí'] = kuiMap[yearGanIndex]; // 天鉞
    stars['Tiān Yuè'] = yueMap[yearGanIndex]; // 天魁 (Wait, usually Kui is 1st)
    // Swap names? "Tiān Kuí" (Tian Kui) is usually at the first position in verse?
    // Actually "Jia Wu Geng Niu Yang". Niu(Chou) is Kui. Yang(Wei) is Yue. Correct.

    // 3. Zuo Fu, You Bi (Lunar Month)
    // Month 1 -> Chen(4). Left is CW, Right is CCW?
    // Zuo Fu (Left): From Chen(4), Month count CW. (Month 1 = Chen) -> 4 + (M-1)
    // You Bi (Right): From Xu(10), Month count CCW. (Month 1 = Xu) -> 10 - (M-1)
    stars['Zuǒ Fǔ'] = (4 + (lunarMonth - 1)) % 12; // 左輔
    stars['Yòu Bì'] = (10 - (lunarMonth - 1) + 12) % 12; // 右弼

    // 4. Wen Chang, Wen Qu (Birth Hour)
    // From Xu(10) and Chen(4).
    // Wen Chang: From Xu(10), CCW by Hour (Zi=0). Hour 0(Zi) -> Xu.
    // Wen Qu: From Chen(4), CW by Hour. Hour 0(Zi) -> Chen.
    // Note: Hour Index 0=Zi.
    stars['Wén Chāng'] = (10 - lunarHourIndex + 12) % 12; // 文昌
    stars['Wén Qǔ'] = (4 + lunarHourIndex) % 12; // 文曲

    // 5. Huo Xing, Ling Xing (Year Branch + Hour)
    // Need start pos based on Year Branch (Zi/Chou...)
    //寅午戌 (Tiger/Horse/Dog) -> Start: Chou(1) / Mao(3)
    //申子辰 (Monkey/Rat/Dragon) -> Start: Yin(2) / Xu(10)
    //巳酉丑 (Snake/Rooster/Ox) -> Start: Mao(3) / Xu(10)
    //亥卯未 (Pig/Rabbit/Goat) -> Start: You(9) / Xu(10)
    // Huo Xing: CW from Start. Ling Xing: CW from Start? Or CCW/Special?
    // Standard: Both CW from their respective starts.
    // Let's simplified map by Year Branch Mod 4?
    // Groups:
    // 0: Shen(8), Zi(0), Chen(4) -> Water Frame. Start Huo=Yin(2), Ling=Xu(10).
    // 1: Yin(2), Wu(6), Xu(10) -> Fire Frame. Start Huo=Chou(1), Ling=Mao(3).
    // 2: Si(5), You(9), Chou(1) -> Metal Frame. Start Huo=Mao(3), Ling=Xu(10).
    // 3: Hai(11), Mao(3), Wei(7) -> Wood Frame. Start Huo=You(9), Ling=Xu(10).
    let huoStart = 0, lingStart = 0;

    // Helpers
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

    stars['Huǒ Xīng'] = (huoStart + lunarHourIndex) % 12; // 火星
    stars['Líng Xīng'] = (lingStart + lunarHourIndex) % 12; // 鈴星

    // 6. Di Kong, Di Jie (Birth Hour)
    // From Hai(11).
    // Jie: CW from Hai. (Zi = 0). Hour 0 -> Hai + 0 = Hai. (Wait formula usually 1-based?)
    // Let's use standard:
    // Hour Zi(0): Jie@Hai(11), Kong@Hai(11).
    // Hour Chou(1): Jie@Zi(0), Kong@Xu(10).
    // Formula:
    // Jie = (11 + Hour) % 12
    // Kong = (11 - Hour + 12) % 12
    stars['Dì Jié'] = (11 + lunarHourIndex) % 12; // 地劫
    stars['Dì Kōng'] = (11 - lunarHourIndex + 12) % 12; // 地空

    // 7. Tian Ma (Year Branch)
    // San He Frame opposite corner?
    // Yin/Wu/Xu -> Shen(8)
    // Shen/Zi/Chen -> Yin(2)
    // Si/You/Chou -> Hai(11)
    // Hai/Mao/Wei -> Si(5)
    if (isIn([2, 6, 10], yearZhiIndex)) stars['Tiān Mǎ'] = 8;
    else if (isIn([8, 0, 4], yearZhiIndex)) stars['Tiān Mǎ'] = 2;
    else if (isIn([5, 9, 1], yearZhiIndex)) stars['Tiān Mǎ'] = 11;
    else stars['Tiān Mǎ'] = 5;

    return stars;
};
