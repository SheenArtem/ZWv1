import { generateChart } from '../src/logic/ChartBuilder';
import { EARTHLY_BRANCHES } from '../src/logic/constants';

// Test Case: 2024-02-10 10:00 (Jia Chen Year, Bing Yin Month, Jia Chen Day, Ji Si Hour)
// Note: Library might calculate lunar differently, so we rely on its internal consistency.
const testInput = {
    year: 2024,
    month: 2,
    day: 10,
    hour: 10,
    minute: 0,
    gender: 'Male' as const
};

console.log("Running Verification for:", JSON.stringify(testInput));
const chart = generateChart(testInput);

// Helper to find star index
const findStar = (name: string) => {
    const palace = chart.palaces.find(p => 
        p.majorStars.some(s => s.name === name) || 
        p.minorStars.some(s => s.name === name) ||
        // Check new stars if they are in minorStars
        p.minorStars.some(s => s.name === name)
    );
    return palace ? palace.branchIndex : -1;
};

// 1. Verify Sha-Po-Lang Triad (Tan Lang, Qi Sha, Po Jun)
const tanLang = findStar('貪狼');
const qiSha = findStar('七殺');
const poJun = findStar('破軍');

console.log(`\n1. Checking Sha-Po-Lang Triad...`);
console.log(`- Tan Lang: ${EARTHLY_BRANCHES[tanLang]}`);
console.log(`- Qi Sha: ${EARTHLY_BRANCHES[qiSha]}`);
console.log(`- Po Jun: ${EARTHLY_BRANCHES[poJun]}`);

const splValid = 
    (Math.abs(tanLang - qiSha) % 12 === 4 || Math.abs(tanLang - qiSha) % 12 === 8) &&
    (Math.abs(qiSha - poJun) % 12 === 4 || Math.abs(qiSha - poJun) % 12 === 8);

if (splValid) console.log("✅ PASS: Sha-Po-Lang are in mutual trine (San He).");
else console.error("❌ FAIL: Sha-Po-Lang Not in trine!");


// 2. Verify Yang-Tuo Clamp Lu (Lu Cun clamped by Qing Yang & Tuo Luo)
const luCun = findStar('祿存');
const qingYang = findStar('擎羊');
const tuoLuo = findStar('陀羅');

console.log(`\n2. Checking Lu Cun Clamp...`);
console.log(`- Lu Cun: ${EARTHLY_BRANCHES[luCun]} (${luCun})`);
console.log(`- Qing Yang: ${EARTHLY_BRANCHES[qingYang]} (${qingYang})`);
console.log(`- Tuo Luo: ${EARTHLY_BRANCHES[tuoLuo]} (${tuoLuo})`);

// Logic: Yang = Lu + 1, Tuo = Lu - 1
const yangCheck = (luCun + 1) % 12 === qingYang;
const tuoCheck = (luCun - 1 + 12) % 12 === tuoLuo;

if (yangCheck && tuoCheck) console.log("✅ PASS: Lu Cun is correctly clamped by Yang and Tuo.");
else console.error("❌ FAIL: Lu Cun clamp logic error!");


// 3. Verify Zi Wei Star Sequence (reversed)
// Sequence: Zi Wei, Tian Ji, (Void), Tai Yang, Wu Qu, Tian Tong, (Void x2), Lian Zhen...
const ziWei = findStar('紫微');
const tianJi = findStar('天機');
console.log(`\n3. Checking Zi-Wei Sequence...`);
// Tian Ji should be Zi Wei - 1
const tjCheck = (ziWei - 1 + 12) % 12 === tianJi;
if (tjCheck) console.log("✅ PASS: Tian Ji is correctly placed relative to Zi Wei.");
else console.error(`❌ FAIL: Tian Ji should be at ${(ziWei - 1 + 12) % 12}, found at ${tianJi}`);

// 4. Verify Si Hua (Year Stem Jia -> Lian, Po, Wu, Yang)
// Jia Year (2024 is Jia Chen)
// Lu: Lian Zhen, Quan: Po Jun, Ke: Wu Qu, Ji: Tai Yang
console.log(`\n4. Checking Si Hua (Jia Year)...`);
const lianZhenPalace = chart.palaces.find(p => p.majorStars.some(s => s.name === '廉貞'));
const lzStar = lianZhenPalace?.majorStars.find(s => s.name === '廉貞');
const poJunPalace = chart.palaces.find(p => p.majorStars.some(s => s.name === '破軍'));
const pjStar = poJunPalace?.majorStars.find(s => s.name === '破軍');
const taiYangPalace = chart.palaces.find(p => p.majorStars.some(s => s.name === '太陽'));
const tyStar = taiYangPalace?.majorStars.find(s => s.name === '太陽');

if (lzStar?.mutagen === 'Lu') console.log("✅ PASS: Lian Zhen is Lu (Jia Year).");
else console.error(`❌ FAIL: Lian Zhen mutagen is ${lzStar?.mutagen}`);

if (pjStar?.mutagen === 'Quan') console.log("✅ PASS: Po Jun is Quan (Jia Year).");
else console.error(`❌ FAIL: Po Jun mutagen is ${pjStar?.mutagen}`);

if (tyStar?.mutagen === 'Ji') console.log("✅ PASS: Tai Yang is Ji (Jia Year).");
else console.error(`❌ FAIL: Tai Yang mutagen is ${tyStar?.mutagen}`);

// 5. Check Total Minor Stars Count
console.log(`\n5. Checking Total Star Count in one palace (sample)...`);
const samplePalace = chart.palaces[0];
console.log(`Palace ${samplePalace.palaceName} has:`);
console.log(`- Major: ${samplePalace.majorStars.length}`);
console.log(`- Minor: ${samplePalace.minorStars.length}`);
console.log(`- Gods: 4 (ChangSheng, BoShi, SuiJian, JiangQian)`);
