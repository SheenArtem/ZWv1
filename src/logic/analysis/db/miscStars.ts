import { StarRuleMap } from '../models';

export const miscStars: StarRuleMap = {
    "TianGuan_Life": {
        key: "TianGuan_Life",
        conditions: { withStars: ["天官"], palace: "命宮" },
        content: {
            summary: "顯貴之星，仕途順遂。",
            description: "主升遷、官運。個性穩重，喜掌權。利於公職發展。",
            keywords: ["官運", "升遷"]
        }
    },
    "TianGuan_Career": {
        key: "TianGuan_Career",
        conditions: { withStars: ["天官"], palace: "官祿宮" },
        content: {
            summary: "官運亨通，掌權位。",
            description: "職場易得提拔。工作穩定，地位崇高。",
            keywords: ["掌權", "穩定"]
        }
    },
    "TianGuan_Wealth": {
        key: "TianGuan_Wealth",
        conditions: { withStars: ["天官"], palace: "財帛宮" },
        content: {
            summary: "正財顯耀，俸祿豐厚。",
            description: "領薪階級的高收入者。財運穩定。",
            keywords: ["俸祿", "顯耀"]
        }
    },
    "TianGuan_Travel": {
        key: "TianGuan_Travel",
        conditions: { withStars: ["天官"], palace: "遷移宮" },
        content: {
            summary: "出外遇貴，名聲遠播。",
            description: "在外發展利於求名。易接觸達官顯貴。",
            keywords: ["遇貴", "求名"]
        }
    },
    "TianGuan_Spouse": {
        key: "TianGuan_Spouse",
        conditions: { withStars: ["天官"], palace: "夫妻宮" },
        content: {
            summary: "配偶顯貴，氣質高雅。",
            description: "配偶有社會地位或為主管階級。",
            keywords: ["顯貴", "高雅"]
        }
    },
    "TianGuan_Karma": {
        key: "TianGuan_Karma",
        conditions: { withStars: ["天官"], palace: "福德宮" },
        content: {
            summary: "清福享樂，精神滿足。",
            description: "晚年受人敬重，生活悠閒。",
            keywords: ["敬重", "悠閒"]
        }
    },
    "TianGuan_Health": {
        key: "TianGuan_Health",
        conditions: { withStars: ["天官"], palace: "疾厄宮" },
        content: {
            summary: "脾胃小疾，富貴病。",
            description: "注意飲食過度。易有三高。",
            keywords: ["富貴病", "三高"]
        }
    },
    "TianGuan_Parents": {
        key: "TianGuan_Parents",
        conditions: { withStars: ["天官"], palace: "父母宮" },
        content: {
            summary: "父母有成，家教良好。",
            description: "父母事業不錯，給予良好教育。",
            keywords: ["有成", "教育"]
        }
    },
    "TianGuan_Children": {
        key: "TianGuan_Children",
        conditions: { withStars: ["天官"], palace: "子女宮" },
        content: {
            summary: "子女聰慧，將來有成。",
            description: "子女成績優異，有官運。",
            keywords: ["聰慧", "官運"]
        }
    },
    "TianGuan_Siblings": {
        key: "TianGuan_Siblings",
        conditions: { withStars: ["天官"], palace: "兄弟宮" },
        content: {
            summary: "兄弟有為，互相提攜。",
            description: "兄弟中有當官或主管者。",
            keywords: ["有為", "提攜"]
        }
    },
    "TianGuan_Friends": {
        key: "TianGuan_Friends",
        conditions: { withStars: ["天官"], palace: "交友宮" },
        content: {
            summary: "友多權貴，有助事業。",
            description: "交往對象多為有地位人士。",
            keywords: ["權貴", "助力"]
        }
    },
    "TianGuan_Property": {
        key: "TianGuan_Property",
        conditions: { withStars: ["天官"], palace: "田宅宮" },
        content: {
            summary: "居家氣派，近行政區。",
            description: "住家環境好，可能近公家機關。",
            keywords: ["氣派", "行政"]
        }
    },
    "TianFu_Misc_Life": {
        key: "TianFu_Misc_Life",
        conditions: { withStars: ["天福"], palace: "命宮" },
        content: {
            summary: "福祿兼得，快樂享福。",
            description: "主福氣、爵祿。性格樂觀，衣食無虞。得長輩疼愛。",
            keywords: ["福氣", "樂觀"]
        }
    },
    "TianFu_Misc_Karma": {
        key: "TianFu_Misc_Karma",
        conditions: { withStars: ["天福"], palace: "福德宮" },
        content: {
            summary: "精神滿足，老運佳。",
            description: "晚年生活優渥。喜行善積德。",
            keywords: ["積德", "優渥"]
        }
    },
    "TianFu_Misc_Wealth": {
        key: "TianFu_Misc_Wealth",
        conditions: { withStars: ["天福"], palace: "財帛宮" },
        content: {
            summary: "財源廣進，天賜之福。",
            description: "賺錢輕鬆，常有意外之財。",
            keywords: ["廣進", "意外"]
        }
    },
    "TianFu_Misc_Career": {
        key: "TianFu_Misc_Career",
        conditions: { withStars: ["天福"], palace: "官祿宮" },
        content: {
            summary: "工作順遂，福利優厚。",
            description: "職位閒涼但待遇好。適合服務業。",
            keywords: ["順遂", "優厚"]
        }
    },
    "TianFu_Misc_Travel": {
        key: "TianFu_Misc_Travel",
        conditions: { withStars: ["天福"], palace: "遷移宮" },
        content: {
            summary: "出外有福，遇難呈祥。",
            description: "在外貴人多，運勢順遂。",
            keywords: ["有福", "呈祥"]
        }
    },
    "TianFu_Misc_Spouse": {
        key: "TianFu_Misc_Spouse",
        conditions: { withStars: ["天福"], palace: "夫妻宮" },
        content: {
            summary: "配偶體貼，婚姻美滿。",
            description: "配偶帶來福氣，同甘共苦。",
            keywords: ["體貼", "美滿"]
        }
    },
    "TianFu_Misc_Health": {
        key: "TianFu_Misc_Health",
        conditions: { withStars: ["天福"], palace: "疾厄宮" },
        content: {
            summary: "身體健康，心寬體胖。",
            description: "沒什麼大病，容易發福。",
            keywords: ["健康", "發福"]
        }
    },
    "TianFu_Misc_Parents": {
        key: "TianFu_Misc_Parents",
        conditions: { withStars: ["天福"], palace: "父母宮" },
        content: {
            summary: "父母慈愛，得其庇蔭。",
            description: "父母福壽雙全，對子女好。",
            keywords: ["慈愛", "庇蔭"]
        }
    },
    "TianFu_Misc_Children": {
        key: "TianFu_Misc_Children",
        conditions: { withStars: ["天福"], palace: "子女宮" },
        content: {
            summary: "子女乖巧，帶福而來。",
            description: "子女孝順，給家庭帶來喜氣。",
            keywords: ["乖巧", "喜氣"]
        }
    },
    "TianFu_Misc_Siblings": {
        key: "TianFu_Misc_Siblings",
        conditions: { withStars: ["天福"], palace: "兄弟宮" },
        content: {
            summary: "兄弟和睦，互助互愛。",
            description: "手足情深，能同享福。",
            keywords: ["和睦", "同享"]
        }
    },
    "TianFu_Misc_Friends": {
        key: "TianFu_Misc_Friends",
        conditions: { withStars: ["天福"], palace: "交友宮" },
        content: {
            summary: "友誼深厚，得友之助。",
            description: "朋友都是福將，能帶來好運。",
            keywords: ["深厚", "好運"]
        }
    },
    "TianFu_Misc_Property": {
        key: "TianFu_Misc_Property",
        conditions: { withStars: ["天福"], palace: "田宅宮" },
        content: {
            summary: "祖產豐厚，居家舒適。",
            description: "住家寬敞舒適。易繼承祖業。",
            keywords: ["豐厚", "舒適"]
        }
    },
    "TianChu_Life": {
        key: "TianChu_Life",
        conditions: { withStars: ["天廚"], palace: "命宮" },
        content: {
            summary: "食祿豐厚，廚藝佳。",
            description: "主口福、烹飪。有品味，喜美食。衣食不缺。",
            keywords: ["美食", "口福"]
        }
    },
    "TianChu_Karma": {
        key: "TianChu_Karma",
        conditions: { withStars: ["天廚"], palace: "福德宮" },
        content: {
            summary: "講究飲食，口福不淺。",
            description: "喜愛研究美食。精神享受多來自吃喝。",
            keywords: ["飲食", "享受"]
        }
    },
    "TianChu_Wealth": {
        key: "TianChu_Wealth",
        conditions: { withStars: ["天廚"], palace: "財帛宮" },
        content: {
            summary: "餐飲生財，食品業佳。",
            description: "適合從事餐飲、食品相關行業。",
            keywords: ["餐飲", "食品"]
        }
    },
    "TianChu_Career": {
        key: "TianChu_Career",
        conditions: { withStars: ["天廚"], palace: "官祿宮" },
        content: {
            summary: "職務閒美，福利佳。",
            description: "工作常有聚餐機會。適廚師、營養師。",
            keywords: ["閒美", "廚師"]
        }
    },
    "TianChu_Property": {
        key: "TianChu_Property",
        conditions: { withStars: ["天廚"], palace: "田宅宮" },
        content: {
            summary: "廚房寬大，家中宴客。",
            description: "家中廚房設備好。喜在家請客。",
            keywords: ["廚房", "宴客"]
        }
    },
    "TianChu_Health": {
        key: "TianChu_Health",
        conditions: { withStars: ["天廚"], palace: "疾厄宮" },
        content: {
            summary: "腸胃負擔，注意飲食。",
            description: "吃太好導致肥胖或腸胃病。",
            keywords: ["腸胃", "肥胖"]
        }
    },
    "TianChu_Travel": {
        key: "TianChu_Travel",
        conditions: { withStars: ["天廚"], palace: "遷移宮" },
        content: {
            summary: "出外有食祿，不愁吃穿。",
            description: "到哪都有人請客。適應當地飲食。",
            keywords: ["食祿", "適應"]
        }
    },
    "TianChu_Friends": {
        key: "TianChu_Friends",
        conditions: { withStars: ["天廚"], palace: "交友宮" },
        content: {
            summary: "酒肉朋友，聚餐頻繁。",
            description: "朋友間常有飯局。",
            keywords: ["酒肉", "聚餐"]
        }
    },
    "TianChu_Spouse": {
        key: "TianChu_Spouse",
        conditions: { withStars: ["天廚"], palace: "夫妻宮" },
        content: {
            summary: "配偶善烹，口福之樂。",
            description: "配偶會做菜，或喜愛美食。",
            keywords: ["善烹", "口福"]
        }
    },
    "TianChu_Children": {
        key: "TianChu_Children",
        conditions: { withStars: ["天廚"], palace: "子女宮" },
        content: {
            summary: "子女愛吃，身體健康。",
            description: "子女胃口好，長得壯。",
            keywords: ["愛吃", "健康"]
        }
    },
    "TianChu_Siblings": {
        key: "TianChu_Siblings",
        conditions: { withStars: ["天廚"], palace: "兄弟宮" },
        content: {
            summary: "兄弟常聚，把酒言歡。",
            description: "手足間常聚餐聯絡感情。",
            keywords: ["常聚", "言歡"]
        }
    },
    "TianChu_Parents": {
        key: "TianChu_Parents",
        conditions: { withStars: ["天廚"], palace: "父母宮" },
        content: {
            summary: "父母溺愛，伙食豐盛。",
            description: "父母在飲食上照顧周到。",
            keywords: ["溺愛", "豐盛"]
        }
    },
    "TianKu_Life": {
        key: "TianKu_Life",
        conditions: { withStars: ["天哭"], palace: "命宮" },
        content: {
            summary: "情緒低落，消極悲觀。",
            description: "主憂傷、刑剋。個性孤僻，易鑽牛角尖。童年較辛苦。",
            keywords: ["悲觀", "憂傷"]
        }
    },
    "TianKu_Karma": {
        key: "TianKu_Karma",
        conditions: { withStars: ["天哭"], palace: "福德宮" },
        content: {
            summary: "愁腸百結，自尋煩惱。",
            description: "內心常感孤獨。精神壓力大。",
            keywords: ["孤獨", "煩惱"]
        }
    },
    "TianKu_Siblings": {
        key: "TianKu_Siblings",
        conditions: { withStars: ["天哭"], palace: "兄弟宮" },
        content: {
            summary: "兄弟緣薄，溝通不良。",
            description: "手足間少話，或有早夭。",
            keywords: ["緣薄", "早夭"]
        }
    },
    "TianKu_Spouse": {
        key: "TianKu_Spouse",
        conditions: { withStars: ["天哭"], palace: "夫妻宮" },
        content: {
            summary: "夫妻哀怨，相顧無言。",
            description: "婚姻氣氛沈悶，多抱怨。",
            keywords: ["哀怨", "沈悶"]
        }
    },
    "TianKu_Children": {
        key: "TianKu_Children",
        conditions: { withStars: ["天哭"], palace: "子女宮" },
        content: {
            summary: "為子操心，子女叛逆。",
            description: "子女難管教，或體弱。",
            keywords: ["操心", "叛逆"]
        }
    },
    "TianKu_Wealth": {
        key: "TianKu_Wealth",
        conditions: { withStars: ["天哭"], palace: "財帛宮" },
        content: {
            summary: "為財傷神，難聚易散。",
            description: "賺錢辛苦，常有財務煩惱。",
            keywords: ["傷神", "難聚"]
        }
    },
    "TianKu_Health": {
        key: "TianKu_Health",
        conditions: { withStars: ["天哭"], palace: "疾厄宮" },
        content: {
            summary: "肺經虛弱，憂鬱成疾。",
            description: "易患呼吸道疾病或憂鬱症。",
            keywords: ["肺經", "憂鬱"]
        }
    },
    "TianKu_Travel": {
        key: "TianKu_Travel",
        conditions: { withStars: ["天哭"], palace: "遷移宮" },
        content: {
            summary: "出外孤單，水土不服。",
            description: "在外無助，心情鬱悶。",
            keywords: ["孤單", "鬱悶"]
        }
    },
    "TianKu_Friends": {
        key: "TianKu_Friends",
        conditions: { withStars: ["天哭"], palace: "交友宮" },
        content: {
            summary: "友少寡合，易被誤解。",
            description: "朋友少，常覺得沒人懂自己。",
            keywords: ["寡合", "誤解"]
        }
    },
    "TianKu_Career": {
        key: "TianKu_Career",
        conditions: { withStars: ["天哭"], palace: "官祿宮" },
        content: {
            summary: "事業艱辛，虛名虛利。",
            description: "工作不順心，勞多獲少。",
            keywords: ["艱辛", "不順"]
        }
    },
    "TianKu_Property": {
        key: "TianKu_Property",
        conditions: { withStars: ["天哭"], palace: "田宅宮" },
        content: {
            summary: "居家陰濕，人丁不旺。",
            description: "住家環境不佳，家人少笑聲。",
            keywords: ["陰濕", "冷清"]
        }
    },
    "TianKu_Parents": {
        key: "TianKu_Parents",
        conditions: { withStars: ["天哭"], palace: "父母宮" },
        content: {
            summary: "父母緣淺，早年離家。",
            description: "與父母代溝深，或父母早逝。",
            keywords: ["緣淺", "離家"]
        }
    },
    "TianXu_Life": {
        key: "TianXu_Life",
        conditions: { withStars: ["天虛"], palace: "命宮" },
        content: {
            summary: "華而不實，虛榮心重。",
            description: "主空虛、不實。喜吹噓，意志不堅。防破財。",
            keywords: ["空虛", "虛榮"]
        }
    },
    "TianXu_Karma": {
        key: "TianXu_Karma",
        conditions: { withStars: ["天虛"], palace: "福德宮" },
        content: {
            summary: "內心空虛，缺乏目標。",
            description: "精神空虛，常感無聊。",
            keywords: ["空虛", "無聊"]
        }
    },
    "TianXu_Siblings": {
        key: "TianXu_Siblings",
        conditions: { withStars: ["天虛"], palace: "兄弟宮" },
        content: {
            summary: "兄弟假意，情分淡薄。",
            description: "表面客氣，實際疏離。",
            keywords: ["假意", "疏離"]
        }
    },
    "TianXu_Spouse": {
        key: "TianXu_Spouse",
        conditions: { withStars: ["天虛"], palace: "夫妻宮" },
        content: {
            summary: "虛情假意，貌合神離。",
            description: "婚姻有名無實。配偶不誠實。",
            keywords: ["虛情", "貌合"]
        }
    },
    "TianXu_Children": {
        key: "TianXu_Children",
        conditions: { withStars: ["天虛"], palace: "子女宮" },
        content: {
            summary: "子女浮誇，不切實際。",
            description: "子女愛說謊，或身體虛弱。",
            keywords: ["浮誇", "虛弱"]
        }
    },
    "TianXu_Wealth": {
        key: "TianXu_Wealth",
        conditions: { withStars: ["天虛"], palace: "財帛宮" },
        content: {
            summary: "財來財去，虛有其表。",
            description: "表面風光，實際沒錢。",
            keywords: ["虛名", "沒錢"]
        }
    },
    "TianXu_Health": {
        key: "TianXu_Health",
        conditions: { withStars: ["天虛"], palace: "疾厄宮" },
        content: {
            summary: "體虧氣虛，心神不寧。",
            description: "身體虛弱，易有心病。",
            keywords: ["體虧", "心病"]
        }
    },
    "TianXu_Travel": {
        key: "TianXu_Travel",
        conditions: { withStars: ["天虛"], palace: "遷移宮" },
        content: {
            summary: "出外迷茫，浮而不實。",
            description: "在外發展目標不明。",
            keywords: ["迷茫", "浮躁"]
        }
    },
    "TianXu_Friends": {
        key: "TianXu_Friends",
        conditions: { withStars: ["天虛"], palace: "交友宮" },
        content: {
            summary: "友多泛泛，無真心人。",
            description: "酒肉朋友多，能談心的少。",
            keywords: ["泛泛", "真心"]
        }
    },
    "TianXu_Career": {
        key: "TianXu_Career",
        conditions: { withStars: ["天虛"], palace: "官祿宮" },
        content: {
            summary: "職位虛銜，無實權。",
            description: "有名無實的職位。工作不踏實。",
            keywords: ["虛銜", "不實"]
        }
    },
    "TianXu_Property": {
        key: "TianXu_Property",
        conditions: { withStars: ["天虛"], palace: "田宅宮" },
        content: {
            summary: "房屋虛價，裝潢虛華。",
            description: "房子外表好看但建築品質差。",
            keywords: ["虛價", "虛華"]
        }
    },
    "TianXu_Parents": {
        key: "TianXu_Parents",
        conditions: { withStars: ["天虛"], palace: "父母宮" },
        content: {
            summary: "父母虛名，助力不大。",
            description: "父母無法給予實質幫助。",
            keywords: ["虛名", "無助"]
        }
    },
    "HuaGai_Life": {
        key: "HuaGai_Life",
        conditions: { withStars: ["華蓋"], palace: "命宮" },
        content: {
            summary: "才華洋溢，孤芳自賞。",
            description: "主藝術、宗教、哲學。氣質高雅但孤僻。與佛道有緣。",
            keywords: ["藝術", "孤僻"]
        }
    },
    "HuaGai_Career": {
        key: "HuaGai_Career",
        conditions: { withStars: ["華蓋"], palace: "官祿宮" },
        content: {
            summary: "學術顯揚，宗教事業。",
            description: "適學術、出版、宗教界。",
            keywords: ["學術", "宗教"]
        }
    },
    "HuaGai_Wealth": {
        key: "HuaGai_Wealth",
        conditions: { withStars: ["華蓋"], palace: "財帛宮" },
        content: {
            summary: "清高之財，不重名利。",
            description: "錢財夠用就好。或因宗教破財。",
            keywords: ["清高", "隨緣"]
        }
    },
    "HuaGai_Karma": {
        key: "HuaGai_Karma",
        conditions: { withStars: ["華蓋"], palace: "福德宮" },
        content: {
            summary: "精神追求，清高脫俗。",
            description: "喜愛哲學宗教。精神生活豐富。",
            keywords: ["清高", "哲學"]
        }
    },
    "HuaGai_Spouse": {
        key: "HuaGai_Spouse",
        conditions: { withStars: ["華蓋"], palace: "夫妻宮" },
        content: {
            summary: "精神伴侶，聚少離多。",
            description: "尋求心靈契合。配偶可能信教。",
            keywords: ["契合", "信教"]
        }
    },
    "HuaGai_Travel": {
        key: "HuaGai_Travel",
        conditions: { withStars: ["華蓋"], palace: "遷移宮" },
        content: {
            summary: "出外孤獨，尋仙訪道。",
            description: "在外喜獨處或遊歷宗教聖地。",
            keywords: ["孤獨", "訪道"]
        }
    },
    "HuaGai_Health": {
        key: "HuaGai_Health",
        conditions: { withStars: ["華蓋"], palace: "疾厄宮" },
        content: {
            summary: "神經敏感，腸胃失調。",
            description: "易有精神衰弱或胃病。",
            keywords: ["敏感", "胃病"]
        }
    },
    "HuaGai_Property": {
        key: "HuaGai_Property",
        conditions: { withStars: ["華蓋"], palace: "田宅宮" },
        content: {
            summary: "居家清幽，近廟宇。",
            description: "住家安靜。附近有宗教場所。",
            keywords: ["清幽", "廟宇"]
        }
    },
    "HuaGai_Parents": {
        key: "HuaGai_Parents",
        conditions: { withStars: ["華蓋"], palace: "父母宮" },
        content: {
            summary: "父母信佛，緣分較淡。",
            description: "父母有宗教信仰。親情較疏離。",
            keywords: ["信佛", "疏離"]
        }
    },
    "HuaGai_Children": {
        key: "HuaGai_Children",
        conditions: { withStars: ["華蓋"], palace: "子女宮" },
        content: {
            summary: "子女孤僻，有慧根。",
            description: "子女個性獨立，對玄學有興趣。",
            keywords: ["孤僻", "慧根"]
        }
    },
    "HuaGai_Siblings": {
        key: "HuaGai_Siblings",
        conditions: { withStars: ["華蓋"], palace: "兄弟宮" },
        content: {
            summary: "兄弟各異，少往來。",
            description: "手足間志趣不同。",
            keywords: ["各異", "少往來"]
        }
    },
    "HuaGai_Friends": {
        key: "HuaGai_Friends",
        conditions: { withStars: ["華蓋"], palace: "交友宮" },
        content: {
            summary: "友多方外，君子之交。",
            description: "結交宗教或藝術界朋友。",
            keywords: ["方外", "君子"]
        }
    },
    "XianChi_Life": {
        key: "XianChi_Life",
        conditions: { withStars: ["咸池"], palace: "命宮" },
        content: {
            summary: "桃花星，風流多情。",
            description: "主肉慾、桃花。異性緣佳，易沈迷酒色。防感情糾紛。",
            keywords: ["桃花", "肉慾"]
        }
    },
    "XianChi_Spouse": {
        key: "XianChi_Spouse",
        conditions: { withStars: ["咸池"], palace: "夫妻宮" },
        content: {
            summary: "配偶美豔，需防外遇。",
            description: "配偶性慾強或異性緣太好。",
            keywords: ["美豔", "外遇"]
        }
    },
    "XianChi_Karma": {
        key: "XianChi_Karma",
        conditions: { withStars: ["咸池"], palace: "福德宮" },
        content: {
            summary: "重視享受，風流韻事。",
            description: "喜愛感官刺激。晚年仍有桃花。",
            keywords: ["享受", "風流"]
        }
    },
    "XianChi_Health": {
        key: "XianChi_Health",
        conditions: { withStars: ["咸池"], palace: "疾厄宮" },
        content: {
            summary: "虛耗過度，性病隱憂。",
            description: "注意生殖系統疾病。",
            keywords: ["虛耗", "隱疾"]
        }
    },
    "XianChi_Wealth": {
        key: "XianChi_Wealth",
        conditions: { withStars: ["咸池"], palace: "財帛宮" },
        content: {
            summary: "因色破財，花費無度。",
            description: "錢財多花在異性或娛樂上。",
            keywords: ["破財", "娛樂"]
        }
    },
    "XianChi_Career": {
        key: "XianChi_Career",
        conditions: { withStars: ["咸池"], palace: "官祿宮" },
        content: {
            summary: "娛樂事業，桃花生財。",
            description: "適演藝、公關、八大行業。",
            keywords: ["娛樂", "桃花"]
        }
    },
    "XianChi_Travel": {
        key: "XianChi_Travel",
        conditions: { withStars: ["咸池"], palace: "遷移宮" },
        content: {
            summary: "出外桃花，艷遇不斷。",
            description: "在外易發生感情糾紛。",
            keywords: ["艷遇", "糾紛"]
        }
    },
    "XianChi_Friends": {
        key: "XianChi_Friends",
        conditions: { withStars: ["咸池"], palace: "交友宮" },
        content: {
            summary: "酒肉朋友，風月場所。",
            description: "朋友多為玩伴。易被帶壞。",
            keywords: ["酒肉", "玩伴"]
        }
    },
    "XianChi_Property": {
        key: "XianChi_Property",
        conditions: { withStars: ["咸池"], palace: "田宅宮" },
        content: {
            summary: "居家華麗，金屋藏嬌。",
            description: "裝潢豪華。可能在此幽會。",
            keywords: ["華麗", "幽會"]
        }
    },
    "XianChi_Children": {
        key: "XianChi_Children",
        conditions: { withStars: ["咸池"], palace: "子女宮" },
        content: {
            summary: "子女早熟，情竇初開。",
            description: "子女愛打扮，早戀。",
            keywords: ["早熟", "早戀"]
        }
    },
    "XianChi_Parents": {
        key: "XianChi_Parents",
        conditions: { withStars: ["咸池"], palace: "父母宮" },
        content: {
            summary: "父母風流，感情複雜。",
            description: "父母婚姻可能有問題。",
            keywords: ["風流", "複雜"]
        }
    },
    "XianChi_Siblings": {
        key: "XianChi_Siblings",
        conditions: { withStars: ["咸池"], palace: "兄弟宮" },
        content: {
            summary: "兄弟風流，喜好玩樂。",
            description: "手足間多談風月。",
            keywords: ["風流", "玩樂"]
        }
    },
    "TaiFu_Life": {
        key: "TaiFu_Life",
        conditions: { withStars: ["台輔"], palace: "命宮" },
        content: {
            summary: "輔佐貴人，地位提升。",
            description: "主助力、威望。個性正直，工作能力強。",
            keywords: ["助力", "威望"]
        }
    },
    "TaiFu_Career": {
        key: "TaiFu_Career",
        conditions: { withStars: ["台輔"], palace: "官祿宮" },
        content: {
            summary: "職位高升，輔佐重臣。",
            description: "擔任重要幕僚或副手。",
            keywords: ["幕僚", "重臣"]
        }
    },
    "TaiFu_Travel": {
        key: "TaiFu_Travel",
        conditions: { withStars: ["台輔"], palace: "遷移宮" },
        content: {
            summary: "出外得助，名聲顯揚。",
            description: "在外遇貴人提拔。",
            keywords: ["得助", "顯揚"]
        }
    },
    "TaiFu_Wealth": {
        key: "TaiFu_Wealth",
        conditions: { withStars: ["台輔"], palace: "財帛宮" },
        content: {
            summary: "財源穩固，因名得利。",
            description: "收入隨職位提升。",
            keywords: ["穩固", "得利"]
        }
    },
    "TaiFu_Karma": {
        key: "TaiFu_Karma",
        conditions: { withStars: ["台輔"], palace: "福德宮" },
        content: {
            summary: "精神愉快，地位尊崇。",
            description: "晚年受人尊敬。",
            keywords: ["愉快", "尊崇"]
        }
    },
    "TaiFu_Spouse": {
        key: "TaiFu_Spouse",
        conditions: { withStars: ["台輔"], palace: "夫妻宮" },
        content: {
            summary: "配偶賢能，助夫/妻。",
            description: "配偶能力好，能分憂。",
            keywords: ["賢能", "助夫"]
        }
    },
    "TaiFu_Health": {
        key: "TaiFu_Health",
        conditions: { withStars: ["台輔"], palace: "疾厄宮" },
        content: {
            summary: "健康良好，精神飽滿。",
            description: "身體不錯。",
            keywords: ["健康", "飽滿"]
        }
    },
    "TaiFu_Property": {
        key: "TaiFu_Property",
        conditions: { withStars: ["台輔"], palace: "田宅宮" },
        content: {
            summary: "居家典雅，門楣光彩。",
            description: "住家環境好。",
            keywords: ["典雅", "光彩"]
        }
    },
    "TaiFu_Friends": {
        key: "TaiFu_Friends",
        conditions: { withStars: ["台輔"], palace: "交友宮" },
        content: {
            summary: "友多能人，互相提攜。",
            description: "朋友素質高。",
            keywords: ["能人", "提攜"]
        }
    },
    "TaiFu_Children": {
        key: "TaiFu_Children",
        conditions: { withStars: ["台輔"], palace: "子女宮" },
        content: {
            summary: "子女聰慧，學業優異。",
            description: "子女有出息。",
            keywords: ["聰慧", "學業"]
        }
    },
    "TaiFu_Parents": {
        key: "TaiFu_Parents",
        conditions: { withStars: ["台輔"], palace: "父母宮" },
        content: {
            summary: "父母顯要，家世清白。",
            description: "父母有地位。",
            keywords: ["顯要", "清白"]
        }
    },
    "TaiFu_Siblings": {
        key: "TaiFu_Siblings",
        conditions: { withStars: ["台輔"], palace: "兄弟宮" },
        content: {
            summary: "兄弟有成，互助互利。",
            description: "手足發展不錯。",
            keywords: ["有成", "互利"]
        }
    },
    "FengGao_Life": {
        key: "FengGao_Life",
        conditions: { withStars: ["封誥"], palace: "命宮" },
        content: {
            summary: "誥命獎賞，名聲顯揚。",
            description: "主榮譽、封賞。利於考試、獲獎、升遷。",
            keywords: ["榮譽", "獲獎"]
        }
    },
    "FengGao_Career": {
        key: "FengGao_Career",
        conditions: { withStars: ["封誥"], palace: "官祿宮" },
        content: {
            summary: "獲獎無數，受人肯定。",
            description: "工作表現優異，常受表揚。",
            keywords: ["表揚", "肯定"]
        }
    },
    "FengGao_Parents": {
        key: "FengGao_Parents",
        conditions: { withStars: ["封誥"], palace: "父母宮" },
        content: {
            summary: "父母榮耀，家世顯赫。",
            description: "父母有社會地位。",
            keywords: ["榮耀", "顯赫"]
        }
    },
    "FengGao_Wealth": {
        key: "FengGao_Wealth",
        conditions: { withStars: ["封誥"], palace: "財帛宮" },
        content: {
            summary: "因名得財，獎金收入。",
            description: "靠專業或名聲賺錢。",
            keywords: ["獎金", "名聲"]
        }
    },
    "FengGao_Travel": {
        key: "FengGao_Travel",
        conditions: { withStars: ["封誥"], palace: "遷移宮" },
        content: {
            summary: "出外顯達，衣錦還鄉。",
            description: "外地發展順利。",
            keywords: ["顯達", "還鄉"]
        }
    },
    "FengGao_Karma": {
        key: "FengGao_Karma",
        conditions: { withStars: ["封誥"], palace: "福德宮" },
        content: {
            summary: "愛惜羽毛，重視名聲。",
            description: "精神生活以追求榮譽為主。",
            keywords: ["名聲", "榮譽"]
        }
    },
    "FengGao_Spouse": {
        key: "FengGao_Spouse",
        conditions: { withStars: ["封誥"], palace: "夫妻宮" },
        content: {
            summary: "配偶有名，相得益彰。",
            description: "配偶是名人或受敬重。",
            keywords: ["有名", "敬重"]
        }
    },
    "FengGao_Property": {
        key: "FengGao_Property",
        conditions: { withStars: ["封誥"], palace: "田宅宮" },
        content: {
            summary: "居家高雅，有牌匾。",
            description: "家中有掛匾額或獎狀。",
            keywords: ["高雅", "獎狀"]
        }
    },
    "FengGao_Health": {
        key: "FengGao_Health",
        conditions: { withStars: ["封誥"], palace: "疾厄宮" },
        content: {
            summary: "身心健康，保養得宜。",
            description: "重視養生。",
            keywords: ["健康", "養生"]
        }
    },
    "FengGao_Children": {
        key: "FengGao_Children",
        conditions: { withStars: ["封誥"], palace: "子女宮" },
        content: {
            summary: "子女優異，光耀門楣。",
            description: "子女常獲獎。",
            keywords: ["優異", "光耀"]
        }
    },
    "FengGao_Friends": {
        key: "FengGao_Friends",
        conditions: { withStars: ["封誥"], palace: "交友宮" },
        content: {
            summary: "結交名流，提升地位。",
            description: "朋友多有名氣。",
            keywords: ["名流", "地位"]
        }
    },
    "FengGao_Siblings": {
        key: "FengGao_Siblings",
        conditions: { withStars: ["封誥"], palace: "兄弟宮" },
        content: {
            summary: "兄弟雖少，皆有成就。",
            description: "兄弟不多但精。",
            keywords: ["成就", "精"]
        }
    },
    "TianKong_Life": {
        key: "TianKong_Life",
        conditions: { withStars: ["天空"], palace: "命宮" },
        content: {
            summary: "精神空靈，創意獨特。",
            description: "主空亡。不重物質，喜幻想。利於創作或宗教。",
            keywords: ["空靈", "創作"]
        }
    },
    "TianKong_Wealth": {
        key: "TianKong_Wealth",
        conditions: { withStars: ["天空"], palace: "財帛宮" },
        content: {
            summary: "視財如土，不善理財。",
            description: "對錢財看得很淡。難聚財。",
            keywords: ["淡泊", "難聚"]
        }
    },
    "TianKong_Karma": {
        key: "TianKong_Karma",
        conditions: { withStars: ["天空"], palace: "福德宮" },
        content: {
            summary: "思慮天馬行空。",
            description: "想像力豐富，但不切實際。",
            keywords: ["想像", "空想"]
        }
    },
    "TianKong_Career": {
        key: "TianKong_Career",
        conditions: { withStars: ["天空"], palace: "官祿宮" },
        content: {
            summary: "事業多變，創意無限。",
            description: "適合藝術、設計。不宜傳統產業。",
            keywords: ["多變", "創意"]
        }
    },
    "TianKong_Spouse": {
        key: "TianKong_Spouse",
        conditions: { withStars: ["天空"], palace: "夫妻宮" },
        content: {
            summary: "感情隨緣，聚散無常。",
            description: "對婚姻不看重。易單身。",
            keywords: ["隨緣", "單身"]
        }
    },
    "TianKong_Property": {
        key: "TianKong_Property",
        conditions: { withStars: ["天空"], palace: "田宅宮" },
        content: {
            summary: "祖業無靠，居住簡陋。",
            description: "不重居住品質。或住家空曠。",
            keywords: ["無靠", "簡陋"]
        }
    },
    "TianKong_Travel": {
        key: "TianKong_Travel",
        conditions: { withStars: ["天空"], palace: "遷移宮" },
        content: {
            summary: "出外漫遊，居無定所。",
            description: "喜愛流浪或旅遊。",
            keywords: ["漫遊", "流浪"]
        }
    },
    "TianKong_Health": {
        key: "TianKong_Health",
        conditions: { withStars: ["天空"], palace: "疾厄宮" },
        content: {
            summary: "氣血不足，頭暈眼花。",
            description: "身體較虚。",
            keywords: ["氣血", "頭暈"]
        }
    },
    "TianKong_Friends": {
        key: "TianKong_Friends",
        conditions: { withStars: ["天空"], palace: "交友宮" },
        content: {
            summary: "君子之交淡如水。",
            description: "朋友少。",
            keywords: ["淡如水", "少"]
        }
    },
    "TianKong_Parents": {
        key: "TianKong_Parents",
        conditions: { withStars: ["天空"], palace: "父母宮" },
        content: {
            summary: "親情淡薄，緣分不深。",
            description: "與父母緣淺。",
            keywords: ["淡薄", "緣淺"]
        }
    },
    "TianKong_Children": {
        key: "TianKong_Children",
        conditions: { withStars: ["天空"], palace: "子女宮" },
        content: {
            summary: "子女稀少，緣薄。",
            description: "不易有子女。",
            keywords: ["稀少", "緣薄"]
        }
    },
    "TianKong_Siblings": {
        key: "TianKong_Siblings",
        conditions: { withStars: ["天空"], palace: "兄弟宮" },
        content: {
            summary: "兄弟各奔東西。",
            description: "手足分散。",
            keywords: ["各奔", "分散"]
        }
    },
    "JieKong_Life": {
        key: "JieKong_Life",
        conditions: { withStars: ["截空"], palace: "命宮" },
        content: {
            summary: "阻礙中斷，波折重重。",
            description: "主阻礙、隔絕。凡事易半途而廢。親緣較薄。",
            keywords: ["阻礙", "中斷"]
        }
    },
    "JieKong_Career": {
        key: "JieKong_Career",
        conditions: { withStars: ["截空"], palace: "官祿宮" },
        content: {
            summary: "事業受阻，發展受限。",
            description: "工作常遇瓶頸。升遷困難。",
            keywords: ["瓶頸", "困難"]
        }
    },
    "JieKong_Wealth": {
        key: "JieKong_Wealth",
        conditions: { withStars: ["截空"], palace: "財帛宮" },
        content: {
            summary: "財源中斷，週轉不靈。",
            description: "資金調度常出問題。",
            keywords: ["中斷", "不靈"]
        }
    },
    "JieKong_Karma": {
        key: "JieKong_Karma",
        conditions: { withStars: ["截空"], palace: "福德宮" },
        content: {
            summary: "思緒中斷，意志消沉。",
            description: "常有挫折感。判斷力受阻。",
            keywords: ["消沉", "受阻"]
        }
    },
    "JieKong_Spouse": {
        key: "JieKong_Spouse",
        conditions: { withStars: ["截空"], palace: "夫妻宮" },
        content: {
            summary: "感情隔閡，溝通困難。",
            description: "夫妻間有代溝。易分居。",
            keywords: ["隔閡", "困難"]
        }
    },
    "JieKong_Travel": {
        key: "JieKong_Travel",
        conditions: { withStars: ["截空"], palace: "遷移宮" },
        content: {
            summary: "出外受困，行程受阻。",
            description: "外出不順。交通延誤。",
            keywords: ["受困", "延誤"]
        }
    },
    "JieKong_Property": {
        key: "JieKong_Property",
        conditions: { withStars: ["截空"], palace: "田宅宮" },
        content: {
            summary: "置產受阻，買賣糾紛。",
            description: "房產交易也不順。",
            keywords: ["受阻", "糾紛"]
        }
    },
    "JieKong_Health": {
        key: "JieKong_Health",
        conditions: { withStars: ["截空"], palace: "疾厄宮" },
        content: {
            summary: "宿疾難癒，氣血不通。",
            description: "久病難醫。",
            keywords: ["宿疾", "不通"]
        }
    },
    "JieKong_Friends": {
        key: "JieKong_Friends",
        conditions: { withStars: ["截空"], palace: "交友宮" },
        content: {
            summary: "人際隔閡，遭受排擠。",
            description: "與朋友有距離感。",
            keywords: ["隔閡", "排擠"]
        }
    },
    "JieKong_Parents": {
        key: "JieKong_Parents",
        conditions: { withStars: ["截空"], palace: "父母宮" },
        content: {
            summary: "父母緣淺，代溝深。",
            description: "與父母難溝通。",
            keywords: ["緣淺", "代溝"]
        }
    },
    "JieKong_Children": {
        key: "JieKong_Children",
        conditions: { withStars: ["截空"], palace: "子女宮" },
        content: {
            summary: "子女緣薄，難以懷孕。",
            description: "子女遲來。",
            keywords: ["緣薄", "遲來"]
        }
    },
    "JieKong_Siblings": {
        key: "JieKong_Siblings",
        conditions: { withStars: ["截空"], palace: "兄弟宮" },
        content: {
            summary: "兄弟疏遠，不相往來。",
            description: "手足無情。",
            keywords: ["疏遠", "無情"]
        }
    },
    "XunKong_Life": {
        key: "XunKong_Life",
        conditions: { withStars: ["旬空"], palace: "命宮" },
        content: {
            summary: "虛無飄渺，若得若失。",
            description: "主空虛。喜鑽研玄學。做事較不踏實。",
            keywords: ["虛無", "玄學"]
        }
    },
    "XunKong_Karma": {
        key: "XunKong_Karma",
        conditions: { withStars: ["旬空"], palace: "福德宮" },
        content: {
            summary: "精神追求，不滯於物。",
            description: "思考獨特，與眾不同。",
            keywords: ["獨特", "超脫"]
        }
    },
    "XunKong_Wealth": {
        key: "XunKong_Wealth",
        conditions: { withStars: ["旬空"], palace: "財帛宮" },
        content: {
            summary: "財運起伏，難以捉摸。",
            description: "錢財看淡。",
            keywords: ["起伏", "看淡"]
        }
    },
    "XunKong_Career": {
        key: "XunKong_Career",
        conditions: { withStars: ["旬空"], palace: "官祿宮" },
        content: {
            summary: "事業多變，不喜束縛。",
            description: "喜自由業。",
            keywords: ["多變", "自由"]
        }
    },
    "XunKong_Spouse": {
        key: "XunKong_Spouse",
        conditions: { withStars: ["旬空"], palace: "夫妻宮" },
        content: {
            summary: "感情淡然，隨緣而聚。",
            description: "不強求婚姻。",
            keywords: ["淡然", "隨緣"]
        }
    },
    "XunKong_Property": {
        key: "XunKong_Property",
        conditions: { withStars: ["旬空"], palace: "田宅宮" },
        content: {
            summary: "住所不定，隨遇而安。",
            description: "不執著於房產。",
            keywords: ["不定", "隨遇"]
        }
    },
    "XunKong_Travel": {
        key: "XunKong_Travel",
        conditions: { withStars: ["旬空"], palace: "遷移宮" },
        content: {
            summary: "出外漫遊，心無掛礙。",
            description: "喜歡到處走走。",
            keywords: ["漫遊", "掛礙"]
        }
    },
    "XunKong_Health": {
        key: "XunKong_Health",
        conditions: { withStars: ["旬空"], palace: "疾厄宮" },
        content: {
            summary: "神經衰弱，心神不寧。",
            description: "易失眠。",
            keywords: ["衰弱", "不寧"]
        }
    },
    "XunKong_Friends": {
        key: "XunKong_Friends",
        conditions: { withStars: ["旬空"], palace: "交友宮" },
        content: {
            summary: "朋友如雲，知己難尋。",
            description: "雖有朋友但心靈孤獨。",
            keywords: ["如雲", "孤獨"]
        }
    },
    "XunKong_Parents": {
        key: "XunKong_Parents",
        conditions: { withStars: ["旬空"], palace: "父母宮" },
        content: {
            summary: "親情疏離，各自安好。",
            description: "與父母關係平淡。",
            keywords: ["疏離", "平淡"]
        }
    },
    "XunKong_Children": {
        key: "XunKong_Children",
        conditions: { withStars: ["旬空"], palace: "子女宮" },
        content: {
            summary: "子女獨立，緣分較淺。",
            description: "子女長大就飛了。",
            keywords: ["獨立", "緣淺"]
        }
    },
    "XunKong_Siblings": {
        key: "XunKong_Siblings",
        conditions: { withStars: ["旬空"], palace: "兄弟宮" },
        content: {
            summary: "兄弟各方，聚少離多。",
            description: "手足不多見。",
            keywords: ["各方", "離多"]
        }
    },
    "TianCai_Life": {
        key: "TianCai_Life",
        conditions: { withStars: ["天才"], palace: "命宮" },
        content: {
            summary: "聰明才智，反應敏捷。",
            description: "主智慧、才能。學習力強，多才多藝。",
            keywords: ["智慧", "才藝"]
        }
    },
    "TianCai_Career": {
        key: "TianCai_Career",
        conditions: { withStars: ["天才"], palace: "官祿宮" },
        content: {
            summary: "專業突出，才華展現。",
            description: "在專業領域有獨到見解。",
            keywords: ["專業", "才華"]
        }
    },
    "TianCai_Parents": {
        key: "TianCai_Parents",
        conditions: { withStars: ["天才"], palace: "父母宮" },
        content: {
            summary: "父母聰明，遺傳優良。",
            description: "受父母智力遺傳。",
            keywords: ["聰明", "遺傳"]
        }
    },
    "TianCai_Wealth": {
        key: "TianCai_Wealth",
        conditions: { withStars: ["天才"], palace: "財帛宮" },
        content: {
            summary: "憑智賺錢，點子生財。",
            description: "靠腦袋賺錢。",
            keywords: ["憑智", "點子"]
        }
    },
    "TianCai_Karma": {
        key: "TianCai_Karma",
        conditions: { withStars: ["天才"], palace: "福德宮" },
        content: {
            summary: "聰穎過人，心思靈活。",
            description: "思慮清晰。壽命亦長。",
            keywords: ["聰穎", "靈活"]
        }
    },
    "TianCai_Spouse": {
        key: "TianCai_Spouse",
        conditions: { withStars: ["天才"], palace: "夫妻宮" },
        content: {
            summary: "配偶聰明，才貌雙全。",
            description: "配偶智商高。",
            keywords: ["聰明", "才貌"]
        }
    },
    "TianCai_Property": {
        key: "TianCai_Property",
        conditions: { withStars: ["天才"], palace: "田宅宮" },
        content: {
            summary: "居家智慧，佈置巧思。",
            description: "家中有現代化設備。",
            keywords: ["智慧", "巧思"]
        }
    },
    "TianCai_Travel": {
        key: "TianCai_Travel",
        conditions: { withStars: ["天才"], palace: "遷移宮" },
        content: {
            summary: "出外機警，反應快。",
            description: "適應力強。",
            keywords: ["機警", "適應"]
        }
    },
    "TianCai_Health": {
        key: "TianCai_Health",
        conditions: { withStars: ["天才"], palace: "疾厄宮" },
        content: {
            summary: "神經敏感，用腦過度。",
            description: "易失眠。",
            keywords: ["敏感", "過度"]
        }
    },
    "TianCai_Friends": {
        key: "TianCai_Friends",
        conditions: { withStars: ["天才"], palace: "交友宮" },
        content: {
            summary: "友多才子，談笑鴻儒。",
            description: "朋友都聰明。",
            keywords: ["才子", "鴻儒"]
        }
    },
    "TianCai_Children": {
        key: "TianCai_Children",
        conditions: { withStars: ["天才"], palace: "子女宮" },
        content: {
            summary: "子女資優，聰慧異常。",
            description: "子女聰明。",
            keywords: ["資優", "聰慧"]
        }
    },
    "TianCai_Siblings": {
        key: "TianCai_Siblings",
        conditions: { withStars: ["天才"], palace: "兄弟宮" },
        content: {
            summary: "兄弟才子，學業優秀。",
            description: "手足學歷高。",
            keywords: ["才子", "優秀"]
        }
    },
    "TianShou_Life": {
        key: "TianShou_Life",
        conditions: { withStars: ["天壽"], palace: "命宮" },
        content: {
            summary: "長壽之星，沉穩老練。",
            description: "主高壽、穩重。行事圓融，不與人爭。",
            keywords: ["長壽", "圓融"]
        }
    },
    "TianShou_Health": {
        key: "TianShou_Health",
        conditions: { withStars: ["天壽"], palace: "疾厄宮" },
        content: {
            summary: "身體硬朗，延年益壽。",
            description: "雖有病痛但能長壽。",
            keywords: ["硬朗", "延年"]
        }
    },
    "TianShou_Parents": {
        key: "TianShou_Parents",
        conditions: { withStars: ["天壽"], palace: "父母宮" },
        content: {
            summary: "父母高壽。",
            description: "父母壽命長。",
            keywords: ["高壽"]
        }
    },
    "TianShou_Karma": {
        key: "TianShou_Karma",
        conditions: { withStars: ["天壽"], palace: "福德宮" },
        content: {
            summary: "心胸開闊，晚年安樂。",
            description: "心寬壽長。",
            keywords: ["開闊", "安樂"]
        }
    },
    "TianShou_Wealth": {
        key: "TianShou_Wealth",
        conditions: { withStars: ["天壽"], palace: "財帛宮" },
        content: {
            summary: "財運長久，細水長流。",
            description: "退休金豐厚。",
            keywords: ["長久", "退休"]
        }
    },
    "TianShou_Career": {
        key: "TianShou_Career",
        conditions: { withStars: ["天壽"], palace: "官祿宮" },
        content: {
            summary: "事業穩健，資歷深厚。",
            description: "工作做得長久。",
            keywords: ["穩健", "資歷"]
        }
    },
    "TianShou_Spouse": {
        key: "TianShou_Spouse",
        conditions: { withStars: ["天壽"], palace: "夫妻宮" },
        content: {
            summary: "白頭偕老，年齡差距。",
            description: "配偶年紀較大。婚姻長久。",
            keywords: ["偕老", "差距"]
        }
    },
    "TianShou_Property": {
        key: "TianShou_Property",
        conditions: { withStars: ["天壽"], palace: "田宅宮" },
        content: {
            summary: "老屋耐住，居家安寧。",
            description: "住老房子吉。",
            keywords: ["老屋", "安寧"]
        }
    },
    "TianShou_Travel": {
        key: "TianShou_Travel",
        conditions: { withStars: ["天壽"], palace: "遷移宮" },
        content: {
            summary: "出外平安，適應力強。",
            description: "外出運穩。",
            keywords: ["平安", "適應"]
        }
    },
    "TianShou_Friends": {
        key: "TianShou_Friends",
        conditions: { withStars: ["天壽"], palace: "交友宮" },
        content: {
            summary: "友多年長，忘年之交。",
            description: "結交長者。",
            keywords: ["年長", "忘年"]
        }
    },
    "TianShou_Children": {
        key: "TianShou_Children",
        conditions: { withStars: ["天壽"], palace: "子女宮" },
        content: {
            summary: "得子較晚，子女孝順。",
            description: "晚得子。",
            keywords: ["晚得", "孝順"]
        }
    },
    "TianShou_Siblings": {
        key: "TianShou_Siblings",
        conditions: { withStars: ["天壽"], palace: "兄弟宮" },
        content: {
            summary: "兄弟寬厚，情誼長存。",
            description: "手足感情好。",
            keywords: ["寬厚", "長存"]
        }
    },
    "TianShang_Life": {
        key: "TianShang_Life",
        conditions: { withStars: ["天傷"], palace: "命宮" },
        content: {
            summary: "虛耗損失，傷神勞心。",
            description: "主損失、消耗。易有財務或精神上的虧損。",
            keywords: ["虛耗", "損失"]
        }
    },
    "TianShang_Wealth": {
        key: "TianShang_Wealth",
        conditions: { withStars: ["天傷"], palace: "財帛宮" },
        content: {
            summary: "破財損耗，入不敷出。",
            description: "錢財莫名流失。",
            keywords: ["破財", "流失"]
        }
    },
    "TianShang_Health": {
        key: "TianShang_Health",
        conditions: { withStars: ["天傷"], palace: "疾厄宮" },
        content: {
            summary: "身體虛耗，元氣不足。",
            description: "體質較弱。",
            keywords: ["虛耗", "體弱"]
        }
    },
    "TianShang_Karma": {
        key: "TianShang_Karma",
        conditions: { withStars: ["天傷"], palace: "福德宮" },
        content: {
            summary: "煩惱多慮，精神耗弱。",
            description: "想太多。",
            keywords: ["煩惱", "耗弱"]
        }
    },
    "TianShang_Career": {
        key: "TianShang_Career",
        conditions: { withStars: ["天傷"], palace: "官祿宮" },
        content: {
            summary: "事業虧損，徒勞無功。",
            description: "做得多賺得少。",
            keywords: ["虧損", "徒勞"]
        }
    },
    "TianShang_Spouse": {
        key: "TianShang_Spouse",
        conditions: { withStars: ["天傷"], palace: "夫妻宮" },
        content: {
            summary: "感情受傷，身心俱疲。",
            description: "婚姻帶來痛苦。",
            keywords: ["受傷", "俱疲"]
        }
    },
    "TianShang_Property": {
        key: "TianShang_Property",
        conditions: { withStars: ["天傷"], palace: "田宅宮" },
        content: {
            summary: "修繕漏財，家宅耗損。",
            description: "房子常需花錢修。",
            keywords: ["漏財", "耗損"]
        }
    },
    "TianShang_Travel": {
        key: "TianShang_Travel",
        conditions: { withStars: ["天傷"], palace: "遷移宮" },
        content: {
            summary: "出外破財，身體不適。",
            description: "外出易生病或掉錢。",
            keywords: ["破財", "不適"]
        }
    },
    "TianShang_Friends": {
        key: "TianShang_Friends",
        conditions: { withStars: ["天傷"], palace: "交友宮" },
        content: {
            summary: "因友損財，被人拖累。",
            description: "朋友借錢不還。",
            keywords: ["損財", "拖累"]
        }
    },
    "TianShang_Parents": {
        key: "TianShang_Parents",
        conditions: { withStars: ["天傷"], palace: "父母宮" },
        content: {
            summary: "消耗父母，親情負擔。",
            description: "讓父母操心賠錢。",
            keywords: ["消耗", "負擔"]
        }
    },
    "TianShang_Children": {
        key: "TianShang_Children",
        conditions: { withStars: ["天傷"], palace: "子女宮" },
        content: {
            summary: "子女多病，花費鉅大。",
            description: "子女身體差。",
            keywords: ["多病", "鉅大"]
        }
    },
    "TianShang_Siblings": {
        key: "TianShang_Siblings",
        conditions: { withStars: ["天傷"], palace: "兄弟宮" },
        content: {
            summary: "兄弟連累，互相虧欠。",
            description: "被手足拖累。",
            keywords: ["連累", "虧欠"]
        }
    },
    "TianShi_Life": {
        key: "TianShi_Life",
        conditions: { withStars: ["天使"], palace: "命宮" },
        content: {
            summary: "災厄虛驚，是非口舌。",
            description: "主災厄、傳遞。易遭無妄之災或小人陷害。",
            keywords: ["災厄", "是非"]
        }
    },
    "TianShi_Travel": {
        key: "TianShi_Travel",
        conditions: { withStars: ["天使"], palace: "遷移宮" },
        content: {
            summary: "出外防災，意外虛驚。",
            description: "在外小心意外。",
            keywords: ["防災", "意外"]
        }
    },
    "TianShi_Health": {
        key: "TianShi_Health",
        conditions: { withStars: ["天使"], palace: "疾厄宮" },
        content: {
            summary: "傳染病，意外受傷。",
            description: "注意流行病或天災。",
            keywords: ["傳染", "受傷"]
        }
    },
    "TianShi_Karma": {
        key: "TianShi_Karma",
        conditions: { withStars: ["天使"], palace: "福德宮" },
        content: {
            summary: "提心吊膽，不得安寧。",
            description: "精神緊張。",
            keywords: ["緊張", "不安"]
        }
    },
    "TianShi_Wealth": {
        key: "TianShi_Wealth",
        conditions: { withStars: ["天使"], palace: "財帛宮" },
        content: {
            summary: "因禍破財，官司賠償。",
            description: "意外支出。",
            keywords: ["破財", "賠償"]
        }
    },
    "TianShi_Career": {
        key: "TianShi_Career",
        conditions: { withStars: ["天使"], palace: "官祿宮" },
        content: {
            summary: "職場是非，小人中傷。",
            description: "工作有小人。",
            keywords: ["是非", "中傷"]
        }
    },
    "TianShi_Spouse": {
        key: "TianShi_Spouse",
        conditions: { withStars: ["天使"], palace: "夫妻宮" },
        content: {
            summary: "感情糾紛，遭人破壞。",
            description: "有人挑撥夫妻感情。",
            keywords: ["糾紛", "破壞"]
        }
    },
    "TianShi_Property": {
        key: "TianShi_Property",
        conditions: { withStars: ["天使"], palace: "田宅宮" },
        content: {
            summary: "居家不安，鄰里是非。",
            description: "鄰居難搞。",
            keywords: ["不安", "是非"]
        }
    },
    "TianShi_Friends": {
        key: "TianShi_Friends",
        conditions: { withStars: ["天使"], palace: "交友宮" },
        content: {
            summary: "損友構陷，背地中傷。",
            description: "朋友陷害。",
            keywords: ["構陷", "中傷"]
        }
    },
    "TianShi_Parents": {
        key: "TianShi_Parents",
        conditions: { withStars: ["天使"], palace: "父母宮" },
        content: {
            summary: "父母災病，刑剋分離。",
            description: "父母有災。",
            keywords: ["災病", "分離"]
        }
    },
    "TianShi_Children": {
        key: "TianShi_Children",
        conditions: { withStars: ["天使"], palace: "子女宮" },
        content: {
            summary: "子女若是，操心勞力。",
            description: "子女惹禍。",
            keywords: ["若是", "操心"]
        }
    },
    "TianShi_Siblings": {
        key: "TianShi_Siblings",
        conditions: { withStars: ["天使"], palace: "兄弟宮" },
        content: {
            summary: "兄弟爭執，禍起蕭牆。",
            description: "手足不和。",
            keywords: ["爭執", "蕭牆"]
        }
    },
    "TianYao_Life": {
        key: "TianYao_Life",
        conditions: { withStars: ["天姚"], palace: "命宮" },
        content: {
            summary: "桃花舞弄，風情萬種。",
            description: "主桃花、魅力。異性緣佳，喜打扮。",
            keywords: ["桃花", "風流"]
        }
    },
    "TianYao_Career": {
        key: "TianYao_Career",
        conditions: { withStars: ["天姚"], palace: "官祿宮" },
        content: {
            summary: "異性助力，公關長才。",
            description: "適演藝、公關。靠魅力工作。",
            keywords: ["公關", "魅力"]
        }
    },
    "TianYao_Spouse": {
        key: "TianYao_Spouse",
        conditions: { withStars: ["天姚"], palace: "夫妻宮" },
        content: {
            summary: "配偶迷人，防牆外桃花。",
            description: "配偶很有魅力，但需防出軌。",
            keywords: ["迷人", "出軌"]
        }
    },
    "TianYao_Karma": {
        key: "TianYao_Karma",
        conditions: { withStars: ["天姚"], palace: "福德宮" },
        content: {
            summary: "風流倜儻，享受人生。",
            description: "喜愛風月。",
            keywords: ["風流", "享受"]
        }
    },
    "TianYao_Wealth": {
        key: "TianYao_Wealth",
        conditions: { withStars: ["天姚"], palace: "財帛宮" },
        content: {
            summary: "桃花生財，異性之財。",
            description: "賺異性錢賺。",
            keywords: ["生財", "異性"]
        }
    },
    "TianYao_Health": {
        key: "TianYao_Health",
        conditions: { withStars: ["天姚"], palace: "疾厄宮" },
        content: {
            summary: "泌尿系統，酒色過度。",
            description: "性病或腎虧。",
            keywords: ["泌尿", "酒色"]
        }
    },
    "TianYao_Travel": {
        key: "TianYao_Travel",
        conditions: { withStars: ["天姚"], palace: "遷移宮" },
        content: {
            summary: "出外艷遇，人緣極佳。",
            description: "在外桃花多。",
            keywords: ["艷遇", "人緣"]
        }
    },
    "TianYao_Friends": {
        key: "TianYao_Friends",
        conditions: { withStars: ["天姚"], palace: "交友宮" },
        content: {
            summary: "友多異性，關係曖昧。",
            description: "朋友都帶桃花。",
            keywords: ["異性", "曖昧"]
        }
    },
    "TianYao_Property": {
        key: "TianYao_Property",
        conditions: { withStars: ["天姚"], palace: "田宅宮" },
        content: {
            summary: "居家華美，金屋藏嬌。",
            description: "佈置浪漫。",
            keywords: ["華美", "藏嬌"]
        }
    },
    "TianYao_Parents": {
        key: "TianYao_Parents",
        conditions: { withStars: ["天姚"], palace: "父母宮" },
        content: {
            summary: "父母美貌，感情豐富。",
            description: "父母顏值高。",
            keywords: ["美貌", "豐富"]
        }
    },
    "TianYao_Children": {
        key: "TianYao_Children",
        conditions: { withStars: ["天姚"], palace: "子女宮" },
        content: {
            summary: "子女早熟，桃花旺盛。",
            description: "子女愛談戀愛。",
            keywords: ["早熟", "桃花"]
        }
    },
    "TianYao_Siblings": {
        key: "TianYao_Siblings",
        conditions: { withStars: ["天姚"], palace: "兄弟宮" },
        content: {
            summary: "兄弟風流，喜好異性。",
            description: "手足多情。",
            keywords: ["風流", "多情"]
        }
    },
    "TianWu_Life": {
        key: "TianWu_Life",
        conditions: { withStars: ["天巫"], palace: "命宮" },
        content: {
            summary: "騰達升遷，通靈感應。",
            description: "主升遷、宗教。直覺強，利於學習玄學。",
            keywords: ["升遷", "直覺"]
        }
    },
    "TianWu_Career": {
        key: "TianWu_Career",
        conditions: { withStars: ["天巫"], palace: "官祿宮" },
        content: {
            summary: "升遷順利，得神助。",
            description: "職場運勢好，有如神助。",
            keywords: ["順利", "神助"]
        }
    },
    "TianWu_Wealth": {
        key: "TianWu_Wealth",
        conditions: { withStars: ["天巫"], palace: "財帛宮" },
        content: {
            summary: "財源不斷，意外之財。",
            description: "常有偏財。",
            keywords: ["不斷", "偏財"]
        }
    },
    "TianWu_Karma": {
        key: "TianWu_Karma",
        conditions: { withStars: ["天巫"], palace: "福德宮" },
        content: {
            summary: "福至心靈，直覺敏銳。",
            description: "第六感強。",
            keywords: ["心靈", "敏銳"]
        }
    },
    "TianWu_Spouse": {
        key: "TianWu_Spouse",
        conditions: { withStars: ["天巫"], palace: "夫妻宮" },
        content: {
            summary: "配偶有助，心靈契合。",
            description: "配偶能旺夫/妻。",
            keywords: ["有助", "契合"]
        }
    },
    "TianWu_Property": {
        key: "TianWu_Property",
        conditions: { withStars: ["天巫"], palace: "田宅宮" },
        content: {
            summary: "祖業興旺，居家吉祥。",
            description: "住家風水好。",
            keywords: ["興旺", "吉祥"]
        }
    },
    "TianWu_Travel": {
        key: "TianWu_Travel",
        conditions: { withStars: ["天巫"], palace: "遷移宮" },
        content: {
            summary: "出外遇貴，機遇良好。",
            description: "在外有貴人。",
            keywords: ["遇貴", "良好"]
        }
    },
    "TianWu_Health": {
        key: "TianWu_Health",
        conditions: { withStars: ["天巫"], palace: "疾厄宮" },
        content: {
            summary: "逢凶化吉，身體安康。",
            description: "病痛少。",
            keywords: ["化吉", "安康"]
        }
    },
    "TianWu_Friends": {
        key: "TianWu_Friends",
        conditions: { withStars: ["天巫"], palace: "交友宮" },
        content: {
            summary: "友多高人，彼此提攜。",
            description: "結交有能力之人。",
            keywords: ["高人", "提攜"]
        }
    },
    "TianWu_Parents": {
        key: "TianWu_Parents",
        conditions: { withStars: ["天巫"], palace: "父母宮" },
        content: {
            summary: "父母顯達，得其遺傳。",
            description: "父母優秀。",
            keywords: ["顯達", "遺傳"]
        }
    },
    "TianWu_Children": {
        key: "TianWu_Children",
        conditions: { withStars: ["天巫"], palace: "子女宮" },
        content: {
            summary: "子女優秀，將來有成。",
            description: "子女有出息。",
            keywords: ["優秀", "有成"]
        }
    },
    "TianWu_Siblings": {
        key: "TianWu_Siblings",
        conditions: { withStars: ["天巫"], palace: "兄弟宮" },
        content: {
            summary: "兄弟互助，共同發展。",
            description: "手足團結。",
            keywords: ["互助", "發展"]
        }
    },
    "FengGe_Life": {
        key: "FengGe_Life",
        conditions: { withStars: ["鳳閣"], palace: "命宮" },
        content: {
            summary: "氣質高雅，重外表。",
            description: "喜愛打扮，對美感敏銳。生活講究，有貴氣。",
            keywords: ["高雅", "美感"]
        }
    },
    "FengGe_Spouse": {
        key: "FengGe_Spouse",
        conditions: { withStars: ["鳳閣"], palace: "夫妻宮" },
        content: {
            summary: "配偶俊秀，品味佳。",
            description: "配偶外貌出眾，穿著講究。重視生活情趣。",
            keywords: ["俊秀", "品味"]
        }
    },
    "FengGe_Wealth": {
        key: "FengGe_Wealth",
        conditions: { withStars: ["鳳閣"], palace: "財帛宮" },
        content: {
            summary: "美學營生，貴人財。",
            description: "適從事美容、設計、藝術。賺錢輕鬆。",
            keywords: ["美學", "輕鬆"]
        }
    },
    "FengGe_Career": {
        key: "FengGe_Career",
        conditions: { withStars: ["鳳閣"], palace: "官祿宮" },
        content: {
            summary: "職位清顯，環境佳。",
            description: "工作環境優美。適美學、裝飾相關行業。",
            keywords: ["優美", "裝飾"]
        }
    },
    "FengGe_Property": {
        key: "FengGe_Property",
        conditions: { withStars: ["鳳閣"], palace: "田宅宮" },
        content: {
            summary: "居家美輪美奐，地段佳。",
            description: "住家裝潢漂亮，附近有著名建築。",
            keywords: ["美輪美奐", "地段"]
        }
    },
    "FengGe_Travel": {
        key: "FengGe_Travel",
        conditions: { withStars: ["鳳閣"], palace: "遷移宮" },
        content: {
            summary: "出外光鮮，際遇佳。",
            description: "外地活動多在此上流圈子。給人印象好。",
            keywords: ["光鮮", "上流"]
        }
    },
    "FengGe_Health": {
        key: "FengGe_Health",
        conditions: { withStars: ["鳳閣"], palace: "疾厄宮" },
        content: {
            summary: "注重養生，皮膚好。",
            description: "身體狀況不錯。注意牙齒或皮膚美容。",
            keywords: ["養生", "皮膚"]
        }
    },
    "FengGe_Parents": {
        key: "FengGe_Parents",
        conditions: { withStars: ["鳳閣"], palace: "父母宮" },
        content: {
            summary: "父母貴氣，出身好。",
            description: "父母有修養，環境優渥。",
            keywords: ["貴氣", "優渥"]
        }
    },
    "FengGe_Children": {
        key: "FengGe_Children",
        conditions: { withStars: ["鳳閣"], palace: "子女宮" },
        content: {
            summary: "子女愛美，有氣質。",
            description: "子女長得漂亮，喜歡打扮。",
            keywords: ["愛美", "氣質"]
        }
    },
    "FengGe_Siblings": {
        key: "FengGe_Siblings",
        conditions: { withStars: ["鳳閣"], palace: "兄弟宮" },
        content: {
            summary: "兄弟體面，有成。",
            description: "手足多為體面之人。",
            keywords: ["體面", "有成"]
        }
    },
    "FengGe_Friends": {
        key: "FengGe_Friends",
        conditions: { withStars: ["鳳閣"], palace: "交友宮" },
        content: {
            summary: "交遊廣闊，多貴人。",
            description: "結交有品味或地位的朋友。",
            keywords: ["廣闊", "品味"]
        }
    },
    "FengGe_Karma": {
        key: "FengGe_Karma",
        conditions: { withStars: ["鳳閣"], palace: "福德宮" },
        content: {
            summary: "精神享受，品味生活。",
            description: "喜愛藝術、美食。生活有情調。",
            keywords: ["享受", "情調"]
        }
    },
    "LongChi_Life": {
        key: "LongChi_Life",
        conditions: { withStars: ["龍池"], palace: "命宮" },
        content: {
            summary: "氣度不凡，有才華。",
            description: "舉止優雅，有文藝氣息。利於攀龍附鳳。",
            keywords: ["氣度", "文藝"]
        }
    },
    "LongChi_Spouse": {
        key: "LongChi_Spouse",
        conditions: { withStars: ["龍池"], palace: "夫妻宮" },
        content: {
            summary: "配偶貴氣，持家有方。",
            description: "配偶條件好，能增進社會地位。",
            keywords: ["貴氣", "地位"]
        }
    },
    "LongChi_Wealth": {
        key: "LongChi_Wealth",
        conditions: { withStars: ["龍池"], palace: "財帛宮" },
        content: {
            summary: "憑才生財，財源高雅。",
            description: "靠名聲或才藝賺錢。",
            keywords: ["才藝", "高雅"]
        }
    },
    "LongChi_Career": {
        key: "LongChi_Career",
        conditions: { withStars: ["龍池"], palace: "官祿宮" },
        content: {
            summary: "職位顯耀，受重用。",
            description: "適專門技術或藝術工作。易得提拔。",
            keywords: ["顯耀", "技術"]
        }
    },
    "LongChi_Property": {
        key: "LongChi_Property",
        conditions: { withStars: ["龍池"], palace: "田宅宮" },
        content: {
            summary: "豪宅名第，環境優越。",
            description: "住家豪華氣派。鄰近豪宅區。",
            keywords: ["豪宅", "氣派"]
        }
    },
    "LongChi_Travel": {
        key: "LongChi_Travel",
        conditions: { withStars: ["龍池"], palace: "遷移宮" },
        content: {
            summary: "出外顯達，機遇佳。",
            description: "在外易受人尊重。",
            keywords: ["顯達", "尊重"]
        }
    },
    "LongChi_Health": {
        key: "LongChi_Health",
        conditions: { withStars: ["龍池"], palace: "疾厄宮" },
        content: {
            summary: "耳聰目明，身體佳。",
            description: "注意耳部疾病。大體健康。",
            keywords: ["健康", "耳疾"]
        }
    },
    "LongChi_Parents": {
        key: "LongChi_Parents",
        conditions: { withStars: ["龍池"], palace: "父母宮" },
        content: {
            summary: "父母有名望，家世好。",
            description: "出身良好家庭。",
            keywords: ["名望", "家世"]
        }
    },
    "LongChi_Children": {
        key: "LongChi_Children",
        conditions: { withStars: ["龍池"], palace: "子女宮" },
        content: {
            summary: "子女成材，氣質佳。",
            description: "子女有才華，將來有出息。",
            keywords: ["成材", "才華"]
        }
    },
    "LongChi_Siblings": {
        key: "LongChi_Siblings",
        conditions: { withStars: ["龍池"], palace: "兄弟宮" },
        content: {
            summary: "兄弟貴人，互助有力。",
            description: "手足中有成就者。",
            keywords: ["貴人", "互助"]
        }
    },
    "LongChi_Friends": {
        key: "LongChi_Friends",
        conditions: { withStars: ["龍池"], palace: "交友宮" },
        content: {
            summary: "往來無白丁，友多貴。",
            description: "結交層次高的朋友。",
            keywords: ["高層", "貴人"]
        }
    },
    "LongChi_Karma": {
        key: "LongChi_Karma",
        conditions: { withStars: ["龍池"], palace: "福德宮" },
        content: {
            summary: "自視甚高，精神富足。",
            description: "重名聲，愛惜羽毛。晚年享清譽。",
            keywords: ["名聲", "清譽"]
        }
    },
    "HongLuan_Life": {
        key: "HongLuan_Life",
        conditions: { withStars: ["紅鸞"], palace: "命宮" },
        content: {
            summary: "桃花人緣，早婚之兆。",
            description: "性格開朗，人緣佳。主早婚，異性緣重。重視打扮。",
            keywords: ["桃花", "早婚"]
        }
    },
    "HongLuan_Spouse": {
        key: "HongLuan_Spouse",
        conditions: { withStars: ["紅鸞"], palace: "夫妻宮" },
        content: {
            summary: "配偶美貌，感情豐富。",
            description: "配偶顏值高。感情生活浪漫多姿。",
            keywords: ["美貌", "浪漫"]
        }
    },
    "HongLuan_Wealth": {
        key: "HongLuan_Wealth",
        conditions: { withStars: ["紅鸞"], palace: "財帛宮" },
        content: {
            summary: "異性生財，花費亦多。",
            description: "賺異性財。賺錢容易，但也愛花錢裝扮。",
            keywords: ["異性", "花費"]
        }
    },
    "HongLuan_Career": {
        key: "HongLuan_Career",
        conditions: { withStars: ["紅鸞"], palace: "官祿宮" },
        content: {
            summary: "公關人緣，從事美業。",
            description: "適公關、服務、美容業。職場人緣好。",
            keywords: ["公關", "美業"]
        }
    },
    "HongLuan_Karma": {
        key: "HongLuan_Karma",
        conditions: { withStars: ["紅鸞"], palace: "福德宮" },
        content: {
            summary: "精神愉快，重視情調。",
            description: "喜愛風花雪月。晚年仍注重儀表。",
            keywords: ["情調", "儀表"]
        }
    },
    "HongLuan_Travel": {
        key: "HongLuan_Travel",
        conditions: { withStars: ["紅鸞"], palace: "遷移宮" },
        content: {
            summary: "出外受寵，異性貴人。",
            description: "在外地受歡迎。易有艷遇。",
            keywords: ["受寵", "艷遇"]
        }
    },
    "HongLuan_Health": {
        key: "HongLuan_Health",
        conditions: { withStars: ["紅鸞"], palace: "疾厄宮" },
        content: {
            summary: "血液循環，婦科隱憂。",
            description: "主心血管或婦科。注意傷風感冒。",
            keywords: ["血液", "婦科"]
        }
    },
    "HongLuan_Friends": {
        key: "HongLuan_Friends",
        conditions: { withStars: ["紅鸞"], palace: "交友宮" },
        content: {
            summary: "友多異性，交際花。",
            description: "朋友多且風流。社交圈廣。",
            keywords: ["異性", "社交"]
        }
    },
    "HongLuan_Property": {
        key: "HongLuan_Property",
        conditions: { withStars: ["紅鸞"], palace: "田宅宮" },
        content: {
            summary: "居家漂亮，佈置浪漫。",
            description: "住家裝潢講究。喜歡佈置。",
            keywords: ["漂亮", "浪漫"]
        }
    },
    "HongLuan_Children": {
        key: "HongLuan_Children",
        conditions: { withStars: ["紅鸞"], palace: "子女宮" },
        content: {
            summary: "子女漂亮，緣分深。",
            description: "女兒多或女兒漂亮。子女早熟。",
            keywords: ["漂亮", "早熟"]
        }
    },
    "HongLuan_Parents": {
        key: "HongLuan_Parents",
        conditions: { withStars: ["紅鸞"], palace: "父母宮" },
        content: {
            summary: "父母開明，關係融洽。",
            description: "父母疼愛。親情濃厚。",
            keywords: ["開明", "濃厚"]
        }
    },
    "HongLuan_Siblings": {
        key: "HongLuan_Siblings",
        conditions: { withStars: ["紅鸞"], palace: "兄弟宮" },
        content: {
            summary: "姊妹多，感情好。",
            description: "手足中多女性或外貌佳者。",
            keywords: ["姊妹", "外貌"]
        }
    },
    "TianXi_Life": {
        key: "TianXi_Life",
        conditions: { withStars: ["天喜"], palace: "命宮" },
        content: {
            summary: "樂觀豁達，喜事連連。",
            description: "性格隨和，整天笑以此臉。主喜慶、人緣。",
            keywords: ["樂觀", "喜慶"]
        }
    },
    "TianXi_Spouse": {
        key: "TianXi_Spouse",
        conditions: { withStars: ["天喜"], palace: "夫妻宮" },
        content: {
            summary: "配偶和悅，婚姻喜氣。",
            description: "夫妻感情和睦。配偶人緣好。",
            keywords: ["和悅", "和睦"]
        }
    },
    "TianXi_Wealth": {
        key: "TianXi_Wealth",
        conditions: { withStars: ["天喜"], palace: "財帛宮" },
        content: {
            summary: "得財歡喜，輕鬆之財。",
            description: "財源順暢。常有意外驚喜。",
            keywords: ["歡喜", "驚喜"]
        }
    },
    "TianXi_Career": {
        key: "TianXi_Career",
        conditions: { withStars: ["天喜"], palace: "官祿宮" },
        content: {
            summary: "職場順心，升遷喜訊。",
            description: "工作愉快。常有升遷或嘉獎之喜。",
            keywords: ["順心", "升遷"]
        }
    },
    "TianXi_Karma": {
        key: "TianXi_Karma",
        conditions: { withStars: ["天喜"], palace: "福德宮" },
        content: {
            summary: "心情愉快，老運安詳。",
            description: "煩惱少。易知足。",
            keywords: ["愉快", "知足"]
        }
    },
    "TianXi_Travel": {
        key: "TianXi_Travel",
        conditions: { withStars: ["天喜"], palace: "遷移宮" },
        content: {
            summary: "出外有人緣，處處逢迎。",
            description: "外出運好，受歡迎。",
            keywords: ["人緣", "歡迎"]
        }
    },
    "TianXi_Health": {
        key: "TianXi_Health",
        conditions: { withStars: ["天喜"], palace: "疾厄宮" },
        content: {
            summary: "身體健康，心情開朗。",
            description: "少病痛。注意頭部或血液。",
            keywords: ["健康", "開朗"]
        }
    },
    "TianXi_Friends": {
        key: "TianXi_Friends",
        conditions: { withStars: ["天喜"], palace: "交友宮" },
        content: {
            summary: "友多和善，聚會歡樂。",
            description: "朋友都是開心果。聚會氣氛佳。",
            keywords: ["和善", "歡樂"]
        }
    },
    "TianXi_Property": {
        key: "TianXi_Property",
        conditions: { withStars: ["天喜"], palace: "田宅宮" },
        content: {
            summary: "家有喜事，居家溫馨。",
            description: "家中常有笑聲。易置產。",
            keywords: ["喜事", "溫馨"]
        }
    },
    "TianXi_Children": {
        key: "TianXi_Children",
        conditions: { withStars: ["天喜"], palace: "子女宮" },
        content: {
            summary: "子女可愛，討人喜歡。",
            description: "子女緣份好。帶來歡樂。",
            keywords: ["可愛", "歡樂"]
        }
    },
    "TianXi_Parents": {
        key: "TianXi_Parents",
        conditions: { withStars: ["天喜"], palace: "父母宮" },
        content: {
            summary: "父母慈祥，家庭和樂。",
            description: "與父母關係融洽。",
            keywords: ["慈祥", "和樂"]
        }
    },
    "TianXi_Siblings": {
        key: "TianXi_Siblings",
        conditions: { withStars: ["天喜"], palace: "兄弟宮" },
        content: {
            summary: "手足情深，互助互愛。",
            description: "兄弟間常用往來。",
            keywords: ["情深", "往來"]
        }
    },
    "GuChen_Life": {
        key: "GuChen_Life",
        conditions: { withStars: ["孤辰"], palace: "命宮" },
        content: {
            summary: "性格孤僻，獨立自主。",
            description: "主孤獨、固執。不喜社交，享受獨處。六親緣薄。",
            keywords: ["孤僻", "獨立"]
        }
    },
    "GuChen_Spouse": {
        key: "GuChen_Spouse",
        conditions: { withStars: ["孤辰"], palace: "夫妻宮" },
        content: {
            summary: "夫妻緣淺，聚少離多。",
            description: "婚姻難成，或婚後同床異夢。有獨身傾向。",
            keywords: ["緣淺", "異夢"]
        }
    },
    "GuChen_Wealth": {
        key: "GuChen_Wealth",
        conditions: { withStars: ["孤辰"], palace: "財帛宮" },
        content: {
            summary: "愛財如命，守財奴。",
            description: "重視金錢，不願與人分享。獨自理財。",
            keywords: ["守財", "獨立"]
        }
    },
    "GuChen_Karma": {
        key: "GuChen_Karma",
        conditions: { withStars: ["孤辰"], palace: "福德宮" },
        content: {
            summary: "內心孤寂，思想獨特。",
            description: "精神孤獨，不被理解。晚年孤單。",
            keywords: ["孤寂", "獨特"]
        }
    },
    "GuChen_Travel": {
        key: "GuChen_Travel",
        conditions: { withStars: ["孤辰"], palace: "遷移宮" },
        content: {
            summary: "出外孤單，無親無故。",
            description: "在外靠自己，少貴人。",
            keywords: ["孤單", "無助"]
        }
    },
    "GuChen_Career": {
        key: "GuChen_Career",
        conditions: { withStars: ["孤辰"], palace: "官祿宮" },
        content: {
            summary: "獨立作業，獨當一面。",
            description: "適合獨立工作或研究。不喜團隊合作。",
            keywords: ["獨立", "研究"]
        }
    },
    "GuChen_Health": {
        key: "GuChen_Health",
        conditions: { withStars: ["孤辰"], palace: "疾厄宮" },
        content: {
            summary: "憂鬱封閉，暗疾難醫。",
            description: "心病還需心藥醫。注意精神健康。",
            keywords: ["憂鬱", "封閉"]
        }
    },
    "GuChen_Friends": {
        key: "GuChen_Friends",
        conditions: { withStars: ["孤辰"], palace: "交友宮" },
        content: {
            summary: "朋友稀少，格格不入。",
            description: "知己難尋。不善交際。",
            keywords: ["稀少", "不入"]
        }
    },
    "GuChen_Property": {
        key: "GuChen_Property",
        conditions: { withStars: ["孤辰"], palace: "田宅宮" },
        content: {
            summary: "居家清靜，離群索居。",
            description: "喜住清靜處。家人互動少。",
            keywords: ["清靜", "少言"]
        }
    },
    "GuChen_Parents": {
        key: "GuChen_Parents",
        conditions: { withStars: ["孤辰"], palace: "父母宮" },
        content: {
            summary: "早年離家，親情淡薄。",
            description: "與父母緣分淺。或早獨立。",
            keywords: ["離家", "淡薄"]
        }
    },
    "GuChen_Children": {
        key: "GuChen_Children",
        conditions: { withStars: ["孤辰"], palace: "子女宮" },
        content: {
            summary: "子女少，或分居。",
            description: "親子關係疏離。晚得子。",
            keywords: ["少子", "疏離"]
        }
    },
    "GuChen_Siblings": {
        key: "GuChen_Siblings",
        conditions: { withStars: ["孤辰"], palace: "兄弟宮" },
        content: {
            summary: "兄弟少聯絡，各自為政。",
            description: "手足不親。",
            keywords: ["少聯絡", "不親"]
        }
    },
    "GuaSu_Life": {
        key: "GuaSu_Life",
        conditions: { withStars: ["寡宿"], palace: "命宮" },
        content: {
            summary: "孤芳自賞，難以親近。",
            description: "性情孤僻，自我保護色重。女命尤忌，主刑剋丈夫或晚婚。",
            keywords: ["孤僻", "晚婚"]
        }
    },
    "GuaSu_Spouse": {
        key: "GuaSu_Spouse",
        conditions: { withStars: ["寡宿"], palace: "夫妻宮" },
        content: {
            summary: "聚少離多，同床異夢。",
            description: "婚姻難偕老。配偶個性冷淡。",
            keywords: ["離多", "冷淡"]
        }
    },
    "GuaSu_Karma": {
        key: "GuaSu_Karma",
        conditions: { withStars: ["寡宿"], palace: "福德宮" },
        content: {
            summary: "鬱鬱寡歡，自尋煩惱。",
            description: "內心封閉，不快樂。晚年孤獨。",
            keywords: ["封閉", "孤獨"]
        }
    },
    "GuaSu_Wealth": {
        key: "GuaSu_Wealth",
        conditions: { withStars: ["寡宿"], palace: "財帛宮" },
        content: {
            summary: "財不外露，善於儲蓄。",
            description: "守財奴。對錢財看得很重。",
            keywords: ["不露", "儲蓄"]
        }
    },
    "GuaSu_Career": {
        key: "GuaSu_Career",
        conditions: { withStars: ["寡宿"], palace: "官祿宮" },
        content: {
            summary: "獨來獨往，默默耕耘。",
            description: "適內勤、技術。工作需耐得住寂寞。",
            keywords: ["獨往", "寂寞"]
        }
    },
    "GuaSu_Travel": {
        key: "GuaSu_Travel",
        conditions: { withStars: ["寡宿"], palace: "遷移宮" },
        content: {
            summary: "出外不群，落落寡合。",
            description: "在外地朋友少。喜獨行。",
            keywords: ["不群", "獨行"]
        }
    },
    "GuaSu_Health": {
        key: "GuaSu_Health",
        conditions: { withStars: ["寡宿"], palace: "疾厄宮" },
        content: {
            summary: "氣血不順，婦科暗疾。",
            description: "主相思病、憂鬱。女命注意婦科。",
            keywords: ["氣血", "婦科"]
        }
    },
    "GuaSu_Friends": {
        key: "GuaSu_Friends",
        conditions: { withStars: ["寡宿"], palace: "交友宮" },
        content: {
            summary: "深居簡出，鮮少應酬。",
            description: "朋友圈小。不喜社交。",
            keywords: ["簡出", "不喜"]
        }
    },
    "GuaSu_Property": {
        key: "GuaSu_Property",
        conditions: { withStars: ["寡宿"], palace: "田宅宮" },
        content: {
            summary: "深宅大院，雖然封閉。",
            description: "喜住幽靜處。家門緊閉。",
            keywords: ["深宅", "封閉"]
        }
    },
    "GuaSu_Parents": {
        key: "GuaSu_Parents",
        conditions: { withStars: ["寡宿"], palace: "父母宮" },
        content: {
            summary: "與父母不親，代溝深。",
            description: "親情淡薄。或單親。",
            keywords: ["不親", "淡薄"]
        }
    },
    "GuaSu_Children": {
        key: "GuaSu_Children",
        conditions: { withStars: ["寡宿"], palace: "子女宮" },
        content: {
            summary: "無子或少子，得女。",
            description: "子女緣薄。晚年不在身邊。",
            keywords: ["無子", "緣薄"]
        }
    },
    "GuaSu_Siblings": {
        key: "GuaSu_Siblings",
        conditions: { withStars: ["寡宿"], palace: "兄弟宮" },
        content: {
            summary: "獨生子女，或不往來。",
            description: "手足少或感情差。",
            keywords: ["獨生", "不往來"]
        }
    },
    "SanTai_Life": {
        key: "SanTai_Life",
        conditions: { withStars: ["三台"], palace: "命宮" },
        content: {
            summary: "威儀莊重，位高權重。",
            description: "主地位、隨從。性格光明磊落，喜排場。輔佐紫微星最佳。",
            keywords: ["威儀", "排場"]
        }
    },
    "SanTai_Career": {
        key: "SanTai_Career",
        conditions: { withStars: ["三台"], palace: "官祿宮" },
        content: {
            summary: "步步高升，眾人擁戴。",
            description: "職場地位高。有群眾基礎。",
            keywords: ["高升", "擁戴"]
        }
    },
    "SanTai_Wealth": {
        key: "SanTai_Wealth",
        conditions: { withStars: ["三台"], palace: "財帛宮" },
        content: {
            summary: "財源寬廣，氣派生財。",
            description: "賺錢門路多。講究排場。",
            keywords: ["寬廣", "氣派"]
        }
    },
    "SanTai_Karma": {
        key: "SanTai_Karma",
        conditions: { withStars: ["三台"], palace: "福德宮" },
        content: {
            summary: "心胸寬大，受人敬重。",
            description: "精神愉快，地位尊崇。",
            keywords: ["寬大", "敬重"]
        }
    },
    "SanTai_Travel": {
        key: "SanTai_Travel",
        conditions: { withStars: ["三台"], palace: "遷移宮" },
        content: {
            summary: "出外顯耀，前呼後擁。",
            description: "在外地有面子。交際應酬多。",
            keywords: ["顯耀", "應酬"]
        }
    },
    "SanTai_Spouse": {
        key: "SanTai_Spouse",
        conditions: { withStars: ["三台"], palace: "夫妻宮" },
        content: {
            summary: "配偶敦厚，匹配良緣。",
            description: "配偶條件好，能匹配。",
            keywords: ["敦厚", "匹配"]
        }
    },
    "SanTai_Friends": {
        key: "SanTai_Friends",
        conditions: { withStars: ["三台"], palace: "交友宮" },
        content: {
            summary: "友多權貴，往來熱絡。",
            description: "結交有地位之友。",
            keywords: ["權貴", "熱絡"]
        }
    },
    "SanTai_Parents": {
        key: "SanTai_Parents",
        conditions: { withStars: ["三台"], palace: "父母宮" },
        content: {
            summary: "父母有名聲，地位高。",
            description: "出身名門或富家。",
            keywords: ["名聲", "地位"]
        }
    },
    "SanTai_Children": {
        key: "SanTai_Children",
        conditions: { withStars: ["三台"], palace: "子女宮" },
        content: {
            summary: "子女成群，或有出息。",
            description: "子女發展不錯。",
            keywords: ["成群", "出息"]
        }
    },
    "SanTai_Siblings": {
        key: "SanTai_Siblings",
        conditions: { withStars: ["三台"], palace: "兄弟宮" },
        content: {
            summary: "兄弟有成，互助互利。",
            description: "手足發展好。",
            keywords: ["有成", "互利"]
        }
    },
    "SanTai_Property": {
        key: "SanTai_Property",
        conditions: { withStars: ["三台"], palace: "田宅宮" },
        content: {
            summary: "門面光鮮，地段優越。",
            description: "房產多且值錢。住大馬路邊。",
            keywords: ["光鮮", "值錢"]
        }
    },
    "SanTai_Health": {
        key: "SanTai_Health",
        conditions: { withStars: ["三台"], palace: "疾厄宮" },
        content: {
            summary: "身體健壯，少病痛。",
            description: "體質好。",
            keywords: ["健壯", "少病"]
        }
    },
    "BaZuo_Life": {
        key: "BaZuo_Life",
        conditions: { withStars: ["八座"], palace: "命宮" },
        content: {
            summary: "穩重隨和，處事圓融。",
            description: "主地位、車輛。性格沈穩，喜安定。配合三台星力量更強。",
            keywords: ["穩重", "安定"]
        }
    },
    "BaZuo_Career": {
        key: "BaZuo_Career",
        conditions: { withStars: ["八座"], palace: "官祿宮" },
        content: {
            summary: "職位穩固，權力在握。",
            description: "工作穩定，地位不易動搖。",
            keywords: ["穩固", "權力"]
        }
    },
    "BaZuo_Wealth": {
        key: "BaZuo_Wealth",
        conditions: { withStars: ["八座"], palace: "財帛宮" },
        content: {
            summary: "進財平穩，積少成多。",
            description: "財源穩定，不愁吃穿。",
            keywords: ["平穩", "積少"]
        }
    },
    "BaZuo_Karma": {
        key: "BaZuo_Karma",
        conditions: { withStars: ["八座"], palace: "福德宮" },
        content: {
            summary: "知足常樂，精神安逸。",
            description: "心境平和。晚年享福。",
            keywords: ["知足", "安逸"]
        }
    },
    "BaZuo_Travel": {
        key: "BaZuo_Travel",
        conditions: { withStars: ["八座"], palace: "遷移宮" },
        content: {
            summary: "出外順利，交通平安。",
            description: "在外地適應好。常有車馬之勞。",
            keywords: ["順利", "平安"]
        }
    },
    "BaZuo_Spouse": {
        key: "BaZuo_Spouse",
        conditions: { withStars: ["八座"], palace: "夫妻宮" },
        content: {
            summary: "婚姻穩定，配偶顧家。",
            description: "配偶個性好。家庭觀念重。",
            keywords: ["穩定", "顧家"]
        }
    },
    "BaZuo_Friends": {
        key: "BaZuo_Friends",
        conditions: { withStars: ["八座"], palace: "交友宮" },
        content: {
            summary: "友多助力，關係長久。",
            description: "朋友忠誠可靠。",
            keywords: ["助力", "長久"]
        }
    },
    "BaZuo_Parents": {
        key: "BaZuo_Parents",
        conditions: { withStars: ["八座"], palace: "父母宮" },
        content: {
            summary: "父母慈愛，家境小康。",
            description: "父母為人隨和。",
            keywords: ["慈愛", "小康"]
        }
    },
    "BaZuo_Children": {
        key: "BaZuo_Children",
        conditions: { withStars: ["八座"], palace: "子女宮" },
        content: {
            summary: "子女乖順，不用操心。",
            description: "子女聽話。",
            keywords: ["乖順", "聽話"]
        }
    },
    "BaZuo_Siblings": {
        key: "BaZuo_Siblings",
        conditions: { withStars: ["八座"], palace: "兄弟宮" },
        content: {
            summary: "兄弟和氣，往來密切。",
            description: "手足感情不錯。",
            keywords: ["和氣", "密切"]
        }
    },
    "BaZuo_Property": {
        key: "BaZuo_Property",
        conditions: { withStars: ["八座"], palace: "田宅宮" },
        content: {
            summary: "置產順利，居家安定。",
            description: "住家環境安靜。有車位。",
            keywords: ["順利", "安定"]
        }
    },
    "BaZuo_Health": {
        key: "BaZuo_Health",
        conditions: { withStars: ["八座"], palace: "疾厄宮" },
        content: {
            summary: "脾胃健康，少病。",
            description: "身體底子好。",
            keywords: ["健康", "少病"]
        }
    },
    "EnGuang_Life": {
        key: "EnGuang_Life",
        conditions: { withStars: ["恩光"], palace: "命宮" },
        content: {
            summary: "蒙受恩寵，飲水思源。",
            description: "主榮耀、恩賞。性格感恩，易得貴人長輩提拔。考試順利。",
            keywords: ["恩寵", "提拔"]
        }
    },
    "EnGuang_Career": {
        key: "EnGuang_Career",
        conditions: { withStars: ["恩光"], palace: "官祿宮" },
        content: {
            summary: "特殊表彰，升遷快速。",
            description: "職場上常受上級誇獎。易獲獎。",
            keywords: ["表彰", "升遷"]
        }
    },
    "EnGuang_Wealth": {
        key: "EnGuang_Wealth",
        conditions: { withStars: ["恩光"], palace: "財帛宮" },
        content: {
            summary: "得人贈與，意外之財。",
            description: "常有長輩或貴人饋贈。",
            keywords: ["贈與", "意外"]
        }
    },
    "EnGuang_Karma": {
        key: "EnGuang_Karma",
        conditions: { withStars: ["恩光"], palace: "福德宮" },
        content: {
            summary: "心存感激，精神富足。",
            description: "為人厚道，有福氣。",
            keywords: ["感激", "厚道"]
        }
    },
    "EnGuang_Travel": {
        key: "EnGuang_Travel",
        conditions: { withStars: ["恩光"], palace: "遷移宮" },
        content: {
            summary: "出外遇貴，四方有助。",
            description: "在外地有人照顧。",
            keywords: ["遇貴", "照顧"]
        }
    },
    "EnGuang_Spouse": {
        key: "EnGuang_Spouse",
        conditions: { withStars: ["恩光"], palace: "夫妻宮" },
        content: {
            summary: "配偶賢慧，恩愛有加。",
            description: "夫妻感情好，互敬互愛。",
            keywords: ["賢慧", "恩愛"]
        }
    },
    "EnGuang_Friends": {
        key: "EnGuang_Friends",
        conditions: { withStars: ["恩光"], palace: "交友宮" },
        content: {
            summary: "益友良師，互相勉勵。",
            description: "朋友多為貴人。",
            keywords: ["益友", "勉勵"]
        }
    },
    "EnGuang_Parents": {
        key: "EnGuang_Parents",
        conditions: { withStars: ["恩光"], palace: "父母宮" },
        content: {
            summary: "父母慈恩，庇蔭深厚。",
            description: "雙親對你有恩情，助力大。",
            keywords: ["慈恩", "庇蔭"]
        }
    },
    "EnGuang_Children": {
        key: "EnGuang_Children",
        conditions: { withStars: ["恩光"], palace: "子女宮" },
        content: {
            summary: "子女孝順，知恩圖報。",
            description: "子女懂事，將來孝養父母。",
            keywords: ["孝順", "知恩"]
        }
    },
    "EnGuang_Siblings": {
        key: "EnGuang_Siblings",
        conditions: { withStars: ["恩光"], palace: "兄弟宮" },
        content: {
            summary: "兄弟有義，情濃。",
            description: "手足互助。",
            keywords: ["有義", "情濃"]
        }
    },
    "EnGuang_Property": {
        key: "EnGuang_Property",
        conditions: { withStars: ["恩光"], palace: "田宅宮" },
        content: {
            summary: "繼承祖產，家宅光輝。",
            description: "易得長輩贈房。",
            keywords: ["繼承", "光輝"]
        }
    },
    "EnGuang_Health": {
        key: "EnGuang_Health",
        conditions: { withStars: ["恩光"], palace: "疾厄宮" },
        content: {
            summary: "逢凶化吉，遇難呈祥。",
            description: "生病遇良醫。",
            keywords: ["化吉", "良醫"]
        }
    },
    "TianGui_Life": {
        key: "TianGui_Life",
        conditions: { withStars: ["天貴"], palace: "命宮" },
        content: {
            summary: "誠實守信，貴氣逼人。",
            description: "主顯貴、官爵。性格忠厚，重承諾。一生多貴人。",
            keywords: ["誠實", "顯貴"]
        }
    },
    "TianGui_Career": {
        key: "TianGui_Career",
        conditions: { withStars: ["天貴"], palace: "官祿宮" },
        content: {
            summary: "官運亨通，位高權重。",
            description: "在職場上有地位。適公職。",
            keywords: ["亨通", "地位"]
        }
    },
    "TianGui_Wealth": {
        key: "TianGui_Wealth",
        conditions: { withStars: ["天貴"], palace: "財帛宮" },
        content: {
            summary: "正財豐厚，得人信任。",
            description: "因信譽好而生財。",
            keywords: ["豐厚", "信任"]
        }
    },
    "TianGui_Karma": {
        key: "TianGui_Karma",
        conditions: { withStars: ["天貴"], palace: "福德宮" },
        content: {
            summary: "備受尊崇，快樂如意。",
            description: "晚年受人尊敬。",
            keywords: ["尊崇", "如意"]
        }
    },
    "TianGui_Travel": {
        key: "TianGui_Travel",
        conditions: { withStars: ["天貴"], palace: "遷移宮" },
        content: {
            summary: "出外顯達，四海揚名。",
            description: "在外地有點名氣。",
            keywords: ["顯達", "揚名"]
        }
    },
    "TianGui_Spouse": {
        key: "TianGui_Spouse",
        conditions: { withStars: ["天貴"], palace: "夫妻宮" },
        content: {
            summary: "配偶貴氣，家世良好。",
            description: "配偶出身不錯。",
            keywords: ["貴氣", "家世"]
        }
    },
    "TianGui_Friends": {
        key: "TianGui_Friends",
        conditions: { withStars: ["天貴"], palace: "交友宮" },
        content: {
            summary: "交往皆貴，有助事業。",
            description: "朋友層次高。",
            keywords: ["貴人", "事業"]
        }
    },
    "TianGui_Parents": {
        key: "TianGui_Parents",
        conditions: { withStars: ["天貴"], palace: "父母宮" },
        content: {
            summary: "父母榮顯，有社會地位。",
            description: "父母有名望。",
            keywords: ["榮顯", "名望"]
        }
    },
    "TianGui_Children": {
        key: "TianGui_Children",
        conditions: { withStars: ["天貴"], palace: "子女宮" },
        content: {
            summary: "子女成材，光宗耀祖。",
            description: "子女有成就。",
            keywords: ["成材", "耀祖"]
        }
    },
    "TianGui_Siblings": {
        key: "TianGui_Siblings",
        conditions: { withStars: ["天貴"], palace: "兄弟宮" },
        content: {
            summary: "兄弟顯要，互為貴人。",
            description: "手足發展好。",
            keywords: ["顯要", "貴人"]
        }
    },
    "TianGui_Property": {
        key: "TianGui_Property",
        conditions: { withStars: ["天貴"], palace: "田宅宮" },
        content: {
            summary: "置產順利，鄰里顯貴。",
            description: "住在高級地段。",
            keywords: ["順利", "高級"]
        }
    },
    "TianGui_Health": {
        key: "TianGui_Health",
        conditions: { withStars: ["天貴"], palace: "疾厄宮" },
        content: {
            summary: "身體貴重，保養得宜。",
            description: "身體狀況好。",
            keywords: ["貴重", "保養"]
        }
    },
    "TianXing_Life": {
        key: "TianXing_Life",
        conditions: { withStars: ["天刑"], palace: "命宮" },
        content: {
            summary: "剛強果決，自律甚嚴。",
            description: "主刑法、自律。性格剛毅，原則性強。易有孤獨感。",
            keywords: ["剛強", "自律"]
        }
    },
    "TianXing_Career": {
        key: "TianXing_Career",
        conditions: { withStars: ["天刑"], palace: "官祿宮" },
        content: {
            summary: "律法執行，秉公處理。",
            description: "適軍警、司法、律師。工作需嚴謹。",
            keywords: ["律法", "嚴謹"]
        }
    },
    "TianXing_Wealth": {
        key: "TianXing_Wealth",
        conditions: { withStars: ["天刑"], palace: "財帛宮" },
        content: {
            summary: "因訟得財，或因財興訟。",
            description: "財運與法律有關。防官非破財。",
            keywords: ["訟財", "官非"]
        }
    },
    "TianXing_Karma": {
        key: "TianXing_Karma",
        conditions: { withStars: ["天刑"], palace: "福德宮" },
        content: {
            summary: "內心嚴肅，不易放鬆。",
            description: "自我要求高。精神壓力大。",
            keywords: ["嚴肅", "壓力"]
        }
    },
    "TianXing_Travel": {
        key: "TianXing_Travel",
        conditions: { withStars: ["天刑"], palace: "遷移宮" },
        content: {
            summary: "出外防災，遠離是非。",
            description: "在外易有糾紛。需守法。",
            keywords: ["防災", "守法"]
        }
    },
    "TianXing_Spouse": {
        key: "TianXing_Spouse",
        conditions: { withStars: ["天刑"], palace: "夫妻宮" },
        content: {
            summary: "配偶剛強，易起爭執。",
            description: "配偶個性硬。婚姻多磨擦。",
            keywords: ["剛強", "爭執"]
        }
    },
    "TianXing_Health": {
        key: "TianXing_Health",
        conditions: { withStars: ["天刑"], palace: "疾厄宮" },
        content: {
            summary: "開刀血光，易受刑傷。",
            description: "主開刀、外傷。注意意外。",
            keywords: ["開刀", "刑傷"]
        }
    },
    "TianXing_Friends": {
        key: "TianXing_Friends",
        conditions: { withStars: ["天刑"], palace: "交友宮" },
        content: {
            summary: "友多剛烈，易生齟齬。",
            description: "朋友個性衝動。易起衝突。",
            keywords: ["剛烈", "衝突"]
        }
    },
    "TianXing_Parents": {
        key: "TianXing_Parents",
        conditions: { withStars: ["天刑"], palace: "父母宮" },
        content: {
            summary: "父母嚴厲，管教甚嚴。",
            description: "與父母有代溝。管教嚴格。",
            keywords: ["嚴厲", "代溝"]
        }
    },
    "TianXing_Children": {
        key: "TianXing_Children",
        conditions: { withStars: ["天刑"], palace: "子女宮" },
        content: {
            summary: "子女難管，個性倔強。",
            description: "子女難教。親子關係緊張。",
            keywords: ["難管", "倔強"]
        }
    },
    "TianXing_Siblings": {
        key: "TianXing_Siblings",
        conditions: { withStars: ["天刑"], palace: "兄弟宮" },
        content: {
            summary: "兄弟不和，爭執刑剋。",
            description: "手足間多爭吵。",
            keywords: ["不和", "爭吵"]
        }
    },
    "TianXing_Property": {
        key: "TianXing_Property",
        conditions: { withStars: ["天刑"], palace: "田宅宮" },
        content: {
            summary: "家宅難安，或近法院。",
            description: "住家附近有警局、法院。火災。",
            keywords: ["難安", "警局"]
        }
    },
    "JieShen_Life": {
        key: "JieShen_Life",
        conditions: { withStars: ["解神"], palace: "命宮" },
        content: {
            summary: "逢凶化吉，排憂解難。",
            description: "主化解。性格樂於助人，消災解厄。",
            keywords: ["化吉", "解厄"]
        }
    },
    "JieShen_Career": {
        key: "JieShen_Career",
        conditions: { withStars: ["解神"], palace: "官祿宮" },
        content: {
            summary: "工作順利，難題得解。",
            description: "工作中遇到的問題多能解決。",
            keywords: ["順利", "解決"]
        }
    },
    "JieShen_Wealth": {
        key: "JieShen_Wealth",
        conditions: { withStars: ["解神"], palace: "財帛宮" },
        content: {
            summary: "財運平順，消災解難。",
            description: "錢財上的問題能化解。",
            keywords: ["平順", "化解"]
        }
    },
    "JieShen_Karma": {
        key: "JieShen_Karma",
        conditions: { withStars: ["解神"], palace: "福德宮" },
        content: {
            summary: "心無掛礙，煩惱消除。",
            description: "精神愉快，看得開。",
            keywords: ["掛礙", "愉快"]
        }
    },
    "JieShen_Travel": {
        key: "JieShen_Travel",
        conditions: { withStars: ["解神"], palace: "遷移宮" },
        content: {
            summary: "出外平安，遇難呈祥。",
            description: "外出運好，有貴人解圍。",
            keywords: ["平安", "解圍"]
        }
    },
    "JieShen_Spouse": {
        key: "JieShen_Spouse",
        conditions: { withStars: ["解神"], palace: "夫妻宮" },
        content: {
            summary: "感情和解，誤會冰釋。",
            description: "夫妻爭執易化解。",
            keywords: ["和解", "冰釋"]
        }
    },
    "JieShen_Friends": {
        key: "JieShen_Friends",
        conditions: { withStars: ["解神"], palace: "交友宮" },
        content: {
            summary: "友多助力，排難解紛。",
            description: "朋友能幫你解決問題。",
            keywords: ["助力", "排難"]
        }
    },
    "JieShen_Parents": {
        key: "JieShen_Parents",
        conditions: { withStars: ["解神"], palace: "父母宮" },
        content: {
            summary: "父母寬厚，善解人意。",
            description: "父母明理。",
            keywords: ["寬厚", "明理"]
        }
    },
    "JieShen_Children": {
        key: "JieShen_Children",
        conditions: { withStars: ["解神"], palace: "子女宮" },
        content: {
            summary: "子女乖巧，無災無難。",
            description: "子女好帶。",
            keywords: ["乖巧", "無難"]
        }
    },
    "JieShen_Siblings": {
        key: "JieShen_Siblings",
        conditions: { withStars: ["解神"], palace: "兄弟宮" },
        content: {
            summary: "兄弟和睦，糾紛得解。",
            description: "手足間無隔閡。",
            keywords: ["和睦", "無隔"]
        }
    },
    "JieShen_Property": {
        key: "JieShen_Property",
        conditions: { withStars: ["解神"], palace: "田宅宮" },
        content: {
            summary: "居家安寧，風水良佳。",
            description: "住家無煞氣。",
            keywords: ["安寧", "良佳"]
        }
    },
    "JieShen_Health": {
        key: "JieShen_Health",
        conditions: { withStars: ["解神"], palace: "疾厄宮" },
        content: {
            summary: "病痛減輕，良醫得治。",
            description: "小病化無。",
            keywords: ["減輕", "得治"]
        }
    },
    "TianYue_Misc_Life": {
        key: "TianYue_Misc_Life",
        conditions: { withStars: ["天月"], palace: "命宮" },
        content: {
            summary: "小病不斷，體質較弱。",
            description: "主疾病。常有慢性病或小毛病纏身。",
            keywords: ["小病", "體弱"]
        }
    },
    "TianYue_Misc_Health": {
        key: "TianYue_Misc_Health",
        conditions: { withStars: ["天月"], palace: "疾厄宮" },
        content: {
            summary: "慢性疾病，久治不癒。",
            description: "易有慢性病，如風濕、過敏。",
            keywords: ["慢性", "不癒"]
        }
    },
    "TianYue_Misc_Parents": {
        key: "TianYue_Misc_Parents",
        conditions: { withStars: ["天月"], palace: "父母宮" },
        content: {
            summary: "父母多病，需人照顧。",
            description: "父母身體不好。",
            keywords: ["多病", "照顧"]
        }
    },
    "TianYue_Misc_Children": {
        key: "TianYue_Misc_Children",
        conditions: { withStars: ["天月"], palace: "子女宮" },
        content: {
            summary: "子女體弱，難養。",
            description: "子女從小多病。",
            keywords: ["體弱", "難養"]
        }
    },
    "TianYue_Misc_Spouse": {
        key: "TianYue_Misc_Spouse",
        conditions: { withStars: ["天月"], palace: "夫妻宮" },
        content: {
            summary: "配偶多病，藥罐子。",
            description: "配偶身體差。",
            keywords: ["多病", "藥罐"]
        }
    },
    "TianYue_Misc_Karma": {
        key: "TianYue_Misc_Karma",
        conditions: { withStars: ["天月"], palace: "福德宮" },
        content: {
            summary: "憂病憂心，精神不振。",
            description: "常擔心健康問題。",
            keywords: ["憂病", "不振"]
        }
    },
    "TianYue_Misc_Wealth": {
        key: "TianYue_Misc_Wealth",
        conditions: { withStars: ["天月"], palace: "財帛宮" },
        content: {
            summary: "因病破財，醫藥費多。",
            description: "錢財耗在看醫生。",
            keywords: ["破財", "醫藥"]
        }
    },
    "TianYue_Misc_Career": {
        key: "TianYue_Misc_Career",
        conditions: { withStars: ["天月"], palace: "官祿宮" },
        content: {
            summary: "職業病，工作影響健康。",
            description: "工作環境不好影響身體，醫藥相關有利。",
            keywords: ["職業病", "醫藥"]
        }
    },
    "TianYue_Misc_Travel": {
        key: "TianYue_Misc_Travel",
        conditions: { withStars: ["天月"], palace: "遷移宮" },
        content: {
            summary: "出外水土不服，易病。",
            description: "在外地容易生病。",
            keywords: ["水土", "易病"]
        }
    },
    "TianYue_Misc_Friends": {
        key: "TianYue_Misc_Friends",
        conditions: { withStars: ["天月"], palace: "交友宮" },
        content: {
            summary: "友多病弱，無力相助。",
            description: "朋友身體都不太好。",
            keywords: ["病弱", "無力"]
        }
    },
    "TianYue_Misc_Siblings": {
        key: "TianYue_Misc_Siblings",
        conditions: { withStars: ["天月"], palace: "兄弟宮" },
        content: {
            summary: "手足體弱，或有早夭。",
            description: "兄弟姊妹身體差。",
            keywords: ["體弱", "早夭"]
        }
    },
    "TianYue_Misc_Property": {
        key: "TianYue_Misc_Property",
        conditions: { withStars: ["天月"], palace: "田宅宮" },
        content: {
            summary: "居家溼氣，細菌滋生。",
            description: "環境不衛生，易生病。",
            keywords: ["溼氣", "細菌"]
        }
    },
    "YinSha_Life": {
        key: "YinSha_Life",
        conditions: { withStars: ["陰煞"], palace: "命宮" },
        content: {
            summary: "小人暗害，疑神疑鬼。",
            description: "主小人、陰謀。易遭暗算，或有靈異體質。性格多疑。",
            keywords: ["小人", "暗害"]
        }
    },
    "YinSha_Career": {
        key: "YinSha_Career",
        conditions: { withStars: ["陰煞"], palace: "官祿宮" },
        content: {
            summary: "職場暗鬥，小人作梗。",
            description: "工作中有小人扯後腿。",
            keywords: ["暗鬥", "作梗"]
        }
    },
    "YinSha_Wealth": {
        key: "YinSha_Wealth",
        conditions: { withStars: ["陰煞"], palace: "財帛宮" },
        content: {
            summary: "暗中損財，遭人詐騙。",
            description: "錢財被偷或被騙。",
            keywords: ["損財", "詐騙"]
        }
    },
    "YinSha_Karma": {
        key: "YinSha_Karma",
        conditions: { withStars: ["陰煞"], palace: "福德宮" },
        content: {
            summary: "惡夢頻仍，精神不安。",
            description: "常做惡夢，犯小人。",
            keywords: ["惡夢", "不安"]
        }
    },
    "YinSha_Travel": {
        key: "YinSha_Travel",
        conditions: { withStars: ["陰煞"], palace: "遷移宮" },
        content: {
            summary: "出外招陰，小人暗箭。",
            description: "在外地易惹陰煞或小人。",
            keywords: ["招陰", "暗箭"]
        }
    },
    "YinSha_Health": {
        key: "YinSha_Health",
        conditions: { withStars: ["陰煞"], palace: "疾厄宮" },
        content: {
            summary: "陰虛怪病，診斷不出。",
            description: "易患暗疾，或精神官能症。",
            keywords: ["陰虛", "怪病"]
        }
    },
    "YinSha_Spouse": {
        key: "YinSha_Spouse",
        conditions: { withStars: ["陰煞"], palace: "夫妻宮" },
        content: {
            summary: "感情猜忌，貌合神離。",
            description: "夫妻互不信任，防第三者。",
            keywords: ["猜忌", "第三者"]
        }
    },
    "YinSha_Friends": {
        key: "YinSha_Friends",
        conditions: { withStars: ["陰煞"], palace: "交友宮" },
        content: {
            summary: "損友潛伏，笑裡藏刀。",
            description: "朋友不可盡信。易被出賣。",
            keywords: ["損友", "藏刀"]
        }
    },
    "YinSha_Parents": {
        key: "YinSha_Parents",
        conditions: { withStars: ["陰煞"], palace: "父母宮" },
        content: {
            summary: "父母偏心，或有隔閡。",
            description: "親情有陰影。",
            keywords: ["偏心", "陰影"]
        }
    },
    "YinSha_Children": {
        key: "YinSha_Children",
        conditions: { withStars: ["陰煞"], palace: "子女宮" },
        content: {
            summary: "子女難教，性格陰沉。",
            description: "子女不聽話，心理陰暗。",
            keywords: ["難教", "陰沉"]
        }
    },
    "YinSha_Siblings": {
        key: "YinSha_Siblings",
        conditions: { withStars: ["陰煞"], palace: "兄弟宮" },
        content: {
            summary: "兄弟算計，明爭暗鬥。",
            description: "手足互不信任。",
            keywords: ["算計", "暗鬥"]
        }
    },
    "YinSha_Property": {
        key: "YinSha_Property",
        conditions: { withStars: ["陰煞"], palace: "田宅宮" },
        content: {
            summary: "居家陰森，鬧鬼或煞。",
            description: "住宅不乾淨。光線陰暗。",
            keywords: ["陰森", "鬧鬼"]
        }
    },
    "FeiLian_Life": {
        key: "FeiLian_Life",
        conditions: { withStars: ["蜚廉"], palace: "命宮" },
        content: {
            summary: "是非口舌，無妄之災。",
            description: "主爭執、是非。喜造謠生事，或被謠言中傷。",
            keywords: ["是非", "造謠"]
        }
    },
    "FeiLian_Career": {
        key: "FeiLian_Career",
        conditions: { withStars: ["蜚廉"], palace: "官祿宮" },
        content: {
            summary: "職場流言，遭人中傷。",
            description: "工作環境多口舌是非。",
            keywords: ["流言", "中傷"]
        }
    },
    "FeiLian_Wealth": {
        key: "FeiLian_Wealth",
        conditions: { withStars: ["蜚廉"], palace: "財帛宮" },
        content: {
            summary: "因言破財，糾紛賠償。",
            description: "錢財引起爭端。",
            keywords: ["破財", "爭端"]
        }
    },
    "FeiLian_Travel": {
        key: "FeiLian_Travel",
        conditions: { withStars: ["蜚廉"], palace: "遷移宮" },
        content: {
            summary: "出外是非，得罪小人。",
            description: "在外言行需謹慎。",
            keywords: ["是非", "小人"]
        }
    },
    "FeiLian_Health": {
        key: "FeiLian_Health",
        conditions: { withStars: ["蜚廉"], palace: "疾厄宮" },
        content: {
            summary: "喉嚨聲帶，呼吸道疾。",
            description: "注意口腔、喉嚨疾病。",
            keywords: ["喉嚨", "呼吸"]
        }
    },
    "FeiLian_Karma": {
        key: "FeiLian_Karma",
        conditions: { withStars: ["蜚廉"], palace: "福德宮" },
        content: {
            summary: "操心是非，不得清靜。",
            description: "常捲入糾紛。",
            keywords: ["操心", "糾紛"]
        }
    },
    "FeiLian_Spouse": {
        key: "FeiLian_Spouse",
        conditions: { withStars: ["蜚廉"], palace: "夫妻宮" },
        content: {
            summary: "夫妻爭吵，口角不斷。",
            description: "婚姻生活中充滿爭吵。",
            keywords: ["爭吵", "口角"]
        }
    },
    "FeiLian_Friends": {
        key: "FeiLian_Friends",
        conditions: { withStars: ["蜚廉"], palace: "交友宮" },
        content: {
            summary: "友多長舌，搬弄是非。",
            description: "朋友愛傳話，破壞名譽。",
            keywords: ["長舌", "搬弄"]
        }
    },
    "FeiLian_Property": {
        key: "FeiLian_Property",
        conditions: { withStars: ["蜚廉"], palace: "田宅宮" },
        content: {
            summary: "鄰里不睦，噪音干擾。",
            description: "與鄰居常吵架。環境吵雜。",
            keywords: ["不睦", "噪音"]
        }
    },
    "FeiLian_Parents": {
        key: "FeiLian_Parents",
        conditions: { withStars: ["蜚廉"], palace: "父母宮" },
        content: {
            summary: "頂撞父母，爭執多。",
            description: "與父母溝通不良。",
            keywords: ["頂撞", "爭執"]
        }
    },
    "FeiLian_Children": {
        key: "FeiLian_Children",
        conditions: { withStars: ["蜚廉"], palace: "子女宮" },
        content: {
            summary: "子女叛逆，好頂嘴。",
            description: "子女愛爭辯。",
            keywords: ["叛逆", "頂嘴"]
        }
    },
    "FeiLian_Siblings": {
        key: "FeiLian_Siblings",
        conditions: { withStars: ["蜚廉"], palace: "兄弟宮" },
        content: {
            summary: "兄弟鬩牆，口角生嫌。",
            description: "手足間多口舌。",
            keywords: ["鬩牆", "口角"]
        }
    },
    "PoSui_Life": {
        key: "PoSui_Life",
        conditions: { withStars: ["破碎"], palace: "命宮" },
        content: {
            summary: "做事不周，虎頭蛇尾。",
            description: "主破壞、不全。性格衝動，做事常半途而廢。財來財去。",
            keywords: ["不周", "半途"]
        }
    },
    "PoSui_Wealth": {
        key: "PoSui_Wealth",
        conditions: { withStars: ["破碎"], palace: "財帛宮" },
        content: {
            summary: "零星破財，聚少成多。",
            description: "小錢不斷流失。",
            keywords: ["零星", "流失"]
        }
    },
    "PoSui_Career": {
        key: "PoSui_Career",
        conditions: { withStars: ["破碎"], palace: "官祿宮" },
        content: {
            summary: "工作斷續，難以持久。",
            description: "常換工作，或工作內容零碎。",
            keywords: ["斷續", "零碎"]
        }
    },
    "PoSui_Karma": {
        key: "PoSui_Karma",
        conditions: { withStars: ["破碎"], palace: "福德宮" },
        content: {
            summary: "心神不寧，情緒破碎。",
            description: "思緒混亂，無法專注。",
            keywords: ["不寧", "混亂"]
        }
    },
    "PoSui_Travel": {
        key: "PoSui_Travel",
        conditions: { withStars: ["破碎"], palace: "遷移宮" },
        content: {
            summary: "行程受阻，計畫打亂。",
            description: "外出不順，常有突發狀況。",
            keywords: ["受阻", "打亂"]
        }
    },
    "PoSui_Health": {
        key: "PoSui_Health",
        conditions: { withStars: ["破碎"], palace: "疾厄宮" },
        content: {
            summary: "外傷疤痕，結石。",
            description: "身體有缺陷或傷疤。",
            keywords: ["傷疤", "結石"]
        }
    },
    "PoSui_Spouse": {
        key: "PoSui_Spouse",
        conditions: { withStars: ["破碎"], palace: "夫妻宮" },
        content: {
            summary: "感情破裂，分分合合。",
            description: "婚姻不圓滿。",
            keywords: ["破裂", "分合"]
        }
    },
    "PoSui_Friends": {
        key: "PoSui_Friends",
        conditions: { withStars: ["破碎"], palace: "交友宮" },
        content: {
            summary: "友誼脆弱，一言不合。",
            description: "朋友關係易破裂。",
            keywords: ["脆弱", "破裂"]
        }
    },
    "PoSui_Property": {
        key: "PoSui_Property",
        conditions: { withStars: ["破碎"], palace: "田宅宮" },
        content: {
            summary: "房屋修補，圍牆破損。",
            description: "老舊房屋，需常修繕。",
            keywords: ["修補", "破損"]
        }
    },
    "PoSui_Parents": {
        key: "PoSui_Parents",
        conditions: { withStars: ["破碎"], palace: "父母宮" },
        content: {
            summary: "家庭破碎，或單親。",
            description: "家庭不完整。",
            keywords: ["破碎", "不全"]
        }
    },
    "PoSui_Children": {
        key: "PoSui_Children",
        conditions: { withStars: ["破碎"], palace: "子女宮" },
        content: {
            summary: "子女分離，聚少離多。",
            description: "子女不在身邊。",
            keywords: ["分離", "離多"]
        }
    },
    "PoSui_Siblings": {
        key: "PoSui_Siblings",
        conditions: { withStars: ["破碎"], palace: "兄弟宮" },
        content: {
            summary: "兄弟分散，各奔東西。",
            description: "手足不聚。",
            keywords: ["分散", "不聚"]
        }
    },
    "TangFu_Life": {
        key: "TangFu_Life",
        conditions: { withStars: ["唐符"], palace: "命宮" },
        content: {
            summary: "權威顯赫，個性剛毅。",
            description: "主權力、官運。性格穩重，有領導力。利於公職或管理。",
            keywords: ["權威", "剛毅"]
        }
    },
    "TangFu_Career": {
        key: "TangFu_Career",
        conditions: { withStars: ["唐符"], palace: "官祿宮" },
        content: {
            summary: "掌權掌印，步步高升。",
            description: "職場上有實權。適合軍警、司法或行政管理。",
            keywords: ["掌權", "高升"]
        }
    },
    "TangFu_Wealth": {
        key: "TangFu_Wealth",
        conditions: { withStars: ["唐符"], palace: "財帛宮" },
        content: {
            summary: "正財穩固，權中求財。",
            description: "因職權或地位而得財。財源穩定。",
            keywords: ["正財", "穩固"]
        }
    },
    "TangFu_Karma": {
        key: "TangFu_Karma",
        conditions: { withStars: ["唐符"], palace: "福德宮" },
        content: {
            summary: "自尊心強，精神富足。",
            description: "重視榮譽。晚年有社會地位。",
            keywords: ["自尊", "榮譽"]
        }
    },
    "TangFu_Travel": {
        key: "TangFu_Travel",
        conditions: { withStars: ["唐符"], palace: "遷移宮" },
        content: {
            summary: "出外受敬，威名遠播。",
            description: "在外地有地位。受人敬重。",
            keywords: ["受敬", "威名"]
        }
    },
    "TangFu_Spouse": {
        key: "TangFu_Spouse",
        conditions: { withStars: ["唐符"], palace: "夫妻宮" },
        content: {
            summary: "配偶能幹，事業有成。",
            description: "配偶個性強，或是主管階級。",
            keywords: ["能幹", "強勢"]
        }
    },
    "TangFu_Friends": {
        key: "TangFu_Friends",
        conditions: { withStars: ["唐符"], palace: "交友宮" },
        content: {
            summary: "友多權貴，有助事業。",
            description: "結交有地位或有能力的朋友。",
            keywords: ["權貴", "助力"]
        }
    },
    "TangFu_Parents": {
        key: "TangFu_Parents",
        conditions: { withStars: ["唐符"], palace: "父母宮" },
        content: {
            summary: "父母嚴厲，家教甚嚴。",
            description: "父母有威嚴。出身不錯。",
            keywords: ["嚴厲", "威嚴"]
        }
    },
    "TangFu_Children": {
        key: "TangFu_Children",
        conditions: { withStars: ["唐符"], palace: "子女宮" },
        content: {
            summary: "子女有成，具領導力。",
            description: "子女個性強，將來有出息。",
            keywords: ["有成", "領導"]
        }
    },
    "TangFu_Siblings": {
        key: "TangFu_Siblings",
        conditions: { withStars: ["唐符"], palace: "兄弟宮" },
        content: {
            summary: "兄弟顯貴，各自獨立。",
            description: "手足中有成就者。",
            keywords: ["顯貴", "獨立"]
        }
    },
    "TangFu_Property": {
        key: "TangFu_Property",
        conditions: { withStars: ["唐符"], palace: "田宅宮" },
        content: {
            summary: "家宅穩固，地段優良。",
            description: "住家環境安全。易繼承祖產。",
            keywords: ["穩固", "優良"]
        }
    },
    "TangFu_Health": {
        key: "TangFu_Health",
        conditions: { withStars: ["唐符"], palace: "疾厄宮" },
        content: {
            summary: "身體健壯，注意壓力。",
            description: "多為職業病或壓力引起。",
            keywords: ["健壯", "壓力"]
        }
    },
    "TianDe_Life": {
        key: "TianDe_Life",
        conditions: { withStars: ["天德"], palace: "命宮" },
        content: {
            summary: "天生吉運，逢凶化吉。",
            description: "主吉慶、化解。性格慈悲，樂善好施。一生多貴人。",
            keywords: ["吉運", "慈悲"]
        }
    },
    "TianDe_Career": {
        key: "TianDe_Career",
        conditions: { withStars: ["天德"], palace: "官祿宮" },
        content: {
            summary: "職場順遂，貴人提拔。",
            description: "工作運佳，遇難呈祥。適合服務為業。",
            keywords: ["順遂", "提拔"]
        }
    },
    "TianDe_Wealth": {
        key: "TianDe_Wealth",
        conditions: { withStars: ["天德"], palace: "財帛宮" },
        content: {
            summary: "得天獨厚，財源廣進。",
            description: "福氣之財。賺錢容易。",
            keywords: ["福氣", "廣進"]
        }
    },
    "TianDe_Karma": {
        key: "TianDe_Karma",
        conditions: { withStars: ["天德"], palace: "福德宮" },
        content: {
            summary: "心存善念，精神愉快。",
            description: "亦有神佛緣。晚年安樂。",
            keywords: ["善念", "安樂"]
        }
    },
    "TianDe_Travel": {
        key: "TianDe_Travel",
        conditions: { withStars: ["天德"], palace: "遷移宮" },
        content: {
            summary: "出外平安，四方遇貴。",
            description: "外出運極佳。少災少難。",
            keywords: ["平安", "遇貴"]
        }
    },
    "TianDe_Spouse": {
        key: "TianDe_Spouse",
        conditions: { withStars: ["天德"], palace: "夫妻宮" },
        content: {
            summary: "配偶賢良，天作之合。",
            description: "配偶善良，能旺家。",
            keywords: ["賢良", "旺家"]
        }
    },
    "TianDe_Friends": {
        key: "TianDe_Friends",
        conditions: { withStars: ["天德"], palace: "交友宮" },
        content: {
            summary: "友多善類，益友良師。",
            description: "朋友人品好。",
            keywords: ["善類", "益友"]
        }
    },
    "TianDe_Parents": {
        key: "TianDe_Parents",
        conditions: { withStars: ["天德"], palace: "父母宮" },
        content: {
            summary: "父母慈愛，福壽雙全。",
            description: "父母為人厚道。",
            keywords: ["慈愛", "福壽"]
        }
    },
    "TianDe_Children": {
        key: "TianDe_Children",
        conditions: { withStars: ["天德"], palace: "子女宮" },
        content: {
            summary: "子女孝順，成材成器。",
            description: "子女乖巧，有福氣。",
            keywords: ["孝順", "成材"]
        }
    },
    "TianDe_Siblings": {
        key: "TianDe_Siblings",
        conditions: { withStars: ["天德"], palace: "兄弟宮" },
        content: {
            summary: "兄弟和睦，情同手足。",
            description: "手足感情深厚。",
            keywords: ["和睦", "深厚"]
        }
    },
    "TianDe_Property": {
        key: "TianDe_Property",
        conditions: { withStars: ["天德"], palace: "田宅宮" },
        content: {
            summary: "祖蔭豐厚，居家福地。",
            description: "住家風水好。家庭和樂。",
            keywords: ["祖蔭", "福地"]
        }
    },
    "TianDe_Health": {
        key: "TianDe_Health",
        conditions: { withStars: ["天德"], palace: "疾厄宮" },
        content: {
            summary: "身體安康，少病少災。",
            description: "生病易遇良醫。",
            keywords: ["安康", "少災"]
        }
    },
    "YueMa_Life": {
        key: "YueMa_Life",
        conditions: { withStars: ["月馬"], palace: "命宮" },
        content: {
            summary: "奔波忙碌，動中求財。",
            description: "主變動、遷移。性格外向，坐不住。早年離家發展之象。",
            keywords: ["奔波", "變動"]
        }
    },
    "YueMa_Career": {
        key: "YueMa_Career",
        conditions: { withStars: ["月馬"], palace: "官祿宮" },
        content: {
            summary: "工作變動，四處奔走。",
            description: "適合動態工作、業務、運輸、旅遊。常出差。",
            keywords: ["變動", "出差"]
        }
    },
    "YueMa_Wealth": {
        key: "YueMa_Wealth",
        conditions: { withStars: ["月馬"], palace: "財帛宮" },
        content: {
            summary: "動中求財，愈動愈發。",
            description: "錢材流動快。適合賺外地財。",
            keywords: ["動中", "外地"]
        }
    },
    "YueMa_Travel": {
        key: "YueMa_Travel",
        conditions: { withStars: ["月馬"], palace: "遷移宮" },
        content: {
            summary: "出外發展，遠走高飛。",
            description: "利於外出，宜動不宜靜。越遠越好。",
            keywords: ["發展", "遠走"]
        }
    },
    "YueMa_Karma": {
        key: "YueMa_Karma",
        conditions: { withStars: ["月馬"], palace: "福德宮" },
        content: {
            summary: "勞碌命，閒不下來。",
            description: "身忙心也忙。喜愛旅遊。",
            keywords: ["勞碌", "旅遊"]
        }
    },
    "YueMa_Spouse": {
        key: "YueMa_Spouse",
        conditions: { withStars: ["月馬"], palace: "夫妻宮" },
        content: {
            summary: "配偶外地人，或常分居。",
            description: "這段感情聚少離多。配偶好動。",
            keywords: ["外地", "分居"]
        }
    },
    "YueMa_Friends": {
        key: "YueMa_Friends",
        conditions: { withStars: ["月馬"], palace: "交友宮" },
        content: {
            summary: "朋友五湖四海，流動性大。",
            description: "朋友多但難深交。常換朋友圈。",
            keywords: ["四海", "流動"]
        }
    },
    "YueMa_Parents": {
        key: "YueMa_Parents",
        conditions: { withStars: ["月馬"], palace: "父母宮" },
        content: {
            summary: "父母奔波，或早離家。",
            description: "父親常在外奔忙。",
            keywords: ["奔波", "離家"]
        }
    },
    "YueMa_Children": {
        key: "YueMa_Children",
        conditions: { withStars: ["月馬"], palace: "子女宮" },
        content: {
            summary: "子女好動，將來遠行。",
            description: "子女長大會離開身邊發展。",
            keywords: ["好動", "遠行"]
        }
    },
    "YueMa_Siblings": {
        key: "YueMa_Siblings",
        conditions: { withStars: ["月馬"], palace: "兄弟宮" },
        content: {
            summary: "兄弟分散，各奔前程。",
            description: "手足雖多但常不聚頭。",
            keywords: ["分散", "前程"]
        }
    },
    "YueMa_Property": {
        key: "YueMa_Property",
        conditions: { withStars: ["月馬"], palace: "田宅宮" },
        content: {
            summary: "搬家頻繁，居無定所。",
            description: "常換住所，或房子在路邊。",
            keywords: ["搬家", "不定"]
        }
    },
    "YueMa_Health": {
        key: "YueMa_Health",
        conditions: { withStars: ["月馬"], palace: "疾厄宮" },
        content: {
            summary: "四肢奔波勞累，注意流行病。",
            description: "注意腿部、手腳受傷。流行性感冒。",
            keywords: ["勞累", "腿部"]
        }
    },
    "GuoYin_Life": {
        key: "GuoYin_Life",
        conditions: { withStars: ["國印"], palace: "命宮" },
        content: {
            summary: "掌印掌權，地位崇高。",
            description: "主權位、升遷。性格剛毅，有威嚴。適合公職。",
            keywords: ["權位", "威嚴"]
        }
    },
    "GuoYin_Career": {
        key: "GuoYin_Career",
        conditions: { withStars: ["國印"], palace: "官祿宮" },
        content: {
            summary: "官運亨通，升遷順利。",
            description: "工作上有實權，易獲提拔。事業穩定。",
            keywords: ["升遷", "實權"]
        }
    },
    "GuoYin_Wealth": {
        key: "GuoYin_Wealth",
        conditions: { withStars: ["國印"], palace: "財帛宮" },
        content: {
            summary: "正財豐厚，憑權得財。",
            description: "財源穩定，因職位高而收入好。",
            keywords: ["正財", "職位"]
        }
    },
    "GuoYin_Karma": {
        key: "GuoYin_Karma",
        conditions: { withStars: ["國印"], palace: "福德宮" },
        content: {
            summary: "自重自愛，精神富足。",
            description: "重視榮譽與地位。晚年受人敬重。",
            keywords: ["榮譽", "敬重"]
        }
    },
    "GuoYin_Travel": {
        key: "GuoYin_Travel",
        conditions: { withStars: ["國印"], palace: "遷移宮" },
        content: {
            summary: "出外顯貴，受人禮遇。",
            description: "在外地有地位，發展順利。",
            keywords: ["顯貴", "禮遇"]
        }
    },
    "GuoYin_Spouse": {
        key: "GuoYin_Spouse",
        conditions: { withStars: ["國印"], palace: "夫妻宮" },
        content: {
            summary: "配偶貴氣，事業有成。",
            description: "配偶有社會地位或主管階級。",
            keywords: ["貴氣", "地位"]
        }
    },
    "GuoYin_Friends": {
        key: "GuoYin_Friends",
        conditions: { withStars: ["國印"], palace: "交友宮" },
        content: {
            summary: "結交權貴，益友助人。",
            description: "朋友多為有頭有臉之人。",
            keywords: ["權貴", "益友"]
        }
    },
    "GuoYin_Parents": {
        key: "GuoYin_Parents",
        conditions: { withStars: ["國印"], palace: "父母宮" },
        content: {
            summary: "父母嚴格，家世清白。",
            description: "父母有威望。家教好。",
            keywords: ["嚴格", "威望"]
        }
    },
    "GuoYin_Children": {
        key: "GuoYin_Children",
        conditions: { withStars: ["國印"], palace: "子女宮" },
        content: {
            summary: "子女優秀，將來成材。",
            description: "子女有領導才能，學業優異。",
            keywords: ["優秀", "領導"]
        }
    },
    "GuoYin_Siblings": {
        key: "GuoYin_Siblings",
        conditions: { withStars: ["國印"], palace: "兄弟宮" },
        content: {
            summary: "手足顯達，各自獨立。",
            description: "兄弟姊妹中有成就者。",
            keywords: ["顯達", "成就"]
        }
    },
    "GuoYin_Property": {
        key: "GuoYin_Property",
        conditions: { withStars: ["國印"], palace: "田宅宮" },
        content: {
            summary: "置產順利，近公家機構。",
            description: "住家環境治安好。易置產。",
            keywords: ["置產", "治安"]
        }
    },
    "GuoYin_Health": {
        key: "GuoYin_Health",
        conditions: { withStars: ["國印"], palace: "疾厄宮" },
        content: {
            summary: "身體健壯，注意勞累。",
            description: "健康良好。注意職業傷害。",
            keywords: ["健壯", "職業"]
        }
    },
    "YueDe_Life": {
        key: "YueDe_Life",
        conditions: { withStars: ["月德"], palace: "命宮" },
        content: {
            summary: "貴人扶持，逢凶化吉。",
            description: "主祥和、化解。性格善良，有包容力。女性緣佳。",
            keywords: ["貴人", "祥和"]
        }
    },
    "YueDe_Career": {
        key: "YueDe_Career",
        conditions: { withStars: ["月德"], palace: "官祿宮" },
        content: {
            summary: "工作平順，人緣極佳。",
            description: "職場氣氛和諧，遇難呈祥。適合得人緣工作。",
            keywords: ["平順", "人緣"]
        }
    },
    "YueDe_Wealth": {
        key: "YueDe_Wealth",
        conditions: { withStars: ["月德"], palace: "財帛宮" },
        content: {
            summary: "和氣生財，財源平順。",
            description: "不發橫財，但衣食無憂。得女性貴人助。",
            keywords: ["和氣", "無憂"]
        }
    },
    "YueDe_Karma": {
        key: "YueDe_Karma",
        conditions: { withStars: ["月德"], palace: "福德宮" },
        content: {
            summary: "心胸開闊，能夠享福。",
            description: "精神愉快，少煩惱。有宗教緣。",
            keywords: ["開闊", "享福"]
        }
    },
    "YueDe_Travel": {
        key: "YueDe_Travel",
        conditions: { withStars: ["月德"], palace: "遷移宮" },
        content: {
            summary: "出外平安，所到受歡迎。",
            description: "在外人緣好，遇事有人幫。",
            keywords: ["所到", "平安"]
        }
    },
    "YueDe_Spouse": {
        key: "YueDe_Spouse",
        conditions: { withStars: ["月德"], palace: "夫妻宮" },
        content: {
            summary: "配偶良善，相處和睦。",
            description: "感情穩定。配偶性格溫和。",
            keywords: ["良善", "和睦"]
        }
    },
    "YueDe_Friends": {
        key: "YueDe_Friends",
        conditions: { withStars: ["月德"], palace: "交友宮" },
        content: {
            summary: "友多仁義，相處愉快。",
            description: "朋友善良，能互相幫助。",
            keywords: ["仁義", "愉快"]
        }
    },
    "YueDe_Parents": {
        key: "YueDe_Parents",
        conditions: { withStars: ["月德"], palace: "父母宮" },
        content: {
            summary: "父母慈祥，親情深厚。",
            description: "與父母關係融洽。",
            keywords: ["慈祥", "融洽"]
        }
    },
    "YueDe_Children": {
        key: "YueDe_Children",
        conditions: { withStars: ["月德"], palace: "子女宮" },
        content: {
            summary: "子女孝順，乖巧聽話。",
            description: "子女緣好，好管教。",
            keywords: ["孝順", "乖巧"]
        }
    },
    "YueDe_Siblings": {
        key: "YueDe_Siblings",
        conditions: { withStars: ["月德"], palace: "兄弟宮" },
        content: {
            summary: "兄弟互助，感情融洽。",
            description: "手足有情有義。",
            keywords: ["互助", "融洽"]
        }
    },
    "YueDe_Property": {
        key: "YueDe_Property",
        conditions: { withStars: ["月德"], palace: "田宅宮" },
        content: {
            summary: "居家安寧，鄰里和睦。",
            description: "住家環境清幽。鄰居好相處。",
            keywords: ["安寧", "和睦"]
        }
    },
    "YueDe_Health": {
        key: "YueDe_Health",
        conditions: { withStars: ["月德"], palace: "疾厄宮" },
        content: {
            summary: "身體調和，少病少痛。",
            description: "得病易癒。身體素質不錯。",
            keywords: ["調和", "少病"]
        }
    }
};
