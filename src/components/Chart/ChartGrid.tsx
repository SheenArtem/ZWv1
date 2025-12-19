import { FC } from 'react';
import { ChartData } from '../../logic/models/ChartData';
import { PalaceCard } from './PalaceCard';

interface ChartGridProps {
    chart: ChartData;
    displayMode?: 'all' | 'birth' | 'year' | 'month' | 'stacked';
}

export const ChartGrid: FC<ChartGridProps> = ({ chart, displayMode = 'all' }) => {
    const getPalaceElement = (branchIndex: number) => {
        const p = chart.palaces.find(p => p.branchIndex === branchIndex)!;
        const isLiuNian = chart.liuNianIndex === branchIndex;
        const isLiuYue = chart.liuYueIndex === branchIndex;

        // Calculate Stacked Layer Names
        let yearPalaceName: string | undefined;
        let monthPalaceName: string | undefined;

        if (displayMode === 'stacked' && chart.liuNianIndex !== undefined) {
            // Logic:
            // The standard sequence of palaces is:
            // Limit, Siblings, Spouse, Children, Wealth, Health, Travel, Friends, Career, Property, Mental, Parents
            // 0      1         2       3         4       5       6       7        8       9         10      11

            // To find what "Year Palace" is at this branchIndex:
            // 1. Calculate the offset from the Year Life Palace (liuNianIndex).
            //    offset = (branchIndex - liuNianIndex + 12) % 12; // Clockwise? No, palaces are Counter-Clockwise usually? 
            //    Wait, usually Palace placement logic: Life at X, Siblings at X-1 (CCW) or X+1 (CW)?
            //    Let's check ChartBuilder.ts logic if needed. 
            //    Usually: Life, Siblings (CCW 1), Spouse (CCW 2)...
            //    So index = (LifeIndex - SequenceIndex + 12) % 12.

            //    Here we have the branchIndex. We want to know which SequenceIndex corresponds to it relative to liuNianIndex.
            //    branchIndex = (liuNianIndex - Seq + 12) % 12
            //    => Seq = (liuNianIndex - branchIndex + 12) % 12

            const palaceNames = ['命宮', '兄弟', '夫妻', '子女', '財帛', '疾厄', '遷移', '交友', '官祿', '田宅', '福德', '父母'];

            // Year Palace Name
            const yearSeq = (chart.liuNianIndex - branchIndex + 12) % 12;
            yearPalaceName = (yearSeq >= 0 && yearSeq < 12) ? `流年${palaceNames[yearSeq]}` : undefined;

            // Month Palace Name
            if (chart.liuYueIndex !== undefined) {
                const monthSeq = (chart.liuYueIndex - branchIndex + 12) % 12;
                monthPalaceName = (monthSeq >= 0 && monthSeq < 12) ? `流月${palaceNames[monthSeq]}` : undefined;
            }
        }

        return (
            <div className="relative w-full h-64 md:h-[300px]">
                <PalaceCard
                    data={p}
                    isLiuNian={isLiuNian}
                    isLiuYue={isLiuYue}
                    displayMode={displayMode}
                    yearPalaceName={yearPalaceName}
                    monthPalaceName={monthPalaceName}
                    className="absolute inset-0 w-full h-full z-10 overflow-hidden"
                />
            </div>
        );

    };

    // Rename to Component style for clarity in Usage
    const PalaceWrapper = ({ branchIndex }: { branchIndex: number }) => getPalaceElement(branchIndex);

    const CenterInfo = () => (
        <div className="col-span-2 row-span-2 bg-slate-900 flex flex-col items-center justify-center border border-slate-700 p-2 overflow-y-auto">
            <h3 className="text-3xl font-bold text-amber-500 mb-2">紫微斗數</h3>
            <div className="text-slate-300 text-sm space-y-2 text-center font-medium w-full">

                {/* Birth Info Block */}
                <div className="bg-slate-800/50 p-2 rounded mb-2 border border-slate-700 text-center">
                    <div className="text-[14px] mb-1">
                        <div className="flex justify-center items-center gap-4">
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
                        <span>生肖: {chart.zodiac}</span>
                    </div>
                    <div className="flex gap-4 justify-center text-base mt-1 border-t border-slate-700/50 pt-1 text-slate-300">
                        <p>局數: {chart.bureau}</p>
                        <p>命主: {chart.mingZhu || 'Unknown'}</p>
                        <p>身主: {chart.shenZhu || 'Unknown'}</p>
                    </div>
                </div>



                {/* Prediction Info Block - Only show if prediction is active */}
                {chart.predictionDate && (
                    <div className="bg-indigo-900/30 p-2 rounded mb-2 border border-indigo-500/30 text-center">
                        <p className="text-indigo-300 font-bold mb-1 text-lg">運勢預測</p>

                        <div className="flex justify-center gap-2 text-indigo-200 text-base mb-2">
                            <span>農曆: {chart.predictionLunarDate}</span>
                            <span>干支: {chart.predictionGanZhi}</span>
                        </div>

                        {/* Date Ranges */}
                        <div className="text-lg text-slate-300 space-y-0.5 border-t border-indigo-500/20 pt-1 font-bold">
                            {chart.liuNianDateRange && <p>流年: {chart.liuNianDateRange}</p>}
                            {chart.liuYueDateRange && <p>流月: {chart.liuYueDateRange}</p>}
                        </div>
                    </div>
                )}

                {/* Si Hua Summaries - Horizontal Grid to save height */}
                <div className="flex flex-wrap justify-center gap-2 mt-2 w-full px-2">
                    {/* Birth Si Hua (Always Visible) */}
                    {chart.siHuaSummary && (
                        <div className="p-1.5 bg-slate-800 rounded border border-slate-600 shadow-sm flex flex-col justify-center min-w-[120px]">
                            <p className="text-sm text-slate-400 font-bold mb-0.5 text-center">生年四化</p>
                            <p className="text-red-500 text-lg font-bold tracking-wide text-center leading-tight whitespace-pre-wrap">{chart.siHuaSummary}</p>
                        </div>
                    )}

                    {/* Liu Nian Si Hua */}
                    {chart.liuNianSiHuaSummary && (displayMode === 'all' || displayMode === 'year' || displayMode === 'stacked') && (
                        <div className="p-1.5 bg-slate-800 rounded border border-amber-900/50 shadow-sm flex flex-col justify-center min-w-[120px]">
                            <p className="text-sm text-amber-600 font-bold mb-0.5 text-center">流年四化</p>
                            <p className="text-amber-400 text-lg font-bold tracking-wide text-center leading-tight whitespace-pre-wrap">{chart.liuNianSiHuaSummary}</p>
                        </div>
                    )}

                    {/* Liu Yue Si Hua */}
                    {chart.liuYueSiHuaSummary && (displayMode === 'all' || displayMode === 'month' || displayMode === 'stacked') && (
                        <div className="p-1.5 bg-slate-800 rounded border border-emerald-900/50 shadow-sm flex flex-col justify-center min-w-[120px]">
                            <p className="text-sm text-emerald-600 font-bold mb-0.5 text-center">流月四化</p>
                            <p className="text-emerald-400 text-lg font-bold tracking-wide text-center leading-tight whitespace-pre-wrap">{chart.liuYueSiHuaSummary}</p>
                        </div>
                    )}
                </div>


            </div>
        </div>
    );

    return (
        <div className="grid grid-cols-4 gap-[1px] w-full max-w-full mx-auto bg-slate-600 border border-slate-600 rounded-lg shadow-2xl overflow-hidden">
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
