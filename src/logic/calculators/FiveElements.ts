// Na Yin lookup or formula
// Element: 2=Water, 3=Wood, 4=Metal, 5=Earth, 6=Fire

// Mapping (StemIndex, BranchIndex) -> Bureau Number
// Note: StemIndex 0-9, BranchIndex 0-11
// But Na Yin is usually per pair.
// We only need this for the Ming Palace to determine the Ju (Bureau).

export const getBureau = (stemIdx: number, branchIdx: number): number => {
    // Simplified logic or lookup table for Na Yin Five Elements
    // 30 Na Yin mapped to 5 elements.

    // Method:
    // (Stem + Branch) / 2 ... there are formulas.
    // Let's use a compact lookup.
    // Groups of Branhes: (Zi, Chou), (Yin, Mao), (Chen, Si)... have same element for same Stem pair?
    // Actually, Na Yin is:
    // JiaZi/YiChou -> Sea Gold (Metal 4) ... wait

    // Let's implement a verified map.
    // Stems: Jia(0) Yi(1) ...
    // Branches: Zi(0) Chou(1) ...

    // Pairs:
    // 0,0 (JiaZi) & 1,1 (YiChou) -> Gold (4)
    // 2,2 (BingYin) & 3,3 (DingMao) -> Fire (6)
    // ...

    // Key = (StemIdx / 2) integer part (0-4)
    // Key2 = (BranchIdx / 2) integer part (0-5)
    // There is a pattern.

    // Let's use a flat string Map for reliability in this context if the formula is complex.
    // Or a small matrix.

    // Rows: Stem Pair (JiaYi=0, BingDing=1, WuJi=2, GengXin=3, RenGui=4)
    // Cols: Branch Pair (ZiChou=0, YinMao=1, ChenSi=2, WuWei=3, ShenYou=4, XuHai=5)
    // Values: 2,3,4,5,6

    // Matrix:
    //      ZiChou YinMao ChenSi WuWei ShenYou XuHai
    // JiaYi  4(M)   2(W)   6(F)   4(M)    2(W)    6(F)  -> 4,2,6, 4,2,6 ? No.
    // Wait, JiaZi(Gold), JiaYin(Water), JiaChen(Fire), JiaWu(Gold), JiaShen(Water), JiaXu(Fire).
    // Pattern: 4, 2, 6 repeats?
    // Let's check BingZi(Water 2).
    // Bing(1) row:
    // BingZi (Water 2), BingYin (Fire 6), BingChen (Earth 5), BingWu (Water 2), BingShen (Fire 6), BingXu (Earth 5).
    // Pattern: 2, 6, 5.

    // Wu(2) row:
    // WuZi (Fire 6), WuYin (Earth 5), WuChen (Wood 3), WuWu (Fire 6), WuShen (Earth 5), WuXu (Wood 3).
    // Pattern: 6, 5, 3.

    // Geng(3) row:
    // GengZi (Earth 5), GengYin (Wood 3), GengChen (Metal 4), GengWu (Earth 5), GengShen (Wood 3), GengXu (Metal 4).
    // Pattern: 5, 3, 4.

    // Ren(4) row:
    // RenZi (Wood 3), RenYin (Metal 4), RenChen (Water 2), RenWu (Wood 3), RenShen (Metal 4), RenXu (Water 2).
    // Pattern: 3, 4, 2.

    const matrix = [
        [4, 2, 6], // Jia/Yi
        [2, 6, 5], // Bing/Ding
        [6, 5, 3], // Wu/Ji
        [5, 3, 4], // Geng/Xin
        [3, 4, 2]  // Ren/Gui
    ];

    // Note: Columns repeat every 3 pairs? (0,1,2, then 0,1,2)
    // ZiChou(0) -> Col 0
    // YinMao(1) -> Col 1
    // ChenSi(2) -> Col 2
    // WuWei(3) -> Col 0
    // ShenYou(4) -> Col 1
    // XuHai(5) -> Col 2

    const row = Math.floor(stemIdx / 2);
    const col = Math.floor(branchIdx / 2) % 3;

    return matrix[row][col];
};
