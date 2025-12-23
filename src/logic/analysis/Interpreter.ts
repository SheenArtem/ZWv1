import { ChartData } from '../models/ChartData';
import { AnalysisResult, PalaceAnalysis, StarAnalysis } from './models';
import { majorStars } from './db/majorStars';
import { minorStars } from './db/minorStars';
import { dualStars } from './db/dualStars';
import { siHuaRules } from './db/siHua';
import { formations } from './db/formations';
import { miscStars } from './db/miscStars';
import { gods } from './db/gods';

export class Interpreter {
    private chart: ChartData;
    private STAR_MAP: Record<string, string>;
    private PALACE_MAP: Record<string, string>;
    private GOD_MAP: Record<string, string>;

    constructor(chart: ChartData) {
        this.chart = chart;

        // Define map based on known suffixes or normalized names
        // We expect current system to use 3-char names ('兄弟宮'), but for robustness we can support both.
        this.PALACE_MAP = {
            '命宮': 'Life',
            '兄弟宮': 'Siblings', '兄弟': 'Siblings',
            '夫妻宮': 'Spouse', '夫妻': 'Spouse',
            '子女宮': 'Children', '子女': 'Children',
            '財帛宮': 'Wealth', '財帛': 'Wealth',
            '疾厄宮': 'Health', '疾厄': 'Health',
            '遷移宮': 'Travel', '遷移': 'Travel',
            '交友宮': 'Friends', '交友': 'Friends',
            '官祿宮': 'Career', '官祿': 'Career',
            '田宅宮': 'Property', '田宅': 'Property',
            '福德宮': 'Karma', '福德': 'Karma',
            '父母宮': 'Parents', '父母': 'Parents'
        };

        this.STAR_MAP = {
            '紫微': 'ZiWei', '天機': 'TianJi', '太陽': 'TaiYang', '武曲': 'WuQu',
            '天同': 'TianTong', '廉貞': 'LianZhen', '天府': 'TianFu', '太陰': 'TaiYin',
            '貪狼': 'TanLang', '巨門': 'JuMen', '天相': 'TianXiang', '天梁': 'TianLiang',
            '七殺': 'QiSha', '破軍': 'PoJun',
            // Minor Stars Mapping
            '左輔': 'ZuoFu', '右弼': 'YouBi', '文昌': 'WenChang', '文曲': 'WenQu',
            '天魁': 'TianKui', '天鉞': 'TianYue', '祿存': 'LuCun', '天馬': 'TianMa',
            '擎羊': 'QingYang', '陀羅': 'TuoLuo', '火星': 'HuoXing', '鈴星': 'LingXing',
            '地空': 'DiKong', '地劫': 'DiJie',
            // Misc Stars
            '天官': 'TianGuan',
            '天福': 'TianFu_Misc',
            '天廚': 'TianChu',
            '天哭': 'TianKu',
            '天虛': 'TianXu',
            '華蓋': 'HuaGai',
            '咸池': 'XianChi',
            '台輔': 'TaiFu',
            '封誥': 'FengGao',
            '紅鸞': 'HongLuan',
            '天喜': 'TianXi',
            '孤辰': 'GuChen',
            '寡宿': 'GuaSu',
            '三台': 'SanTai',
            '八座': 'BaZuo',
            '龍池': 'LongChi',
            '鳳閣': 'FengGe',
            '天才': 'TianCai',
            '天壽': 'TianShou',
            '恩光': 'EnGuang',
            '天貴': 'TianGui',
            '天刑': 'TianXing',
            '天姚': 'TianYao',
            '解神': 'JieShen',
            '天巫': 'TianWu',
            '天月': 'TianYue_Misc',
            '陰煞': 'YinSha',
            '蜚廉': 'FeiLian',
            '破碎': 'PoSui',
            '截空': 'JieKong',
            '旬空': 'XunKong',
            '天空': 'TianKong',
            '天傷': 'TianShang',
            '天使': 'TianShi',
            '唐符': 'TangFu',
            '天德': 'TianDe',
            '月馬': 'YueMa',
            '國印': 'GuoYin',
            '月德': 'YueDe'
        };

        this.GOD_MAP = {
            '長生': 'ChangSheng',
            '沐浴': 'MuYu',
            '冠帶': 'GuanDai',
            '臨官': 'LinGuan',
            '帝旺': 'DiWang',
            '衰': 'Shuai',
            '病': 'Bing',
            '死': 'Si',
            '墓': 'Mu',
            '絕': 'Jue',
            '胎': 'Tai',
            '養': 'Yang'
        };
    }

