import { FC } from 'react';
import { PalaceData, Star } from '../../logic/models/ChartData';
import clsx from 'clsx';

interface PalaceCardProps {
    data: PalaceData;
    className?: string;
    isLiuNian?: boolean;
    isLiuYue?: boolean;
}

export const PalaceCard: FC<PalaceCardProps> = ({ data, className, isLiuNian, isLiuYue }) => {
    // Data is now guaranteed to be Chinese. No mapping needed.

    // Render Star
    const MajorStarItem = ({ star }: { star: Star }) => (
        <div className="flex items-center gap-0.5 mb-1">
            <span className={clsx(
                "text-base font-bold",
                // Check Chinese names for Red color set
                ['紫微', '天府', '太陽', '太陰', '祿存'].includes(star.name) ? 'text-red-500' : 'text-purple-400'
            )}>
                {star.name}
            </span>
            {star.brightness && (
                <span className="text-[11px] text-slate-500 scale-90 origin-left font-normal bg-slate-800 rounded px-0.5">
                    {star.brightness}
                </span>
            )}
        </div>
    );

    const MinorStarItem = ({ star }: { star: Star }) => (
        <span className={clsx(
            "text-xs mr-1 mb-0.5 block",
            star.type === 'bad' ? 'text-blue-400' : 'text-slate-300'
        )}>
            {star.name}
        </span>
    );

    const GodItem = ({ name, color }: { name: string, color: string }) => {
        return (
            <span className={clsx("text-[10px] scale-90 origin-left", color)}>
                {name}
            </span>
        );
    };

    return (
        <div className={clsx(
            "relative bg-slate-9 border border-slate-700 p-1 flex flex-col h-40 sm:h-52 overflow-hidden bg-slate-800",
            className,
            isLiuNian && "ring-2 ring-inset ring-amber-500",
            isLiuYue && !isLiuNian && "ring-2 ring-inset ring-emerald-500"
        )}>
            {isLiuNian && (
                <div className="absolute top-0 right-0 bg-amber-600 text-[9px] px-1 text-white font-bold opacity-full z-20">
                    流年
                </div>
            )}
            {isLiuYue && (
                <div className="absolute top-0 right-8 bg-emerald-600 text-[9px] px-1 text-white font-bold opacity-full z-20">
                    流月
                </div>
            )}

            {/* Main Grid Layout */}
            <div className="flex h-full w-full">
                <div className="w-1/2 flex flex-col pt-4 pl-1">
                    {data.majorStars.map(s => <MajorStarItem key={s.name} star={s} />)}
                </div>
                <div className="w-1/2 flex flex-col pt-4 pr-1 items-end text-right">
                    {data.minorStars.map(s => <MinorStarItem key={s.name} star={s} />)}
                </div>
            </div>

            {/* Bottom Area */}
            <div className="absolute bottom-0 w-full flex flex-col px-1 pb-0.5 bg-gradient-to-t from-slate-900 to-transparent pt-4">
                <div className="flex justify-between text-[10px] mb-0.5">
                    <div className="flex gap-1">
                        <GodItem name={data.gods.changSheng} color="text-amber-600" />
                        <GodItem name={data.gods.boShi} color="text-slate-500" />
                    </div>
                    <div>
                        <GodItem name={data.gods.suiJian} color="text-slate-500" />
                    </div>
                </div>

                <div className="text-[9px] text-slate-500 font-mono leading-tight h-6 overflow-hidden text-center whitespace-normal break-words opacity-70">
                    {data.xiaoXian}
                </div>

                <div className="flex justify-between items-end mt-0.5 border-t border-slate-800 pt-0.5">
                    <span className="text-sm font-bold text-amber-500 font-mono leading-none">
                        {data.daXian}
                    </span>
                    <span className="text-lg font-bold text-red-500 leading-none">
                        {data.palaceName}
                    </span>
                    <span className="text-xs text-slate-400 font-mono leading-none">
                        {data.stemName}{data.branchName}
                    </span>
                </div>
            </div>
        </div>
    );
};
