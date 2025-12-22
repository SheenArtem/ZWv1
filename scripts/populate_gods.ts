import fs from 'fs';
import path from 'path';

const GODS_JSON = path.resolve('src/data/interpretations/stars/gods.json');
const TARGET_GODS_TS = path.resolve('src/logic/analysis/db/gods.ts');

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

const GOD_MAP: Record<string, string> = {
    '長生': 'ChangSheng',
    '沐浴': 'MuYu',
    '冠帶': 'GuanDai',
    '臨官': 'LinGuan',
    '帝旺': 'DiWang',
    '衰': 'Shuai',
    '病': 'Bing',
    '死': 'Si',
    '墓': 'Mu',
    '絕': 'Jue',
    '胎': 'Tai',
    '養': 'Yang'
};

const main = () => {
    const rawData = fs.readFileSync(GODS_JSON, 'utf-8');
    const godsData = JSON.parse(rawData);

    const entries: string[] = [];

    for (const [godName, palaceData] of Object.entries(godsData)) {
        let godKey = GOD_MAP[godName];

        if (!godKey) {
            console.warn(`Warning: unmapped god ${godName}`);
            continue;
        }

        for (const [palaceName, content] of Object.entries(palaceData as any)) {
            const palaceKey = PALACE_MAP[palaceName];
            if (!palaceKey) continue;

            const ruleKey = `${godKey}_${palaceKey}`;
            const entry = `    "${ruleKey}": {
        key: "${ruleKey}",
        conditions: { withStars: ["${godName}"], palace: "${palaceName}" },
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

export const gods: StarRuleMap = {
${entries.join(',\n')}
};
`;

    fs.writeFileSync(TARGET_GODS_TS, fileContent, 'utf-8');
    console.log(`Generated ${entries.length} God rules in ${TARGET_GODS_TS}`);
};

main();
