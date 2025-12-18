import { useState } from 'react';
import { BirthDetails, Gender } from '../logic/models/BirthDetails';

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

    // Default target to today
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
        const pDate = targetDate ? new Date(targetDate) : undefined;
        onSubmit({
            ...formData,
        }, pDate);
    };

    return (
        <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700 w-full max-w-md mx-auto mb-8">
            <h2 className="text-xl font-semibold text-purple-300 mb-4">出生資料輸入 (Birth Details)</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Birth Inputs */}
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

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs text-slate-400 mb-1">時 (Hour 0-23)</label>
                        <input type="number" name="hour" min="0" max="23" value={formData.hour} onChange={handleChange} className="w-full bg-slate-900 border border-slate-600 rounded px-3 py-2 text-white" />
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

                {/* Prediction Input */}
                <div>
                    <label className="block text-xs text-amber-500 mb-1">流年流月預測日期 (Prediction Date)</label>
                    <input
                        type="date"
                        value={targetDate}
                        onChange={(e) => setTargetDate(e.target.value)}
                        className="w-full bg-slate-900 border border-amber-800 rounded px-3 py-2 text-white focus:border-amber-500"
                    />
                </div>

                <button type="submit" className="w-full bg-purple-600 hover:bg-purple-500 text-white font-medium py-2 rounded transition-colors">
                    開始排盤 (Generate Chart)
                </button>
            </form>
        </div>
    );
};
