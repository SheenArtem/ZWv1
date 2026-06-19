// Differential-verification library: normalize ZWv1 and iztro charts to a common shape and diff them.
import { generateChart } from '../../src/logic/ChartBuilder';
import type { BirthDetails } from '../../src/logic/models/BirthDetails';
import { astro } from 'iztro';

export const BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

// ---- Star name canonicalization (apply to STAR names of both engines) ----
const STAR_ALIAS: Record<string, string> = {
  '飛廉': '蜚廉',   // ZWv1 aux 飛廉 == iztro adj 蜚廉 (year-branch star)
  '截空': '截路',   // ZWv1 截空 == iztro 截路 (截路空亡)
};
const canonStar = (n: string) => STAR_ALIAS[n] ?? n;

// ---- God name canonicalization (strip ZWv1 disambiguation suffixes; map 歲破->大耗) ----
const stripSuffix = (n: string) => n.replace(/\((博|歲|將)\)$/, '');
const GOD_ALIAS: Record<string, string> = { '歲破': '大耗' };
const canonGod = (n: string) => { const s = stripSuffix(n); return GOD_ALIAS[s] ?? s; };

// ---- Mutagen map ----
const MUTAGEN: Record<string, string> = { Lu: '祿', Quan: '權', Ke: '科', Ji: '忌' };

// ---- Star categories ----
export const MAJOR14 = new Set(['紫微', '天機', '太陽', '武曲', '天同', '廉貞', '天府', '太陰', '貪狼', '巨門', '天相', '天梁', '七殺', '破軍']);
export const LUCKY6 = new Set(['左輔', '右弼', '文昌', '文曲', '天魁', '天鉞']);
export const UNLUCKY6 = new Set(['擎羊', '陀羅', '火星', '鈴星', '地空', '地劫']);
export const LUMA = new Set(['祿存', '天馬']);
export const categoryOf = (name: string): string => {
  if (MAJOR14.has(name)) return 'major14';
  if (LUCKY6.has(name)) return 'lucky6';
  if (UNLUCKY6.has(name)) return 'unlucky6';
  if (LUMA.has(name)) return 'luma';
  return 'aux';
};

export interface NormChart {
  bureau: string;
  soul: string;   // 命主
  body: string;   // 身主
  starPos: Map<string, number[]>;        // canonical star name -> sorted branch indices
  brightness: Map<string, string>;       // "name@branch" -> brightness (where provided)
  mutagen: Record<string, string>;        // mutagenZh (祿/權/科/忌) -> starName
  changsheng: string[];                   // index by branch -> god
  boshi: string[];
  jiangqian: string[];                    // 將前十二神 (semantic)
  suiqian: string[];                      // 歲前十二神 (semantic)
  decadal: Array<[number, number]>;       // index by branch -> [start,end]
  ages: number[][];                       // index by branch -> ages list
}

function addPos(m: Map<string, number[]>, name: string, branch: number) {
  const c = canonStar(name);
  if (!m.has(c)) m.set(c, []);
  m.get(c)!.push(branch);
}

// ---- iztro timeIndex from BirthDetails.hour (0..23) ----
export function iztroTimeIndex(hour: number): number {
  if (hour === 23) return 12;            // 晚子時
  return Math.floor((hour + 1) / 2) % 12; // 早子=0, 丑=1, ... 亥=11
}

export function buildIztro(b: BirthDetails): NormChart {
  const dateStr = `${b.year}-${b.month}-${b.day}`;
  const a: any = astro.bySolar(dateStr, iztroTimeIndex(b.hour), b.gender === 'Male' ? 'male' : 'female', true, 'zh-TW');
  const starPos = new Map<string, number[]>();
  const brightness = new Map<string, string>();
  const mutagen: Record<string, string> = {};
  const changsheng = new Array(12).fill('');
  const boshi = new Array(12).fill('');
  const jiangqian = new Array(12).fill('');
  const suiqian = new Array(12).fill('');
  const decadal: Array<[number, number]> = new Array(12).fill(null);
  const ages: number[][] = new Array(12).fill(null);

  for (const p of a.palaces) {
    const bi = BRANCHES.indexOf(p.earthlyBranch);
    const allStars = [...p.majorStars, ...p.minorStars, ...p.adjectiveStars];
    for (const s of allStars) {
      addPos(starPos, s.name, bi);
      if (s.brightness) brightness.set(`${canonStar(s.name)}@${bi}`, s.brightness);
      if (s.mutagen) mutagen[s.mutagen] = canonStar(s.name); // 祿/權/科/忌 (natal)
    }
    changsheng[bi] = canonGod(p.changsheng12);
    boshi[bi] = canonGod(p.boshi12);
    jiangqian[bi] = canonGod(p.jiangqian12);
    suiqian[bi] = canonGod(p.suiqian12);
    decadal[bi] = p.decadal?.range ? [p.decadal.range[0], p.decadal.range[1]] : null as any;
    ages[bi] = p.ages ? [...p.ages].sort((x: number, y: number) => x - y) : [];
  }
  starPos.forEach(v => v.sort((x, y) => x - y));
  return { bureau: a.fiveElementsClass, soul: a.soul, body: a.body, starPos, brightness, mutagen, changsheng, boshi, jiangqian, suiqian, decadal, ages };
}

