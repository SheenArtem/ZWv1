import { FC } from 'react';
import { ChartData } from '../../logic/models/ChartData';
import { PalaceCard } from './PalaceCard';

interface ChartGridProps {
    chart: ChartData;
}

export const ChartGrid: FC<ChartGridProps> = ({ chart }) => {
    const getPalaceElement = (branchIndex: number) => {
        const p = chart.palaces.find(p => p.branchIndex === branchIndex)!;
        const isLiuNian = chart.liuNianIndex === branchIndex;
        const isLiuYue = chart.liuYueIndex === branchIndex;

        return (
            <PalaceCard
                data={p}
                isLiuNian={isLiuNian}
                isLiuYue={isLiuYue}
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
        <div className="col-span-2 row-span-2 bg-slate-900 flex flex-col items-center justify-center border border-slate-700 p-4">
            <h3 className="text-3xl font-bold text-amber-500 mb-4">紫微斗數</h3>
            <div className="text-slate-300 text-sm space-y-2 text-center font-medium">
                <p>五行局: {bureauMap[chart.bureau] || chart.bureau}</p>
                <div className="flex gap-4 justify-center">
                    <p>命主: {chart.mingZhu || 'Unknown'}</p>
                    <p>身主: {chart.shenZhu || 'Unknown'}</p>
                </div>
                {chart.siHuaSummary && (
                    <div className="mt-2 p-2 bg-slate-800 rounded border border-slate-700">
                        <p className="text-xs text-slate-400 mb-1">生年四化</p>
                        <p className="text-amber-400 text-base">{chart.siHuaSummary}</p>
                    </div>
                )}
                <p className="mt-4 text-xs text-slate-500">標準排盤系統 (Standard v2.5)</p>
            </div>
        </div>
    );

    // Increased gap slightly to accommodate fuller cards potentially?
    // Kept grid strict for layout.
    return (
        <div className="grid grid-cols-4 gap-1 w-full max-w-5xl mx-auto aspect-square bg-slate-900 p-1 rounded-lg shadow-2xl">
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
