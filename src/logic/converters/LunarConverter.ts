import LunarJS from 'lunar-javascript';
const { Solar } = LunarJS;
import { BirthDetails, LunarDetails } from '../models/BirthDetails';
import { ChartConventions, DEFAULT_CONVENTIONS } from '../models/ChartConventions';

export const convertToLunar = (
    details: BirthDetails,
    conventions: ChartConventions = DEFAULT_CONVENTIONS
): LunarDetails => {
    let { year, month, day, hour } = details;
    const { minute } = details;

    // 晚子時 (23:00–23:59) 子時換日 (switchDay): a late-Zi birth belongs to the NEXT day's 子時 (子正換日).
    // Roll to the next calendar day at hour 0 so the day pillar, lunar day and star placement all
    // advance, while the hour branch stays 子 (ChartBuilder derives 時支 from the original hour=23).
    // Under 夜子時不換日 (noSwitch) we leave hour=23 so it converts on the same calendar day.
    if (hour === 23 && conventions.lateZi === 'switchDay') {
        const next = Solar.fromYmdHms(year, month, day, 23, minute, 0).next(1);
        year = next.getYear();
        month = next.getMonth();
        day = next.getDay();
        hour = 0;
    }

    const solar = Solar.fromYmdHms(year, month, day, hour, minute, 0);

    const lunar = solar.getLunar();

    const lunarMonth = Math.abs(lunar.getMonth());
    const lunarDay = lunar.getDay();
    const isLeap = lunar.getMonth() < 0;

    // 閏月安命有效月數 (紫微 only). 八字按節氣不受影響。
    let effectiveMonth = lunarMonth;
    if (isLeap) {
        if (conventions.leapMonth === 'nextMonth') effectiveMonth = lunarMonth + 1;
        else if (conventions.leapMonth === 'split') effectiveMonth = lunarDay > 15 ? lunarMonth + 1 : lunarMonth;
        // 'thisMonth' keeps effectiveMonth = lunarMonth
    }
    if (effectiveMonth > 12) effectiveMonth -= 12; // guard for the rare leap 12月

    return {
        lunarYear: lunar.getYear(),
        lunarMonth,
        effectiveMonth,
        lunarDay,
        isLeap,
        ganZhiYear: lunar.getYearInGanZhi(),
        ganZhiMonth: lunar.getMonthInGanZhi(),
        ganZhiDay: lunar.getDayInGanZhi(),
        timeZhi: lunar.getTimeZhi(),
        eightChar: lunar.getBaZi().join(' ')
    };
};
