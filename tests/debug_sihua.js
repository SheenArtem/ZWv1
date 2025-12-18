import { generateChart } from '../src/logic/ChartBuilder';
const details = {
    year: 1983, // Gui Hai -> Si Hua: Po, Ju, Yin, Tan
    month: 7,
    day: 8,
    hour: 14,
    minute: 30,
    gender: 'Male'
};
const chart = generateChart(details);
console.log(`\n=== Debug Si Hua ===`);
console.log(`Year: 1983`);
console.log(`Si Hua Summary: "${chart.siHuaSummary}"`);
console.log(`Checking Map logic...`);
// Check Palaces for Mutagens
chart.palaces.forEach(p => {
    p.majorStars.forEach(s => {
        if (s.mutagen)
            console.log(`  ${p.branchName} Palace: ${s.name} => ${s.mutagen}`);
    });
});
