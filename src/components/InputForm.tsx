import { useState, useMemo } from 'react';
import { BirthDetails, Gender } from '../logic/models/BirthDetails';
import { ChartConventions, DEFAULT_CONVENTIONS } from '../logic/models/ChartConventions';
import LunarJS from 'lunar-javascript';
const { Lunar } = LunarJS;

interface InputFormProps {
    onSubmit: (details: BirthDetails, predictionDate?: Date, conventions?: ChartConventions) => void;
}

export const InputForm = ({ onSubmit }: InputFormProps) => {
    // Basic Birth Data
    const [formData, setFormData] = useState({
        year: 1990,
        month: 1,
        day: 1,
        hour: 0,
        minute: 0,
        gender: 'Male' as Gender,
    });

    // 流派慣例 (school conventions)
    const [conventions, setConventions] = useState<ChartConventions>(DEFAULT_CONVENTIONS);
    const [showConventions, setShowConventions] = useState(false);

    // Derive the 時辰 (hour branch) label from an exact clock hour (0-23).
    // 子=23–01, 丑=01–03 ... (子時 spans midnight; 23:xx = 晚子, 00:xx = 早子).
    const SHICHEN = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
    const shiChenLabel = (hour: number): string => {
        const idx = Math.floor((hour + 1) / 2) % 12;
        const zhi = SHICHEN[idx];
        if (idx === 0) return hour === 23 ? `${zhi}時 (晚子)` : `${zhi}時 (早子)`;
        return `${zhi}時`;
    };

    // Prediction Logic
    const [showPrediction, setShowPrediction] = useState(false);

    // Prediction State (Year/Month)
    const currentYear = new Date().getFullYear();
    const [predYear, setPredYear] = useState(currentYear);
    const [predMonth, setPredMonth] = useState(new Date().getMonth() + 1); // 1-12 (Solar approx, but we default to 1)

    // Generate Year Options (Current Year +/- 10 years, or wider)
    const yearOptions = useMemo(() => {
        const options = [];
        const startYear = currentYear - 10;
        const endYear = currentYear + 10;

        for (let y = startYear; y <= endYear; y++) {
            try {
                // Determine Lunar Year Info for this Solar Year (approx)
                // Actually we want the "Lunar Year" corresponding to this number.
                // We typically assume the dropdown "2024" means "Jia Chen Year (2024)"

                // Get Start/End of this Lunar Year
                const lunarJan1 = Lunar.fromYmd(y, 1, 1);
                const solarStart = lunarJan1.getSolar();

                const nextLunarJan1 = Lunar.fromYmd(y + 1, 1, 1);
                const solarEnd = nextLunarJan1.next(-1).getSolar();

                const ganZhi = lunarJan1.getYearInGanZhi();

                const label = `${ganZhi} (${solarStart.toYmd()} ~ ${solarEnd.toYmd()})`;
                options.push({ value: y, label });
            } catch (e) {
                console.error(e);
            }
        }
        return options;
    }, [currentYear]);

    // Generate Month Options based on selected Year
    const monthOptions = useMemo(() => {
        const options = [];
        for (let m = 1; m <= 12; m++) {
            try {
                // Lunar Month m of Lunar Year predYear
                const lunarMonthFirst = Lunar.fromYmd(predYear, m, 1);
                const solarStart = lunarMonthFirst.getSolar();

                // End of Month
                // Safe way: get day count
                const daysInMonth = (typeof lunarMonthFirst.getDayInMonth === 'function')
                    ? lunarMonthFirst.getDayInMonth()
                    : 30; // fallback

                const solarEnd = lunarMonthFirst.next(daysInMonth - 1).getSolar();

                const ganZhiMonth = lunarMonthFirst.getMonthInGanZhi();
                const monthName = lunarMonthFirst.getMonthInChinese();

                // Format: 正月 (丙寅 2024/02/10 - 2024/03/09)
                const label = `${monthName}月 (${ganZhiMonth} ${solarStart.toYmd()} ~ ${solarEnd.toYmd()})`;
                options.push({ value: m, label });
            } catch (e) {
                console.error(e);
            }
        }
        return options;
    }, [predYear]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        {
            const newValue = name === 'gender' ? value : parseInt(value);

            setFormData(prev => {
                const updated = { ...prev, [name]: newValue };

                // Clamp Day if Month/Year changes
                if (name === 'month' || name === 'year') {
                    const maxDays = new Date(updated.year, updated.month, 0).getDate();
                    if (updated.day > maxDays) {
                        updated.day = maxDays;
                    }
                }
                return updated;
            });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let pDate: Date | undefined = undefined;
        if (showPrediction) {
            // Construct a date inside the selected Lunar Month
            // Using the 15th day is safest to ensure we fall into the correct month logic
            try {
                const targetLunar = Lunar.fromYmd(predYear, predMonth, 15);
                const solarTarget = targetLunar.getSolar();
                pDate = new Date(solarTarget.getYear(), solarTarget.getMonth() - 1, solarTarget.getDay());
            } catch (e) {
                console.error("Prediction Date Construction Failed", e);
            }
        }

        onSubmit({
            ...formData,
        }, pDate, conventions);
    };

    return (
        <div className="bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-700 w-full mb-4">
            <h2 className="text-xl font-semibold text-purple-300 mb-4 sticky top-0 bg-slate-800 pb-2 z-10 border-b border-slate-700">
                出生資料
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pr-2 custom-scrollbar">
                {/* Birth Inputs: Date */}
                <div>
                    <div className="flex justify-between mb-1">
                        <label className="text-sm text-slate-400">出生年/月/日</label>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <input type="number" name="year" placeholder="Year" value={formData.year} onChange={handleChange} className="bg-slate-900 border border-slate-600 rounded px-2 py-1.5 text-white text-sm" />

                        {/* Month Select */}
                        <select name="month" value={formData.month} onChange={handleChange} className="bg-slate-900 border border-slate-600 rounded px-2 py-1.5 text-white text-sm">
                            {Array.from({ length: 12 }, (_, i) => i + 1).map(m => (
                                <option key={m} value={m}>{m}月</option>
                            ))}
                        </select>

                        {/* Day Select */}
                        <select name="day" value={formData.day} onChange={handleChange} className="bg-slate-900 border border-slate-600 rounded px-2 py-1.5 text-white text-sm">
                            {Array.from({ length: new Date(formData.year, formData.month, 0).getDate() }, (_, i) => i + 1).map(d => (
                                <option key={d} value={d}>{d}日</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Birth Inputs: Time & Gender */}
                <div>
                    <div className="flex justify-between mb-1">
                        <label className="text-sm text-slate-400">出生時間 (24 小時制) & 性別</label>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        {/* Hour (0-23) with derived 時辰 */}
                        <select name="hour" value={formData.hour} onChange={handleChange} className="bg-slate-900 border border-slate-600 rounded px-2 py-1.5 text-white text-sm">
                            {Array.from({ length: 24 }, (_, h) => h).map(h => (
                                <option key={h} value={h}>{String(h).padStart(2, '0')} 時</option>
                            ))}
                        </select>
                        {/* Minute (0-59) */}
                        <input
                            type="number" name="minute" min={0} max={59} value={formData.minute} onChange={handleChange}
                            className="bg-slate-900 border border-slate-600 rounded px-2 py-1.5 text-white text-sm" placeholder="分"
                        />
                        <select name="gender" value={formData.gender} onChange={handleChange} className="bg-slate-900 border border-slate-600 rounded px-2 py-1.5 text-white text-sm">
                            <option value="Male">男</option>
                            <option value="Female">女</option>
                        </select>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">
                        對應時辰：<span className="text-slate-300">{shiChenLabel(formData.hour)}</span>
                        <span className="text-slate-600"> · 23:xx 為晚子、00:xx 為早子</span>
                    </p>
                </div>

                <div className="border-t border-slate-700 my-2 pt-2">
                    <button
                        type="button"
                        onClick={() => setShowPrediction(!showPrediction)}
                        className="flex items-center justify-between w-full text-sm text-slate-300 hover:text-white transition-colors mb-2"
                    >
                        <span className="font-bold text-indigo-400">運勢預測</span>
                        <span>{showPrediction ? '−' : '+'}</span>
                    </button>

                    {showPrediction && (
                        <div className="space-y-3 animate-fade-in bg-slate-900/50 p-2 rounded border border-slate-700">
                            {/* Year Select */}
                            <div>
                                <label className="block text-sm text-amber-500 mb-1">流年</label>
                                <select
                                    value={predYear}
                                    onChange={(e) => setPredYear(parseInt(e.target.value))}
                                    className="w-full bg-slate-900 border border-amber-900/50 rounded px-2 py-1.5 text-white text-sm focus:border-amber-500"
                                >
                                    {yearOptions.map(opt => (
                                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Month Select */}
                            <div>
                                <label className="block text-sm text-emerald-500 mb-1">流月</label>
                                <select
                                    value={predMonth}
                                    onChange={(e) => setPredMonth(parseInt(e.target.value))}
                                    className="w-full bg-slate-900 border border-emerald-900/50 rounded px-2 py-1.5 text-white text-sm focus:border-emerald-500"
                                >
                                    {monthOptions.map(opt => (
                                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    )}
                </div>

                {/* 流派設定 (School Conventions) */}
                <div className="border-t border-slate-700 my-2 pt-2">
                    <button
                        type="button"
                        onClick={() => setShowConventions(!showConventions)}
                        className="flex items-center justify-between w-full text-sm text-slate-300 hover:text-white transition-colors mb-2"
                    >
                        <span className="font-bold text-teal-400">流派設定 <span className="text-xs text-slate-500 font-normal">(進階)</span></span>
                        <span>{showConventions ? '−' : '+'}</span>
                    </button>

                    {showConventions && (
                        <div className="space-y-3 animate-fade-in bg-slate-900/50 p-2 rounded border border-slate-700">
                            {/* 晚子時 */}
                            <div>
                                <label className="block text-sm text-teal-300 mb-1">晚子時換日 (23:00–24:00)</label>
                                <select
                                    value={conventions.lateZi}
                                    onChange={(e) => setConventions(c => ({ ...c, lateZi: e.target.value as ChartConventions['lateZi'] }))}
                                    className="w-full bg-slate-900 border border-teal-900/50 rounded px-2 py-1.5 text-white text-sm focus:border-teal-500"
                                >
                                    <option value="noSwitch">晚子用本日 (傳統夜子時，預設)</option>
                                    <option value="switchDay">晚子全換日 (當次日子時)</option>
                                </select>
                                <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                                    換日使農曆日±1 → 紫微主星整盤移位（跨月底連命宮亦移）；時支仍為子，時系星不變。亦影響八字日柱。「本日」≈夜子不換日（施大堯主張紫微不需換日）；「全換日」≈子初一律換日。此議題各派無定論、無實證。
                                </p>
                            </div>

                            {/* 閏月安命 */}
                            <div>
                                <label className="block text-sm text-teal-300 mb-1">閏月安命</label>
                                <select
                                    value={conventions.leapMonth}
                                    onChange={(e) => setConventions(c => ({ ...c, leapMonth: e.target.value as ChartConventions['leapMonth'] }))}
                                    className="w-full bg-slate-900 border border-teal-900/50 rounded px-2 py-1.5 text-white text-sm focus:border-teal-500"
                                >
                                    <option value="split">上半月當本月、下半月當下月 (預設)</option>
                                    <option value="thisMonth">閏月全當本月</option>
                                    <option value="nextMonth">閏月全當下月</option>
                                </select>
                                <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                                    僅影響閏月出生者。「上下半月」以 15 日分界，為現代軟體最常見預設（與 iztro 一致）；「全當下月」有《全書》古典依據。閏月下半出生者建議前後兩月命盤比對定盤。八字按節氣，不受此影響。
                                </p>
                            </div>

                            {/* 庚干四化 */}
                            <div>
                                <label className="block text-sm text-teal-300 mb-1">庚干四化 (祿太陽·權武曲)</label>
                                <select
                                    value={conventions.gengSihua}
                                    onChange={(e) => setConventions(c => ({ ...c, gengSihua: e.target.value as ChartConventions['gengSihua'] }))}
                                    className="w-full bg-slate-900 border border-teal-900/50 rounded px-2 py-1.5 text-white text-sm focus:border-teal-500"
                                >
                                    <option value="zhongzhou">太陰化科、天同化忌 (中州派，預設)</option>
                                    <option value="tianfu">天府化科、天同化忌 (古早派)</option>
                                    <option value="tianxiang">天同化科、天相化忌 (官非派)</option>
                                </select>
                                <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                                    庚干公案：科為太陰或天府、忌為天同或天相。中州派為最多人用、iztro 預設。
                                </p>
                            </div>

                            {/* 壬干四化 */}
                            <div>
                                <label className="block text-sm text-teal-300 mb-1">壬干四化 (祿天梁·權紫微·忌武曲)</label>
                                <select
                                    value={conventions.renSihua}
                                    onChange={(e) => setConventions(c => ({ ...c, renSihua: e.target.value as ChartConventions['renSihua'] }))}
                                    className="w-full bg-slate-900 border border-teal-900/50 rounded px-2 py-1.5 text-white text-sm focus:border-teal-500"
                                >
                                    <option value="zuofu">左輔化科 (主流，預設)</option>
                                    <option value="tianfu">天府化科 (極少數)</option>
                                </select>
                                <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                                    壬干科星：主流定論為左輔化科；天府化科為極少數說法。
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                <button type="submit" className="w-full bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-2 rounded transition-all shadow-lg shadow-purple-900/30 text-sm">
                    {showPrediction ? '排盤 + 運勢' : '開始排盤'}
                </button>
            </form>
        </div>
    );
};
