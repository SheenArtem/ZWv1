export type StarBrightness = 'Miao' | 'Wang' | 'De' | 'Li' | 'Ping' | 'Bu' | 'Xian';
export type StarMutagen = 'Lu' | 'Quan' | 'Ke' | 'Ji'; // 祿, 權, 科, 忌

export interface Star {
    name: string;
    type: 'major' | 'minor' | 'bad' | 'good' | 'aux';
    brightness?: string; // 廟, 旺...
    mutagen?: StarMutagen; // Si Hua (Birth)
    liuNianMutagen?: StarMutagen; // Si Hua (Liu Nian)
    liuYueMutagen?: StarMutagen; // Si Hua (Liu Yue)
}

export interface TwelveGods {
    changSheng: string;
    boShi: string;
    suiJian: string;
}

export interface PalaceData {
    branchIndex: number;
    branchName: string;
    stemIndex: number;
    stemName: string;
    palaceName: string;
    majorStars: Star[];
    minorStars: Star[];
    gods: TwelveGods;
    daXian: string;
    xiaoXian: string;
}

export interface ChartData {
    bureau: number;
    palaces: PalaceData[];
    liuNianIndex?: number;
    liuYueIndex?: number;
    mingZhu?: string;
    shenZhu?: string;
    siHuaSummary?: string;      // Birth Year Si Hua
    liuNianSiHuaSummary?: string; // Prediction Year Si Hua
    liuYueSiHuaSummary?: string;  // Prediction Month Si Hua

    // Display Info
    birthDate?: string;
    lunarDate?: string;
    baZi?: string;
    zodiac?: string;

    // Prediction Display Info
    predictionDate?: string;
    predictionLunarDate?: string;
    predictionGanZhi?: string;
    liuNianDateRange?: string;
    liuYueDateRange?: string;
}
