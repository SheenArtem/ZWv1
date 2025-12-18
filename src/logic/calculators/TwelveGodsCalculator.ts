export const CHANG_SHENG_12 = [
    'Zhǎng Shēng', 'Mù Yù', 'Guān Dài', 'Lín Guān', 'Dì Wàng',
    'Shuāi', 'Bìng', 'Sǐ', 'Mù', 'Jué', 'Tāi', 'Yǎng'
    // 長生, 沐浴, 冠帶, 臨官, 帝旺, 衰, 病, 死, 墓, 絕, 胎, 養
];

export const BO_SHI_12 = [
    'Bó Shì', 'Lì Shì', 'Qīng Lóng', 'Xiǎo Hào', 'Jiāng Jūn', 'Zòu Shū',
    'Fēi Lián', 'Xǐ Shén', 'Bìng Fú', 'Dà Hào', 'Fú Bīng', 'Guān Fǔ'
    // 博士, 力士, 青龍, 小耗, 將軍, 奏書, 飛廉, 喜神, 病符, 大耗, 伏兵, 官府
];

// Sui Jian (Year) 12 Gods
export const SUI_JIAN_12 = [
    'Suì Jiàn', 'Huì Qì', 'Sàng Mén', 'Guàn Suǒ', 'Guān Fú', 'Xiǎo Hào',
    'Dà Hào', 'Lóng Dé', 'Bái Hǔ', 'Tiān Dé', 'Diào Kè', 'Bìng Fú'
    // 歲建, 晦氣, 喪門, 貫索, 官符, 小耗, 大耗, 龍德, 白虎, 天德, 弔客, 病符
];

export const calculateTwelveGods = (
    bureau: number,
    gender: 'Male' | 'Female', // Not used for placement start, but direction?
    // Chang Sheng usually starts at Five Element Bureau Life Position.
    // Water/Earth: Shen(8). Wood: Hai(11). Metal: Si(5). Fire: Yin(2).
    // Direction: Yang Male/Yin Female CW? No, Chang Sheng usually follows Gender/Stem.
    // Actually, Chang Sheng 12 Gods depend on the Bureau (Wu Xing Ju).
    // AND the direction depends on Gender vs Year Stem (Yang/Yin).
    stemIndex: number, // Year Stem for Yang/Yin check
    luCunIndex: number, // For Bo Shi start
    yearBranchIndex: number // For Sui Jian start
) => {
    // 1. Chang Sheng Start
    let startBranch = 0;
    // Bureau: 2=Water, 3=Wood, 4=Metal, 5=Earth, 6=Fire
    // Note: My Bureau enum in FiveElements is just number.
    // But conventionally:
    // Water(2) -> Shen(8)
    // Wood(3) -> Hai(11)
    // Metal(4) -> Si(5)
    // Fire(6) -> Yin(2)
    // Earth(5) -> Shen(8) (Same as Water)
    switch (bureau) {
        case 2: startBranch = 8; break;
        case 3: startBranch = 11; break;
        case 4: startBranch = 5; break;
        case 6: startBranch = 2; break;
        case 5: startBranch = 8; break;
    }

    // Direction:
    // Yang Stem (0,2,4,6,8) + Male -> CW
    // Yang Stem + Female -> CCW
    // Yin Stem (1,3,5,7,9) + Female -> CW
    // Yin Stem + Male -> CCW
    // Gender: Male/Female. Stem: Even=Yang, Odd=Yin.
    const isYangStem = stemIndex % 2 === 0;
    const isMale = gender === 'Male';
    const isCW = (isYangStem && isMale) || (!isYangStem && !isMale);

    // 2. Bo Shi Start
    // Starts at Lu Cun Palace.
    // Direction: Yang Male/Yin Female CW. Yin Male/Yang Female CCW. (Same as Chang Sheng?)
    const isBoShiCW = isCW;

    // 3. Sui Jian Start
    // Starts at Year Branch. Always CW.

    return {
        getGods: (palaceBranch: number) => {
            // Chang Sheng
            // Steps from startBranch
            let steps = 0;
            if (isCW) {
                steps = (palaceBranch - startBranch + 12) % 12;
            } else {
                steps = (startBranch - palaceBranch + 12) % 12;
            }
            const cs = CHANG_SHENG_12[steps];

            // Bo Shi
            let bSteps = 0;
            if (isBoShiCW) {
                bSteps = (palaceBranch - luCunIndex + 12) % 12;
            } else {
                bSteps = (luCunIndex - palaceBranch + 12) % 12;
            }
            const bs = BO_SHI_12[bSteps];

            // Sui Jian
            // Always CW from Year Branch
            const sSteps = (palaceBranch - yearBranchIndex + 12) % 12;
            const sj = SUI_JIAN_12[sSteps];

            return {
                changSheng: cs,
                boShi: bs,
                suiJian: sj
            };
        }
    };
};
