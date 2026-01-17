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
    onClick?: () => void;
    isSelected?: boolean;
}

export const PalaceCard: FC<PalaceCardProps> = ({ data, className, isLiuNian, isLiuYue, displayMode = 'all', yearPalaceName, monthPalaceName, decadePalaceName, onClick, isSelected }) => {
    // Dynamic Font Sizing Constants - Maximum readability (Aggressive)
    const dynamicTextXs = "text-[clamp(10px,1.1vh,12px)]";
    const dynamicTextBase = "text-[clamp(16px,1.8vh,20px)]";
    const dynamicTextSm = "text-[clamp(13px,1.4vh,15px)]";
    const dynamicTextLg = "text-[clamp(16px,2.0vh,23px)]";
    const dynamicTextXl = "text-[clamp(17px,2.2vh,25px)]";

    const renderMutagens = (star: Star) => {
        const badges = [];
        const charMap: Record<string, string> = { 'Lu': '祿', 'Quan': '權', 'Ke': '科', 'Ji': '忌' };

        // Birth
        if (star.mutagen) {
            badges.push(
                <span key="birth" className={clsx("ml-0.5 px-0.5 rounded border font-bold inline-block leading-none bg-red-600 border-red-400 text-white", dynamicTextSm)}>
                    生{charMap[star.mutagen]}
                </span>
            );
        }
        // ... (skip lines)
        {/* Stacked Titles */ }
        <div className="flex flex-col items-center">
            {displayMode === 'month' && (
                <>
                    {decadePalaceName && <span className={clsx("text-indigo-400 font-bold leading-none mb-px opacity-80", dynamicTextXs)}>{decadePalaceName}</span>}
                    {yearPalaceName && <span className={clsx("text-amber-500 font-bold leading-none mb-px opacity-90", dynamicTextXs)}>{yearPalaceName}</span>}
                    <span className={clsx("text-emerald-400 font-bold leading-none", dynamicTextXl)}>{monthPalaceName || '-'}</span>
                </>
            )}
            {displayMode === 'year' && (
                <>
                    <span className={clsx("text-red-500 font-bold leading-none mb-px opacity-60", dynamicTextXs)}>{data.palaceName}</span>
                    {decadePalaceName && <span className={clsx("text-indigo-400 font-bold leading-none mb-px opacity-80", dynamicTextXs)}>{decadePalaceName}</span>}
                    <span className={clsx("text-amber-500 font-bold leading-none", dynamicTextXl)}>{yearPalaceName || '-'}</span>
                </>
            )}
            {displayMode === 'decade' && (
                <>
                    <span className={clsx("text-red-500 font-bold leading-none mb-px opacity-60", dynamicTextXs)}>{data.palaceName}</span>
                    <span className={clsx("font-bold text-indigo-400 leading-none", dynamicTextXl)}>
                        {decadePalaceName || data.palaceName}
                    </span>
                </>
            )}
            {(displayMode === 'birth' || displayMode === 'all') && (
                <span className={clsx("font-bold text-red-500 leading-none", dynamicTextXl)}>
                    {data.palaceName}
                </span>
            )}
        </div>

        // Liu Nian
        if (star.liuNianMutagen && (displayMode === 'all' || displayMode === 'year' || displayMode === 'month')) {
            badges.push(
                <span key="liunian" className={clsx("ml-0.5 px-0.5 rounded border border-amber-500 bg-amber-900/80 text-amber-100 font-bold inline-block leading-none", dynamicTextSm)}>
                    年{charMap[star.liuNianMutagen]}
                </span>
            );
        }

        // Liu Yue
        if (star.liuYueMutagen && (displayMode === 'all' || displayMode === 'month')) {
            badges.push(
                <span key="liuyue" className={clsx("ml-0.5 px-0.5 rounded border border-emerald-500 bg-emerald-900/80 text-emerald-100 font-bold inline-block leading-none", dynamicTextSm)}>
                    月{charMap[star.liuYueMutagen]}
                </span>
            );
        }

        // Da Xian
        if (star.daXianMutagen && (displayMode === 'all' || displayMode === 'decade' || displayMode === 'year' || displayMode === 'month')) {
            badges.push(
                <span key="daxian" className={clsx("ml-0.5 px-0.5 rounded border border-indigo-500 bg-indigo-900/80 text-indigo-100 font-bold inline-block leading-none", dynamicTextSm)}>
                    限{charMap[star.daXianMutagen]}
                </span>
            );
        }

        return badges;
    };

    const MajorStarItem = ({ star }: { star: Star }) => (
        <div className="flex items-center gap-0.5 mb-0.5 flex-wrap">
            <span className={clsx(
                "font-bold leading-none",
                dynamicTextLg,
                'text-purple-400'
            )}>
                {star.name}
            </span>
            {star.brightness && (
                <span className={clsx("font-normal leading-none text-amber-300", dynamicTextBase)}>
                    {star.brightness}
                </span>
            )}
            {renderMutagens(star)}
        </div>
    );

    const MinorStarItem = ({ star }: { star: Star }) => {
        // HIDE Decade Stars if not in Prediction Mode (Decade/Year/Month)
        // Basic Modes = 'birth', 'all'. Prediction Modes = 'decade', 'year', 'month'
        const isPredictionMode = ['decade', 'year', 'month'].includes(displayMode || '');
        if (star.scope === 'decade' && !isPredictionMode) {
            return null;
        }
        // HIDE Year Stars if not in Year/Month Mode
        const isYearMode = ['year', 'month'].includes(displayMode || '');
        if (star.scope === 'year' && !isYearMode) {
            return null;
        }

        // Color Logic
        let textColor = 'text-slate-200'; // Fallback

        if (star.type === 'bad') {
            textColor = 'text-blue-300';
        } else if (star.scope === 'decade') {
            textColor = 'text-indigo-400';
        } else if (star.scope === 'year') {
            textColor = 'text-amber-500';
        } else {
            // Basic/Birth Stars (Good/Aux/etc) -> Use Red-500 (Life Palace Color) per user request
            // Note: User specifically asked for "Basic Lu Cun", but usually this implies the whole set or just Lu Cun? 
            // "本命盤的祿存... 使用命宮的顏色" -> "Basic Chart's Lu Cun ... use Life Palace Color"
            // Usually applies to the "Good" stars or specifically Lu Cun. 
            // Let's check star name? Or apply to all non-bad basic stars?
            // "Basic Lu Cun AND Doctor 12 Gods"
            // If I apply to ALL minor stars, it might be too much red.
            // But usually Lu Cun is treated as a Minor Star in this codebase list?
            // Let's apply ONLY to '祿存' if scope is not decade?
            // "Basic Chart's Lu Cun"
            if (star.name === '祿存') {
                textColor = 'text-red-500';
            }
        }

        return (
            <div className="inline-flex items-center mb-0.5 mr-1 leading-none">
                <span className={clsx(
                    "leading-none",
                    dynamicTextBase,
                    textColor
                )}>
                    {star.name}
                </span>
                {renderMutagens(star)}
            </div>
        );
    };

    const GodItem = ({ name, color }: { name: string, color: string }) => {
        if (!name || name.trim() === '') return null;
        return (
            <span className={clsx("leading-none mr-1.5", color, dynamicTextBase)}>
                {name}
            </span>
        );
    };

    return (
        <div
            onClick={onClick}
            className={clsx(
                "p-0.5 flex flex-col justify-between transition-all duration-200 bg-slate-950 overflow-hidden relative cursor-pointer group",
                isSelected ? "ring-2 ring-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.4)] z-20" : "hover:bg-slate-900",
                className,
                isLiuNian && !isSelected && "ring-[2px] ring-inset ring-amber-500 z-10",
                isLiuYue && !isLiuNian && !isSelected && "ring-[2px] ring-inset ring-emerald-500 z-10"
            )}
        >
            {/* Corner Badges */}
            {isLiuNian && (displayMode === 'all' || displayMode === 'year') && (
                <div className={clsx("absolute top-0 right-0 bg-amber-600 px-1 text-white font-bold z-20", dynamicTextSm)}>
                    流年
                </div>
            )}
            {isLiuYue && (displayMode === 'all' || displayMode === 'month') && (
                <div className={clsx("absolute top-0 right-8 bg-emerald-600 px-1 text-white font-bold z-20", dynamicTextSm)}>
                    流月
                </div>
            )}
            {(displayMode === 'decade' && decadePalaceName === '命宮') && (
                <div className={clsx("absolute top-0 right-0 bg-indigo-600 px-1 text-white font-bold z-20", dynamicTextSm)}>
                    大限
                </div>
            )}

            {/* Stars Section (Grows to fill space) */}
            <div className="flex w-full relative flex-grow min-h-0">
                {/* Major Stars (Left) */}
                <div className="w-[40%] flex flex-col pt-3 pl-0.5 pointer-events-none z-10">
                    {data.majorStars.map(s => <MajorStarItem key={s.name} star={s} />)}
                </div>
                {/* Minor Stars (Right) */}
                <div className="w-[60%] flex flex-row flex-wrap pt-3 pr-0.5 justify-end content-start gap-x-0.5 z-0 overflow-y-auto overflow-x-hidden scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                    {data.minorStars.map(s => {
                        // Special Handling for Suffixes
                        let displayName = s.name;
                        if (s.scope === 'decade') {
                            displayName = `${s.name}(限)`;
                        } else if (s.scope === 'year') {
                            displayName = `${s.name}(流)`;
                        }
                        return <MinorStarItem key={s.name + (s.scope || '')} star={{ ...s, name: displayName }} />;
                    })}
                </div>
            </div>

            {/* Bottom Info Section (Fixed size at bottom) */}
            <div className="w-full flex flex-col px-1 pb-0.5 bg-gradient-to-t from-slate-950 via-slate-950 to-transparent pt-2 shrink-0">

                {/* Gods Row */}
                <div className="flex justify-between mb-0.5">
                    <div className="flex flex-col leading-none">
                        {/* Logic: If Decade/Year Mode, check for overrides */}
                        {(() => {
                            // Default: Birth
                            let activeGods = data.gods;
                            let boShiColor = "text-red-500"; // Default Birth Color (User Req: Life Palace Color)

                            // If Decade Mode, try Decade Override (mainly Bo Shi)
                            if (displayMode === 'decade' && data.decadeGods) {
                                activeGods = data.decadeGods;
                                boShiColor = "text-indigo-400"; // Decade Color
                            }

                            // Chang Sheng Color -> #FBBF24 (User Req)
                            const changShengColor = "text-[#FBBF24]";

                            return (
                                <>
                                    <div className="flex flex-wrap">
                                        <GodItem name={activeGods.changSheng} color={changShengColor} />
                                        <GodItem name={activeGods.boShi} color={boShiColor} />
                                    </div>
                                    {(displayMode === 'year' || displayMode === 'month') && (
                                        <div className="flex flex-wrap mt-px">
                                            <GodItem name={activeGods.suiJian} color="text-slate-400" />
                                            <GodItem name={activeGods.jiangQian} color="text-slate-400" />
                                        </div>
                                    )}
                                </>
                            );
                        })()}
                    </div>
                </div>

                {/* Xiao Xian (Small Cycle) */}
                <div className={clsx("text-sky-300 font-mono leading-tight text-center break-words mb-0.5 min-h-[1em]", dynamicTextBase)}>
                    {data.xiaoXian}
                </div>

                {/* Bottom Bar: Palace Names & Stems */}
                <div className="flex justify-between items-end border-t border-slate-800 pt-0.5">
                    <span className={clsx("font-bold text-amber-500 font-mono leading-none", dynamicTextBase)}>
                        {data.daXian}
                    </span>

                    {/* Stacked Titles */}
                    <div className="flex flex-col items-center">
                        {displayMode === 'month' && (
                            <>
                                {decadePalaceName && <span className={clsx("text-indigo-400 font-bold leading-none mb-px opacity-80", dynamicTextLg)}>{decadePalaceName}</span>}
                                {yearPalaceName && <span className={clsx("text-amber-500 font-bold leading-none mb-px opacity-90", dynamicTextLg)}>{yearPalaceName}</span>}
                                <span className={clsx("text-emerald-400 font-bold leading-none", dynamicTextXl)}>{monthPalaceName || '-'}</span>
                            </>
                        )}
                        {displayMode === 'year' && (
                            <>
                                <span className={clsx("text-red-500 font-bold leading-none mb-px opacity-60", dynamicTextLg)}>{data.palaceName}</span>
                                {decadePalaceName && <span className={clsx("text-indigo-400 font-bold leading-none mb-px opacity-80", dynamicTextLg)}>{decadePalaceName}</span>}
                                <span className={clsx("text-amber-500 font-bold leading-none", dynamicTextXl)}>{yearPalaceName || '-'}</span>
                            </>
                        )}
                        {displayMode === 'decade' && (
                            <>
                                <span className={clsx("text-red-500 font-bold leading-none mb-px opacity-60", dynamicTextLg)}>{data.palaceName}</span>
                                <span className={clsx("font-bold text-indigo-400 leading-none", dynamicTextXl)}>
                                    {decadePalaceName || data.palaceName}
                                </span>
                            </>
                        )}
                        {(displayMode === 'birth' || displayMode === 'all') && (
                            <span className={clsx("font-bold text-red-500 leading-none", dynamicTextXl)}>
                                {data.palaceName}
                            </span>
                        )}
                    </div>

                    <span className={clsx("text-amber-300 font-mono leading-none", dynamicTextBase)}>
                        {data.stemName}{data.branchName}
                    </span>
                </div>
            </div>
        </div>
    );
};
