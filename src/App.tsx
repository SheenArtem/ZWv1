import { useState } from 'react';
import { InputForm } from './components/InputForm';
import { ChartGrid } from './components/Chart/ChartGrid';
import { BirthDetails } from './logic/models/BirthDetails';
import { ChartData } from './logic/models/ChartData';
import { generateChart } from './logic/ChartBuilder';

function App() {
    const [chartData, setChartData] = useState<ChartData | null>(null);

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
                    <div className="animate-fade-in mt-10 flex flex-col items-center">
                        <button
                            onClick={() => setChartData(null)}
                            className="mb-6 px-6 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-full transition-colors text-sm"
                        >
                            ← 返回輸入 (Back)
                        </button>
                        <ChartGrid chart={chartData} />
                    </div>
                )}
            </div>

            <footer className="w-full text-center p-4 text-slate-600 text-xs mt-8 border-t border-slate-800">
                v2.0 專業版 (Professional) | ZWDS App
            </footer>
        </div>
    );
}

export default App;
