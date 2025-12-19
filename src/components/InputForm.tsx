import { useState, useMemo } from 'react';
import { BirthDetails, Gender } from '../logic/models/BirthDetails';
import LunarJS from 'lunar-javascript';
const { Lunar } = LunarJS;

interface InputFormProps {
    onSubmit: (details: BirthDetails, predictionDate?: Date) => void;
}

export const InputForm = ({ onSubmit }: InputFormProps) => {
    // Basic Birth Data
    const [formData, setFormData] = useState({
        year: 1990,
        month: 1,
        day: 1,
        hour: 12,
        minute: 0,
        gender: 'Male' as Gender
    });

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
        setFormData(prev => ({
            ...prev,
            [name]: name === 'gender' ? value : parseInt(value)
        }));
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
        }, pDate);
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
                        <input type="number" name="month" placeholder="Month" min="1" max="12" value={formData.month} onChange={handleChange} className="bg-slate-900 border border-slate-600 rounded px-2 py-1.5 text-white text-sm" />
                        <input type="number" name="day" placeholder="Day" min="1" max="31" value={formData.day} onChange={handleChange} className="bg-slate-900 border border-slate-600 rounded px-2 py-1.5 text-white text-sm" />
                    </div>
                </div>

                {/* Birth Inputs: Time & Gender */}
                <div>
                    <div className="flex justify-between mb-1">
                        <label className="text-sm text-slate-400">時間 & 性別</label>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <input type="number" name="hour" placeholder="Hour" min="0" max="23" value={formData.hour} onChange={handleChange} className="bg-slate-900 border border-slate-600 rounded px-2 py-1.5 text-white text-sm" />
                        <input type="number" name="minute" placeholder="Min" min="0" max="59" value={formData.minute} onChange={handleChange} className="bg-slate-900 border border-slate-600 rounded px-2 py-1.5 text-white text-sm" />
                        <select name="gender" value={formData.gender} onChange={handleChange} className="bg-slate-900 border border-slate-600 rounded px-2 py-1.5 text-white text-sm">
                            <option value="Male">男</option>
                            <option value="Female">女</option>
                        </select>
                    </div>
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

                <button type="submit" className="w-full bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-2 rounded transition-all shadow-lg shadow-purple-900/30 text-sm">
                    {showPrediction ? '排盤 + 運勢' : '開始排盤'}
                </button>
            </form>
        </div>
    );
};