    public analyze(): AnalysisResult {
        const palacesAnalysis: PalaceAnalysis[] = [];

        // Analyze all 12 palaces
        // Palaces are usually sorted by branchIndex or just in the list. 
        // We want them effectively in a specific order? 
        // Usually the user wants to see Life, Siblings, Spouse... in standard ZWDS sequence.
        // The chart.palaces array *should* contain 12 palaces.
        // Let's sort them by the standard sequence relative to Life Palace?
        // Or just map them as they are found?
        // Let's find each by name to ensure order: Life, Siblings, Spouse, Children, Wealth, Health, Travel, Friends, Career, Property, Karma, Parents.

        // Use PALACE_MAP keys or chart palaces directly, but we want specific sequence.
        // We know the standard ZWDS sequence.
        const standardSequenceMap: Record<string, number> = {
            'Life': 0, 'Siblings': 1, 'Spouse': 2, 'Children': 3, 'Wealth': 4, 'Health': 5,
            'Travel': 6, 'Friends': 7, 'Career': 8, 'Property': 9, 'Karma': 10, 'Parents': 11
        };

        // Iterate over all actual palaces in the chart
        for (const p of this.chart.palaces) {
            palacesAnalysis.push(this.analyzePalace(p));
        }

        // Sort them by standard sequence for consistent output order (optional but good)
        palacesAnalysis.sort((a, b) => {
            // We need to resolve their English key to sort
            const keyA = this.PALACE_MAP[a.palaceName];
            const keyB = this.PALACE_MAP[b.palaceName];
            return (standardSequenceMap[keyA] || 99) - (standardSequenceMap[keyB] || 99);
        });

        const lifeAnalysis = palacesAnalysis.find(p => p.palaceName === '命宮');

        if (!lifeAnalysis) {
            throw new Error("Life Palace not found in chart");
        }

        const formationList = this.checkFormations();

        // Enhance summary with formations
        const finalSummary = [
            `命宮主星：${lifeAnalysis.majorStars.map(s => s.starName).join(', ') || '無'}`,
            lifeAnalysis.overallComment
        ];

        if (formationList.length > 0) {
            finalSummary.push("【特殊格局】: " + formationList.map(f => f.name).join(', '));
            finalSummary.push(...formationList.map(f => f.description));
        }

        return {
            lifePalace: lifeAnalysis,
            allPalaces: palacesAnalysis,
            summary: finalSummary
        };
    }

