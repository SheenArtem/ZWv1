import { FC } from 'react';
import { ChartData } from '../../logic/models/ChartData';
import { PalaceCard } from './PalaceCard';

interface ChartGridProps {
    chart: ChartData;
    displayMode?: 'all' | 'birth' | 'year' | 'month' | 'decade';
}

export const ChartGrid: FC<ChartGridProps> = ({ chart, displayMode = 'all' }) => {
    // No local state - controlled by parent

    const getPalaceElement = (branchIndex: number) => {
        const p = chart.palaces.find(p => p.branchIndex === branchIndex)!;
        const isLiuNian = chart.liuNianIndex === branchIndex;
        const isLiuYue = chart.liuYueIndex === branchIndex;

        // Calculate Stacked / Dynamic Layer Names
        let yearPalaceName: string | undefined;
        let monthPalaceName: string | undefined;
        let decadePalaceName: string | undefined;

        const palaceNames = ['命宮', '兄弟', '夫妻', '子女', '財帛', '疾厄', '遷移', '交友', '官祿', '田宅', '福德', '父母'];

        // 1. Decade Name (Used in Decade, Year, and Month views)
        if (['decade', 'year', 'month'].includes(displayMode as string)) {
            if (chart.daXianIndex !== undefined) {
                // For Decade View: We might rotate? 
                // Current logic: If 'decade', we rotate the grid labels in PalaceCard? 
                // Or we rotate the GRID here?
                // User request for Year/Month is "Stacked" (Overlay).
                // Decade View was previously "Rotated".
                // Let's keep Decade View simple (Prop passes name, PalaceCard decides display).

                const decadeSeq = (chart.daXianIndex - branchIndex + 12) % 12;
                decadePalaceName = (decadeSeq >= 0 && decadeSeq < 12) ? `大限${palaceNames[decadeSeq]}` : undefined;
            }
        }

        // 2. Year Name (Used in Year and Month views)
        if (['year', 'month'].includes(displayMode as string)) {
            if (chart.liuNianIndex !== undefined) {
                const yearSeq = (chart.liuNianIndex - branchIndex + 12) % 12;
                yearPalaceName = (yearSeq >= 0 && yearSeq < 12) ? `流年${palaceNames[yearSeq]}` : undefined;
            }
        }

        // 3. Month Name (Used in Month view)
        if (displayMode === 'month' as any) {
            if (chart.liuYueIndex !== undefined) {
                const monthSeq = (chart.liuYueIndex - branchIndex + 12) % 12;
                monthPalaceName = (monthSeq >= 0 && monthSeq < 12) ? `流月${palaceNames[monthSeq]}` : undefined;
            }
        }

        return (
            <div className="relative w-full h-full min-h-0">
                <PalaceCard
                    data={p}
                    isLiuNian={isLiuNian}
                    isLiuYue={isLiuYue}
                    displayMode={displayMode as any}
                    yearPalaceName={yearPalaceName}
                    monthPalaceName={monthPalaceName}
                    decadePalaceName={decadePalaceName}
                    className="absolute inset-0 w-full h-full z-10 overflow-hidden"
                />
            </div>
        );

    };

    const PalaceWrapper = ({ branchIndex }: { branchIndex: number }) => getPalaceElement(branchIndex);

    const CenterInfo = () => (
        <div className="col-span-2 row-span-2 bg-slate-900 flex flex-col items-center justify-center border border-slate-700 p-2 overflow-y-auto relative group">
            <h3 className="text-3xl font-bold text-amber-500 mb-2">紫微斗數</h3>
            <div className="text-slate-300 text-sm space-y-1 text-center font-medium w-full">

                {/* Birth Info Block */}
                <div className="bg-slate-800/50 p-2 rounded mb-2 border border-slate-700 text-center">
                    <div className="text-base mb-1">
                        <div className="flex justify-center items-center gap-3">
                            <span className="text-amber-50 font-bold text-xl">{chart.birthDate}</span>
                            <span className="text-amber-400 font-bold text-xl">
                                {chart.zodiac}
                                {chart.yinYangGender && (
                                    <span className="ml-2">
                                        {chart.yinYangGender}
                                    </span>
                                )}
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-center gap-4 text-slate-200 text-base">
                        <span>農曆: {chart.lunarDate}</span>
                        <span>八字: {chart.baZi}</span>
                    </div>
                    <div className="flex gap-4 justify-center text-base mt-2 border-t border-slate-700/50 pt-2 text-slate-300">
                        <p>局數: {chart.bureau}</p>
                        <p>命主: {chart.mingZhu || 'Unknown'}</p>
                        <p>身主: {chart.shenZhu || 'Unknown'}</p>
                    </div>
                </div>

                {/* Prediction Info Block */}
                {chart.predictionDate && (
                    <div className="bg-indigo-900/30 p-2 rounded mb-2 border border-indigo-500/30 text-center">
                        <p className="text-indigo-300 font-bold mb-1 text-lg">運勢預測</p>

                        <div className="flex justify-center gap-4 text-indigo-200 text-base mb-1">
                            <span>農曆: {chart.predictionLunarDate}</span>
                            <span>干支: {chart.predictionGanZhi}</span>
                        </div>

                        {/* Date Ranges */}
                        <div className="text-base text-slate-300 space-y-0.5 border-t border-indigo-500/20 pt-1 font-bold">
                            {chart.daXianDateRange && <p className="text-indigo-400">大限: {chart.daXianDateRange}</p>}
                            {chart.liuNianDateRange && <p>流年: {chart.liuNianDateRange}</p>}
                            {chart.liuYueDateRange && <p>流月: {chart.liuYueDateRange}</p>}
                        </div>
                    </div>
                )}

                {/* Si Hua Summaries */}
                <div className="flex flex-wrap justify-center gap-2 mt-2 w-full px-1">
                    {/* Birth Si Hua */}
                    {chart.siHuaSummary && (
                        <div className="p-2 bg-slate-800 rounded border border-slate-600 shadow-sm flex flex-col justify-center min-w-[110px]">
                            <p className="text-sm text-slate-400 font-bold mb-0.5 text-center">生年四化</p>
                            <p className="text-red-500 text-base font-bold tracking-wide text-center leading-tight whitespace-pre-wrap">{chart.siHuaSummary}</p>
                        </div>
                    )}

                    {/* Da Xian Si Hua */}
                    {chart.daXianSiHuaSummary && (displayMode === 'all' || displayMode === 'decade' as any || displayMode === 'year' as any || displayMode === 'month' as any) && (
                        <div className="p-2 bg-slate-800 rounded border border-indigo-900/50 shadow-sm flex flex-col justify-center min-w-[110px]">
                            <p className="text-sm text-indigo-400 font-bold mb-0.5 text-center">大限四化</p>
                            <p className="text-indigo-300 text-base font-bold tracking-wide text-center leading-tight whitespace-pre-wrap">{chart.daXianSiHuaSummary}</p>
                        </div>
                    )}

                    {/* Liu Nian Si Hua */}
                    {chart.liuNianSiHuaSummary && (displayMode === 'all' || displayMode === 'year' as any || displayMode === 'month' as any) && (
                        <div className="p-2 bg-slate-800 rounded border border-amber-900/50 shadow-sm flex flex-col justify-center min-w-[110px]">
                            <p className="text-sm text-amber-600 font-bold mb-0.5 text-center">流年四化</p>
                            <p className="text-amber-400 text-base font-bold tracking-wide text-center leading-tight whitespace-pre-wrap">{chart.liuNianSiHuaSummary}</p>
                        </div>
                    )}

                    {/* Liu Yue Si Hua */}
                    {chart.liuYueSiHuaSummary && (displayMode === 'all' || displayMode === 'month') && (
                        <div className="p-2 bg-slate-800 rounded border border-emerald-900/50 shadow-sm flex flex-col justify-center min-w-[110px]">
                            <p className="text-sm text-emerald-600 font-bold mb-0.5 text-center">流月四化</p>
                            <p className="text-emerald-400 text-base font-bold tracking-wide text-center leading-tight whitespace-pre-wrap">{chart.liuYueSiHuaSummary}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <div className="grid grid-cols-4 grid-rows-4 gap-[1px] w-full h-full min-h-0 bg-slate-600 border border-slate-600 rounded-lg shadow-2xl overflow-hidden aspect-[1/1] md:aspect-auto">
            {/* Row 1 */}
            <PalaceWrapper branchIndex={5} /> {/* Si */}
            <PalaceWrapper branchIndex={6} /> {/* Wu */}
            <PalaceWrapper branchIndex={7} /> {/* Wei */}
            <PalaceWrapper branchIndex={8} /> {/* Shen */}

            {/* Row 2 */}
            <PalaceWrapper branchIndex={4} /> {/* Chen */}
            <CenterInfo /> {/* Center Block spans 2x2 */}
            <PalaceWrapper branchIndex={9} /> {/* You */}

            {/* Row 3 */}
            <PalaceWrapper branchIndex={3} /> {/* Mao */}
            {/* Center occupied */}
            <PalaceWrapper branchIndex={10} /> {/* Xu */}

            {/* Row 4 */}
            <PalaceWrapper branchIndex={2} /> {/* Yin */}
            <PalaceWrapper branchIndex={1} /> {/* Chou */}
            <PalaceWrapper branchIndex={0} /> {/* Zi */}
            <PalaceWrapper branchIndex={11} /> {/* Hai */}
        </div>
    );
};
