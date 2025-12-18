
// Standalone ZWDS Calculator for 1983-07-08 Wei Hour (Male)
// Hardcoded logic to verify and print chart

const ZHI = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
const GAN = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
const STARS = ['紫微', '天機', '太陽', '武曲', '天同', '廉貞', '天府', '太陰', '貪狼', '巨門', '天相', '天梁', '七殺', '破軍'];
const PALACES = ['命宮', '兄弟', '夫妻', '子女', '財帛', '疾厄', '遷移', '交友', '官祿', '田宅', '福德', '父母'];

// Input: 1983 (Gui-Hai), Month 5, Day 28, Wei Hour (8th, idx 7)
const L = { y: 1983, m: 5, d: 28, h: 7, ganYear: 9, zhiYear: 11 };

// 1. Palaces
// Ming: Month(5) + 2(Yin) - 1 = 6(Si). Si(6) - (Hour(8)-1) = 6-7 = -1 => 11 (Hai).
const mingIndex = 11; // Hai
const shenIndex = 1;  // Chou (Calculated previously: 6+7=13=>1)

// 2. Stems (Wu Hu Dun)
// Year Gui(9) -> Start Yin with Jia(0).
// Hai is 10 steps from Yin. 0+9 = 9 (Gui).
// So Ming is Yi-Hai? No.
// Yin(0), Mao(1), ..., Hai(9). 
// Wait, Yin=0(Jia).
// Yin-Mao-Chen-Si-Wu-Wei-Shen-You-Xu-Hai.
// 0,  1,   2,   3,  4,  5,  6,   7,  8,  9.
// So Hai is Gui(9).
// Ming is Gui-Hai.

// 3. Bureau
// Gui-Hai -> Great Ocean Water -> Water 2.
const bureau = 2;

// 4. Zi Wei Star
// Day 28, Bureau 2.
// 28/2 = 14. Remainder 0.
// R=0 (Even? No 2*14=28, 28-28=0) -> Q+R = 14+0 = 14.
// Pos = 14.
// 14 map to Branch?
// 1=Yin, 2=Mao... 13=Yin, 14=Mao.
// So Zi Wei at Mao (3).
const ziWeiPos = 3;

// 5. Major Stars Layout (Zi Wei Series)
// ZiWei(3/Mao)
// TianJi(2/Yin)
// TaiYang(0/Zi)
// WuQu(11/Hai)
// TianTong(10/Xu)
// LianZhen(7/Wei)

// 6. Tian Fu Series
// TianFu: if ZiWei=3(Mao).
// Formula: (4 - Z + 12)%12 => (4 - 3 + 12)%12 = 13%12 = 1 (Chou).
// TianFu at Chou (1).
// TaiYin(2/Yin)
// TanLang(3/Mao)
// JuMen(4/Chen)
// TianXiang(5/Si)
// TianLiang(6/Wu)
// QiSha(7/Wei)
// PoJun(11/Hai)

// 7. Masters
// Ming Zhu: Ming at Hai. Hai->Ju Men.
// Shen Zhu: Year Branch Hai. Hai->Tian Ji.

// 8. Output
console.log(`\n=== 1983年7月8日 未時 (陰男) 文字命盤 ===`);
console.log(`局數: 水二局 | 命主: 巨門 | 身主: 天機`);
console.log(`命宮: 亥 | 身宮: 丑`);
console.log('-------------------------------------------');

// We need to print full layout or list? List is clearer for text.
// Let's print roughly in order: Zi, Chou...
const starMap = [
    { p: 3, n: '紫微' }, { p: 2, n: '天機' }, { p: 0, n: '太陽' }, { p: 11, n: '武曲' },
    { p: 10, n: '天同' }, { p: 7, n: '廉貞' },
    { p: 1, n: '天府' }, { p: 2, n: '太陰' }, { p: 3, n: '貪狼' }, { p: 4, n: '巨門' },
    { p: 5, n: '天相' }, { p: 6, n: '天梁' }, { p: 7, n: '七殺' }, { p: 11, n: '破軍' }
];

const branches = [
    { i: 5, n: '巳' }, { i: 6, n: '午' }, { i: 7, n: '未' }, { i: 8, n: '申' },
    { i: 4, n: '辰' }, { i: 9, n: '酉' },
    { i: 3, n: '卯' }, { i: 10, n: '戌' },
    { i: 2, n: '寅' }, { i: 1, n: '丑' }, { i: 0, n: '子' }, { i: 11, n: '亥' }
];

// Helper to get stem
const getStem = (b) => {
    // Yin(2) starts with Jia(0).
    // b offset from 2.
    // if b=2, s=0.
    // if b=0 (Zi), it is after Hai. Index 10 from Yin.
    // index = (b - 2 + 12) % 12;
    // stem = (0 + index) % 10.
    const idx = (b - 2 + 12) % 12;
    return GAN[(idx) % 10];
};

const getPalaceName = (b) => {
    // Ming is at Hai(11).
    // Ming=0, Sib=1...
    // NameIndex = (MingIndex - b + 12) % 12.
    // if b=11, idx=0 (Ming).
    const idx = (mingIndex - b + 12) % 12;
    return PALACES[idx];
};

// Print Logic
for (let k = 0; k < branches.length; k++) {
    const b = branches[k].i;
    const bName = branches[k].n;
    const pName = getPalaceName(b);
    const stem = getStem(b);

    // Find Stars
    const cellStars = starMap.filter(s => s.p === b).map(s => s.n).join('、');

    console.log(`【${bName}】${pName} (${stem}${bName}) : ${cellStars || '(無主星)'}`);
}
