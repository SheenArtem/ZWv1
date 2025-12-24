import { ChartData, Star } from './models/ChartData';

/**
 * Transforms the internal ChartData into a clean, AI-friendly JSON structure.
 * This removes UI-specific fields and focuses on the astrological data needed for interpretation.
 */
export const buildAIPrompt = (chart: ChartData, userQuestion?: string): string => {
    // 1. Basic Info
    const basicInfo = {
        "命主性別": chart.gender === 'Male' ? '男' : '女',
        "陰陽": chart.yinYangGender,
        "生辰(西曆)": chart.birthDate,
        "生辰(農曆)": chart.lunarDate,
        "八字": chart.baZi,
        "生肖": chart.zodiac,
        "五行局": chart.bureau,
        "命主": chart.mingZhu,
        "身主": chart.shenZhu,
    };

    // 2. Palaces
    const palaces = chart.palaces.map((p) => {
        return {
            "宮位": p.palaceName,
            "天干": p.stemName,
            "地支": p.branchName,
            "大限": p.daXian,
            "主星": p.majorStars.map(s => formatStar(s)),
            "輔星": p.minorStars.map(s => s.name),
            "十二神": {
                "長生": p.gods.changSheng,
                "博士": p.gods.boShi,
                "歲建": p.gods.suiJian,
                "將前": p.gods.jiangQian,
            }
        };
    });

    // 3. Current Time / Context
    const context = {
        "目前大限": chart.daXianDateRange || "未指定",
        "目前流年": chart.liuNianDateRange || "未指定",
        "流年四化": chart.liuNianSiHuaSummary || "無",
    };

    // Construct the final object
    const promptData = {
        "命主基本資料": basicInfo,
        "目前運勢": context,
        "命盤十二宮": palaces,
    };

    // 4. Create the instructional wrapper
    const defaultGoal = "分析命主的【本命格局】以及【目前運勢】。請特別關注命宮、身宮、財帛宮、官祿宮的狀態。";
    const customGoal = userQuestion ? `針對命主的問題：「${userQuestion}」進行深入分析與解答。` : defaultGoal;

    return `你是一位精通紫微斗數的資深大師。以下是命主的排盤資料 JSON。
請不要重新排盤，直接根據既有資料，${customGoal}
若有流年資訊，請結合本命盤與流年盤進行綜合分析。
請用白話、溫暖且具有洞察力的語氣解說，並給予具體的人生建議。

=== 命盤資料 (JSON) ===
${JSON.stringify(promptData, null, 2)}
`;
};

function formatStar(star: Star): string {
    let str = star.name;
    if (star.brightness) str += ` (${star.brightness})`;
    if (star.mutagen) str += ` [生年${star.mutagen}]`;
    // We can add dynamic mutagens if they exist directly on the star object
    if (star.liuNianMutagen) str += ` [流年${star.liuNianMutagen}]`;
    if (star.daXianMutagen) str += ` [大限${star.daXianMutagen}]`;
    return str;
}
