import batch1 from './batch1.json';
import batch2 from './batch2.json';
import batch3 from './batch3.json';

export interface InterpretationContent {
    summary: string;
    description: string;
    keywords: string[];
}

export interface StarInterpretation {
    [palaceName: string]: InterpretationContent;
}

import auxiliary from './auxiliary.json';
import sihua from './sihua.json';
import misc from './misc.json';
import gods from './gods.json';

export const majorStarInterpretations: Record<string, StarInterpretation> = {
    ...batch1,
    ...batch2,
    ...batch3
};

export const auxiliaryStarInterpretations = auxiliary;
export const siHuaInterpretations = sihua;
export const miscStarInterpretations = misc;
export const godsInterpretations = gods;



