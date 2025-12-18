
import { generateChart } from './src/logic/ChartBuilder';
import { BirthDetails } from './src/logic/models/BirthDetails';

const details: BirthDetails = {
    year: 1990,
    month: 1,
    day: 1,
    hour: 12,
    minute: 0,
    gender: 'Male'
};

const predictionDate = new Date('2025-06-15');
console.log('Testing generateChart with predictionDate:', predictionDate);

const chart = generateChart(details, predictionDate);

console.log('Liu Nian Index:', chart.liuNianIndex);
console.log('Liu Yue Index:', chart.liuYueIndex);
console.log('Liu Nian Si Hua Summary:', chart.liuNianSiHuaSummary);
console.log('Liu Yue Si Hua Summary:', chart.liuYueSiHuaSummary);

if (!chart.liuNianSiHuaSummary) {
    console.error('FAIL: Liu Nian Si Hua Summary is missing');
}
if (!chart.liuYueSiHuaSummary) {
    console.error('FAIL: Liu Yue Si Hua Summary is missing');
}
