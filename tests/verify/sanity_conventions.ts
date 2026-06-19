import { generateChart } from '../../src/logic/ChartBuilder';
import type { ChartConventions } from '../../src/logic/models/ChartConventions';
import { DEFAULT_CONVENTIONS } from '../../src/logic/models/ChartConventions';

const base = { year: 1990, month: 8, day: 20, hour: 23, minute: 0, gender: 'Male' as const }; // 庚午年
function sihua(conv: ChartConventions) {
  return generateChart(base, undefined, conv).siHuaSummary?.replace(/\n/g, ' / ');
}
console.log('庚午年 四化 by 庚版本:');
console.log('  中州(預設):', sihua(DEFAULT_CONVENTIONS));
console.log('  天府科派 :', sihua({ ...DEFAULT_CONVENTIONS, gengSihua: 'tianfu' }));
console.log('  官非派   :', sihua({ ...DEFAULT_CONVENTIONS, gengSihua: 'tianxiang' }));

const ren = { year: 2002, month: 8, day: 20, hour: 12, minute: 0, gender: 'Male' as const }; // 壬午年
console.log('\n壬午年 四化 by 壬版本:');
console.log('  左輔科(預設):', generateChart(ren, undefined, DEFAULT_CONVENTIONS).siHuaSummary?.replace(/\n/g, ' / '));
console.log('  天府科     :', generateChart(ren, undefined, { ...DEFAULT_CONVENTIONS, renSihua: 'tianfu' }).siHuaSummary?.replace(/\n/g, ' / '));

console.log('\n晚子時 (1990-1-1 23:00) 命宮:');
const z = { year: 1990, month: 1, day: 1, hour: 23, minute: 0, gender: 'Male' as const };
const m = (c: ChartConventions) => generateChart(z, undefined, c).palaces.find(p => p.palaceName === '命宮')!.branchName;
console.log('  本日(預設):', m(DEFAULT_CONVENTIONS), '| 全換日:', m({ ...DEFAULT_CONVENTIONS, lateZi: 'switchDay' }));
