export type StarBrightness = 'Miao' | 'Wang' | 'De' | 'Li' | 'Ping' | 'Bu' | 'Xian';

export interface Star {
    name: string;
    type: 'major' | 'minor' | 'bad' | 'good' | 'aux';
    brightness?: string; // Should map to Chinese: 廟, 旺, 得, 利, 平, 不, 陷
}

export interface TwelveGods {
    changSheng: string; // Chang Sheng 12
    boShi: string;      // Bo Shi 12
    suiJian: string;    // Sui Jian 12
}

export interface PalaceData {
    branchIndex: number;
    branchName: string;
    stemIndex: number;
    stemName: string;
    palaceName: string;

    majorStars: Star[]; // Main 14 stars
    minorStars: Star[]; // Ji, Sha, Auxiliary

    gods: TwelveGods;

    daXian: string; // "2-11"
    xiaoXian: string; // "1" (Age)
}

export interface ChartData {
    bureau: number; // 2,3,4,5,6
    palaces: PalaceData[];
    liuNianIndex?: number;
    liuYueIndex?: number;
}
