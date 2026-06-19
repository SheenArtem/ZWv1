// 八字 (四柱) chart data — deterministic layer (pillars / 十神 / 藏干 / 納音 / 大運)
// plus the analysis layer (旺衰/格局/調候/五行/干支關係) from the vendored bazi-enrich.
import { BaziEnrichment } from '../bazi/enrich/enrich';

export interface BaziPillar {
    gan: string;            // 天干
    zhi: string;            // 地支
    ganShiShen: string;     // 天干十神（日柱為「日主」）
    zhiHideGan: string[];   // 地支藏干
    zhiShiShen: string[];   // 藏干十神（對應 zhiHideGan）
    naYin: string;          // 納音
    ganWuXing: string;      // 天干五行
    zhiWuXing: string;      // 地支五行
}

export interface DaYunStep {
    ganZhi: string;         // 大運干支（起運前的「歲運」為空干支）
    startAge: number;       // 起始虛歲
    endAge: number;
    startYear: number;      // 起始西元年
}

export interface BaziChartData {
    pillars: {
        year: BaziPillar;
        month: BaziPillar;
        day: BaziPillar;
        hour: BaziPillar;
    };
    dayMaster: string;        // 日干（日主）
    dayMasterWuXing: string;  // 日主五行
    gender: 'Male' | 'Female';
    zodiac: string;           // 生肖
    startLuck: string;        // 起運（e.g. "6年2月20日"）
    daYun: DaYunStep[];       // 十步大運
    enrichment: BaziEnrichment; // 分析層：旺衰/格局/調候用神/五行統計/干支關係（vendored bazi-enrich）
}
