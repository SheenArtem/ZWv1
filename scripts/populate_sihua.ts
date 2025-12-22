import fs from 'fs';
import path from 'path';

const MAJOR_JSON = path.resolve('src/data/interpretations/stars/sihua.json');
const TARGET_SIHUA_TS = path.resolve('src/logic/analysis/db/siHua.ts');

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

const STAR_MAP: Record<string, string> = {
    '紫微': 'ZiWei', '天機': 'TianJi', '太陽': 'TaiYang', '武曲': 'WuQu',
    '天同': 'TianTong', '廉貞': 'LianZhen', '天府': 'TianFu', '太陰': 'TaiYin',
    '貪狼': 'TanLang', '巨門': 'JuMen', '天相': 'TianXiang', '天梁': 'TianLiang',
    '七殺': 'QiSha', '破軍': 'PoJun',
    '左輔': 'ZuoFu', '右弼': 'YouBi', '文昌': 'WenChang', '文曲': 'WenQu'
};

const main = () => {
    const rawData = fs.readFileSync(MAJOR_JSON, 'utf-8');
    const sihuaData = JSON.parse(rawData);

    const entries: string[] = [];

    // Structure: Star -> Mutagen -> "palaces" -> PalaceName
    for (const [starName, mutagens] of Object.entries(sihuaData)) {
        const starKey = STAR_MAP[starName];
        if (!starKey) continue; // Skip unknown stars

        for (const [mutagenType, mutagenData] of Object.entries(mutagens as any)) {
            // mutagenType is Lu, Quan, Ke, Ji
            // mutagenData has summary, description, and "palaces"

            // 1. General Star Mutagen Rule (e.g. LianZhen_Lu)
            const genericKey = `${starKey}_${mutagenType}`;
            const genericEntry = `    "${genericKey}": {
        key: "${genericKey}",
        conditions: { withStars: ["${starName}"], mutagen: "${mutagenType}" },
        content: {
            summary: "${(mutagenData as any).summary}",
            description: "${(mutagenData as any).description}",
            keywords: ${JSON.stringify((mutagenData as any).keywords || [])}
        }
    }`;
            entries.push(genericEntry);

            // 2. Palace-Specific Mutagen Rule (e.g. LianZhen_Lu_Life)
            if ((mutagenData as any).palaces) {
                for (const [palaceName, palaceData] of Object.entries((mutagenData as any).palaces)) {
                    const palaceKey = PALACE_MAP[palaceName];
                    if (!palaceKey) continue;

                    const specificKey = `${starKey}_${mutagenType}_${palaceKey}`;
                    const specificEntry = `    "${specificKey}": {
        key: "${specificKey}",
        conditions: { withStars: ["${starName}"], mutagen: "${mutagenType}", palace: "${palaceName}" },
        content: {
            summary: "${(palaceData as any).summary}",
            description: "${(palaceData as any).description}",
            keywords: ${JSON.stringify((palaceData as any).keywords || [])}
        }
    }`;
                    entries.push(specificEntry);
                }
            }
        }
    }

    const fileContent = `import { StarRuleMap } from '../models';

export const siHuaRules: StarRuleMap = {
${entries.join(',\n')}
};
`;

    fs.writeFileSync(TARGET_SIHUA_TS, fileContent, 'utf-8');
    console.log(`Generated ${entries.length} Si Hua rules in ${TARGET_SIHUA_TS}`);
};

main();
