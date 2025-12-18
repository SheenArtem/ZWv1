
import { Solar } from 'lunar-javascript';

// Assume these are the target characters in our app
const GAN_CHARS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];

console.log('--- DEBUG START ---');

const date = new Date('2025-06-15');
const solar = Solar.fromDate(date);
const lunar = solar.getLunar();

// Test Year
const yearInGanZhi = lunar.getYearInGanZhi();
const ganYearChar = yearInGanZhi.substring(0, 1);

console.log(`Year GanZhi: ${yearInGanZhi}`);
console.log(`Extracted Gan: ${ganYearChar}`);
console.log(`Code Point: ${ganYearChar.codePointAt(0)}`);
const yearIndex = GAN_CHARS.indexOf(ganYearChar);
console.log(`Index in GAN_CHARS: ${yearIndex}`);

if (yearIndex === -1) {
    console.error('FAIL: Year Gan not found!');
    // Print all to compare
    GAN_CHARS.forEach((c, i) => {
        console.log(`  Expected[${i}]: ${c} (${c.codePointAt(0)})`);
    });
} else {
    console.log('SUCCESS: Year Gan match!');
}

// Test Month
const monthInGanZhi = lunar.getMonthInGanZhi();
const ganMonthChar = monthInGanZhi.substring(0, 1);
console.log(`Month GanZhi: ${monthInGanZhi}`);
console.log(`Extracted Gan: ${ganMonthChar}`);
const monthIndex = GAN_CHARS.indexOf(ganMonthChar);
console.log(`Index in GAN_CHARS: ${monthIndex}`);

if (monthIndex === -1) {
    console.error('FAIL: Month Gan not found!');
} else {
    console.log('SUCCESS: Month Gan match!');
}

console.log('--- DEBUG END ---');