    private analyzePalace(palace: any): PalaceAnalysis {
        const majorAnalysis: StarAnalysis[] = [];
        const minorAnalysis: StarAnalysis[] = [];
        const siHuaAnalysis: StarAnalysis[] = [];
        const godsAnalysis: StarAnalysis[] = [];
        let commentParts: string[] = [];

        // 1. Analyze Major Stars (Including Borrowed Stars)
        let starsToAnalyze = palace.majorStars;

        // isBorrowed variable tracking for suffix logic
        let isBorrowed = false;

        if (palace.majorStars.length === 0) {
            const oppositeIndex = (palace.branchIndex + 6) % 12;
            const oppositePalace = this.chart.palaces.find(p => p.branchIndex === oppositeIndex);
            if (oppositePalace && oppositePalace.majorStars.length > 0) {
                starsToAnalyze = oppositePalace.majorStars;
                isBorrowed = true;
            }
        }

        for (const star of starsToAnalyze) {
            const starKey = this.STAR_MAP[star.name];
            const palaceKey = this.PALACE_MAP[palace.palaceName];

            let desc = "星性特質...";

            if (starKey && palaceKey) {
                // If borrowed, we interpret the star as if it were in THIS palace, or the original?
                // Standard ZWDS: View star as if it is in the current palace (Empty Palace), but weaker.
                // OR View star in its original palace but applied here?
                // "借星安宮": Use the opposite stars as if they are here.
                // So we use `palaceKey` (current empty palace) for lookup?
                // Or `oppositePalaceKey`?
                // Usually "Borrow Star to Sit Here". So we scan `starKey` + `palaceKey` (Current).
                // BUT, the database might only have entries for VALID placements.
                // Does `Interpreter` DB have entries for every star in every palace? Yes.

                const lookupKey = `${starKey}_${palaceKey}`;
                const rule = majorStars[lookupKey];
                if (rule) {
                    desc = rule.content.description;
                }
            }

            if (isBorrowed) {
                desc = `【借星】${desc}`;
            }

            majorAnalysis.push({
                starName: star.name + (isBorrowed ? ' (借)' : ''),
                brightness: star.brightness, // Borrowed brightness usually drops? For now keep original or hide.
                description: desc,
                keywords: []
            });

            // 1b. Check Major Star Si Hua
            if (star.mutagen) {
                const mutagenType = star.mutagen; // 'Lu', 'Quan', 'Ke', 'Ji'
                if (starKey && palaceKey) {
                    // Try specific palace rule first: Star_Mutagen_Palace
                    let siHuaKey = `${starKey}_${mutagenType}_${palaceKey}`;
                    let rule = siHuaRules[siHuaKey];

                    // Fallback to generic: Star_Mutagen
                    if (!rule) {
                        siHuaKey = `${starKey}_${mutagenType}`;
                        rule = siHuaRules[siHuaKey];
                    }

                    if (rule) {
                        const mutagenLabel = this.getMutagenLabel(mutagenType);
                        const label = `【${star.name}化${mutagenLabel}】：`;

                        siHuaAnalysis.push({
                            starName: `${star.name}化${mutagenLabel}`,
                            brightness: star.brightness || '',
                            description: label + rule.content.description,
                            keywords: rule.content.keywords
                        });
                        commentParts.push(`【${star.name}化${mutagenLabel}】${rule.content.summary}`);
                    }
                }
            }
        }

        // 2. Check for Dual Stars (if 2+ major stars)
        if (palace.majorStars.length >= 2) {
            const starNames = palace.majorStars.map((s: any) => s.name);
            // Check combinations
            for (let i = 0; i < starNames.length; i++) {
                for (let j = i + 1; j < starNames.length; j++) {
                    const k1 = this.STAR_MAP[starNames[i]];
                    const k2 = this.STAR_MAP[starNames[j]];
                    if (k1 && k2) {
                        // Ensure alphabetical or predefined order for key
                        const key = [k1, k2].sort().join('_');
                        const rule = dualStars[key];
                        if (rule) {
                            commentParts.push(`【雙星同宮】${rule.content.summary}: ${rule.content.description}`);
                        }
                    }
                }
            }
        }

        // 3. Analyze Minor Stars (and Misc Stars if mixed in palace.minorStars)
        for (const star of palace.minorStars) {
            const starKey = this.STAR_MAP[star.name];
            const palaceKey = this.PALACE_MAP[palace.palaceName];

            if (starKey && palaceKey) {
                // Try Minor Star DB first
                let lookupKey = `${starKey}_${palaceKey}`;
                let rule = minorStars[lookupKey];

                // If not found, try Misc Star DB
                if (!rule) {
                    rule = miscStars[lookupKey];
                }

                if (rule) {
                    minorAnalysis.push({
                        starName: star.name,
                        brightness: star.brightness,
                        description: rule.content.description,
                        keywords: rule.content.keywords
                    });
                }
            }

            // 3b. Check Minor Star Si Hua (Wen Chang / Wen Qu only usually)
            if (star.mutagen) {
                const mutagenType = star.mutagen;
                if (starKey && palaceKey) {
                    let siHuaKey = `${starKey}_${mutagenType}_${palaceKey}`;
                    let rule = siHuaRules[siHuaKey];
                    if (!rule) {
                        siHuaKey = `${starKey}_${mutagenType}`;
                        rule = siHuaRules[siHuaKey];
                    }
                    if (rule) {
                        siHuaAnalysis.push({
                            starName: `${star.name}化${this.getMutagenLabel(mutagenType)}`,
                            brightness: star.brightness || '',
                            description: rule.content.description,
                            keywords: rule.content.keywords
                        });
                        commentParts.push(`【${star.name}化${this.getMutagenLabel(mutagenType)}】${rule.content.summary}`);
                    }
                }
            }
        }

        // 4. Analyze Gods (Chang Sheng 12 only for now)
        if (palace.gods) {
            // Check Chang Sheng
            const csName = palace.gods.changSheng;
            if (csName) {
                const godKey = this.GOD_MAP[csName];
                const palaceKey = this.PALACE_MAP[palace.palaceName];
                if (godKey && palaceKey) {
                    const lookupKey = `${godKey}_${palaceKey}`;
                    const rule = gods[lookupKey];
                    if (rule) {
                        godsAnalysis.push({
                            starName: csName,
                            brightness: '',
                            description: rule.content.description,
                            keywords: rule.content.keywords
                        });
                    }
                }
            }
        }

        // Construct Overall Comment
        // Default to first major star description if single, or Dual Star description if dual
        if (commentParts.length > 0) {
            // Already has content
        } else if (majorAnalysis.length > 0) {
            commentParts.push(majorAnalysis[0].description);
        } else {
            commentParts.push("命無正曜，借對宮星曜論斷。");
        }

        return {
            palaceName: palace.palaceName,
            majorStars: majorAnalysis,
            minorStars: minorAnalysis,
            siHua: siHuaAnalysis,
            gods: godsAnalysis,
            overallComment: commentParts.join("\n")
        };
    }

