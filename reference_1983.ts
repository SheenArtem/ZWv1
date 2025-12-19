export const EXPECTED_1983 = {
    lunarYear: 1983,
    lunarMonth: 5,
    lunarDay: 28,
    lunarHour: 8, // Wei Hour (13:00-15:00)
    gender: 'Male',
    bureau: '水二局',
    mingPalace: '亥',
    shenPalace: '丑',
    mingZhu: '巨門',
    shenZhu: '天機',
    palaces: {
        '亥': { // Ming (命宮)
            name: '命宮',
            major: [{ name: '武曲', brightness: '平' }, { name: '破軍', brightness: '平', mutagen: 'Lu' }],
            minor: ['文曲', '陀羅', '鳳閣', '三台'],
            gods: { changSheng: '絕', boShi: '力士' },
            limits: '2 - 11',
            ages: [11, 23, 35, 47, 59, 71, 83]
        },
        '戌': { // Siblings (兄弟宮)
            name: '兄弟宮',
            major: [{ name: '天同', brightness: '平' }],
            minor: ['天喜', '寡宿', '天才'],
            gods: { changSheng: '胎', boShi: '青龍' },
            limits: '12 - 21',
            ages: [10, 22, 34, 46, 58, 70, 82]
        },
        '酉': { // Spouse (夫妻宮)
            name: '夫妻宮',
            major: [],
            minor: ['破碎', '封誥'],
            gods: { changSheng: '養', boShi: '小耗' },
            limits: '22 - 31',
            ages: [9, 21, 33, 45, 57, 69, 81]
        },
        '申': { // Children (子女宮)
            name: '子女宮',
            major: [],
            minor: ['左輔', '天馬'], // 月馬 = 天馬
            gods: { changSheng: '長生', boShi: '將軍' },
            limits: '32 - 41',
            ages: [8, 20, 32, 44, 56, 68, 80]
        },
        '未': { // Wealth (財帛宮)
            name: '財帛宮',
            major: [{ name: '廉貞', brightness: '利' }, { name: '七殺', brightness: '廟' }],
            minor: ['華蓋', '天哭', '天月'],
            gods: { changSheng: '沐浴', boShi: '奏書' },
            limits: '42 - 51',
            ages: [7, 19, 31, 43, 55, 67, 79]
        },
        '午': { // Health (疾厄宮)
            name: '疾厄宮',
            major: [{ name: '天梁', brightness: '廟' }],
            minor: ['右弼', '地劫', '天官', '陰煞', '天使'],
            gods: { changSheng: '冠帶', boShi: '飛廉' },
            limits: '52 - 61',
            ages: [6, 18, 30, 42, 54, 66, 78]
        },
        '巳': { // Migration (遷移宮)
            name: '遷移宮',
            major: [{ name: '天相', brightness: '地' }], // 用户说是"地"
            minor: ['鈴星', '天鉞', '天福', '天馬', '天虛', '天姚', '天巫', '恩光'],
            gods: { changSheng: '臨官', boShi: '喜神' },
            limits: '62 - 71',
            ages: [5, 17, 29, 41, 53, 65, 77]
        },
        '辰': { // Servants (交友宮/部屬宮)
            name: '交友宮',
            major: [{ name: '巨門', brightness: '陷', mutagen: 'Quan' }],
            minor: ['地空', '火星', '紅鸞', '天傷'], // 天傷 not 天殤
            gods: { changSheng: '帝旺', boShi: '病符' },
            limits: '72 - 81',
            ages: [4, 16, 28, 40, 52, 64, 76]
        },
        '卯': { // Career (事業宮)
            name: '事業宮',
            major: [{ name: '紫微', brightness: '旺' }, { name: '貪狼', brightness: '利', mutagen: 'Ji' }],
            minor: ['文昌', '天魁', '龍池', '八座'],
            gods: { changSheng: '衰', boShi: '大耗' },
            limits: '82 - 91',
            ages: [3, 15, 27, 39, 51, 63, 75]
        },
        '寅': { // Property (田宅宮)
            name: '田宅宮',
            major: [{ name: '天機', brightness: '地' }, { name: '太陰', brightness: '旺', mutagen: 'Ke' }],
            minor: ['孤辰'],
            gods: { changSheng: '病', boShi: '伏兵' },
            limits: '92 - 101',
            ages: [2, 14, 26, 38, 50, 62, 74]
        },
        '丑': { // Fude (福德宮/身宮)
            name: '福德宮',
            major: [{ name: '天府', brightness: '廟' }],
            minor: ['擎羊', '截空', '飛廉', '天刑', '台輔', '天貴', '旬空'], // 截空 not 截路
            gods: { changSheng: '死', boShi: '官府' },
            limits: '102 - 111',
            ages: [1, 13, 25, 37, 49, 61, 73]
        },
        '子': { // Parents (父母宮)
            name: '父母宮',
            major: [{ name: '太陽', brightness: '陷' }],
            minor: ['祿存', '天空', '空亡', '咸池', '天壽', '解神', '旬空'],
            gods: { changSheng: '墓', boShi: '博士' },
            limits: '112 - 121',
            ages: [12, 24, 36, 48, 60, 72, 84]
        }
    }
};
