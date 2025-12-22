import { StarRuleMap } from '../models';

export const gods: StarRuleMap = {
    "ChangSheng_Life": {
        key: "ChangSheng_Life",
        conditions: { withStars: ["長生"], palace: "命宮" },
        content: {
            summary: "生機勃勃，源遠流長。",
            description: "主生命力強，性格溫和，機緣佳。",
            keywords: ["生機","溫和"]
        }
    },
    "ChangSheng_Siblings": {
        key: "ChangSheng_Siblings",
        conditions: { withStars: ["長生"], palace: "兄弟宮" },
        content: {
            summary: "兄弟情長，互助有力。",
            description: "兄弟關係長久，助力大。",
            keywords: ["情長","助力"]
        }
    },
    "ChangSheng_Spouse": {
        key: "ChangSheng_Spouse",
        conditions: { withStars: ["長生"], palace: "夫妻宮" },
        content: {
            summary: "姻緣長久，白頭偕老。",
            description: "感情穩定，配偶健康。",
            keywords: ["長久","穩定"]
        }
    },
    "ChangSheng_Children": {
        key: "ChangSheng_Children",
        conditions: { withStars: ["長生"], palace: "子女宮" },
        content: {
            summary: "子女健康，成長順利。",
            description: "子女多且健康，親子緣深。",
            keywords: ["健康","順利"]
        }
    },
    "ChangSheng_Wealth": {
        key: "ChangSheng_Wealth",
        conditions: { withStars: ["長生"], palace: "財帛宮" },
        content: {
            summary: "財源不斷，積少成多。",
            description: "財運細水長流，適合長期投資。",
            keywords: ["不斷","長流"]
        }
    },
    "ChangSheng_Health": {
        key: "ChangSheng_Health",
        conditions: { withStars: ["長生"], palace: "疾厄宮" },
        content: {
            summary: "身體強健，復原力強。",
            description: "抵抗力好，病癒快。",
            keywords: ["強健","復原"]
        }
    },
    "ChangSheng_Travel": {
        key: "ChangSheng_Travel",
        conditions: { withStars: ["長生"], palace: "遷移宮" },
        content: {
            summary: "外地發展，機緣綿長。",
            description: "在外適應力強，發展空間大。",
            keywords: ["發展","適應"]
        }
    },
    "ChangSheng_Friends": {
        key: "ChangSheng_Friends",
        conditions: { withStars: ["長生"], palace: "交友宮" },
        content: {
            summary: "友誼長青，知己相伴。",
            description: "朋友交情深厚久遠。",
            keywords: ["長青","深厚"]
        }
    },
    "ChangSheng_Career": {
        key: "ChangSheng_Career",
        conditions: { withStars: ["長生"], palace: "官祿宮" },
        content: {
            summary: "事業穩健，步步高升。",
            description: "工作穩定，適合長期發展。",
            keywords: ["穩健","高升"]
        }
    },
    "ChangSheng_Property": {
        key: "ChangSheng_Property",
        conditions: { withStars: ["長生"], palace: "田宅宮" },
        content: {
            summary: "居家安穩，祖業綿延。",
            description: "住家環境好，可守祖業。",
            keywords: ["安穩","祖業"]
        }
    },
    "ChangSheng_Karma": {
        key: "ChangSheng_Karma",
        conditions: { withStars: ["長生"], palace: "福德宮" },
        content: {
            summary: "福壽綿長，精神愉快。",
            description: "心思平和，享受長壽。",
            keywords: ["綿長","平和"]
        }
    },
    "ChangSheng_Parents": {
        key: "ChangSheng_Parents",
        conditions: { withStars: ["長生"], palace: "父母宮" },
        content: {
            summary: "父母長壽，緣分深厚。",
            description: "父母健康，慈愛有加。",
            keywords: ["長壽","慈愛"]
        }
    },
    "MuYu_Life": {
        key: "MuYu_Life",
        conditions: { withStars: ["沐浴"], palace: "命宮" },
        content: {
            summary: "桃花情迷，反覆無常。",
            description: "主桃花、異性緣。易受外界影響，情緒波動。",
            keywords: ["桃花","波動"]
        }
    },
    "MuYu_Siblings": {
        key: "MuYu_Siblings",
        conditions: { withStars: ["沐浴"], palace: "兄弟宮" },
        content: {
            summary: "兄弟風流，感情複雜。",
            description: "兄弟多情，易有感情困擾。",
            keywords: ["風流","複雜"]
        }
    },
    "MuYu_Spouse": {
        key: "MuYu_Spouse",
        conditions: { withStars: ["沐浴"], palace: "夫妻宮" },
        content: {
            summary: "配偶美豔，桃花過旺。",
            description: "配偶異性緣好，需防外遇。",
            keywords: ["美豔","外遇"]
        }
    },
    "MuYu_Children": {
        key: "MuYu_Children",
        conditions: { withStars: ["沐浴"], palace: "子女宮" },
        content: {
            summary: "子女早熟，情竇初開。",
            description: "子女注重打扮，早談戀愛。",
            keywords: ["早熟","戀愛"]
        }
    },
    "MuYu_Wealth": {
        key: "MuYu_Wealth",
        conditions: { withStars: ["沐浴"], palace: "財帛宮" },
        content: {
            summary: "因色破財，花錢妝扮。",
            description: "喜花錢在裝扮享受。防桃花劫。",
            keywords: ["破財","享受"]
        }
    },
    "MuYu_Health": {
        key: "MuYu_Health",
        conditions: { withStars: ["沐浴"], palace: "疾厄宮" },
        content: {
            summary: "泌尿生殖，婦科隱疾。",
            description: "主桃花病、虛弱。",
            keywords: ["泌尿","桃花病"]
        }
    },
    "MuYu_Travel": {
        key: "MuYu_Travel",
        conditions: { withStars: ["沐浴"], palace: "遷移宮" },
        content: {
            summary: "出外桃花，異性青睞。",
            description: "在外人緣好，易得異性助。",
            keywords: ["桃花","異性"]
        }
    },
    "MuYu_Friends": {
        key: "MuYu_Friends",
        conditions: { withStars: ["沐浴"], palace: "交友宮" },
        content: {
            summary: "友多風月，酒肉之交。",
            description: "朋友多為玩樂性質。",
            keywords: ["風月","玩樂"]
        }
    },
    "MuYu_Career": {
        key: "MuYu_Career",
        conditions: { withStars: ["沐浴"], palace: "官祿宮" },
        content: {
            summary: "異性職場，變化多端。",
            description: "工作環境多異性，或職業變動大。",
            keywords: ["異性","變動"]
        }
    },
    "MuYu_Property": {
        key: "MuYu_Property",
        conditions: { withStars: ["沐浴"], palace: "田宅宮" },
        content: {
            summary: "居家華麗，浴室講究。",
            description: "喜裝修，但也易變動住處。",
            keywords: ["華麗","變動"]
        }
    },
    "MuYu_Karma": {
        key: "MuYu_Karma",
        conditions: { withStars: ["沐浴"], palace: "福德宮" },
        content: {
            summary: "風流韻事，精神享受。",
            description: "喜愛感官刺激，桃花多。",
            keywords: ["風流","刺激"]
        }
    },
    "MuYu_Parents": {
        key: "MuYu_Parents",
        conditions: { withStars: ["沐浴"], palace: "父母宮" },
        content: {
            summary: "父母風流，或父母離異。",
            description: "父母感情生活複雜。",
            keywords: ["風流","複雜"]
        }
    },
    "GuanDai_Life": {
        key: "GuanDai_Life",
        conditions: { withStars: ["冠帶"], palace: "命宮" },
        content: {
            summary: "喜慶進取，爭取榮譽。",
            description: "主好勝心、權威。利於事業發展。",
            keywords: ["進取","榮譽"]
        }
    },
    "GuanDai_Siblings": {
        key: "GuanDai_Siblings",
        conditions: { withStars: ["冠帶"], palace: "兄弟宮" },
        content: {
            summary: "兄弟有成，爭強好勝。",
            description: "兄弟事業不錯，但個性強。",
            keywords: ["有成","爭強"]
        }
    },
    "GuanDai_Spouse": {
        key: "GuanDai_Spouse",
        conditions: { withStars: ["冠帶"], palace: "夫妻宮" },
        content: {
            summary: "配偶顯貴，掌權得意。",
            description: "配偶有事業心，主要掌權。",
            keywords: ["顯貴","掌權"]
        }
    },
    "GuanDai_Children": {
        key: "GuanDai_Children",
        conditions: { withStars: ["冠帶"], palace: "子女宮" },
        content: {
            summary: "子女聰穎，追求卓越。",
            description: "子女成績好，榮譽感強。",
            keywords: ["聰穎","卓越"]
        }
    },
    "GuanDai_Wealth": {
        key: "GuanDai_Wealth",
        conditions: { withStars: ["冠帶"], palace: "財帛宮" },
        content: {
            summary: "財運亨通，名利雙收。",
            description: "因名氣而得財，財源正當。",
            keywords: ["亨通","名利"]
        }
    },
    "GuanDai_Health": {
        key: "GuanDai_Health",
        conditions: { withStars: ["冠帶"], palace: "疾厄宮" },
        content: {
            summary: "身體硬朗，注意血壓。",
            description: "健康佳，但易因爭強而積勞。",
            keywords: ["硬朗","積勞"]
        }
    },
    "GuanDai_Travel": {
        key: "GuanDai_Travel",
        conditions: { withStars: ["冠帶"], palace: "遷移宮" },
        content: {
            summary: "出外顯達，衣錦還鄉。",
            description: "在外發展順利，受人敬重。",
            keywords: ["顯達","敬重"]
        }
    },
    "GuanDai_Friends": {
        key: "GuanDai_Friends",
        conditions: { withStars: ["冠帶"], palace: "交友宮" },
        content: {
            summary: "結交權貴，相得益彰。",
            description: "朋友多為成功人士。",
            keywords: ["權貴","益彰"]
        }
    },
    "GuanDai_Career": {
        key: "GuanDai_Career",
        conditions: { withStars: ["冠帶"], palace: "官祿宮" },
        content: {
            summary: "職場升遷，官運亨通。",
            description: "升遷快，有權位。",
            keywords: ["升遷","權位"]
        }
    },
    "GuanDai_Property": {
        key: "GuanDai_Property",
        conditions: { withStars: ["冠帶"], palace: "田宅宮" },
        content: {
            summary: "置產順利，門戶光彩。",
            description: "家宅興旺，鄰居素質高。",
            keywords: ["光彩","興旺"]
        }
    },
    "GuanDai_Karma": {
        key: "GuanDai_Karma",
        conditions: { withStars: ["冠帶"], palace: "福德宮" },
        content: {
            summary: "心高氣傲，追求名聲。",
            description: "自尊心強，精神富足。",
            keywords: ["心高","名聲"]
        }
    },
    "GuanDai_Parents": {
        key: "GuanDai_Parents",
        conditions: { withStars: ["冠帶"], palace: "父母宮" },
        content: {
            summary: "父母顯榮，家教嚴明。",
            description: "父母有地位，對子女期望高。",
            keywords: ["顯榮","期望"]
        }
    },
    "LinGuan_Life": {
        key: "LinGuan_Life",
        conditions: { withStars: ["臨官"], palace: "命宮" },
        content: {
            summary: "獨立自主，創業興家。",
            description: "主獨立、強勢。白手起家之象。",
            keywords: ["獨立","興家"]
        }
    },
    "LinGuan_Siblings": {
        key: "LinGuan_Siblings",
        conditions: { withStars: ["臨官"], palace: "兄弟宮" },
        content: {
            summary: "兄弟各自獨立。",
            description: "兄弟各憑本事，無需互助。",
            keywords: ["獨立","本事"]
        }
    },
    "LinGuan_Spouse": {
        key: "LinGuan_Spouse",
        conditions: { withStars: ["臨官"], palace: "夫妻宮" },
        content: {
            summary: "配偶強勢，各主其事。",
            description: "配偶能力強，婚姻中較自我。",
            keywords: ["強勢","自我"]
        }
    },
    "LinGuan_Children": {
        key: "LinGuan_Children",
        conditions: { withStars: ["臨官"], palace: "子女宮" },
        content: {
            summary: "子女早熟，獨立性強。",
            description: "子女長大早離家獨立。",
            keywords: ["早熟","獨立"]
        }
    },
    "LinGuan_Wealth": {
        key: "LinGuan_Wealth",
        conditions: { withStars: ["臨官"], palace: "財帛宮" },
        content: {
            summary: "正財旺盛，自力更生。",
            description: "靠自己賺錢，財運穩固。",
            keywords: ["正財","自力"]
        }
    },
    "LinGuan_Health": {
        key: "LinGuan_Health",
        conditions: { withStars: ["臨官"], palace: "疾厄宮" },
        content: {
            summary: "身強體壯，注意過勞。",
            description: "身體好，但工作狂易過勞。",
            keywords: ["身強","過勞"]
        }
    },
    "LinGuan_Travel": {
        key: "LinGuan_Travel",
        conditions: { withStars: ["臨官"], palace: "遷移宮" },
        content: {
            summary: "出外創業，獨當一面。",
            description: "在外能獨立發展，成就高。",
            keywords: ["創業","獨當"]
        }
    },
    "LinGuan_Friends": {
        key: "LinGuan_Friends",
        conditions: { withStars: ["臨官"], palace: "交友宮" },
        content: {
            summary: "友多能人，競爭合作。",
            description: "朋友能力強，有競爭關係。",
            keywords: ["能人","競爭"]
        }
    },
    "LinGuan_Career": {
        key: "LinGuan_Career",
        conditions: { withStars: ["臨官"], palace: "官祿宮" },
        content: {
            summary: "創業領袖，獨掌大權。",
            description: "適合創業或擔任主管。",
            keywords: ["領袖","掌權"]
        }
    },
    "LinGuan_Property": {
        key: "LinGuan_Property",
        conditions: { withStars: ["臨官"], palace: "田宅宮" },
        content: {
            summary: "自置房產，白手起家。",
            description: "靠自己買房，家業興盛。",
            keywords: ["自置","興盛"]
        }
    },
    "LinGuan_Karma": {
        key: "LinGuan_Karma",
        conditions: { withStars: ["臨官"], palace: "福德宮" },
        content: {
            summary: "勞碌有成，精神充實。",
            description: "閒不下來，以工作為樂。",
            keywords: ["勞碌","充實"]
        }
    },
    "LinGuan_Parents": {
        key: "LinGuan_Parents",
        conditions: { withStars: ["臨官"], palace: "父母宮" },
        content: {
            summary: "父母忙碌，各自強勢。",
            description: "父母有事業，無法多管子女。",
            keywords: ["忙碌","強勢"]
        }
    },
    "DiWang_Life": {
        key: "DiWang_Life",
        conditions: { withStars: ["帝旺"], palace: "命宮" },
        content: {
            summary: "氣勢頂峰，唯我獨尊。",
            description: "主壯年運強，領袖氣質。防過剛則折。",
            keywords: ["頂峰","獨尊"]
        }
    },
    "DiWang_Siblings": {
        key: "DiWang_Siblings",
        conditions: { withStars: ["帝旺"], palace: "兄弟宮" },
        content: {
            summary: "兄弟強勢，各據一方。",
            description: "兄弟成就高，但難相處。",
            keywords: ["強勢","成就"]
        }
    },
    "DiWang_Spouse": {
        key: "DiWang_Spouse",
        conditions: { withStars: ["帝旺"], palace: "夫妻宮" },
        content: {
            summary: "配偶尊貴，氣勢凌人。",
            description: "配偶極強勢，需忍讓。",
            keywords: ["尊貴","凌人"]
        }
    },
    "DiWang_Children": {
        key: "DiWang_Children",
        conditions: { withStars: ["帝旺"], palace: "子女宮" },
        content: {
            summary: "子女眾多，個個不凡。",
            description: "子女氣勢強，難管教。",
            keywords: ["眾多","不凡"]
        }
    },
    "DiWang_Wealth": {
        key: "DiWang_Wealth",
        conditions: { withStars: ["帝旺"], palace: "財帛宮" },
        content: {
            summary: "財運極旺，大富之格。",
            description: "賺錢能力極強，財源滾滾。",
            keywords: ["極旺","大富"]
        }
    },
    "DiWang_Health": {
        key: "DiWang_Health",
        conditions: { withStars: ["帝旺"], palace: "疾厄宮" },
        content: {
            summary: "氣血旺盛，防高血壓。",
            description: "體質太強，防發炎高血壓。",
            keywords: ["旺盛","血壓"]
        }
    },
    "DiWang_Travel": {
        key: "DiWang_Travel",
        conditions: { withStars: ["帝旺"], palace: "遷移宮" },
        content: {
            summary: "出外風光，眾人擁戴。",
            description: "在外聲勢浩大，受人推崇。",
            keywords: ["風光","擁戴"]
        }
    },
    "DiWang_Friends": {
        key: "DiWang_Friends",
        conditions: { withStars: ["帝旺"], palace: "交友宮" },
        content: {
            summary: "友多顯要，結黨營私。",
            description: "朋友勢力大，能助己。",
            keywords: ["顯要","勢力"]
        }
    },
    "DiWang_Career": {
        key: "DiWang_Career",
        conditions: { withStars: ["帝旺"], palace: "官祿宮" },
        content: {
            summary: "權傾一時，位極人臣。",
            description: "事業達頂峰，掌大權。",
            keywords: ["權傾","頂峰"]
        }
    },
    "DiWang_Property": {
        key: "DiWang_Property",
        conditions: { withStars: ["帝旺"], palace: "田宅宮" },
        content: {
            summary: "豪宅廣廈，家大業大。",
            description: "置產多且豪華。家族興旺。",
            keywords: ["豪宅","興旺"]
        }
    },
    "DiWang_Karma": {
        key: "DiWang_Karma",
        conditions: { withStars: ["帝旺"], palace: "福德宮" },
        content: {
            summary: "福厚氣盛，唯我獨尊。",
            description: "自信過度，精神亢奮。",
            keywords: ["福厚","自信"]
        }
    },
    "DiWang_Parents": {
        key: "DiWang_Parents",
        conditions: { withStars: ["帝旺"], palace: "父母宮" },
        content: {
            summary: "父母威嚴，家世顯赫。",
            description: "父母極具威嚴，家規嚴。",
            keywords: ["威嚴","顯赫"]
        }
    },
    "Shuai_Life": {
        key: "Shuai_Life",
        conditions: { withStars: ["衰"], palace: "命宮" },
        content: {
            summary: "穩重保守，缺乏幹勁。",
            description: "主氣衰，心態保守。但利於守成。",
            keywords: ["穩重","保守"]
        }
    },
    "Shuai_Siblings": {
        key: "Shuai_Siblings",
        conditions: { withStars: ["衰"], palace: "兄弟宮" },
        content: {
            summary: "兄弟平淡，少往來。",
            description: "兄弟運勢平平，無助力。",
            keywords: ["平淡","無助"]
        }
    },
    "Shuai_Spouse": {
        key: "Shuai_Spouse",
        conditions: { withStars: ["衰"], palace: "夫妻宮" },
        content: {
            summary: "感情平淡，轉趨冷卻。",
            description: "婚姻熱情消退，趨於平淡。",
            keywords: ["平淡","冷卻"]
        }
    },
    "Shuai_Children": {
        key: "Shuai_Children",
        conditions: { withStars: ["衰"], palace: "子女宮" },
        content: {
            summary: "子女文靜，依賴心重。",
            description: "子女較被動，發展慢。",
            keywords: ["文靜","被動"]
        }
    },
    "Shuai_Wealth": {
        key: "Shuai_Wealth",
        conditions: { withStars: ["衰"], palace: "財帛宮" },
        content: {
            summary: "財運轉弱，宜守不宜攻。",
            description: "賺錢辛苦，宜儲蓄。",
            keywords: ["轉弱","儲蓄"]
        }
    },
    "Shuai_Health": {
        key: "Shuai_Health",
        conditions: { withStars: ["衰"], palace: "疾厄宮" },
        content: {
            summary: "體弱多病，機能衰退。",
            description: "身體抵抗力差，易疲勞。",
            keywords: ["體弱","疲勞"]
        }
    },
    "Shuai_Travel": {
        key: "Shuai_Travel",
        conditions: { withStars: ["衰"], palace: "遷移宮" },
        content: {
            summary: "出外乏力，適應不良。",
            description: "在外發展平平，思鄉。",
            keywords: ["乏力","思鄉"]
        }
    },
    "Shuai_Friends": {
        key: "Shuai_Friends",
        conditions: { withStars: ["衰"], palace: "交友宮" },
        content: {
            summary: "友誼疏離，人氣下滑。",
            description: "朋友漸少，無助力。",
            keywords: ["疏離","下滑"]
        }
    },
    "Shuai_Career": {
        key: "Shuai_Career",
        conditions: { withStars: ["衰"], palace: "官祿宮" },
        content: {
            summary: "事業停滯，心有餘力不足。",
            description: "工作無衝勁，守成為上。",
            keywords: ["停滯","守成"]
        }
    },
    "Shuai_Property": {
        key: "Shuai_Property",
        conditions: { withStars: ["衰"], palace: "田宅宮" },
        content: {
            summary: "屋宅老舊，缺乏修繕。",
            description: "房子舊，家運平平。",
            keywords: ["老舊","平平"]
        }
    },
    "Shuai_Karma": {
        key: "Shuai_Karma",
        conditions: { withStars: ["衰"], palace: "福德宮" },
        content: {
            summary: "心態消極，多愁善感。",
            description: "精神空虛，缺乏鬥志。",
            keywords: ["消極","多愁"]
        }
    },
    "Shuai_Parents": {
        key: "Shuai_Parents",
        conditions: { withStars: ["衰"], palace: "父母宮" },
        content: {
            summary: "父母衰老，健康欠佳。",
            description: "父母運氣走下坡。",
            keywords: ["衰老","欠佳"]
        }
    },
    "Bing_Life": {
        key: "Bing_Life",
        conditions: { withStars: ["病"], palace: "命宮" },
        content: {
            summary: "身體違和，思慮過多。",
            description: "主幻想、敏感。身體較弱，重視精神層面。",
            keywords: ["敏感","體弱"]
        }
    },
    "Bing_Siblings": {
        key: "Bing_Siblings",
        conditions: { withStars: ["病"], palace: "兄弟宮" },
        content: {
            summary: "兄弟緣薄，體弱多病。",
            description: "兄弟身體不好，互不關心。",
            keywords: ["緣薄","病弱"]
        }
    },
    "Bing_Spouse": {
        key: "Bing_Spouse",
        conditions: { withStars: ["病"], palace: "夫妻宮" },
        content: {
            summary: "配偶多病，感情糾葛。",
            description: "配偶健康差，婚姻多煩惱。",
            keywords: ["多病","煩惱"]
        }
    },
    "Bing_Children": {
        key: "Bing_Children",
        conditions: { withStars: ["病"], palace: "子女宮" },
        content: {
            summary: "子女難養，擔心操勞。",
            description: "子女體質弱，需費心。",
            keywords: ["難養","操勞"]
        }
    },
    "Bing_Wealth": {
        key: "Bing_Wealth",
        conditions: { withStars: ["病"], palace: "財帛宮" },
        content: {
            summary: "因病破財，財源不繼。",
            description: "賺錢無力，醫藥費多。",
            keywords: ["破財","醫藥"]
        }
    },
    "Bing_Health": {
        key: "Bing_Health",
        conditions: { withStars: ["病"], palace: "疾厄宮" },
        content: {
            summary: "百病纏身，神經衰弱。",
            description: "此星入疾厄最凶，主病灶。",
            keywords: ["百病","病灶"]
        }
    },
    "Bing_Travel": {
        key: "Bing_Travel",
        conditions: { withStars: ["病"], palace: "遷移宮" },
        content: {
            summary: "出外水土不服。",
            description: "在外易生病，適應力差。",
            keywords: ["水土","生病"]
        }
    },
    "Bing_Friends": {
        key: "Bing_Friends",
        conditions: { withStars: ["病"], palace: "交友宮" },
        content: {
            summary: "友多病弱，情緒勒索。",
            description: "朋友充滿負能量。",
            keywords: ["病弱","負面"]
        }
    },
    "Bing_Career": {
        key: "Bing_Career",
        conditions: { withStars: ["病"], palace: "官祿宮" },
        content: {
            summary: "工作倦怠，力不從心。",
            description: "事業心病，缺乏動力。",
            keywords: ["倦怠","無力"]
        }
    },
    "Bing_Property": {
        key: "Bing_Property",
        conditions: { withStars: ["病"], palace: "田宅宮" },
        content: {
            summary: "家宅晦暗，風水不佳。",
            description: "住家易生病菌，風水病。",
            keywords: ["晦暗","風水"]
        }
    },
    "Bing_Karma": {
        key: "Bing_Karma",
        conditions: { withStars: ["病"], palace: "福德宮" },
        content: {
            summary: "操心勞累，杞人憂天。",
            description: "精神焦慮，甚至幻想症。",
            keywords: ["焦慮","幻想"]
        }
    },
    "Bing_Parents": {
        key: "Bing_Parents",
        conditions: { withStars: ["病"], palace: "父母宮" },
        content: {
            summary: "父母帶疾，心情鬱悶。",
            description: "父母多病痛。",
            keywords: ["帶疾","鬱悶"]
        }
    },
    "Si_Life": {
        key: "Si_Life",
        conditions: { withStars: ["死"], palace: "命宮" },
        content: {
            summary: "沉靜內斂，鑽牛角尖。",
            description: "主停滯、無生氣。個性固執，不喜變動。",
            keywords: ["沉靜","固執"]
        }
    },
    "Si_Siblings": {
        key: "Si_Siblings",
        conditions: { withStars: ["死"], palace: "兄弟宮" },
        content: {
            summary: "兄弟疏離，形同陌路。",
            description: "兄弟無情義，不相往來。",
            keywords: ["疏離","陌路"]
        }
    },
    "Si_Spouse": {
        key: "Si_Spouse",
        conditions: { withStars: ["死"], palace: "夫妻宮" },
        content: {
            summary: "感情死寂，心如止水。",
            description: "婚姻無生氣，冷漠。",
            keywords: ["死寂","冷漠"]
        }
    },
    "Si_Children": {
        key: "Si_Children",
        conditions: { withStars: ["死"], palace: "子女宮" },
        content: {
            summary: "子女緣薄，難有子息。",
            description: "子女少或難管，關係冰點。",
            keywords: ["緣薄","冰點"]
        }
    },
    "Si_Wealth": {
        key: "Si_Wealth",
        conditions: { withStars: ["死"], palace: "財帛宮" },
        content: {
            summary: "財運枯竭，週轉不靈。",
            description: "賺錢無門，如同死水。",
            keywords: ["枯竭","死水"]
        }
    },
    "Si_Health": {
        key: "Si_Health",
        conditions: { withStars: ["死"], palace: "疾厄宮" },
        content: {
            summary: "慢性痼疾，無藥可醫。",
            description: "主绝症或長期病痛。",
            keywords: ["痼疾","絕症"]
        }
    },
    "Si_Travel": {
        key: "Si_Travel",
        conditions: { withStars: ["死"], palace: "遷移宮" },
        content: {
            summary: "出外受阻，甚至客死。",
            description: "絕不宜遠遊，多災厄。",
            keywords: ["受阻","災厄"]
        }
    },
    "Si_Friends": {
        key: "Si_Friends",
        conditions: { withStars: ["死"], palace: "交友宮" },
        content: {
            summary: "無友無伴，孤立無援。",
            description: "朋友絕跡，無人相助。",
            keywords: ["無友","孤立"]
        }
    },
    "Si_Career": {
        key: "Si_Career",
        conditions: { withStars: ["死"], palace: "官祿宮" },
        content: {
            summary: "事業結束，宣告破產。",
            description: "工作面臨絕境，倒閉。",
            keywords: ["結束","破產"]
        }
    },
    "Si_Property": {
        key: "Si_Property",
        conditions: { withStars: ["死"], palace: "田宅宮" },
        content: {
            summary: "家運敗落，陰氣沉沉。",
            description: "家宅陰森，無人氣。",
            keywords: ["敗落","陰森"]
        }
    },
    "Si_Karma": {
        key: "Si_Karma",
        conditions: { withStars: ["死"], palace: "福德宮" },
        content: {
            summary: "心如死灰，毫無生趣。",
            description: "精神極度悲觀，絕望。",
            keywords: ["死灰","悲觀"]
        }
    },
    "Si_Parents": {
        key: "Si_Parents",
        conditions: { withStars: ["死"], palace: "父母宮" },
        content: {
            summary: "刑剋分離，父母早逝。",
            description: "父母緣盡，早別離。",
            keywords: ["刑剋","早逝"]
        }
    },
    "Mu_Life": {
        key: "Mu_Life",
        conditions: { withStars: ["墓"], palace: "命宮" },
        content: {
            summary: "收藏積蓄，大器晚成。",
            description: "主庫存、保守。性格務實，積少成多。",
            keywords: ["收藏","積蓄"]
        }
    },
    "Mu_Siblings": {
        key: "Mu_Siblings",
        conditions: { withStars: ["墓"], palace: "兄弟宮" },
        content: {
            summary: "兄弟不多，性格內向。",
            description: "兄弟保守，各自為政。",
            keywords: ["不多","內向"]
        }
    },
    "Mu_Spouse": {
        key: "Mu_Spouse",
        conditions: { withStars: ["墓"], palace: "夫妻宮" },
        content: {
            summary: "感情內斂，平穩無波。",
            description: "配偶不多話，婚姻平淡。",
            keywords: ["內斂","平淡"]
        }
    },
    "Mu_Children": {
        key: "Mu_Children",
        conditions: { withStars: ["墓"], palace: "子女宮" },
        content: {
            summary: "子女節儉，性格乖僻。",
            description: "子女安靜，不喜表現。",
            keywords: ["節儉","乖僻"]
        }
    },
    "Mu_Wealth": {
        key: "Mu_Wealth",
        conditions: { withStars: ["墓"], palace: "財帛宮" },
        content: {
            summary: "積蓄致富，只進不出。",
            description: "守財奴，財運穩但摳門。",
            keywords: ["積蓄","摳門"]
        }
    },
    "Mu_Health": {
        key: "Mu_Health",
        conditions: { withStars: ["墓"], palace: "疾厄宮" },
        content: {
            summary: "暗疾潛伏，難以根治。",
            description: "病在深處，難發現。",
            keywords: ["暗疾","潛伏"]
        }
    },
    "Mu_Travel": {
        key: "Mu_Travel",
        conditions: { withStars: ["墓"], palace: "遷移宮" },
        content: {
            summary: "出外保守，安土重遷。",
            description: "不喜外出，適應力差。",
            keywords: ["保守","安土"]
        }
    },
    "Mu_Friends": {
        key: "Mu_Friends",
        conditions: { withStars: ["墓"], palace: "交友宮" },
        content: {
            summary: "友圈狹小，君子之交。",
            description: "朋友少而久，不輕易交心。",
            keywords: ["狹小","君子"]
        }
    },
    "Mu_Career": {
        key: "Mu_Career",
        conditions: { withStars: ["墓"], palace: "官祿宮" },
        content: {
            summary: "保守經營，守成不易。",
            description: "工作穩定，不喜變動。",
            keywords: ["保守","穩定"]
        }
    },
    "Mu_Property": {
        key: "Mu_Property",
        conditions: { withStars: ["墓"], palace: "田宅宮" },
        content: {
            summary: "置產積富，家藏萬金。",
            description: "極利置產，庫存豐富。",
            keywords: ["置產","庫存"]
        }
    },
    "Mu_Karma": {
        key: "Mu_Karma",
        conditions: { withStars: ["墓"], palace: "福德宮" },
        content: {
            summary: "心態保守，知足常樂。",
            description: "不喜冒險，精神安穩。",
            keywords: ["保守","安穩"]
        }
    },
    "Mu_Parents": {
        key: "Mu_Parents",
        conditions: { withStars: ["墓"], palace: "父母宮" },
        content: {
            summary: "父母節儉，固執守舊。",
            description: "父母觀念傳統，節儉。",
            keywords: ["節儉","守舊"]
        }
    },
    "Jue_Life": {
        key: "Jue_Life",
        conditions: { withStars: ["絕"], palace: "命宮" },
        content: {
            summary: "起伏變化，孤獨特立。",
            description: "主大起大落。喜新厭舊，人緣較淡。",
            keywords: ["起伏","孤獨"]
        }
    },
    "Jue_Siblings": {
        key: "Jue_Siblings",
        conditions: { withStars: ["絕"], palace: "兄弟宮" },
        content: {
            summary: "兄弟緣盡，反目成仇。",
            description: "兄弟無緣，甚至斷交。",
            keywords: ["緣盡","斷交"]
        }
    },
    "Jue_Spouse": {
        key: "Jue_Spouse",
        conditions: { withStars: ["絕"], palace: "夫妻宮" },
        content: {
            summary: "緣分斷絕，無疾而終。",
            description: "感情易斷，婚姻破裂。",
            keywords: ["斷絕","破裂"]
        }
    },
    "Jue_Children": {
        key: "Jue_Children",
        conditions: { withStars: ["絕"], palace: "子女宮" },
        content: {
            summary: "絕嗣無子，緣分極淺。",
            description: "無子或子女早夭。",
            keywords: ["絕嗣","緣淺"]
        }
    },
    "Jue_Wealth": {
        key: "Jue_Wealth",
        conditions: { withStars: ["絕"], palace: "財帛宮" },
        content: {
            summary: "財源斷絕，甚至破產。",
            description: "斷絕財路，極凶。",
            keywords: ["斷絕","破產"]
        }
    },
    "Jue_Health": {
        key: "Jue_Health",
        conditions: { withStars: ["絕"], palace: "疾厄宮" },
        content: {
            summary: "手術開刀，身體虛脫。",
            description: "大病手術，元氣大傷。",
            keywords: ["手術","虛脫"]
        }
    },
    "Jue_Travel": {
        key: "Jue_Travel",
        conditions: { withStars: ["絕"], palace: "遷移宮" },
        content: {
            summary: "出外絕境，走頭無路。",
            description: "在外遇險，被人孤立。",
            keywords: ["絕境","孤立"]
        }
    },
    "Jue_Friends": {
        key: "Jue_Friends",
        conditions: { withStars: ["絕"], palace: "交友宮" },
        content: {
            summary: "友誼斷絕，無人理睬。",
            description: "朋友背離，孤單一人。",
            keywords: ["斷絕","孤單"]
        }
    },
    "Jue_Career": {
        key: "Jue_Career",
        conditions: { withStars: ["絕"], palace: "官祿宮" },
        content: {
            summary: "事業中斷，無以為繼。",
            description: "工作斷斷續續，沒前途。",
            keywords: ["中斷","無望"]
        }
    },
    "Jue_Property": {
        key: "Jue_Property",
        conditions: { withStars: ["絕"], palace: "田宅宮" },
        content: {
            summary: "家道中落，變賣祖產。",
            description: "房產變賣一空。",
            keywords: ["中落","變賣"]
        }
    },
    "Jue_Karma": {
        key: "Jue_Karma",
        conditions: { withStars: ["絕"], palace: "福德宮" },
        content: {
            summary: "思想偏激，絕望悲觀。",
            description: "想不開，走極端。",
            keywords: ["偏激","絕望"]
        }
    },
    "Jue_Parents": {
        key: "Jue_Parents",
        conditions: { withStars: ["絕"], palace: "父母宮" },
        content: {
            summary: "父母早亡，棄養過繼。",
            description: "與父母緣分斷絕。",
            keywords: ["早亡","棄養"]
        }
    },
    "Tai_Life": {
        key: "Tai_Life",
        conditions: { withStars: ["胎"], palace: "命宮" },
        content: {
            summary: "希望萌芽，天真幼稚。",
            description: "主喜悅、希望。好奇心強，依賴心重。",
            keywords: ["希望","天真"]
        }
    },
    "Tai_Siblings": {
        key: "Tai_Siblings",
        conditions: { withStars: ["胎"], palace: "兄弟宮" },
        content: {
            summary: "兄弟尚小，或有新生。",
            description: "兄弟天真，或有弟妹出生。",
            keywords: ["尚小","新生"]
        }
    },
    "Tai_Spouse": {
        key: "Tai_Spouse",
        conditions: { withStars: ["胎"], palace: "夫妻宮" },
        content: {
            summary: "感情稚嫩，懷孕之喜。",
            description: "感情如初戀般，或奉子成婚。",
            keywords: ["稚嫩","懷孕"]
        }
    },
    "Tai_Children": {
        key: "Tai_Children",
        conditions: { withStars: ["胎"], palace: "子女宮" },
        content: {
            summary: "有子萬事足，懷孕徵兆。",
            description: "易懷孕，子女可愛。",
            keywords: ["懷孕","可愛"]
        }
    },
    "Tai_Wealth": {
        key: "Tai_Wealth",
        conditions: { withStars: ["胎"], palace: "財帛宮" },
        content: {
            summary: "財源初開，發展在望。",
            description: "新的賺錢機會剛開始。",
            keywords: ["初開","希望"]
        }
    },
    "Tai_Health": {
        key: "Tai_Health",
        conditions: { withStars: ["胎"], palace: "疾厄宮" },
        content: {
            summary: "先天體弱，注意保養。",
            description: "體質較弱，需從小調養。",
            keywords: ["體弱","保養"]
        }
    },
    "Tai_Travel": {
        key: "Tai_Travel",
        conditions: { withStars: ["胎"], palace: "遷移宮" },
        content: {
            summary: "出外求新，充滿希望。",
            description: "外地有新機遇。",
            keywords: ["求新","機遇"]
        }
    },
    "Tai_Friends": {
        key: "Tai_Friends",
        conditions: { withStars: ["胎"], palace: "交友宮" },
        content: {
            summary: "結交新友，關係單純。",
            description: "朋友如赤子，單純。",
            keywords: ["新友","單純"]
        }
    },
    "Tai_Career": {
        key: "Tai_Career",
        conditions: { withStars: ["胎"], palace: "官祿宮" },
        content: {
            summary: "事業開創，前途光明。",
            description: "新工作起始，有潛力。",
            keywords: ["開創","潛力"]
        }
    },
    "Tai_Property": {
        key: "Tai_Property",
        conditions: { withStars: ["胎"], palace: "田宅宮" },
        content: {
            summary: "新居落成，裝潢一新。",
            description: "買新房或裝修。",
            keywords: ["新居","裝修"]
        }
    },
    "Tai_Karma": {
        key: "Tai_Karma",
        conditions: { withStars: ["胎"], palace: "福德宮" },
        content: {
            summary: "心情喜悅，充滿憧憬。",
            description: "心態年輕，對未來有希望。",
            keywords: ["喜悅","憧憬"]
        }
    },
    "Tai_Parents": {
        key: "Tai_Parents",
        conditions: { withStars: ["胎"], palace: "父母宮" },
        content: {
            summary: "父母呵護，備受寵愛。",
            description: "父母視如珍寶。",
            keywords: ["呵護","寵愛"]
        }
    },
    "Yang_Life": {
        key: "Yang_Life",
        conditions: { withStars: ["養"], palace: "命宮" },
        content: {
            summary: "培育休養，待機而動。",
            description: "主沈潛、準備。性格沈穩，積蓄力量。",
            keywords: ["培育","沈穩"]
        }
    },
    "Yang_Siblings": {
        key: "Yang_Siblings",
        conditions: { withStars: ["養"], palace: "兄弟宮" },
        content: {
            summary: "兄弟互助，共同成長。",
            description: "兄弟感情在培養中。",
            keywords: ["互助","成長"]
        }
    },
    "Yang_Spouse": {
        key: "Yang_Spouse",
        conditions: { withStars: ["養"], palace: "夫妻宮" },
        content: {
            summary: "感情培養，細水長流。",
            description: "愛情需要時間經營。",
            keywords: ["培養","長流"]
        }
    },
    "Yang_Children": {
        key: "Yang_Children",
        conditions: { withStars: ["養"], palace: "子女宮" },
        content: {
            summary: "子女眾多，教養良好。",
            description: "重視子女教育培養。",
            keywords: ["教養","眾多"]
        }
    },
    "Yang_Wealth": {
        key: "Yang_Wealth",
        conditions: { withStars: ["養"], palace: "財帛宮" },
        content: {
            summary: "生財有道，利息收入。",
            description: "財富是養出來的，投資獲利。",
            keywords: ["生財","利息"]
        }
    },
    "Yang_Health": {
        key: "Yang_Health",
        conditions: { withStars: ["養"], palace: "疾厄宮" },
        content: {
            summary: "調養生息，漸入佳境。",
            description: "身體需靜養，會好轉。",
            keywords: ["調養","佳境"]
        }
    },
    "Yang_Travel": {
        key: "Yang_Travel",
        conditions: { withStars: ["養"], palace: "遷移宮" },
        content: {
            summary: "出外遊歷，增廣見聞。",
            description: "在外學習成長。",
            keywords: ["遊歷","學習"]
        }
    },
    "Yang_Friends": {
        key: "Yang_Friends",
        conditions: { withStars: ["養"], palace: "交友宮" },
        content: {
            summary: "培養人脈，長期投資。",
            description: "經營長久的人際關係。",
            keywords: ["人脈","培養"]
        }
    },
    "Yang_Career": {
        key: "Yang_Career",
        conditions: { withStars: ["養"], palace: "官祿宮" },
        content: {
            summary: "進修學習，儲備能力。",
            description: "工作穩定，適合進修。",
            keywords: ["進修","儲備"]
        }
    },
    "Yang_Property": {
        key: "Yang_Property",
        conditions: { withStars: ["養"], palace: "田宅宮" },
        content: {
            summary: "家庭美滿，人口興旺。",
            description: "家教好，家運漸昌。",
            keywords: ["美滿","興旺"]
        }
    },
    "Yang_Karma": {
        key: "Yang_Karma",
        conditions: { withStars: ["養"], palace: "福德宮" },
        content: {
            summary: "精神修養，內心充實。",
            description: "注重內涵，修身養性。",
            keywords: ["修養","充實"]
        }
    },
    "Yang_Parents": {
        key: "Yang_Parents",
        conditions: { withStars: ["養"], palace: "父母宮" },
        content: {
            summary: "父母栽培，恩重如山。",
            description: "父母用心教養。",
            keywords: ["栽培","恩重"]
        }
    }
};