    /**
     * Get the "Three Parties and Four Squares" (San Fang Si Zheng) for a given palace.
     * Returns a set of unique star names found in the Palace itself + Its Triad (Wealth/Career positions relative to it) + Its Opposite (Travel position).
     */
    private getSanFangSiZheng(palace: any): Set<string> {
        const branchIdx = palace.branchIndex;
        // Triad: +4, +8 (or -4, -8). 12 branches total.
        // Opposite: +6.

        // Calculate abstract indices
        const wealthBranch = (branchIdx + 4) % 12;
        const careerBranch = (branchIdx + 8) % 12;
        const migrationBranch = (branchIdx + 6) % 12;

        const indices = [branchIdx, wealthBranch, careerBranch, migrationBranch];

        const stars = new Set<string>();

        for (const idx of indices) {
            const p = this.chart.palaces.find(cp => cp.branchIndex === idx);
            if (p) {
                p.majorStars.forEach(s => stars.add(s.name));
                p.minorStars.forEach(s => stars.add(s.name));
            }
        }
        return stars;
    }

    private checkFormations(): { name: string, description: string }[] {
        const results: { name: string, description: string }[] = [];
        const lifePalace = this.chart.palaces.find(p => p.palaceName === '命宮');
        if (!lifePalace) return results;

        const majorNames = lifePalace.majorStars.map((s: any) => s.name);
        const minorNames = lifePalace.minorStars.map((s: any) => s.name);

        // Use generalized SanFangSiZheng logic
        const triadStars = this.getSanFangSiZheng(lifePalace);

        // 1. Ming Zhu Chu Hai (明珠出海)
        // Life at Wei (7) [Empty]. 
        // Wealth (Mao - 3) has TaiYang. 
        // Career (Hai - 11) has TaiYin.
        if (lifePalace.branchIndex === 7 && majorNames.length === 0) {
            const wealth = this.chart.palaces.find(p => p.palaceName === '財帛宮');
            const career = this.chart.palaces.find(p => p.palaceName === '官祿宮');

            if (wealth?.branchIndex === 3 && wealth.majorStars.some(s => s.name === '太陽') &&
                career?.branchIndex === 11 && career.majorStars.some(s => s.name === '太陰')) {
                this.addFormation(results, 'MingZhuChuHai');
            }
        }

        // 2. Ri Zhao Lei Men (日照雷門)
        // Life at Mao (3). Includes TaiYang (and TianLiang typically).
        if (lifePalace.branchIndex === 3 && majorNames.includes('太陽') && majorNames.includes('天梁')) {
            this.addFormation(results, 'RiZhaoLeiMen');
        }

        // 3. Ri Yue Tong Gong (日月同宮)
        // Life at Chou (1) or Wei (7). Includes TaiYang + TaiYin.
        if ((lifePalace.branchIndex === 1 || lifePalace.branchIndex === 7) && majorNames.includes('太陽') && majorNames.includes('太陰')) {
            this.addFormation(results, 'RiYueTongGong');
        }

        // 4. Zi Fu Tong Gong (紫府同宮) - Life@Yin(2)/Shen(8), ZiWei+TianFu
        if ((lifePalace.branchIndex === 2 || lifePalace.branchIndex === 8) && majorNames.includes('紫微') && majorNames.includes('天府')) {
            this.addFormation(results, 'ZiFuTongGong');
        }

        // 4b. Zi Fu Chao Yuan (紫府朝垣)
        // ZiWei and TianFu in Triad (SanFang) but NOT in Life (which would be Tong Gong).
        // Usually implies Life is likely empty or has other stars, checking Triad.
        if (!majorNames.includes('紫微') && !majorNames.includes('天府')) {
            if (triadStars.has('紫微') && triadStars.has('天府')) {
                this.addFormation(results, 'ZiFuChaoYuan');
            }
        }

        // 4c. Jun Chen Qing Hui (君臣慶會)
        // Life has ZiWei. SanFangSiZheng has many helpers: ZuoFu/YouBi, WenChang/WenQu, TianKui/TianYue.
        if (majorNames.includes('紫微')) {
            const helpers = ['左輔', '右弼', '文昌', '文曲', '天魁', '天鉞'];
            const count = helpers.filter(h => triadStars.has(h) || minorNames.includes(h)).length;
            if (count >= 3) { // Threshold for "Qing Hui" (Meeting)
                this.addFormation(results, 'JunChenQingHui');
            }
        }

        // 5. Ji Yue Tong Liang (機月同梁) - Triad has Ji, Yue, Tong, Liang
        if (triadStars.has('天機') && triadStars.has('太陰') && triadStars.has('天同') && triadStars.has('天梁')) {
            this.addFormation(results, 'JiYueTongLiang');
        }

        // 6. Yang Liang Chang Lu (陽梁昌祿) - Triad has Sun, Liang, Chang, LuCun
        if (triadStars.has('太陽') && triadStars.has('天梁') && triadStars.has('文昌') && triadStars.has('祿存')) {
            this.addFormation(results, 'YangLiangChangLu');
        }

        // 7. Jin Can Guang Hui (金燦光輝) - Life@Wu(6), Sun
        if (lifePalace.branchIndex === 6 && majorNames.includes('太陽')) {
            this.addFormation(results, 'JinCanGuangHui');
        }

        // 8. Ri Yue Bing Ming (日月並明) - Sun@Si(5) + Moon@You(9)
        const sunPalace = this.chart.palaces.find(p => p.majorStars.some(s => s.name === '太陽'));
        const moonPalace = this.chart.palaces.find(p => p.majorStars.some(s => s.name === '太陰'));
        if (sunPalace?.branchIndex === 5 && moonPalace?.branchIndex === 9) {
            this.addFormation(results, 'RiYueBingMing');
        }

        // 8b. Ri Yue Fan Bei (日月反背)
        // Sun in [Xu, Hai, Zi] (10, 11, 0) AND Moon in [Mao, Chen, Si] (3, 4, 5).
        // And Life contains one of them or is involved? Usually affects the person if they have these stars.
        // We trigger if Life has Sun or Moon in these positions, OR if the pattern simply exists and Life is related?
        // Sticking to "Life has Sun or Moon" or "Life is Empty opposite them".
        // Simplest strong check: Sun is trapped AND Moon is trapped.
        // Refinement: Check if Life has Sun (Trap) or Moon (Trap).
        const sunBranch = sunPalace?.branchIndex;
        const moonBranch = moonPalace?.branchIndex;
        const isSunTrap = sunBranch !== undefined && [10, 11, 0].includes(sunBranch);
        const isMoonTrap = moonBranch !== undefined && [3, 4, 5].includes(moonBranch);

        if (isSunTrap && isMoonTrap) {
            // Check if Life is affected (Has Sun or Moon)
            // Or broadly applicable. Let's apply if Life has Sun or Moon.
            if (majorNames.includes('太陽') || majorNames.includes('太陰')) {
                this.addFormation(results, 'RiYueFanBei');
            }
        }

        // 9. Yue Sheng Cang Hai (月生滄海) - Life@Zi(0), Moon+Tong
        if (lifePalace.branchIndex === 0 && majorNames.includes('天同') && majorNames.includes('太陰')) {
            this.addFormation(results, 'YueShengCangHai');
        }

        // 10. Shou Xing Ru Miao (壽星入廟) - Life@Wu(6), TianLiang
        if (lifePalace.branchIndex === 6 && majorNames.includes('天梁')) {
            this.addFormation(results, 'ShouXingRuMiao');
        }

        // 11. Ying Xing Ru Miao (英星入廟) - Life@Zi(0)/Wu(6), PoJun
        if ((lifePalace.branchIndex === 0 || lifePalace.branchIndex === 6) && majorNames.includes('破軍')) {
            this.addFormation(results, 'YingXingRuMiao');
        }

        // 12. Shi Zhong Yin Yu (石中隱玉) - Life@Zi(0)/Wu(6), JuMen
        if ((lifePalace.branchIndex === 0 || lifePalace.branchIndex === 6) && majorNames.includes('巨門')) {
            this.addFormation(results, 'ShiZhongYinYu');
        }

        // 13. Qi Sha Chao Dou (七殺朝斗) - Life@Yin(2)/Shen(8)/Zi(0)/Wu(6), QiSha
        if ([0, 2, 6, 8].includes(lifePalace.branchIndex) && majorNames.includes('七殺')) {
            this.addFormation(results, 'QiShaChaoDou');
        }

        // 14. Ma Tou Dai Jian (馬頭帶劍) - Life@Wu(6), QingYang
        if (lifePalace.branchIndex === 6 && minorNames.includes('擎羊')) {
            this.addFormation(results, 'MaTouDaiJian');
        }

        // B. Inauspicious / Specific Formations

        // 15. Ji Ju Mao You (極居卯酉) - Life@Mao(3)/You(9), ZiWei+TanLang
        if ((lifePalace.branchIndex === 3 || lifePalace.branchIndex === 9) && majorNames.includes('紫微') && majorNames.includes('貪狼')) {
            this.addFormation(results, 'JiJuMaoYou');
        }

        // 16. Sha Gong Lian Zhen (殺拱廉貞) - LianZhen in Life, QiSha meeting
        if (majorNames.includes('廉貞') && (majorNames.includes('七殺') || triadStars.has('七殺'))) {
            this.addFormation(results, 'ShaGongLianZhen');
        }

        // 16b. Xing Qiu Jia Yin (刑囚夾印)
        // Tian Xiang (Yin) in Life.
        // Neighbors (Jia) have Lian Zhen (Qiu) and Qing Yang (Xing).
        // OR Lian Zhen + Tian Xiang in same palace (Tong Gong) with Qing Yang.
        // Given star layout, Lian Zhen and Tian Xiang are often together in Zi/Wu.
        // If they are together, checking Tong Gong is safer.
        if (majorNames.includes('天相') && majorNames.includes('廉貞') &&
            (minorNames.includes('擎羊') || triadStars.has('擎羊'))) { // Allow Triad for QingYang to be "meeting"
            this.addFormation(results, 'XingQiuJiaYin');
        }

        // 17. Ju Feng Si Sha (巨逢四煞) - JuMen in Life + Any of (Yang, Tuo, Huo, Ling)
        if (majorNames.includes('巨門')) {
            const fourKillers = ['擎羊', '陀羅', '火星', '鈴星'];
            if (fourKillers.some(k => minorNames.includes(k) || triadStars.has(k))) {
                this.addFormation(results, 'JuFengSiSha');
            }
        }

        // 18. Ming Li Feng Kong (命裏逢空) - DiKong or DiJie in Life
        if (minorNames.includes('地空') || minorNames.includes('地劫') || minorNames.includes('天空')) {
            this.addFormation(results, 'MingLiFengKong');
        }

        // 18b. Kong Jie Jia Ming (空劫夾命)
        // Life is flanked by Di Kong and Di Jie.
        const prevPalace = this.chart.palaces.find(p => p.branchIndex === (lifePalace.branchIndex + 11) % 12);
        const nextPalace = this.chart.palaces.find(p => p.branchIndex === (lifePalace.branchIndex + 1) % 12);
        const prevMinors = prevPalace?.minorStars.map(s => s.name) || [];
        const nextMinors = nextPalace?.minorStars.map(s => s.name) || [];

        if ((prevMinors.includes('地空') && nextMinors.includes('地劫')) ||
            (prevMinors.includes('地劫') && nextMinors.includes('地空'))) {
            this.addFormation(results, 'KongJieJiaMing');
        }

        // 19. Tian Liang Gong Yue (天梁拱月) - Liang + Moon in Si(5)/Hai(11)/Shen(8)
        if ([5, 8, 11].includes(lifePalace.branchIndex)) {
            if ((majorNames.includes('天梁') && majorNames.includes('太陰')) ||
                (majorNames.includes('天梁') && triadStars.has('太陰'))) {
                this.addFormation(results, 'TianLiangGongYue');
            }
        }

        // 20. Wen Xing Yu Jia (文星遇夾)
        // Wen Chang or Wen Qu in Life. Flanked by Di Kong / Di Jie? 
        // Or "Yu Jia" means "Encounters Flanking".
        // Formation def says: "Wen Chang/Qu in Life, flanked by Di Kong/Di Jie".
        if (minorNames.includes('文昌') || minorNames.includes('文曲')) {
            if ((prevMinors.includes('地空') && nextMinors.includes('地劫')) ||
                (prevMinors.includes('地劫') && nextMinors.includes('地空'))) {
                this.addFormation(results, 'WenXingYuJia');
            }
        }

        // 21. Tian Fu Chao Yuan (天府朝垣) - TianFu in Life, No ZiWei
        // Refined: Life has Tian Fu, but NOT Zi Wei, Wu Qu, Lian Zhen. (Alone)
        // Or broad: Just Tian Fu in Life and "Miao".
        // Let's stick to original broad check but exclude ZiWei (Tong Gong).
        if (majorNames.includes('天府') && !majorNames.includes('紫微')) {
            this.addFormation(results, 'TianFuChaoYuan');
        }

        // 22. Fu Xiang Chao Yuan (府相朝垣) - Fu/Xiang in Triad (meeting Life)
        if (triadStars.has('天府') && triadStars.has('天相')) {
            if (!this.hasFormation(results, 'ZiFuTongGong')) {
                this.addFormation(results, 'FuXiangChaoYuan');
            }
        }

        // 23. Ji Liang Jia Hui (機梁加會) - Ji + Liang in Chen(4) or Xu(10)
        if ((lifePalace.branchIndex === 4 || lifePalace.branchIndex === 10) && majorNames.includes('天機') && majorNames.includes('天梁')) {
            this.addFormation(results, 'JiLiangJiaHui');
        }

        // 24. Wen Liang Zhen Ji (文梁振紀) - Liang in Wu(6) + Chang/Qu
        if (lifePalace.branchIndex === 6 && majorNames.includes('天梁') && (minorNames.includes('文昌') || minorNames.includes('文曲'))) {
            this.addFormation(results, 'WenLiangZhenJi');
        }

        // 25. Ju Ri Tong Gong (巨日同宮) - Sun + JuMen in Yin(2)
        if (lifePalace.branchIndex === 2 && majorNames.includes('太陽') && majorNames.includes('巨門')) {
            this.addFormation(results, 'JuRiTongGong');
        }

        // 26. Wen Xing Shi Wei (文星失位) - Chang/Qu in Trap + Killer
        const hasChangQu = minorNames.includes('文昌') || minorNames.includes('文曲');
        const inTrap = [2, 6, 10].includes(lifePalace.branchIndex);
        const hasKiller = ['擎羊', '陀羅', '火星', '鈴星'].some(k => minorNames.includes(k));

        if (hasChangQu && inTrap && hasKiller) {
            this.addFormation(results, 'WenXingShiWei');
        }

        // --- Batch 1 Auspicious Expansions ---

        // 27. Ji Xiang Li Ming (極向離明) - Purple Star in Wu(6)
        if (lifePalace.branchIndex === 6 && majorNames.includes('紫微')) {
            this.addFormation(results, 'JiXiangLiMing');
        }

        // 28. Tan Wu Tong Xing (貪武同行) - Greedy+Military in Chou(1) or Wei(7)
        if ((lifePalace.branchIndex === 1 || lifePalace.branchIndex === 7) && majorNames.includes('貪狼') && majorNames.includes('武曲')) {
            this.addFormation(results, 'TanWuTongXing');
        }

        // 29. Huo Tan / Ling Tan (火貪/鈴貪)
        if (majorNames.includes('貪狼')) {
            if (minorNames.includes('火星') || triadStars.has('火星')) {
                this.addFormation(results, 'HuoTan');
            }
            if (minorNames.includes('鈴星') || triadStars.has('鈴星')) {
                this.addFormation(results, 'LingTan');
            }
        }

        // 30. Lu Ma Jiao Chi (祿馬交馳) - Lu Cun + Tian Ma
        // Check Life.
        if ((minorNames.includes('祿存') && minorNames.includes('天馬')) ||
            (triadStars.has('祿存') && triadStars.has('天馬'))) {
            this.addFormation(results, 'LuMaJiaoChi');
        }

        // 30b. Yang Tuo Jia Ming (羊陀夾命)
        // Lu Cun in Life implies Yang/Tuo flank it.
        if (minorNames.includes('祿存')) {
            this.addFormation(results, 'YangTuoJiaMing');
        }

        // 30c. Liang Chong Hua Gai (兩重華蓋)
        // Lu Cun AND Hua Lu (or both present). Meet Di Kong/Di Jie.
        // Simplified: Lu + (Kong OR Jie).
        const hasLu = minorNames.includes('祿存') || lifePalace.majorStars.some((s: any) => s.mutagen === 'Lu');
        if (hasLu && (minorNames.includes('地空') || minorNames.includes('地劫') || triadStars.has('地空') || triadStars.has('地劫'))) {
            this.addFormation(results, 'LiangChongHuaGai');
        }

        // 31. San Qi Jia Hui (三奇加會) - Hua Lu, Hua Quan, Hua Ke in Triad
        const triadSiHua = new Set<string>();
        [lifePalace,
            this.chart.palaces.find(p => p.branchIndex === (lifePalace.branchIndex + 4) % 12),
            this.chart.palaces.find(p => p.branchIndex === (lifePalace.branchIndex + 8) % 12),
            this.chart.palaces.find(p => p.branchIndex === (lifePalace.branchIndex + 6) % 12)
        ].forEach(p => {
            if (p) {
                p.majorStars.forEach(s => { if (s.mutagen) triadSiHua.add(s.mutagen); });
                p.minorStars.forEach(s => { if (s.mutagen) triadSiHua.add(s.mutagen); });
            }
        });

        if (triadSiHua.has('Lu') && triadSiHua.has('Quan') && triadSiHua.has('Ke')) {
            this.addFormation(results, 'SanQiJiaHui');
        }

        // 32. Quan Lu Xun Feng (權祿巡逢) - Hua Lu + Hua Quan in Triad
        if (triadSiHua.has('Lu') && triadSiHua.has('Quan') && !triadSiHua.has('Ke')) {
            this.addFormation(results, 'QuanLuXunFeng');
        }

        // 33. Ju Ji Tong Gong (巨機同宮) - Giant + Motor in Mao(3)/You(9)
        if ((lifePalace.branchIndex === 3 || lifePalace.branchIndex === 9) && majorNames.includes('巨門') && majorNames.includes('天機')) {
            this.addFormation(results, 'JuJiTongGong');
        }

        // 34. Tian Fu Lin Xu (天府臨戌) - Tian Fu in Xu(10)
        if (lifePalace.branchIndex === 10 && majorNames.includes('天府')) {
            this.addFormation(results, 'TianFuLinXu');
        }

        // 35. Fan Shui Tao Hua (泛水桃花)
        // Tan Lang in Zi (0). Or Lian Zhen + Tan Lang in Hai (11) - Wait, Lian Tan in Hai is "Fan Shui"?
        // Usually Tan Lang in Zi is the main one.
        if ((lifePalace.branchIndex === 0 && majorNames.includes('貪狼')) ||
            (lifePalace.branchIndex === 11 && majorNames.includes('廉貞') && majorNames.includes('貪狼'))) {
            this.addFormation(results, 'FanShuiTaoHua');
        }

        // 36. Ma Luo Kong Wang (馬落空亡)
        // Tian Ma + (DiKong, DiJie, TianKong, JieKong)
        // Tian Ma in Life.
        if (minorNames.includes('天馬')) {
            if (minorNames.includes('地空') || minorNames.includes('地劫') || minorNames.includes('天空') || minorNames.includes('截空')) {
                this.addFormation(results, 'MaLuoKongWang');
            }
        }

        return results;
    }

