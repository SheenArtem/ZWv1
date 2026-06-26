import { ChartData, PalaceData, Star } from '../models/ChartData';
import { BaziChartData, BaziPillar } from '../models/BaziChartData';
import { BAZI_SCHOOL } from '../bazi/school';

type DisplayMode = 'birth' | 'decade' | 'year' | 'month';

export const generateMarkdown = (chart: ChartData, mode: DisplayMode): string => {
    let md = `# 紫微斗數命盤資料 (${getModeName(mode)})\n\n`;

    // 1. Basic Information
    md += `## 基本資料\n`;
    if (chart.birthDate) md += `- **陽曆**: ${chart.birthDate}\n`;
    if (chart.lunarDate) md += `- **農曆**: ${chart.lunarDate}\n`;
    if (chart.yinYangGender) md += `- **性別**: ${chart.yinYangGender}\n`;
    if (chart.bureau) md += `- **五行局**: ${chart.bureau}\n`;
    if (chart.mingZhu) md += `- **命主**: ${chart.mingZhu}\n`;
    if (chart.shenZhu) md += `- **身主**: ${chart.shenZhu}\n`;
    if (chart.zodiac) md += `- **生肖**: ${chart.zodiac}\n`;
    md += `\n`;

    // 2. Si Hua Summary (Dynamic based on mode)
    md += `## 四化\n`;
    // Always show Birth Si Hua
    if (chart.siHuaSummary) {
        md += `- **本命四化**: ${chart.siHuaSummary}\n`;
    }

    // Decade Si Hua (if mode is decade, year, or month)
    const showDecade = ['decade', 'year', 'month'].includes(mode);
    if (showDecade && chart.daXianSiHuaSummary) {
        md += `- **大限四化**: ${chart.daXianSiHuaSummary}\n`;
    }

    // Year Si Hua (if mode is year or month)
    const showYear = ['year', 'month'].includes(mode);
    if (showYear && chart.liuNianSiHuaSummary) {
        md += `- **流年四化**: ${chart.liuNianSiHuaSummary}\n`;
    }

    // Month Si Hua (if mode is month)
    const showMonth = mode === 'month';
    if (showMonth && chart.liuYueSiHuaSummary) {
        md += `- **流月四化**: ${chart.liuYueSiHuaSummary}\n`;
    }
    md += `\n`;

    // 3. Palaces
    md += `## 十二宮位詳情\n\n`;

    const palaceNames = ['命宮', '兄弟', '夫妻', '子女', '財帛', '疾厄', '遷移', '交友', '官祿', '田宅', '福德', '父母'];

    chart.palaces.forEach((palace: PalaceData) => {
        // Calculate Overlays
        const overlays: string[] = [];

        // Decade Overlay
        if (showDecade && chart.daXianIndex !== undefined) {
            const seq = (chart.daXianIndex - palace.branchIndex + 12) % 12;
            if (seq >= 0 && seq < 12) overlays.push(`大限${palaceNames[seq]}`);
        }

        // Year Overlay
        if (showYear && chart.liuNianIndex !== undefined) {
            const seq = (chart.liuNianIndex - palace.branchIndex + 12) % 12;
            if (seq >= 0 && seq < 12) overlays.push(`流年${palaceNames[seq]}`);
        }

        // Month Overlay
        if (showMonth && chart.liuYueIndex !== undefined) {
            const seq = (chart.liuYueIndex - palace.branchIndex + 12) % 12;
            if (seq >= 0 && seq < 12) overlays.push(`流月${palaceNames[seq]}`);
        }

        const overlayStr = overlays.length > 0 ? ` [${overlays.join(', ')}]` : '';

        md += `### ${palace.palaceName} (${palace.stemName}${palace.branchName})${overlayStr}\n`;

        // Major Stars
        const majors = palace.majorStars.map(s => formatStar(s, mode)).join(', ');
        md += `- **主星**: ${majors || '無'}\n`;

        // Minor Stars
        const minors = palace.minorStars.map(s => formatStar(s, mode)).join(', ');
        md += `- **副星/雜曜**: ${minors || '無'}\n`;

        // 12 Gods
        md += `- **長生十二神**: ${palace.gods.changSheng}\n`;
        md += `- **博士十二神**: ${palace.gods.boShi}\n`;
        md += `- **歲建十二神**: ${palace.gods.suiJian}\n`;
        md += `- **將前十二神**: ${palace.gods.jiangQian}\n`;

        // Limits
        md += `- **大限**: ${palace.daXian}\n`;

        md += `\n`;
    });

    return md;
};

