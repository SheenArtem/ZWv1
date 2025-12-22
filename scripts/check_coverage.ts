import majorStars from '../src/data/interpretations/stars/major.json';
import auxiliaryStars from '../src/data/interpretations/stars/auxiliary.json';
import godsStars from '../src/data/interpretations/stars/gods.json';
import miscStars from '../src/data/interpretations/stars/misc.json';

const PALACES = [
    '命宮', '兄弟宮', '夫妻宮', '子女宮', '財帛宮', '疾厄宮',
    '遷移宮', '交友宮', '官祿宮', '田宅宮', '福德宮', '父母宮'
];

function checkCoverage(name: string, data: any) {
    console.log(`--- ${name} Coverage ---`);
    let totalStars = 0;
    let totalSlots = 0;
    let filledSlots = 0;

    for (const [star, palaces] of Object.entries(data)) {
        totalStars++;
        const pKeys = Object.keys(palaces as object);
        const missing = PALACES.filter(p => !pKeys.includes(p));

        totalSlots += 12;
        filledSlots += (12 - missing.length);

        if (missing.length > 0) {
            console.log(`${star}: Missing ${missing.length} palaces (${missing.join(', ')})`);
        } else {
            // console.log(`${star}: Complete`);
        }
    }
    console.log(`Total Stars: ${totalStars}`);
    console.log(`Coverage: ${filledSlots}/${totalSlots} (${((filledSlots / totalSlots) * 100).toFixed(1)}%)\n`);
}

console.log("Analyzing Database Coverage...");
checkCoverage("Major Stars", majorStars);
checkCoverage("Auxiliary Stars", auxiliaryStars);
checkCoverage("Gods (ChangSheng 12)", godsStars);
checkCoverage("Misc Stars", miscStars);