    private hasFormation(results: any[], key: string): boolean {
        const rule = formations[key];
        if (!rule) return false;
        return results.some(r => r.name === rule.content.summary);
    }

    private addFormation(results: any[], key: string) {
        const rule = formations[key];
        if (rule) {
            results.push({ name: rule.content.summary, description: rule.content.description });
        }
    }

    private getMutagenLabel(mutagen: string): string {
        switch (mutagen) {
            case 'Lu': return '祿';
            case 'Quan': return '權';
            case 'Ke': return '科';
            case 'Ji': return '忌';
            default: return '';
        }
    }
    public enrichChartWithDescriptions(): void {
        const analysis = this.analyze();

        // Map analysis back to chart data
        analysis.allPalaces.forEach(palaceAnalysis => {
            const chartPalace = this.chart.palaces.find(p => p.palaceName === palaceAnalysis.palaceName);
            if (!chartPalace) return;

            // Enrich Major Stars
            chartPalace.majorStars.forEach(star => {
                const analysisStar = palaceAnalysis.majorStars.find(s => s.starName === star.name);
                if (analysisStar) {
                    star.description = analysisStar.description;
                    // Also enable brightness text if missing (though usually calc'd in builder)
                }

                // Check mutation descriptions
                if (star.mutagen) {
                    const siHua = palaceAnalysis.siHua.find(s => s.starName.includes(star.name));
                    if (siHua) {
                        star.description = (star.description ? star.description + "\n\n" : "") +
                            `【四化解析】${siHua.description}`;
                    }
                }
            });

            // Enrich Minor Stars
            chartPalace.minorStars.forEach(star => {
                const analysisStar = palaceAnalysis.minorStars.find(s => s.starName === star.name);
                if (analysisStar) {
                    star.description = analysisStar.description;
                }
            });

            // Handle Borrowed Stars Injection
            // If the chart palace has no major stars, but the analysis found some (via borrowing),
            // we must inject these borrowed stars into the chart data so the UI can render them.
            if (chartPalace.majorStars.length === 0 && palaceAnalysis.majorStars.length > 0) {
                const oppositeIndex = (chartPalace.branchIndex + 6) % 12;
                const oppositePalace = this.chart.palaces.find(p => p.branchIndex === oppositeIndex);

                if (oppositePalace && oppositePalace.majorStars.length > 0) {
                    // Clone stars from opposite palace
                    chartPalace.majorStars = oppositePalace.majorStars.map(s => {
                        const clonedStar = { ...s };
                        // Find matching analysis (which likely has " (借)" suffix)
                        const borrowedName = s.name + ' (借)';
                        const analysisStar = palaceAnalysis.majorStars.find(as => as.starName === borrowedName || as.starName === s.name);

                        if (analysisStar) {
                            clonedStar.description = analysisStar.description;
                            clonedStar.name = borrowedName; // Update name to show borrowed status
                        }
                        return clonedStar;
                    });
                }
            }

            // We could also attach the "Overall Comment" to the PalaceData if we added a field for it
            // For now, modal mostly shows stars.
            // Let's verify if PalaceData has a 'comment' field? No.
            // The modal uses stars. 
        });
    }
}
