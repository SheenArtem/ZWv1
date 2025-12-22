import { StarRuleMap } from '../models';

export const formations: StarRuleMap = {
    "MingZhuChuHai": {
        key: "MingZhuChuHai",
        conditions: {
            palace: "命宮",
            withStars: []
        },
        content: {
            summary: "明珠出海格",
            description: "命宮在未（空宮），對宮天同巨門。財帛太陽在卯（日照雷門），官祿太陰在亥（月朗天門）。主才華卓越，名利雙收，大貴之格。",
            keywords: ["才華", "大貴"]
        }
    },
    "ZiFuTongGong": {
        key: "ZiFuTongGong",
        conditions: { withStars: ["紫微", "天府"] },
        content: {
            summary: "紫府同宮格",
            description: "紫微天府在寅申同宮坐命。主福祿雙全，貴氣逼人，有相當的社會地位。",
            keywords: ["福祿", "地位"]
        }
    },
    "ZiFuChaoYuan": {
        key: "ZiFuChaoYuan",
        conditions: { withStars: ["紫微", "天府"] },
        content: {
            summary: "紫府朝垣格",
            description: "紫微、天府在三方四正拱照命宮。主食祿無缺，或是公職顯要。",
            keywords: ["食祿", "公職"]
        }
    },
    "JunChenQingHui": {
        key: "JunChenQingHui",
        conditions: { withStars: ["紫微"] },
        content: {
            summary: "君臣慶會格",
            description: "紫微坐命，且有左輔右弼、文昌文曲、天魁天鉞等吉星拱照。主文武雙全，領導力強，大富大貴。",
            keywords: ["領導", "大富"]
        }
    },
    "JiYueTongLiang": {
        key: "JiYueTongLiang",
        conditions: { withStars: ["天機", "太陰", "天同", "天梁"] },
        content: {
            summary: "機月同梁格",
            description: "三方四正會齊天機、太陰、天同、天梁。主心思縝密，適合公職、企劃、行政或教育工作。",
            keywords: ["公職", "企劃"]
        }
    },
    "RiZhaoLeiMen": {
        key: "RiZhaoLeiMen",
        conditions: {
            palace: "命宮",
            withStars: ["太陽", "天梁"]
        },
        content: {
            summary: "日照雷門格",
            description: "太陽天梁在卯宮坐命。卯為雷門，太陽初升，光芒萬丈。主為人光明磊落，心地慈善，早年即顯貴。",
            keywords: ["光明", "顯貴"]
        }
    },
    "YangLiangChangLu": {
        key: "YangLiangChangLu",
        conditions: { withStars: ["太陽", "天梁", "文昌", "祿存"] },
        content: {
            summary: "陽梁昌祿格",
            description: "太陽天梁會見文昌、祿存。主學業超群，考運極佳，利於公職或學術發展。",
            keywords: ["考運", "學術"]
        }
    },
    "JinCanGuangHui": {
        key: "JinCanGuangHui",
        conditions: { withStars: ["太陽"] },
        content: {
            summary: "金燦光輝格",
            description: "太陽在午宮坐命。氣勢最旺，主權威顯赫，富貴雙全。",
            keywords: ["權威", "富貴"]
        }
    },
    "RiYueBingMing": {
        key: "RiYueBingMing",
        conditions: { withStars: ["太陽", "太陰"] },
        content: {
            summary: "日月並明格",
            description: "太陽在巳，太陰在酉；或太陽在辰，太陰在戌。主早年得志，一生順遂。",
            keywords: ["早年得志", "順遂"]
        }
    },
    "YueShengCangHai": {
        key: "YueShengCangHai",
        conditions: { withStars: ["天同", "太陰"] },
        content: {
            summary: "月生滄海格",
            description: "天同太陰在子宮坐命。主清貴，富藝術感，異性緣佳，名利雙收。",
            keywords: ["清貴", "藝術"]
        }
    },
    "ShouXingRuMiao": {
        key: "ShouXingRuMiao",
        conditions: { withStars: ["天梁"] },
        content: {
            summary: "壽星入廟格",
            description: "天梁在午宮坐命。主高壽，清高有威望，受人敬重。",
            keywords: ["高壽", "威望"]
        }
    },
    "YingXingRuMiao": {
        key: "YingXingRuMiao",
        conditions: { withStars: ["破軍"] },
        content: {
            summary: "英星入廟格",
            description: "破軍在子或午宮坐命。主魄力十足，開創性強，可成大業。",
            keywords: ["魄力", "開創"]
        }
    },
    "ShiZhongYinYu": {
        key: "ShiZhongYinYu",
        conditions: { withStars: ["巨門"] },
        content: {
            summary: "石中隱玉格",
            description: "巨門在子或午宮坐命。主才華內斂，早年辛苦，晚年發達。",
            keywords: ["內斂", "晚發"]
        }
    },
    "QiShaChaoDou": {
        key: "QiShaChaoDou",
        conditions: { withStars: ["七殺"] },
        content: {
            summary: "七殺朝斗格",
            description: "七殺在寅、申、子、午坐命。主威權顯赫，領導力強，多為大將之才。",
            keywords: ["威權", "大將"]
        }
    },
    "MaTouDaiJian": {
        key: "MaTouDaiJian",
        conditions: { withStars: ["擎羊"] },
        content: {
            summary: "馬頭帶劍格",
            description: "擎羊在午宮坐命。主威鎮邊疆，適合軍警職位。雖富貴但多驚險。",
            keywords: ["威鎮", "驚險"]
        }
    },
    "RiYueTongGong": {
        key: "RiYueTongGong",
        conditions: {
            withStars: ["太陽", "太陰"]
        },
        content: {
            summary: "日月同宮格",
            description: "太陽太陰同宮（丑未）。主性格雙重，剛柔並濟。早年離鄉背景，先勤後惰，或先苦後甘。",
            keywords: ["雙重", "剛柔"]
        }
    },
    "JiJuMaoYou": {
        key: "JiJuMaoYou",
        conditions: { withStars: ["紫微", "貪狼"] },
        content: {
            summary: "極居卯酉格",
            description: "紫微貪狼在卯酉同宮。主精神空虛，易有宗教緣分，或感情生活複雜。",
            keywords: ["空虛", "桃花"]
        }
    },
    "ShaGongLianZhen": {
        key: "ShaGongLianZhen",
        conditions: { withStars: ["廉貞", "七殺"] },
        content: {
            summary: "殺拱廉貞格",
            description: "廉貞坐命，七殺拱照（或同宮）。主人生動盪，易有意外或官非。",
            keywords: ["動盪", "官非"]
        }
    },
    "JuFengSiSha": {
        key: "JuFengSiSha",
        conditions: { withStars: ["巨門"] }, // Specific logic will check for Killers
        content: {
            summary: "巨逢四煞格",
            description: "巨門坐命，遇羊、陀、火、鈴四煞。主口舌是非不斷，易惹官司，人生多坎坷。",
            keywords: ["口舌", "坎坷"]
        }
    },
    "MingLiFengKong": {
        key: "MingLiFengKong",
        conditions: { withStars: [] }, // Checks for DiKong/DiJie logic
        content: {
            summary: "命裏逢空格",
            description: "地空或地劫坐入命宮。主財來財去，難以聚財，或思想獨特，不隨大流。",
            keywords: ["漏財", "獨特"]
        }
    },
    "TianLiangGongYue": {
        key: "TianLiangGongYue",
        conditions: { withStars: ["天梁", "太陰"] },
        content: {
            summary: "天梁拱月格",
            description: "天梁太陰在巳亥或申宮相會。主一生漂泊，易因酒色誤事。",
            keywords: ["漂泊", "酒色"]
        }
    },
    "WenXingYuJia": {
        key: "WenXingYuJia",
        conditions: { withStars: ["文昌", "文曲"] },
        content: {
            summary: "文星遇夾格",
            description: "文昌或文曲坐命，被地空地劫夾拱。主懷才不遇，考運受阻。",
            keywords: ["懷才不遇", "受阻"]
        }
    },
    // Missing Formations Added
    "TianFuChaoYuan": {
        key: "TianFuChaoYuan",
        conditions: { withStars: ["天府"] },
        content: {
            summary: "天府朝垣格",
            description: "天府星獨坐命宮（不與紫微同宮），且廟旺。主為人寬厚，食祿豐足，守成有無。",
            keywords: ["寬厚", "食祿"]
        }
    },
    "FuXiangChaoYuan": {
        key: "FuXiangChaoYuan",
        conditions: { withStars: ["天府", "天相"] }, // Special check in logic
        content: {
            summary: "府相朝垣格",
            description: "天府、天相在三方四正拱照命宮。主六親助力大，事業平穩，衣食無憂。",
            keywords: ["平穩", "助力"]
        }
    },
    "JiLiangJiaHui": {
        key: "JiLiangJiaHui",
        conditions: { withStars: ["天機", "天梁"] },
        content: {
            summary: "機梁加會格",
            description: "天機天梁在辰或戌宮守命。主足智多謀，有高超技藝或策劃能力，利於參謀。",
            keywords: ["多謀", "參謀"]
        }
    },
    "WenLiangZhenJi": {
        key: "WenLiangZhenJi",
        conditions: { withStars: ["天梁", "文昌", "文曲"] },
        content: {
            summary: "文梁振紀格",
            description: "天梁在午宮坐命，遇文昌或文曲。主為人剛正不阿，適合從事紀律、監察工作。",
            keywords: ["剛正", "監察"]
        }
    },
    "JuRiTongGong": {
        key: "JuRiTongGong",
        conditions: { withStars: ["巨門", "太陽"] },
        content: {
            summary: "巨日同宮格",
            description: "太陽巨門在寅宮同宮坐命。主胸懷大志，名揚四海，適合外交或傳播業。",
            keywords: ["名揚", "外交"]
        }
    },
    "WenXingShiWei": {
        key: "WenXingShiWei",
        conditions: { withStars: ["文昌", "文曲"] },
        content: {
            summary: "文星失位格",
            description: "文昌文曲落陷（如在戌、亥、子），又遇煞星。主才華難以施展，或流於偏門。",
            keywords: ["落陷", "難展"]
        }
    },
    // Batch 1: Advanced Auspicious
    "JiXiangLiMing": {
        key: "JiXiangLiMing",
        conditions: { withStars: ["紫微"] },
        content: {
            summary: "極向離明格",
            description: "紫微星獨坐午宮（離卦位），無煞湊。主富貴雙全，位高權重，得名君之相。",
            keywords: ["權重", "名君"]
        }
    },
    "TanWuTongXing": {
        key: "TanWuTongXing",
        conditions: { withStars: ["貪狼", "武曲"] },
        content: {
            summary: "貪武同行格",
            description: "貪狼武曲在丑或未宮同宮坐命。主大器晚成，先苦後甘，中年後發達。",
            keywords: ["晚成", "發達"]
        }
    },
    "HuoTan": {
        key: "HuoTan",
        conditions: { withStars: ["貪狼", "火星"] },
        content: {
            summary: "火貪格",
            description: "貪狼與火星同宮或三方會照。主爆發力強，易得橫財，或突發性成功。",
            keywords: ["橫財", "爆發"]
        }
    },
    "LingTan": {
        key: "LingTan",
        conditions: { withStars: ["貪狼", "鈴星"] },
        content: {
            summary: "鈴貪格",
            description: "貪狼與鈴星同宮或三方會照。主偏財運佳，常有意外之喜。",
            keywords: ["偏財", "意外"]
        }
    },
    "LuMaJiaoChi": {
        key: "LuMaJiaoChi",
        conditions: { withStars: ["祿存", "天馬"] },
        content: {
            summary: "祿馬交馳格",
            description: "祿存與天馬在命宮或三方交會。主奔波生財，愈動愈發，利於經商或遠方求財。",
            keywords: ["奔波", "經商"]
        }
    },
    "SanQiJiaHui": {
        key: "SanQiJiaHui",
        conditions: { withStars: [] }, // Logic checks logic transformations
        content: {
            summary: "三奇加會格",
            description: "化祿、化權、化科在命宮三方四正會齊。主名氣響亮，才華出眾，運勢極強。",
            keywords: ["名氣", "三奇"]
        }
    },
    "QuanLuXunFeng": {
        key: "QuanLuXunFeng",
        conditions: { withStars: [] }, // Logic needed
        content: {
            summary: "權祿巡逢格",
            description: "化祿與化權在三方四正會照。主既富且貴，財官雙美。",
            keywords: ["財官", "雙美"]
        }
    },
    "JuJiTongGong": {
        key: "JuJiTongGong",
        conditions: { withStars: ["巨門", "天機"] },
        content: {
            summary: "巨機同宮格",
            description: "巨門天機在卯或酉宮同宮坐命。主思慮周詳，口才極佳，利於策劃或專業技術。",
            keywords: ["思慮", "策劃"]
        }
    },
    "TianFuLinXu": {
        key: "TianFuLinXu",
        conditions: { withStars: ["天府"] },
        content: {
            summary: "天府臨戌格",
            description: "天府在戌宮坐命（廉貞必在辰）。主守成有餘，能掌財權，大企業高管之命。",
            keywords: ["守成", "財權"]
        }
    },
    // Batch 2: Advanced Inauspicious
    "XingQiuJiaYin": {
        key: "XingQiuJiaYin",
        conditions: { withStars: ["天相"] }, // Plus LianZhen/QingYang
        content: {
            summary: "刑囚夾印格",
            description: "天相受廉貞（囚）與擎羊（刑）夾持。主易有官非、刑傷，或事業多波折。",
            keywords: ["官非", "刑傷"]
        }
    },
    "RiYueFanBei": {
        key: "RiYueFanBei",
        conditions: { withStars: ["太陽", "太陰"] },
        content: {
            summary: "日月反背格",
            description: "太陽在戌亥子，太陰在卯辰巳（日月失輝）。主勞碌奔波，披星戴月，六親無靠。",
            keywords: ["勞碌", "失輝"]
        }
    },
    "YangTuoJiaMing": {
        key: "YangTuoJiaMing",
        conditions: { withStars: ["祿存"] },
        content: {
            summary: "羊陀夾命格",
            description: "祿存坐命，必為擎羊陀羅所夾。雖有財祿，但也易受人掣肘，或吉處藏凶。",
            keywords: ["受制", "藏凶"]
        }
    },
    "KongJieJiaMing": {
        key: "KongJieJiaMing",
        conditions: { withStars: [] },
        content: {
            summary: "空劫夾命格",
            description: "地空地劫夾命宮。主人生多起伏，聚財不易，或與親友緣薄。",
            keywords: ["起伏", "聚財"]
        }
    },
    "LiangChongHuaGai": {
        key: "LiangChongHuaGai",
        conditions: { withStars: ["祿存"] }, // Plus Void
        content: {
            summary: "兩重華蓋格",
            description: "祿存或化祿坐命，遇地空地劫。主雖有財卻難守，或轉向宗教、哲學發展。",
            keywords: ["難守", "宗教"]
        }
    },
    "FanShuiTaoHua": {
        key: "FanShuiTaoHua",
        conditions: { withStars: ["貪狼"] },
        content: {
            summary: "泛水桃花格",
            description: "貪狼在子宮坐命，或廉貪在亥。主感情生活複雜，易涉風波，需防色難。",
            keywords: ["感情", "風波"]
        }
    },
    "MaLuoKongWang": {
        key: "MaLuoKongWang",
        conditions: { withStars: ["天馬"] },
        content: {
            summary: "馬落空亡格",
            description: "天馬遇空亡（地空、地劫、天空、截空）。主奔波勞碌卻無成效，白忙一場。",
            keywords: ["白忙", "無成"]
        }
    }
};
