import { generateChart } from '../src/logic/ChartBuilder';
import { Interpreter } from '../src/logic/analysis/Interpreter';
import { BirthDetails } from '../src/logic/models/BirthDetails';

// Mock Input
const input: BirthDetails = {
    year: 1983,
    month: 10, // Solar month
    day: 15,
    hour: 18,
    minute: 30,
    gender: 'Male',
};

console.log("Generating Chart...");
const chart = generateChart(input);

console.log("Analyzing Chart...");
try {
    const interpreter = new Interpreter(chart);
    const result = interpreter.analyze();

    console.log("Analysis Result:");
    console.log("Life Palace Analysis:");
    console.log("- Major Stars Descriptions:", result.lifePalace.majorStars.map(s => s.description));
    console.log("- Minor/Misc Stars:");
    result.lifePalace.minorStars.forEach(s => {
        console.log(`  * ${s.starName}: ${s.description}`); // Removed substring limit for full view locally
    });
    console.log("- Gods (Chang Sheng):", result.lifePalace.gods.map(g => `${g.starName}: ${g.description}`));
    console.log("- Si Hua Descriptions:", result.lifePalace.siHua.map(s => `${s.starName}: ${s.description}`));

    // Check for Formations in Summary
    const formations = result.summary.filter(s => s.includes("【特殊格局】"));
    if (formations.length > 0) {
        console.log("- Detected Formations:", formations);
    } else {
        console.log("- No Special Formations Detected.");
    }

    console.log("- Overall Comment:", result.lifePalace.overallComment);

    if (result.lifePalace) { // Assuming 'lifePalace' refers to result.lifePalace
        console.log("SUCCESS: Life Palace identified.");
    } else {
        console.error("FAILURE: Life Palace not found.");
        process.exit(1);
    }
} catch (e) {
    console.error("FAILURE: Analysis crashed.", e);
    process.exit(1);
}
