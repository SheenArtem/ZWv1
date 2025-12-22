import { FC } from 'react';
import { PalaceData, Star } from '../../logic/models/ChartData';
import clsx from 'clsx';

interface PalaceCardProps {
    data: PalaceData;
    className?: string;
    isLiuNian?: boolean;
    isLiuYue?: boolean;
    displayMode?: 'all' | 'birth' | 'year' | 'month' | 'decade';
    yearPalaceName?: string;
    monthPalaceName?: string;
    decadePalaceName?: string;
}

export const PalaceCard: FC<PalaceCardProps> = ({ data, className, isLiuNian, isLiuYue, displayMode = 'all', yearPalaceName, monthPalaceName, decadePalaceName }) => {
    // Badges text-sm (14px)
    const renderMutagens = (star: Star) => {
        const badges = [];
        const charMap: Record<string, string> = { 'Lu': '祿', 'Quan': '權', 'Ke': '科', 'Ji': '忌' };

        // Birth (Always Show, Red Background, White Text)
        if (star.mutagen) {
            badges.push(
                <span key="birth" className={clsx("ml-1 text-[16px] px-1 rounded border font-bold inline-block leading-tight bg-red-600 border-red-400 text-white")}>
                    生年 {charMap[star.mutagen]}
                </span>
            );
        }

        // Liu Nian
        if (star.liuNianMutagen && (displayMode === 'all' || displayMode === 'year' || displayMode === 'month')) {
            badges.push(
                <span key="liunian" className={clsx("ml-1 text-[16px] px-1 rounded border border-amber-500 bg-amber-900/80 text-amber-100 font-bold inline-block leading-tight")}>
                    流年 {charMap[star.liuNianMutagen]}
                </span>
            );
        }

        // Liu Yue
        if (star.liuYueMutagen && (displayMode === 'all' || displayMode === 'month')) {
            badges.push(
                <span key="liuyue" className={clsx("ml-1 text-[16px] px-1 rounded border border-emerald-500 bg-emerald-900/80 text-emerald-100 font-bold inline-block leading-tight")}>
                    流月 {charMap[star.liuYueMutagen]}
                </span>
            );
        }

        // Da Xian
        if (star.daXianMutagen && (displayMode === 'all' || displayMode === 'decade' || displayMode === 'year' || displayMode === 'month')) {
            badges.push(
                <span key="daxian" className={clsx("ml-1 text-[16px] px-1 rounded border border-indigo-500 bg-indigo-900/80 text-indigo-100 font-bold inline-block leading-tight")}>
                    大限 {charMap[star.daXianMutagen]}
                </span>
            );
        }

        return badges;
    };

    const MajorStarItem = ({ star }: { star: Star }) => (
        <div className="flex items-center gap-1 mb-0.5 flex-wrap">
            <span className={clsx(
                "text-[16px] font-bold leading-tight",
                'text-purple-400'
            )}>
                {star.name}
            </span>
            {star.brightness && (
                <span className="text-[16px] text-amber-300 font-normal leading-tight">
                    {star.brightness}
                </span>
            )}
            {renderMutagens(star)}
        </div>
    );

    const MinorStarItem = ({ star }: { star: Star }) => (
        <div className="inline-block mb-1">
            <span className={clsx(
                "text-[16px] leading-tight",
                star.type === 'bad' ? 'text-blue-300' : 'text-slate-200'
            )}>
                {star.name}
            </span>
            {renderMutagens(star)}
        </div>
    );

    const GodItem = ({ name, color }: { name: string, color: string }) => {
        if (!name || name.trim() === '') return null; // Don't render if empty
        return (
            <span className={clsx("text-[16px] leading-tight mr-2", color)}>
                {name}
            </span>
        );
    };

    return (
        <div className={clsx(
            "p-1 flex flex-col hover:bg-slate-800 transition-colors duration-200 bg-slate-950",
            className,
            isLiuNian && "ring-[2px] ring-inset ring-amber-500 z-10",
            isLiuYue && !isLiuNian && "ring-[2px] ring-inset ring-emerald-500 z-10"
        )}>
            {/* Corner Badges */}
            {isLiuNian && (displayMode === 'all' || displayMode === 'year') && (
                <div className="absolute top-0 right-0 bg-amber-600 text-[16px] px-1 text-white font-bold opacity-full z-20">
                    流年
                </div>
            )}
            {isLiuYue && (displayMode === 'all' || displayMode === 'month') && (
                <div className="absolute top-0 right-12 bg-emerald-600 text-[16px] px-1 text-white font-bold opacity-full z-20">
                    流月
                </div>
            )}
            {(displayMode === 'decade' && decadePalaceName === '命宮') && (
                <div className="absolute top-0 right-0 bg-indigo-600 text-[16px] px-1 text-white font-bold opacity-full z-20">
                    大限
                </div>
            )}

            {/* Main Grid Layout */}
            <div className="flex h-full w-full relative">
                <div className="w-[40%] flex flex-col pt-6 pl-1 pointer-events-none z-10">
                    {data.majorStars.map(s => <MajorStarItem key={s.name} star={s} />)}
                </div>
                <div className="w-[60%] flex flex-row flex-wrap pt-6 pr-1 justify-end content-start gap-x-1 z-0">
                    {data.minorStars.map(s => <MinorStarItem key={s.name} star={s} />)}
                </div>
            </div>

            {/* Bottom Area */}
            <div className="absolute bottom-0 w-full flex flex-col px-1 pb-1 bg-gradient-to-t from-slate-900 via-slate-900 to-transparent pt-8">
                <div className="flex justify-between text-[16px] mb-1">
                    <div className="flex flex-col text-[14px] leading-tight mb-1">
                        <div className="flex flex-wrap">
                            <GodItem name={data.gods.changSheng} color="text-amber-400" />
                            <GodItem name={data.gods.boShi} color="text-slate-300" />
                        </div>
                        <div className="flex flex-wrap">
                            <GodItem name={data.gods.suiJian} color="text-slate-400" />
                            <GodItem name={data.gods.jiangQian} color="text-slate-400" />
                        </div>
                    </div>
                </div>

                <div className="text-[16px] text-sky-300 font-mono leading-tight h-auto min-h-[1.2em] overflow-hidden text-center whitespace-normal break-words mb-1">
                    {data.xiaoXian}
                </div>

                <div className="flex justify-between items-end mt-1 border-t border-slate-700 pt-1">
                    <span className="text-[16px] font-bold text-amber-500 font-mono leading-tight">
                        {data.daXian}
                    </span>

                    {/* Render Title Stack */}
                    <div className="flex flex-col items-center">

                        {/* Month View: Decade + Year + Month */}
                        {displayMode === 'month' && (
                            <>
                                {decadePalaceName && (
                                    <span className="text-[16px] text-indigo-400 font-bold leading-tight mb-0.5 opacity-80">
                                        {decadePalaceName}
                                    </span>
                                )}
                                {yearPalaceName && (
                                    <span className="text-[16px] text-amber-500 font-bold leading-tight mb-0.5 opacity-90">
                                        {yearPalaceName}
                                    </span>
                                )}
                                {monthPalaceName ? (
                                    <span className="text-[18px] text-emerald-400 font-bold leading-tight">
                                        {monthPalaceName}
                                    </span>
                                ) : (
                                    <span className="text-[18px] text-slate-500 font-bold leading-tight">-</span>
                                )}
                            </>
                        )}

                        {/* Year View: Birth + Decade + Year */}
                        {displayMode === 'year' && (
                            <>
                                <span className="text-[16px] text-red-500 font-bold leading-tight mb-0.5 opacity-60">
                                    {data.palaceName}
                                </span>
                                {decadePalaceName && (
                                    <span className="text-[16px] text-indigo-400 font-bold leading-tight mb-0.5 opacity-80">
                                        {decadePalaceName}
                                    </span>
                                )}
                                {yearPalaceName ? (
                                    <span className="text-[18px] text-amber-500 font-bold leading-tight">
                                        {yearPalaceName}
                                    </span>
                                ) : (
                                    <span className="text-[18px] text-slate-500 font-bold leading-tight">-</span>
                                )}
                            </>
                        )}

                        {/* Decade View: Decade Only (or Rotated) */}
                        {displayMode === 'decade' && (
                            <span className="text-[18px] font-bold text-indigo-400 leading-tight">
                                {decadePalaceName || data.palaceName}
                            </span>
                        )}

                        {/* Birth View / Default */}
                        {(displayMode === 'birth' || displayMode === 'all') && (
                            <span className="text-[18px] font-bold text-red-500 leading-tight">
                                {data.palaceName}
                            </span>
                        )}

                    </div>

                    <span className="text-[16px] text-amber-300 font-mono leading-tight">
                        {data.stemName}{data.branchName}
                    </span>
                </div>
            </div>
        </div>
    );
};
