import { EXPECTED_1983 } from './reference_1983';
import { getBrightness } from './src/logic/calculators/StarBrightnessMap';

console.log('=== 14主星亮度检查报告 ===\n');

const branches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
const branchIndex: Record<string, number> = {};
branches.forEach((b, i) => branchIndex[b] = i);

// Extract all major stars from reference
const refStars: Array<{ star: string, branch: string, brightness: string }> = [];
Object.entries(EXPECTED_1983.palaces).forEach(([branch, data]: any) => {
    data.major.forEach((star: any) => {
        if (star.brightness) {
            refStars.push({
                star: star.name,
                branch: branch,
                brightness: star.brightness
            });
        }
    });
});

// Sort by branch index
refStars.sort((a, b) => branchIndex[a.branch] - branchIndex[b.branch]);

let hasError = false;

console.log('宫位\t主星\t\t参考亮度\t程序亮度\t状态');
console.log('='.repeat(60));

refStars.forEach(({ star, branch, brightness }) => {
    const idx = branchIndex[branch];
    const actual = getBrightness(star, idx);
    const status = actual === brightness ? '✓' : '✗ 错误';

    if (actual !== brightness) {
        hasError = true;
        console.log(`${branch}\t${star}\t\t${brightness}\t\t${actual}\t\t${status}`);
    } else {
        console.log(`${branch}\t${star}\t\t${brightness}\t\t${actual}\t\t${status}`);
    }
});

console.log('='.repeat(60));
if (hasError) {
    console.log('\n发现亮度不匹配！');
} else {
    console.log('\n所有主星亮度正确！');
}
