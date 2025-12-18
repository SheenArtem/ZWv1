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
    // Badges text-sm (14px)
    const getMutagenBadge = (m?: string) => {
        if (!m) return null;
        const charMap: Record<string, string> = { 'Lu': '祿', 'Quan': '權', 'Ke': '科', 'Ji': '忌' };
        const colorMap: Record<string, string> = {
            'Lu': 'bg-emerald-600 border-emerald-400 text-white',
            'Quan': 'bg-red-600 border-red-400 text-white',
            'Ke': 'bg-blue-600 border-blue-400 text-white',
            'Ji': 'bg-rose-700 border-rose-500 text-white'
        };

        return (
            <span className={clsx("ml-1 text-[14px] px-1 rounded border font-bold inline-block leading-tight", colorMap[m])}>
                {charMap[m]}
            </span>
        );
    };

    const MajorStarItem = ({ star }: { star: Star }) => (
        <div className="flex items-center gap-1 mb-0.5 flex-wrap">
            <span className={clsx(
                "text-[16px] font-bold leading-tight",
                ['紫微', '天府', '太陽', '太陰', '祿存'].includes(star.name) ? 'text-red-500' : 'text-purple-400'
            )}>
                {star.name}
            </span>
            {star.brightness && (
                <span className="text-[14px] text-slate-400 font-normal leading-tight">
                    {star.brightness}
                </span>
            )}
            {getMutagenBadge(star.mutagen)}
        </div>
    );

    const MinorStarItem = ({ star }: { star: Star }) => (
        <div className="inline-block mr-2 mb-1">
            <span className={clsx(
                "text-[14px] leading-tight",
                star.type === 'bad' ? 'text-blue-400' : 'text-slate-300'
            )}>
                {star.name}
            </span>
            {getMutagenBadge(star.mutagen)}
        </div>
    );

    const GodItem = ({ name, color }: { name: string, color: string }) => {
        return (
            <span className={clsx("text-[14px] leading-tight mr-2", color)}>
                {name}
            </span>
        );
    };

    return (
        <div className={clsx(
            "relative bg-slate-9 border border-slate-700 p-1 flex flex-col h-56 sm:h-64 overflow-hidden bg-slate-800 hover:z-50 hover:overflow-visible hover:h-auto hover:shadow-2xl transition-all duration-200",
            className,
            isLiuNian && "ring-2 ring-inset ring-amber-500",
            isLiuYue && !isLiuNian && "ring-2 ring-inset ring-emerald-500"
        )}>
            {isLiuNian && (
                <div className="absolute top-0 right-0 bg-amber-600 text-[14px] px-1 text-white font-bold opacity-full z-20">
                    流年
                </div>
            )}
            {isLiuYue && (
                <div className="absolute top-0 right-12 bg-emerald-600 text-[14px] px-1 text-white font-bold opacity-full z-20">
                    流月
                </div>
            )}

            {/* Main Grid Layout */}
            <div className="flex h-full w-full">
                <div className="w-3/5 flex flex-col pt-6 pl-1">
                    {data.majorStars.map(s => <MajorStarItem key={s.name} star={s} />)}
                </div>
                <div className="w-2/5 flex flex-col pt-6 pr-1 items-end text-right flex-wrap content-end">
                    {data.minorStars.map(s => <MinorStarItem key={s.name} star={s} />)}
                </div>
            </div>

            {/* Bottom Area */}
            <div className="absolute bottom-0 w-full flex flex-col px-1 pb-1 bg-gradient-to-t from-slate-900 via-slate-900 to-transparent pt-8">
                <div className="flex justify-between text-[14px] mb-1">
                    <div className="flex flex-wrap">
                        <GodItem name={data.gods.changSheng} color="text-amber-600" />
                        <GodItem name={data.gods.boShi} color="text-slate-500" />
                        <GodItem name={data.gods.suiJian} color="text-slate-500" />
                    </div>
                </div>

                <div className="text-[14px] text-slate-500 font-mono leading-tight h-auto min-h-[1.2em] overflow-hidden text-center whitespace-normal break-words opacity-70 mb-1">
                    {data.xiaoXian}
                </div>

                <div className="flex justify-between items-end mt-1 border-t border-slate-700 pt-1">
                    <span className="text-[16px] font-bold text-amber-500 font-mono leading-none">
                        {data.daXian}
                    </span>
                    <span className="text-[18px] font-bold text-red-500 leading-none">
                        {data.palaceName}
                    </span>
                    <span className="text-[14px] text-slate-400 font-mono leading-none">
                        {data.stemName}{data.branchName}
                    </span>
                </div>
            </div>
        </div>
    );
};
