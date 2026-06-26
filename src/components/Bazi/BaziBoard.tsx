import { BaziChartData, BaziPillar } from '../../logic/models/BaziChartData';
import { BAZI_SCHOOL } from '../../logic/bazi/school';
import { generateBaziMarkdown } from '../../logic/utils/markdownGenerator';

// 五行配色 (沿用 slate 底,五行用語意色)
const WUXING_COLOR: Record<string, string> = {
    木: 'text-emerald-400',
    火: 'text-red-400',
    土: 'text-amber-400',
    金: 'text-yellow-200',
    水: 'text-sky-400',
};
const wuxingOf = (gan: string): string => {
    const map: Record<string, string> = {
        甲: '木', 乙: '木', 丙: '火', 丁: '火', 戊: '土', 己: '土',
        庚: '金', 辛: '金', 壬: '水', 癸: '水',
        子: '水', 丑: '土', 寅: '木', 卯: '木', 辰: '土', 巳: '火',
        午: '火', 未: '土', 申: '金', 酉: '金', 戌: '土', 亥: '水',
    };
    return map[gan] || '';
};
const ganColor = (c: string) => WUXING_COLOR[wuxingOf(c)] || 'text-slate-200';

const PillarColumn = ({ title, p, isDay }: { title: string; p: BaziPillar; isDay?: boolean }) => (
    <div className={`flex-1 min-w-[80px] rounded-lg border ${isDay ? 'border-purple-500/60 bg-purple-950/20' : 'border-slate-700 bg-slate-900/40'} p-3 text-center`}>
        <div className="text-base text-slate-300 mb-1.5">{title}</div>
        <div className="text-lg text-indigo-300 h-6 mb-1">{isDay ? '日主' : p.ganShiShen}</div>
        <div className={`text-5xl font-bold leading-tight ${ganColor(p.gan)}`}>{p.gan}</div>
        <div className={`text-5xl font-bold leading-tight mt-1 ${ganColor(p.zhi)}`}>{p.zhi}</div>
        <div className="mt-3 border-t border-slate-600 pt-2 space-y-1">
            {p.zhiHideGan.map((hg, i) => (
                <div key={i} className="text-base flex items-center justify-center gap-1.5">
                    <span className={`font-semibold ${ganColor(hg)}`}>{hg}</span>
                    <span className="text-slate-300">{p.zhiShiShen[i] || ''}</span>
                </div>
            ))}
        </div>
        <div className="mt-2 text-sm text-slate-300">{p.naYin}</div>
    </div>
);

const confColor = (c: string) => (c === '高' ? 'text-emerald-400' : c === '中' ? 'text-amber-400' : 'text-red-400');

