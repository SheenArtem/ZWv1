export const CHANG_SHENG_12 = [
    '長生', '沐浴', '冠帶', '臨官', '帝旺', '衰', '病', '死', '墓', '絕', '胎', '養'
];

export const BO_SHI_12 = [
    '博士', '力士', '青龍', '小耗', '將軍', '奏書', '飛廉', '喜神', '病符', '大耗', '伏兵', '官府'
];

export const SUI_JIAN_12 = [
    '歲建', '晦氣', '喪門', '貫索', '官符', '小耗', '大耗', '龍德', '白虎', '天德', '弔客', '病符'
];

export const JIANG_QIAN_12 = [
    '將星', '攀鞍', '歲驛', '息神', '華蓋', '劫煞', '災煞', '天煞', '指背', '咸池', '月煞', '亡神'
];

export const calculateTwelveGods = (
    bureau: number,
    gender: 'Male' | 'Female',
    stemIndex: number,
    luCunIndex: number,
    yearBranchIndex: number
) => {
    // 1. Chang Sheng Start
    let startBranch = 0;
    // Bureau: 2=Water, 3=Wood, 4=Metal, 5=Earth, 6=Fire
    switch (bureau) {
        case 2: startBranch = 8; break; // Water -> Shen
        case 3: startBranch = 11; break; // Wood -> Hai
        case 4: startBranch = 5; break; // Metal -> Si
        case 6: startBranch = 2; break; // Fire -> Yin
        case 5: startBranch = 8; break; // Earth -> Shen (Water-Earth Co-palace)
    }

    // Direction:
    const isYangStem = stemIndex % 2 === 0;
    const isMale = gender === 'Male';
    const isCW = (isYangStem && isMale) || (!isYangStem && !isMale);

    // 2. Bo Shi Start
    const isBoShiCW = isCW;

    return {
        getGods: (palaceBranch: number) => {
            // Chang Sheng
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
            const sSteps = (palaceBranch - yearBranchIndex + 12) % 12;
            const sj = SUI_JIAN_12[sSteps];

            // Jiang Qian
            // Find Jiang Xing Position (Triad leader)
            // Shen-Zi-Chen (8,0,4) -> Zi(0)
            // Si-You-Chou (5,9,1) -> You(9)
            // Hai-Mao-Wei (11,3,7) -> Mao(3)
            // Yin-Wu-Xu (2,6,10) -> Wu(6)
            let jiangXingPos = 0;
            const yb = yearBranchIndex;
            if ([8, 0, 4].includes(yb)) jiangXingPos = 0;
            else if ([5, 9, 1].includes(yb)) jiangXingPos = 9;
            else if ([11, 3, 7].includes(yb)) jiangXingPos = 3;
            else jiangXingPos = 6;

            const jqSteps = (palaceBranch - jiangXingPos + 12) % 12;
            const jq = JIANG_QIAN_12[jqSteps];

            return {
                changSheng: cs,
                boShi: bs,
                suiJian: sj,
                jiangQian: jq
            };
        }
    };
};
