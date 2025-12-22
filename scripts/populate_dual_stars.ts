import fs from 'fs';
import path from 'path';

const TARGET_DUAL_TS = path.resolve('src/logic/analysis/db/dualStars.ts');

const DUAL_STARS_LIST = [
    ['ZiWei', 'TianFu'], ['ZiWei', 'TanLang'], ['ZiWei', 'TianXiang'], ['ZiWei', 'QiSha'], ['ZiWei', 'PoJun'],
    ['TianJi', 'TaiYin'], ['TianJi', 'JuMen'], ['TianJi', 'TianLiang'],
    ['TaiYang', 'TaiYin'], ['TaiYang', 'JuMen'], ['TaiYang', 'TianLiang'],
    ['WuQu', 'TianFu'], ['WuQu', 'TanLang'], ['WuQu', 'TianXiang'], ['WuQu', 'QiSha'], ['WuQu', 'PoJun'],
    ['TianTong', 'TaiYin'], ['TianTong', 'JuMen'], ['TianTong', 'TianLiang'],
    ['LianZhen', 'TianFu'], ['LianZhen', 'TanLang'], ['LianZhen', 'TianXiang'], ['LianZhen', 'QiSha'], ['LianZhen', 'PoJun']
];

const CHINESE_NAME_MAP: Record<string, string> = {
    'ZiWei': '紫微', 'TianFu': '天府', 'TanLang': '貪狼', 'TianXiang': '天相', 'QiSha': '七殺', 'PoJun': '破軍',
    'TianJi': '天機', 'TaiYin': '太陰', 'JuMen': '巨門', 'TianLiang': '天梁',
    'TaiYang': '太陽', 'WuQu': '武曲', 'TianTong': '天同', 'LianZhen': '廉貞'
};

const getSummary = (s1: string, s2: string): string => {
    const n1 = CHINESE_NAME_MAP[s1];
    const n2 = CHINESE_NAME_MAP[s2];
    return `${n1}${n2}同宮，雙星交輝。`;
};

const getDescription = (s1: string, s2: string): string => {
    return "雙星組合，兼具兩星特質。需視其五行生剋與廟旺利陷論斷。";
};

const main = () => {
    const entries: string[] = [];

    // Use a Set to avoid duplicates if any (though the list seems unique)
    const processed = new Set<string>();

    for (const pair of DUAL_STARS_LIST) {
        // Sort to ensure consistent key usage (e.g. always ZiWei_TianFu, never TianFu_ZiWei)
        // Actually, the list seems ordered, but let's be safe.
        // However, the Interpreter needs to match regardless of order.
        // For the DB, we'll define the canonical key as the sorted one (or alphabetical).
        // Let's stick to the list order for key generation but ensure the lookup logic handles it.
        // Actually, let's just use alphabetical sorting for the key to be deterministic.

        pair.sort();
        const key = `${pair[0]}_${pair[1]}`;

        if (processed.has(key)) continue;
        processed.add(key);

        const c1 = CHINESE_NAME_MAP[pair[0]];
        const c2 = CHINESE_NAME_MAP[pair[1]];

        const entry = `    "${key}": {
        key: "${key}",
        conditions: { withStars: ["${c1}", "${c2}"] },
        content: {
            summary: "${getSummary(pair[0], pair[1])}",
            description: "${getDescription(pair[0], pair[1])}",
            keywords: ["雙星", "${c1}", "${c2}"]
        }
    }`;
        entries.push(entry);
    }

    const fileContent = `import { StarRuleMap } from '../models';

export const dualStars: StarRuleMap = {
${entries.join(',\n')}
};
`;

    fs.writeFileSync(TARGET_DUAL_TS, fileContent, 'utf-8');
    console.log(`Generated ${entries.length} dual star rules in ${TARGET_DUAL_TS}`);
};

main();
