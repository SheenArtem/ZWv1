import { StarRuleMap } from '../models';

export const miscStars: StarRuleMap = {
    "TianGuan_Life": {
        key: "TianGuan_Life",
        conditions: { withStars: ["天官"], palace: "命宮" },
        content: {
            summary: "顯貴之星，仕途順遂。",
            description: "主升遷、官運。個性穩重，喜掌權。利於公職發展。",
            keywords: ["官運","升遷"]
        }
    },
    "TianGuan_Career": {
        key: "TianGuan_Career",
        conditions: { withStars: ["天官"], palace: "官祿宮" },
        content: {
            summary: "官運亨通，掌權位。",
            description: "職場易得提拔。工作穩定，地位崇高。",
            keywords: ["掌權","穩定"]
        }
    },
    "TianGuan_Wealth": {
        key: "TianGuan_Wealth",
        conditions: { withStars: ["天官"], palace: "財帛宮" },
        content: {
            summary: "正財顯耀，俸祿豐厚。",
            description: "領薪階級的高收入者。財運穩定。",
            keywords: ["俸祿","顯耀"]
        }
    },
    "TianGuan_Travel": {
        key: "TianGuan_Travel",
        conditions: { withStars: ["天官"], palace: "遷移宮" },
        content: {
            summary: "出外遇貴，名聲遠播。",
            description: "在外發展利於求名。易接觸達官顯貴。",
            keywords: ["遇貴","求名"]
        }
    },
    "TianGuan_Spouse": {
        key: "TianGuan_Spouse",
        conditions: { withStars: ["天官"], palace: "夫妻宮" },
        content: {
            summary: "配偶顯貴，氣質高雅。",
            description: "配偶有社會地位或為主管階級。",
            keywords: ["顯貴","高雅"]
        }
    },
    "TianGuan_Karma": {
        key: "TianGuan_Karma",
        conditions: { withStars: ["天官"], palace: "福德宮" },
        content: {
            summary: "清福享樂，精神滿足。",
            description: "晚年受人敬重，生活悠閒。",
            keywords: ["敬重","悠閒"]
        }
    },
    "TianGuan_Health": {
        key: "TianGuan_Health",
        conditions: { withStars: ["天官"], palace: "疾厄宮" },
        content: {
            summary: "脾胃小疾，富貴病。",
            description: "注意飲食過度。易有三高。",
            keywords: ["富貴病","三高"]
        }
    },
    "TianGuan_Parents": {
        key: "TianGuan_Parents",
        conditions: { withStars: ["天官"], palace: "父母宮" },
        content: {
            summary: "父母有成，家教良好。",
            description: "父母事業不錯，給予良好教育。",
            keywords: ["有成","教育"]
        }
    },
    "TianGuan_Children": {
        key: "TianGuan_Children",
        conditions: { withStars: ["天官"], palace: "子女宮" },
        content: {
            summary: "子女聰慧，將來有成。",
            description: "子女成績優異，有官運。",
            keywords: ["聰慧","官運"]
        }
    },
    "TianGuan_Siblings": {
        key: "TianGuan_Siblings",
        conditions: { withStars: ["天官"], palace: "兄弟宮" },
        content: {
            summary: "兄弟有為，互相提攜。",
            description: "兄弟中有當官或主管者。",
            keywords: ["有為","提攜"]
        }
    },
    "TianGuan_Friends": {
        key: "TianGuan_Friends",
        conditions: { withStars: ["天官"], palace: "交友宮" },
        content: {
            summary: "友多權貴，有助事業。",
            description: "交往對象多為有地位人士。",
            keywords: ["權貴","助力"]
        }
    },
    "TianGuan_Property": {
        key: "TianGuan_Property",
        conditions: { withStars: ["天官"], palace: "田宅宮" },
        content: {
            summary: "居家氣派，近行政區。",
            description: "住家環境好，可能近公家機關。",
            keywords: ["氣派","行政"]
        }
    },
    "TianFu_Misc_Life": {
        key: "TianFu_Misc_Life",
        conditions: { withStars: ["天福"], palace: "命宮" },
        content: {
            summary: "福祿兼得，快樂享福。",
            description: "主福氣、爵祿。性格樂觀，衣食無虞。得長輩疼愛。",
            keywords: ["福氣","樂觀"]
        }
    },
    "TianFu_Misc_Karma": {
        key: "TianFu_Misc_Karma",
        conditions: { withStars: ["天福"], palace: "福德宮" },
        content: {
            summary: "精神滿足，老運佳。",
            description: "晚年生活優渥。喜行善積德。",
            keywords: ["積德","優渥"]
        }
    },
    "TianFu_Misc_Wealth": {
        key: "TianFu_Misc_Wealth",
        conditions: { withStars: ["天福"], palace: "財帛宮" },
        content: {
            summary: "財源廣進，天賜之福。",
            description: "賺錢輕鬆，常有意外之財。",
            keywords: ["廣進","意外"]
        }
    },
    "TianFu_Misc_Career": {
        key: "TianFu_Misc_Career",
        conditions: { withStars: ["天福"], palace: "官祿宮" },
        content: {
            summary: "工作順遂，福利優厚。",
            description: "職位閒涼但待遇好。適合服務業。",
            keywords: ["順遂","優厚"]
        }
    },
    "TianFu_Misc_Travel": {
        key: "TianFu_Misc_Travel",
        conditions: { withStars: ["天福"], palace: "遷移宮" },
        content: {
            summary: "出外有福，遇難呈祥。",
            description: "在外貴人多，運勢順遂。",
            keywords: ["有福","呈祥"]
        }
    },
    "TianFu_Misc_Spouse": {
        key: "TianFu_Misc_Spouse",
        conditions: { withStars: ["天福"], palace: "夫妻宮" },
        content: {
            summary: "配偶體貼，婚姻美滿。",
            description: "配偶帶來福氣，同甘共苦。",
            keywords: ["體貼","美滿"]
        }
    },
    "TianFu_Misc_Health": {
        key: "TianFu_Misc_Health",
        conditions: { withStars: ["天福"], palace: "疾厄宮" },
        content: {
            summary: "身體健康，心寬體胖。",
            description: "沒什麼大病，容易發福。",
            keywords: ["健康","發福"]
        }
    },
    "TianFu_Misc_Parents": {
        key: "TianFu_Misc_Parents",
        conditions: { withStars: ["天福"], palace: "父母宮" },
        content: {
            summary: "父母慈愛，得其庇蔭。",
            description: "父母福壽雙全，對子女好。",
            keywords: ["慈愛","庇蔭"]
        }
    },
    "TianFu_Misc_Children": {
        key: "TianFu_Misc_Children",
        conditions: { withStars: ["天福"], palace: "子女宮" },
        content: {
            summary: "子女乖巧，帶福而來。",
            description: "子女孝順，給家庭帶來喜氣。",
            keywords: ["乖巧","喜氣"]
        }
    },
    "TianFu_Misc_Siblings": {
        key: "TianFu_Misc_Siblings",
        conditions: { withStars: ["天福"], palace: "兄弟宮" },
        content: {
            summary: "兄弟和睦，互助互愛。",
            description: "手足情深，能同享福。",
            keywords: ["和睦","同享"]
        }
    },
    "TianFu_Misc_Friends": {
        key: "TianFu_Misc_Friends",
        conditions: { withStars: ["天福"], palace: "交友宮" },
        content: {
            summary: "友誼深厚，得友之助。",
            description: "朋友都是福將，能帶來好運。",
            keywords: ["深厚","好運"]
        }
    },
    "TianFu_Misc_Property": {
        key: "TianFu_Misc_Property",
        conditions: { withStars: ["天福"], palace: "田宅宮" },
        content: {
            summary: "祖產豐厚，居家舒適。",
            description: "住家寬敞舒適。易繼承祖業。",
            keywords: ["豐厚","舒適"]
        }
    },
    "TianChu_Life": {
        key: "TianChu_Life",
        conditions: { withStars: ["天廚"], palace: "命宮" },
        content: {
            summary: "食祿豐厚，廚藝佳。",
            description: "主口福、烹飪。有品味，喜美食。衣食不缺。",
            keywords: ["美食","口福"]
        }
    },
    "TianChu_Karma": {
        key: "TianChu_Karma",
        conditions: { withStars: ["天廚"], palace: "福德宮" },
        content: {
            summary: "講究飲食，口福不淺。",
            description: "喜愛研究美食。精神享受多來自吃喝。",
            keywords: ["飲食","享受"]
        }
    },
    "TianChu_Wealth": {
        key: "TianChu_Wealth",
        conditions: { withStars: ["天廚"], palace: "財帛宮" },
        content: {
            summary: "餐飲生財，食品業佳。",
            description: "適合從事餐飲、食品相關行業。",
            keywords: ["餐飲","食品"]
        }
    },
    "TianChu_Career": {
        key: "TianChu_Career",
        conditions: { withStars: ["天廚"], palace: "官祿宮" },
        content: {
            summary: "職務閒美，福利佳。",
            description: "工作常有聚餐機會。適廚師、營養師。",
            keywords: ["閒美","廚師"]
        }
    },
    "TianChu_Property": {
        key: "TianChu_Property",
        conditions: { withStars: ["天廚"], palace: "田宅宮" },
        content: {
            summary: "廚房寬大，家中宴客。",
            description: "家中廚房設備好。喜在家請客。",
            keywords: ["廚房","宴客"]
        }
    },
    "TianChu_Health": {
        key: "TianChu_Health",
        conditions: { withStars: ["天廚"], palace: "疾厄宮" },
        content: {
            summary: "腸胃負擔，注意飲食。",
            description: "吃太好導致肥胖或腸胃病。",
            keywords: ["腸胃","肥胖"]
        }
    },
    "TianChu_Travel": {
        key: "TianChu_Travel",
        conditions: { withStars: ["天廚"], palace: "遷移宮" },
        content: {
            summary: "出外有食祿，不愁吃穿。",
            description: "到哪都有人請客。適應當地飲食。",
            keywords: ["食祿","適應"]
        }
    },
    "TianChu_Friends": {
        key: "TianChu_Friends",
        conditions: { withStars: ["天廚"], palace: "交友宮" },
        content: {
            summary: "酒肉朋友，聚餐頻繁。",
            description: "朋友間常有飯局。",
            keywords: ["酒肉","聚餐"]
        }
    },
    "TianChu_Spouse": {
        key: "TianChu_Spouse",
        conditions: { withStars: ["天廚"], palace: "夫妻宮" },
        content: {
            summary: "配偶善烹，口福之樂。",
            description: "配偶會做菜，或喜愛美食。",
            keywords: ["善烹","口福"]
        }
    },
    "TianChu_Children": {
        key: "TianChu_Children",
        conditions: { withStars: ["天廚"], palace: "子女宮" },
        content: {
            summary: "子女愛吃，身體健康。",
            description: "子女胃口好，長得壯。",
            keywords: ["愛吃","健康"]
        }
    },
    "TianChu_Siblings": {
        key: "TianChu_Siblings",
        conditions: { withStars: ["天廚"], palace: "兄弟宮" },
        content: {
            summary: "兄弟常聚，把酒言歡。",
            description: "手足間常聚餐聯絡感情。",
            keywords: ["常聚","言歡"]
        }
    },
    "TianChu_Parents": {
        key: "TianChu_Parents",
        conditions: { withStars: ["天廚"], palace: "父母宮" },
        content: {
            summary: "父母溺愛，伙食豐盛。",
            description: "父母在飲食上照顧周到。",
            keywords: ["溺愛","豐盛"]
        }
    },
    "TianKu_Life": {
        key: "TianKu_Life",
        conditions: { withStars: ["天哭"], palace: "命宮" },
        content: {
            summary: "情緒低落，消極悲觀。",
            description: "主憂傷、刑剋。個性孤僻，易鑽牛角尖。童年較辛苦。",
            keywords: ["悲觀","憂傷"]
        }
    },
    "TianKu_Karma": {
        key: "TianKu_Karma",
        conditions: { withStars: ["天哭"], palace: "福德宮" },
        content: {
            summary: "愁腸百結，自尋煩惱。",
            description: "內心常感孤獨。精神壓力大。",
            keywords: ["孤獨","煩惱"]
        }
    },
    "TianKu_Siblings": {
        key: "TianKu_Siblings",
        conditions: { withStars: ["天哭"], palace: "兄弟宮" },
        content: {
            summary: "兄弟緣薄，溝通不良。",
            description: "手足間少話，或有早夭。",
            keywords: ["緣薄","早夭"]
        }
    },
    "TianKu_Spouse": {
        key: "TianKu_Spouse",
        conditions: { withStars: ["天哭"], palace: "夫妻宮" },
        content: {
            summary: "夫妻哀怨，相顧無言。",
            description: "婚姻氣氛沈悶，多抱怨。",
            keywords: ["哀怨","沈悶"]
        }
    },
    "TianKu_Children": {
        key: "TianKu_Children",
        conditions: { withStars: ["天哭"], palace: "子女宮" },
        content: {
            summary: "為子操心，子女叛逆。",
            description: "子女難管教，或體弱。",
            keywords: ["操心","叛逆"]
        }
    },
    "TianKu_Wealth": {
        key: "TianKu_Wealth",
        conditions: { withStars: ["天哭"], palace: "財帛宮" },
        content: {
            summary: "為財傷神，難聚易散。",
            description: "賺錢辛苦，常有財務煩惱。",
            keywords: ["傷神","難聚"]
        }
    },
    "TianKu_Health": {
        key: "TianKu_Health",
        conditions: { withStars: ["天哭"], palace: "疾厄宮" },
        content: {
            summary: "肺經虛弱，憂鬱成疾。",
            description: "易患呼吸道疾病或憂鬱症。",
            keywords: ["肺經","憂鬱"]
        }
    },
    "TianKu_Travel": {
        key: "TianKu_Travel",
        conditions: { withStars: ["天哭"], palace: "遷移宮" },
        content: {
            summary: "出外孤單，水土不服。",
            description: "在外無助，心情鬱悶。",
            keywords: ["孤單","鬱悶"]
        }
    },
    "TianKu_Friends": {
        key: "TianKu_Friends",
        conditions: { withStars: ["天哭"], palace: "交友宮" },
        content: {
            summary: "友少寡合，易被誤解。",
            description: "朋友少，常覺得沒人懂自己。",
            keywords: ["寡合","誤解"]
        }
    },
    "TianKu_Career": {
        key: "TianKu_Career",
        conditions: { withStars: ["天哭"], palace: "官祿宮" },
        content: {
            summary: "事業艱辛，虛名虛利。",
            description: "工作不順心，勞多獲少。",
            keywords: ["艱辛","不順"]
        }
    },
    "TianKu_Property": {
        key: "TianKu_Property",
        conditions: { withStars: ["天哭"], palace: "田宅宮" },
        content: {
            summary: "居家陰濕，人丁不旺。",
            description: "住家環境不佳，家人少笑聲。",
            keywords: ["陰濕","冷清"]
        }
    },
    "TianKu_Parents": {
        key: "TianKu_Parents",
        conditions: { withStars: ["天哭"], palace: "父母宮" },
        content: {
            summary: "父母緣淺，早年離家。",
            description: "與父母代溝深，或父母早逝。",
            keywords: ["緣淺","離家"]
        }
    },
    "TianXu_Life": {
        key: "TianXu_Life",
        conditions: { withStars: ["天虛"], palace: "命宮" },
        content: {
            summary: "華而不實，虛榮心重。",
            description: "主空虛、不實。喜吹噓，意志不堅。防破財。",
            keywords: ["空虛","虛榮"]
        }
    },
    "TianXu_Karma": {
        key: "TianXu_Karma",
        conditions: { withStars: ["天虛"], palace: "福德宮" },
        content: {
            summary: "內心空虛，缺乏目標。",
            description: "精神空虛，常感無聊。",
            keywords: ["空虛","無聊"]
        }
    },
    "TianXu_Siblings": {
        key: "TianXu_Siblings",
        conditions: { withStars: ["天虛"], palace: "兄弟宮" },
        content: {
            summary: "兄弟假意，情分淡薄。",
            description: "表面客氣，實際疏離。",
            keywords: ["假意","疏離"]
        }
    },
    "TianXu_Spouse": {
        key: "TianXu_Spouse",
        conditions: { withStars: ["天虛"], palace: "夫妻宮" },
        content: {
            summary: "虛情假意，貌合神離。",
            description: "婚姻有名無實。配偶不誠實。",
            keywords: ["虛情","貌合"]
        }
    },
    "TianXu_Children": {
        key: "TianXu_Children",
        conditions: { withStars: ["天虛"], palace: "子女宮" },
        content: {
            summary: "子女浮誇，不切實際。",
            description: "子女愛說謊，或身體虛弱。",
            keywords: ["浮誇","虛弱"]
        }
    },
    "TianXu_Wealth": {
        key: "TianXu_Wealth",
        conditions: { withStars: ["天虛"], palace: "財帛宮" },
        content: {
            summary: "財來財去，虛有其表。",
            description: "表面風光，實際沒錢。",
            keywords: ["虛名","沒錢"]
        }
    },
    "TianXu_Health": {
        key: "TianXu_Health",
        conditions: { withStars: ["天虛"], palace: "疾厄宮" },
        content: {
            summary: "體虧氣虛，心神不寧。",
            description: "身體虛弱，易有心病。",
            keywords: ["體虧","心病"]
        }
    },
    "TianXu_Travel": {
        key: "TianXu_Travel",
        conditions: { withStars: ["天虛"], palace: "遷移宮" },
        content: {
            summary: "出外迷茫，浮而不實。",
            description: "在外發展目標不明。",
            keywords: ["迷茫","浮躁"]
        }
    },
    "TianXu_Friends": {
        key: "TianXu_Friends",
        conditions: { withStars: ["天虛"], palace: "交友宮" },
        content: {
            summary: "友多泛泛，無真心人。",
            description: "酒肉朋友多，能談心的少。",
            keywords: ["泛泛","真心"]
        }
    },
    "TianXu_Career": {
        key: "TianXu_Career",
        conditions: { withStars: ["天虛"], palace: "官祿宮" },
        content: {
            summary: "職位虛銜，無實權。",
            description: "有名無實的職位。工作不踏實。",
            keywords: ["虛銜","不實"]
        }
    },
    "TianXu_Property": {
        key: "TianXu_Property",
        conditions: { withStars: ["天虛"], palace: "田宅宮" },
        content: {
            summary: "房屋虛價，裝潢虛華。",
            description: "房子外表好看但建築品質差。",
            keywords: ["虛價","虛華"]
        }
    },
    "TianXu_Parents": {
        key: "TianXu_Parents",
        conditions: { withStars: ["天虛"], palace: "父母宮" },
        content: {
            summary: "父母虛名，助力不大。",
            description: "父母無法給予實質幫助。",
            keywords: ["虛名","無助"]
        }
    },
    "HuaGai_Life": {
        key: "HuaGai_Life",
        conditions: { withStars: ["華蓋"], palace: "命宮" },
        content: {
            summary: "才華洋溢，孤芳自賞。",
            description: "主藝術、宗教、哲學。氣質高雅但孤僻。與佛道有緣。",
            keywords: ["藝術","孤僻"]
        }
    },
    "HuaGai_Career": {
        key: "HuaGai_Career",
        conditions: { withStars: ["華蓋"], palace: "官祿宮" },
        content: {
            summary: "學術顯揚，宗教事業。",
            description: "適學術、出版、宗教界。",
            keywords: ["學術","宗教"]
        }
    },
    "HuaGai_Wealth": {
        key: "HuaGai_Wealth",
        conditions: { withStars: ["華蓋"], palace: "財帛宮" },
        content: {
            summary: "清高之財，不重名利。",
            description: "錢財夠用就好。或因宗教破財。",
            keywords: ["清高","隨緣"]
        }
    },
    "HuaGai_Karma": {
        key: "HuaGai_Karma",
        conditions: { withStars: ["華蓋"], palace: "福德宮" },
        content: {
            summary: "精神追求，清高脫俗。",
            description: "喜愛哲學宗教。精神生活豐富。",
            keywords: ["清高","哲學"]
        }
    },
    "HuaGai_Spouse": {
        key: "HuaGai_Spouse",
        conditions: { withStars: ["華蓋"], palace: "夫妻宮" },
        content: {
            summary: "精神伴侶，聚少離多。",
            description: "尋求心靈契合。配偶可能信教。",
            keywords: ["契合","信教"]
        }
    },
    "HuaGai_Travel": {
        key: "HuaGai_Travel",
        conditions: { withStars: ["華蓋"], palace: "遷移宮" },
        content: {
            summary: "出外孤獨，尋仙訪道。",
            description: "在外喜獨處或遊歷宗教聖地。",
            keywords: ["孤獨","訪道"]
        }
    },
    "HuaGai_Health": {
        key: "HuaGai_Health",
        conditions: { withStars: ["華蓋"], palace: "疾厄宮" },
        content: {
            summary: "神經敏感，腸胃失調。",
            description: "易有精神衰弱或胃病。",
            keywords: ["敏感","胃病"]
        }
    },
    "HuaGai_Property": {
        key: "HuaGai_Property",
        conditions: { withStars: ["華蓋"], palace: "田宅宮" },
        content: {
            summary: "居家清幽，近廟宇。",
            description: "住家安靜。附近有宗教場所。",
            keywords: ["清幽","廟宇"]
        }
    },
    "HuaGai_Parents": {
        key: "HuaGai_Parents",
        conditions: { withStars: ["華蓋"], palace: "父母宮" },
        content: {
            summary: "父母信佛，緣分較淡。",
            description: "父母有宗教信仰。親情較疏離。",
            keywords: ["信佛","疏離"]
        }
    },
    "HuaGai_Children": {
        key: "HuaGai_Children",
        conditions: { withStars: ["華蓋"], palace: "子女宮" },
        content: {
            summary: "子女孤僻，有慧根。",
            description: "子女個性獨立，對玄學有興趣。",
            keywords: ["孤僻","慧根"]
        }
    },
    "HuaGai_Siblings": {
        key: "HuaGai_Siblings",
        conditions: { withStars: ["華蓋"], palace: "兄弟宮" },
        content: {
            summary: "兄弟各異，少往來。",
            description: "手足間志趣不同。",
            keywords: ["各異","少往來"]
        }
    },
    "HuaGai_Friends": {
        key: "HuaGai_Friends",
        conditions: { withStars: ["華蓋"], palace: "交友宮" },
        content: {
            summary: "友多方外，君子之交。",
            description: "結交宗教或藝術界朋友。",
            keywords: ["方外","君子"]
        }
    },
    "XianChi_Life": {
        key: "XianChi_Life",
        conditions: { withStars: ["咸池"], palace: "命宮" },
        content: {
            summary: "桃花星，風流多情。",
            description: "主肉慾、桃花。異性緣佳，易沈迷酒色。防感情糾紛。",
            keywords: ["桃花","肉慾"]
        }
    },
    "XianChi_Spouse": {
        key: "XianChi_Spouse",
        conditions: { withStars: ["咸池"], palace: "夫妻宮" },
        content: {
            summary: "配偶美豔，需防外遇。",
            description: "配偶性慾強或異性緣太好。",
            keywords: ["美豔","外遇"]
        }
    },
    "XianChi_Karma": {
        key: "XianChi_Karma",
        conditions: { withStars: ["咸池"], palace: "福德宮" },
        content: {
            summary: "重視享受，風流韻事。",
            description: "喜愛感官刺激。晚年仍有桃花。",
            keywords: ["享受","風流"]
        }
    },
    "XianChi_Health": {
        key: "XianChi_Health",
        conditions: { withStars: ["咸池"], palace: "疾厄宮" },
        content: {
            summary: "虛耗過度，性病隱憂。",
            description: "注意生殖系統疾病。",
            keywords: ["虛耗","隱疾"]
        }
    },
    "XianChi_Wealth": {
        key: "XianChi_Wealth",
        conditions: { withStars: ["咸池"], palace: "財帛宮" },
        content: {
            summary: "因色破財，花費無度。",
            description: "錢財多花在異性或娛樂上。",
            keywords: ["破財","娛樂"]
        }
    },
    "XianChi_Career": {
        key: "XianChi_Career",
        conditions: { withStars: ["咸池"], palace: "官祿宮" },
        content: {
            summary: "娛樂事業，桃花生財。",
            description: "適演藝、公關、八大行業。",
            keywords: ["娛樂","桃花"]
        }
    },
    "XianChi_Travel": {
        key: "XianChi_Travel",
        conditions: { withStars: ["咸池"], palace: "遷移宮" },
        content: {
            summary: "出外桃花，艷遇不斷。",
            description: "在外易發生感情糾紛。",
            keywords: ["艷遇","糾紛"]
        }
    },
    "XianChi_Friends": {
        key: "XianChi_Friends",
        conditions: { withStars: ["咸池"], palace: "交友宮" },
        content: {
            summary: "酒肉朋友，風月場所。",
            description: "朋友多為玩伴。易被帶壞。",
            keywords: ["酒肉","玩伴"]
        }
    },
    "XianChi_Property": {
        key: "XianChi_Property",
        conditions: { withStars: ["咸池"], palace: "田宅宮" },
        content: {
            summary: "居家華麗，金屋藏嬌。",
            description: "裝潢豪華。可能在此幽會。",
            keywords: ["華麗","幽會"]
        }
    },
    "XianChi_Children": {
        key: "XianChi_Children",
        conditions: { withStars: ["咸池"], palace: "子女宮" },
        content: {
            summary: "子女早熟，情竇初開。",
            description: "子女愛打扮，早戀。",
            keywords: ["早熟","早戀"]
        }
    },
    "XianChi_Parents": {
        key: "XianChi_Parents",
        conditions: { withStars: ["咸池"], palace: "父母宮" },
        content: {
            summary: "父母風流，感情複雜。",
            description: "父母婚姻可能有問題。",
            keywords: ["風流","複雜"]
        }
    },
    "XianChi_Siblings": {
        key: "XianChi_Siblings",
        conditions: { withStars: ["咸池"], palace: "兄弟宮" },
        content: {
            summary: "兄弟風流，喜好玩樂。",
            description: "手足間多談風月。",
            keywords: ["風流","玩樂"]
        }
    },
    "TaiFu_Life": {
        key: "TaiFu_Life",
        conditions: { withStars: ["台輔"], palace: "命宮" },
        content: {
            summary: "輔佐貴人，地位提升。",
            description: "主助力、威望。個性正直，工作能力強。",
            keywords: ["助力","威望"]
        }
    },
    "TaiFu_Career": {
        key: "TaiFu_Career",
        conditions: { withStars: ["台輔"], palace: "官祿宮" },
        content: {
            summary: "職位高升，輔佐重臣。",
            description: "擔任重要幕僚或副手。",
            keywords: ["幕僚","重臣"]
        }
    },
    "TaiFu_Travel": {
        key: "TaiFu_Travel",
        conditions: { withStars: ["台輔"], palace: "遷移宮" },
        content: {
            summary: "出外得助，名聲顯揚。",
            description: "在外遇貴人提拔。",
            keywords: ["得助","顯揚"]
        }
    },
    "TaiFu_Wealth": {
        key: "TaiFu_Wealth",
        conditions: { withStars: ["台輔"], palace: "財帛宮" },
        content: {
            summary: "財源穩固，因名得利。",
            description: "收入隨職位提升。",
            keywords: ["穩固","得利"]
        }
    },
    "TaiFu_Karma": {
        key: "TaiFu_Karma",
        conditions: { withStars: ["台輔"], palace: "福德宮" },
        content: {
            summary: "精神愉快，地位尊崇。",
            description: "晚年受人尊敬。",
            keywords: ["愉快","尊崇"]
        }
    },
    "TaiFu_Spouse": {
        key: "TaiFu_Spouse",
        conditions: { withStars: ["台輔"], palace: "夫妻宮" },
        content: {
            summary: "配偶賢能，助夫/妻。",
            description: "配偶能力好，能分憂。",
            keywords: ["賢能","助夫"]
        }
    },
    "TaiFu_Health": {
        key: "TaiFu_Health",
        conditions: { withStars: ["台輔"], palace: "疾厄宮" },
        content: {
            summary: "健康良好，精神飽滿。",
            description: "身體不錯。",
            keywords: ["健康","飽滿"]
        }
    },
    "TaiFu_Property": {
        key: "TaiFu_Property",
        conditions: { withStars: ["台輔"], palace: "田宅宮" },
        content: {
            summary: "居家典雅，門楣光彩。",
            description: "住家環境好。",
            keywords: ["典雅","光彩"]
        }
    },
    "TaiFu_Friends": {
        key: "TaiFu_Friends",
        conditions: { withStars: ["台輔"], palace: "交友宮" },
        content: {
            summary: "友多能人，互相提攜。",
            description: "朋友素質高。",
            keywords: ["能人","提攜"]
        }
    },
    "TaiFu_Children": {
        key: "TaiFu_Children",
        conditions: { withStars: ["台輔"], palace: "子女宮" },
        content: {
            summary: "子女聰慧，學業優異。",
            description: "子女有出息。",
            keywords: ["聰慧","學業"]
        }
    },
    "TaiFu_Parents": {
        key: "TaiFu_Parents",
        conditions: { withStars: ["台輔"], palace: "父母宮" },
        content: {
            summary: "父母顯要，家世清白。",
            description: "父母有地位。",
            keywords: ["顯要","清白"]
        }
    },
    "TaiFu_Siblings": {
        key: "TaiFu_Siblings",
        conditions: { withStars: ["台輔"], palace: "兄弟宮" },
        content: {
            summary: "兄弟有成，互助互利。",
            description: "手足發展不錯。",
            keywords: ["有成","互利"]
        }
    },
    "FengGao_Life": {
        key: "FengGao_Life",
        conditions: { withStars: ["封誥"], palace: "命宮" },
        content: {
            summary: "誥命獎賞，名聲顯揚。",
            description: "主榮譽、封賞。利於考試、獲獎、升遷。",
            keywords: ["榮譽","獲獎"]
        }
    },
    "FengGao_Career": {
        key: "FengGao_Career",
        conditions: { withStars: ["封誥"], palace: "官祿宮" },
        content: {
            summary: "獲獎無數，受人肯定。",
            description: "工作表現優異，常受表揚。",
            keywords: ["表揚","肯定"]
        }
    },
    "FengGao_Parents": {
        key: "FengGao_Parents",
        conditions: { withStars: ["封誥"], palace: "父母宮" },
        content: {
            summary: "父母榮耀，家世顯赫。",
            description: "父母有社會地位。",
            keywords: ["榮耀","顯赫"]
        }
    },
    "FengGao_Wealth": {
        key: "FengGao_Wealth",
        conditions: { withStars: ["封誥"], palace: "財帛宮" },
        content: {
            summary: "因名得財，獎金收入。",
            description: "靠專業或名聲賺錢。",
            keywords: ["獎金","名聲"]
        }
    },
    "FengGao_Travel": {
        key: "FengGao_Travel",
        conditions: { withStars: ["封誥"], palace: "遷移宮" },
        content: {
            summary: "出外顯達，衣錦還鄉。",
            description: "外地發展順利。",
            keywords: ["顯達","還鄉"]
        }
    },
    "FengGao_Karma": {
        key: "FengGao_Karma",
        conditions: { withStars: ["封誥"], palace: "福德宮" },
        content: {
            summary: "愛惜羽毛，重視名聲。",
            description: "精神生活以追求榮譽為主。",
            keywords: ["名聲","榮譽"]
        }
    },
    "FengGao_Spouse": {
        key: "FengGao_Spouse",
        conditions: { withStars: ["封誥"], palace: "夫妻宮" },
        content: {
            summary: "配偶有名，相得益彰。",
            description: "配偶是名人或受敬重。",
            keywords: ["有名","敬重"]
        }
    },
    "FengGao_Property": {
        key: "FengGao_Property",
        conditions: { withStars: ["封誥"], palace: "田宅宮" },
        content: {
            summary: "居家高雅，有牌匾。",
            description: "家中有掛匾額或獎狀。",
            keywords: ["高雅","獎狀"]
        }
    },
    "FengGao_Health": {
        key: "FengGao_Health",
        conditions: { withStars: ["封誥"], palace: "疾厄宮" },
        content: {
            summary: "身心健康，保養得宜。",
            description: "重視養生。",
            keywords: ["健康","養生"]
        }
    },
    "FengGao_Children": {
        key: "FengGao_Children",
        conditions: { withStars: ["封誥"], palace: "子女宮" },
        content: {
            summary: "子女優異，光耀門楣。",
            description: "子女常獲獎。",
            keywords: ["優異","光耀"]
        }
    },
    "FengGao_Friends": {
        key: "FengGao_Friends",
        conditions: { withStars: ["封誥"], palace: "交友宮" },
        content: {
            summary: "結交名流，提升地位。",
            description: "朋友多有名氣。",
            keywords: ["名流","地位"]
        }
    },
    "FengGao_Siblings": {
        key: "FengGao_Siblings",
        conditions: { withStars: ["封誥"], palace: "兄弟宮" },
        content: {
            summary: "兄弟雖少，皆有成就。",
            description: "兄弟不多但精。",
            keywords: ["成就","精"]
        }
    },
    "TianKong_Life": {
        key: "TianKong_Life",
        conditions: { withStars: ["天空"], palace: "命宮" },
        content: {
            summary: "精神空靈，創意獨特。",
            description: "主空亡。不重物質，喜幻想。利於創作或宗教。",
            keywords: ["空靈","創作"]
        }
    },
    "TianKong_Wealth": {
        key: "TianKong_Wealth",
        conditions: { withStars: ["天空"], palace: "財帛宮" },
        content: {
            summary: "視財如土，不善理財。",
            description: "對錢財看得很淡。難聚財。",
            keywords: ["淡泊","難聚"]
        }
    },
    "TianKong_Karma": {
        key: "TianKong_Karma",
        conditions: { withStars: ["天空"], palace: "福德宮" },
        content: {
            summary: "思慮天馬行空。",
            description: "想像力豐富，但不切實際。",
            keywords: ["想像","空想"]
        }
    },
    "TianKong_Career": {
        key: "TianKong_Career",
        conditions: { withStars: ["天空"], palace: "官祿宮" },
        content: {
            summary: "事業多變，創意無限。",
            description: "適合藝術、設計。不宜傳統產業。",
            keywords: ["多變","創意"]
        }
    },
    "TianKong_Spouse": {
        key: "TianKong_Spouse",
        conditions: { withStars: ["天空"], palace: "夫妻宮" },
        content: {
            summary: "感情隨緣，聚散無常。",
            description: "對婚姻不看重。易單身。",
            keywords: ["隨緣","單身"]
        }
    },
    "TianKong_Property": {
        key: "TianKong_Property",
        conditions: { withStars: ["天空"], palace: "田宅宮" },
        content: {
            summary: "祖業無靠，居住簡陋。",
            description: "不重居住品質。或住家空曠。",
            keywords: ["無靠","簡陋"]
        }
    },
    "TianKong_Travel": {
        key: "TianKong_Travel",
        conditions: { withStars: ["天空"], palace: "遷移宮" },
        content: {
            summary: "出外漫遊，居無定所。",
            description: "喜愛流浪或旅遊。",
            keywords: ["漫遊","流浪"]
        }
    },
    "TianKong_Health": {
        key: "TianKong_Health",
        conditions: { withStars: ["天空"], palace: "疾厄宮" },
        content: {
            summary: "氣血不足，頭暈眼花。",
            description: "身體較虚。",
            keywords: ["氣血","頭暈"]
        }
    },
    "TianKong_Friends": {
        key: "TianKong_Friends",
        conditions: { withStars: ["天空"], palace: "交友宮" },
        content: {
            summary: "君子之交淡如水。",
            description: "朋友少。",
            keywords: ["淡如水","少"]
        }
    },
    "TianKong_Parents": {
        key: "TianKong_Parents",
        conditions: { withStars: ["天空"], palace: "父母宮" },
        content: {
            summary: "親情淡薄，緣分不深。",
            description: "與父母緣淺。",
            keywords: ["淡薄","緣淺"]
        }
    },
    "TianKong_Children": {
        key: "TianKong_Children",
        conditions: { withStars: ["天空"], palace: "子女宮" },
        content: {
            summary: "子女稀少，緣薄。",
            description: "不易有子女。",
            keywords: ["稀少","緣薄"]
        }
    },
    "TianKong_Siblings": {
        key: "TianKong_Siblings",
        conditions: { withStars: ["天空"], palace: "兄弟宮" },
        content: {
            summary: "兄弟各奔東西。",
            description: "手足分散。",
            keywords: ["各奔","分散"]
        }
    },
    "JieKong_Life": {
        key: "JieKong_Life",
        conditions: { withStars: ["截空"], palace: "命宮" },
        content: {
            summary: "阻礙中斷，波折重重。",
            description: "主阻礙、隔絕。凡事易半途而廢。親緣較薄。",
            keywords: ["阻礙","中斷"]
        }
    },
    "JieKong_Career": {
        key: "JieKong_Career",
        conditions: { withStars: ["截空"], palace: "官祿宮" },
        content: {
            summary: "事業受阻，發展受限。",
            description: "工作常遇瓶頸。升遷困難。",
            keywords: ["瓶頸","困難"]
        }
    },
    "JieKong_Wealth": {
        key: "JieKong_Wealth",
        conditions: { withStars: ["截空"], palace: "財帛宮" },
        content: {
            summary: "財源中斷，週轉不靈。",
            description: "資金調度常出問題。",
            keywords: ["中斷","不靈"]
        }
    },
    "JieKong_Karma": {
        key: "JieKong_Karma",
        conditions: { withStars: ["截空"], palace: "福德宮" },
        content: {
            summary: "思緒中斷，意志消沉。",
            description: "常有挫折感。判斷力受阻。",
            keywords: ["消沉","受阻"]
        }
    },
    "JieKong_Spouse": {
        key: "JieKong_Spouse",
        conditions: { withStars: ["截空"], palace: "夫妻宮" },
        content: {
            summary: "感情隔閡，溝通困難。",
            description: "夫妻間有代溝。易分居。",
            keywords: ["隔閡","困難"]
        }
    },
    "JieKong_Travel": {
        key: "JieKong_Travel",
        conditions: { withStars: ["截空"], palace: "遷移宮" },
        content: {
            summary: "出外受困，行程受阻。",
            description: "外出不順。交通延誤。",
            keywords: ["受困","延誤"]
        }
    },
    "JieKong_Property": {
        key: "JieKong_Property",
        conditions: { withStars: ["截空"], palace: "田宅宮" },
        content: {
            summary: "置產受阻，買賣糾紛。",
            description: "房產交易也不順。",
            keywords: ["受阻","糾紛"]
        }
    },
    "JieKong_Health": {
        key: "JieKong_Health",
        conditions: { withStars: ["截空"], palace: "疾厄宮" },
        content: {
            summary: "宿疾難癒，氣血不通。",
            description: "久病難醫。",
            keywords: ["宿疾","不通"]
        }
    },
    "JieKong_Friends": {
        key: "JieKong_Friends",
        conditions: { withStars: ["截空"], palace: "交友宮" },
        content: {
            summary: "人際隔閡，遭受排擠。",
            description: "與朋友有距離感。",
            keywords: ["隔閡","排擠"]
        }
    },
    "JieKong_Parents": {
        key: "JieKong_Parents",
        conditions: { withStars: ["截空"], palace: "父母宮" },
        content: {
            summary: "父母緣淺，代溝深。",
            description: "與父母難溝通。",
            keywords: ["緣淺","代溝"]
        }
    },
    "JieKong_Children": {
        key: "JieKong_Children",
        conditions: { withStars: ["截空"], palace: "子女宮" },
        content: {
            summary: "子女緣薄，難以懷孕。",
            description: "子女遲來。",
            keywords: ["緣薄","遲來"]
        }
    },
    "JieKong_Siblings": {
        key: "JieKong_Siblings",
        conditions: { withStars: ["截空"], palace: "兄弟宮" },
        content: {
            summary: "兄弟疏遠，不相往來。",
            description: "手足無情。",
            keywords: ["疏遠","無情"]
        }
    },
    "XunKong_Life": {
        key: "XunKong_Life",
        conditions: { withStars: ["旬空"], palace: "命宮" },
        content: {
            summary: "虛無飄渺，若得若失。",
            description: "主空虛。喜鑽研玄學。做事較不踏實。",
            keywords: ["虛無","玄學"]
        }
    },
    "XunKong_Karma": {
        key: "XunKong_Karma",
        conditions: { withStars: ["旬空"], palace: "福德宮" },
        content: {
            summary: "精神追求，不滯於物。",
            description: "思考獨特，與眾不同。",
            keywords: ["獨特","超脫"]
        }
    },
    "XunKong_Wealth": {
        key: "XunKong_Wealth",
        conditions: { withStars: ["旬空"], palace: "財帛宮" },
        content: {
            summary: "財運起伏，難以捉摸。",
            description: "錢財看淡。",
            keywords: ["起伏","看淡"]
        }
    },
    "XunKong_Career": {
        key: "XunKong_Career",
        conditions: { withStars: ["旬空"], palace: "官祿宮" },
        content: {
            summary: "事業多變，不喜束縛。",
            description: "喜自由業。",
            keywords: ["多變","自由"]
        }
    },
    "XunKong_Spouse": {
        key: "XunKong_Spouse",
        conditions: { withStars: ["旬空"], palace: "夫妻宮" },
        content: {
            summary: "感情淡然，隨緣而聚。",
            description: "不強求婚姻。",
            keywords: ["淡然","隨緣"]
        }
    },
    "XunKong_Property": {
        key: "XunKong_Property",
        conditions: { withStars: ["旬空"], palace: "田宅宮" },
        content: {
            summary: "住所不定，隨遇而安。",
            description: "不執著於房產。",
            keywords: ["不定","隨遇"]
        }
    },
    "XunKong_Travel": {
        key: "XunKong_Travel",
        conditions: { withStars: ["旬空"], palace: "遷移宮" },
        content: {
            summary: "出外漫遊，心無掛礙。",
            description: "喜歡到處走走。",
            keywords: ["漫遊","掛礙"]
        }
    },
    "XunKong_Health": {
        key: "XunKong_Health",
        conditions: { withStars: ["旬空"], palace: "疾厄宮" },
        content: {
            summary: "神經衰弱，心神不寧。",
            description: "易失眠。",
            keywords: ["衰弱","不寧"]
        }
    },
    "XunKong_Friends": {
        key: "XunKong_Friends",
        conditions: { withStars: ["旬空"], palace: "交友宮" },
        content: {
            summary: "朋友如雲，知己難尋。",
            description: "雖有朋友但心靈孤獨。",
            keywords: ["如雲","孤獨"]
        }
    },
    "XunKong_Parents": {
        key: "XunKong_Parents",
        conditions: { withStars: ["旬空"], palace: "父母宮" },
        content: {
            summary: "親情疏離，各自安好。",
            description: "與父母關係平淡。",
            keywords: ["疏離","平淡"]
        }
    },
    "XunKong_Children": {
        key: "XunKong_Children",
        conditions: { withStars: ["旬空"], palace: "子女宮" },
        content: {
            summary: "子女獨立，緣分較淺。",
            description: "子女長大就飛了。",
            keywords: ["獨立","緣淺"]
        }
    },
    "XunKong_Siblings": {
        key: "XunKong_Siblings",
        conditions: { withStars: ["旬空"], palace: "兄弟宮" },
        content: {
            summary: "兄弟各方，聚少離多。",
            description: "手足不多見。",
            keywords: ["各方","離多"]
        }
    },
    "TianCai_Life": {
        key: "TianCai_Life",
        conditions: { withStars: ["天才"], palace: "命宮" },
        content: {
            summary: "聰明才智，反應敏捷。",
            description: "主智慧、才能。學習力強，多才多藝。",
            keywords: ["智慧","才藝"]
        }
    },
    "TianCai_Career": {
        key: "TianCai_Career",
        conditions: { withStars: ["天才"], palace: "官祿宮" },
        content: {
            summary: "專業突出，才華展現。",
            description: "在專業領域有獨到見解。",
            keywords: ["專業","才華"]
        }
    },
    "TianCai_Parents": {
        key: "TianCai_Parents",
        conditions: { withStars: ["天才"], palace: "父母宮" },
        content: {
            summary: "父母聰明，遺傳優良。",
            description: "受父母智力遺傳。",
            keywords: ["聰明","遺傳"]
        }
    },
    "TianCai_Wealth": {
        key: "TianCai_Wealth",
        conditions: { withStars: ["天才"], palace: "財帛宮" },
        content: {
            summary: "憑智賺錢，點子生財。",
            description: "靠腦袋賺錢。",
            keywords: ["憑智","點子"]
        }
    },
    "TianCai_Karma": {
        key: "TianCai_Karma",
        conditions: { withStars: ["天才"], palace: "福德宮" },
        content: {
            summary: "聰穎過人，心思靈活。",
            description: "思慮清晰。壽命亦長。",
            keywords: ["聰穎","靈活"]
        }
    },
    "TianCai_Spouse": {
        key: "TianCai_Spouse",
        conditions: { withStars: ["天才"], palace: "夫妻宮" },
        content: {
            summary: "配偶聰明，才貌雙全。",
            description: "配偶智商高。",
            keywords: ["聰明","才貌"]
        }
    },
    "TianCai_Property": {
        key: "TianCai_Property",
        conditions: { withStars: ["天才"], palace: "田宅宮" },
        content: {
            summary: "居家智慧，佈置巧思。",
            description: "家中有現代化設備。",
            keywords: ["智慧","巧思"]
        }
    },
    "TianCai_Travel": {
        key: "TianCai_Travel",
        conditions: { withStars: ["天才"], palace: "遷移宮" },
        content: {
            summary: "出外機警，反應快。",
            description: "適應力強。",
            keywords: ["機警","適應"]
        }
    },
    "TianCai_Health": {
        key: "TianCai_Health",
        conditions: { withStars: ["天才"], palace: "疾厄宮" },
        content: {
            summary: "神經敏感，用腦過度。",
            description: "易失眠。",
            keywords: ["敏感","過度"]
        }
    },
    "TianCai_Friends": {
        key: "TianCai_Friends",
        conditions: { withStars: ["天才"], palace: "交友宮" },
        content: {
            summary: "友多才子，談笑鴻儒。",
            description: "朋友都聰明。",
            keywords: ["才子","鴻儒"]
        }
    },
    "TianCai_Children": {
        key: "TianCai_Children",
        conditions: { withStars: ["天才"], palace: "子女宮" },
        content: {
            summary: "子女資優，聰慧異常。",
            description: "子女聰明。",
            keywords: ["資優","聰慧"]
        }
    },
    "TianCai_Siblings": {
        key: "TianCai_Siblings",
        conditions: { withStars: ["天才"], palace: "兄弟宮" },
        content: {
            summary: "兄弟才子，學業優秀。",
            description: "手足學歷高。",
            keywords: ["才子","優秀"]
        }
    },
    "TianShou_Life": {
        key: "TianShou_Life",
        conditions: { withStars: ["天壽"], palace: "命宮" },
        content: {
            summary: "長壽之星，沉穩老練。",
            description: "主高壽、穩重。行事圓融，不與人爭。",
            keywords: ["長壽","圓融"]
        }
    },
    "TianShou_Health": {
        key: "TianShou_Health",
        conditions: { withStars: ["天壽"], palace: "疾厄宮" },
        content: {
            summary: "身體硬朗，延年益壽。",
            description: "雖有病痛但能長壽。",
            keywords: ["硬朗","延年"]
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
            keywords: ["開闊","安樂"]
        }
    },
    "TianShou_Wealth": {
        key: "TianShou_Wealth",
        conditions: { withStars: ["天壽"], palace: "財帛宮" },
        content: {
            summary: "財運長久，細水長流。",
            description: "退休金豐厚。",
            keywords: ["長久","退休"]
        }
    },
    "TianShou_Career": {
        key: "TianShou_Career",
        conditions: { withStars: ["天壽"], palace: "官祿宮" },
        content: {
            summary: "事業穩健，資歷深厚。",
            description: "工作做得長久。",
            keywords: ["穩健","資歷"]
        }
    },
    "TianShou_Spouse": {
        key: "TianShou_Spouse",
        conditions: { withStars: ["天壽"], palace: "夫妻宮" },
        content: {
            summary: "白頭偕老，年齡差距。",
            description: "配偶年紀較大。婚姻長久。",
            keywords: ["偕老","差距"]
        }
    },
    "TianShou_Property": {
        key: "TianShou_Property",
        conditions: { withStars: ["天壽"], palace: "田宅宮" },
        content: {
            summary: "老屋耐住，居家安寧。",
            description: "住老房子吉。",
            keywords: ["老屋","安寧"]
        }
    },
    "TianShou_Travel": {
        key: "TianShou_Travel",
        conditions: { withStars: ["天壽"], palace: "遷移宮" },
        content: {
            summary: "出外平安，適應力強。",
            description: "外出運穩。",
            keywords: ["平安","適應"]
        }
    },
    "TianShou_Friends": {
        key: "TianShou_Friends",
        conditions: { withStars: ["天壽"], palace: "交友宮" },
        content: {
            summary: "友多年長，忘年之交。",
            description: "結交長者。",
            keywords: ["年長","忘年"]
        }
    },
    "TianShou_Children": {
        key: "TianShou_Children",
        conditions: { withStars: ["天壽"], palace: "子女宮" },
        content: {
            summary: "得子較晚，子女孝順。",
            description: "晚得子。",
            keywords: ["晚得","孝順"]
        }
    },
    "TianShou_Siblings": {
        key: "TianShou_Siblings",
        conditions: { withStars: ["天壽"], palace: "兄弟宮" },
        content: {
            summary: "兄弟寬厚，情誼長存。",
            description: "手足感情好。",
            keywords: ["寬厚","長存"]
        }
    },
    "TianShang_Life": {
        key: "TianShang_Life",
        conditions: { withStars: ["天傷"], palace: "命宮" },
        content: {
            summary: "虛耗損失，傷神勞心。",
            description: "主損失、消耗。易有財務或精神上的虧損。",
            keywords: ["虛耗","損失"]
        }
    },
    "TianShang_Wealth": {
        key: "TianShang_Wealth",
        conditions: { withStars: ["天傷"], palace: "財帛宮" },
        content: {
            summary: "破財損耗，入不敷出。",
            description: "錢財莫名流失。",
            keywords: ["破財","流失"]
        }
    },
    "TianShang_Health": {
        key: "TianShang_Health",
        conditions: { withStars: ["天傷"], palace: "疾厄宮" },
        content: {
            summary: "身體虛耗，元氣不足。",
            description: "體質較弱。",
            keywords: ["虛耗","體弱"]
        }
    },
    "TianShang_Karma": {
        key: "TianShang_Karma",
        conditions: { withStars: ["天傷"], palace: "福德宮" },
        content: {
            summary: "煩惱多慮，精神耗弱。",
            description: "想太多。",
            keywords: ["煩惱","耗弱"]
        }
    },
    "TianShang_Career": {
        key: "TianShang_Career",
        conditions: { withStars: ["天傷"], palace: "官祿宮" },
        content: {
            summary: "事業虧損，徒勞無功。",
            description: "做得多賺得少。",
            keywords: ["虧損","徒勞"]
        }
    },
    "TianShang_Spouse": {
        key: "TianShang_Spouse",
        conditions: { withStars: ["天傷"], palace: "夫妻宮" },
        content: {
            summary: "感情受傷，身心俱疲。",
            description: "婚姻帶來痛苦。",
            keywords: ["受傷","俱疲"]
        }
    },
    "TianShang_Property": {
        key: "TianShang_Property",
        conditions: { withStars: ["天傷"], palace: "田宅宮" },
        content: {
            summary: "修繕漏財，家宅耗損。",
            description: "房子常需花錢修。",
            keywords: ["漏財","耗損"]
        }
    },
    "TianShang_Travel": {
        key: "TianShang_Travel",
        conditions: { withStars: ["天傷"], palace: "遷移宮" },
        content: {
            summary: "出外破財，身體不適。",
            description: "外出易生病或掉錢。",
            keywords: ["破財","不適"]
        }
    },
    "TianShang_Friends": {
        key: "TianShang_Friends",
        conditions: { withStars: ["天傷"], palace: "交友宮" },
        content: {
            summary: "因友損財，被人拖累。",
            description: "朋友借錢不還。",
            keywords: ["損財","拖累"]
        }
    },
    "TianShang_Parents": {
        key: "TianShang_Parents",
        conditions: { withStars: ["天傷"], palace: "父母宮" },
        content: {
            summary: "消耗父母，親情負擔。",
            description: "讓父母操心賠錢。",
            keywords: ["消耗","負擔"]
        }
    },
    "TianShang_Children": {
        key: "TianShang_Children",
        conditions: { withStars: ["天傷"], palace: "子女宮" },
        content: {
            summary: "子女多病，花費鉅大。",
            description: "子女身體差。",
            keywords: ["多病","鉅大"]
        }
    },
    "TianShang_Siblings": {
        key: "TianShang_Siblings",
        conditions: { withStars: ["天傷"], palace: "兄弟宮" },
        content: {
            summary: "兄弟連累，互相虧欠。",
            description: "被手足拖累。",
            keywords: ["連累","虧欠"]
        }
    },
    "TianShi_Life": {
        key: "TianShi_Life",
        conditions: { withStars: ["天使"], palace: "命宮" },
        content: {
            summary: "災厄虛驚，是非口舌。",
            description: "主災厄、傳遞。易遭無妄之災或小人陷害。",
            keywords: ["災厄","是非"]
        }
    },
    "TianShi_Travel": {
        key: "TianShi_Travel",
        conditions: { withStars: ["天使"], palace: "遷移宮" },
        content: {
            summary: "出外防災，意外虛驚。",
            description: "在外小心意外。",
            keywords: ["防災","意外"]
        }
    },
    "TianShi_Health": {
        key: "TianShi_Health",
        conditions: { withStars: ["天使"], palace: "疾厄宮" },
        content: {
            summary: "傳染病，意外受傷。",
            description: "注意流行病或天災。",
            keywords: ["傳染","受傷"]
        }
    },
    "TianShi_Karma": {
        key: "TianShi_Karma",
        conditions: { withStars: ["天使"], palace: "福德宮" },
        content: {
            summary: "提心吊膽，不得安寧。",
            description: "精神緊張。",
            keywords: ["緊張","不安"]
        }
    },
    "TianShi_Wealth": {
        key: "TianShi_Wealth",
        conditions: { withStars: ["天使"], palace: "財帛宮" },
        content: {
            summary: "因禍破財，官司賠償。",
            description: "意外支出。",
            keywords: ["破財","賠償"]
        }
    },
    "TianShi_Career": {
        key: "TianShi_Career",
        conditions: { withStars: ["天使"], palace: "官祿宮" },
        content: {
            summary: "職場是非，小人中傷。",
            description: "工作有小人。",
            keywords: ["是非","中傷"]
        }
    },
    "TianShi_Spouse": {
        key: "TianShi_Spouse",
        conditions: { withStars: ["天使"], palace: "夫妻宮" },
        content: {
            summary: "感情糾紛，遭人破壞。",
            description: "有人挑撥夫妻感情。",
            keywords: ["糾紛","破壞"]
        }
    },
    "TianShi_Property": {
        key: "TianShi_Property",
        conditions: { withStars: ["天使"], palace: "田宅宮" },
        content: {
            summary: "居家不安，鄰里是非。",
            description: "鄰居難搞。",
            keywords: ["不安","是非"]
        }
    },
    "TianShi_Friends": {
        key: "TianShi_Friends",
        conditions: { withStars: ["天使"], palace: "交友宮" },
        content: {
            summary: "損友構陷，背地中傷。",
            description: "朋友陷害。",
            keywords: ["構陷","中傷"]
        }
    },
    "TianShi_Parents": {
        key: "TianShi_Parents",
        conditions: { withStars: ["天使"], palace: "父母宮" },
        content: {
            summary: "父母災病，刑剋分離。",
            description: "父母有災。",
            keywords: ["災病","分離"]
        }
    },
    "TianShi_Children": {
        key: "TianShi_Children",
        conditions: { withStars: ["天使"], palace: "子女宮" },
        content: {
            summary: "子女若是，操心勞力。",
            description: "子女惹禍。",
            keywords: ["若是","操心"]
        }
    },
    "TianShi_Siblings": {
        key: "TianShi_Siblings",
        conditions: { withStars: ["天使"], palace: "兄弟宮" },
        content: {
            summary: "兄弟爭執，禍起蕭牆。",
            description: "手足不和。",
            keywords: ["爭執","蕭牆"]
        }
    },
    "TianYao_Life": {
        key: "TianYao_Life",
        conditions: { withStars: ["天姚"], palace: "命宮" },
        content: {
            summary: "桃花舞弄，風情萬種。",
            description: "主桃花、魅力。異性緣佳，喜打扮。",
            keywords: ["桃花","風流"]
        }
    },
    "TianYao_Career": {
        key: "TianYao_Career",
        conditions: { withStars: ["天姚"], palace: "官祿宮" },
        content: {
            summary: "異性助力，公關長才。",
            description: "適演藝、公關。靠魅力工作。",
            keywords: ["公關","魅力"]
        }
    },
    "TianYao_Spouse": {
        key: "TianYao_Spouse",
        conditions: { withStars: ["天姚"], palace: "夫妻宮" },
        content: {
            summary: "配偶迷人，防牆外桃花。",
            description: "配偶很有魅力，但需防出軌。",
            keywords: ["迷人","出軌"]
        }
    },
    "TianYao_Karma": {
        key: "TianYao_Karma",
        conditions: { withStars: ["天姚"], palace: "福德宮" },
        content: {
            summary: "風流倜儻，享受人生。",
            description: "喜愛風月。",
            keywords: ["風流","享受"]
        }
    },
    "TianYao_Wealth": {
        key: "TianYao_Wealth",
        conditions: { withStars: ["天姚"], palace: "財帛宮" },
        content: {
            summary: "桃花生財，異性之財。",
            description: "賺異性錢賺。",
            keywords: ["生財","異性"]
        }
    },
    "TianYao_Health": {
        key: "TianYao_Health",
        conditions: { withStars: ["天姚"], palace: "疾厄宮" },
        content: {
            summary: "泌尿系統，酒色過度。",
            description: "性病或腎虧。",
            keywords: ["泌尿","酒色"]
        }
    },
    "TianYao_Travel": {
        key: "TianYao_Travel",
        conditions: { withStars: ["天姚"], palace: "遷移宮" },
        content: {
            summary: "出外艷遇，人緣極佳。",
            description: "在外桃花多。",
            keywords: ["艷遇","人緣"]
        }
    },
    "TianYao_Friends": {
        key: "TianYao_Friends",
        conditions: { withStars: ["天姚"], palace: "交友宮" },
        content: {
            summary: "友多異性，關係曖昧。",
            description: "朋友都帶桃花。",
            keywords: ["異性","曖昧"]
        }
    },
    "TianYao_Property": {
        key: "TianYao_Property",
        conditions: { withStars: ["天姚"], palace: "田宅宮" },
        content: {
            summary: "居家華美，金屋藏嬌。",
            description: "佈置浪漫。",
            keywords: ["華美","藏嬌"]
        }
    },
    "TianYao_Parents": {
        key: "TianYao_Parents",
        conditions: { withStars: ["天姚"], palace: "父母宮" },
        content: {
            summary: "父母美貌，感情豐富。",
            description: "父母顏值高。",
            keywords: ["美貌","豐富"]
        }
    },
    "TianYao_Children": {
        key: "TianYao_Children",
        conditions: { withStars: ["天姚"], palace: "子女宮" },
        content: {
            summary: "子女早熟，桃花旺盛。",
            description: "子女愛談戀愛。",
            keywords: ["早熟","桃花"]
        }
    },
    "TianYao_Siblings": {
        key: "TianYao_Siblings",
        conditions: { withStars: ["天姚"], palace: "兄弟宮" },
        content: {
            summary: "兄弟風流，喜好異性。",
            description: "手足多情。",
            keywords: ["風流","多情"]
        }
    },
    "TianWu_Life": {
        key: "TianWu_Life",
        conditions: { withStars: ["天巫"], palace: "命宮" },
        content: {
            summary: "騰達升遷，通靈感應。",
            description: "主升遷、宗教。直覺強，利於學習玄學。",
            keywords: ["升遷","直覺"]
        }
    },
    "TianWu_Career": {
        key: "TianWu_Career",
        conditions: { withStars: ["天巫"], palace: "官祿宮" },
        content: {
            summary: "升遷順利，得神助。",
            description: "職場運勢好，有如神助。",
            keywords: ["順利","神助"]
        }
    },
    "TianWu_Wealth": {
        key: "TianWu_Wealth",
        conditions: { withStars: ["天巫"], palace: "財帛宮" },
        content: {
            summary: "財源不斷，意外之財。",
            description: "常有偏財。",
            keywords: ["不斷","偏財"]
        }
    },
    "TianWu_Karma": {
        key: "TianWu_Karma",
        conditions: { withStars: ["天巫"], palace: "福德宮" },
        content: {
            summary: "福至心靈，直覺敏銳。",
            description: "第六感強。",
            keywords: ["心靈","敏銳"]
        }
    },
    "TianWu_Spouse": {
        key: "TianWu_Spouse",
        conditions: { withStars: ["天巫"], palace: "夫妻宮" },
        content: {
            summary: "配偶有助，心靈契合。",
            description: "配偶能旺夫/妻。",
            keywords: ["有助","契合"]
        }
    },
    "TianWu_Property": {
        key: "TianWu_Property",
        conditions: { withStars: ["天巫"], palace: "田宅宮" },
        content: {
            summary: "祖業興旺，居家吉祥。",
            description: "住家風水好。",
            keywords: ["興旺","吉祥"]
        }
    },
    "TianWu_Travel": {
        key: "TianWu_Travel",
        conditions: { withStars: ["天巫"], palace: "遷移宮" },
        content: {
            summary: "出外遇貴，機遇良好。",
            description: "在外有貴人。",
            keywords: ["遇貴","良好"]
        }
    },
    "TianWu_Health": {
        key: "TianWu_Health",
        conditions: { withStars: ["天巫"], palace: "疾厄宮" },
        content: {
            summary: "逢凶化吉，身體安康。",
            description: "病痛少。",
            keywords: ["化吉","安康"]
        }
    },
    "TianWu_Friends": {
        key: "TianWu_Friends",
        conditions: { withStars: ["天巫"], palace: "交友宮" },
        content: {
            summary: "友多高人，彼此提攜。",
            description: "結交有能力之人。",
            keywords: ["高人","提攜"]
        }
    },
    "TianWu_Parents": {
        key: "TianWu_Parents",
        conditions: { withStars: ["天巫"], palace: "父母宮" },
        content: {
            summary: "父母顯達，得其遺傳。",
            description: "父母優秀。",
            keywords: ["顯達","遺傳"]
        }
    },
    "TianWu_Children": {
        key: "TianWu_Children",
        conditions: { withStars: ["天巫"], palace: "子女宮" },
        content: {
            summary: "子女優秀，將來有成。",
            description: "子女有出息。",
            keywords: ["優秀","有成"]
        }
    },
    "TianWu_Siblings": {
        key: "TianWu_Siblings",
        conditions: { withStars: ["天巫"], palace: "兄弟宮" },
        content: {
            summary: "兄弟互助，共同發展。",
            description: "手足團結。",
            keywords: ["互助","發展"]
        }
    }
};
