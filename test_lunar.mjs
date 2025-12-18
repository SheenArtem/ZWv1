
import LunarJS from 'lunar-javascript';
const { Solar } = LunarJS;

console.log('--- Testing LunarJS for Prediction Si Hua Logic ---');

const dateStr = '2025-06-15';
const date = new Date(dateStr);
console.log('Prediction Date:', dateStr);

const solar = Solar.fromDate(date);
const lunar = solar.getLunar();

const pYear = lunar.getYear();
console.log('Lunar Year:', pYear);

const ganZhiYear = lunar.getGanZhiYear();
console.log('GanZhi Year String:', ganZhiYear);
console.log('GanZhi Year Code Points:',
    ganZhiYear.codePointAt(0),
    ganZhiYear.codePointAt(1)
);

const ganChar = ganZhiYear.substring(0, 1);
console.log('Gan Char:', ganChar);
console.log('Gan Char Code Point:', ganChar.codePointAt(0));

const TARGET_GANS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
const index = TARGET_GANS.indexOf(ganChar);
console.log('Index in TARGET_GANS:', index);

if (index === -1) {
    console.error('FAIL: Gan Char not found in target list.');
    console.log('Target Char Code Points:', TARGET_GANS.map(c => c.codePointAt(0)));
} else {
    console.log('SUCCESS: Gan Char found at index', index);
}

// Test Month
const ganZhiMonth = lunar.getGanZhiMonth();
console.log('GanZhi Month String:', ganZhiMonth);
const monthGan = ganZhiMonth.substring(0, 1);
console.log('Month Gan Char:', monthGan);
const monthIndex = TARGET_GANS.indexOf(monthGan);
console.log('Month Index:', monthIndex);
