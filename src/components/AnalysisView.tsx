import React, { useMemo } from 'react';
import { ChartData } from '../logic/models/ChartData';
import { Interpreter } from '../logic/analysis/Interpreter';

interface AnalysisViewProps {
    chart: ChartData;
}

export const AnalysisView: React.FC<AnalysisViewProps> = ({ chart }) => {
    const analysis = useMemo(() => {
        try {
            const interpreter = new Interpreter(chart);
            return interpreter.analyze();
        } catch (e) {
            console.error("Analysis Error", e);
            return null;
        }
    }, [chart]);

    if (!analysis) {
        return <div className="p-4 text-red-500">無法產生分析報告</div>;
    }

    return (
        <div className="p-4 md:p-6 bg-slate-950 text-slate-100 h-full overflow-y-auto w-full">
            <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                紫微斗數論命分析報告 (Full Analysis)
            </h2>

            {/* Summary Section - High Priority */}
            <div className="bg-slate-900 rounded-xl p-6 mb-8 shadow-lg border border-slate-800 relative overflow-hidden group hover:border-slate-700 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-xl font-bold mb-4 text-emerald-400 border-b border-slate-800 pb-2 flex items-center">
                    <span className="mr-2">📝</span> 總結與格局
                </h3>
                <ul className="space-y-3">
                    {analysis.summary.map((line, idx) => (
                        <li key={idx} className="flex items-start text-slate-300">
                            <span className="text-emerald-500 mr-2 mt-1">✦</span>
                            <span className="leading-relaxed">{line}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* 12 Palaces Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {analysis.allPalaces.map((palace, pIdx) => {
                    const isLifeParent = palace.palaceName === '命宮' || palace.palaceName === '身宮'; // Highlight Life

                    return (
                        <div key={pIdx} className={`rounded-xl p-5 shadow-md border transition-all hover:shadow-xl ${isLifeParent
                            ? 'bg-slate-900 border-purple-500/50 shadow-purple-900/20'
                            : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                            }`}>
                            <h3 className={`text-lg font-bold mb-4 pb-2 border-b flex justify-between items-center ${isLifeParent ? 'text-purple-400 border-purple-900/50' : 'text-amber-500 border-slate-800'
                                }`}>
                                <span>{palace.palaceName}</span>
                                {isLifeParent && <span className="text-xs bg-purple-900 text-purple-200 px-2 py-0.5 rounded-full">核心</span>}
                            </h3>

                            <div className="space-y-4">
                                {/* Major Stars */}
                                <div>
                                    {palace.majorStars.length > 0 ? (
                                        <div className="space-y-3">
                                            {palace.majorStars.map((star, idx) => (
                                                <div key={idx} className="pl-3 border-l-2 border-slate-700 hover:border-indigo-500 transition-colors">
                                                    <div className="flex items-baseline mb-1">
                                                        <span className={`font-bold text-base ${isLifeParent ? 'text-indigo-300' : 'text-slate-200'}`}>
                                                            {star.starName}
                                                        </span>
                                                        <span className="text-xs text-slate-500 ml-2">
                                                            {star.brightness ? `[${star.brightness}]` : ''}
                                                        </span>
                                                    </div>
                                                    <p className="text-xs text-slate-400 leading-normal line-clamp-4 hover:line-clamp-none transition-all">
                                                        {star.description}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="text-slate-600 text-sm italic py-2">
                                            (無主星，借對宮論斷)
                                        </div>
                                    )}
                                </div>

                                {/* Minor / Auxiliary Stars - Compact */}
                                {palace.minorStars.length > 0 && (
                                    <div className="pt-2 border-t border-slate-800/50">
                                        <div className="flex flex-wrap gap-2 text-xs">
                                            {palace.minorStars.map((star, idx) => (
                                                <span key={idx} className="bg-slate-800 text-slate-400 px-2 py-1 rounded">
                                                    {star.starName}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Si Hua - Highlight */}
                                {palace.siHua.length > 0 && (
                                    <div className="bg-pink-900/10 p-2 rounded border border-pink-900/30">
                                        {palace.siHua.map((star, idx) => (
                                            <div key={idx} className="text-xs">
                                                <span className="font-bold text-pink-400 mr-1">{star.starName}:</span>
                                                <span className="text-pink-200/70">{star.description}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Overall Comment */}
                                <div className="pt-2">
                                    <p className="text-sm text-slate-400 leading-relaxed bg-black/20 p-2 rounded">
                                        {palace.overallComment}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="mt-8 text-center text-slate-600 text-xs">
                © ZWDS Engine v4.0 - Generated Analysis
            </div>
        </div>
    );
};
