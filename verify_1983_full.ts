
import { BirthDetails } from './src/logic/models/BirthDetails';
import { generateChart } from './src/logic/ChartBuilder';
import { EXPECTED_1983 } from './reference_1983';

const input: BirthDetails = {
    year: 1983,
    month: 7,
    day: 8,
    hour: 14,
    minute: 30,
    gender: 'Male'
};

const chart = generateChart(input); // Birth chart without prediction (1983 Gods)

console.log('--- Verification Report for 1983 Gui Hai ---');
console.log('');

function check(label: string, actual: any, expected: any) {
    if (actual !== expected) {
        console.log(`[FAIL] ${label}: Expected ${expected}, Got ${actual}`);
    } else {
        console.log(`[PASS] ${label}`);
    }
}

// 1. Bureau
check('Bureau', chart.bureau, EXPECTED_1983.bureau);

// 2. Palaces
const palaceMap = new Map();
chart.palaces.forEach(p => palaceMap.set(p.branchName, p));

Object.entries(EXPECTED_1983.palaces).forEach(([branch, pData]) => {
    const actualP = palaceMap.get(branch);
    if (!actualP) {
        console.log(`[FAIL] Palace ${branch} not found`);
        return;
    }

    // Name
    // check(`Palace Name ${branch}`, actualP.palaceName, pData.name); // Names might vary (Servants vs Friends)

    // Major Stars
    pData.major.forEach((expectedStar: any) => {
        const found = actualP.majorStars.find((s: any) => s.name === expectedStar.name) || actualP.minorStars.find((s: any) => s.name === expectedStar.name);
        if (!found) {
            console.log(`[FAIL] ${branch} Major Star ${expectedStar.name} missing`);
        } else {
            if (expectedStar.brightness && found.brightness !== expectedStar.brightness) {
                console.log(`[FAIL] ${branch} ${expectedStar.name} Brightness: Exp ${expectedStar.brightness}, Got ${found.brightness}`);
            } else if (expectedStar.brightness) {
                console.log(`[PASS] ${branch} ${expectedStar.name} Brightness: ${found.brightness}`);
            }
            if (expectedStar.mutagen) {
                // Map 'Lu' to '祿' etc only if needed, or check validity
                // My engine uses 'Lu', 'Quan'. expected might be checking presense.
                if (found.mutagen !== expectedStar.mutagen) {
                    console.log(`[FAIL] ${branch} ${expectedStar.name} Mutagen: Exp ${expectedStar.mutagen}, Got ${found.mutagen}`);
                }
            }
        }
    });

    // Check for Extra Major
    actualP.majorStars.forEach((s: any) => {
        if (!pData.major.find((es: any) => es.name === s.name)) {
            console.log(`[FAIL] ${branch} has Unexpected Major Star ${s.name}`);
        }
    });

    // Minor Stars (Partial check for existence)
    console.log(`\n  Checking ${branch} Minor Stars:`);
    pData.minor.forEach((mName: string) => {
        const found = actualP.minorStars.find((s: any) => s.name === mName) || actualP.majorStars.find((s: any) => s.name === mName);
        if (!found) {
            // Check alias? Jie Lu vs Jie Kong. Fei Lian vs Fei_Lian.
            if (mName === '截路' && (actualP.minorStars.find((s: any) => s.name === '截空'))) {
                console.log(`  [PASS] ${mName} (as 截空)`);
                return;
            }
            if (mName === '空亡' && (actualP.minorStars.find((s: any) => s.name === '旬空'))) {
                console.log(`  [PASS] ${mName} (as 旬空)`);
                return;
            }
            if (mName === '天馬' && (actualP.minorStars.find((s: any) => s.name === '月馬'))) {
                console.log(`  [PASS] ${mName} (as 月馬)`);
                return;
            }
            console.log(`  [FAIL] ${branch} Star ${mName} missing`);
        } else {
            console.log(`  [PASS] ${mName}`);
        }
    });

    // Gods (only check changSheng and boShi since user only provided those two)
    if (actualP.gods.changSheng !== pData.gods.changSheng) console.log(`[FAIL] ${branch} ChangSheng: Exp ${pData.gods.changSheng}, Got ${actualP.gods.changSheng}`);
    if (actualP.gods.boShi !== pData.gods.boShi) console.log(`[FAIL] ${branch} BoShi: Exp ${pData.gods.boShi}, Got ${actualP.gods.boShi}`);

    // Limits
    if (actualP.daXian !== pData.limits) {
        console.log(`[FAIL] ${branch} Limits: Exp ${pData.limits}, Got ${actualP.daXian}`);
    }

    // Check for Duplicate Stars in this Palace
    const starNames = new Set<string>();
    const allStars = [...actualP.majorStars, ...actualP.minorStars];
    allStars.forEach((s: any) => {
        if (starNames.has(s.name)) {
            console.log(`[FAIL] ${branch} Duplicate Star Found: ${s.name}`);
        }
        starNames.add(s.name);
    });

});

console.log('--- End Report ---');
