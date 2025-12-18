import { generateChart } from '../src/logic/ChartBuilder';
// 1983-07-08 14:30 Male
const details = {
    year: 1983,
    month: 7,
    day: 8,
    hour: 14,
    minute: 30,
    gender: 'Male'
};
const chart = generateChart(details);
console.log(`\n=== 紫微斗數命盤文字版 ===`);
console.log(`日期: 1983年7月8日 14時30分 (男)`);
console.log(`五行局: ${chart.bureau}局`);
console.log(`命主: ${chart.mingZhu} | 身主: ${chart.shenZhu}`);
console.log('------------------------------------------------');
const branchOrder = [5, 6, 7, 8, 4, 9, 3, 10, 2, 1, 0, 11]; // Grid Order (Si...Shen, Chen...You...)
// Standard Order Zi(0) to Hai(11) is easier to read as a list
for (let b = 0; b < 12; b++) {
    const p = chart.palaces.find(pal => pal.branchIndex === b);
    if (!p)
        continue;
    console.log(`【${p.branchName}宮】${p.palaceName} (${p.stemName}${p.branchName})`);
    // Stars
    const majors = p.majorStars.map(s => `${s.name}${s.brightness ? '(' + s.brightness + ')' : ''}`).join('、');
    const minors = p.minorStars.map(s => s.name).join('、');
    if (majors)
        console.log(`  主星: ${majors}`);
    if (minors)
        console.log(`  輔星/雜曜: ${minors}`);
    // Gods
    console.log(`  神煞: ${p.gods.changSheng}、${p.gods.boShi}、${p.gods.suiJian}`);
    // Limits
    console.log(`  大限: ${p.daXian} | 小限: ${p.xiaoXian}`);
    console.log('');
}
