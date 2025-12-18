import { generateChart } from '../src/logic/ChartBuilder';
// 1983-07-08 14:30
// Solar Date.
const details = {
    year: 1983,
    month: 7,
    day: 8,
    hour: 14,
    minute: 30,
    gender: 'Male'
};
console.log("Generating Chart for:", details);
const chart = generateChart(details);
console.log("\n=== Masters ===");
console.log("Ming Zhu:", chart.mingZhu);
console.log("Shen Zhu:", chart.shenZhu);
console.log("Bureau:", chart.bureau);
console.log("\n=== Palaces ===");
chart.palaces.forEach(p => {
    console.log(`[${p.branchIndex}] ${p.branchName} Palace (${p.stemName}${p.branchName}) - ${p.palaceName}`);
    console.log("  Major:", p.majorStars.map(s => `${s.name}(${s.brightness})`).join(', '));
    console.log("  Minor:", p.minorStars.map(s => s.name).join(', '));
    console.log("  Gods:", p.gods.changSheng, p.gods.boShi, p.gods.suiJian);
});
