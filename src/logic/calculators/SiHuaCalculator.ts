// Si Hua (Four Transformations) Logic
// Returns a Map of StarName -> Mutagen ('Lu', 'Quan', 'Ke', 'Ji')

import { StarMutagen } from '../models/ChartData';

// Table for Si Hua based on Year Stem (0=Jia ... 9=Gui)
// Format: [Lu, Quan, Ke, Ji] Star Names
const SI_HUA_TABLE: string[][] = [
    ['廉貞', '破軍', '武曲', '太陽'], // Jia (0)
    ['天機', '天梁', '紫微', '太陰'], // Yi (1)
    ['天同', '天機', '文昌', '廉貞'], // Bing (2)
    ['太陰', '天同', '天機', '巨門'], // Ding (3)
    ['貪狼', '太陰', '右弼', '天機'], // Wu (4)
    ['武曲', '貪狼', '天梁', '文曲'], // Ji (5)
    ['太陽', '武曲', '太陰', '天同'], // Geng (6)
    ['巨門', '太陽', '文曲', '文昌'], // Xin (7)
    ['天梁', '紫微', '左輔', '武曲'], // Ren (8)
    ['破軍', '巨門', '太陰', '貪狼'], // Gui (9)
];

export const calculateSiHua = (yearGanIndex: number): Record<string, StarMutagen> => {
    const row = SI_HUA_TABLE[yearGanIndex];
    if (!row) return {};

    return {
        [row[0]]: 'Lu',   // 祿
        [row[1]]: 'Quan', // 權
        [row[2]]: 'Ke',   // 科
        [row[3]]: 'Ji'    // 忌
    };
};
