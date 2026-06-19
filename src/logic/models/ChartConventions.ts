// 排盤流派慣例 (school/convention switches the user can toggle in the UI).

// 晚子時 (23:00–23:59) 紫微安命換日慣例:
//   noSwitch   — 晚子安命用「本日」曆日 (與 iztro 紫微一致;早子/晚子排出相同紫微盤)。預設。
//   switchDay  — 晚子連紫微安命都換日,進到次日 (少數「晚子全換日」派)。
//   注意:八字日柱的子時換日是另一回事,與此分開 (八字按節氣/子正換日,待八字引擎處理)。
export type LateZiConvention = 'switchDay' | 'noSwitch';

// 閏月安命慣例 (紫微斗數專屬;八字按節氣排,不受此影響):
//   split      — 上半月 (≤15日) 當本月、下半月 (>15日) 當下月 (與 iztro 預設一致)
//   thisMonth  — 閏月全當本月
//   nextMonth  — 閏月全當下月
export type LeapMonthConvention = 'split' | 'thisMonth' | 'nextMonth';

// 庚干四化版本 (祿太陽、權武曲 各派一致;科/忌有三說):
//   zhongzhou — 太陰化科、天同化忌 (中州派、最多人用、iztro 預設)。預設。
//   tianfu    — 天府化科、天同化忌 (較古早派)
//   tianxiang — 天同化科、天相化忌 (少數「官非派」)
export type GengSihua = 'zhongzhou' | 'tianfu' | 'tianxiang';

// 壬干四化版本 (祿天梁、權紫微、忌武曲 各派一致;科有二說):
//   zuofu  — 左輔化科 (主流定論)。預設。
//   tianfu — 天府化科 (極少數)
export type RenSihua = 'zuofu' | 'tianfu';

export interface ChartConventions {
    lateZi: LateZiConvention;
    leapMonth: LeapMonthConvention;
    gengSihua: GengSihua;
    renSihua: RenSihua;
}

export const DEFAULT_CONVENTIONS: ChartConventions = {
    lateZi: 'noSwitch',   // iztro-consistent: 晚子安命用本日
    leapMonth: 'split',
    gengSihua: 'zhongzhou',
    renSihua: 'zuofu',
};
