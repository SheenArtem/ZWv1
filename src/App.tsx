import React, { useState } from 'react';
import { InputForm } from './components/InputForm';
import { ChartGrid } from './components/Chart/ChartGrid';
import { BirthDetails } from './logic/models/BirthDetails';
import { ChartData } from './logic/models/ChartData';
import { generateChart } from './logic/ChartBuilder';

function App() {
    const [chartData, setChartData] = useState<ChartData | null>(null);

    const handleGenerate = (details: BirthDetails) => {
        // Generate the chart using logic engine
        const data = generateChart(details);
        setChartData(data);
    };

    return (
        <div className="min-h-screen bg-slate-900 text-white py-10 px-4">
            <div className="max-w-6xl mx-auto">
                <header className="text-center mb-10">
                    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                        Zi Wei Dou Shu
                    </h1>
                    <p className="text-slate-400 mt-2">Professional Astrological Chart Generation</p>
                </header>

                <InputForm onSubmit={handleGenerate} />

                {chartData && (
                    <div className="animate-fade-in mt-10">
                        <ChartGrid chart={chartData} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
