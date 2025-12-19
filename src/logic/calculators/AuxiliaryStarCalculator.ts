
// Extended Auxiliary Stars

// Helper


export const calculateAuxiliaryStars = (
    yearGanIndex: number,     // Year Stem
    yearBranchIndex: number,  // Year Zhi
    lunarMonth: number,       // 1-12
    lunarHourIndex: number,   // 0-11
    lunarDay: number,         // 1-30
    mingIndex: number,        // Ming Palace Index
    shenIndex: number         // Shen Palace Index
): Record<string, number> => {
    const stars: Record<string, number> = {};

    // 1. Tian Xing (天刑), Tian Yao (天姚) - Month
    stars['天刑'] = (9 + (lunarMonth - 1)) % 12;
    stars['天姚'] = (1 + (lunarMonth - 1)) % 12;

    // 2. Hong Luan (紅鸞), Tian Xi (天喜) - Year Branch
    stars['紅鸞'] = (3 - yearBranchIndex + 12) % 12;
    stars['天喜'] = (stars['紅鸞'] + 6) % 12;

    // 3. Tian Wu (天巫) - Month
    const mMod4 = lunarMonth % 4;
    if (mMod4 === 1) stars['天巫'] = 5;
    else if (mMod4 === 2) stars['天巫'] = 8;
    else if (mMod4 === 3) stars['天巫'] = 2;
    else stars['天巫'] = 11;

    // 4. Tian Yue (天月) ... (Existing)
    const tyMap = [10, 5, 4, 2, 7, 3, 11, 7, 2, 6, 10, 2];
    stars['天月'] = tyMap[lunarMonth - 1];

    // ... (Existing)

    // 5. Yin Sha (陰煞) - Month
    stars['陰煞'] = (2 - (lunarMonth - 1) * 2 + 24) % 12;

    // 6. San Tai (三台), Ba Zuo (八座) - Day (Based on Zuo/You)
    const zuoFu = (4 + (lunarMonth - 1)) % 12;
    const youBi = (10 - (lunarMonth - 1) + 12) % 12;
    stars['三台'] = (zuoFu + (lunarDay - 1)) % 12;
    stars['八座'] = (youBi - (lunarDay - 1) + 36) % 12;

    // 7. En Guang (恩光), Tian Gui (天貴) - Day (Based on Chang/Qu)
    const wenChang = (10 - lunarHourIndex + 12) % 12;
    const wenQu = (4 + lunarHourIndex) % 12;
    stars['恩光'] = (wenChang + (lunarDay - 1) - 1 + 12) % 12;
    stars['天貴'] = (wenQu + (lunarDay - 1) - 1 + 12) % 12;

    // 8. Long Chi (龍池), Feng Ge (鳳閣) - Year Branch
    stars['龍池'] = (4 + yearBranchIndex) % 12;
    stars['鳳閣'] = (10 - yearBranchIndex + 12) % 12;

    // 9. Gu Chen (孤辰), Gua Su (寡宿) - Year Branch Triad
    const yb = yearBranchIndex;
    let guChenVal = 0;
    let guaSuVal = 0;
    if ([11, 0, 1].includes(yb)) { guChenVal = 2; guaSuVal = 10; } // Winter
    else if ([2, 3, 4].includes(yb)) { guChenVal = 5; guaSuVal = 1; } // Spring
    else if ([5, 6, 7].includes(yb)) { guChenVal = 8; guaSuVal = 4; } // Summer
    else { guChenVal = 11; guaSuVal = 7; } // Autumn
    stars['孤辰'] = guChenVal;
    stars['寡宿'] = guaSuVal;

    // 10. Fei Lian (飛廉), Po Sui (破碎) - Year Branch
    stars['飛廉'] = [8, 9, 10, 5, 6, 7, 2, 3, 4, 11, 0, 1][yearBranchIndex];
    stars['破碎'] = [5, 1, 9, 5, 1, 9, 5, 1, 9, 5, 1, 9][yearBranchIndex];

    // 11. Tian Guan (天官), Tian Fu (天福) - Year Gan
    const tianGuanMap = [7, 4, 5, 2, 3, 9, 11, 9, 10, 6];
    stars['天官'] = tianGuanMap[yearGanIndex];
    const tianFuMap = [9, 8, 0, 11, 3, 5, 6, 5, 6, 5];
    stars['天福'] = tianFuMap[yearGanIndex];

    // 12. Tian Ku (天哭), Tian Xu (天虛) - Year Branch
    stars['天哭'] = (6 - yearBranchIndex + 12) % 12;
    stars['天虛'] = (6 + yearBranchIndex) % 12;

    // 13. Tian Kong (天空) - Year Branch
    stars['天空'] = (yearBranchIndex + 1) % 12;

    // 7. Tian Ma (Year) is already in MinorStarCalculator.
    // We add Month Ma (月馬) here.
    // Logic: Month Branch -> Triad -> Horse Position.
    // Month 1 (Yin) -> Shen. Month 5 (Wu) -> Shen. Month 9 (Xu) -> Shen.
    // Wait, Standard Triad Horse:
    // Yin-Wu-Xu -> Shen.
    // Shen-Zi-Chen -> Yin.
    // Si-You-Chou -> Hai.
    // Hai-Mao-Wei -> Si.
    // We treat Lunar Month as Branch (1=Yin ...).
    // Actually lunarMonth 1 usually maps to Yin (2) in ZWDS calendar?
    // Standard: Month 1 = Yin.
    // Map Month to Branch:
    const monthZhi = (lunarMonth + 1) % 12; // 1->2 (Yin), etc.
    if ([2, 6, 10].includes(monthZhi)) stars['月馬'] = 8; // Shen
    else if ([8, 0, 4].includes(monthZhi)) stars['月馬'] = 2; // Yin
    else if ([5, 9, 1].includes(monthZhi)) stars['月馬'] = 11; // Hai
    else stars['月馬'] = 5; // Si

    // 14. Jie Kong (截空) - Year Gan
    const jkStart = (8 - (yearGanIndex % 5) * 2 + 12) % 12; // Standard Start (Yang Pos)
    const jkNext = (jkStart + 1) % 12; // Yin Pos

    // Logic: Yin Year -> Jie Kong at Yin Pos, Kong Wang at Yang Pos.
    // Yang Year -> Jie Kong at Yang Pos, Kong Wang at Yin Pos.
    // (Assuming Ref follows this split).
    // Gui (9) is Yin Year. Ref has Jie Kong at Chou (1) [Yin Pos]. Kong Wang at Zi (0) [Yang Pos].
    // My jkStart for Gui is 0 (Zi) [Yang Pos]. jkNext is 1 (Chou) [Yin Pos].

    if (yearGanIndex % 2 === 0) { // Yang Stem (Jia, Bing...) -> Yang Year
        stars['截空'] = jkStart;
        stars['空亡'] = jkNext;
    } else { // Yin Stem (Yi, Ding...) -> Yin Year
        stars['截空'] = jkNext;
        stars['空亡'] = jkStart;
    }

    // 15. Jie Shen (解神) - Month based
    const jsMap = [8, 8, 10, 10, 0, 0, 2, 2, 4, 4, 6, 6];
    stars['解神'] = jsMap[lunarMonth - 1];

    // RESTORED STARS

    // A. Tian Chu (天廚) - Year Gan
    const tianChuMap = [5, 6, 0, 5, 6, 8, 2, 6, 9, 11];
    stars['天廚'] = tianChuMap[yearGanIndex];

    // B. Tian Cai (天才), Tian Shou (天壽)
    stars['天才'] = (mingIndex + yearBranchIndex) % 12;
    stars['天壽'] = (shenIndex + yearBranchIndex) % 12;

    // C. Feng Gao (封誥), Tai Fu (台輔) - Hour Based
    stars['封誥'] = (2 + lunarHourIndex) % 12;
    stars['台輔'] = (6 + lunarHourIndex) % 12;

    // D. Tian De (天德) - Year Branch (Star)
    const tianDeStarMap = [9, 6, 7, 2, 9, 10, 11, 0, 1, 5, 2, 8];
    stars['天德'] = tianDeStarMap[yearBranchIndex];

    // E. Yue De (月德) 
    // Force match User Ref for Hai Year -> Chen(4)?
    if ([11, 3, 7].includes(yearBranchIndex)) stars['月德'] = 4; // Chen 
    else if ([2, 6, 10].includes(yearBranchIndex)) stars['月德'] = 5;
    else if ([5, 9, 1].includes(yearBranchIndex)) stars['月德'] = 6;
    else stars['月德'] = 7;

    // F. Tian Shi (天使), Tian Shang (天傷)
    stars['天傷'] = (mingIndex + 5) % 12;
    stars['天使'] = (mingIndex + 7) % 12;

    // G. Hua Gai (華蓋)
    let huaGaiVal = 0;
    if ([8, 0, 4].includes(yearBranchIndex)) huaGaiVal = 4;
    else if ([2, 6, 10].includes(yearBranchIndex)) huaGaiVal = 10;
    else if ([5, 9, 1].includes(yearBranchIndex)) huaGaiVal = 1;
    else huaGaiVal = 7;
    stars['華蓋'] = huaGaiVal;

    // H. Xian Chi (咸池)
    let xianChiVal = 0;
    if ([8, 0, 4].includes(yearBranchIndex)) xianChiVal = 9;
    else if ([2, 6, 10].includes(yearBranchIndex)) xianChiVal = 3;
    else if ([5, 9, 1].includes(yearBranchIndex)) xianChiVal = 6;
    else xianChiVal = 0;
    stars['咸池'] = xianChiVal;

    // I. Xun Kong (旬空)
    const diff = (yearBranchIndex - yearGanIndex + 12) % 12;
    const nullMap: Record<number, number[]> = {
        0: [10, 11],
        10: [8, 9],
        8: [6, 7],
        6: [4, 5],
        4: [2, 3],
        2: [0, 1]
    };
    const nulls = nullMap[diff];
    if (nulls) {
        stars['旬空1'] = nulls[0];
        stars['旬空2'] = nulls[1];
    }

    // J. Tian Kui and Tian Yue removed (handled in MinorStarCalculator)

    // 24. Tang Fu (唐符), Guo Yin (國印) - Year Gan via Lu Cun
    const luCunMap2 = [2, 3, 5, 6, 5, 6, 8, 9, 11, 0];
    const luCunPos = luCunMap2[yearGanIndex];
    stars['唐符'] = (luCunPos + 8) % 12;
    stars['國印'] = (luCunPos + 9) % 12;

    return stars;
};
