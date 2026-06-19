import { useState } from 'react';
import { InputForm } from './components/InputForm';
import { ChartGrid } from './components/Chart/ChartGrid';

import { BirthDetails } from './logic/models/BirthDetails';
import { ChartConventions, DEFAULT_CONVENTIONS } from './logic/models/ChartConventions';
import { ChartData, PalaceData } from './logic/models/ChartData';
import { BaziChartData } from './logic/models/BaziChartData';
import { generateChart } from './logic/ChartBuilder';
import { generateBaziChart } from './logic/bazi/BaziBuilder';
import { BaziBoard } from './components/Bazi/BaziBoard';
import { PalaceAnalysisModal } from './components/Modals/PalaceAnalysisModal';
import { Interpreter } from './logic/analysis/Interpreter';
import { generateMarkdown } from './logic/utils/markdownGenerator';

function App() {
    const [chartData, setChartData] = useState<ChartData | null>(null);
    const [baziData, setBaziData] = useState<BaziChartData | null>(null);
    const [system, setSystem] = useState<'ziwei' | 'bazi'>('ziwei');
    const [activeTab, setActiveTab] = useState<'birth' | 'decade' | 'year' | 'month'>('birth');
    const [selectedPalace, setSelectedPalace] = useState<PalaceData | null>(null);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleGenerate = (details: BirthDetails, predictionDate?: Date, conventions: ChartConventions = DEFAULT_CONVENTIONS) => {
        try {
            // Generate the chart using logic engine
            const data = generateChart(details, predictionDate, conventions);

            // Enrich with Analysis Text
            const interpreter = new Interpreter(data);
            interpreter.enrichChartWithDescriptions();

            setChartData(data);
            setBaziData(generateBaziChart(details, conventions));
            setIsMobileMenuOpen(false); // Close mobile menu on generate
        } catch (error) {
            alert(`❌ ERROR in generateChart:\n${error}`);
            console.error('Error generating chart:', error);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col h-screen overflow-hidden relative">
            {/* Mobile Toggle Button */}
            <button
                className="md:hidden fixed top-2 right-2 z-50 p-2 bg-purple-600/90 rounded-full shadow-lg text-white font-bold leading-none border border-purple-400 hover:bg-purple-500 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? '✕' : '⚙️'}
            </button>

            {/* Mobile Backdrop */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-30 md:hidden backdrop-blur-sm transition-opacity"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Main Content Area */}
            <div className="flex flex-1 overflow-hidden relative">
                {/* Left Sidebar: Input Form (Drawer on Mobile) */}
                <aside className={`
                    absolute md:static inset-y-0 left-0 z-40
                    w-[85%] max-w-[400px] md:w-[400px]
                    bg-slate-900/95 md:bg-slate-900 border-r border-slate-800
                    overflow-y-auto shrink-0 flex flex-col p-4
                    transition-transform duration-300 ease-in-out shadow-2xl md:shadow-none
                    ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                `}>
                    <InputForm onSubmit={handleGenerate} />

                    {/* System Switch: 紫微 / 八字 */}
                    {chartData && (
                        <div className="mt-4 pt-4 border-t border-slate-800 animate-fade-in">
                            <p className="text-sm text-slate-400 mb-2 font-bold">命盤系統</p>
                            <div className="grid grid-cols-2 gap-2">
                                {(['ziwei', 'bazi'] as const).map(sys => (
                                    <button
                                        key={sys}
                                        onClick={() => setSystem(sys)}
                                        className={`py-2 px-3 rounded text-sm font-bold transition-all border ${system === sys
                                            ? 'bg-indigo-600 text-white border-indigo-500 shadow-md transform scale-[1.02]'
                                            : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200 hover:bg-slate-700'
                                            }`}
                                    >
                                        {sys === 'ziwei' ? '紫微斗數' : '八字'}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* View Mode Switching Controls (紫微 only) */}
                    {chartData && system === 'ziwei' && (
                        <div className="mt-4 pt-4 border-t border-slate-800 animate-fade-in">
                            <p className="text-sm text-slate-400 mb-2 font-bold">顯示模式</p>
                            <div className="grid grid-cols-2 gap-2">
                                <button
                                    onClick={() => setActiveTab('birth')}
                                    className={`py-2 px-3 rounded text-sm font-bold transition-all border ${activeTab === 'birth'
                                        ? 'bg-purple-600 text-white border-purple-500 shadow-md transform scale-[1.02]'
                                        : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200 hover:bg-slate-700'
                                        }`}
                                >
                                    本命盤
                                </button>



                                {chartData.liuNianIndex !== undefined && (
                                    <>
                                        <button
                                            onClick={() => setActiveTab('decade')}
                                            className={`py-2 px-3 rounded text-sm font-bold transition-all border ${activeTab === 'decade'
                                                ? 'bg-purple-600 text-white border-purple-500 shadow-md transform scale-[1.02]'
                                                : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200 hover:bg-slate-700'
                                                }`}
                                        >
                                            大限盤
                                        </button>
                                        <button
                                            onClick={() => setActiveTab('year')}
                                            className={`py-2 px-3 rounded text-sm font-bold transition-all border ${activeTab === 'year'
                                                ? 'bg-purple-600 text-white border-purple-500 shadow-md transform scale-[1.02]'
                                                : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200 hover:bg-slate-700'
                                                }`}
                                        >
                                            流年盤
                                        </button>
                                        <button
                                            onClick={() => setActiveTab('month')}
                                            className={`py-2 px-3 rounded text-sm font-bold transition-all border ${activeTab === 'month'
                                                ? 'bg-purple-600 text-white border-purple-500 shadow-md transform scale-[1.02]'
                                                : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200 hover:bg-slate-700'
                                                }`}
                                        >
                                            流月盤
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    )}

                    <div className="mt-auto pt-4 pb-2 text-center opacity-80 hover:opacity-100 transition-opacity">
                        {chartData && (
                            <button
                                onClick={() => {
                                    const md = generateMarkdown(chartData, activeTab);
                                    navigator.clipboard.writeText(md);
                                    alert('Markdown Copied (' + activeTab + ' mode');
                                }}
                                className="w-full mb-4 py-2 px-3 rounded text-sm font-bold bg-slate-800 text-slate-400 border border-slate-700 hover:text-white hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
                            >
                                📋 複製 Markdown
                            </button>
                        )}
                        <h1 className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                            紫微斗數 v3.6.0
                        </h1>
                    </div>
                </aside>

                {/* Right Area: Chart */}
                <main className="flex-1 overflow-hidden bg-slate-950 p-1 md:p-2 flex flex-col items-center h-full">
                    {!chartData ? (
                        <div className="flex flex-col items-center justify-center h-full text-slate-500 opacity-50">
                            <div className="text-6xl mb-4">🔮</div>
                            <p>請在左側輸入資料並點擊排盤</p>
                            <div className="md:hidden mt-4">
                                <InputForm onSubmit={handleGenerate} />
                            </div>
                        </div>
                    ) : (
                        <div className="w-full h-full animate-fade-in">
                            {system === 'bazi' && baziData ? (
                                <BaziBoard bazi={baziData} />
                            ) : (
                                <ChartGrid
                                    chart={chartData}
                                    displayMode={activeTab}
                                    onPalaceClick={setSelectedPalace}
                                    selectedPalaceId={selectedPalace?.palaceName}
                                />
                            )}
                        </div>
                    )}
                </main>
            </div >
            <PalaceAnalysisModal
                isOpen={!!selectedPalace}
                onClose={() => setSelectedPalace(null)}
                palace={selectedPalace}
            />
        </div >
    );
}

export default App;