/**
 * Generates a COMPLETE markdown document containing every layer of the chart
 * (本命 + 大限 + 流年 + 流月) regardless of the currently active tab.
 *
 * This is the dataset to feed an AI for 論命 — nothing is filtered out, so any
 * question across any time layer can be answered from a single copy.
 */
export const generateFullMarkdown = (chart: ChartData): string => {
    let md = `# 紫微斗數完整命盤資料\n\n`;
    md += `> 本文件包含本命盤、大限、流年、流月的全部資料，可直接用於 AI 論命提問。\n\n`;

    // 1. Basic Information
    md += `## 基本資料\n`;
    if (chart.birthDate) md += `- **陽曆**: ${chart.birthDate}\n`;
    if (chart.lunarDate) md += `- **農曆**: ${chart.lunarDate}\n`;
    if (chart.baZi) md += `- **八字**: ${chart.baZi}\n`;
    if (chart.yinYangGender) md += `- **性別**: ${chart.yinYangGender}\n`;
    if (chart.bureau) md += `- **五行局**: ${chart.bureau}\n`;
    if (chart.mingZhu) md += `- **命主**: ${chart.mingZhu}\n`;
    if (chart.shenZhu) md += `- **身主**: ${chart.shenZhu}\n`;
    if (chart.zodiac) md += `- **生肖**: ${chart.zodiac}\n`;
    md += `\n`;

    // 2. Time Context (which 大限 / 流年 / 流月 the layers below refer to)
    const hasTimeContext = chart.predictionDate || chart.predictionLunarDate || chart.predictionGanZhi
        || chart.daXianDateRange || chart.liuNianDateRange || chart.liuYueDateRange;
    if (hasTimeContext) {
        md += `## 推運時間\n`;
        if (chart.predictionDate) md += `- **推算陽曆**: ${chart.predictionDate}\n`;
        if (chart.predictionLunarDate) md += `- **推算農曆**: ${chart.predictionLunarDate}\n`;
        if (chart.predictionGanZhi) md += `- **推算干支**: ${chart.predictionGanZhi}\n`;
        if (chart.daXianDateRange) md += `- **大限區間**: ${chart.daXianDateRange}\n`;
        if (chart.liuNianDateRange) md += `- **流年區間**: ${chart.liuNianDateRange}\n`;
        if (chart.liuYueDateRange) md += `- **流月區間**: ${chart.liuYueDateRange}\n`;
        md += `\n`;
    }

    // 3. Si Hua Summary (all layers)
    md += `## 四化\n`;
    if (chart.siHuaSummary) md += `- **本命四化**: ${chart.siHuaSummary}\n`;
    if (chart.daXianSiHuaSummary) md += `- **大限四化**: ${chart.daXianSiHuaSummary}\n`;
    if (chart.liuNianSiHuaSummary) md += `- **流年四化**: ${chart.liuNianSiHuaSummary}\n`;
    if (chart.liuYueSiHuaSummary) md += `- **流月四化**: ${chart.liuYueSiHuaSummary}\n`;
    md += `\n`;

    // 4. Palaces (all overlays + all-layer star data)
    md += `## 十二宮位詳情\n\n`;
    const palaceNames = ['命宮', '兄弟', '夫妻', '子女', '財帛', '疾厄', '遷移', '交友', '官祿', '田宅', '福德', '父母'];

    chart.palaces.forEach((palace: PalaceData) => {
        const overlays: string[] = [];
        if (chart.daXianIndex !== undefined) {
            const seq = (chart.daXianIndex - palace.branchIndex + 12) % 12;
            overlays.push(`大限${palaceNames[seq]}`);
        }
        if (chart.liuNianIndex !== undefined) {
            const seq = (chart.liuNianIndex - palace.branchIndex + 12) % 12;
            overlays.push(`流年${palaceNames[seq]}`);
        }
        if (chart.liuYueIndex !== undefined) {
            const seq = (chart.liuYueIndex - palace.branchIndex + 12) % 12;
            overlays.push(`流月${palaceNames[seq]}`);
        }
        const overlayStr = overlays.length > 0 ? ` [${overlays.join(', ')}]` : '';

        md += `### ${palace.palaceName} (${palace.stemName}${palace.branchName})${overlayStr}\n`;

        const majors = palace.majorStars.map(s => formatStarFull(s)).join(', ');
        md += `- **主星**: ${majors || '無'}\n`;

        const minors = palace.minorStars.map(s => formatStarFull(s)).join(', ');
        md += `- **副星/雜曜**: ${minors || '無'}\n`;

        md += `- **長生十二神**: ${palace.gods.changSheng}\n`;
        md += `- **博士十二神**: ${palace.gods.boShi}\n`;
        md += `- **歲建十二神**: ${palace.gods.suiJian}\n`;
        md += `- **將前十二神**: ${palace.gods.jiangQian}\n`;
        md += `- **大限**: ${palace.daXian}\n`;
        md += `\n`;
    });

    return md;
};

