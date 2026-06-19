// Exhaustive differential sweep: ZWv1 vs iztro across a birth-chart grid.
// Usage: npx tsx tests/verify/run.ts [--years=1950-2009] [--days=1,15,29] [--hours=2,6,10,14,18,22] [--zi]
import type { BirthDetails } from '../../src/logic/models/BirthDetails';
import { buildZwv1, buildIztro, diffCharts } from './lib';
import { convertToLunar } from '../../src/logic/converters/LunarConverter';
import { writeFileSync } from 'fs';

function arg(name: string, def: string): string {
  const a = process.argv.find(s => s.startsWith(`--${name}=`));
  return a ? a.split('=')[1] : def;
}
const hasFlag = (name: string) => process.argv.includes(`--${name}`);

const [y0, y1] = arg('years', '1950-2009').split('-').map(Number);
const days = arg('days', '1,15,29').split(',').map(Number);
let hours = arg('hours', '2,6,10,14,18,22').split(',').map(Number);
if (hasFlag('zi')) hours = [0, 23, 1]; // 早子(0) 晚子(23) 丑(1) edge bucket

const genders: Array<'Male' | 'Female'> = ['Male', 'Female'];
const months = Array.from({ length: 12 }, (_, i) => i + 1);

interface Rec { input: BirthDetails; feature: string; detail: string; leap: boolean; }
const allDiffs: Rec[] = [];
let total = 0, clean = 0, errors = 0;
let leapTotal = 0, leapClean = 0;
const errSamples: string[] = [];

for (let year = y0; year <= y1; year++) {
  for (const month of months) {
    for (const day of days) {
      for (const hour of hours) {
        for (const gender of genders) {
          const input: BirthDetails = { year, month, day, hour, minute: 0, gender };
          total++;
          try {
            const leap = convertToLunar(input).isLeap;
            if (leap) leapTotal++;
            const zw = buildZwv1(input);
            const iz = buildIztro(input);
            const diffs = diffCharts(zw, iz);
            if (diffs.length === 0) { clean++; if (leap) leapClean++; }
            else for (const d of diffs) allDiffs.push({ input, leap, ...d });
          } catch (e: any) {
            errors++;
            if (errSamples.length < 10) errSamples.push(`${year}-${month}-${day} h${hour} ${gender}: ${e.message}`);
          }
        }
      }
    }
  }
}

const fmt = (i: BirthDetails) => `${i.year}-${i.month}-${i.day} h${i.hour} ${i.gender === 'Male' ? '男' : '女'}`;

console.log(`\n===== Differential sweep: ZWv1 vs iztro =====`);
console.log(`grid: years ${y0}-${y1}, months 1-12, days [${days}], hours [${hours}], both genders`);
const nonLeapTotal = total - leapTotal;
const nonLeapClean = clean - leapClean;
console.log(`total: ${total} | clean: ${clean} (${(clean / total * 100).toFixed(1)}%) | errors: ${errors}`);
console.log(`  non-leap: ${nonLeapTotal} | clean ${nonLeapClean} (${(nonLeapClean / nonLeapTotal * 100).toFixed(1)}%)`);
console.log(`  leap-month: ${leapTotal} | clean ${leapClean} (${leapTotal ? (leapClean / leapTotal * 100).toFixed(1) : '-'}%)  [leap convention differs by design]`);
if (errors) { console.log(`error samples:`); errSamples.forEach(s => console.log('  ', s)); }

// Aggregate by feature, splitting leap vs non-leap
function report(recs: Rec[], denom: number, title: string) {
  const byFeature = new Map<string, Rec[]>();
  for (const d of recs) {
    if (!byFeature.has(d.feature)) byFeature.set(d.feature, []);
    byFeature.get(d.feature)!.push(d);
  }
  const rows = [...byFeature.entries()].sort((a, b) => b[1].length - a[1].length);
  console.log(`\n----- ${title}: discrepancy features (${rows.length}) -----`);
  for (const [feature, rs] of rows) {
    const pct = (rs.length / denom * 100).toFixed(1);
    console.log(`\n[${rs.length} / ${pct}%] ${feature}`);
    const seen = new Set<string>();
    let shown = 0;
    for (const r of rs) {
      if (seen.has(r.detail)) continue;
      seen.add(r.detail);
      console.log(`    e.g. ${fmt(r.input)}  →  ${r.detail.slice(0, 200)}`);
      if (++shown >= 3) break;
    }
    console.log(`    (${seen.size} distinct detail patterns)`);
  }
}
report(allDiffs.filter(d => !d.leap), nonLeapTotal, 'NON-LEAP (core algorithm)');
report(allDiffs.filter(d => d.leap), leapTotal, 'LEAP-MONTH');

const outPath = process.env.TEMP + '/zwv1-diffs.json';
writeFileSync(outPath, JSON.stringify({ total, clean, errors, diffs: allDiffs }, null, 1));
console.log(`\nfull diff dump: ${outPath} (${allDiffs.length} records)`);
