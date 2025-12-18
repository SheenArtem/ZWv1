import { useState } from 'react';
import { BirthDetails, Gender } from '../logic/models/BirthDetails';
// clsx input removed

interface InputFormProps {
    onSubmit: (details: BirthDetails, predictionDate?: Date) => void;
}

export const InputForm = ({ onSubmit }: InputFormProps) => {
    const [formData, setFormData] = useState({
        year: 1990,
        month: 1,
        day: 1,
        hour: 12,
        minute: 0,
        gender: 'Male' as Gender
    });

    // Prediction Logic Toggle
    const [showPrediction, setShowPrediction] = useState(true);
    const [targetDate, setTargetDate] = useState(new Date().toISOString().split('T')[0]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'gender' ? value : parseInt(value)
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Only pass prediction date if toggle is on
        const pDate = (showPrediction && targetDate) ? new Date(targetDate) : undefined;

        onSubmit({
            ...formData,
        }, pDate);
    };

    return (
        <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700 w-full max-w-md mx-auto mb-8">
            <h2 className="text-xl font-semibold text-purple-300 mb-4">出生資料輸入 (Birth Details)</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Birth Inputs: Date */}
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <label className="block text-xs text-slate-400 mb-1">出生年 (Year)</label>
                        <input type="number" name="year" value={formData.year} onChange={handleChange} className="w-full bg-slate-900 border border-slate-600 rounded px-3 py-2 text-white" />
                    </div>
                    <div>
                        <label className="block text-xs text-slate-400 mb-1">月 (Month)</label>
                        <input type="number" name="month" min="1" max="12" value={formData.month} onChange={handleChange} className="w-full bg-slate-900 border border-slate-600 rounded px-3 py-2 text-white" />
                    </div>
                    <div>
                        <label className="block text-xs text-slate-400 mb-1">日 (Day)</label>
                        <input type="number" name="day" min="1" max="31" value={formData.day} onChange={handleChange} className="w-full bg-slate-900 border border-slate-600 rounded px-3 py-2 text-white" />
                    </div>
                </div>

                {/* Birth Inputs: Time & Gender */}
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <label className="block text-xs text-slate-400 mb-1">時 (Hour 0-23)</label>
                        <input type="number" name="hour" min="0" max="23" value={formData.hour} onChange={handleChange} className="w-full bg-slate-900 border border-slate-600 rounded px-3 py-2 text-white" />
                    </div>
                    <div>
                        <label className="block text-xs text-slate-400 mb-1">分 (Minute)</label>
                        <input type="number" name="minute" min="0" max="59" value={formData.minute} onChange={handleChange} className="w-full bg-slate-900 border border-slate-600 rounded px-3 py-2 text-white" />
                    </div>
                    <div>
                        <label className="block text-xs text-slate-400 mb-1">性別 (Gender)</label>
                        <select name="gender" value={formData.gender} onChange={handleChange} className="w-full bg-slate-900 border border-slate-600 rounded px-3 py-2 text-white">
                            <option value="Male">男 (Male)</option>
                            <option value="Female">女 (Female)</option>
                        </select>
                    </div>
                </div>

                <hr className="border-slate-700 my-4" />

                {/* Toggle Prediction Section */}
                <div className="bg-slate-900/50 rounded p-2 border border-slate-700">
                    <button
                        type="button"
                        onClick={() => setShowPrediction(!showPrediction)}
                        className="flex items-center justify-between w-full text-xs text-slate-400 hover:text-white transition-colors"
                    >
                        <span>進階功能：運勢預測 (Prediction)</span>
                        <span>{showPrediction ? '−' : '+'}</span>
                    </button>

                    {showPrediction && (
                        <div className="mt-3 animate-fade-in">
                            <label className="block text-xs text-amber-500 mb-1">預測日期 (Prediction Date)</label>
                            <input
                                type="date"
                                value={targetDate}
                                onChange={(e) => setTargetDate(e.target.value)}
                                className="w-full bg-slate-900 border border-amber-800 rounded px-3 py-2 text-white focus:border-amber-500"
                            />
                            <p className="text-[10px] text-slate-500 mt-1">
                                * 開啟後將在命盤顯示流年(Year)與流月(Month)宮位
                            </p>
                        </div>
                    )}
                </div>

                <button type="submit" className="w-full bg-purple-600 hover:bg-purple-500 text-white font-medium py-2 rounded transition-colors shadow-lg shadow-purple-900/20">
                    {showPrediction ? '排盤 + 運勢 (Generate Chart + Prediction)' : '開始排盤 (Generate Chart)'}
                </button>
            </form>
        </div>
    );
};
