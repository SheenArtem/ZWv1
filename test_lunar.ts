
import { Solar } from 'lunar-javascript';

const date = new Date();
const solar = Solar.fromDate(date);
const lunar = solar.getLunar();

const ganZhiYear = lunar.getGanZhiYear();
const ganYear = ganZhiYear.substring(0, 1);

console.log('GanZhi Year:', ganZhiYear);
console.log('Gan Year:', ganYear);

const GAN_CHARS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
const index = GAN_CHARS.indexOf(ganYear);

console.log('Index:', index);

if (index === -1) {
    console.log('FAIL: Character match failed.');
    console.log('Expected one of:', GAN_CHARS.join(', '));
    console.log('Got code point:', ganYear.codePointAt(0));
    console.log('Target code point:', GAN_CHARS[0].codePointAt(0)); // Compare with first char
} else {
    console.log('SUCCESS: Character matches.');
}
