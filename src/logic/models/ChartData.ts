export type StarBrightness = 'Miao' | 'Wang' | 'De' | 'Li' | 'Ping' | 'Bu' | 'Xian';

export interface Star {
    name: string;
    type: 'major' | 'minor' | 'bad' | 'good' | 'aux';
    brightness?: string; // 廟, 旺...
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

    // New Masters
    mingZhu?: string;
    shenZhu?: string;
}
