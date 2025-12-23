import { generateChart } from '../src/logic/ChartBuilder';
import { Interpreter } from '../src/logic/analysis/Interpreter';
import { BirthDetails } from '../src/logic/models/BirthDetails';
import fs from 'fs';

const logFile = 'verify_output.txt';
fs.writeFileSync(logFile, ''); // Clear file

function log(msg: string) {
    console.log(msg);
    fs.appendFileSync(logFile, msg + '\n');
}

function verifyAnalysis() {
    log(`\n=== Verifying 12-Palace Analysis ===`);
    try {
        // Use a test date
        const input: BirthDetails = { year: 1990, month: 1, day: 1, hour: 12, minute: 0, gender: 'Male' };

        log('Generating Chart...');
        const chart = generateChart(input);

        log('Running Analysis...');
        const interpreter = new Interpreter(chart);
        const result = interpreter.analyze();

        // Assertion 1: Check Life Palace
        if (result.lifePalace) {
            log(`[PASS] Life Palace present: ${result.lifePalace.palaceName}`);
            log(`       Major Stars: ${result.lifePalace.majorStars.map(s => s.starName).join(', ')}`);
        } else {
            log(`[FAIL] Life Palace missing!`);
        }

        // Assertion 2: Check allPalaces length
        if (result.allPalaces && result.allPalaces.length === 12) {
            console.log(`[PASS] Analysis contains ${result.allPalaces.length} palaces.`);
            log(`[PASS] Analysis contains ${result.allPalaces.length} palaces.`);
        } else {
            console.log(`[FAIL] Analysis contains ${result.allPalaces?.length} palaces (Expected 12).`);
            log(`[FAIL] Analysis contains ${result.allPalaces?.length} palaces (Expected 12).`);
        }

        // Assertion 3: Print all palace names to ensure correct sequence/coverage
        log('\n--- Palace Coverage Check ---');
        result.allPalaces.forEach((p, idx) => {
            log(`${idx + 1}. ${p.palaceName} - Comment: ${p.overallComment.substring(0, 30)}...`);
        });

        // Assertion 4: Check Summary
        log('\n--- Summary Check ---');
        log(result.summary.join('\n'));

    } catch (e) {
        log(`Error: ${e}`);
        console.error(e);
    }
}

verifyAnalysis();
