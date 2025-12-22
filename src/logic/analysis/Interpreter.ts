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
        this.PALACE_MAP = {
            '命宮': 'Life',
            '兄弟宮': 'Siblings',
            '夫妻宮': 'Spouse',
            '子女宮': 'Children',
            '財帛宮': 'Wealth',
            '疾厄宮': 'Health',
            '遷移宮': 'Travel',
            '交友宮': 'Friends',
            '官祿宮': 'Career',
            '田宅宮': 'Property',
            '福德宮': 'Karma',
            '父母宮': 'Parents'
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
            '天使': 'TianShi'
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
        const lifePalace = this.chart.palaces.find(p => p.palaceName === '命宮');

        if (!lifePalace) {
            throw new Error("Life Palace not found in chart");
        }

        const lifeAnalysis = this.analyzePalace(lifePalace);
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
            summary: finalSummary
        };
    }

    private analyzePalace(palace: any): PalaceAnalysis {
        const majorAnalysis: StarAnalysis[] = [];
        const minorAnalysis: StarAnalysis[] = [];
        const siHuaAnalysis: StarAnalysis[] = [];
        const godsAnalysis: StarAnalysis[] = [];
        let commentParts: string[] = [];

        // 1. Analyze Major Stars
        for (const star of palace.majorStars) {
            const starKey = this.STAR_MAP[star.name];
            const palaceKey = this.PALACE_MAP[palace.palaceName];

            let desc = "星性特質...";

            if (starKey && palaceKey) {
                const lookupKey = `${starKey}_${palaceKey}`;
                const rule = majorStars[lookupKey];
                if (rule) {
                    desc = rule.content.description;
                }
            }

            majorAnalysis.push({
                starName: star.name,
                brightness: star.brightness,
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

        // 5. Ji Yue Tong Liang (機月同梁) - Triad has Ji, Yue, Tong, Liang
        if (triadStars.has('天機') && triadStars.has('太陰') && triadStars.has('天同') && triadStars.has('天梁')) {
            // Usually requires specific positioning, but this is a broad check
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

        // 8. Ri Yue Bing Ming (日月並明) - Sun@Si(5) + Moon@You(9) (Life or Triad?)
        // Usually refers to specific positions. If Life is empty or weak, and these are in Triad.
        // Or simpler: Just checks if Sun is in Si and Moon is in You in the chart?
        // Let's stick to standard def: Life Palace isn't strictly defined, but usually involves these stars being bright.
        // Definition: Sun@Si, Moon@You.
        const sunPalace = this.chart.palaces.find(p => p.majorStars.some(s => s.name === '太陽'));
        const moonPalace = this.chart.palaces.find(p => p.majorStars.some(s => s.name === '太陰'));
        if (sunPalace?.branchIndex === 5 && moonPalace?.branchIndex === 9) {
            // Often usually implies Life is in Chou (1) or elsewhere interacting.
            // But the pattern itself is the key.
            this.addFormation(results, 'RiYueBingMing');
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

        // 14. Ma Tou Dai Jian (馬頭帶劍) - Life@Wu(6), QingYang (+ often Tong/Yin/Greedy, but QY is key)
        if (lifePalace.branchIndex === 6 && minorNames.includes('擎羊')) {
            this.addFormation(results, 'MaTouDaiJian');
        }

        // B. Inauspicious / Specific Formations

        // 15. Ji Ju Mao You (極居卯酉) - Life@Mao(3)/You(9), ZiWei+TanLang
        if ((lifePalace.branchIndex === 3 || lifePalace.branchIndex === 9) && majorNames.includes('紫微') && majorNames.includes('貪狼')) {
            this.addFormation(results, 'JiJuMaoYou');
        }

        // 16. Sha Gong Lian Zhen (殺拱廉貞) - LianZhen in Life, QiSha meeting (Triad or Opposing)
        if (majorNames.includes('廉貞') && (majorNames.includes('七殺') || triadStars.has('七殺'))) {
            this.addFormation(results, 'ShaGongLianZhen');
        }

        // 17. Ju Feng Si Sha (巨逢四煞) - JuMen in Life + Any of (Yang, Tuo, Huo, Ling)
        if (majorNames.includes('巨門')) {
            const fourKillers = ['擎羊', '陀羅', '火星', '鈴星'];
            // Strict: Killers in Life. Broad: Killers in SanFang.
            // Description says "遇" (meet), likely SanFang. But "坐命" (Sit in Life) usually implies direct influence.
            // Let's check SanFang for broad detection.
            if (fourKillers.some(k => minorNames.includes(k) || triadStars.has(k))) {
                this.addFormation(results, 'JuFengSiSha');
            }
        }

        // 18. Ming Li Feng Kong (命裏逢空) - DiKong or DiJie in Life
        // Note: Check if DiKong/DiJie are in minorNames. If not mapped, this won't trigger.
        // Assuming they are mapped if present in chart data.
        if (minorNames.includes('地空') || minorNames.includes('地劫') || minorNames.includes('天空')) {
            this.addFormation(results, 'MingLiFengKong');
        }

        // 19. Tian Liang Gong Yue (天梁拱月) - Liang + Moon in Si(5)/Hai(11)/Shen(8)
        if ([5, 8, 11].includes(lifePalace.branchIndex)) {
            if ((majorNames.includes('天梁') && majorNames.includes('太陰')) ||
                (majorNames.includes('天梁') && triadStars.has('太陰'))) {
                this.addFormation(results, 'TianLiangGongYue');
            }
        }

        // 20. Wen Xing Yu Jia (文星遇夾)
        // Simplified check: if Chang/Qu in Life and Kong/Jie in SanFang/Life is not "Jia".
        // Leave "Jia" (Flanking) as TODO or Simplified "Meet".
        // Description says "被地空地劫夾拱".
        // Let's implement simplified "Meet" for now to detect the *risk*, or skip flanking for accurate v1.
        // Skip flanking precise calculation for now.

        // 21. Tian Fu Chao Yuan (天府朝垣) - TianFu in Life, No ZiWei
        if (majorNames.includes('天府') && !majorNames.includes('紫微')) {
            this.addFormation(results, 'TianFuChaoYuan');
        }

        // 22. Fu Xiang Chao Yuan (府相朝垣) - Fu/Xiang in Triad (meeting Life)
        // Strictly: Life has one (e.g. TianFu), Triad has TianXiang. Or Life has neither but they are in Triad?
        // "Chao Yuan" usually means meeting from Triad.
        // Let's check if Triad has BOTH TianFu and TianXiang, OR (Life has one AND Triad has other).
        // Since Life is part of SanFangSiZheng set in my helper...
        // Wait, getSanFangSiZheng includes Life.
        // So checking if 'TianFu' and 'TianXiang' are in triadStars is sufficient to say they "assemble".
        // But we need to ensure they are not just "there" but forming the pattern (usually implies good position).
        // Let's stick to simple existence for v4.0 pattern match.
        if (triadStars.has('天府') && triadStars.has('天相')) {
            if (!this.hasFormation(results, 'ZiFuTongGong')) { // Avoid redundancy if covered by ZiFu
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
        // Trap for Chang/Qu: Yin(2), Wu(6), Xu(10).
        // Text says "Xu, Hai, Zi" was assumed, but standard is Yin/Wu/Xu.
        // Let's correct to [2, 6, 10].
        const hasChangQu = minorNames.includes('文昌') || minorNames.includes('文曲');
        const inTrap = [2, 6, 10].includes(lifePalace.branchIndex);
        const hasKiller = ['擎羊', '陀羅', '火星', '鈴星'].some(k => minorNames.includes(k));

        if (hasChangQu && inTrap && hasKiller) {
            this.addFormation(results, 'WenXingShiWei');
        }

        // --- Batch 1 Auspicious Expansions ---

        // 27. Ji Xiang Li Ming (極向離明) - Purple Star in Wu(6)
        if (lifePalace.branchIndex === 6 && majorNames.includes('紫微')) {
            // Should check for no killers, but standard check is position first
            this.addFormation(results, 'JiXiangLiMing');
        }

        // 28. Tan Wu Tong Xing (貪武同行) - Greedy+Military in Chou(1) or Wei(7)
        // Usually requires "Tong Gong" (Same palace)
        if ((lifePalace.branchIndex === 1 || lifePalace.branchIndex === 7) && majorNames.includes('貪狼') && majorNames.includes('武曲')) {
            this.addFormation(results, 'TanWuTongXing');
        }

        // 29. Huo Tan / Ling Tan (火貪/鈴貪)
        // Greedy in Life, Fire/Bell in Triad (or Life)
        if (majorNames.includes('貪狼')) {
            if (minorNames.includes('火星') || triadStars.has('火星')) {
                this.addFormation(results, 'HuoTan');
            }
            if (minorNames.includes('鈴星') || triadStars.has('鈴星')) {
                this.addFormation(results, 'LingTan');
            }
        }

        // 30. Lu Ma Jiao Chi (祿馬交馳) - Lu Cun + Tian Ma in Triad
        // Note: Tian Ma might be in minorStars or misc.
        // Assuming '天馬' and '祿存' are in minorStars map.
        if (triadStars.has('祿存') && triadStars.has('天馬')) {
            this.addFormation(results, 'LuMaJiaoChi');
        }

        // 31. San Qi Jia Hui (三奇加會) - Hua Lu, Hua Quan, Hua Ke in Triad
        // Need to check Si Hua. SiHua is stored in palace.siHua array.
        // Let's gather all Si Hua in Triad.
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
        if (triadSiHua.has('Lu') && triadSiHua.has('Quan') && !triadSiHua.has('Ke')) { // If Ke is there, it's San Qi
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
}