export const BaziBoard = ({ bazi }: { bazi: BaziChartData }) => {
    const { pillars: P } = bazi;
    const e = bazi.enrichment;

    const handleCopy = () => {
        navigator.clipboard.writeText(generateBaziMarkdown(bazi));
        alert('八字命盤資料已複製 (四柱/大運/旺衰/格局/調候/五行/干支關係)');
    };

    return (
        <div className="w-full max-w-3xl mx-auto p-2 md:p-4 overflow-y-auto h-full custom-scrollbar">
            {/* Header */}
            <div className="flex items-center justify-between gap-3 mb-2">
                <span className="text-purple-300 font-bold text-2xl">八字命盤</span>
                <button
                    onClick={handleCopy}
                    className="shrink-0 py-1.5 px-3 rounded text-sm font-bold bg-slate-800 text-slate-300 border border-slate-700 hover:text-white hover:bg-slate-700 transition-all flex items-center gap-1.5"
                >
                    📋 複製命盤資料
                </button>
            </div>
            <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1.5 mb-3 text-base">
                <span className="text-slate-300">日主 <span className={`font-bold text-lg ${ganColor(bazi.dayMaster)}`}>{bazi.dayMaster}（{bazi.dayMasterWuXing}）</span></span>
                <span className="text-slate-400">生肖 {bazi.zodiac}</span>
                <span className="text-slate-400">{bazi.gender === 'Male' ? '乾造（男）' : '坤造（女）'}</span>
                <span className="text-slate-300 text-base">起運 {bazi.startLuck}</span>
            </div>

            {/* 流派標註 */}
            <div className="mb-4 rounded-lg border border-indigo-800/50 bg-indigo-950/30 px-3 py-2">
                <span className="text-sm text-indigo-300 font-bold">分析流派　{BAZI_SCHOOL.name}</span>
                <div className="mt-1 flex flex-wrap gap-x-4 gap-y-0.5 text-xs text-slate-400">
                    {BAZI_SCHOOL.items.map(it => (
                        <span key={it.k}><span className="text-slate-300">{it.k}</span>：{it.v}</span>
                    ))}
                </div>
            </div>

            {/* 四柱 */}
            <div className="flex gap-2.5 mb-5">
                <PillarColumn title="年柱" p={P.year} />
                <PillarColumn title="月柱" p={P.month} />
                <PillarColumn title="日柱" p={P.day} isDay />
                <PillarColumn title="時柱" p={P.hour} />
            </div>

            {/* 大運 */}
            <div className="mb-2">
                <div className="text-base text-amber-400 font-bold mb-2">大運</div>
                <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                    {bazi.daYun.filter(d => d.ganZhi).map((d, i) => (
                        <div key={i} className="rounded border border-slate-700 bg-slate-900/40 p-2 text-center">
                            <div className="text-sm text-amber-300/90 font-semibold">{d.startAge}歲</div>
                            <div className={`text-2xl font-bold leading-tight ${ganColor(d.ganZhi.charAt(0))}`}>{d.ganZhi.charAt(0)}</div>
                            <div className={`text-2xl font-bold leading-tight ${ganColor(d.ganZhi.charAt(1))}`}>{d.ganZhi.charAt(1)}</div>
                            <div className="text-sm text-slate-300 mt-1">{d.startYear}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 分析層 */}
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* 旺衰 */}
                <div className="rounded-lg border border-slate-700 bg-slate-900/40 p-3">
                    <div className="text-base text-amber-400 font-bold mb-1.5">旺衰（日主強弱）</div>
                    <div className="text-2xl font-bold text-slate-100">{e.旺衰.verdict}</div>
                    <div className="text-sm text-slate-300 mt-1">
                        分數 <span className="text-slate-100 font-semibold">{e.旺衰.score}</span> · 信心 <span className={`font-semibold ${confColor(e.旺衰.confidence)}`}>{e.旺衰.confidence}</span>
                    </div>
                    <div className="text-sm text-slate-400 mt-1.5">
                        得令 {e.旺衰.breakdown.得令} · 長生 {e.旺衰.breakdown.长生} · 得地 {e.旺衰.breakdown.得地} · 得勢 {e.旺衰.breakdown.得势}
                    </div>
                </div>

                {/* 格局 */}
                <div className="rounded-lg border border-slate-700 bg-slate-900/40 p-3">
                    <div className="text-base text-amber-400 font-bold mb-1.5">格局</div>
                    <div className="text-2xl font-bold text-slate-100">{e.格局.primary}
                        <span className={`text-sm font-semibold ml-2 ${confColor(e.格局.confidence)}`}>信心 {e.格局.confidence}</span>
                    </div>
                    <div className="text-sm text-slate-400 mt-1">{e.格局.basis}</div>
                    {e.格局.notes.map((n, i) => <div key={i} className="text-xs text-slate-500 mt-0.5">※ {n}</div>)}
                </div>

                {/* 調候用神 */}
                <div className="rounded-lg border border-slate-700 bg-slate-900/40 p-3">
                    <div className="text-base text-amber-400 font-bold mb-1.5">調候用神 <span className="text-xs text-amber-300/80 font-normal">（僅供參考）</span></div>
                    <div className="text-2xl font-bold flex gap-2">
                        {e.调候用神.map((g, i) => <span key={i} className={ganColor(g)}>{g}</span>)}
                    </div>
                    <div className="text-xs text-slate-500 mt-1.5 leading-snug">
                        此為「調候」一法之喜用;扶抑／通關／從格涉流派判斷,臨界旺衰與從格須人工覆核。
                    </div>
                </div>

                {/* 五行統計 */}
                <div className="rounded-lg border border-slate-700 bg-slate-900/40 p-3">
                    <div className="text-base text-amber-400 font-bold mb-1.5">五行統計</div>
                    <div className="flex gap-3 text-lg font-bold">
                        {(['木', '火', '土', '金', '水'] as const).map(w => (
                            <span key={w} className={WUXING_COLOR[w]}>{w}{e.五行统计.surface[w]}</span>
                        ))}
                    </div>
                    <div className="text-sm text-slate-400 mt-1.5">
                        缺 <span className="text-red-300">{e.五行统计.missing.join('') || '無'}</span> · 最旺 <span className="text-slate-200">{e.五行统计.strongest.join('')}</span>
                    </div>
                </div>
            </div>

            {/* 干支關係 */}
            {e.地支关系.length > 0 && (
                <div className="mt-3 rounded-lg border border-slate-700 bg-slate-900/40 p-3">
                    <div className="text-base text-amber-400 font-bold mb-2">刑沖合害（地支）</div>
                    <div className="flex flex-wrap gap-2">
                        {e.地支关系.map((r, i) => (
                            <span key={i} className="text-sm bg-slate-800 border border-slate-600 rounded px-2 py-1 text-slate-200">
                                {r.type}<span className="text-slate-400 ml-1">{r.zhi.join('')}</span>
                            </span>
                        ))}
                    </div>
                </div>
            )}

            <p className="text-sm text-slate-400 mt-4">
                旺衰／格局／干支關係由規則計算;喜用神僅列「調候」一法,臨界旺衰與從格情形請人工覆核。
            </p>
        </div>
    );
};
