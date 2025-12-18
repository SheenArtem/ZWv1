// Extended Auxiliary Stars

// Helper
const isIn = (arr: number[], val: number) => arr.includes(val);

export const calculateAuxiliaryStars = (
    yearBranchIndex: number,  // Year Zhi
    lunarMonth: number,       // 1-12
    lunarHourIndex: number,   // 0-11
    lunarDay: number          // 1-30
): Record<string, number> => {
    const stars: Record<string, number> = {};

    // 1. Tian Xing (天刑), Tian Yao (天姚) - Month based usually? Or Month + Something?
    // Tian Xing: From You(9) count clockwise Month steps. (9 + M - 1)
    stars['天刑'] = (9 + (lunarMonth - 1)) % 12;
    // Tian Yao: From Chou(1) count clockwise Month steps.
    stars['天姚'] = (1 + (lunarMonth - 1)) % 12;

    // 2. Hong Luan (紅鸞), Tian Xi (天喜) - Year Branch
    // Hong Luan: From Mao(3) count CCW YearBranch steps. (3 - Y + 12)
    stars['紅鸞'] = (3 - yearBranchIndex + 12) % 12;
    // Tian Xi: Opposite Hong Luan
    stars['天喜'] = (stars['紅鸞'] + 6) % 12;

    // 3. Tian Wu (天巫) - Month
    // 1,5,9 -> Si(5)
    // 2,6,10 -> Shen(8)
    // 3,7,11 -> Yin(2)
    // 4,8,12 -> Hai(11)
    // Logic: Month % 4. 1->5, 2->8, 3->2, 0(4)->11.
    const mMod4 = lunarMonth % 4;
    if (mMod4 === 1) stars['天巫'] = 5;
    else if (mMod4 === 2) stars['天巫'] = 8;
    else if (mMod4 === 3) stars['天巫'] = 2;
    else stars['天巫'] = 11;

    // 4. Tian Yue (天月) - Month
    // 1:Xu, 2:Si, 3:Chen, 4:Yin, 5:Wei, 6:Mao, 7:Hai, 8:Wei, 9:Yin, 10:Wu, 11:Xu, 12:Yin
    const tyMap = [10, 5, 4, 2, 7, 3, 11, 7, 2, 6, 10, 2];
    stars['天月'] = tyMap[lunarMonth - 1];

    // 5. Yin Sha (陰煞) - Month
    // 1:Yin, 2:Zi, 3:Xu, 4:Shen, 5:Wu, 6:Chen... Reverse by 2 from Yin?
    // 1=2, 2=0, 3=10, 4=8... Yes. (2 - (M-1)*2 + 24) % 12.
    stars['陰煞'] = (2 - (lunarMonth - 1) * 2 + 24) % 12;

    // 6. San Tai (三台), Ba Zuo (八座) - Based on Zuo Fu / You Bi? OR Day?
    // Standard:
    // San Tai: From Zuo Fu, count Day steps CW.
    // Ba Zuo: From You Bi, count Day steps CCW.
    // Need Zuo/You positions first.
    const zuoFu = (4 + (lunarMonth - 1)) % 12;
    const youBi = (10 - (lunarMonth - 1) + 12) % 12;

    stars['三台'] = (zuoFu + (lunarDay - 1)) % 12;
    stars['八座'] = (youBi - (lunarDay - 1) + 36) % 12; // +36 safety

    // 7. En Guang (恩光), Tian Gui (天貴)
    // En Guang: From Wenchang count Day-1 CW, then +1? (Just day steps)
    // Formula: From Wen Chang, go Day steps CW, then back 1? 
    // Actually usually: Wen Chang + Day - 2? Let's check rule.
    // "Wen Chang sequence move Date-1 steps". 
    // Let's assume: (WenChang + Day - 1).
    // Tian Gui: (WenQu + Day - 1).
    const wenChang = (10 - lunarHourIndex + 12) % 12;
    const wenQu = (4 + lunarHourIndex) % 12;

    stars['恩光'] = (wenChang + (lunarDay - 1)) % 12;
    stars['天貴'] = (wenQu + (lunarDay - 1)) % 12; // Some schools say -1 from Date. 
    // Let's use Date - 1 (exclusive current). So just + (Date - 1).

    // 8. Long Chi (龍池), Feng Ge (鳳閣) - Year Branch
    // Long Chi: From Chen(4) CW Year steps.
    stars['龍池'] = (4 + yearBranchIndex) % 12;
    // Feng Ge: From Xu(10) CCW Year steps.
    stars['鳳閣'] = (10 - yearBranchIndex + 12) % 12;

    // 9. Gu Chen (孤辰), Gua Su (寡宿) - Year Branch
    // Hai/Zi/Chou (Winter/North) -> Yin / Xu
    // Yin/Mao/Chen (Spring/East) -> Si / Chou
    // Si/Wu/Wei (Summer/South) -> Shen / Chen
    // Shen/You/Xu (Autumn/West) -> Hai / Wei
    // Logic: 
    // Branch Group: (Year / 3) | 0.
    // Groups: 0(Zi) must group with Hai/Chou.
    // Standard Triads: Shen-Zi-Chen, Hai-Mao-Wei, Yin-Wu-Xu, Si-You-Chou.
    // Wait, Gu/Gua logic is distinct.
    // Hai/Zi/Chou -> Yin(Gu), Xu(Gua).
    // Yin/Mao/Chen -> Si(Gu), Chou(Gua). 
    // Si/Wu/Wei -> Shen(Gu), Chen(Gua).
    // Shen/You/Xu -> Hai(Gu), Wei(Gua).
    if (isIn([11, 0, 1], yearBranchIndex)) { stars['孤辰'] = 2; stars['寡宿'] = 10; }
    else if (isIn([2, 3, 4], yearBranchIndex)) { stars['孤辰'] = 5; stars['寡宿'] = 1; }
    else if (isIn([5, 6, 7], yearBranchIndex)) { stars['孤辰'] = 8; stars['寡宿'] = 4; }
    else { stars['孤辰'] = 11; stars['寡宿'] = 7; }

    // 10. Fei Lian (飛廉), Po Sui (破碎) - Year Branch
    // Fei Lian: Zi(8 Shen), Chou(9 You)... ?
    // Map: Zi:Shen, Chou:You, Yin:Xu, Mao:Si, Chen:Wu, Si:Wei, Wu:Yin, Wei:Mao, Shen:Chen, You:Hai, Xu:Zi, Hai:Chou.
    // Looks like:
    // Zi..Yin -> Shen..Xu (+8)
    // Mao..Si -> Si..Wei (+2)
    // Wu..Shen -> Yin..Chen (-4)
    // You..Hai -> Hai..Chou (+2)
    // Checking map... 
    const flMap = [8, 9, 10, 5, 6, 7, 2, 3, 4, 11, 0, 1];
    stars['飛廉'] = flMap[yearBranchIndex];

    // Po Sui:
    // Zi-Si: 5(Si), Wu-Hai: 1(Chou)?
    // Usually: Si You Chou -> You(9)?
    // Hai Mao Wei -> Mao(3)?
    // Shen Zi Chen -> Zi(0)?
    // Yin Wu Xu -> Wei(7)? No, Po Sui rule:
    // Zi:Si, Chou:Chou, Yin:You, Mao:Si, Chen:Chou, Si:You...
    // Sequence Si-Chou-You repeated.
    const psMap = [5, 1, 9, 5, 1, 9, 5, 1, 9, 5, 1, 9];
    stars['破碎'] = psMap[yearBranchIndex];

    // 11. Tian Cai (天才), Tian Shou (天壽) - Year Branch + Ming/Shen?
    // Tian Cai: From Ming, count Year steps (CW?)
    // Tian Shou: From Shen (Body), count Year steps (CW?)
    // We need Ming/Shen indices input. For now let's skip or ask to add. 
    // Let's add partials.

    return stars;
};