/**
 * Generates a COMPLETE markdown document for the 八字 (four-pillars) chart:
 * pillars + 十神 + 藏干 + 納音 + 大運 plus the rule-based analysis layer
 * (旺衰/格局/調候/五行/干支關係). The 流派 section is emitted first so an AI
 * 論命 follows the same methodology the engine used.
 */
export const generateBaziMarkdown = (bazi: BaziChartData): string => {
    const e = bazi.enrichment;
    const P = bazi.pillars;
    const wx = ['木', '火', '土', '金', '水'] as const;

    let md = `# 八字命盤完整資料\n\n`;
    md += `> 本文件包含四柱、十神、藏干、納音、大運與規則分析層（旺衰/格局/調候/五行/干支關係），可直接用於 AI 論命提問。\n\n`;

    // 1. 分析流派 — 讓 AI 依同一套方法論論命
    md += `## 分析流派\n`;
    md += `- **系統**: ${BAZI_SCHOOL.name}\n`;
    BAZI_SCHOOL.items.forEach(it => { md += `- **${it.k}**: ${it.v}\n`; });
    md += `\n`;

    // 2. 基本資料
    md += `## 基本資料\n`;
    md += `- **性別**: ${bazi.gender === 'Male' ? '乾造（男）' : '坤造（女）'}\n`;
    md += `- **日主**: ${bazi.dayMaster}（${bazi.dayMasterWuXing}）\n`;
    md += `- **生肖**: ${bazi.zodiac}\n`;
    md += `- **起運**: ${bazi.startLuck}\n\n`;

    // 3. 四柱
    md += `## 四柱\n\n`;
    md += `| 柱 | 天干 | 地支 | 天干十神 | 藏干（十神） | 納音 | 干支五行 | 自坐 |\n`;
    md += `| --- | --- | --- | --- | --- | --- | --- | --- |\n`;
    const rows: Array<[string, BaziPillar, string]> = [
        ['年柱', P.year, e.自坐.年],
        ['月柱', P.month, e.自坐.月],
        ['日柱', P.day, e.自坐.日],
        ['時柱', P.hour, e.自坐.时],
    ];
    rows.forEach(([title, p, ziZuo]) => {
        const hide = p.zhiHideGan.map((g, i) => `${g}${p.zhiShiShen[i] || ''}`).join('、');
        md += `| ${title} | ${p.gan} | ${p.zhi} | ${p.ganShiShen} | ${hide} | ${p.naYin} | ${p.ganWuXing}${p.zhiWuXing} | ${ziZuo} |\n`;
    });
    md += `\n`;

    // 4. 大運
    md += `## 大運\n`;
    const yun = bazi.daYun.filter(d => d.ganZhi).map(d => `${d.startAge}歲 ${d.ganZhi}（${d.startYear}）`).join(' ｜ ');
    md += `- ${yun}\n\n`;

    // 5. 旺衰
    md += `## 旺衰（日主強弱）\n`;
    md += `- **結論**: ${e.旺衰.verdict}（分數 ${e.旺衰.score}，信心 ${e.旺衰.confidence}）\n`;
    md += `- **拆分**: 得令 ${e.旺衰.breakdown.得令} · 長生 ${e.旺衰.breakdown.长生} · 得地 ${e.旺衰.breakdown.得地} · 得勢 ${e.旺衰.breakdown.得势}\n`;
    if (e.旺衰.breakdown.details.length) md += `- **明細**: ${e.旺衰.breakdown.details.join('；')}\n`;
    md += `\n`;

    // 6. 格局
    md += `## 格局\n`;
    md += `- **主格局**: ${e.格局.primary}（信心 ${e.格局.confidence}）\n`;
    md += `- **立格依據**: ${e.格局.basis}\n`;
    if (e.格局.透干.length) md += `- **月令透干**: ${e.格局.透干.join('、')}\n`;
    e.格局.notes.forEach(n => { md += `- **註**: ${n}\n`; });
    md += `\n`;

    // 7. 調候用神
    md += `## 調候用神（窮通寶鑑·僅供參考）\n`;
    md += `- ${e.调候用神.join('、') || '無'}\n\n`;

    // 8. 五行
    md += `## 五行統計\n`;
    md += `- **字面（干支）**: ${wx.map(w => `${w}${e.五行统计.surface[w]}`).join(' ')}\n`;
    md += `- **含藏干**: ${wx.map(w => `${w}${e.五行统计.withCangGan[w]}`).join(' ')}\n`;
    md += `- **缺**: ${e.五行统计.missing.join('') || '無'} ／ **最旺**: ${e.五行统计.strongest.join('')}\n`;
    md += `- **月令旺相休囚死**: ${wx.map(w => `${w}${e.五行旺相[w]}`).join(' ')}\n\n`;

    // 9. 干支關係
    md += `## 干支關係\n`;
    md += `- **天干**: ${e.天干关系.length ? e.天干关系.map(r => `${r.gans.join('')}${r.type}（${r.pillars.join('')}）`).join('；') : '無'}\n`;
    md += `- **地支**: ${e.地支关系.length ? e.地支关系.map(r => `${r.type}${r.zhi.join('')}${r.detail ? `(${r.detail})` : ''}（${r.pillars.join('')}）`).join('；') : '無'}\n`;
    md += `- **整柱**: ${e.整柱.map(v => `${v.pillar}柱${v.gan}${v.zhi}=${v.verdict}`).join('；')}\n\n`;

    return md;
};

