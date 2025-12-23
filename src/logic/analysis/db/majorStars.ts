import { StarRuleMap } from '../models';

export const majorStars: StarRuleMap = {
    "ZiWei_Life": {
        key: "ZiWei_Life",
        conditions: { palace: "命宮" },
        content: {
            summary: "帝座入命，氣質尊貴，具領導統御之能。",
            description: `【性格特質】
面色紫黃或白，儀態端莊，天生具有領袖氣質。性格忠厚耿直，但稍顯孤傲，喜掌權。自尊心強，有主見，不願屈居人下。
【優勢與挑戰】
優勢在於統御能力強，能穩重處事，受人敬重。挑戰在於易流於剛愎自用，若無左輔右弼等吉星會照，易成孤君，勞心勞力。
【給命主的建議】
宜多廣納雅言，避免獨斷獨行。多培養人和，以德服人，方能成就大業。`,
            keywords: ["領導", "尊貴", "孤傲"]
        }
    },
    "ZiWei_Siblings": {
        key: "ZiWei_Siblings",
        conditions: { palace: "兄弟宮" },
        content: {
            summary: "兄弟權貴，或依賴自己，需居長。",
            description: `【現象解析】
兄弟姊妹中有顯貴之人，能力強，地位高，但個性強勢。彼此關係多為敬畏或依賴，情感上稍顯疏離。若自身為長子或長女，則需負擔照顧責任。
【給命主的建議】
與手足相處宜保持適當距離，尊重對方的權威感。可尋求其在事業或人脈上的協助，但不宜過度依賴情感交流。`,
            keywords: ["顯貴", "長兄"]
        }
    },
    "ZiWei_Spouse": {
        key: "ZiWei_Spouse",
        conditions: { palace: "夫妻宮" },
        content: {
            summary: "配偶賢能尊貴，需防勢盛欺身。",
            description: `【現象解析】
配偶氣質高雅，重面子，主觀意識強。對方在家庭或事業中往往佔據主導地位，易給命主帶來壓力。晚婚或年齡差距大者較吉。
【給命主的建議】
婚姻中應給予配偶足夠的尊重與面子，以柔克剛。避免正面衝突，多溝通以化解其強勢帶來的壓迫感。`,
            keywords: ["強勢", "晚婚"]
        }
    },
    "ZiWei_Children": {
        key: "ZiWei_Children",
        conditions: { palace: "子女宮" },
        content: {
            summary: "子女聰穎，個性強，難管教。",
            description: `【現象解析】
子女天資聰穎，自尊心極強，不喜受父母命令。個性獨立，早熟，將來在社會上易有成就，但親情互動較為平淡。
【給命主的建議】
教養子女宜採用引導而非命令的方式。尊重其獨立人格，培養其領導才能，不必過度操心其未來發展。`,
            keywords: ["聰明", "獨立"]
        }
    },
    "ZiWei_Wealth": {
        key: "ZiWei_Wealth",
        conditions: { palace: "財帛宮" },
        content: {
            summary: "財源穩健，善理財，適公職管理。",
            description: `【現象解析】
紫微星入財帛宮，主財源廣進，且多為正財。善於理財與管理金錢，常因職位高升或權力增加而得財。用錢大方，講究氣派。
【給命主的建議】
適合從事管理、金融、公職等穩定且具權威性的工作。應善用人脈與領導力生財，避免因過度講究排場而浪費。`,
            keywords: ["正財", "管理"]
        }
    },
    "ZiWei_Health": {
        key: "ZiWei_Health",
        conditions: { palace: "疾厄宮" },
        content: {
            summary: "脾胃消化，精神衰弱。",
            description: `【現象解析】
屬土，主脾胃消化系統之疾。晚年需注意高血壓或富貴病。若遇煞星，易因責任重、壓力大而導致神經衰弱或失眠。
【給命主的建議】
應注意飲食定時定量，減少應酬。適度放鬆身心，避免過度勞累。定期健康檢查，關注心血管與消化系統保健。`,
            keywords: ["脾胃", "神經"]
        }
    },
    "ZiWei_Travel": {
        key: "ZiWei_Travel",
        conditions: { palace: "遷移宮" },
        content: {
            summary: "出外得貴，宜往外發展。",
            description: `【現象解析】
外出運極佳，常得貴人或長輩提拔。在異地易受人敬重，適應力強，有利於拓展事業版圖。
【給命主的建議】
不妨大膽向外發展，尋求異地機遇。多參加社交活動，結識有力人士，將有助於地位提升。`,
            keywords: ["貴人", "機遇"]
        }
    },
    "ZiWei_Friends": {
        key: "ZiWei_Friends",
        conditions: { palace: "交友宮" },
        content: {
            summary: "結交權貴，防奴欺主。",
            description: `【現象解析】
交往對象多為社會名流或地位顯赫之人。部屬能力強，但個性高傲，若命主本身氣場不足，易難以駕馭，甚至發生"奴欺主"的現象。
【給命主的建議】
用人宜恩威並施，建立明確的制度。與朋友交往應保持不卑不亢的態度，善用人脈資源。`,
            keywords: ["權貴", "部屬"]
        }
    },
    "ZiWei_Career": {
        key: "ZiWei_Career",
        conditions: { palace: "官祿宮" },
        content: {
            summary: "事業有成，掌權位。",
            description: `【現象解析】
事業運勢強勁，適合擔任主管、領導者或獨立創業者。有利於在政界、大型企業或學術界發展，能獨當一面，平步青雲。
【給命主的建議】
應設定遠大的事業目標，勇於承擔責任。發揮組織與領導才能，建立自己的團隊，成就將不可限量。`,
            keywords: ["權力", "升遷"]
        }
    },
    "ZiWei_Property": {
        key: "ZiWei_Property",
        conditions: { palace: "田宅宮" },
        content: {
            summary: "住家高雅，置產運佳。",
            description: `【現象解析】
居住環境多為地勢較高或近公家機關、高級住宅區。喜居住寬敞、高雅之宅。置產運勢佳，不動產穩固增值。
【給命主的建議】
購屋時可優先考慮地段佳、有增值潛力的物件。居家佈置宜典雅大方，有助於提升家運。`,
            keywords: ["高地", "置產"]
        }
    },
    "ZiWei_Karma": {
        key: "ZiWei_Karma",
        conditions: { palace: "福德宮" },
        content: {
            summary: "福深勞心，重精神享受。",
            description: `【現象解析】
福分雖厚，但主觀意識強，責任心重，常自尋煩惱，"心高氣傲"。喜好高雅的精神享受，如藝術、哲學等。
【給命主的建議】
應學習放下身段，適度放鬆心情。多培養休閒嗜好，調劑身心，避免因過度追求完美而陷入精神焦慮。`,
            keywords: ["福氣", "勞心"]
        }
    },
    "ZiWei_Parents": {
        key: "ZiWei_Parents",
        conditions: { palace: "父母宮" },
        content: {
            summary: "父母顯榮，受庇蔭。",
            description: `【現象解析】
父母在社會上有地位、名望，或為一家之主。與父母緣分深厚，能得其教養與物質上的庇蔭。父親較具權威性。
【給命主的建議】
應孝順父母，珍惜親情。可繼承父母的事業或觀念，將其發揚光大。`,
            keywords: ["庇蔭", "威望"]
        }
    },
    "TianJi_Life": {
        key: "TianJi_Life",
        conditions: { palace: "命宮" },
        content: {
            summary: "機智靈敏，足智多謀，善變動。",
            description: `【性格特質】
面色青白，機靈好動。擅策劃分析，好奇心強，多才多藝。思維敏捷，但性急多變，博而不精。
【優勢與挑戰】
優勢在於反應快，智謀高，適應力強。挑戰在於思慮過多，精神易緊張，做事易虎頭蛇尾，三心二意。
【給命主的建議】
宜專注於一技之長，避免博學而不精。多參與戶外活動以放鬆神經，培養定性。`,
            keywords: ["機智", "變動", "謀略"]
        }
    },
    "TianJi_Siblings": {
        key: "TianJi_Siblings",
        conditions: { palace: "兄弟宮" },
        content: {
            summary: "兄弟思維敏捷，各奔東西。",
            description: `【現象解析】
兄弟姊妹聰明機智，反應快，但個性較為獨立或變動性大。彼此之間可能因為理念不同或各自發展而聚少離多，緣分相對較薄。需防異母兄弟或同父異母之情形。
【給命主的建議】
應珍惜手足情誼，平時多保持聯繫。若有合作機會，需釐清權責，避免因意見不合而傷感情。`,
            keywords: ["聰明", "分離"]
        }
    },
    "TianJi_Spouse": {
        key: "TianJi_Spouse",
        conditions: { palace: "夫妻宮" },
        content: {
            summary: "配偶聰明才智，防思慮多疑。",
            description: "配偶聰明，年齡差距或同年。性急多計較，感情易變動或聚少離多。",
            keywords: ["聰明", "變動"]
        }
    },
    "TianJi_Children": {
        key: "TianJi_Children",
        conditions: { palace: "子女宮" },
        content: {
            summary: "子女活潑靈巧，幼時難帶。",
            description: `【現象解析】
子女活潑好動，反應靈敏，好奇心強，學習能力極佳。但個性較為神經質，情緒起伏大，幼年時期較為難帶，讓父母費心。
【給命主的建議】
應根據子女的興趣多方面培養，提供足夠的活動空間。教養上宜多耐心，避免過度嚴厲的責罵以免造成心理陰影。`,
            keywords: ["靈巧", "好動"]
        }
    },
    "TianJi_Wealth": {
        key: "TianJi_Wealth",
        conditions: { palace: "財帛宮" },
        content: {
            summary: "憑智生財，財來財去。",
            description: `【現象解析】
天機星主機智變動，入財帛宮主靠腦力、口才或特殊技藝生財。財運波動較大，周轉頻繁，呈現"財來財去"的現象，較難存得住錢。
【給命主的建議】
適合從事顧問、設計、科技或仲介等動腦行業。理財宜保守，避免高風險投機。建議透過定期定額或強迫儲蓄來守財。`,
            keywords: ["智財", "波動"]
        }
    },
    "TianJi_Health": {
        key: "TianJi_Health",
        conditions: { palace: "疾厄宮" },
        content: {
            summary: "肝膽神經，四肢酸痛。",
            description: `【現象解析】
屬木，主肝膽與神經系統。易因思慮過度導致神經衰弱、失眠或肝火上升。另需注意四肢手足容易受傷或有風濕酸痛之疾。
【給命主的建議】
應保持充足睡眠，避免熬夜。多做伸展運動或瑜伽以放鬆神經。注意四肢保護，預防運動傷害。`,
            keywords: ["肝膽", "神經"]
        }
    },
    "TianJi_Travel": {
        key: "TianJi_Travel",
        conditions: { palace: "遷移宮" },
        content: {
            summary: "出外忙碌，驛馬星動。",
            description: `【現象解析】
個性好動閒不住，喜外出奔波。外地發展機會雖然多，但多屬勞心費力，變動性大。適合從事需要頻繁出差或變動的工作。
【給命主的建議】
在外宜謹言慎行，避免招惹是非。變動中雖有機遇，但也需評估風險，不宜盲目跟風。`,
            keywords: ["奔波", "變動"]
        }
    },
    "TianJi_Friends": {
        key: "TianJi_Friends",
        conditions: { palace: "交友宮" },
        content: {
            summary: "交遊廣闊，知己難求。",
            description: `【現象解析】
朋友來自各行各業，交遊廣闊。朋友多為聰明才智之士，但流動性大，多為點頭之交，難覓真心知己。部屬變動率高。
【給命主的建議】
交往應重質不重量，篩選值得深交的朋友。對部屬或合作夥伴應有明確的契約規範，以免因人員變動而影響事務。`,
            keywords: ["廣闊", "流動"]
        }
    },
    "TianJi_Career": {
        key: "TianJi_Career",
        conditions: { palace: "官祿宮" },
        content: {
            summary: "智囊幕僚，企劃研發。",
            description: `【現象解析】
適合從事需要動腦、策劃、分析或設計的工作。如企劃、研發、大眾傳播、宗教學術等。本身較無強烈的主管慾，適合居於幕僚或輔佐地位。
【給命主的建議】
應持續進修，提升專業技能。專注於某一領域深入發展，成為該領域的專家。不宜從事投機性過高的商業活動。`,
            keywords: ["企劃", "學術"]
        }
    },
    "TianJi_Property": {
        key: "TianJi_Property",
        conditions: { palace: "田宅宮" },
        content: {
            summary: "時常搬遷，住家環境雜。",
            description: `【現象解析】
居住環境容易變動，或家中常進行裝修佈置。住家附近可能交通繁忙、近圓環、天橋或有樹木環境。不易長期定居一處。
【給命主的建議】
購屋宜選交通便利但鬧中取靜之處。居家佈置可多用木質家具，增添溫馨感。若工作性質需常搬遷，租屋或許比買房更靈活。`,
            keywords: ["搬遷", "路邊"]
        }
    },
    "TianJi_Karma": {
        key: "TianJi_Karma",
        conditions: { palace: "福德宮" },
        content: {
            summary: "心思靈巧，勞心費神。",
            description: `【現象解析】
思慮敏捷，求知慾強，喜思考分析。精神生活豐富，但容易鑽牛角尖，思慮過多導致精神緊繃，難以真正放鬆享受。
【給命主的建議】
應學習"難得糊塗"的智慧，減少不必要的擔憂。多接觸大自然、宗教或身心靈活動，尋求內心的平靜。`,
            keywords: ["思考", "勞神"]
        }
    },
    "TianJi_Parents": {
        key: "TianJi_Parents",
        conditions: { palace: "父母宮" },
        content: {
            summary: "父母慈祥明理，或遠離。",
            description: `【現象解析】
父母個性善良，聰明有智慧，能明理教導子女。但因天機主變動，可能與父母緣分較淺，早年離家外出求學或發展，或父母本身常奔波。
【給命主的建議】
即使身在遠方，也應定期問候父母。多聽取父母的經驗與建議，將對自己的人生有莫大幫助。`,
            keywords: ["慈祥", "變動"]
        }
    },
    "TaiYang_Life": {
        key: "TaiYang_Life",
        conditions: { palace: "命宮" },
        content: {
            summary: "光明磊落，博愛熱忱，勞碌奔波。",
            description: `【性格特質】
面色紅潤，個性豪爽，充滿慈愛與熱忱。樂於助人，心直口快，不拘小節。在廟旺（寅、卯、辰、巳、午）主貴，氣勢如虹；落陷（申、酉、戌、亥、子）則勞心勞力，優柔寡斷。
【優勢與挑戰】
優勢為具有領袖魅力，能帶動氣氛，做事積極。挑戰在於喜好面子，易因熱心助人而惹麻煩，或招致不必要的負擔。
【給命主的建議】
應量力而為，不要過度承擔他人的責任。保持內心的光明與正向，但行事需多一分深思熟慮。`,
            keywords: ["博愛", "勞碌", "陽光"]
        }
    },
    "TaiYang_Siblings": {
        key: "TaiYang_Siblings",
        conditions: { palace: "兄弟宮" },
        content: {
            summary: "兄弟榮顯，互助互利。",
            description: `【現象解析】
兄弟姊妹個性開朗，成就優異，在社會上有地位。彼此關係和睦，能相互提攜幫助。若太陽入廟，兄弟更加顯貴；若落陷，則助力稍減。
【給命主的建議】
應與手足保持良好互動，共同開創事業或家族榮景。在手足有困難時應主動伸出援手。`,
            keywords: ["和睦", "成就"]
        }
    },
    "TaiYang_Spouse": {
        key: "TaiYang_Spouse",
        conditions: { palace: "夫妻宮" },
        content: {
            summary: "配偶熱情，因妻得貴(男)。",
            description: `【現象解析】
配偶個性熱情直爽，能幹且有正義感。男命主妻子能持家或有事業，甚至"因妻得貴"。女命主丈夫顯達，但可能較大男人主義。
【給命主的建議】
應欣賞配偶的坦率與能力，給予對方發揮空間。若對方事業心強，應多給予支持與包容。`,
            keywords: ["能幹", "顯貴"]
        }
    },
    "TaiYang_Children": {
        key: "TaiYang_Children",
        conditions: { palace: "子女宮" },
        content: {
            summary: "子女聰穎，有成才之望。",
            description: `【現象解析】
子女活潑開朗，身體健康，具有領導幹才。教育子女雖需費心，但子女將來易有成就，能光耀門楣。廟旺更吉。
【給命主的建議】
應從小培養子女的品德與胸襟。鼓勵其參與團體活動，發揮領導潛能。`,
            keywords: ["開朗", "才幹"]
        }
    },
    "TaiYang_Wealth": {
        key: "TaiYang_Wealth",
        conditions: { palace: "財帛宮" },
        content: {
            summary: "財源廣大，先名後利。",
            description: `【現象解析】
太陽星主施捨，入財帛宮主花錢大方，重名譽甚於利益。適合從事大規模經營、公眾事業或貿易。財運常隨名聲而來，"先有信譽，後有財富"。
【給命主的建議】
經營事業應注重品牌與信譽的建立。適合賺"明白錢"，不宜從事暗盤交易。理財上應量入為出，避免因愛面子而過度揮霍。`,
            keywords: ["名聲", "大方"]
        }
    },
    "TaiYang_Health": {
        key: "TaiYang_Health",
        conditions: { palace: "疾厄宮" },
        content: {
            summary: "心血管，眼目之疾。",
            description: `【現象解析】
屬火，主心臟、心血管系統與小腸。亦主眼睛（右眼）。需防高血壓、視力衰退或陽火過旺引起之發炎。落陷者更需注意。
【給命主的建議】
應定期測量血壓，保護視力。飲食宜清淡，少吃因起火氣之物。保持心情開朗，避免急躁傷心。`,
            keywords: ["心臟", "眼睛"]
        }
    },
    "TaiYang_Travel": {
        key: "TaiYang_Travel",
        conditions: { palace: "遷移宮" },
        content: {
            summary: "出外近貴，名揚四海。",
            description: `【現象解析】
非常適合向外發展，外地運勢強於家鄉。出外易得貴人助，且能結識有力人士。有利於求學、經商或留學，易名揚四海。
【給命主的建議】
年輕時應把握機會出國深造或至外地歷練。參與國際性或大型組織的活動，拓展視野與人脈。`,
            keywords: ["名揚", "貴人"]
        }
    },
    "TaiYang_Friends": {
        key: "TaiYang_Friends",
        conditions: { palace: "交友宮" },
        content: {
            summary: "友多好客，施恩遭怨。",
            description: `【現象解析】
生性豪爽好客，朋友極多。熱心助人，但有時會因過度熱情而被人視為理所當然，甚至"好心沒好報"，招致怨尤。
【給命主的建議】
對朋友的付出應有底線，不宜大包大攬。助人要看對象，避免被損友利用而惹上麻煩。`,
            keywords: ["廣闊", "怨尤"]
        }
    },
    "TaiYang_Career": {
        key: "TaiYang_Career",
        conditions: { palace: "官祿宮" },
        content: {
            summary: "文武全才，權位顯赫。",
            description: `【現象解析】
事業心強，具領導統御能力。適合從事政治、外交、貿易、能源或社會服務等"光亮"的行業。能獨當一面，建立崇高的社會地位。
【給命主的建議】
應選擇具有公眾性質或能發揮影響力的工作。保持正派經營，以服務大眾為宗旨，事業版圖將更加寬廣。`,
            keywords: ["政治", "地位"]
        }
    },
    "TaiYang_Property": {
        key: "TaiYang_Property",
        conditions: { palace: "田宅宮" },
        content: {
            summary: "住居光亮，祖業難守(陷)。",
            description: `【現象解析】
廟旺者，住家環境採光極佳，地勢高或視野開闊，置產順利。落陷者，不動產變動大，或祖業難守，需靠自己打拼。
【給命主的建議】
購屋首重採光與通風。不宜居住在陰暗潮濕之處。若繼承祖產，應妥善規劃，避免因疏忽而流失。`,
            keywords: ["採光", "變動"]
        }
    },
    "TaiYang_Karma": {
        key: "TaiYang_Karma",
        conditions: { palace: "福德宮" },
        content: {
            summary: "忙中得樂，熱心公益。",
            description: `【現象解析】
勞碌命，閒不下來。喜歡參與公眾事務，熱心公益，從服務他人中獲得精神滿足。個性陽光，但也易因太過熱心而勞神。
【給命主的建議】
應學會在忙碌中尋找樂趣，但不宜過度消耗體力。參與公益活動或社團是很好的精神寄託。`,
            keywords: ["勞碌", "熱心"]
        }
    },
    "TaiYang_Parents": {
        key: "TaiYang_Parents",
        conditions: { palace: "父母宮" },
        content: {
            summary: "受父恩澤，無刑剋。",
            description: `【現象解析】
父親多為有威信、慈愛之人。與父親關係良好，能受其庇蔭與提拔。廟旺者，父親壽元長且顯貴；落陷者，可能與父親緣分較淡或父親運勢較弱。
【給命主的建議】
應尊敬父親，多與其請益。若父親年邁，應多給予關懷與陪伴，以盡孝道。`,
            keywords: ["父緣", "威信"]
        }
    },
    "WuQu_Life": {
        key: "WuQu_Life",
        conditions: { palace: "命宮" },
        content: {
            summary: "剛毅果決，重義氣，財星入命。",
            description: `【性格特質】
面色青白，體型壯碩。個性剛毅正直，執行力強，不喜拖泥帶水。性格較嚴肅，不苟言笑，重視義氣與原則，有孤剋之氣。
【優勢與挑戰】
優勢在於果斷、有魄力，是打江山的將才，特利於金融、軍警或實業。挑戰在於太過剛強，易得罪人，且婚姻感情多波折，易感孤獨。
【給命主的建議】
宜多展現柔和的一面，學習以柔克剛。在追求事業成功之餘，應多花心思經營人際與家庭關係。`,
            keywords: ["剛毅", "財星", "執行"]
        }
    },
    "WuQu_Siblings": {
        key: "WuQu_Siblings",
        conditions: { palace: "兄弟宮" },
        content: {
            summary: "兄弟剛強，易有爭執。",
            description: `【現象解析】
兄弟姊妹個性剛毅果決，主觀意識強。彼此之間互動較少，或容易因意見不合而發生爭執。雖然手足各有專長，但合作不易，多為各自奮鬥。
【給命主的建議】
與手足相處宜"保持距離以策安全"。若有金錢往來需立下字據，避免因財傷情。適度關心即可，不必過度干涉對方生活。`,
            keywords: ["剛強", "摩擦"]
        }
    },
    "WuQu_Spouse": {
        key: "WuQu_Spouse",
        conditions: { palace: "夫妻宮" },
        content: {
            summary: "配偶剛烈，刑剋晚婚。",
            description: `【現象解析】
配偶個性強勢，作風硬朗，說話直接。夫妻間易有口角爭執，缺乏浪漫情調。若非晚婚或聚少離多，婚姻生活恐多波折。配偶能力強，能獨當一面。
【給命主的建議】
婚姻需要雙方包容，宜多欣賞配偶的辦事能力，包容其剛直的脾氣。婚後財務宜獨立或由善理財之一方管理，避免因金錢觀念不同而吵架。`,
            keywords: ["剛毅", "少緣"]
        }
    },
    "WuQu_Children": {
        key: "WuQu_Children",
        conditions: { palace: "子女宮" },
        content: {
            summary: "子女剛強，繼承家業。",
            description: `【現象解析】
子女個性倔強固執，有主見，不喜受父母約束。體格強健，但幼時較調皮難管。具有理財天分或運動細胞，將來能白手起家或繼承家業。
【給命主的建議】
應尊重子女的興趣，引導其將精力發洩在運動或專業技能的學習上。教養方式宜軟硬兼施，過度打罵只會造成反效果。`,
            keywords: ["倔強", "理財"]
        }
    },
    "WuQu_Wealth": {
        key: "WuQu_Wealth",
        conditions: { palace: "財帛宮" },
        content: {
            summary: "財星正位，財源滾滾。",
            description: `【現象解析】
武曲為正財星，入財帛宮為得位。主財運極佳，擅長理財與投資。財富多由行動努力得來，屬於"實幹型"的財富。適合從事金融、重工業或實業。
【給命主的建議】
宜發揮執行力，積極開拓財源。理財上可大膽謹慎，適合長短期配置。但需防因過度重視金錢而忽略人情世故。`,
            keywords: ["金融", "富足"]
        }
    },
    "WuQu_Health": {
        key: "WuQu_Health",
        conditions: { palace: "疾厄宮" },
        content: {
            summary: "呼吸系統，金創之傷。",
            description: `【現象解析】
屬金，主肺部、呼吸系統與大腸。易患咳嗽、氣喘或鼻過敏。此外，武曲主金屬，需小心意外傷害、骨折或手術刀厄。
【給命主的建議】
應避免吸煙與空氣污染的環境。運動時需做好防護措施。若有身體不適，應及早就醫，勿拖延。`,
            keywords: ["呼吸", "外傷"]
        }
    },
    "WuQu_Travel": {
        key: "WuQu_Travel",
        conditions: { palace: "遷移宮" },
        content: {
            summary: "出外忙碌，財在遠方。",
            description: `【現象解析】
在外活動力強，閒不住。適合在異地求財，越忙碌越有收穫。外地發展機遇多，但多需親力親為，較為勞碌。需防交通意外或錢財糾紛。
【給命主的建議】
出外宜保持低調，財不露白。交通安全需特別留意。適合從事貿易或跨國企業的工作。`,
            keywords: ["求財", "奔波"]
        }
    },
    "WuQu_Friends": {
        key: "WuQu_Friends",
        conditions: { palace: "交友宮" },
        content: {
            summary: "友寡緣薄，多為利益。",
            description: `【現象解析】
朋友雖多但知己少。交往對象多為剛強之人或生意上的夥伴。人際關係較為現實，多建立在利益互惠的基礎上。
【給命主的建議】
交友宜謹慎，避免與朋友有過多的金錢借貸。應多參加軟性社交活動，培養不涉利益的情誼。`,
            keywords: ["利益", "剛直"]
        }
    },
    "WuQu_Career": {
        key: "WuQu_Career",
        conditions: { palace: "官祿宮" },
        content: {
            summary: "武職財經，獨當一面。",
            description: `【現象解析】
事業運勢佳，執行力強，能獨當一面。適合從事軍警、保全、體育、金融、會計或金屬加工等行業。工作上要求嚴格，雖勞碌但有成就。
【給命主的建議】
應發揮果斷的決策力，勇於承擔重任。職場上宜修飾剛硬的個性，以免得罪同事或上司。`,
            keywords: ["金融", "軍警"]
        }
    },
    "WuQu_Property": {
        key: "WuQu_Property",
        conditions: { palace: "田宅宮" },
        content: {
            summary: "善於置產，近金融區。",
            description: `【現象解析】
對房地產有獨到的眼光，喜歡購買保值性高的不動產。住家附近可能靠近銀行、證券公司或金屬建築物。居家風格簡約實用。
【給命主的建議】
投資房地產是很好的理財方式。購屋時可選擇商業機能強的地段。居家安全設施（如門鎖、防盜）應加強。`,
            keywords: ["資產", "商業"]
        }
    },
    "WuQu_Karma": {
        key: "WuQu_Karma",
        conditions: { palace: "福德宮" },
        content: {
            summary: "勞心勞力，急躁難安。",
            description: `【現象解析】
個性急躁，凡事親力親為，閒不下來。雖有物質享受，但精神上難以放鬆，常處於緊繃狀態。重視實際利益與效率。
【給命主的建議】
應學習"慢活"的態度，適度放權給他人。培養靜態的休閒嗜好，如閱讀、茶道等，以調和剛硬的心性。`,
            keywords: ["勞碌", "急躁"]
        }
    },
    "WuQu_Parents": {
        key: "WuQu_Parents",
        conditions: { palace: "父母宮" },
        content: {
            summary: "父母固執，緣分較淡。",
            description: `【現象解析】
父母個性嚴肅固執，對命主管教嚴格。親子間缺乏心靈交流，容易有代溝。命主可能早年離家獨立，減少摩擦。
【給命主的建議】
應理解父母嚴厲背後的關愛。溝通時宜理智平和，避免正面頂撞。保持定期的物質供養與問候，盡人子之責。`,
            keywords: ["嚴肅", "疏離"]
        }
    },
    "TianTong_Life": {
        key: "TianTong_Life",
        conditions: { palace: "命宮" },
        content: {
            summary: "溫和樂天，福星入命，少勞多獲。",
            description: `【性格特質】
面色黃白，圓潤。性格溫和懶散，好享受，重感情。天性樂觀，不喜與人計較，是大家的開心果。但此星稍嫌魄力不足，易得過且過。
【優勢與挑戰】
優勢在於人緣極佳，有福氣，常有貴人相助，一生多享清福。挑戰在於意志力較薄弱，易受環境影響，做事缺乏恆心，需受激發才能奮發向上。
【給命主的建議】
應培養積極進取的精神，設定明確的目標。不要太過安於現狀，以免錯失發展良機。`,
            keywords: ["溫和", "福氣", "懶散"]
        }
    },
    "TianTong_Siblings": {
        key: "TianTong_Siblings",
        conditions: { palace: "兄弟宮" },
        content: {
            summary: "兄弟溫良，相處和樂。",
            description: `【現象解析】
兄弟姊妹個性溫和，好相處。手足間感情深厚，能互相照顧，少有爭執。雖然在事業上的實質助力可能不大，但精神支持強。
【給命主的建議】
應珍惜手足情深，多安排家庭聚會。心情低落時，兄弟姊妹是最好的傾訴對象。`,
            keywords: ["和睦", "溫柔"]
        }
    },
    "TianTong_Spouse": {
        key: "TianTong_Spouse",
        conditions: { palace: "夫妻宮" },
        content: {
            summary: "配偶俊美，感情和諧，防早婚。",
            description: `【現象解析】
配偶外貌俊美，與命主有"夫妻臉"。個性隨和體貼，感情生活充滿童趣與浪漫。但因天同主情緒與小孩氣，需防過度依賴或鬧小彆扭。
【給命主的建議】
婚姻中宜多製造浪漫氣氛。對於配偶的撒嬌應給予正面回應。成熟處理感情問題，避免孩子氣的爭吵。`,
            keywords: ["溫柔", "浪漫"]
        }
    },
    "TianTong_Children": {
        key: "TianTong_Children",
        conditions: { palace: "子女宮" },
        content: {
            summary: "子女乖巧，孝順依賴。",
            description: `【現象解析】
子女個性溫順乖巧，長相可愛。與父母緣分深，喜歡黏著父母。依賴心較重，獨立性稍差，但極具孝心，能讓父母老懷安慰。
【給命主的建議】
應多鼓勵子女嘗試新事物，培養其獨立自主的能力。不要過度溺愛保護，適時放手讓其成長。`,
            keywords: ["乖巧", "被動"]
        }
    },
    "TianTong_Wealth": {
        key: "TianTong_Wealth",
        conditions: { palace: "財帛宮" },
        content: {
            summary: "積少成多，輕鬆得財。",
            description: `【現象解析】
財運平穩，少有大起大落。適合從事服務業、餐飲業、旅遊業或與享樂有關的行業。賺錢心態較輕鬆，不喜與人爭利，"安享其成"。
【給命主的建議】
可透過儲蓄或購買穩定的理財商品來累積財富。不宜從事高風險的投機生意。保持知足常樂的心態，財富自會細水長流。`,
            keywords: ["安穩", "積蓄"]
        }
    },
    "TianTong_Health": {
        key: "TianTong_Health",
        conditions: { palace: "疾厄宮" },
        content: {
            summary: "腎臟膀胱，肥胖水腫。",
            description: `【現象解析】
屬水，主腎臟、膀胱、泌尿系統與耳疾。易因貪口慾而導致肥胖或代謝症候群。女性需注意婦科保養。
【給命主的建議】
飲食宜清淡，少吃甜食與油膩食物。多喝水，不憋尿。養成規律運動習慣，控制體重，有助於預防慢性病。`,
            keywords: ["泌尿", "肥胖"]
        }
    },
    "TianTong_Travel": {
        key: "TianTong_Travel",
        conditions: { palace: "遷移宮" },
        content: {
            summary: "出外平安，貴人多助。",
            description: `【現象解析】
外出運極佳，出門常遇貴人，甚至有口福。適應力強，到哪裡都能隨遇而安。適合旅遊、移民或在外地享受生活。
【給命主的建議】
可多安排旅遊行程，增廣見聞並放鬆心情。在外地發展遇困難時，不妨尋求長輩或朋友協助，多能逢凶化吉。`,
            keywords: ["平安", "人緣"]
        }
    },
    "TianTong_Friends": {
        key: "TianTong_Friends",
        conditions: { palace: "交友宮" },
        content: {
            summary: "廣結善緣，多益友。",
            description: `【現象解析】
人緣極佳，朋友眾多且來自各方。朋友多為幽默風趣、好相處之人。大家在一起多是吃喝玩樂，氣氛融洽，但少有利益上的糾葛。
【給命主的建議】
與朋友相處宜保持單純的友誼，避免涉及複雜的金錢往來。可透過朋友拓展社交圈，增加生活樂趣。`,
            keywords: ["善緣", "玩伴"]
        }
    },
    "TianTong_Career": {
        key: "TianTong_Career",
        conditions: { palace: "官祿宮" },
        content: {
            summary: "悠閒職位，文藝行政。",
            description: `【現象解析】
適合從事壓力較小、性質穩定的工作。如行政、文教、服務、餐飲、旅遊或手工藝等。工作氣氛通常較輕鬆，不喜高壓競爭之環境。
【給命主的建議】
選擇自己有興趣的行業發展，將更能持久。職場上宜保持良好的人際關係。若能將興趣與工作結合，既能賺錢又能享受，最為理想。`,
            keywords: ["行政", "服務"]
        }
    },
    "TianTong_Property": {
        key: "TianTong_Property",
        conditions: { palace: "田宅宮" },
        content: {
            summary: "承祖業，置產順利。",
            description: `【現象解析】
有機會繼承祖產或長輩贈與的房產。購屋運勢佳，容易買到喜歡的房子。居家環境多重視舒適度、水源或景觀，裝潢風格溫馨。
【給命主的建議】
居家佈置可多添置舒適的家具或擺設綠色植物。保持家中水源（如水管、魚缸）的清潔與暢通，有助於財運。`,
            keywords: ["祖產", "舒適"]
        }
    },
    "TianTong_Karma": {
        key: "TianTong_Karma",
        conditions: { palace: "福德宮" },
        content: {
            summary: "知足常樂，精神富足。",
            description: `【現象解析】
天同為福星，入福德宮主一生有福氣。個性樂觀豁達，不懂得憂愁。重視精神與物質享受，老運極佳，能安享晚年。
【給命主的建議】
應珍惜這份難得的福氣，保持開朗心情。多行善積德，讓福報延續。避免因過度安逸而變得懶散。`,
            keywords: ["快樂", "享受"]
        }
    },
    "TianTong_Parents": {
        key: "TianTong_Parents",
        conditions: { palace: "父母宮" },
        content: {
            summary: "父母慈愛，福壽雙全。",
            description: `【現象解析】
父母個性溫和慈祥，對子女疼愛有加。家庭氣氛和樂融融。父母身體健康，福壽雙全，能給予命主長久的庇蔭。
【給命主的建議】
應盡力孝順父母，回報養育之恩。多花時間陪伴父母聊天、出遊，共享天倫之樂。`,
            keywords: ["慈愛", "恩寵"]
        }
    },
    "LianZhen_Life": {
        key: "LianZhen_Life",
        conditions: { palace: "命宮" },
        content: {
            summary: "次桃花，爭名奪利，亦正亦邪。",
            description: `【性格特質】
面色黃紅，眼神靈活有力。個性狂傲，好勝心強，不服輸。社交手腕高明，帶桃花色彩。性格多變，時而嚴肅，時而幽默，令人捉摸不定。
【優勢與挑戰】
優勢在於公關能力強，能在複雜環境中生存，事業心重，具領袖欲。挑戰在於心性浮躁，易惹是非官非，且桃花過旺易招感情困擾。亦正亦邪，近朱者赤，近墨者黑。
【給命主的建議】
宜修身養性，控制脾氣與慾望。慎選朋友，遠離是非之地。將好勝心轉化為事業上的衝刺力。`,
            keywords: ["好勝", "桃花", "權謀"]
        }
    },
    "LianZhen_Siblings": {
        key: "LianZhen_Siblings",
        conditions: { palace: "兄弟宮" },
        content: {
            summary: "兄弟各異，感情多變。",
            description: `【現象解析】
兄弟姊妹個性差異大，或各奔前程。彼此之間容易有競爭心態或意見不合。關係時好時壞，較難同心協力。若遇煞星，需防手足相殘。
【給命主的建議】
與手足保持適當距離，尊重彼此的生活空間。遇事多溝通，避免意氣用事。財務往來宜清楚，以免傷感情。`,
            keywords: ["競爭", "疏離"]
        }
    },
    "LianZhen_Spouse": {
        key: "LianZhen_Spouse",
        conditions: { palace: "夫妻宮" },
        content: {
            summary: "配偶美豔，感情波折，刑剋重。",
            description: `【現象解析】
配偶外貌出眾，氣質非凡，異性緣極佳。但個性強勢，佔有慾強。婚姻生活中常因桃花問題或個性不合而爭吵，波折較多。
【給命主的建議】
選擇伴侶時重內在勝於外表。婚後應彼此信任，給予對方空間。遇爭執時宜冷靜，避免說出傷人的話。`,
            keywords: ["美貌", "爭吵"]
        }
    },
    "LianZhen_Children": {
        key: "LianZhen_Children",
        conditions: { palace: "子女宮" },
        content: {
            summary: "子女叛逆，難管教，晚年方孝。",
            description: `【現象解析】
子女個性叛逆，破壞力強，青春期時特別難管教。親子關係較為緊張。但子女聰明有主見，長大後能獨立發展，晚年反而能盡孝。
【給命主的建議】
教養子女需極大的耐心與智慧。應多傾聽子女的心聲，避免高壓統治。引導其將精力用於正途，將來必成大器。`,
            keywords: ["叛逆", "獨立"]
        }
    },
    "LianZhen_Wealth": {
        key: "LianZhen_Wealth",
        conditions: { palace: "財帛宮" },
        content: {
            summary: "偏財橫發，財來財去。",
            description: `【現象解析】
主偏財運，財源多來自競爭或投機。求財手段靈活，敢於冒險。但財運起伏劇烈，容易"橫發橫破"。若遇煞星，恐因財惹上官非。
【給命主的建議】
理財宜見好就收，不宜過度貪心。從事正當合法的投資，避免走旁門左道。應建立風險控管機制，預留後路。`,
            keywords: ["偏財", "風險"]
        }
    },
    "LianZhen_Health": {
        key: "LianZhen_Health",
        conditions: { palace: "疾厄宮" },
        content: {
            summary: "心火躁急，膿血之災。",
            description: `【現象解析】
屬火，主心血管系統、生殖系統。個性急躁易上火，導致失眠、口苦或暗瘡。需特別預防意外流血、手術或不明腫毒。
【給命主的建議】
保持心情平和，避免暴躁易怒。飲食宜清淡，少吃辛辣。定期檢查心血管與生殖系統健康。`,
            keywords: ["心火", "血光"]
        }
    },
    "LianZhen_Travel": {
        key: "LianZhen_Travel",
        conditions: { palace: "遷移宮" },
        content: {
            summary: "出外忙碌，交際頻繁。",
            description: `【現象解析】
在外交際應酬多，人緣極佳，異性緣尤甚。適合從事公關、演藝或業務性質工作。但需防在外因桃花惹禍，或交友不慎而招惹是非。
【給命主的建議】
在外言行舉止宜端莊，避免招惹爛桃花。慎選社交場所與酒肉朋友。將人脈轉化為正向的事業助力。`,
            keywords: ["交際", "是非"]
        }
    },
    "LianZhen_Friends": {
        key: "LianZhen_Friends",
        conditions: { palace: "交友宮" },
        content: {
            summary: "友多複雜，近朱者赤。",
            description: `【現象解析】
交友圈複雜，三教九流皆有。朋友中不乏有權勢或特殊才藝者，但也易混雜損友。容易受朋友影響而改變習性，近朱者赤，近墨者黑。
【給命主的建議】
應謹慎擇友，遠離品行不端之人。保持獨立思考判斷，勿隨波逐流。善用良友的正面影響力來提升自己。`,
            keywords: ["複雜", "異性"]
        }
    },
    "LianZhen_Career": {
        key: "LianZhen_Career",
        conditions: { palace: "官祿宮" },
        content: {
            summary: "武職權貴，外交公關。",
            description: `【現象解析】
工作性質多具競爭性或挑戰性。適合軍警、司法、外交、業務、電子科技或娛樂業。工作表現出色，能迅速晉升，掌握權力。
【給命主的建議】
職場上應保持積極進取的態度，但不宜過度鋒芒畢露。遵守法規與職業道德，避免因求快而走險路。`,
            keywords: ["司法", "公關"]
        }
    },
    "LianZhen_Property": {
        key: "LianZhen_Property",
        conditions: { palace: "田宅宮" },
        content: {
            summary: "祖業難守，置產波折。",
            description: `【現象解析】
繼承祖業易生波折或糾紛，或祖業難守。購屋置產過程較不順利。居家環境可能較吵雜、鄰居難相處，或附近有聲色場所。
【給命主的建議】
置產宜審慎評估，注意產權清楚。居家可安裝隔音設備以改善環境。經營家庭關係，營造和諧的氣氛。`,
            keywords: ["吵雜", "糾紛"]
        }
    },
    "LianZhen_Karma": {
        key: "LianZhen_Karma",
        conditions: { palace: "福德宮" },
        content: {
            summary: "勞碌奔波，精神緊繃。",
            description: `【現象解析】
心思複雜，多思多慮，閒不下來。喜歡追求刺激與新鮮感，精神生活起伏大。雖然外表看似風光，但內心常感空虛或焦慮。
【給命主的建議】
應尋找健康的紓壓方式，如運動、冥想。避免沈迷於酒精或賭博等不良嗜好。學習平靜心靈，享受簡單的快樂。`,
            keywords: ["奔波", "刺激"]
        }
    },
    "LianZhen_Parents": {
        key: "LianZhen_Parents",
        conditions: { palace: "父母宮" },
        content: {
            summary: "父母嚴厲，緣分較薄。",
            description: `【現象解析】
父母管教嚴格，或脾氣較為急躁。親子間溝通不良，易有衝突。命主可能早年就離開父母外出求學或工作，見面機會少。
【給命主的建議】
應理解父母望子成龍的苦心。溝通時多一分耐心與包容。即使不住在一起，也要定期問候，維持親情。`,
            keywords: ["嚴厲", "代溝"]
        }
    },
    "TianFu_Life": {
        key: "TianFu_Life",
        conditions: { palace: "命宮" },
        content: {
            summary: "財庫入命，穩重保守，衣食無憂。",
            description: `【性格特質】
面色黃白，方圓臉，眼神祥和。個性溫和沈穩，氣量寬宏，具有包容力。重面子，講究衣食享受，是天生的掌權者與管理者，但較缺乏衝勁。
【優勢與挑戰】
優勢在於守成能力極佳，財運穩定，一生衣食無憂，有"南斗帝王星"之稱。挑戰在於過於保守謹慎，略顯優柔寡斷，若無煞星激發，易流於安逸，缺乏開創大局的氣魄。
【給命主的建議】
宜從事穩定的管理工作或公職。應適度培養冒險犯難的精神，以免錯失良機。`,
            keywords: ["穩重", "財庫", "保守"]
        }
    },
    "TianFu_Siblings": {
        key: "TianFu_Siblings",
        conditions: { palace: "兄弟宮" },
        content: {
            summary: "兄弟眾多，互助得力。",
            description: `【現象解析】
兄弟姊妹眾多，或人丁旺盛。手足之間關係融洽，能互相照顧。彼此在事業或財務上能互相支援，是很好的合作夥伴。
【給命主的建議】
應珍惜手足情誼，共同維護家族利益。若有困難，不妨向兄弟姊妹開口，多能獲得實質幫助。`,
            keywords: ["互助", "有成"]
        }
    },
    "TianFu_Spouse": {
        key: "TianFu_Spouse",
        conditions: { palace: "夫妻宮" },
        content: {
            summary: "配偶能幹，親上加親。",
            description: `【現象解析】
配偶個性穩重，聰明能幹，善於持家理財。夫妻感情穩定，雖缺乏浪漫激情，但細水長流。有機會與同事、同學或舊識結合，"親上加親"。
【給命主的建議】
婚姻生活宜平實單純。應放手讓配偶管理家庭財務，必能累積財富。多安排家庭活動，增進彼此感情。`,
            keywords: ["賢能", "穩定"]
        }
    },
    "TianFu_Children": {
        key: "TianFu_Children",
        conditions: { palace: "子女宮" },
        content: {
            summary: "子女孝順，多才多藝。",
            description: `【現象解析】
子女個性溫和乖巧，孝順父母。天資聰穎，多才多藝，將來在社會上易有成就。與子女緣分深厚，晚年能享子女之福。
【給命主的建議】
應著重培養子女的品德與專長。提供良好的教育環境，讓其自由發展。親子互動宜像朋友般自然。`,
            keywords: ["孝順", "多才"]
        }
    },
    "TianFu_Wealth": {
        key: "TianFu_Wealth",
        conditions: { palace: "財帛宮" },
        content: {
            summary: "財庫豐盈，積蓄致富。",
            description: `【現象解析】
天府為財庫，入財帛宮主財源穩定，且能守財。不喜歡高風險的投機，傾向於儲蓄、置產或穩健投資。財富隨年齡增長而累積，越老越富。
【給命主的建議】
理財應採取保守穩健的策略。適合購買房地產或儲蓄型保險。避免因貪小便宜而因小失大。`,
            keywords: ["儲蓄", "穩健"]
        }
    },
    "TianFu_Health": {
        key: "TianFu_Health",
        conditions: { palace: "疾厄宮" },
        content: {
            summary: "脾胃消化，注意保養。",
            description: `【現象解析】
屬土，主脾胃、消化系統。中年以後容易發福，需注意代謝症候群。大體上健康運勢良好，少有重大疾病。
【給命主的建議】
飲食宜定時定量，避免暴飲暴食。維持規律運動，控制體重。保持心情愉快，有助於消化系統健康。`,
            keywords: ["脾胃", "發福"]
        }
    },
    "TianFu_Travel": {
        key: "TianFu_Travel",
        conditions: { palace: "遷移宮" },
        content: {
            summary: "出外遇貴，平安順遂。",
            description: `【現象解析】
外出運勢極佳，出門常遇貴人提拔。適應力強，到哪裡都能安居樂業。在外地發展順利，較少遇到波折或意外。
【給命主的建議】
不妨大膽向外發展，拓展生活圈。多參加社交活動，建立人脈。旅遊或出差皆能帶來好運。`,
            keywords: ["平安", "順遂"]
        }
    },
    "TianFu_Friends": {
        key: "TianFu_Friends",
        conditions: { palace: "交友宮" },
        content: {
            summary: "友多權貴，忠信可靠。",
            description: `【現象解析】
交友廣闊，且多為有地位、有財力之人士。朋友個性穩重，講信用，值得信賴。能從朋友處獲得實質的幫助或商機。
【給命主的建議】
應多結交正直誠信的朋友。與朋友互動應保持禮尚往來。可透過朋友關係拓展事業版圖。`,
            keywords: ["權貴", "忠信"]
        }
    },
    "TianFu_Career": {
        key: "TianFu_Career",
        conditions: { palace: "官祿宮" },
        content: {
            summary: "文武皆宜，高官厚祿。",
            description: `【現象解析】
事業運勢平穩向上。適合從事行政、財經、企業管理、公職或建築業。工作表現穩重，能得長官賞識，逐步升遷至高位。
【給命主的建議】
應在工作崗位上盡忠職守，累積資歷。不宜頻繁換工作或冒險創業。適合在大企業或體制內發展。`,
            keywords: ["行政", "高位"]
        }
    },
    "TianFu_Property": {
        key: "TianFu_Property",
        conditions: { palace: "田宅宮" },
        content: {
            summary: "繼承祖業，豪宅廣廈。",
            description: `【現象解析】
天府入田宅宮為得地。主能繼承祖業，或自置房產順利。喜居住寬敞、氣派、地段佳的房子。不動產運勢極強，能因房致富。
【給命主的建議】
有錢宜優先置產，視房屋為一種儲蓄。居家佈置宜大氣典雅。可多邀朋友到家中聚會，增加人氣。`,
            keywords: ["豪宅", "置產"]
        }
    },
    "TianFu_Karma": {
        key: "TianFu_Karma",
        conditions: { palace: "福德宮" },
        content: {
            summary: "知足常樂，享福之人。",
            description: `【現象解析】
福分深厚，心胸寬廣，懂得享受生活。個性樂觀，不愛鑽牛角尖。物質生活優渥，精神世界也能保持愉快滿足。
【給命主的建議】
應珍惜當下的幸福，保持感恩的心。可多參與藝文活動或美食饗宴，提升生活品質。行有餘力宜多回饋社會。`,
            keywords: ["享福", "樂觀"]
        }
    },
    "TianFu_Parents": {
        key: "TianFu_Parents",
        conditions: { palace: "父母宮" },
        content: {
            summary: "父母慈祥，得其資助。",
            description: `【現象解析】
父母個性溫和慈祥，對子女呵護備至。家庭環境富裕，父母能給予命主充足的物質支持與良好的教育。親子感情深厚。
【給命主的建議】
應盡孝道，陪伴父母。可承接父母的事業或資源，將其發揚光大。若父母年邁，應多關注其身體健康。`,
            keywords: ["慈祥", "資助"]
        }
    },
    "TaiYin_Life": {
        key: "TaiYin_Life",
        conditions: { palace: "命宮" },
        content: {
            summary: "溫柔婉約，重情重義，田宅主。",
            description: `【性格特質】
面色青白，臉圓秀氣。個性溫和內斂，善解人意。外表似柔弱，內心卻有韌性。喜愛整潔，具藝術氣息，重感情，多愁善感。
【優勢與挑戰】
優勢在於心思細膩，具審美觀，人緣極佳，尤其得女性長輩之助。挑戰在於性格較被動，多疑善妒，且易感情用事，缺乏果斷力。
【給命主的建議】
宜從事藝術、美學或不動產相關行業。學習更加自信與果斷，不要過度依賴他人或感情。`,
            keywords: ["溫柔", "感性", "潔癖"]
        }
    },
    "TaiYin_Siblings": {
        key: "TaiYin_Siblings",
        conditions: { palace: "兄弟宮" },
        content: {
            summary: "姊妹緣深，互助情濃。",
            description: `【現象解析】
姊妹眾多，或與女性手足緣分較深。兄弟姊妹間感情細膩，能互相體貼照顧。若命主為長女，則更具母性光輝，照顧弟妹。
【給命主的建議】
應多與手足談心，分享生活點滴。女性手足是不可多得的貴人，應好好珍惜。`,
            keywords: ["姊妹", "細膩"]
        }
    },
    "TaiYin_Spouse": {
        key: "TaiYin_Spouse",
        conditions: { palace: "夫妻宮" },
        content: {
            summary: "配偶俊美，男得賢妻，女嫁貴夫。",
            description: `【現象解析】
配偶外貌清秀俊美，氣質優雅。個性溫柔體貼，善解人意。男命主得賢內助，能持家有方；女命主嫁貴夫，婚姻美滿。
【給命主的建議】
婚姻生活中宜多些浪漫與情調。彼此應多溝通內心感受，避免將心事藏在心裡。欣賞對方的柔情與體貼。`,
            keywords: ["溫柔", "俊美"]
        }
    },
    "TaiYin_Children": {
        key: "TaiYin_Children",
        conditions: { palace: "子女宮" },
        content: {
            summary: "女多男少，聰明乖巧。",
            description: `【現象解析】
先生女、後生男，或女兒較多。子女個性文靜乖巧，深具藝術天分或文學氣息。孝順父母，與母親緣分尤深。
【給命主的建議】
應發掘子女的藝術潛能，給予適當的栽培。教養方式宜溫柔引導，避免嚴厲責罵。`,
            keywords: ["乖巧", "藝術"]
        }
    },
    "TaiYin_Wealth": {
        key: "TaiYin_Wealth",
        conditions: { palace: "財帛宮" },
        content: {
            summary: "財源穩定，積蓄成家。",
            description: `【現象解析】
財運平穩，少有大起大落。適合從事穩定的工作，利用各種儲蓄方式累積財富。對不動產投資有興趣，能從收租或房產增值中獲利。
【給命主的建議】
理財宜採取"聚沙成塔"的策略。適合購買不動產或穩健型基金。不宜從事高風險的投機活動。`,
            keywords: ["積蓄", "不動產"]
        }
    },
    "TaiYin_Health": {
        key: "TaiYin_Health",
        conditions: { palace: "疾厄宮" },
        content: {
            summary: "內分泌，婦科眼疾。",
            description: `【現象解析】
屬水，主腎臟、泌尿系統、生殖系統。女性需預防婦科疾病。此外，容易有內分泌失調、神經衰弱或視力減退的問題。
【給命主的建議】
應保持規律的作息，避免熬夜。多喝水，不憋尿。女性應定期做婦科檢查。注意視力保健。`,
            keywords: ["婦科", "內分泌"]
        }
    },
    "TaiYin_Travel": {
        key: "TaiYin_Travel",
        conditions: { palace: "遷移宮" },
        content: {
            summary: "出外人緣佳，女性貴人。",
            description: `【現象解析】
喜愛旅遊，外出運勢佳。在異地容易得到女性貴人或異性的幫助。夜間活動或夜間工作較為順利。
【給命主的建議】
不妨多安排旅遊行程，放鬆身心。在外地發展時，可多與女性同仁或客戶建立良好關係。`,
            keywords: ["人緣", "女性"]
        }
    },
    "TaiYin_Friends": {
        key: "TaiYin_Friends",
        conditions: { palace: "交友宮" },
        content: {
            summary: "女性緣佳，部屬柔順。",
            description: `【現象解析】
異性緣極佳，朋友中女性佔多數。部屬或合作夥伴個性溫柔順從，配合度高，但可能較缺乏魄力。
【給命主的建議】
與異性朋友交往應保持適當界線。領導部屬時，應多給予鼓勵與明確的指令，補其魄力之不足。`,
            keywords: ["異性", "柔順"]
        }
    },
    "TaiYin_Career": {
        key: "TaiYin_Career",
        conditions: { palace: "官祿宮" },
        content: {
            summary: "文靜職務，藝術設計。",
            description: `【現象解析】
適合從事安靜、穩定、具有美感或服務性質的工作。如內勤、秘書、文教、房地產、建築設計、藝術創作等。工作環境多單純優雅。
【給命主的建議】
應選擇自己感興趣且環境單純的行業。工作中可發揮細膩的觀察力與美學素養。不宜從事競爭激烈或粗重的工作。`,
            keywords: ["內勤", "藝術"]
        }
    },
    "TaiYin_Property": {
        key: "TaiYin_Property",
        conditions: { palace: "田宅宮" },
        content: {
            summary: "最喜入田宅，房產豐富。",
            description: `【現象解析】
太陰為田宅主，入田宅宮為最佳位置。主不動產運勢極強，能自置多處房產。喜居住在環境清幽、近水或花草繁茂之處。
【給命主的建議】
投資房地產是最佳的致富途徑。購屋時可注重景觀與環境品質。居家佈置宜溫馨典雅，可擺設魚缸或水景招財。`,
            keywords: ["置產", "幽雅"]
        }
    },
    "TaiYin_Karma": {
        key: "TaiYin_Karma",
        conditions: { palace: "福德宮" },
        content: {
            summary: "浪漫重情，精神享受。",
            description: `【現象解析】
重視精神層面的滿足，喜好藝術、文學或美的事物。個性浪漫，愛乾淨，有潔癖傾向。男命易有桃花艷福，異性緣好。
【給命主的建議】
多接觸藝文活動，陶冶性情。維持居家與儀容的整潔，能提升運勢。感情上應專一，避免濫情。`,
            keywords: ["浪漫", "整潔"]
        }
    },
    "TaiYin_Parents": {
        key: "TaiYin_Parents",
        conditions: { palace: "父母宮" },
        content: {
            summary: "母緣深厚，享母之福。",
            description: `【現象解析】
與母親緣分極深，受母親影響很大。父母個性慈愛，家庭氣氛溫馨。能得到父母在物質與精神上的雙重支持。
【給命主的建議】
應盡孝道，特別是多陪伴母親。在人生重大決定上，不妨多聽取母親的建議。`,
            keywords: ["母緣", "慈愛"]
        }
    },
    "TanLang_Life": {
        key: "TanLang_Life",
        conditions: { palace: "命宮" },
        content: {
            summary: "多才多藝，桃花慾望，靈活圓滑。",
            description: `【性格特質】
面色青白或黃，眼神靈活帶煞。聰明機智，多才多藝，好奇心強，喜神仙之術。性格善變，圓滑且八面玲瓏，是第一大桃花星。
【優勢與挑戰】
優勢在於交際手腕高明，能言善道，適應力極強。挑戰在於慾望無窮，喜好漁色或投機，若無制化易流於浮華，甚至因色惹禍。
【給命主的建議】
宜修身養性，將桃花轉化為人緣，將慾望轉化為學習動力。適合從事公關、娛樂或身心靈產業。`,
            keywords: ["桃花", "慾望", "才藝"]
        }
    },
    "TanLang_Siblings": {
        key: "TanLang_Siblings",
        conditions: { palace: "兄弟宮" },
        content: {
            summary: "兄弟各異，緣分不一。",
            description: `【現象解析】
兄弟姊妹個性差異大，或為同父異母所生。彼此之間關係複雜，時好時壞。各自獨立發展，較難有共同的目標或合作。
【給命主的建議】
與手足相處宜保持客氣，互不干涉私生活。若有糾紛，宜冷靜處理，不宜意氣用事。`,
            keywords: ["複雜", "獨立"]
        }
    },
    "TanLang_Spouse": {
        key: "TanLang_Spouse",
        conditions: { palace: "夫妻宮" },
        content: {
            summary: "感情多變，防第三者，晚婚吉。",
            description: `【現象解析】
配偶外貌出眾，才華洋溢，異性緣極佳。夫妻感情波動大，容易受到外界誘惑，或有第三者介入。適合晚婚或年齡差距大者。
【給命主的建議】
婚姻中應保持新鮮感，多安排浪漫的約會。彼此應互相信任，但不宜過度放縱。需防範桃花劫對家庭的破壞。`,
            keywords: ["多變", "桃花"]
        }
    },
    "TanLang_Children": {
        key: "TanLang_Children",
        conditions: { palace: "子女宮" },
        content: {
            summary: "子女聰慧，個性好強。",
            description: `【現象解析】
子女天資聰穎，反應快，但個性頑皮好動，好勝心強。在藝術或才藝方面有特殊天分。長大後獨立自主，與父母緣分稍淺。
【給命主的建議】
應注重子女的品德教育，引導其正確的價值觀。鼓勵其發展才藝，發洩過剩的精力。`,
            keywords: ["聰慧", "好強"]
        }
    },
    "TanLang_Wealth": {
        key: "TanLang_Wealth",
        conditions: { palace: "財帛宮" },
        content: {
            summary: "偏財投機，財來財去。",
            description: `【現象解析】
偏財運旺盛，財源多來自娛樂、投機、博彩或服務業。賺錢容易，來得快去得也快。花錢大方，喜好享受，較難守財。
【給命主的建議】
理財宜設定強制儲蓄計畫。投資應分散風險，不宜孤注一擲。避免因酒色財氣而耗損錢財。`,
            keywords: ["偏財", "投機"]
        }
    },
    "TanLang_Health": {
        key: "TanLang_Health",
        conditions: { palace: "疾厄宮" },
        content: {
            summary: "肝膽腎虧，性病疑難。",
            description: `【現象解析】
主肝膽、腎臟與泌尿生殖系統。容易因應酬過多、熬夜或縱慾過度而導致健康問題。需特別防範性相關疾病。
【給命主的建議】
生活作息應規律，減少不必要的應酬。節制慾望，保持單一性伴侶。定期做肝腎功能與生殖系統檢查。`,
            keywords: ["肝膽", "縱慾"]
        }
    },
    "TanLang_Travel": {
        key: "TanLang_Travel",
        conditions: { palace: "遷移宮" },
        content: {
            summary: "出外風光，桃花遍地。",
            description: `【現象解析】
外出運佳，交際應酬多，生活多采多姿。在異地異性緣極佳，容易發生艷遇。適應力強，喜歡流連於聲色娛樂場所。
【給命主的建議】
在外宜潔身自愛，避免涉足不當場所。善用良好的人際關係拓展事業。注意飲食衛生與交通安全。`,
            keywords: ["交際", "桃花"]
        }
    },
    "TanLang_Friends": {
        key: "TanLang_Friends",
        conditions: { palace: "交友宮" },
        content: {
            summary: "三教九流，損友難防。",
            description: `【現象解析】
交友廣闊，三教九流無所不包。朋友多為吃喝玩樂的酒肉朋友。容易受朋友引誘而染上不良嗜好，或因朋友而破財。
【給命主的建議】
應審慎過濾朋友圈，遠離損友。拒絕不必要的應酬與誘惑。與朋友有金錢往來應特別小心。`,
            keywords: ["複雜", "損友"]
        }
    },
    "TanLang_Career": {
        key: "TanLang_Career",
        conditions: { palace: "官祿宮" },
        content: {
            summary: "變動行業，交際手腕。",
            description: `【現象解析】
適合從事變動性大、具挑戰性或需頻繁接觸人群的工作。如娛樂、公關、演藝、餐飲、美容或業務推廣。工作需靠靈活的手腕與創意。
【給命主的建議】
應發揮長袖善舞的特質，建立良好的人脈網。工作中宜保持創新，避免墨守成規。注意職場上的桃花問題。`,
            keywords: ["公關", "娛樂"]
        }
    },
    "TanLang_Property": {
        key: "TanLang_Property",
        conditions: { palace: "田宅宮" },
        content: {
            summary: "無祖業，晚年置產。",
            description: `【現象解析】
早年較難繼承祖產，或祖產難守。中年以後，隨著事業發展，方有能力自行置產。住家環境可能較為雜亂，或靠近市場、娛樂區。
【給命主的建議】
年輕時應努力存錢，為將來置產做準備。購屋時應注意周邊環境的單純性。居家裝潢可採現代時尚風格。`,
            keywords: ["晚置", "雜亂"]
        }
    },
    "TanLang_Karma": {
        key: "TanLang_Karma",
        conditions: { palace: "福德宮" },
        content: {
            summary: "縱情聲色，勞心勞力。",
            description: `【現象解析】
慾望強烈，難以滿足。喜歡追求感官刺激與新鮮事物，喜新厭舊。精神生活雖然豐富，但常因慾求不滿而感到空虛。
【給命主的建議】
應修心養性，降低對物質與感官的依賴。學習知足常樂，尋找心靈層面的平靜與滿足。`,
            keywords: ["慾望", "享受"]
        }
    },
    "TanLang_Parents": {
        key: "TanLang_Parents",
        conditions: { palace: "父母宮" },
        content: {
            summary: "父母緣薄，或遠離。",
            description: `【現象解析】
與父母緣分較淺，或者父母感情較為複雜（如再婚、偏房等）。命主可能很早就離家自立，與父母互動較少。
【給命主的建議】
應尊重父母的生活選擇。保持定期的聯繫與問候。若父母感情有變，宜以成熟的態度面對。`,
            keywords: ["緣薄", "複雜"]
        }
    },
    "JuMen_Life": {
        key: "JuMen_Life",
        conditions: { palace: "命宮" },
        content: {
            summary: "口才便給，是非口舌，暗昧疑多。",
            description: `【性格特質】
面色青黃，目光銳利。心思深沉，多疑善辯，觀察力極強。擅長分析與研究，口才極佳，但言語往往犀利傷人。
【優勢與挑戰】
優勢在於能言善道，適合需要口才或高度專業的行業（如律師、講師）。挑戰在於易犯小人，招惹是非口舌，且內心常感孤獨不安，人際關係較緊張。
【給命主的建議】
應修得"口德"，言多必失，少說多做。培養開朗的心胸，多看人之長，少挑人之短。`,
            keywords: ["口才", "是非", "多疑"]
        }
    },
    "JuMen_Siblings": {
        key: "JuMen_Siblings",
        conditions: { palace: "兄弟宮" },
        content: {
            summary: "兄弟不和，口角頻傳。",
            description: `【現象解析】
兄弟姊妹間意見分歧，溝通不良。常因為言語上的誤會而發生口角爭吵。彼此面和心不和，缺乏實質的助力。
【給命主的建議】
與手足相處宜多包容，少爭辯。對於意見不合之處，不妨求同存異。若有財產分配問題，及早釐清為宜。`,
            keywords: ["爭吵", "不和"]
        }
    },
    "JuMen_Spouse": {
        key: "JuMen_Spouse",
        conditions: { palace: "夫妻宮" },
        content: {
            summary: "溝通不良，是非多端，隔閡重。",
            description: `【現象解析】
配偶口才佳但喜嘮叨，或說話過於直接傷人。夫妻間常因瑣事而不斷爭吵，甚至冷戰。彼此猜忌心重，感情易有隔閡，難以坦誠相對。
【給命主的建議】
婚姻中"沈默是金"有時是必要的智慧。溝通時應多傾聽，少批評。培養共同的興趣，轉移對彼此缺點的注意力。`,
            keywords: ["口角", "隔閡"]
        }
    },
    "JuMen_Children": {
        key: "JuMen_Children",
        conditions: { palace: "子女宮" },
        content: {
            summary: "子女難帶，言語頂撞。",
            description: `【現象解析】
子女口齒伶俐，喜歡與父母爭辯。個性較為反骨，不易管教。親子間代溝明顯，溝通時常充滿火藥味。
【給命主的建議】
應給予子女解釋的機會，不要一味壓制。引導其學習辯論或演講，發揮口才天賦。保持適當的距離感，反而有助關係。`,
            keywords: ["頂撞", "代溝"]
        }
    },
    "JuMen_Wealth": {
        key: "JuMen_Wealth",
        conditions: { palace: "財帛宮" },
        content: {
            summary: "口舌生財，勞心費力。",
            description: `【現象解析】
憑藉口才或專業技能賺錢，如律師、講師、推銷員等。財運多是在激烈的競爭或是非中求得，過程勞心費力。需防因口舌而破財。
【給命主的建議】
適合從事"動口不動手"的行業。理財上應以守為主，不宜從事高風險的投機。與人簽約時需仔細審閱條款。`,
            keywords: ["口才", "競爭"]
        }
    },
    "JuMen_Health": {
        key: "JuMen_Health",
        conditions: { palace: "疾厄宮" },
        content: {
            summary: "呼吸消化，暗疾雜症。",
            description: `【現象解析】
屬水，主脾胃、呼吸道與皮膚。易患哮喘、胃病或不明原因的過敏、暗疾。巨門為暗星，病況有時較不明顯或難以診斷。
【給命主的建議】
飲食宜清淡，少吃刺激性食物。注意環境衛生，預防皮膚病。若有長期不適，應做詳細檢查。`,
            keywords: ["呼吸", "暗疾"]
        }
    },
    "JuMen_Travel": {
        key: "JuMen_Travel",
        conditions: { palace: "遷移宮" },
        content: {
            summary: "出外是非，口舌糾紛。",
            description: `【現象解析】
在外地容易招惹小人，或者發生口舌糾紛。雖然適應力強，但心境上常感到疲憊與不安。需特別留意人際關係的處理。
【給命主的建議】
出門在外宜謹言慎行，多做事少說話。遇到是非宜忍讓，以免擴大衝突。`,
            keywords: ["是非", "小人"]
        }
    },
    "JuMen_Friends": {
        key: "JuMen_Friends",
        conditions: { palace: "交友宮" },
        content: {
            summary: "始善終惡，知己難求。",
            description: `【現象解析】
初交時熱絡，久處後易生嫌隙。朋友間多口舌之爭，或容易被誤解、背叛。知心朋友少，多為泛泛之交。
【給命主的建議】
交友不宜太快推心置腹。保持淡如水的君子之交，反而能長久。對於流言蜚語應一笑置之。`,
            keywords: ["背叛", "口舌"]
        }
    },
    "JuMen_Career": {
        key: "JuMen_Career",
        conditions: { palace: "官祿宮" },
        content: {
            summary: "學術法律，口才行業。",
            description: `【現象解析】
適合從事以口為業，或需高度專業技能的工作。如律師、法官、教授、醫師、演說家等。工作性質多與是非判斷、學術研究有關。
【給命主的建議】
應不斷精進專業知識，成為該領域的權威。職場上應保持客觀中立，避免捲入派系鬥爭。`,
            keywords: ["法律", "學術"]
        }
    },
    "JuMen_Property": {
        key: "JuMen_Property",
        conditions: { palace: "田宅宮" },
        content: {
            summary: "家宅是非，門戶不安。",
            description: `【現象解析】
居家環境可能較為潮濕陰暗，或附近有水溝、鐵道等噪音干擾。家產繼承方面易有糾紛。家庭內部氣氛較為緊繃。
【給命主的建議】
居家宜加強除濕與隔音設施。保持家中明亮通風，以化解陰暗之氣。處理房產問題需有法律憑據。`,
            keywords: ["糾紛", "暗巷"]
        }
    },
    "JuMen_Karma": {
        key: "JuMen_Karma",
        conditions: { palace: "福德宮" },
        content: {
            summary: "勞心費神，鑽牛角尖。",
            description: `【現象解析】
思慮深沉，疑心病重。凡事喜歡打破砂鍋問到底，難得糊塗。精神上容易焦慮不安，較難真正放鬆享受。
【給命主的建議】
應學習轉化心念，以正向思考取代懷疑。多接觸大自然或宗教，讓心靈沉澱。`,
            keywords: ["勞神", "多慮"]
        }
    },
    "JuMen_Parents": {
        key: "JuMen_Parents",
        conditions: { palace: "父母宮" },
        content: {
            summary: "父母嚴厲，代溝明顯。",
            description: `【現象解析】
與父母之間溝通不易，常因觀念不同而爭執。父母管教方式可能較為嚴厲或嘮叨。命主與長輩緣分較淺。
【給命主的建議】
應盡量避免正面頂撞，多用婉轉的方式表達意見。保持適當的距離，能減少摩擦，維持親情。`,
            keywords: ["代溝", "爭執"]
        }
    },
    "TianXiang_Life": {
        key: "TianXiang_Life",
        conditions: { palace: "命宮" },
        content: {
            summary: "宰相之星，敦厚穩重，樂於助人。",
            description: `【性格特質】
面色白皙，體態豐滿。個性誠懇擔當，為人正直，樂於排解紛爭。重視外表儀態與美食享受。本身缺乏強烈的開創力，但極具輔佐之才。
【優勢與挑戰】
優勢在於處事公正，人緣好，是極佳的幕僚長與協調者。挑戰在於易受環境左右，若遇煞星則易隨波逐流，或替人背黑鍋。
【給命主的建議】
適合擔任高階主管的輔佐、秘書或公職人員。應慎選跟隨的對象，好的環境能讓你發揮最大的價值。`,
            keywords: ["輔佐", "穩重", "衣食"]
        }
    },
    "TianXiang_Siblings": {
        key: "TianXiang_Siblings",
        conditions: { palace: "兄弟宮" },
        content: {
            summary: "兄弟和睦，情深義重。",
            description: `【現象解析】
兄弟姊妹個性敦厚誠懇，感情深厚。彼此能互相扶持，互通有無。在事業或生活上，手足是最可靠的後盾。
【給命主的建議】
應珍惜這份手足之情，多與兄弟得妹互動。若有共同創業的機會，成功機率極高。`,
            keywords: ["和睦", "關照"]
        }
    },
    "TianXiang_Spouse": {
        key: "TianXiang_Spouse",
        conditions: { palace: "夫妻宮" },
        content: {
            summary: "親上加親，配偶賢淑，如膠似漆。",
            description: `【現象解析】
配偶氣質端莊，個性賢淑溫和。雙方多為舊識、同學或同事，感情基礎深厚。婚姻生活穩定幸福，能夫唱婦隨。
【給命主的建議】
婚姻中宜保持誠信與忠貞。共同經營家庭，分享生活中的喜怒哀樂。平凡的幸福最長久。`,
            keywords: ["舊識", "賢淑"]
        }
    },
    "TianXiang_Children": {
        key: "TianXiang_Children",
        conditions: { palace: "子女宮" },
        content: {
            summary: "子女敦厚，誠實聽話。",
            description: `【現象解析】
子女個性溫和，誠實不說謊。雖然不一定絕頂聰明，但品德良好，守規矩。與父母關係融洽，能盡孝道。
【給命主的建議】
應重視子女的品格教育。鼓勵其按部就班發展，給予足夠的安全感與支持。`,
            keywords: ["敦厚", "品德"]
        }
    },
    "TianXiang_Wealth": {
        key: "TianXiang_Wealth",
        conditions: { palace: "財帛宮" },
        content: {
            summary: "正財穩定，理財保守。",
            description: `【現象解析】
財運主要來自穩定的薪資或專業收入。擅長理財儲蓄，不喜歡高風險投資。財富累積雖慢但穩固，不易破財。
【給命主的建議】
理財宜採取穩健保守的策略，如定存、保險或績優股。適合從事服務業或專業技術工作。`,
            keywords: ["穩定", "保守"]
        }
    },
    "TianXiang_Health": {
        key: "TianXiang_Health",
        conditions: { palace: "疾厄宮" },
        content: {
            summary: "腎臟膀胱，皮膚過敏。",
            description: `【現象解析】
屬水，主下半身、泌尿系統、腎臟膀胱。易患有皮膚過敏、濕疹或糖尿病等代謝疾病。健康狀況大致平穩。
【給命主的建議】
注意飲食控制，減少糖分攝取。保持皮膚清潔與保濕。多喝水，促進新陳代謝。`,
            keywords: ["泌尿", "皮膚"]
        }
    },
    "TianXiang_Travel": {
        key: "TianXiang_Travel",
        conditions: { palace: "遷移宮" },
        content: {
            summary: "出外受歡迎，人緣極佳。",
            description: `【現象解析】
外出運勢吉利，人緣極佳。在異地常有人招待或幫助，生活便利。適合向外發展，能快速適應新環境。
【給命主的建議】
不妨多參加社交應酬，拓展人脈。利用良好的人緣推展業務或工作。`,
            keywords: ["人緣", "吉利"]
        }
    },
    "TianXiang_Friends": {
        key: "TianXiang_Friends",
        conditions: { palace: "交友宮" },
        content: {
            summary: "友多忠誠，得力助手。",
            description: `【現象解析】
朋友多為正直、誠懇之人。部屬忠心耿耿，能為命主分憂解勞。人際關係和諧，少有紛爭。
【給命主的建議】
應善待朋友與部屬，給予適當的回饋。建立互信互助的團隊，共同成就事業。`,
            keywords: ["忠誠", "得力"]
        }
    },
    "TianXiang_Career": {
        key: "TianXiang_Career",
        conditions: { palace: "官祿宮" },
        content: {
            summary: "行政管理，幕僚秘書。",
            description: `【現象解析】
適合從事行政、管理、秘書、公關、服務或佐理性質的工作。能勝任高階主管的幕僚長角色，位高權重。
【給命主的建議】
應培養協調溝通的能力，成為團隊中的潤滑劑。在工作中展現細心與負責的態度，必能獲得重用。`,
            keywords: ["行政", "秘書"]
        }
    },
    "TianXiang_Property": {
        key: "TianXiang_Property",
        conditions: { palace: "田宅宮" },
        content: {
            summary: "繼承家業，居家高雅。",
            description: `【現象解析】
有機會繼承長輩留下的房產。喜居住在環境優雅、秩序良好的社區。居家佈置講究品味與舒適，常鄰近服務性機構。
【給命主的建議】
置產時可優先選擇管理完善的社區。居家環境的舒適度對運勢有加分效果。`,
            keywords: ["高雅", "置產"]
        }
    },
    "TianXiang_Karma": {
        key: "TianXiang_Karma",
        conditions: { palace: "福德宮" },
        content: {
            summary: "知足常樂，重物質享受。",
            description: `【現象解析】
重視物質生活與外表儀態。喜愛美食、華服，生活品味高。精神愉快，知足常樂，但也可能略顯虛榮。
【給命主的建議】
應量入為出，避免過度追求名牌或奢侈品。在物質享受之餘，也應充實內在涵養。`,
            keywords: ["享受", "品質"]
        }
    },
    "TianXiang_Parents": {
        key: "TianXiang_Parents",
        conditions: { palace: "父母宮" },
        content: {
            summary: "父母慈愛，開明有禮。",
            description: `【現象解析】
父母個性開明，講理且重禮儀。對子女管教方式民主，給予很大的發展空間。家庭氣氛和諧溫馨。
【給命主的建議】
應學習父母的處世智慧與修養。多與父母溝通，保持良好的互動關係。`,
            keywords: ["開明", "和諧"]
        }
    },
    "TianLiang_Life": {
        key: "TianLiang_Life",
        conditions: { palace: "命宮" },
        content: {
            summary: "老人星，成熟穩重，逢凶化吉。",
            description: `【性格特質】
面色黃白，長臉，慈眉善目。個性老成持重，喜愛照顧他人，具俠義心腸。為人清高，不喜與人爭利，但有時愛說教，略顯嘮叨。"蔭星"入命，遇難呈祥。
【優勢與挑戰】
優勢在於心地善良，做事穩健，受人敬重，且有逢凶化吉之運。挑戰在於"逢凶"才能"化吉"，故人生免不了先遇波折。且過於固執己見，易給人倚老賣老之感。
【給命主的建議】
宜多行善積德，發揮服務精神。適合從事醫療、教育、公職或社會服務工作。保持謙虛，避免過度干涉他人。`,
            keywords: ["成熟", "蔭星", "說教"]
        }
    },
    "TianLiang_Siblings": {
        key: "TianLiang_Siblings",
        conditions: { palace: "兄弟宮" },
        content: {
            summary: "兄弟寬厚，互敬互重。",
            description: `【現象解析】
兄弟姊妹間年齡差距可能較大，或者思想較早熟。長兄或長姊如父母般照顧弟妹。感情融洽，懂得互敬互重。
【給命主的建議】
應尊重兄長，愛護弟妹。在家族中扮演和事佬的角色，維繫親情。`,
            keywords: ["照顧", "融洽"]
        }
    },
    "TianLiang_Spouse": {
        key: "TianLiang_Spouse",
        conditions: { palace: "夫妻宮" },
        content: {
            summary: "老少配佳，配偶穩重，波折後成。",
            description: `【現象解析】
配偶個性成熟穩重，具長者風範。適合"老少配"，即年齡差距較大的婚姻。婚前可能經歷波折，婚後感情反而穩定，如兄妹或父女般。
【給命主的建議】
選擇伴侶時宜重內涵與責任感。婚姻中應互相包容，多聽取配偶的意見。珍惜這份亦師亦友的感情。`,
            keywords: ["老少配", "穩重"]
        }
    },
    "TianLiang_Children": {
        key: "TianLiang_Children",
        conditions: { palace: "子女宮" },
        content: {
            summary: "子女早熟，孝順有禮。",
            description: `【現象解析】
子女個性早熟，懂事聽話，像個"小大人"。對父母孝順有禮，不需父母太過操心。雖然可能較缺乏童真，但將來有成。
【給命主的建議】
應給予子女適當的童年樂趣，不要過早要求其承擔責任。多與子女像朋友般交流，分享人生經驗。`,
            keywords: ["早熟", "孝順"]
        }
    },
    "TianLiang_Wealth": {
        key: "TianLiang_Wealth",
        conditions: { palace: "財帛宮" },
        content: {
            summary: "名大於利，祖產蔭財。",
            description: `【現象解析】
對錢財看得很淡，不喜與人爭利。但財源往往因名聲或長輩庇蔭而來。適合從事公職、顧問、醫藥或股票投資。財富有驚無險。
【給命主的建議】
應重視名譽的累積，財富自然隨之而來。可繼承祖產或長輩事業。理財宜保守，不宜過度投機。`,
            keywords: ["蔭財", "專業"]
        }
    },
    "TianLiang_Health": {
        key: "TianLiang_Health",
        conditions: { palace: "疾厄宮" },
        content: {
            summary: "脾胃消化，乳房病變。",
            description: `【現象解析】
屬土，主腸胃消化系統。女性需特別注意乳房相關疾病。天梁為蔭星，縱有大病也能逢凶化吉，轉危為安。
【給命主的建議】
飲食宜清淡，定時定量。女性應定期做乳房檢查。保持樂觀的心情有助於病情康復。`,
            keywords: ["腸胃", "乳房"]
        }
    },
    "TianLiang_Travel": {
        key: "TianLiang_Travel",
        conditions: { palace: "遷移宮" },
        content: {
            summary: "出外長輩緣，遇難呈祥。",
            description: `【現象解析】
外出運勢雖偶有波折，但終能化險為夷。在異地易得長者或貴人提拔，受人敬重。適合到外地發展或求學。
【給命主的建議】
在外遇到困難時，不妨向長輩求助。多行善事，能增加逢凶化吉的好運。`,
            keywords: ["長輩緣", "化吉"]
        }
    },
    "TianLiang_Friends": {
        key: "TianLiang_Friends",
        conditions: { palace: "交友宮" },
        content: {
            summary: "忘年之交，益友良師。",
            description: `【現象解析】
朋友多為年長、有德望或專業人士。能結交到益友，少有損友。與朋友相處像師生般，能獲得良多的教益。
【給命主的建議】
應多結交良師益友，虛心請教。參與公益或宗教團體，能認識志同道合的朋友。`,
            keywords: ["忘年", "益友"]
        }
    },
    "TianLiang_Career": {
        key: "TianLiang_Career",
        conditions: { palace: "官祿宮" },
        content: {
            summary: "監察醫療，公職清高。",
            description: `【現象解析】
適合從事清高、具有監督或服務性質的工作。如公職、監察、法律、醫療、宗教、教育等。在職場上受人尊敬，地位崇高。
【給命主的建議】
應保持清廉自持的作風，不與人同流合汙。發揮專業知能，服務社會大眾。不宜從事商業氣息太重的行業。`,
            keywords: ["清高", "監察"]
        }
    },
    "TianLiang_Property": {
        key: "TianLiang_Property",
        conditions: { palace: "田宅宮" },
        content: {
            summary: "祖業豐厚，積德之家。",
            description: `【現象解析】
易繼承祖產或古厝。住家環境安靜清幽，可能鄰近醫院、養老院或寺廟。居家氣氛傳統而和諧。
【給命主的建議】
應妥善守護祖業。居家可擺設神位或宗教文物以求平安。與鄰居保持和睦關係。`,
            keywords: ["祖產", "安靜"]
        }
    },
    "TianLiang_Karma": {
        key: "TianLiang_Karma",
        conditions: { palace: "福德宮" },
        content: {
            summary: "老運佳，清閒享福，宗教緣。",
            description: `【現象解析】
晚年運勢極佳，能享清福。心性淡泊，對哲學、宗教或神秘學有濃厚興趣。精神世界富足，不為俗事所擾。
【給命主的建議】
應提早規劃退休生活。多參與公益或宗教活動，寄託心靈。保持心境平和，以長壽為福。`,
            keywords: ["清閒", "宗教"]
        }
    },
    "TianLiang_Parents": {
        key: "TianLiang_Parents",
        conditions: { palace: "父母宮" },
        content: {
            summary: "父母長壽，嚴慈並濟。",
            description: `【現象解析】
父母健康長壽，心地善良。對命主管教嚴格但充滿愛心，嚴慈並濟。能得到父母與祖輩的福蔭。
【給命主的建議】
應盡孝道，讓父母晚年無憂。多聽取長輩的教誨，傳承家族的優良傳統。`,
            keywords: ["長壽", "祖蔭"]
        }
    },
    "QiSha_Life": {
        key: "QiSha_Life",
        conditions: { palace: "命宮" },
        content: {
            summary: "將星入命，剛毅果決，孤剋刑殺。",
            description: `【性格特質】
面色青白，方長臉，目光銳利威嚴。個性急躁，剛毅果決，喜掌權，不喜受人約束。人生大起大落，一生都在戰鬥與開創中度過。具有強烈的孤獨感。
【優勢與挑戰】
優勢在於魄力驚人，執行力強，是天生的戰將與開拓者，能成就不世之功。挑戰在於個性太過剛烈，易折易斷，六親緣薄，且易因衝動而招致失敗或意外。
【給命主的建議】
宜修身養性，三思而後行。適合軍警、重工業或具挑戰性的工作。在衝刺事業的同時，也要照顧好身體與家庭。`,
            keywords: ["剛毅", "孤獨", "開創"]
        }
    },
    "QiSha_Siblings": {
        key: "QiSha_Siblings",
        conditions: { palace: "兄弟宮" },
        content: {
            summary: "兄弟不和，各分東西，多爭執。",
            description: `【現象解析】
兄弟姊妹個性剛強，互不相讓。彼此之間容易發生爭執或刑剋，感情不睦。各自獨立發展，少有往來，或分居兩地。
【給命主的建議】
應保持距離以策安全，少見面反而能減少摩擦。各自奮鬥，互不干涉是最好的相處之道。`,
            keywords: ["不和", "刑剋"]
        }
    },
    "QiSha_Spouse": {
        key: "QiSha_Spouse",
        conditions: { palace: "夫妻宮" },
        content: {
            summary: "閃婚閃離，感情濃烈，爭吵多。",
            description: `【現象解析】
配偶個性剛烈，主觀意識強。夫妻間感情來得快去得也快，容易一見鍾情，但也容易閃電離婚。爭吵時互不相讓，充滿火藥味。
【給命主的建議】
婚姻需要雙方共同經營，尤其是控制脾氣。聚少離多或許能改善緊張的關係。晚婚可降低離婚風險。`,
            keywords: ["波折", "強烈"]
        }
    },
    "QiSha_Children": {
        key: "QiSha_Children",
        conditions: { palace: "子女宮" },
        content: {
            summary: "子女叛逆，難以管教，緣分薄。",
            description: `【現象解析】
子女個性倔強叛逆，活動力強，破壞力也強。親子互動少，甚至有刑剋。子女成年後多會離開父母獨立生活。
【給命主的建議】
管教子女不宜過於嚴厲，以免造成反效果。應培養其獨立自主的能力。接受子女早離家的事實。`,
            keywords: ["叛逆", "緣薄"]
        }
    },
    "QiSha_Wealth": {
        key: "QiSha_Wealth",
        conditions: { palace: "財帛宮" },
        content: {
            summary: "橫發橫破，險中求財。",
            description: `【現象解析】
財運起伏劇烈，有橫發橫破之象。適合從事冒險、投機或軍警等高風險行業獲利。錢財難守，常因衝動投資而虧損。
【給命主的建議】
這是有暴發機會的格局，但更重要的是"守成"。賺到錢後應立刻轉為固定資產。避免長期沉迷於高風險投機。`,
            keywords: ["風險", "橫發"]
        }
    },
    "QiSha_Health": {
        key: "QiSha_Health",
        conditions: { palace: "疾厄宮" },
        content: {
            summary: "呼吸肺經，金創外傷。",
            description: `【現象解析】
七殺屬金，主呼吸系統、肺部、大腸。易有刀火燙傷、跌打損傷或車禍等意外血光。幼年體質較弱，多病災。
【給命主的建議】
應注意居家與交通安全，避免危險動作。呼吸系統較弱，應避免抽菸或接觸二手菸。定期做肺部檢查。`,
            keywords: ["呼吸", "外傷"]
        }
    },
    "QiSha_Travel": {
        key: "QiSha_Travel",
        conditions: { palace: "遷移宮" },
        content: {
            summary: "出外顯赫，防意外變故。",
            description: `【現象解析】
在異地發展能展現魄力，令人敬畏，有機會成為一方之霸。但也要特別小心意外事故、血光之災或與人結怨。
【給命主的建議】
適合到外地開疆闢土。在外行事宜低調，避免鋒芒太露招人嫉妒。可以投保意外險以備不時之需。`,
            keywords: ["顯赫", "意外"]
        }
    },
    "QiSha_Friends": {
        key: "QiSha_Friends",
        conditions: { palace: "交友宮" },
        content: {
            summary: "友多剛烈，易招怨恨，防背叛。",
            description: `【現象解析】
朋友多為個性剛烈、意氣用事之人。容易因為利益衝突而反目成仇。部屬難以駕馭，甚至有背叛的可能。
【給命主的建議】
與朋友交往應保持距離，避免金錢瓜葛。用人要謹慎，建立完善的監督機制。`,
            keywords: ["剛烈", "背叛"]
        }
    },
    "QiSha_Career": {
        key: "QiSha_Career",
        conditions: { palace: "官祿宮" },
        content: {
            summary: "武職權貴，軍警工業，開創型。",
            description: `【現象解析】
適合從事軍警、司法、保全、重工業、營造與體育等具挑戰性的工作。工作性質需要高度的執行力與魄力，能掌實權。
【給命主的建議】
應勇於承擔重任，在困難中展現能力。適合創業或擔任高階主管。不宜從事文靜枯燥的工作。`,
            keywords: ["軍警", "開創"]
        }
    },
    "QiSha_Property": {
        key: "QiSha_Property",
        conditions: { palace: "田宅宮" },
        content: {
            summary: "祖業難守，置產難辛。",
            description: `【現象解析】
祖產難守，或繼承後旋即變賣。買房過程較為艱辛，需靠自己打拚。居家環境可能較為雜亂，或鄰近派出所、軍營、工廠。
【給命主的建議】
置產不宜急躁，需多方比較。居家安全設施要做好。年輕時多為事業打拚，中年後再考慮置產。`,
            keywords: ["難守", "艱辛"]
        }
    },
    "QiSha_Karma": {
        key: "QiSha_Karma",
        conditions: { palace: "福德宮" },
        content: {
            summary: "勞碌一生，女性尤甚。",
            description: `【現象解析】
一生勞碌奔波，閒不下來。主觀意識強，容易自尋煩惱。女性命主尤主感情婚姻不順，身心俱疲。
【給命主的建議】
應學習放鬆心情，不要給自己太大的壓力。多做運動發洩精力。女性宜多愛自己一點，不要為家庭犧牲過度。`,
            keywords: ["勞碌", "心亂"]
        }
    },
    "QiSha_Parents": {
        key: "QiSha_Parents",
        conditions: { palace: "父母宮" },
        content: {
            summary: "父母刑剋，早年離家，代溝深。",
            description: `【現象解析】
與父母緣分極薄，容易有刑剋（如早逝、離異）。親子間代溝深，溝通困難。命主通常很年輕就離家自立。
【給命主的建議】
應獨立自主，不依賴父母。對於父母的管教，應以孝順的心態去理解，但保持適當距離以減少衝突。`,
            keywords: ["刑剋", "衝突"]
        }
    },
    "PoJun_Life": {
        key: "PoJun_Life",
        conditions: { palace: "命宮" },
        content: {
            summary: "耗星入命，破舊立新，先破後成。",
            description: `【性格特質】
面色青白，圓長臉。個性衝動，喜新厭舊，不甘寂寞。是"破耗"之星，主變動、破壞與重建。極具反叛精神，不喜墨守成規。
【優勢與挑戰】
優勢在於創意無限，敢於突破現狀，在混亂與變革中往往能找到新出路。挑戰在於人生波動過大，錢財難守，親情緣薄，且凡事多需"先破後成"，過程艱辛。
【給命主的建議】
適合從事裝潢、拆除、設計等"無中生有"或"破舊立新"的行業。學會控制衝動，做好財務規劃，給自己留條後路。`,
            keywords: ["耗星", "變動", "冒險"]
        }
    },
    "PoJun_Siblings": {
        key: "PoJun_Siblings",
        conditions: { palace: "兄弟宮" },
        content: {
            summary: "兄弟分離，各懷鬼胎，少助力。",
            description: `【現象解析】
兄弟姊妹緣分淡薄，多半分居各地。彼此之間可能有利益衝突，甚至各懷鬼胎。難以得到兄弟的幫助，有時反受其累。
【給命主的建議】
兄弟登山，各自努力。不宜與手足合夥經商。保持基本的禮貌往來即可。`,
            keywords: ["分離", "拖累"]
        }
    },
    "PoJun_Spouse": {
        key: "PoJun_Spouse",
        conditions: { palace: "夫妻宮" },
        content: {
            summary: "刑剋重，喜新厭舊，婚前波折。",
            description: `【現象解析】
感情觀念前衛，不喜受傳統束縛，易有同居或毀婚之事。配偶個性剛強難搞。婚後爭吵不斷，刑剋甚重。
【給命主的建議】
婚前宜多交往了解，不宜衝動結婚。婚姻中應學習包容與忍讓。適合晚婚或不婚同居。`,
            keywords: ["波折", "前衛"]
        }
    },
    "PoJun_Children": {
        key: "PoJun_Children",
        conditions: { palace: "子女宮" },
        content: {
            summary: "子女難帶，破壞力強，先損後得。",
            description: `【現象解析】
子女個性頑皮好動，破壞力強，有浪費傾向。首胎容易流產或難養。親子關係較為緊張。
【給命主的建議】
教導子女正確的金錢觀與惜物觀念。多花時間陪伴，導正其行為。`,
            keywords: ["難養", "破壞"]
        }
    },
    "PoJun_Wealth": {
        key: "PoJun_Wealth",
        conditions: { palace: "財帛宮" },
        content: {
            summary: "財來財去，先破後賺。",
            description: `【現象解析】
財運波動大，極不穩定。喜歡投機冒險，賺錢快花錢也快。往往需要先經歷破產或損失，才能學會理財，進而致富。
【給命主的建議】
應建立正確的理財觀，避免賭博性投資。有錢時應趕快置產或定存。`,
            keywords: ["波動", "投機"]
        }
    },
    "PoJun_Health": {
        key: "PoJun_Health",
        conditions: { palace: "疾厄宮" },
        content: {
            summary: "生殖泌尿，消耗性病。",
            description: `【現象解析】
屬水，主生殖機能、腎臟與泌尿系統。幼年多有膿血瘡疾或外傷。成年後需防消耗性的疾病或性病。
【給命主的建議】
應節制性生活，保持單一性伴侶。注意清潔衛生，預防感染。定期健康檢查。`,
            keywords: ["生殖", "膿血"]
        }
    },
    "PoJun_Travel": {
        key: "PoJun_Travel",
        conditions: { palace: "遷移宮" },
        content: {
            summary: "出外奔波，技藝顯名。",
            description: `【現象解析】
適合往外地發展，環境變化大。生活雖然奔波勞碌，但能憑藉特殊技藝或創意在異地揚名立萬。
【給命主的建議】
不怕變動，變動反而是機會。學習一技之長，走遍天下都不怕。`,
            keywords: ["奔波", "技藝"]
        }
    },
    "PoJun_Friends": {
        key: "PoJun_Friends",
        conditions: { palace: "交友宮" },
        content: {
            summary: "友多損耗，恩將仇報。",
            description: `【現象解析】
朋友雖多但雜亂，多為耗財之友。容易發生恩將仇報的事情。部屬無力協助，或者會背叛主上。
【給命主的建議】
交友應重質不重量。不要隨意借錢給朋友。對於部屬的忠誠度要多加考核。`,
            keywords: ["耗財", "背主"]
        }
    },
    "PoJun_Career": {
        key: "PoJun_Career",
        conditions: { palace: "官祿宮" },
        content: {
            summary: "破壞建設，變動行業。",
            description: `【現象解析】
適合從事破壞後重建的工作。如拆除、建築、裝潢、修車、批發市場等。工作環境雜亂，性質多變動。
【給命主的建議】
應選定一個行業深耕，不要頻繁換跑道。利用創新的思維改善舊有的工作模式。`,
            keywords: ["建築", "變動"]
        }
    },
    "PoJun_Property": {
        key: "PoJun_Property",
        conditions: { palace: "田宅宮" },
        content: {
            summary: "祖業必破，住屋陳舊。",
            description: `【現象解析】
祖產必破，亦無法守成。即便自購房產，過程也多波折。居家環境可能容易漏水、壁癌或管線老舊。
【給命主的建議】
置產時應詳細檢查屋況，特別是水電管線。居家修繕預算要寬編。`,
            keywords: ["破祖", "老舊"]
        }
    },
    "PoJun_Karma": {
        key: "PoJun_Karma",
        conditions: { palace: "福德宮" },
        content: {
            summary: "勞心勞力，求新求變。",
            description: `【現象解析】
內心空虛，總覺得不滿足。喜歡追求新鮮感與刺激，無法安於現狀。一生身心俱疲，難享清福。
【給命主的建議】
應學習知足常樂，尋找心靈的寄託。培養靜態的興趣，如書法、閱讀，以定心性。`,
            keywords: ["勞心", "空虛"]
        }
    },
    "PoJun_Parents": {
        key: "PoJun_Parents",
        conditions: { palace: "父母宮" },
        content: {
            summary: "父母刑剋，早年離異。",
            description: `【現象解析】
與父母緣分極薄，可能為養子。父母感情不睦，易離異或早逝。
【給命主的建議】
應自立自強。若父母離異，應尊重其選擇。多關心單親父母。`,
            keywords: ["緣薄", "離異"]
        }
    }
};
