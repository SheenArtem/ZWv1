
import { generateChart } from '../src/logic/ChartBuilder';
import { Interpreter } from '../src/logic/analysis/Interpreter';
import { BirthDetails } from '../src/logic/models/BirthDetails';
import LunarJS from 'lunar-javascript';
const { Lunar } = LunarJS;
import fs from 'fs';

const logFile = 'debug_output.txt';
fs.writeFileSync(logFile, ''); // Clear file

function log(msg: string) {
    console.log(msg);
    fs.appendFileSync(logFile, msg + '\n');
}

function analyze(label: string, input: BirthDetails) {
    log(`\n=== Analyzing Case: ${label} ===`);
    try {
        const chart = generateChart(input);
        const life = chart.palaces.find(p => p.palaceName === '命宮');

        log(`Life Palace: ${life?.branchName} (${life?.branchIndex})`);
        log(`Major Stars: [${life?.majorStars.map(s => s.name).join(', ')}]`);
        log(`Minor Stars: [${life?.minorStars.map(s => s.name).join(', ')}]`);

        // Check specifics for Ming Zhu Chu Hai
        // Life @ Wei(7), Empty. Wealth(Mao-3) Sun. Career(Hai-11) Moon.
        const wealth = chart.palaces.find(p => p.palaceName === '財帛宮');
        const career = chart.palaces.find(p => p.palaceName === '官祿宮');

        log(`Wealth (Mao?): ${wealth?.branchName} (${wealth?.branchIndex}) - Major: ${wealth?.majorStars.map(s => s.name)}`);
        log(`Career (Hai?): ${career?.branchName} (${career?.branchIndex}) - Major: ${career?.majorStars.map(s => s.name)}`);

        const interpreter = new Interpreter(chart);
        const result = interpreter.analyze();
        const formations = result.summary.filter(s => s.includes("【特殊格局】"));
        log("Detected Formations: " + formations.join(', '));

    } catch (e) {
        log(`Error: ${e}`);
    }
}

// Case 1: Solar 1983-07-08
const inputSolar: BirthDetails = { year: 1983, month: 7, day: 8, hour: 14, minute: 0, gender: 'Male' };
analyze("Input as Solar 1983-07-08", inputSolar);

// Case 2: Lunar 1983-07-08 -> Convert to Solar
// Lunar(year, month, day, leap?)
const lunarDate = Lunar.fromYmd(1983, 7, 8);
const solarDate = lunarDate.getSolar();
const inputLunarConverted: BirthDetails = {
    year: solarDate.getYear(),
    month: solarDate.getMonth(),
    day: solarDate.getDay(),
    hour: 14,
    minute: 0,
    gender: 'Male'
};
log(`\nConverted Lunar 1983-07-08 to Solar: ${inputLunarConverted.year}-${inputLunarConverted.month}-${inputLunarConverted.day}`);
analyze("Input as Lunar 1983-07-08", inputLunarConverted);
