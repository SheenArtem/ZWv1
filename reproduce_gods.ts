
import { BirthDetails } from './src/logic/models/BirthDetails';
import { generateChart } from './src/logic/ChartBuilder';
import { HEAVENLY_STEMS, EARTHLY_BRANCHES } from './src/logic/constants';

const input: BirthDetails = {
    year: 1983,
    month: 7,
    day: 8,
    hour: 14,
    gender: 'Male'
};

const chart = generateChart(input);

console.log(`Chart for ${input.year}-${input.month}-${input.day} ${input.hour}h ${input.gender}`);
console.log(`Lunar: ${chart.lunarDate}, BaZi: ${chart.baZi}`);
console.log(`Bureau: ${chart.bureau} (Water 2?)`);
console.log(`Year Gan: ${chart.palaces[0].stemIndex} (Example)`);

// User Reference for Ming Palace (Hai)
// Expect: Jue, Li Shi, Long De, Wang Shen
const mingPalace = chart.palaces.find(p => p.branchName === '亥');

if (mingPalace) {
    console.log(`Ming Palace (Hai):`);
    console.log(`Chang Sheng: ${mingPalace.gods.changSheng} (Expect: 絕 / Jue)`);
    console.log(`Bo Shi: ${mingPalace.gods.boShi} (Expect: 力士 / Li Shi)`);
    console.log(`Jiang Qian: ${mingPalace.gods.jiangQian} (Expect: 龍德 / Long De)`);
    console.log(`Sui Jian: ${mingPalace.gods.suiJian} (Expect: 亡神 / Wang Shen)`);
} else {
    console.log("Ming Palace (Hai) not found!");
}

// Check Spouse (You)
// Expect: Yang, Xiao Hao, Xiao Hao, Xian Chi.
const spouse = chart.palaces.find(p => p.branchName === '酉');
if (spouse) {
    console.log(`Spouse (You):`);
    console.log(`Chang Sheng: ${spouse.gods.changSheng} (Expect: 養 / Yang)`);
    console.log(`Bo Shi: ${spouse.gods.boShi} (Expect: 小耗 / Xiao Hao)`);
    console.log(`Jiang Qian: ${spouse.gods.jiangQian} (Expect: 小耗 / Xiao Hao)`);
    console.log(`Sui Jian: ${spouse.gods.suiJian} (Expect: 咸池 / Xian Chi)`);
}
