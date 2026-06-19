// 八字 chart builder — deterministic four-pillars layer via lunar-javascript EightChar.
// Pillars / 十神 / 藏干 / 納音 / 大運 are all sourced from the same well-tested 6tail engine
// that powers the ZiWei side, so no second lunar library is needed.
import LunarJS from 'lunar-javascript';
const { Solar } = LunarJS;
import { BirthDetails } from '../models/BirthDetails';
import { BaziChartData, BaziPillar, DaYunStep } from '../models/BaziChartData';
import { ChartConventions, DEFAULT_CONVENTIONS } from '../models/ChartConventions';
import { enrichBazi } from './enrich/enrich';

const ZHI_ZODIAC: Record<string, string> = {
    子: '鼠', 丑: '牛', 寅: '虎', 卯: '兔', 辰: '龍', 巳: '蛇',
    午: '馬', 未: '羊', 申: '猴', 酉: '雞', 戌: '狗', 亥: '豬',
};

// Split lunar-javascript's "干支五行" string (e.g. "金火") into [天干五行, 地支五行].
const splitWuXing = (s: string): [string, string] => {
    const chars = Array.from(s || '');
    return [chars[0] || '', chars[1] || ''];
};

const buildPillar = (
    ganZhi: string,
    ganShiShen: string,
    zhiShiShen: string[],
    hideGan: string[],
    naYin: string,
    wuXing: string
): BaziPillar => {
    const [ganWuXing, zhiWuXing] = splitWuXing(wuXing);
    return {
        gan: ganZhi.charAt(0),
        zhi: ganZhi.charAt(1),
        ganShiShen,
        zhiHideGan: hideGan,
        zhiShiShen,
        naYin,
        ganWuXing,
        zhiWuXing,
    };
};

export const generateBaziChart = (
    input: BirthDetails,
    conventions: ChartConventions = DEFAULT_CONVENTIONS
): BaziChartData => {
    let { year, month, day, hour } = input;
    const { minute } = input;

    // 晚子時 (23:00–23:59) 子時換日 — keep consistent with the ZiWei converter.
    if (hour === 23 && conventions.lateZi === 'switchDay') {
        const next = Solar.fromYmdHms(year, month, day, 23, minute, 0).next(1);
        year = next.getYear();
        month = next.getMonth();
        day = next.getDay();
        hour = 0;
    }

    const lunar = Solar.fromYmdHms(year, month, day, hour, minute, 0).getLunar();
    const ec: any = lunar.getEightChar();

    const pillars = {
        year: buildPillar(ec.getYear(), ec.getYearShiShenGan(), ec.getYearShiShenZhi(), ec.getYearHideGan(), ec.getYearNaYin(), ec.getYearWuXing()),
        month: buildPillar(ec.getMonth(), ec.getMonthShiShenGan(), ec.getMonthShiShenZhi(), ec.getMonthHideGan(), ec.getMonthNaYin(), ec.getMonthWuXing()),
        // 日柱天干即日主,無十神,標為「日主」
        day: buildPillar(ec.getDay(), '日主', ec.getDayShiShenZhi(), ec.getDayHideGan(), ec.getDayNaYin(), ec.getDayWuXing()),
        hour: buildPillar(ec.getTime(), ec.getTimeShiShenGan(), ec.getTimeShiShenZhi(), ec.getTimeHideGan(), ec.getTimeNaYin(), ec.getTimeWuXing()),
    };

    const dayGan = pillars.day.gan;
    const yearZhi = pillars.year.zhi;

    // 大運 (lunar-javascript getYun: gender 1=男 0=女)
    const yun: any = ec.getYun(input.gender === 'Male' ? 1 : 0);
    const daYun: DaYunStep[] = (yun.getDaYun() as any[]).map(d => ({
        ganZhi: d.getGanZhi(),
        startAge: d.getStartAge(),
        endAge: d.getEndAge(),
        startYear: d.getStartYear(),
    }));
    const startLuck = `${yun.getStartYear()}年${yun.getStartMonth()}月${yun.getStartDay()}日`;

    // 分析層 (vendored bazi-enrich): 旺衰/格局/調候/五行/干支關係。
    // gan/zhi 為中文字元,與 enrich 的 Tiangan/Dizhi literal 類型相容 (邊界以 any 銜接)。
    const siZhu = {
        年: { gan: pillars.year.gan, zhi: pillars.year.zhi },
        月: { gan: pillars.month.gan, zhi: pillars.month.zhi },
        日: { gan: pillars.day.gan, zhi: pillars.day.zhi },
        时: { gan: pillars.hour.gan, zhi: pillars.hour.zhi },
    };
    const enrichment = enrichBazi(siZhu as any);

    return {
        pillars,
        dayMaster: dayGan,
        dayMasterWuXing: pillars.day.ganWuXing,
        gender: input.gender,
        zodiac: ZHI_ZODIAC[yearZhi] || '',
        startLuck,
        daYun,
        enrichment,
    };
};
