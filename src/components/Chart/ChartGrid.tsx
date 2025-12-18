import { FC } from 'react';
import { ChartData } from '../../logic/models/ChartData';
import { PalaceCard } from './PalaceCard';

interface ChartGridProps {
    chart: ChartData;
    displayMode?: 'all' | 'birth' | 'year' | 'month';
}

export const ChartGrid: FC<ChartGridProps> = ({ chart, displayMode = 'all' }) => {
    const getPalaceElement = (branchIndex: number) => {
        const p = chart.palaces.find(p => p.branchIndex === branchIndex)!;
        const isLiuNian = chart.liuNianIndex === branchIndex;
        const isLiuYue = chart.liuYueIndex === branchIndex;

        return (
            <PalaceCard
                data={p}
                isLiuNian={isLiuNian}
                isLiuYue={isLiuYue}
                displayMode={displayMode}
            />
        );
    };

    const bureauMap: Record<number, string> = {
        2: '水二局',
        3: '木三局',
        4: '金四局',
        5: '土五局',
        6: '火六局'
    };

    const CenterInfo = () => (
        <div className="col-span-2 row-span-2 bg-slate-900 flex flex-col items-center justify-center border border-slate-700 p-2 overflow-y-auto">
            <h3 className="text-3xl font-bold text-amber-500 mb-2">紫微斗數</h3>
            <div className="text-slate-300 text-sm space-y-2 text-center font-medium w-full">
                <div className="flex gap-4 justify-center text-base">
                    <p>局數: {bureauMap[chart.bureau] || chart.bureau}</p>
                    <p>命主: {chart.mingZhu || 'Unknown'}</p>
                    <p>身主: {chart.shenZhu || 'Unknown'}</p>
                </div>

                {/* Si Hua Summaries */}
                <div className="flex flex-col gap-2 mt-2 w-full px-2">
                    {/* Birth Si Hua - Show if mode is 'all' or 'birth' */}
                    {chart.siHuaSummary && (displayMode === 'all' || displayMode === 'birth') && (
                        <div className="p-2 bg-slate-800 rounded border border-slate-600 shadow-sm">
                            <p className="text-xs text-slate-400 font-bold mb-1">生年四化 (Life)</p>
                            <p className="text-amber-400 text-base font-bold tracking-wide">{chart.siHuaSummary}</p>
                        </div>
                    )}

                    {(chart.liuNianSiHuaSummary || chart.liuYueSiHuaSummary) && (
                        <div className="grid grid-cols-1 gap-2">
                            {/* Liu Nian Si Hua - Show if mode is 'all' or 'year' */}
                            {chart.liuNianSiHuaSummary && (displayMode === 'all' || displayMode === 'year') && (
                                <div className="p-2 bg-slate-800 rounded border border-amber-900/50 shadow-sm">
                                    <p className="text-xs text-amber-600 font-bold mb-1">流年四化 (Year)</p>
                                    <p className="text-amber-500 text-sm font-bold tracking-wide">{chart.liuNianSiHuaSummary}</p>
                                </div>
                            )}
                            {/* Liu Yue Si Hua - Show if mode is 'all' or 'month' */}
                            {chart.liuYueSiHuaSummary && (displayMode === 'all' || displayMode === 'month') && (
                                <div className="p-2 bg-slate-800 rounded border border-emerald-900/50 shadow-sm">
                                    <p className="text-xs text-emerald-600 font-bold mb-1">流月四化 (Month)</p>
                                    <p className="text-emerald-500 text-sm font-bold tracking-wide">{chart.liuYueSiHuaSummary}</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <p className="mt-2 text-xs text-slate-600">標準排盤系統 (v3.0)</p>
            </div>
        </div>
    );

    return (
        <div className="grid grid-cols-4 gap-1 w-full max-w-6xl mx-auto aspect-square bg-slate-900 p-1 rounded-lg shadow-2xl">
            {/* Row 1 */}
            {getPalaceElement(5)} {/* Si */}
            {getPalaceElement(6)} {/* Wu */}
            {getPalaceElement(7)} {/* Wei */}
            {getPalaceElement(8)} {/* Shen */}

            {/* Row 2 */}
            {getPalaceElement(4)} {/* Chen */}
            <CenterInfo /> {/* Center Block spans 2x2 */}
            {getPalaceElement(9)} {/* You */}

            {/* Row 3 */}
            {getPalaceElement(3)} {/* Mao */}
            {/* Center occupied */}
            {getPalaceElement(10)} {/* Xu */}

            {/* Row 4 */}
            {getPalaceElement(2)} {/* Yin */}
            {getPalaceElement(1)} {/* Chou */}
            {getPalaceElement(0)} {/* Zi */}
            {getPalaceElement(11)} {/* Hai */}
        </div>
    );
};
