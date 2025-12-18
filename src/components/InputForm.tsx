import { useState } from 'react';
import { BirthDetails, Gender } from '../logic/models/BirthDetails';

interface InputFormProps {
    onSubmit: (details: BirthDetails) => void;
}

export const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        year: 1990,
        month: 1,
        day: 1,
        hour: 12,
        minute: 0,
        gender: 'Male' as Gender
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'gender' ? value : parseInt(value)
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            ...formData,
        });
    };

    return (
        <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700 w-full max-w-md mx-auto mb-8">
            <h2 className="text-xl font-semibold text-purple-300 mb-4">Enter Birth Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <label className="block text-xs text-slate-400 mb-1">Year</label>
                        <input
                            type="number" name="year" value={formData.year} onChange={handleChange}
                            className="w-full bg-slate-900 border border-slate-600 rounded px-3 py-2 text-white focus:outline-none focus:border-purple-500"
                        />
                    </div>
                    <div>
                        <label className="block text-xs text-slate-400 mb-1">Month</label>
                        <input
                            type="number" name="month" min="1" max="12" value={formData.month} onChange={handleChange}
                            className="w-full bg-slate-900 border border-slate-600 rounded px-3 py-2 text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-xs text-slate-400 mb-1">Day</label>
                        <input
                            type="number" name="day" min="1" max="31" value={formData.day} onChange={handleChange}
                            className="w-full bg-slate-900 border border-slate-600 rounded px-3 py-2 text-white"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs text-slate-400 mb-1">Hour (0-23)</label>
                        <input
                            type="number" name="hour" min="0" max="23" value={formData.hour} onChange={handleChange}
                            className="w-full bg-slate-900 border border-slate-600 rounded px-3 py-2 text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-xs text-slate-400 mb-1">Gender</label>
                        <select
                            name="gender" value={formData.gender} onChange={handleChange}
                            className="w-full bg-slate-900 border border-slate-600 rounded px-3 py-2 text-white"
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-500 text-white font-medium py-2 rounded transition-colors"
                >
                    Generate Chart
                </button>
            </form>
        </div>
    );
};
