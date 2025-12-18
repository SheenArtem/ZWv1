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
    // Mapping Helpers
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

    // Star Translation
    const starTrans = (name: string) => {
        const map: Record<string, string> = {
            'Zi Wei': '紫微', 'Tian Ji': '天機', 'Tai Yang': '太陽',
            'Wu Qu': '武曲', 'Tian Tong': '天同', 'Lian Zhen': '廉貞',
            'Tian Fu': '天府', 'Tai Yin': '太陰', 'Tan Lang': '貪狼',
            'Ju Men': '巨門', 'Tian Xiang': '天相', 'Tian Liang': '天梁',
            'Qi Sha': '七殺', 'Po Jun': '破軍',
            // Minor
            'Lù Cún': '祿存', 'Qíng Yáng': '擎羊', 'Tuó Luó': '陀羅',
            'Tiān Kuí': '天鉞', 'Tiān Yuè': '天魁', // Swapped usually? Let's assume standard input from calc
            'Zuǒ Fǔ': '左輔', 'Yòu Bì': '右弼',
            'Wén Chāng': '文昌', 'Wén Qǔ': '文曲',
            'Huǒ Xīng': '火星', 'Líng Xīng': '鈴星',
            'Dì Jié': '地劫', 'Dì Kōng': '地空',
            'Tiān Mǎ': '天馬'
        };
        return map[name] || name;
    };

    const branchChar = branchMap[data.branchName] || data.branchName;
    const stemChar = stemMap[data.stemName] || data.stemName;
    const palaceNameChar = palaceNameMap[data.palaceName] || data.palaceName;

    // Render Star
    const MajorStarItem = ({ star }: { star: Star }) => (
        <div className="flex items-center gap-0.5 mb-1">
            <span className={clsx(
                "text-base font-bold",
                ['Zi Wei', 'Tian Fu', 'Tai Yang', 'Tai Yin'].includes(star.name) ? 'text-red-500' : 'text-purple-400'
            )}>
                {starTrans(star.name)}
            </span>
            {star.brightness && (
                <span className="text-[10px] text-slate-500 scale-75 origin-left font-normal bg-slate-800 rounded px-0.5">
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
            {starTrans(star.name)}
        </span>
    );

    // Gods Translation
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

            {/* Main Grid Layout for Card content */}
            <div className="flex h-full w-full">

                {/* Left Column: Major Stars */}
                <div className="w-1/2 flex flex-col pt-4 pl-1">
                    {data.majorStars.map(s => <MajorStarItem key={s.name} star={s} />)}
                </div>

                {/* Right Column: Minor Stars */}
                <div className="w-1/2 flex flex-col pt-4 pr-1 items-end text-right">
                    {data.minorStars.map(s => <MinorStarItem key={s.name} star={s} />)}
                </div>
            </div>

            {/* Bottom Area: Gods, Limits, Palace Info */}
            <div className="absolute bottom-0 w-full flex flex-col px-1 pb-0.5 bg-gradient-to-t from-slate-900 to-transparent pt-4">

                {/* Gods Row */}
                <div className="flex justify-between text-[10px] mb-0.5">
                    <div className="flex gap-1">
                        <GodItem name={data.gods.changSheng} color="text-amber-600" />
                        <GodItem name={data.gods.boShi} color="text-slate-500" />
                    </div>
                    <div>
                        <GodItem name={data.gods.suiJian} color="text-slate-500" />
                    </div>
                </div>

                {/* Middle Row: Xioa Xian (Ages) - Marquee style if too long? Just wrapping. */}
                <div className="text-[9px] text-slate-500 font-mono leading-tight h-6 overflow-hidden text-center whitespace-normal break-words opacity-70">
                    {data.xiaoXian}
                </div>

                {/* Footer Row: Da Xian - Palace Name - StemBranch */}
                <div className="flex justify-between items-end mt-0.5 border-t border-slate-800 pt-0.5">
                    <span className="text-sm font-bold text-amber-500 font-mono leading-none">
                        {data.daXian}
                    </span>
                    <span className="text-lg font-bold text-red-500 leading-none">
                        {palaceNameChar}
                    </span>
                    <span className="text-xs text-slate-400 font-mono leading-none">
                        {stemChar}{branchChar}
                    </span>
                </div>
            </div>
        </div>
    );
};
