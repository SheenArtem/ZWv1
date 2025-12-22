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
        <div className="p-6 bg-slate-900 text-slate-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-6 text-purple-400">論命分析報告 (Fate Analysis)</h2>

            {/* Life Palace Section */}
            <div className="bg-slate-800 rounded-lg p-6 mb-6 shadow-lg border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-yellow-500 border-b border-slate-600 pb-2">
                    {analysis.lifePalace.palaceName} (本命)
                </h3>

                <div className="mb-4">
                    <h4 className="font-bold text-slate-300 mb-2">主星特質</h4>
                    {analysis.lifePalace.majorStars.length > 0 ? (
                        analysis.lifePalace.majorStars.map((star, idx) => (
                            <div key={idx} className="mb-3 pl-4 border-l-2 border-purple-500">
                                <span className="text-lg font-bold text-white">{star.starName}</span>
                                <span className="text-sm text-slate-400 ml-2">[{star.brightness || '平常'}]</span>
                                <p className="text-slate-300 mt-1">{star.description}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-slate-400 italic">無主星</p>
                    )}
                </div>

                {analysis.lifePalace.minorStars.length > 0 && (
                    <div className="mb-4">
                        <h4 className="font-bold text-slate-300 mb-2">輔星與吉凶星</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {analysis.lifePalace.minorStars.map((star, idx) => (
                                <div key={idx} className="bg-slate-900/40 p-3 rounded border border-slate-700">
                                    <div className="flex items-center mb-1">
                                        <span className="font-bold text-amber-200">{star.starName}</span>
                                        {star.brightness && <span className="text-xs text-slate-500 ml-2">({star.brightness})</span>}
                                    </div>
                                    <p className="text-sm text-slate-400">{star.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {analysis.lifePalace.siHua.length > 0 && (
                    <div className="mb-4">
                        <h4 className="font-bold text-slate-300 mb-2">流年/本命四化</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {analysis.lifePalace.siHua.map((star, idx) => (
                                <div key={idx} className="bg-purple-900/20 p-3 rounded border border-purple-500/50">
                                    <div className="flex items-center mb-1">
                                        <span className="font-bold text-pink-400">{star.starName}</span>
                                    </div>
                                    <p className="text-sm text-slate-300">{star.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {analysis.lifePalace.gods && analysis.lifePalace.gods.length > 0 && (
                    <div className="mb-4">
                        <h4 className="font-bold text-slate-300 mb-2">十二長生神 (Twelve Gods)</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {analysis.lifePalace.gods.map((star, idx) => (
                                <div key={idx} className="bg-teal-900/20 p-3 rounded border border-teal-500/50">
                                    <div className="flex items-center mb-1">
                                        <span className="font-bold text-teal-400">{star.starName}</span>
                                    </div>
                                    <p className="text-sm text-slate-300">{star.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div>
                    <h4 className="font-bold text-slate-300 mb-2">綜合總評</h4>
                    <p className="text-slate-200 leading-relaxed bg-slate-900/50 p-4 rounded">
                        {analysis.lifePalace.overallComment}
                    </p>
                </div>
            </div>

            {/* Summary Section */}
            <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-green-500 border-b border-slate-600 pb-2">
                    命盤總結
                </h3>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                    {analysis.summary.map((line, idx) => (
                        <li key={idx}>{line}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
