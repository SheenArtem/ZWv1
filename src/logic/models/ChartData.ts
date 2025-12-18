export interface PalaceData {
    branchIndex: number;
    branchName: string;
    stemIndex: number;
    stemName: string;
    palaceName: string; // 'Life, 'Siblings'...
    majorStars: string[];
    // Future: minor stars, si hua
}

export interface ChartData {
    bureau: number; // 2,3,4,5,6
    palaces: PalaceData[];
}
