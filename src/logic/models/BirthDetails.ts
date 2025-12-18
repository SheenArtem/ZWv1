export type Gender = 'Male' | 'Female';

export interface BirthDetails {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    gender: Gender;
}

export interface LunarDetails {
    lunarYear: number;
    lunarMonth: number;
    lunarDay: number;
    isLeap: boolean;
    ganZhiYear: string;
    ganZhiMonth: string;
    ganZhiDay: string;
    timeZhi: string; // The Earthly Branch of the hour (e.g., 子, 丑)
    eightChar: string; // BaZi string for debugging/display
}
