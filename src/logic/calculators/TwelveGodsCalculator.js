export const CHANG_SHENG_12 = [
    '長生', '沐浴', '冠帶', '臨官', '帝旺', '衰', '病', '死', '墓', '絕', '胎', '養'
];
export const BO_SHI_12 = [
    '博士', '力士', '青龍', '小耗', '將軍', '奏書', '飛廉', '喜神', '病符', '大耗', '伏兵', '官府'
];
export const SUI_JIAN_12 = [
    '歲建', '晦氣', '喪門', '貫索', '官符', '小耗', '大耗', '龍德', '白虎', '天德', '弔客', '病符'
];
export const calculateTwelveGods = (bureau, gender, stemIndex, luCunIndex, yearBranchIndex) => {
    // 1. Chang Sheng Start
    let startBranch = 0;
    // Bureau: 2=Water, 3=Wood, 4=Metal, 5=Earth, 6=Fire
    switch (bureau) {
        case 2:
            startBranch = 8;
            break; // Water -> Shen
        case 3:
            startBranch = 11;
            break; // Wood -> Hai
        case 4:
            startBranch = 5;
            break; // Metal -> Si
        case 6:
            startBranch = 2;
            break; // Fire -> Yin
        case 5:
            startBranch = 8;
            break; // Earth -> Shen (Water-Earth Co-palace)
    }
    // Direction:
    const isYangStem = stemIndex % 2 === 0;
    const isMale = gender === 'Male';
    const isCW = (isYangStem && isMale) || (!isYangStem && !isMale);
    // 2. Bo Shi Start
    const isBoShiCW = isCW;
    return {
        getGods: (palaceBranch) => {
            // Chang Sheng
            let steps = 0;
            if (isCW) {
                steps = (palaceBranch - startBranch + 12) % 12;
            }
            else {
                steps = (startBranch - palaceBranch + 12) % 12;
            }
            const cs = CHANG_SHENG_12[steps];
            // Bo Shi
            let bSteps = 0;
            if (isBoShiCW) {
                bSteps = (palaceBranch - luCunIndex + 12) % 12;
            }
            else {
                bSteps = (luCunIndex - palaceBranch + 12) % 12;
            }
            const bs = BO_SHI_12[bSteps];
            // Sui Jian
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
