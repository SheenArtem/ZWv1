import fs from 'fs';
import path from 'path';

const MISC_JSON = path.resolve('src/data/interpretations/stars/misc.json');
const TARGET_MISC_TS = path.resolve('src/logic/analysis/db/miscStars.ts');

const PALACE_MAP: Record<string, string> = {
    '命宮': 'Life',
    '兄弟宮': 'Siblings',
    '夫妻宮': 'Spouse',
    '子女宮': 'Children',
    '財帛宮': 'Wealth',
    '疾厄宮': 'Health',
    '遷移宮': 'Travel',
    '交友宮': 'Friends',
    '官祿宮': 'Career',
    '田宅宮': 'Property',
    '福德宮': 'Karma',
    '父母宮': 'Parents'
};

// Unlike major stars, we don't have a strict english mapping, so we might need to rely on the Chinese name or generate pinyin
// However, the interpreter relies on STAR_MAP.
// We must update STAR_MAP in Interpreter.ts to include these new stars if we want them to work.
// For now, let's generate the TS file using Chinese keys or Pinyin if we can map them.
// Let's check which stars are in misc.json first.
const STAR_MAP: Record<string, string> = {
    '天官': 'TianGuan',
    '天福': 'TianFu_Misc', // ambiguous with Major TianFu? No, Major is TianFu. Let's call this TianFu_Aux
    '天廚': 'TianChu',
    '天哭': 'TianKu',
    '天虛': 'TianXu',
    '華蓋': 'HuaGai',
    '咸池': 'XianChi',
    '台輔': 'TaiFu',
    '封誥': 'FengGao',
    '紅鸞': 'HongLuan',
    '天喜': 'TianXi',
    '孤辰': 'GuChen',
    '寡宿': 'GuaSu',
    '三台': 'SanTai',
    '八座': 'BaZuo',
    '龍池': 'LongChi',
    '鳳閣': 'FengGe',
    '天才': 'TianCai',
    '天壽': 'TianShou',
    '恩光': 'EnGuang',
    '天貴': 'TianGui',
    '天刑': 'TianXing',
    '天姚': 'TianYao',
    '解神': 'JieShen',
    '天巫': 'TianWu',
    '天月': 'TianYue_Misc', // Ambiguous with TianYue (aux)? Yes.
    '陰煞': 'YinSha',
    '蜚廉': 'FeiLian',
    '破碎': 'PoSui',
    '截空': 'JieKong',
    '旬空': 'XunKong',
    '天空': 'TianKong',
    '天傷': 'TianShang',
    '天使': 'TianShi'
};

const main = () => {
    const rawData = fs.readFileSync(MISC_JSON, 'utf-8');
    const miscData = JSON.parse(rawData);

    const entries: string[] = [];

    // Structure: Star -> Palace -> Content
    for (const [starName, starData] of Object.entries(miscData)) {
        let starKey = STAR_MAP[starName];

        // Fallback for unmapped stars: Use Pinyin or placeholder? 
        // Better to skip or log warning for now to avoid broken keys
        if (!starKey) {
            console.warn(`Warning: unmapped star ${starName}`);
            continue;
        }

        for (const [palaceName, content] of Object.entries(starData as any)) {
            const palaceKey = PALACE_MAP[palaceName];
            if (!palaceKey) continue;

            const ruleKey = `${starKey}_${palaceKey}`;
            const entry = `    "${ruleKey}": {
        key: "${ruleKey}",
        conditions: { withStars: ["${starName}"], palace: "${palaceName}" },
        content: {
            summary: "${(content as any).summary}",
            description: "${(content as any).description}",
            keywords: ${JSON.stringify((content as any).keywords || [])}
        }
    }`;
            entries.push(entry);
        }
    }

    const fileContent = `import { StarRuleMap } from '../models';

export const miscStars: StarRuleMap = {
${entries.join(',\n')}
};
`;

    fs.writeFileSync(TARGET_MISC_TS, fileContent, 'utf-8');
    console.log(`Generated ${entries.length} Misc Star rules in ${TARGET_MISC_TS}`);
};

main();