export function buildZwv1(b: BirthDetails): NormChart {
  const c = generateChart(b);
  const starPos = new Map<string, number[]>();
  const brightness = new Map<string, string>();
  const mutagen: Record<string, string> = {};
  const changsheng = new Array(12).fill('');
  const boshi = new Array(12).fill('');
  const jiangqian = new Array(12).fill('');
  const suiqian = new Array(12).fill('');
  const decadal: Array<[number, number]> = new Array(12).fill(null);
  const ages: number[][] = new Array(12).fill(null);

  for (const p of c.palaces) {
    const bi = p.branchIndex;
    for (const s of [...p.majorStars, ...p.minorStars]) {
      addPos(starPos, s.name, bi);
      if (s.brightness) brightness.set(`${canonStar(s.name)}@${bi}`, s.brightness);
      if (s.mutagen) mutagen[MUTAGEN[s.mutagen]] = canonStar(s.name);
    }
    changsheng[bi] = canonGod(p.gods.changSheng);
    boshi[bi] = canonGod(p.gods.boShi);
    // NOTE: ChartBuilder swaps the labels at output (line 501-502):
    //   p.gods.suiJian actually holds the 將前(jiangQian) series,
    //   p.gods.jiangQian actually holds the 歲前(suiJian) series.
    // Undo the swap to recover semantic series for an apples-to-apples compare.
    jiangqian[bi] = canonGod(p.gods.suiJian);
    suiqian[bi] = canonGod(p.gods.jiangQian);
    const [ds, de] = p.daXian.split(' - ').map(s => parseInt(s.trim(), 10));
    decadal[bi] = [ds, de];
    ages[bi] = String(p.xiaoXian).trim() ? String(p.xiaoXian).trim().split(/\s+/).map(Number).sort((x, y) => x - y) : [];
  }
  starPos.forEach(v => v.sort((x, y) => x - y));
  return { bureau: c.bureau, soul: c.mingZhu || '', body: c.shenZhu || '', starPos, brightness, mutagen, changsheng, boshi, jiangqian, suiqian, decadal, ages };
}

export interface Diff { feature: string; detail: string; }

export function diffCharts(zw: NormChart, iz: NormChart): Diff[] {
  const out: Diff[] = [];
  if (zw.bureau !== iz.bureau) out.push({ feature: 'bureau', detail: `zw=${zw.bureau} iz=${iz.bureau}` });
  if (zw.soul !== iz.soul) out.push({ feature: 'soul(命主)', detail: `zw=${zw.soul} iz=${iz.soul}` });
  if (zw.body !== iz.body) out.push({ feature: 'body(身主)', detail: `zw=${zw.body} iz=${iz.body}` });

  // Star positions: only stars present in BOTH engines (so 流派 coverage gaps don't false-fail)
  const names = new Set<string>([...zw.starPos.keys()].filter(n => iz.starPos.has(n)));
  for (const n of names) {
    const a = zw.starPos.get(n)!, b = iz.starPos.get(n)!;
    // 旬空 (旬中空亡) is classically a PAIR; ZWv1 marks both branches, iztro marks one.
    // Treat as compatible when iztro's set is a subset of ZWv1's.
    if (n === '旬空') {
      if (b.every(x => a.includes(x))) continue;
    }
    if (a.join(',') !== b.join(',')) {
      out.push({ feature: `star:${categoryOf(n)}:${n}`, detail: `zw@[${a.map(i => BRANCHES[i]).join('')}] iz@[${b.map(i => BRANCHES[i]).join('')}]` });
    }
  }

  // Mutagen (生年四化)
  for (const k of ['祿', '權', '科', '忌']) {
    if (zw.mutagen[k] && iz.mutagen[k] && zw.mutagen[k] !== iz.mutagen[k]) {
      out.push({ feature: `sihua:${k}`, detail: `zw=${zw.mutagen[k]} iz=${iz.mutagen[k]}` });
    }
  }

  // Twelve-god series (per branch)
  const godSeries: Array<[string, string[], string[]]> = [
    ['changsheng(長生)', zw.changsheng, iz.changsheng],
    ['boshi(博士)', zw.boshi, iz.boshi],
    ['jiangqian(將前)', zw.jiangqian, iz.jiangqian],
    ['suiqian(歲前)', zw.suiqian, iz.suiqian],
  ];
  for (const [label, A, B] of godSeries) {
    const mism: string[] = [];
    for (let i = 0; i < 12; i++) if (A[i] && B[i] && A[i] !== B[i]) mism.push(`${BRANCHES[i]}:zw=${A[i]}/iz=${B[i]}`);
    if (mism.length) out.push({ feature: `god:${label}`, detail: mism.join(' ') });
  }

  // Decadal (大限) ranges
  const dxMism: string[] = [];
  for (let i = 0; i < 12; i++) {
    const a = zw.decadal[i], b = iz.decadal[i];
    if (a && b && (a[0] !== b[0] || a[1] !== b[1])) dxMism.push(`${BRANCHES[i]}:zw=${a[0]}-${a[1]}/iz=${b[0]}-${b[1]}`);
  }
  if (dxMism.length) out.push({ feature: 'decadal(大限)', detail: dxMism.join(' ') });

  // Xiao Xian (小限) ages — ZWv1 truncates to 8 entries; treat as match if shorter list is a prefix of longer.
  const ageMism: string[] = [];
  for (let i = 0; i < 12; i++) {
    const a = zw.ages[i] || [], b = iz.ages[i] || [];
    const n = Math.min(a.length, b.length);
    if (a.slice(0, n).join(',') !== b.slice(0, n).join(',')) ageMism.push(`${BRANCHES[i]}:zw=[${a.join(',')}]/iz=[${b.join(',')}]`);
  }
  if (ageMism.length) out.push({ feature: 'xiaoxian(小限)', detail: ageMism.join(' ') });

  return out;
}
