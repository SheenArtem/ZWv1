export interface AnalysisResult {
    lifePalace: PalaceAnalysis;
    wealthPalace?: PalaceAnalysis;
    careerPalace?: PalaceAnalysis;
    travelPalace?: PalaceAnalysis;
    // Add other palaces as needed
    summary: string[];
}

export interface PalaceAnalysis {
    palaceName: string;
    majorStars: StarAnalysis[];
    minorStars: StarAnalysis[];
    siHua: StarAnalysis[]; // Descriptions of Si Hua effects
    gods: StarAnalysis[]; // Twelve Gods analysis
    overallComment: string;
}

export interface StarAnalysis {
    starName: string;
    brightness: string;
    description: string;
    keywords: string[];
}

export interface StarRule {
    key: string; // e.g., "ZiWei_Life", "ZiWei_Wu_Life"
    conditions: {
        palace?: string; // e.g., "Life"
        brightness?: string[]; // e.g., ["Miao", "Wang"]
        withStars?: string[]; // e.g., ["TianFu"]
    };
    content: {
        summary: string;
        description: string;
        keywords: string[];
    };
}

export type StarRuleMap = Record<string, StarRule>;
