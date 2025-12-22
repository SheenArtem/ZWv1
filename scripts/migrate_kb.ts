import fs from 'fs';
import path from 'path';

// Mappings for Keys
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
    '父母宮': 'Parents',
    // Body/Shen might be handled differently, focusing on 12 fixed
};

const STAR_MAP: Record<string, string> = {
    // 14 Major
    '紫微': 'ZiWei', '天機': 'TianJi', '太陽': 'TaiYang', '武曲': 'WuQu',
    '天同': 'TianTong', '廉貞': 'LianZhen', '天府': 'TianFu', '太陰': 'TaiYin',
    '貪狼': 'TanLang', '巨門': 'JuMen', '天相': 'TianXiang', '天梁': 'TianLiang',
    '七殺': 'QiSha', '破軍': 'PoJun',
    // Minor / Aux
    '左輔': 'ZuoFu', '右弼': 'YouBi',
    '文昌': 'WenChang', '文曲': 'WenQu',
    '天魁': 'TianKui', '天鉞': 'TianYue',
    '擎羊': 'QingYang', '陀羅': 'TuoLuo',
    '火星': 'HuoXing', '鈴星': 'LingXing',
    '地空': 'DiKong', '地劫': 'DiJie',
    '祿存': 'LuCun'
};

// const MAJOR_JSON_PATH = path.resolve('src/data/interpretations/stars/major.json');
const AUX_JSON_PATH = path.resolve('src/data/interpretations/stars/auxiliary.json');
// const TARGET_MAJOR_TS = path.resolve('src/logic/analysis/db/majorStars.ts');
const TARGET_MINOR_TS = path.resolve('src/logic/analysis/db/minorStars.ts');

const main = () => {
    // 1. Read JSON
    const raw = fs.readFileSync(AUX_JSON_PATH, 'utf-8');
    const starData = JSON.parse(raw);

    // 2. Build TS Content
    const entries: string[] = [];

    for (const [starName, palaces] of Object.entries(starData)) {
        const starKey = STAR_MAP[starName] || starName; // Fallback to Chinese if missing

        for (const [palaceName, content] of Object.entries(palaces as any)) {
            const palaceKey = PALACE_MAP[palaceName];
            if (!palaceKey) continue; // Skip unknown palaces if any

            const key = `${starKey}_${palaceKey}`;
            const summary = (content.summary || "").replace(/"/g, '\\"');
            const desc = (content.description || "").replace(/"/g, '\\"');
            const keywords = JSON.stringify(content.keywords || []);

            const entry = `    "${key}": {
        key: "${key}",
        conditions: { palace: "${palaceName}" },
        content: {
            summary: "${summary}",
            description: "${desc}",
            keywords: ${keywords}
        }
    }`;
            entries.push(entry);
        }
    }

    const fileContent = `import { StarRuleMap } from '../models';

export const minorStars: StarRuleMap = {
${entries.join(',\n')}
};
`;

    // 3. Write File
    fs.writeFileSync(TARGET_MINOR_TS, fileContent, 'utf-8');
    console.log(`Migrated ${entries.length} rules to ${TARGET_MINOR_TS}`);
};

main();
