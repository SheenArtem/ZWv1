import { useState } from 'react';
import { InputForm } from './components/InputForm';
import { ChartGrid } from './components/Chart/ChartGrid';
import { AnalysisView } from './components/AnalysisView';
import { BirthDetails } from './logic/models/BirthDetails';
import { ChartData } from './logic/models/ChartData';
import { generateChart } from './logic/ChartBuilder';

function App() {
    const [chartData, setChartData] = useState<ChartData | null>(null);
    const [activeTab, setActiveTab] = useState<'birth' | 'decade' | 'year' | 'month' | 'analysis'>('birth');

    const handleGenerate = (details: BirthDetails, predictionDate?: Date) => {
        try {
            // Generate the chart using logic engine
            const data = generateChart(details, predictionDate);
            setChartData(data);
        } catch (error) {
            alert(`❌ ERROR in generateChart:\n${error}`);
            console.error('Error generating chart:', error);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col h-screen overflow-hidden">
            {/* Header */}


            {/* Main Content Area */}
            <div className="flex flex-1 overflow-hidden">
                {/* Left Sidebar: Input Form */}
                <aside className="w-[400px] bg-slate-900 border-r border-slate-800 overflow-y-auto shrink-0 hidden md:flex md:flex-col z-10 p-4">
                    <InputForm onSubmit={handleGenerate} />

                    {/* View Mode Switching Controls - Sticky Logic or just below input */}
                    {chartData && chartData.liuNianIndex !== undefined && (
                        <div className="mt-4 pt-4 border-t border-slate-800 animate-fade-in">
                            <p className="text-sm text-slate-400 mb-2 font-bold">顯示模式</p>
                            <div className="grid grid-cols-2 gap-2">
                                {(['birth', 'decade', 'year', 'month', 'analysis'] as const).map((mode) => (
                                    <button
                                        key={mode}
                                        onClick={() => setActiveTab(mode)}
                                        className={`py-2 px-3 rounded text-sm font-bold transition-all border ${activeTab === mode
                                            ? 'bg-purple-600 text-white border-purple-500 shadow-md transform scale-[1.02]'
                                            : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200 hover:bg-slate-700'
                                            }`}
                                    >
                                        {mode === 'birth' && '本命盤'}
                                        {mode === 'decade' && '大限盤'}
                                        {mode === 'year' && '流年盤'}
                                        {mode === 'month' && '流月盤'}
                                        {mode === 'analysis' && '論命分析'}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="mt-auto pt-4 pb-2 text-center opacity-80 hover:opacity-100 transition-opacity">
                        <h1 className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                            紫微斗數 v4.0.0
                        </h1>
                    </div>
                </aside>

                {/* Mobile Input Toggle (Visible only on small screens) */}
                {/* Note: In a real app we'd add a toggle, effectively standard layout acts as sidebar on desktop */}

                {/* Right Area: Chart */}
                <main className="flex-1 overflow-auto bg-slate-950 p-2 md:p-4 flex flex-col items-center">
                    {!chartData ? (
                        <div className="flex flex-col items-center justify-center h-full text-slate-500 opacity-50">
                            <div className="text-6xl mb-4">🔮</div>
                            <p>請在左側輸入資料並點擊排盤</p>
                            <div className="md:hidden mt-4">
                                <InputForm onSubmit={handleGenerate} />
                            </div>
                        </div>
                    ) : (
                        <div className="w-full max-w-[95%] animate-fade-in">
                            {activeTab === 'analysis' ? (
                                <AnalysisView chart={chartData} />
                            ) : (
                                <ChartGrid
                                    chart={chartData}
                                    displayMode={activeTab}
                                />
                            )}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

export default App;
