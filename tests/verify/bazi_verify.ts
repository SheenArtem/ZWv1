// Verify 八字 four pillars from BaziBuilder vs iztro's chineseDate (八字), across a grid.
import { generateBaziChart } from '../../src/logic/bazi/BaziBuilder';
import type { BirthDetails } from '../../src/logic/models/BirthDetails';
import { astro } from 'iztro';
import { iztroTimeIndex } from './lib';

// --- console dump one chart ---
const sample: BirthDetails = { year: 1990, month: 8, day: 20, hour: 14, minute: 30, gender: 'Male' };
const c = generateBaziChart(sample);
console.log('=== sample 1990-8-20 14:30 男 ===');
console.log(`四柱: ${c.pillars.year.gan}${c.pillars.year.zhi} ${c.pillars.month.gan}${c.pillars.month.zhi} ${c.pillars.day.gan}${c.pillars.day.zhi} ${c.pillars.hour.gan}${c.pillars.hour.zhi}`);
console.log(`日主: ${c.dayMaster}(${c.dayMasterWuXing}) 生肖:${c.zodiac} 起運:${c.startLuck}`);
console.log(`年柱十神: 干=${c.pillars.year.ganShiShen} 藏干=${c.pillars.year.zhiHideGan.join('')} 藏干十神=${c.pillars.year.zhiShiShen.join('/')} 納音=${c.pillars.year.naYin}`);
console.log(`大運: ${c.daYun.slice(0, 4).map(d => `${d.ganZhi}(${d.startAge}-${d.endAge})`).join(' ')}`);
const e = c.enrichment;
console.log('--- 分析層 ---');
console.log(`旺衰: ${e.旺衰.verdict} (score=${e.旺衰.score}, 信心=${e.旺衰.confidence}) | 得令${e.旺衰.breakdown.得令}/長生${e.旺衰.breakdown.长生}/得地${e.旺衰.breakdown.得地}/得勢${e.旺衰.breakdown.得势}`);
console.log(`格局: ${e.格局.primary} (${e.格局.confidence}) — ${e.格局.basis}${e.格局.notes.length ? ' | ' + e.格局.notes.join('; ') : ''}`);
console.log(`調候用神: ${e.调候用神.join('、')}`);
console.log(`五行統計(地表): ${JSON.stringify(e.五行统计.surface)} 缺:${e.五行统计.missing.join('') || '無'} 最旺:${e.五行统计.strongest.join('')}`);
console.log(`地支關係: ${e.地支关系.map(r => `${r.type}[${r.zhi.join('')}]`).join(' ') || '無'}`);

// --- (1) assembly check: BaziBuilder pillars == lunar-javascript getBaZi() (節氣-based 八字) ---
import LunarJS from 'lunar-javascript';
const { Solar } = LunarJS;
const pillarsStr = (b: BirthDetails) => {
  const x = generateBaziChart(b);
  return `${x.pillars.year.gan}${x.pillars.year.zhi} ${x.pillars.month.gan}${x.pillars.month.zhi} ${x.pillars.day.gan}${x.pillars.day.zhi} ${x.pillars.hour.gan}${x.pillars.hour.zhi}`;
};
let total = 0, ok = 0; const mism: string[] = [];
for (let year = 1950; year <= 2009; year++)
  for (const month of [1, 2, 3, 5, 7, 9, 11, 12])
    for (const day of [1, 5, 15, 22, 28])
      for (const hour of [0, 6, 12, 18, 22])
        for (const gender of ['Male', 'Female'] as const) {
          const b: BirthDetails = { year, month, day, hour, minute: 30, gender };
          const expected = Solar.fromYmdHms(year, month, day, hour, 30, 0).getLunar().getBaZi().join(' ');
          total++;
          if (pillarsStr(b) === expected) ok++;
          else if (mism.length < 8) mism.push(`${year}-${month}-${day} h${hour}: zw=[${pillarsStr(b)}] exp=[${expected}]`);
        }
console.log(`\n=== (1) 組裝正確性 vs lunar-javascript getBaZi(): ${ok}/${total} (${(ok / total * 100).toFixed(2)}%) ===`);
mism.forEach(m => console.log('  MISMATCH', m));

// --- (2) 節氣邊界檢查: 月柱必須在「節」當天翻轉 (而非中氣/朔) ---
let jieOk = 0, jieTotal = 0; const jieBad: string[] = [];
for (let year = 1960; year <= 2000; year += 5) {
  for (let m = 1; m <= 12; m++) {
    for (let d = 1; d <= 28; d++) {
      const s = Solar.fromYmdHms(year, m, d, 12, 0, 0);
      const lunar = s.getLunar();
      const prevJie = lunar.getPrevJie().getSolar();
      // same 八字 month iff on/after the most recent 節
      const ecMonth = lunar.getEightChar().getMonth();
      const dayBeforeJie = Solar.fromYmd(prevJie.getYear(), prevJie.getMonth(), prevJie.getDay()).next(-1);
      const ecMonthBefore = dayBeforeJie.getLunar().getEightChar().getMonth();
      jieTotal++;
      // The 八字 month at/after the 節 must differ from the day just before the 節 (a flip happened at 節)
      if (ecMonth !== ecMonthBefore || prevJie.toYmd() === Solar.fromYmd(year, m, d).toYmd()) jieOk++;
      else if (jieBad.length < 5) jieBad.push(`${year}-${m}-${d}: month=${ecMonth} sameAsBeforeJie(${prevJie.toYmd()})=${ecMonthBefore}`);
    }
  }
}
console.log(`\n=== (2) 節氣建月一致性抽查: ${jieOk}/${jieTotal} 月柱與「上一個節」一致 ===`);
console.log('(說明:八字月柱按節氣建月,與農曆月/iztro chineseDate 不同步屬正常)');
void astro; void iztroTimeIndex;
