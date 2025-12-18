import { useState } from 'react';
import { InputForm } from './components/InputForm';
import { ChartGrid } from './components/Chart/ChartGrid';
import { BirthDetails } from './logic/models/BirthDetails';
import { ChartData } from './logic/models/ChartData';
import { generateChart } from './logic/ChartBuilder';

function App() {
    const [chartData, setChartData] = useState<ChartData | null>(null);
    const [activeTab, setActiveTab] = useState<'birth' | 'year' | 'month'>('birth');

    const handleGenerate = (details: BirthDetails, predictionDate?: Date) => {
        // Generate the chart using logic engine
        const data = generateChart(details, predictionDate);
        setChartData(data);
    };

    return (
        <div className="min-h-screen bg-slate-900 text-white py-10 px-4 flex flex-col">
            <div className="max-w-6xl mx-auto flex-grow w-full">
                <header className="text-center mb-10">
                    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                        紫微斗數 (Zi Wei Dou Shu)
                    </h1>
                    <p className="text-slate-400 mt-2">專業排盤系統 (Professional Astrological Chart Generation)</p>
                </header>

                {!chartData ? (
                    <InputForm onSubmit={handleGenerate} />
                ) : (
                    <div className="animate-fade-in mt-10 flex flex-col items-center w-full">
                        <div className="flex w-full justify-between items-center mb-6 max-w-6xl">
                            <button
                                onClick={() => setChartData(null)}
                                className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-full transition-colors text-sm"
                            >
                                ← 返回輸入 (Back)
                            </button>

                            {/* Tabs for Prediction Mode */}
                            {(chartData.liuNianIndex !== undefined) && (
                                <div className="flex bg-slate-800 rounded-lg p-1 border border-slate-700">
                                    {(['birth', 'year', 'month'] as const).map((mode) => (
                                        <button
                                            key={mode}
                                            onClick={() => setActiveTab(mode)}
                                            className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${activeTab === mode
                                                ? 'bg-purple-600 text-white shadow-md'
                                                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700'
                                                }`}
                                        >
                                            {mode === 'birth' && '本命盤 (Birth)'}
                                            {mode === 'year' && '流年盤 (Year)'}
                                            {mode === 'month' && '流月盤 (Month)'}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <ChartGrid chart={chartData} displayMode={activeTab} />
                    </div>
                )}
            </div>

            <footer className="w-full text-center p-4 text-slate-600 text-[14px] mt-8 border-t border-slate-800">
                v3.0 專業版 (Prediction Si Hua & Dou Jun) | ZWDS App
            </footer>
        </div>
    );
}

export default App;