const formatStar = (star: Star, mode: DisplayMode): string => {
    let text = star.name;
    // Suffixes for Time-Based Stars
    if (star.scope === 'decade') text += '(限)';
    if (star.scope === 'year') text += '(流)';

    if (star.brightness) text += `(${star.brightness})`;

    // Always show Birth Si Hua
    if (star.mutagen) text += `[本命${getMutagenLabel(star.mutagen)}]`;

    // Show appropriate lower-tier Si Hua
    // Decade
    if (['decade', 'year', 'month'].includes(mode) && star.daXianMutagen) {
        text += `[大限${getMutagenLabel(star.daXianMutagen)}]`;
    }
    // Year
    if (['year', 'month'].includes(mode) && star.liuNianMutagen) {
        text += `[流年${getMutagenLabel(star.liuNianMutagen)}]`;
    }
    // Month
    if (mode === 'month' && star.liuYueMutagen) {
        text += `[流月${getMutagenLabel(star.liuYueMutagen)}]`;
    }

    return text;
};

// Full variant: always emits every layer's brightness, scope and 四化 info.
const formatStarFull = (star: Star): string => {
    let text = star.name;
    if (star.scope === 'decade') text += '(限)';
    if (star.scope === 'year') text += '(流)';
    if (star.brightness) text += `(${star.brightness})`;
    if (star.mutagen) text += `[本命${getMutagenLabel(star.mutagen)}]`;
    if (star.daXianMutagen) text += `[大限${getMutagenLabel(star.daXianMutagen)}]`;
    if (star.liuNianMutagen) text += `[流年${getMutagenLabel(star.liuNianMutagen)}]`;
    if (star.liuYueMutagen) text += `[流月${getMutagenLabel(star.liuYueMutagen)}]`;
    return text;
};

const getMutagenLabel = (mutagen: string): string => {
    switch (mutagen) {
        case 'Lu': return '祿';
        case 'Quan': return '權';
        case 'Ke': return '科';
        case 'Ji': return '忌';
        default: return '';
    }
};

const getModeName = (mode: DisplayMode): string => {
    switch (mode) {
        case 'birth': return '本命盤';
        case 'decade': return '大限盤';
        case 'year': return '流年盤';
        case 'month': return '流月盤';
        default: return '本命盤';
    }
};
