export interface InterpretationContent {
    summary: string;
    description: string;
    keywords: string[];
}

export type StarName = string;
export type PalaceName = string;

// Structure for any Star that has Palace-based interpretations
// (Used for Major Stars and Auxiliary Stars)
export interface StarPalaceInterpretation {
    [palaceName: string]: InterpretationContent;
}

export interface StarDatabase {
    [starName: string]: StarPalaceInterpretation;
}

// Structure for SiHua (Contextualized by Transformation Type)
export type SiHuaType = 'Lu' | 'Quan' | 'Ke' | 'Ji';

// SiHua specific content can have general description + palace specifics
export interface SiHuaContent extends InterpretationContent {
    palaces?: StarPalaceInterpretation;
}

export type SiHuaContext = {
    [type in SiHuaType]?: SiHuaContent;
};


export interface SiHuaDatabase {
    [starName: string]: SiHuaContext;
}
