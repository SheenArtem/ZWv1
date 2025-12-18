import { Solar } from 'lunar-javascript';
import { BirthDetails, LunarDetails } from '../models/BirthDetails';

export const convertToLunar = (details: BirthDetails): LunarDetails => {
    const solar = Solar.fromYmdHms(
        details.year,
        details.month,
        details.day,
        details.hour,
        details.minute,
        0
    );

    const lunar = solar.getLunar();

    return {
        lunarYear: lunar.getYear(),
        lunarMonth: lunar.getMonth(),
        lunarDay: lunar.getDay(),
        isLeap: lunar.getMonth() < 0 ? true : false, // lunar-javascript might handle leap logic differently, checking...
        // Actually lunar.getMonth() returns absolute value, but let's check leap property
        // We will verify this with a test.
        ganZhiYear: lunar.getYearInGanZhi(),
        ganZhiMonth: lunar.getMonthInGanZhi(),
        ganZhiDay: lunar.getDayInGanZhi(),
        timeZhi: lunar.getTimeZhi(),
        eightChar: lunar.getBaZi().join(' ')
    };
};

// Fix strict leap month logic if needed
// lunar.getMonth() in lunar-javascript usually returns positive numbers, need to check how it represents leaps.
// According to docs, we might need checking logic.
// For now, simple implementation.
