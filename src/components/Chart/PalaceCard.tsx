import { FC } from 'react';
import { PalaceData } from '../../logic/models/ChartData';
import clsx from 'clsx';

interface PalaceCardProps {
    data: PalaceData;
    className?: string;
    isLiuNian?: boolean;
    isLiuYue?: boolean;
}

export const PalaceCard: FC<PalaceCardProps> = ({ data, className, isLiuNian, isLiuYue }) => {
    // Chinese Mapping Helper
    const branchMap: Record<string, string> = {
        'Zi': '子', 'Chou': '丑', 'Yin': '寅', 'Mao': '卯',
        'Chen': '辰', 'Si': '巳', 'Wu': '午', 'Wei': '未',
        'Shen': '申', 'You': '酉', 'Xu': '戌', 'Hai': '亥'
    };
    const stemMap: Record<string, string> = {
        'Jia': '甲', 'Yi': '乙', 'Bing': '丙', 'Ding': '丁',
        'Wu': '戊', 'Ji': '己', 'Geng': '庚', 'Xin': '辛',
        'Ren': '壬', 'Gui': '癸'
    };
    const palaceNameMap: Record<string, string> = {
        'Life': '命宮', 'Siblings': '兄弟', 'Spouse': '夫妻', 'Children': '子女',
        'Wealth': '財帛', 'Health': '疾厄', 'Travel': '遷移', 'Friends': '交友',
        'Career': '官祿', 'Property': '田宅', 'Mental': '福德', 'Parents': '父母'
    };

    const starMap: Record<string, string> = {
        'Zi Wei': '紫微', 'Tian Ji': '天機', 'Tai Yang': '太陽',
        'Wu Qu': '武曲', 'Tian Tong': '天同', 'Lian Zhen': '廉貞',
        'Tian Fu': '天府', 'Tai Yin': '太陰', 'Tan Lang': '貪狼',
        'Ju Men': '巨門', 'Tian Xiang': '天相', 'Tian Liang': '天梁',
        'Qi Sha': '七殺', 'Po Jun': '破軍'
    };

    const branchChar = branchMap[data.branchName] || data.branchName;
    const stemChar = stemMap[data.stemName] || data.stemName;
    const palaceNameChar = palaceNameMap[data.palaceName] || data.palaceName;

    // Star Coloring
    const getStarColor = (star: string) => {
        if (['Zi Wei', 'Tian Fu', 'Tai Yang', 'Tai Yin'].includes(star)) return 'text-red-400 font-bold';
        if (['Qi Sha', 'Po Jun', 'Tan Lang'].includes(star)) return 'text-blue-400 font-bold';
        return 'text-purple-300';
    };

    return (
        <div className={clsx(
            "relative bg-slate-800 border border-slate-700 p-2 flex flex-col justify-between h-36 sm:h-48 overflow-hidden",
            className,
            isLiuNian && "border-amber-500",
            isLiuYue && !isLiuNian && "border-emerald-500"
        )}>
            {isLiuNian && (
                <div className="absolute top-0 right-0 bg-amber-600 text-[10px] px-1 rounded-bl text-white font-bold opacity-80 z-10">
                    流年
                </div>
            )}
            {isLiuYue && (
                <div className="absolute top-0 left-0 bg-emerald-600 text-[10px] px-1 rounded-br text-white font-bold opacity-80 z-10">
                    流月
                </div>
            )}

            {/* Stars Area */}
            <div className="flex flex-col flex-wrap gap-1 content-start h-full pb-6 pt-3">
                {data.majorStars.map(star => (
                    <span key={star} className={clsx("text-sm writing-vertical-rl", getStarColor(star))}>
                        {starMap[star] || star}
                    </span>
                ))}
            </div>

            {/* Footer Info: Palace Name + Stem/Branch */}
            <div className="absolute bottom-0 right-0 w-full flex justify-between items-end px-2 py-1 bg-slate-900/50">
                <span className="text-xs text-slate-500 font-mono">{stemChar}{branchChar}</span>
                <span className="text-red-500 font-bold px-1 bg-slate-800 rounded">{palaceNameChar}</span>
            </div>
        </div>
    );
};
