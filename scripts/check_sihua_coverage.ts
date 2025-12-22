import sihuaData from '../src/data/interpretations/stars/sihua.json';
import { SiHuaContext, SiHuaContent } from '../src/data/interpretations/models';

const PALACES = [
    '命宮', '兄弟宮', '夫妻宮', '子女宮', '財帛宮', '疾厄宮',
    '遷移宮', '交友宮', '官祿宮', '田宅宮', '福德宮', '父母宮'
];

// 4 Type maps
const TYPES = ['Lu', 'Quan', 'Ke', 'Ji'];

function checkSiHuaDeep() {
    console.log("Analyzing SiHua Palace Coverage...");
    const data = sihuaData as unknown as Record<string, SiHuaContext>;

    let totalTransforms = 0;
    let totalSlots = 0;
    let filledSlots = 0;

    for (const [starName, types] of Object.entries(data)) {
        for (const typeKey of Object.keys(types)) {
            totalTransforms++;
            const content = types[typeKey as keyof SiHuaContext] as SiHuaContent;

            // Check palaces
            const palaces = content.palaces || {};
            const pKeys = Object.keys(palaces);

            const missing = PALACES.filter(p => !pKeys.includes(p));
            totalSlots += 12;
            filledSlots += (12 - missing.length);

            if (missing.length > 0) {
                // console.log(`${starName}-${typeKey}: Missing ${missing.length} palaces.`);
            }
        }
    }

    console.log(`Total Transformations Found: ${totalTransforms} (Should be ~40)`);
    console.log(`Total Palace Slots: ${totalSlots}`);
    console.log(`Filled Palace Slots: ${filledSlots}`);
    console.log(`Coverage: ${((filledSlots / totalSlots) * 100).toFixed(1)}%`);

    if (filledSlots < totalSlots) {
        console.log("Verdict: INCOMPLETE. Missing palace details found.");
    } else {
        console.log("Verdict: COMPLETE.");
    }
}

checkSiHuaDeep();
