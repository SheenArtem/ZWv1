import { ChartData, PalaceData, Star } from '../models/ChartData';

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
