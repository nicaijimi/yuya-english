const LESSONS = [
  { id: 1, title: "早晨起床", emoji: "🌅", phrases: [
    { en: "Good morning!", zh: "早上好！", hint: "古德 莫宁" },
    { en: "Wake up!", zh: "起床啦！", hint: "维克 阿普" },
    { en: "Time to get up.", zh: "该起床了。", hint: "泰姆 图 盖特 阿普" },
    { en: "Let's get dressed.", zh: "我们穿衣服吧。", hint: "莱次 盖特 拽斯德" },
    { en: "Brush your teeth.", zh: "刷牙吧。", hint: "布拉什 尤尔 提斯" },
    { en: "Wash your face.", zh: "洗洗脸。", hint: "沃什 尤尔 费斯" },
    { en: "It's sunny today.", zh: "今天天气真好。", hint: "伊次 萨尼 图代" },
    { en: "I love you.", zh: "我爱你。", hint: "艾 拉夫 尤" }
  ]},
  { id: 2, title: "吃饭时间", emoji: "🍚", phrases: [
    { en: "I'm hungry.", zh: "我饿了。", hint: "艾姆 汉格里" },
    { en: "Let's eat.", zh: "我们吃饭吧。", hint: "莱次 伊特" },
    { en: "Yummy!", zh: "真好吃！", hint: "亚米" },
    { en: "Drink some water.", zh: "喝点水。", hint: "准克 萨姆 沃特" },
    { en: "Use your spoon.", zh: "用你的勺子。", hint: "尤斯 尤尔 斯普恩" },
    { en: "Eat your vegetables.", zh: "吃点蔬菜。", hint: "伊特 尤尔 维吉特波兹" },
    { en: "More, please.", zh: "再来一点。", hint: "莫尔 普利兹" },
    { en: "I'm full.", zh: "我吃饱了。", hint: "艾姆 富尔" }
  ]},
  { id: 3, title: "一起玩耍", emoji: "🧸", phrases: [
    { en: "Let's play!", zh: "我们来玩吧！", hint: "莱次 普雷" },
    { en: "What is this?", zh: "这是什么？", hint: "沃特 伊兹 迪斯" },
    { en: "It's a ball.", zh: "这是一个球。", hint: "伊次 阿 波" },
    { en: "Come here.", zh: "过来。", hint: "卡姆 希尔" },
    { en: "Be careful.", zh: "小心一点。", hint: "比 凯尔弗" },
    { en: "Can I play too?", zh: "我也能玩吗？", hint: "坎 艾 普雷 图" },
    { en: "Good job!", zh: "做得真好！", hint: "古德 乔布" },
    { en: "Let's share.", zh: "我们一起分享吧。", hint: "莱次 谢尔" }
  ]},
  { id: 4, title: "出门散步", emoji: "🚶‍♀️", phrases: [
    { en: "Let's go out.", zh: "我们出门吧。", hint: "莱次 勾 奥特" },
    { en: "Put on your shoes.", zh: "穿上你的鞋子。", hint: "普特 昂 尤尔 舒兹" },
    { en: "Where are we going?", zh: "我们去哪里？", hint: "威尔 阿 维 勾英" },
    { en: "Look at that!", zh: "看那个！", hint: "卢克 阿特 戴特" },
    { en: "What a big tree!", zh: "好大的树！", hint: "沃特 阿 比格 崔" },
    { en: "Hold my hand.", zh: "牵着我的手。", hint: "侯德 迈 汉德" },
    { en: "It's raining.", zh: "下雨了。", hint: "伊次 雷宁" },
    { en: "Let's go home.", zh: "我们回家吧。", hint: "莱次 勾 侯姆" }
  ]},
  { id: 5, title: "睡前晚安", emoji: "🌙", phrases: [
    { en: "It's bedtime.", zh: "该睡觉了。", hint: "伊次 贝德泰姆" },
    { en: "Wash up first.", zh: "先洗一洗。", hint: "沃什 阿普 佛斯特" },
    { en: "Let me tell you a story.", zh: "我给你讲个故事。", hint: "莱特 米 特尔 尤 阿 斯托瑞" },
    { en: "Close your eyes.", zh: "闭上眼睛。", hint: "克洛斯 尤尔 艾兹" },
    { en: "Good night.", zh: "晚安。", hint: "古德 奈特" },
    { en: "Sweet dreams.", zh: "做个好梦。", hint: "斯维特 追姆斯" },
    { en: "Give me a kiss.", zh: "亲我一下。", hint: "吉夫 米 阿 基斯" },
    { en: "I love you.", zh: "我爱你。", hint: "艾 拉夫 尤" }
  ]},
  { id: 6, title: "心情小管家", emoji: "😊", phrases: [
    { en: "I'm happy.", zh: "我开心。", hint: "艾姆 哈皮" },
    { en: "I'm sad.", zh: "我难过。", hint: "艾姆 萨德" },
    { en: "I'm tired.", zh: "我累了。", hint: "艾姆 泰尔德" },
    { en: "I'm scared.", zh: "我害怕。", hint: "艾姆 斯凯尔德" },
    { en: "Are you okay?", zh: "你还好吗？", hint: "阿 尤 欧凯" },
    { en: "It's okay.", zh: "没关系。", hint: "伊次 欧凯" },
    { en: "Give me a hug.", zh: "抱抱我。", hint: "吉夫 米 阿 哈格" },
    { en: "I'm so happy today!", zh: "我今天好开心！", hint: "艾姆 搜 哈皮 图代" }
  ]},
  { id: 7, title: "洗澡时间", emoji: "🛁", phrases: [
    { en: "It's bath time.", zh: "该洗澡啦。", hint: "伊次 巴斯 泰姆" },
    { en: "Take off your clothes.", zh: "脱掉衣服。", hint: "泰克 奥夫 尤尔 克洛斯" },
    { en: "The water is warm.", zh: "水是温温的。", hint: "泽 沃特 伊兹 沃姆" },
    { en: "Wash your hair.", zh: "洗洗头发。", hint: "沃什 尤尔 黑尔" },
    { en: "Let's blow bubbles.", zh: "我们吹泡泡吧。", hint: "莱次 布洛 巴波兹" },
    { en: "Dry off with a towel.", zh: "用毛巾擦干。", hint: "准 奥夫 维兹 阿 陶尔" },
    { en: "You smell so good!", zh: "你闻起来真香！", hint: "尤 斯梅尔 搜 古德" },
    { en: "Put on your pajamas.", zh: "穿上睡衣。", hint: "普特 昂 尤尔 帕加马斯" }
  ]},
  { id: 8, title: "穿衣服", emoji: "👕", phrases: [
    { en: "Put on your shirt.", zh: "穿上上衣。", hint: "普特 昂 尤尔 舍特" },
    { en: "Where is your sock?", zh: "你的袜子呢？", hint: "威尔 伊兹 尤尔 索克" },
    { en: "It's too big.", zh: "太大了。", hint: "伊次 图 比格" },
    { en: "It fits you.", zh: "正合身。", hint: "伊次 菲茨 尤" },
    { en: "Button it up.", zh: "扣上扣子。", hint: "巴顿 伊特 阿普" },
    { en: "Let's zip up.", zh: "拉上拉链。", hint: "莱次 兹普 阿普" },
    { en: "Take off your jacket.", zh: "脱掉外套。", hint: "泰克 奥夫 尤尔 杰克特" },
    { en: "These shoes are nice.", zh: "这双鞋真好看。", hint: "迪兹 舒兹 阿 奈斯" }
  ]},
  { id: 9, title: "身体部位", emoji: "👀", phrases: [
    { en: "Where is your nose?", zh: "你的鼻子在哪？", hint: "威尔 伊兹 尤尔 诺兹" },
    { en: "Point to your eyes.", zh: "指一指眼睛。", hint: "波因特 图 尤尔 艾兹" },
    { en: "Clap your hands.", zh: "拍拍手。", hint: "克拉普 尤尔 汉兹" },
    { en: "Stomp your feet.", zh: "跺跺脚。", hint: "斯托姆普 尤尔 菲茨" },
    { en: "Touch your ears.", zh: "摸摸耳朵。", hint: "塔奇 尤尔 伊尔兹" },
    { en: "Wiggle your fingers.", zh: "动动手指。", hint: "维格 尤尔 芬格兹" },
    { en: "Show me your tummy.", zh: "给我看看你的小肚子。", hint: "秀 米 尤尔 塔米" },
    { en: "Let's count our toes.", zh: "数数脚趾头。", hint: "莱次 考特 阿尔 托兹" }
  ]},
  { id: 10, title: "小动物", emoji: "🐶", phrases: [
    { en: "What does the dog say?", zh: "小狗怎么叫？", hint: "沃特 达兹 泽 道格 塞" },
    { en: "A cat says meow.", zh: "小猫喵喵叫。", hint: "阿 凯特 塞兹 喵" },
    { en: "Look at the duck!", zh: "看那只鸭子！", hint: "卢克 阿特 泽 达克" },
    { en: "The bird can fly.", zh: "小鸟会飞。", hint: "泽 伯德 坎 弗莱" },
    { en: "The rabbit hops.", zh: "小兔子蹦蹦跳。", hint: "泽 拉比特 霍普斯" },
    { en: "Pet the puppy.", zh: "摸摸小狗。", hint: "佩特 泽 帕皮" },
    { en: "Feed the fish.", zh: "喂喂小鱼。", hint: "菲德 泽 菲什" },
    { en: "I see a butterfly.", zh: "我看到一只蝴蝶。", hint: "艾 西 阿 巴特弗莱" }
  ]},
  { id: 11, title: "颜色形状", emoji: "🔵", phrases: [
    { en: "What color is this?", zh: "这是什么颜色？", hint: "沃特 卡勒 伊兹 迪斯" },
    { en: "It's red.", zh: "是红色。", hint: "伊次 瑞德" },
    { en: "The sky is blue.", zh: "天空是蓝色的。", hint: "泽 斯凯 伊兹 布鲁" },
    { en: "I like green.", zh: "我喜欢绿色。", hint: "艾 莱克 格林" },
    { en: "This is a circle.", zh: "这是圆形。", hint: "迪斯 伊兹 阿 瑟克尔" },
    { en: "It's a square.", zh: "这是正方形。", hint: "伊次 阿 斯奎尔" },
    { en: "Draw a star.", zh: "画一颗星星。", hint: "卓 阿 斯达" },
    { en: "What a pretty color!", zh: "颜色真好看！", hint: "沃特 阿 普利蒂 卡勒" }
  ]},
  { id: 12, title: "数字", emoji: "🔢", phrases: [
    { en: "Let's count.", zh: "我们数一数。", hint: "莱次 考特" },
    { en: "One, two, three.", zh: "一、二、三。", hint: "万 图 斯瑞" },
    { en: "How many ducks?", zh: "有几只鸭子？", hint: "豪 梅尼 达克斯" },
    { en: "Three ducks.", zh: "三只鸭子。", hint: "斯瑞 达克斯" },
    { en: "How old are you?", zh: "你几岁啦？", hint: "豪 欧德 阿 尤" },
    { en: "I'm three.", zh: "我三岁。", hint: "艾姆 斯瑞" },
    { en: "Give me two.", zh: "给我两个。", hint: "吉夫 米 图" },
    { en: "That's ten!", zh: "那是十个！", hint: "戴茨 坦" }
  ]}
];

// A#4 = 降B，If You're Happy and You Know It 原曲含此音
const NOTE_FREQ = { C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.00, A4: 440.00, B4: 493.88, C5: 523.25, D5: 587.33, E5: 659.25,
                    "A#4": 466.16, F5: 698.46, G5: 783.99, A5: 880.00 };

const MELODIES = {
  twinkle: [
    [["C4", 1], ["C4", 1], ["G4", 1], ["G4", 1], ["A4", 1], ["A4", 1], ["G4", 2]],
    [["F4", 1], ["F4", 1], ["E4", 1], ["E4", 1], ["D4", 1], ["D4", 1], ["C4", 2]],
    [["G4", 1], ["G4", 1], ["F4", 1], ["F4", 1], ["E4", 1], ["E4", 1], ["D4", 2]],
    [["G4", 1], ["G4", 1], ["F4", 1], ["F4", 1], ["E4", 1], ["E4", 1], ["D4", 2]],
    [["C4", 1], ["C4", 1], ["G4", 1], ["G4", 1], ["A4", 1], ["A4", 1], ["G4", 2]],
    [["F4", 1], ["F4", 1], ["E4", 1], ["E4", 1], ["D4", 1], ["D4", 1], ["C4", 2]]
  ],
  abc: [
    [["C4", 1], ["C4", 1], ["G4", 1], ["G4", 1], ["A4", 1], ["A4", 1], ["G4", 2]],
    [["F4", 1], ["F4", 1], ["E4", 1], ["E4", 1], ["D4", 1], ["D4", 1], ["C4", 2]],
    [["G4", 1], ["G4", 1], ["F4", 1], ["F4", 1], ["E4", 1], ["E4", 1], ["D4", 2]],
    [["G4", 1], ["G4", 1], ["F4", 1], ["F4", 1], ["E4", 1], ["E4", 1], ["D4", 2]],
    [["C4", 1], ["C4", 1], ["G4", 1], ["G4", 1], ["A4", 1], ["A4", 1], ["G4", 2]],
    [["F4", 1], ["F4", 1], ["E4", 1], ["E4", 1], ["D4", 1], ["D4", 1], ["C4", 2]]
  ],
  baabaa: [
    [["C4", 1], ["C4", 1], ["G4", 1], ["G4", 1], ["A4", 1], ["A4", 1], ["G4", 2]],
    [["F4", 1], ["F4", 1], ["E4", 1], ["E4", 1], ["D4", 1], ["D4", 1], ["C4", 2]],
    [["G4", 1], ["G4", 1], ["F4", 1], ["F4", 1], ["E4", 1], ["E4", 1], ["D4", 2]],
    [["G4", 1], ["G4", 1], ["F4", 1], ["F4", 2]],
    [["E4", 1], ["E4", 1], ["D4", 2]],
    [["C4", 1], ["C4", 1], ["G4", 1], ["G4", 1], ["A4", 1], ["A4", 1], ["G4", 2], ["F4", 1], ["F4", 1], ["E4", 1], ["E4", 1], ["D4", 1], ["D4", 1], ["C4", 2]]
  ],
  wheels: [
    [["G4", 1], ["C5", 1], ["C5", 1], ["C5", 1], ["C5", 1], ["E5", 1], ["G5", 1], ["E5", 1], ["C5", 2]],
    [["D5", 1], ["B4", 1], ["G4", 1], ["G4", 1], ["E4", 1], ["C5", 2]],
    [["G4", 1], ["C5", 1], ["C5", 1], ["C5", 1], ["C5", 1], ["E5", 1], ["G5", 1], ["E5", 1], ["C5", 2]],
    [["D5", 1], ["G4", 1], ["C5", 2]]
  ],
  macdonald: [
    [["G4", 1], ["G4", 1], ["G4", 1], ["D4", 1], ["E4", 1], ["E4", 1], ["D4", 2]],
    [["B4", 1], ["B4", 1], ["A4", 1], ["A4", 1], ["G4", 2]],
    [["G4", 1], ["G4", 1], ["G4", 1], ["D4", 1], ["E4", 1], ["E4", 1], ["D4", 2]],
    [["B4", 1], ["B4", 1], ["A4", 1], ["A4", 1], ["G4", 2]],
    [["D4", 1], ["D4", 1], ["G4", 1], ["G4", 1], ["G4", 2], ["D4", 1], ["D4", 1], ["G4", 1], ["G4", 1], ["G4", 2]],
    [["G4", 0.5], ["G4", 0.5], ["G4", 0.5], ["G4", 0.5], ["G4", 0.5], ["G4", 0.5], ["G4", 0.5], ["G4", 0.5], ["G4", 0.5], ["G4", 0.5], ["G4", 0.5], ["G4", 0.5]]
  ],
  row: [
    [["C4", 1], ["C4", 1], ["C4", 1], ["D4", 1], ["E4", 2]],
    [["E4", 1], ["D4", 1], ["E4", 1], ["F4", 1], ["G4", 2]],
    [["C5", 1], ["C5", 1], ["C5", 1], ["G4", 1], ["G4", 1], ["G4", 1], ["E4", 1], ["E4", 1], ["E4", 1], ["C4", 1], ["C4", 1], ["C4", 2]],
    [["G4", 1], ["F4", 1], ["E4", 1], ["D4", 1], ["C4", 2]]
  ],
  mary: [
    [["E4", 1], ["D4", 1], ["C4", 1], ["D4", 1], ["E4", 1], ["E4", 1], ["E4", 2]],
    [["D4", 1], ["D4", 1], ["D4", 2], ["E4", 1], ["G4", 1], ["G4", 2]],
    [["E4", 1], ["D4", 1], ["C4", 1], ["D4", 1], ["E4", 1], ["E4", 1], ["E4", 2]],
    [["E4", 1], ["D4", 1], ["D4", 1], ["E4", 1], ["D4", 1], ["C4", 2]]
  ],
  headshoulders: [
    [["C4", 1], ["D4", 1], ["C4", 1], ["B4", 1], ["C4", 1], ["A4", 2]],
    [["C4", 1], ["C4", 1], ["C4", 2]],
    [["C4", 1], ["D4", 1], ["C4", 1], ["B4", 1], ["C4", 1], ["G4", 2]],
    [["C4", 1], ["C4", 1], ["C4", 2]],
    [["A4", 1], ["G4", 1], ["F4", 1], ["A4", 1], ["C5", 1], ["F4", 1], ["G4", 1], ["F4", 1], ["E4", 1], ["F4", 1], ["D4", 2]],
    [["C4", 1], ["D4", 1], ["C4", 1], ["B4", 1], ["C4", 1], ["A4", 1], ["C4", 1], ["C4", 1], ["C4", 2]]
  ],
  happy: [
    [["C4", 1], ["C4", 1], ["F4", 1], ["F4", 1], ["F4", 1], ["F4", 1], ["F4", 1], ["F4", 1], ["E4", 1], ["F4", 1], ["G4", 2]],
    [["C4", 1], ["C4", 1], ["G4", 1], ["G4", 1], ["G4", 1], ["G4", 1], ["G4", 1], ["G4", 1], ["F4", 1], ["G4", 1], ["A4", 2]],
    [["A4", 1], ["A4", 1], ["A#4", 1], ["A#4", 1], ["A#4", 1], ["A#4", 1], ["D5", 1], ["D5", 2], ["A#4", 1], ["A#4", 1], ["A4", 1], ["A4", 1], ["A4", 1], ["G4", 1], ["F4", 1], ["F4", 2]],
    [["A4", 1], ["A4", 1], ["G4", 1], ["G4", 1], ["G4", 1], ["F4", 1], ["E4", 1], ["E4", 1], ["D4", 1], ["E4", 1], ["F4", 2]]
  ],
  ducks: [
    [["E4", 1], ["G4", 1], ["G4", 1], ["G4", 1], ["E4", 1], ["C4", 2]],
    [["E4", 1], ["D4", 1], ["D4", 1], ["G4", 2]],
    [["E4", 1], ["E4", 1], ["G4", 1], ["G4", 1], ["E4", 2]],
    [["E4", 1], ["D4", 1], ["D4", 1], ["D4", 1], ["G4", 1], ["G4", 1], ["G4", 1], ["F4", 1], ["F4", 1], ["E4", 1], ["D4", 1], ["C4", 2]]
  ],
  rain: [
    [["G4", 1], ["E4", 1], ["G4", 1], ["G4", 1], ["E4", 2]],
    [["G4", 1], ["G4", 1], ["E4", 1], ["A4", 1], ["G4", 1], ["G4", 1], ["E4", 2]],
    [["F4", 1], ["F4", 1], ["D4", 1], ["D4", 1], ["F4", 1], ["F4", 1], ["D4", 2]],
    [["G4", 1], ["F4", 1], ["E4", 1], ["D4", 1], ["E4", 1], ["C4", 1], ["C4", 2]]
  ],
  london: [
    [["G4", 1], ["A4", 1], ["G4", 1], ["F4", 1], ["E4", 1], ["F4", 1], ["G4", 2]],
    [["D4", 1], ["E4", 1], ["F4", 2], ["E4", 1], ["F4", 1], ["G4", 2]],
    [["G4", 1], ["A4", 1], ["G4", 1], ["F4", 1], ["E4", 1], ["F4", 1], ["G4", 2]],
    [["D4", 1], ["G4", 1], ["E4", 1], ["C4", 2]]
  ]
};

const SONGS = [
  { id: 1, title: "Twinkle Twinkle Little Star", emoji: "⭐", sub: "一闪一闪小星星", melody: "twinkle", lyrics: [
    { en: "Twinkle, twinkle, little star,", zh: "一闪一闪小星星" },
    { en: "How I wonder what you are.", zh: "我真好奇你是什么" },
    { en: "Up above the world so high,", zh: "高高挂在天空上" },
    { en: "Like a diamond in the sky.", zh: "像天上的钻石一样" },
    { en: "Twinkle, twinkle, little star,", zh: "一闪一闪小星星" },
    { en: "How I wonder what you are.", zh: "我真好奇你是什么" }
  ]},
  { id: 2, title: "ABC Song", emoji: "🔤", sub: "字母歌", melody: "abc", lyrics: [
    { en: "A B C D E F G", zh: "A B C D E F G" },
    { en: "H I J K L M N O P", zh: "H I J K L M N O P" },
    { en: "Q R S, T U V", zh: "Q R S、T U V" },
    { en: "W X, Y and Z", zh: "W X，还有 Y 和 Z" },
    { en: "Now I know my ABCs,", zh: "现在我认识字母表啦" },
    { en: "Next time won't you sing with me?", zh: "下次和我一起唱好吗？" }
  ]},
  { id: 3, title: "The Wheels on the Bus", emoji: "🚌", sub: "公交车的轮子", melody: "wheels", lyrics: [
    { en: "The wheels on the bus go round and round,", zh: "公交车的轮子转呀转" },
    { en: "Round and round, round and round.", zh: "转呀转，转呀转" },
    { en: "The wheels on the bus go round and round,", zh: "公交车的轮子转呀转" },
    { en: "All through the town.", zh: "转遍了整座城" }
  ]},
  { id: 4, title: "Old MacDonald Had a Farm", emoji: "🐮", sub: "老麦克唐纳有个农场", melody: "macdonald", lyrics: [
    { en: "Old MacDonald had a farm,", zh: "老麦克唐纳有个农场" },
    { en: "E-I-E-I-O.", zh: "咿呀咿呀哟" },
    { en: "And on that farm he had a cow,", zh: "农场里有头奶牛" },
    { en: "E-I-E-I-O.", zh: "咿呀咿呀哟" },
    { en: "With a moo moo here and a moo moo there,", zh: "这儿哞哞，那儿哞哞" },
    { en: "Here a moo, there a moo, everywhere a moo moo.", zh: "到处都是哞哞叫" }
  ]},
  { id: 5, title: "Baa Baa Black Sheep", emoji: "🐑", sub: "小黑羊", melody: "baabaa", lyrics: [
    { en: "Baa, baa, black sheep,", zh: "咩咩，小黑羊" },
    { en: "Have you any wool?", zh: "你有没有羊毛呀？" },
    { en: "Yes sir, yes sir, three bags full.", zh: "有的先生，满满三大袋" },
    { en: "One for the master,", zh: "一袋给主人" },
    { en: "One for the dame,", zh: "一袋给夫人" },
    { en: "And one for the little boy who lives down the lane.", zh: "一袋给住在巷子那头的小男孩" }
  ]},
  { id: 6, title: "Row Row Row Your Boat", emoji: "🚣", sub: "划小船", melody: "row", lyrics: [
    { en: "Row, row, row your boat,", zh: "划呀划，划你的小船" },
    { en: "Gently down the stream.", zh: "轻轻地顺流而下" },
    { en: "Merrily, merrily, merrily, merrily,", zh: "快乐地，快乐地，快乐地，快乐地" },
    { en: "Life is but a dream.", zh: "生活就像一场梦" }
  ]},
  { id: 7, title: "Mary Had a Little Lamb", emoji: "🐑", sub: "玛丽有只小羊羔", melody: "mary", lyrics: [
    { en: "Mary had a little lamb,", zh: "玛丽有只小羊羔" },
    { en: "Little lamb, little lamb.", zh: "小羊羔，小羊羔" },
    { en: "Mary had a little lamb,", zh: "玛丽有只小羊羔" },
    { en: "Its fleece was white as snow.", zh: "它的羊毛像雪一样白" }
  ]},
  { id: 8, title: "Head Shoulders Knees and Toes", emoji: "🙆", sub: "身体歌", melody: "headshoulders", lyrics: [
    { en: "Head, shoulders, knees and toes,", zh: "头、肩膀、膝盖和脚趾" },
    { en: "Knees and toes.", zh: "膝盖和脚趾" },
    { en: "Head, shoulders, knees and toes,", zh: "头、肩膀、膝盖和脚趾" },
    { en: "Knees and toes.", zh: "膝盖和脚趾" },
    { en: "Eyes and ears and mouth and nose,", zh: "眼睛、耳朵、嘴巴和鼻子" },
    { en: "Head, shoulders, knees and toes.", zh: "头、肩膀、膝盖和脚趾" }
  ]},
  { id: 9, title: "If You're Happy and You Know It", emoji: "👏", sub: "幸福拍手歌", melody: "happy", lyrics: [
    { en: "If you're happy and you know it, clap your hands.", zh: "如果你开心而且你知道，就拍拍手" },
    { en: "If you're happy and you know it, clap your hands.", zh: "如果你开心而且你知道，就拍拍手" },
    { en: "If you're happy and you know it, then your face will surely show it.", zh: "如果你开心而且你知道，脸上也会笑出来" },
    { en: "If you're happy and you know it, clap your hands.", zh: "如果你开心而且你知道，就拍拍手" }
  ]},
  { id: 10, title: "Five Little Ducks", emoji: "🦆", sub: "五只小鸭子", melody: "ducks", lyrics: [
    { en: "Five little ducks went out one day,", zh: "五只小鸭子有一天出去玩" },
    { en: "Over the hill and far away.", zh: "翻过小山，走到很远很远" },
    { en: "Mother duck said, quack quack quack.", zh: "鸭妈妈叫，嘎嘎嘎" },
    { en: "But only four little ducks came back.", zh: "可只有四只小鸭子回来了" }
  ]},
  { id: 11, title: "Rain Rain Go Away", emoji: "🌧️", sub: "雨呀雨快走开", melody: "rain", lyrics: [
    { en: "Rain, rain, go away,", zh: "雨呀雨，快走开" },
    { en: "Come again another day.", zh: "改天你再来" },
    { en: "Little baby wants to play.", zh: "小宝宝想要出去玩" },
    { en: "Rain, rain, go away.", zh: "雨呀雨，快走开" }
  ]},
  { id: 12, title: "London Bridge Is Falling Down", emoji: "🌉", sub: "伦敦大桥", melody: "london", lyrics: [
    { en: "London Bridge is falling down,", zh: "伦敦大桥要塌啦" },
    { en: "Falling down, falling down.", zh: "塌下来，塌下来" },
    { en: "London Bridge is falling down,", zh: "伦敦大桥要塌啦" },
    { en: "My fair lady.", zh: "我美丽的女士" }
  ]}
];

const INTENTS = [
  { re: /good morning|早上好|早安/, en: "Good morning! Did you sleep well?", zh: "早上好！昨晚睡得好吗？" },
  { re: /good night|晚安/, en: "Good night! Sweet dreams.", zh: "晚安，做个好梦。" },
  { re: /how are you|你好吗|怎么样/, en: "I'm great, thank you! And you?", zh: "我很好，谢谢！你呢？" },
  { re: /your name|你叫什么|你的名字/, en: "My name is Jiji. What's your name?", zh: "我叫叽叽，你叫什么名字呀？" },
  { re: /my name is|我叫|我是/, en: "Nice to meet you!", zh: "很高兴认识你！" },
  { re: /how old|几岁|岁啦|years old|i am \d/, en: "Wow! I'm four years old.", zh: "哇！我四岁啦。" },
  { re: /i love you|我爱你|love you/, en: "I love you too!", zh: "我也爱你！" },
  { re: /thank you|thanks|谢谢/, en: "You're welcome!", zh: "不客气！" },
  { re: /sorry|对不起|抱歉/, en: "It's okay!", zh: "没关系！" },
  { re: /\bbye\b|goodbye|再见|拜拜/, en: "Bye bye! See you later!", zh: "再见，下次见！" },
  { re: /what is this|这是什么|what.*that/, en: "Let's find out together! What color do you see?", zh: "我们一起看看吧，你看到了什么颜色？" },
  { re: /cat|dog|duck|bird|rabbit|小猫|小狗|鸭子|小鸟|兔子|动物/, en: "I love animals! A cat says meow.", zh: "我好喜欢小动物！小猫喵喵叫。" },
  { re: /hungry|eat|food|饿了|吃饭|好吃/, en: "Me too! Let's say: I'm hungry.", zh: "我也饿啦！跟我念：I'm hungry。" },
  { re: /happy|开心|高兴/, en: "Yay! I'm happy too. Say it with me: I'm happy.", zh: "太棒了，我也很开心！跟我念：I'm happy。" },
  { re: /sad|难过|伤心|哭/, en: "It's okay. I'm here with you. Say: I'm sad, but I'm okay.", zh: "没关系，我陪着你。" },
  { re: /play|玩|游戏/, en: "Let's play! Say: Let's play!", zh: "我们来玩吧！跟我念：Let's play！" },
  { re: /song|sing|唱歌|儿歌|音乐/, en: "I love songs! Try the Songs tab to sing along.", zh: "我喜欢唱歌！去「歌曲」页一起唱吧。" },
  { re: /story|故事|讲/, en: "Once upon a time, there was a little chick...", zh: "从前呀，有一只小鸡……" },
  { re: /help|帮我|教我|不会|怎么/, en: "I'm here! Try the Speaking Coach to practice.", zh: "我在呢！去「口语教练」练习口语吧。" },
  { re: /good job|well done|真棒|厉害|好棒/, en: "Thank you! You did a good job too!", zh: "谢谢！你也很棒！" },
  { re: /hello|hi|hey|哈喽|你好|嗨/, en: "Hello! I'm Jiji the chick. Let's learn English together!", zh: "你好呀，我是小鸡叽叽，我们一起学英语吧！" }
];

const GRAMMAR_RULES = [
  [/\bi is\b/g, "I am"], [/\bi are\b/g, "I am"], [/\bi has\b/g, "I have"],
  [/\byou is\b/g, "you are"], [/\byou has\b/g, "you have"], [/\bis you\b/g, "are you"],
  [/\bdoes you\b/g, "do you"], [/\bdo he\b/g, "does he"], [/\bdo she\b/g, "does she"],
  [/\bi no like\b/g, "I don't like"], [/\bi no want\b/g, "I don't want"],
  [/\bi no have\b/g, "I don't have"], [/\bi don't likes\b/g, "I don't like"],
  [/\bi want go\b/g, "I want to go"], [/\bi want eat\b/g, "I want to eat"],
  [/\bi want play\b/g, "I want to play"], [/\bi am go\b/g, "I am going"],
  [/\bi am eat\b/g, "I am eating"], [/\bi am play\b/g, "I am playing"],
  [/\bi goed\b/g, "I went"], [/\bi eated\b/g, "I ate"], [/\bi runned\b/g, "I ran"],
  [/\bgooder\b/g, "better"], [/\bbadder\b/g, "worse"], [/\bmore good\b/g, "better"],
  [/\bme happy\b/g, "I am happy"], [/\bme sad\b/g, "I am sad"],
  [/\bme like\b/g, "I like"], [/\bme want\b/g, "I want"],
  [/\bshe like\b/g, "she likes"], [/\bhe like\b/g, "he likes"], [/\bit like\b/g, "it likes"],
  [/\bshe go\b/g, "she goes"], [/\bhe go\b/g, "he goes"], [/\bi likes\b/g, "I like"],
  [/\bcan i has\b/g, "can I have"]
];

const STORAGE_KEY = "momBabyEnglish_v2";

function defaultState(){
  return {
    streak: { days: 0, lastDate: "" },
    lessons: {},
    stickers: [],
    settings: { rate: "slow", voiceURI: "", voiceURIzh: "", voiceStyle: "std", cartoonPreset: "soft" }
  };
}

let state = loadState();

// 旧版本升级：卡通合成音色因可懂度不达标已下线，已启用的用户回到童声
(function migrateVoice(){
  try {
    const s = state.settings;
    if (s){
      if (s.cartoonPreset === undefined) s.cartoonPreset = "soft";
      // 只保留成人温柔女声：旧的童声/卡通音色统一切回标准音（之前 1.6 音调偏尖硬）
      if (s.voiceStyle === "cartoon" || s.voiceStyle === "kid") s.voiceStyle = "std";
    }
  } catch (e) {}
})();

function loadState(){
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return Object.assign(defaultState(), JSON.parse(raw));
  } catch (e) {}
  return defaultState();
}

function saveState(){
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
}

const $ = (id) => document.getElementById(id);

function esc(s){
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function todayStr(){
  const d = new Date();
  const p = (n) => String(n).padStart(2, "0");
  return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate());
}

function yesterdayStr(){
  const d = new Date(Date.now() - 86400000);
  const p = (n) => String(n).padStart(2, "0");
  return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate());
}

function markLearning(){
  const today = todayStr();
  const s = state.streak;
  if (s.lastDate === today) return;
  s.days = (s.lastDate === yesterdayStr()) ? s.days + 1 : 1;
  s.lastDate = today;
  saveState();
}

function shuffle(arr){
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function starCount(score){
  if (!score) return 0;
  return score >= 5 ? 3 : score >= 3 ? 2 : 1;
}

function normalize(text){
  return String(text).toLowerCase().replace(/[^\w\u4e00-\u9fff\s]/g, " ").replace(/\s+/g, " ").trim();
}

function tokenize(text){
  return text.split(" ").filter(Boolean);
}

function capitalize(text){
  return text.replace(/\bi\b/g, "I").replace(/(^|[.!?]\s+)([a-z])/g, (m, p1, p2) => p1 + p2.toUpperCase()).replace(/^[a-z]/, (c) => c.toUpperCase());
}

function correctGrammar(text){
  let out = normalize(text);
  let changed = false;
  for (const [re, fix] of GRAMMAR_RULES){
    const next = out.replace(re, fix);
    if (next !== out) changed = true;
    out = next;
  }
  if (!changed) return null;
  return capitalize(out);
}

let voicesList = [];

function voicesFor(lang){
  return voicesList.filter((v) => v.lang && v.lang.toLowerCase().indexOf(lang) === 0);
}

function pickVoice(lang){
  const pool = voicesFor(lang);
  const saved = lang === "zh" ? state.settings.voiceURIzh : state.settings.voiceURI;
  if (saved){
    const hit = pool.find((v) => v.voiceURI === saved);
    if (hit) return hit;
  }
  const enPref = ["Samantha", "Google US English", "Microsoft Aria", "Microsoft Zira", "Microsoft Jenny", "Karen", "Daniel"];
  const zhPref = ["Ting-Ting", "Sin-ji", "Google 普通话", "Google 國語", "Microsoft Xiaoxiao", "Microsoft Huihui", "Microsoft Yaoyao", "Meijia"];
  const pref = lang === "zh" ? zhPref : enPref;
  for (const name of pref){
    const hit = pool.find((v) => v.name.indexOf(name) !== -1);
    if (hit) return hit;
  }
  return pool[0] || null;
}

function makeUtterance(text, lang){
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang === "zh" ? "zh-CN" : "en-US";
  const v = pickVoice(lang);
  if (v) u.voice = v;
  // 温柔女声：放慢语速、不再拔高音调（之前童声 1.6 偏尖硬）
  const slow = state.settings.rate === "slow";
  u.rate = lang === "en" ? (slow ? 0.8 : 1.0) : (slow ? 0.9 : 1.0);
  u.pitch = 1.0;   // 成人女声自然音高，柔和
  return u;
}

// 卡通角色说话：按音节用共振峰合成，音高走语调曲线
function speakCartoon(text, lang){
  if (!("AudioContext" in window || "webkitAudioContext" in window)) return false;
  try { window.speechSynthesis.cancel(); } catch (e) {}
  stopMelody();
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === "suspended") audioCtx.resume();
  const preset = CARTOON_PRESETS[state.settings.cartoonPreset] || CARTOON_PRESETS.tender;
  const sylls = syllablesOfLine(text);
  if (!sylls.length) return false;
  const isQuestion = /\?\s*$/.test(text.trim());
  let t = audioCtx.currentTime + 0.05;
  const total = sylls.length;
  sylls.forEach((v, i) => {
    const p = total > 1 ? i / (total - 1) : 0;
    // 疑问句句尾上扬，陈述句缓降；句首略高更显稚嫩
    const curve = isQuestion ? (1 + p * preset.tilt) : (1 + preset.tilt * 0.4 - p * preset.tilt);
    const dur = preset.syl;
    singNote(preset.base * curve, t, dur * 0.9, 0.50, v, "", 0.004);
    t += dur + 0.028;
  });
  return true;
}

// 念一句并推进：卡通模式用共振峰合成（按音节估算时长），否则用 TTS 的 onend
function speakLineAndAdvance(text, lang, done){
  const isCartoon = (state.settings.voiceStyle || "kid") === "cartoon" && lang !== "zh";
  if (isCartoon && speakCartoon(text, lang)){
    const preset = CARTOON_PRESETS[state.settings.cartoonPreset] || CARTOON_PRESETS.soft;
    const n = Math.max(syllablesOfLine(text).length, 1);
    const dur = n * (preset.syl + 0.028) + 0.5;   // 合成时长 + 句间停顿
    return setTimeout(done, dur * 1000);
  }
  if (!("speechSynthesis" in window)){ return setTimeout(done, 800); }
  try { window.speechSynthesis.cancel(); } catch (e) {}
  const u = makeUtterance(text, lang);
  u.onend = () => setTimeout(done, 420);
  u.onerror = () => setTimeout(done, 420);
  window.speechSynthesis.speak(u);
  return null;
}

function speak(text, lang){
  // 卡通角色：英文句子用共振峰合成配音（中文解释保持清晰发音，方便大人听懂）
  if ((state.settings.voiceStyle || "kid") === "cartoon" && lang !== "zh"){
    if (speakCartoon(text, lang)) return true;
  }
  if (!("speechSynthesis" in window)) return false;
  try { window.speechSynthesis.cancel(); } catch (e) {}
  const u = makeUtterance(text, lang || "en");
  window.speechSynthesis.speak(u);
  return true;
}

function speakBilingual(en, zh){
  if (!("speechSynthesis" in window)) return;
  try { window.speechSynthesis.cancel(); } catch (e) {}
  setBearTalking(true);
  const u1 = makeUtterance(en, "en");
  u1.onend = () => {
    const u2 = makeUtterance(zh, "zh");
    u2.onend = () => setBearTalking(false);
    window.speechSynthesis.speak(u2);
  };
  window.speechSynthesis.speak(u1);
}

function setBearTalking(on){
  const bear = $("bear");
  if (bear) bear.classList.toggle("talking", on);
}

function refreshVoices(){
  voicesList = ("speechSynthesis" in window) ? window.speechSynthesis.getVoices() : [];
  const enSel = $("voiceSelect");
  const zhSel = $("voiceSelectZh");
  if (enSel) enSel.innerHTML = voiceOptions("en", state.settings.voiceURI);
  if (zhSel) zhSel.innerHTML = voiceOptions("zh", state.settings.voiceURIzh);
  const tip = $("voiceTip");
  if (tip) tip.style.display = ("speechSynthesis" in window && voicesFor("en").length) ? "none" : "block";
}

function voiceOptions(lang, selected){
  const pool = voicesFor(lang);
  if (!pool.length) return '<option value="">（未找到' + (lang === "zh" ? "中文" : "英文") + '发音人）</option>';
  return pool.map((v) => '<option value="' + esc(v.voiceURI) + '"' + (v.voiceURI === selected ? " selected" : "") + ">" + esc(v.name) + "</option>").join("");
}

function showScreen(id){
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  $("screen-" + id).classList.add("active");
  document.querySelectorAll(".tab").forEach((t) => t.classList.toggle("active", t.dataset.screen === id));
  window.scrollTo(0, 0);
  if (id === "home") renderHome();
  if (id === "songs") renderSongs();
  if (id === "profile") renderProfile();
}

function openPage(id){
  $("page-" + id).classList.add("open");
}

function closePage(id){
  stopAllAudio();
  $("page-" + id).classList.remove("open");
}

// 统一清理：离开页面 / 切后台 / 锁屏时停掉所有声音，避免声音"跟着人跑"
function stopAllAudio(){
  try { window.speechSynthesis.cancel(); } catch (e) {}
  if (typeof lessonReading !== "undefined" && lessonReading) stopLessonReading();
  if (typeof songPlaying !== "undefined" && songPlaying) stopSongPlay();
  if (typeof melodyPlaying !== "undefined" && melodyPlaying) stopMelody();
}

function renderHome(){
  const today = todayStr();
  const todayDone = state.streak.lastDate === today && state.streak.days > 0;
  const hour = new Date().getHours();
  const greet = hour < 6 ? "夜深了" : hour < 11 ? "早上好" : hour < 14 ? "中午好" : hour < 18 ? "下午好" : "晚上好";
  $("heroTitle").textContent = greet + " 👋";
  $("heroSub").textContent = "今天想学点什么？每天 10 分钟，和宝宝一起开口说。";
  $("streakDays").textContent = state.streak.days;
  $("streakText").textContent = todayDone ? "今天已经打卡啦，明天继续。" : "今天还没学习，现在开始吧。";

  const firstUndone = LESSONS.find((l) => !(state.lessons[l.id] && state.lessons[l.id].done));
  const rec = firstUndone || LESSONS[Math.floor(Math.random() * LESSONS.length)];
  $("todayTag").textContent = firstUndone ? "今日推荐" : "全部学完啦";
  $("todayEmoji").textContent = rec.emoji;
  $("todayTitle").textContent = firstUndone ? "第" + rec.id + "课 · " + rec.title : "12 课全部学完啦！";
  $("todaySub").textContent = firstUndone ? rec.phrases.length + " 个亲子日常句子" : "每天 10 分钟，记得常复习哦";
  $("todayBtn").textContent = firstUndone ? "开始学习" : "复习一下";
  $("todayCard").onclick = () => openLesson(rec.id);

  $("lessonGrid").innerHTML = LESSONS.map((l) => {
    const st = state.lessons[l.id] || {};
    const stars = starCount(st.quizBest);
    const statusHtml = st.done
      ? '<div class="l-status ok">✓ 已学' + (stars ? ' <span class="l-stars">' + "⭐".repeat(stars) + "</span>" : "") + "</div>"
      : '<div class="l-status">未学</div>';
    return '<div class="lesson-card" data-id="' + l.id + '">' +
      '<div class="l-emoji">' + l.emoji + "</div>" +
      '<div class="l-title">第' + l.id + "课 · " + l.title + "</div>" +
      '<div class="l-sub">' + l.phrases.length + " 个句子</div>" +
      statusHtml + "</div>";
  }).join("");
  $("lessonGrid").querySelectorAll(".lesson-card").forEach((c) => c.addEventListener("click", () => openLesson(+c.dataset.id)));
}

let currentLesson = null;
let heardCount = 0;

function openLesson(id){
  currentLesson = LESSONS.find((l) => l.id === id);
  if (!currentLesson) return;
  heardCount = 0;
  $("lessonTitle").textContent = "第" + currentLesson.id + "课 · " + currentLesson.title;
  renderLesson();
  openPage("lesson");
}

function renderLesson(){
  const total = currentLesson.phrases.length;
  $("learnFill").style.width = (heardCount / total * 100) + "%";
  $("learnProg").textContent = "已听 " + heardCount + " / " + total + " 句";
  $("cardList").innerHTML = currentLesson.phrases.map((p, i) =>
    '<div class="pcard" data-i="' + i + '">' +
    '<div class="pcard-top"><span class="p-en">' + esc(p.en) + '</span><span class="p-sound">🔊</span></div>' +
    '<div class="p-hint">' + esc(p.hint) + "</div>" +
    '<div class="p-zh">' + esc(p.zh) + "</div></div>"
  ).join("");
  $("cardList").querySelectorAll(".pcard").forEach((card) => card.addEventListener("click", () => {
    const i = +card.dataset.i;
    speak(currentLesson.phrases[i].en, "en");
    if (!card.classList.contains("heard")){
      card.classList.add("heard");
      heardCount++;
      renderLesson();
    }
  }));
}

let practiceIndex = 0;

// ===== 课程全篇朗读：逐句连读 + 当前句高亮 =====
let lessonReading = false;

function readAllLesson(){
  if (lessonReading){ stopLessonReading(); return; }
  if (!currentLesson) return;
  lessonReading = true;
  $("btnReadAll").textContent = "⏹ 停止朗读";
  try { window.speechSynthesis.cancel(); } catch (e) {}
  const phrases = currentLesson.phrases;
  let i = 0;
  const cards = () => $("cardList").querySelectorAll(".pcard");
  function markHeard(idx){
    const card = cards()[idx];
    if (card && !card.classList.contains("heard")){
      card.classList.add("heard");
      heardCount++;
      const total = phrases.length;
      $("learnFill").style.width = (heardCount / total * 100) + "%";
      $("learnProg").textContent = "已听 " + heardCount + " / " + total + " 句";
    }
  }
  function next(){
    if (!lessonReading) return;
    if (i >= phrases.length){ stopLessonReading(); return; }
    cards().forEach((c, idx) => c.classList.toggle("reading", idx === i));
    const idx = i;
    lessonReadTimer = speakLineAndAdvance(phrases[idx].en, "en", () => {
      markHeard(idx);
      i++;
      next();
    });
  }
  next();
}

function stopLessonReading(){
  lessonReading = false;
  if (lessonReadTimer){ clearTimeout(lessonReadTimer); lessonReadTimer = null; }
  try { window.speechSynthesis.cancel(); } catch (e) {}
  $("btnReadAll").textContent = "🔊 全篇朗读";
  const cards = $("cardList").querySelectorAll(".pcard");
  cards.forEach((c) => c.classList.remove("reading"));
}

function startPractice(){
  practiceIndex = 0;
  renderPractice();
  openPage("practice");
}

function renderPractice(){
  const phrases = currentLesson.phrases;
  const p = phrases[practiceIndex];
  $("practiceTitle").textContent = "跟读练习 · " + currentLesson.title;
  $("pEn").textContent = p.en;
  $("pHint").textContent = p.hint;
  $("pZh").textContent = p.zh;
  $("practiceDots").innerHTML = phrases.map((_, i) => '<span class="dot ' + (i < practiceIndex ? "on" : i === practiceIndex ? "cur" : "") + '"></span>').join("");
  $("btnNext").textContent = practiceIndex < phrases.length - 1 ? "我学会啦" : "完成本课";
}

function practiceNext(){
  if (practiceIndex < currentLesson.phrases.length - 1){
    practiceIndex++;
    renderPractice();
    speak(currentLesson.phrases[practiceIndex].en, "en");
  } else {
    finishLesson();
    $("doneSticker").textContent = currentLesson.emoji;
    $("practiceDone").classList.add("show");
  }
}

function finishLesson(){
  const id = currentLesson.id;
  const l = state.lessons[id] = state.lessons[id] || {};
  if (!l.done){
    l.done = true;
    l.doneDate = todayStr();
  }
  if (state.stickers.indexOf(id) === -1) state.stickers.push(id);
  markLearning();
  saveState();
}

let quizQuestions = [];
let quizIndex = 0;
let quizStars = 0;
let quizLocked = false;

function startQuiz(){
  quizQuestions = buildQuiz(currentLesson);
  quizIndex = 0;
  quizStars = 0;
  quizLocked = false;
  renderQuiz();
  openPage("quiz");
  if (quizQuestions[0] && quizQuestions[0].type === "listen") speak(quizQuestions[0].correct.en, "en");
}

function buildQuiz(lesson, n = 5){
  const pool = shuffle(lesson.phrases);
  const out = [];
  for (let i = 0; i < Math.min(n, pool.length); i++){
    const correct = pool[i];
    const distractors = shuffle(lesson.phrases.filter((p) => p !== correct)).slice(0, 3);
    out.push({ type: i % 2 === 0 ? "listen" : "read", correct, options: shuffle([correct, ...distractors]) });
  }
  return out;
}

function renderQuiz(){
  const q = quizQuestions[quizIndex];
  quizLocked = false;
  $("quizNum").textContent = "第 " + (quizIndex + 1) + " / " + quizQuestions.length + " 题";
  $("quizStars").textContent = "⭐".repeat(quizStars);
  $("quizPrompt").textContent = q.type === "listen" ? "听一听，选出中文意思" : "看中文，选出对应的英文";
  $("btnListen").style.display = q.type === "listen" ? "inline-flex" : "none";
  $("quizOptions").innerHTML = q.options.map((opt, i) => {
    const label = q.type === "listen" ? opt.zh : opt.en;
    return '<button class="qopt" data-i="' + i + '">' + esc(label) + "</button>";
  }).join("");
  $("quizOptions").querySelectorAll(".qopt").forEach((btn) => btn.addEventListener("click", () => answerQuiz(q.options[+btn.dataset.i], btn)));
}

function answerQuiz(opt, btn){
  if (quizLocked) return;
  const q = quizQuestions[quizIndex];
  const allBtns = document.querySelectorAll("#quizOptions .qopt");
  if (opt === q.correct){
    quizLocked = true;
    quizStars++;
    btn.classList.add("right");
    allBtns.forEach((b) => b.classList.add("disabled"));
    speak("Good job!", "en");
    $("quizStars").textContent = "⭐".repeat(quizStars);
    setTimeout(() => {
      quizIndex++;
      if (quizIndex < quizQuestions.length){
        renderQuiz();
        if (quizQuestions[quizIndex].type === "listen") speak(quizQuestions[quizIndex].correct.en, "en");
      } else {
        endQuiz();
      }
    }, 900);
  } else {
    btn.classList.add("wrong");
    setTimeout(() => btn.classList.remove("wrong"), 500);
  }
}

function endQuiz(){
  finishLesson();
  const id = currentLesson.id;
  const l = state.lessons[id] = state.lessons[id] || {};
  l.quizBest = Math.max(l.quizBest || 0, quizStars);
  saveState();
  const total = quizQuestions.length;
  $("quizDoneTitle").textContent = quizStars === total ? "全对！太棒了！" : quizStars >= 3 ? "很棒，继续加油！" : "再练习一下会更棒！";
  $("quizDoneScore").textContent = "答对 " + quizStars + " / " + total + " 题";
  $("quizDone").classList.add("show");
}

function renderSongs(){
  $("songList").innerHTML = SONGS.map((s) =>
    '<div class="song-card" data-id="' + s.id + '">' +
    '<div class="song-emoji">' + s.emoji + "</div>" +
    '<div class="song-meta"><div class="song-name">' + esc(s.title) + '</div><div class="song-sub">' + esc(s.sub) + "</div></div>" +
    '<button class="song-play" data-id="' + s.id + '" aria-label="一键播放">▶</button>' +
    '<div class="song-arrow">›</div></div>'
  ).join("");
  $("songList").querySelectorAll(".song-card").forEach((c) => c.addEventListener("click", () => openSong(+c.dataset.id)));
  $("songList").querySelectorAll(".song-play").forEach((b) => b.addEventListener("click", (e) => {
    e.stopPropagation();
    const id = +b.dataset.id;
    openSong(id);
    setTimeout(() => playAllSong(), 350);
  }));
}

let currentSong = null;
let melodyPlaying = false;
let songPlaying = false;

// ===== 一键播放：有旋律就「旋律伴奏 + 朗读歌词」一起播，没有旋律就直接朗读 =====
// ===== 儿歌：完整一首歌（童声演唱 + 贝斯 + 节拍）=====
// ===== 童声音色参数 =====
// 元音共振峰 F1/F2/F3：成人标准测量值 ×1.2（幼儿声道短，共振峰整体偏高）
const VOWELS = {
  a: [876, 1308, 2928],
  e: [636, 2208, 2976],
  i: [324, 2748, 3612],
  o: [684, 1008, 2892],
  u: [360, 1044, 2688]
};
// 卡通角色说话的音色预设：base=基频(Hz)，syl=每音节时长(秒)，tilt=语调起伏
const CARTOON_PRESETS = {
  tender: { base: 335, syl: 0.170, tilt: 0.18 },   // 稚嫩：音高偏高的小小孩
  soft:   { base: 298, syl: 0.215, tilt: 0.12 },   // 柔和：语速慢，安抚感
  lively: { base: 368, syl: 0.150, tilt: 0.32 }    // 活泼：语调起伏大
};
const FORMANT_GAIN = [1, 0.5, 0.22];   // 第一共振峰能量最强
// Q 值实测：Q=7/11/15 只保留 18~23% 能量（童声被伴奏盖过），
// 放宽到 4/6/8 可保留约 30%，音色也更饱满
const FORMANT_Q = [4, 6, 8];
// 音量同样按实测补偿：滤波吃掉约 70% 能量，故设定值需放大
const VOICE_VOL = 0.6;     // 主唱（共振峰+低通会吃掉部分能量，故设定值需放大）
const BASS_VOL  = 0.045;   // 贝斯让位给童声
const CLICK_VOL = 0.035;   // 节拍

let audioCtx = null;
let songTimers = [];   // 歌词高亮 / 收尾定时器
let lessonReadTimer = null;  // 全篇朗读推进
let songReadTimer = null;    // 儿歌逐句学词推进
let songMode = "";     // "song"=完整歌  "melody"=只听曲子  "read"=逐句学词

// 一键播放 = 一首完整的歌
function playAllSong(){
  if (!currentSong) return;
  if (songPlaying && songMode === "song"){ stopSongPlay(); return; }
  stopSongPlay();
  if (!currentSong.melody){ startReadLyrics(); return; }
  if (playSong(true)){
    songMode = "song";
    songPlaying = true;
    $("btnPlayAll").textContent = "⏹ 停止";
  }
}

// 「只听曲子」= 纯乐器版，没有童声
function playMelody(){
  if (songPlaying && songMode === "melody"){ stopSongPlay(); return; }
  stopSongPlay();
  if (!currentSong || !currentSong.melody) return;
  if (playSong(false)){
    songMode = "melody";
    songPlaying = true;
    $("btnPlayMelody").textContent = "⏹ 停止";
  }
}

// 排完整一首歌：主旋律（童声或乐器）+ 贝斯 + 节拍，并安排歌词逐句高亮
function playSong(withVoice){
  stopMelody();
  const phrases = MELODIES[currentSong.melody];
  if (!phrases || !phrases.length) return false;
  if (!("AudioContext" in window || "webkitAudioContext" in window)) return false;
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === "suspended") audioCtx.resume();
  melodyPlaying = true;

  const beat = 60 / 92;
  const base = audioCtx.currentTime;
  const start = base + 0.18;
  let t = start;

  const totalBeats = phrases.reduce((a, ph) => a + ph.reduce((x, n) => x + n[1], 0), 0);
  for (let b = 0; b < totalBeats; b++) playClick(start + b * beat, CLICK_VOL);

  phrases.forEach((phrase, pi) => {
    const phraseDur = phrase.reduce((a, n) => a + n[1], 0) * beat;
    const root = NOTE_FREQ[phrase[0][0]];
    if (root) playBass(root / 2, t, phraseDur * 0.95, BASS_VOL);
    songTimers.push(setTimeout(() => highlightLyric(pi), Math.max((t - base) * 1000, 0)));

    // 先算出本乐句每个音符的绝对时间
    const notes = [];
    let pt = t;
    phrase.forEach(([note, beats]) => {
      const dur = beats * beat;
      notes.push({ f: NOTE_FREQ[note], start: pt, dur: dur });
      pt += dur;
    });

    if (withVoice){
      // 童声按歌词的「辅音+元音」唱出旋律，配合贝斯与节拍，像真在唱英文歌
      const sylls = syllablesDetailed(currentSong.lyrics[pi].en);
      mapSyllablesToNotes(sylls, notes).forEach((s) => {
        if (s.f) singNote(s.f, s.start, s.dur * 0.92, VOICE_VOL, s.vowel, s.onset);
      });
    } else {
      notes.forEach((n) => { if (n.f) toneNote(n.f, n.start, n.dur * 0.9, 0.20); });
    }
    t = pt;
  });

  songTimers.push(setTimeout(() => stopSongPlay(), (t - base) * 1000 + 600));
  return true;
}

function highlightLyric(i){
  const els = $("songLyrics").querySelectorAll(".lyric");
  els.forEach((el, idx) => el.classList.toggle("speaking", idx === i));
}

// 唱歌用的元音共振峰（成人女声，频率按女性声道略高，音色更柔）
const SING_VOWELS = {
  a: [800, 1150, 2900],
  e: [550, 2000, 2550],
  i: [300, 2500, 3300],
  o: [450, 800, 2830],
  u: [325, 700, 2530]
};
const SING_FORMANT_Q = [5, 7, 9];        // 稍高 Q，元音更清晰
const SING_FORMANT_GAIN = [1, 0.6, 0.3];

// 唱歌：锯齿波经低通柔化 → 三段共振峰（元音决定音色）→ 颤音 + 包络；句首加轻辅音提升可懂度
function singNote(freq, t0, dur, vol, vowel, onset, vibDepth){
  if (!audioCtx || dur < 0.06) return;
  const F = SING_VOWELS[vowel] || SING_VOWELS.a;
  const osc = audioCtx.createOscillator();
  osc.type = "sawtooth";
  osc.frequency.value = freq;
  const lp = audioCtx.createBiquadFilter();
  lp.type = "lowpass"; lp.frequency.value = 3200;   // 柔化刺耳高频
  osc.connect(lp);

  const vib = audioCtx.createOscillator();
  vib.frequency.value = 5.5;
  const vibAmt = audioCtx.createGain();
  vibAmt.gain.value = freq * (vibDepth == null ? 0.01 : vibDepth);
  vib.connect(vibAmt); vibAmt.connect(osc.frequency);

  const mix = audioCtx.createGain();
  F.forEach((f, i) => {
    const bp = audioCtx.createBiquadFilter();
    bp.type = "bandpass";
    bp.frequency.value = f;
    bp.Q.value = SING_FORMANT_Q[i];
    const g = audioCtx.createGain();
    g.gain.value = SING_FORMANT_GAIN[i];
    lp.connect(bp); bp.connect(g); g.connect(mix);
  });

  const env = audioCtx.createGain();
  env.gain.setValueAtTime(0.0001, t0);
  env.gain.exponentialRampToValueAtTime(vol, t0 + 0.05);
  env.gain.setValueAtTime(vol, t0 + dur * 0.7);
  env.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  mix.connect(env); env.connect(audioCtx.destination);

  osc.start(t0); osc.stop(t0 + dur);
  vib.start(t0); vib.stop(t0 + dur);

  if (onset) playConsonant(onset, t0, Math.min(0.07, dur * 0.45));
}

// 轻辅音：短促滤波噪声，让"唱歌"能听出词的首音（b/p/t/d/k/s/m/n/l…）
function playConsonant(c, t0, dur){
  if (!audioCtx) return;
  const isFric = "sfxhz".indexOf(c) !== -1;
  const isNasal = "mn".indexOf(c) !== -1;
  const len = Math.max(1, Math.ceil(audioCtx.sampleRate * dur));
  const buf = audioCtx.createBuffer(1, len, audioCtx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
  const src = audioCtx.createBufferSource(); src.buffer = buf;
  const f = audioCtx.createBiquadFilter();
  if (isFric){ f.type = "highpass"; f.frequency.value = 3000; }
  else if (isNasal){ f.type = "bandpass"; f.frequency.value = 260; f.Q.value = 3; }
  else { f.type = "bandpass"; f.frequency.value = 1500; f.Q.value = 1.2; }
  const g = audioCtx.createGain();
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(0.12, t0 + 0.008);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  src.connect(f); f.connect(g); g.connect(audioCtx.destination);
  src.start(t0); src.stop(t0 + dur);
}

// 把一句歌词拆成音节（每个音节取核心元音），便于卡通合成（已停用）沿用
function syllablesOfLine(line){
  const words = line.toLowerCase().replace(/[^a-z\s']/g, " ").split(/\s+/).filter(Boolean);
  const out = [];
  words.forEach((w) => {
    const groups = w.match(/[aeiouy]+/g);
    if (!groups){ out.push("a"); return; }
    groups.forEach((g) => out.push(vowelOfGroup(g)));
  });
  return out;
}

// 拆成「首辅音 + 元音」结构，让唱歌能听出每个词的首音
function syllablesDetailed(line){
  const words = line.toLowerCase().replace(/[^a-z\s']/g, " ").split(/\s+/).filter(Boolean);
  const out = [];
  words.forEach((w) => {
    const parts = w.match(/([bcdfghjklmnpqrstvwxyz]*)([aeiouy]+)/g);
    if (!parts){ out.push({ onset: "", vowel: "a" }); return; }
    parts.forEach((m) => {
      const mm = m.match(/^([bcdfghjklmnpqrstvwxyz]*)([aeiouy]+)$/);
      if (!mm){ out.push({ onset: "", vowel: vowelOfGroup(m) }); return; }
      out.push({ onset: mm[1], vowel: vowelOfGroup(mm[2]) });
    });
  });
  return out;
}

// 元音字母组合 → 最接近的元音音素
function vowelOfGroup(g){
  if (g.indexOf("oo") >= 0 || g.indexOf("ou") >= 0) return "u";
  if (g.indexOf("oa") >= 0 || g.indexOf("ow") >= 0) return "o";
  if (g.indexOf("ee") >= 0 || g.indexOf("ie") >= 0 || g.indexOf("ea") >= 0) return "i";
  if (g.indexOf("ai") >= 0 || g.indexOf("ay") >= 0) return "a";
  if (g.indexOf("u") >= 0) return "u";
  if (g.indexOf("o") >= 0) return "o";
  if (g.indexOf("i") >= 0 || g.indexOf("y") >= 0) return "i";
  if (g.indexOf("e") >= 0) return "e";
  return "a";
}

// 把音节（{onset, vowel} 或纯元音串）分配到音符：少则拖长，多则挤进同音
function mapSyllablesToNotes(sylls, notes){
  if (!notes.length) return [];
  const norm = sylls.map((s) => (typeof s === "string" ? { onset: "", vowel: s } : s));
  if (!norm.length) return notes.map((n) => ({ f: n.f, start: n.start, dur: n.dur, vowel: "a", onset: "" }));
  const out = [];
  if (norm.length <= notes.length){
    const per = notes.length / norm.length;
    norm.forEach((s, i) => {
      const from = Math.floor(i * per);
      const to = Math.max(Math.floor((i + 1) * per), from + 1);
      const seg = notes.slice(from, Math.min(to, notes.length));
      if (!seg.length) return;
      out.push({ vowel: s.vowel, onset: s.onset, f: seg[0].f, start: seg[0].start, dur: seg.reduce((a, x) => a + x.dur, 0) });
    });
  } else {
    const per = norm.length / notes.length;
    notes.forEach((n, i) => {
      const from = Math.floor(i * per);
      const to = Math.max(Math.floor((i + 1) * per), from + 1);
      const group = norm.slice(from, Math.min(to, norm.length));
      if (!group.length) return;
      const d = n.dur / group.length;
      group.forEach((s, j) => out.push({ vowel: s.vowel, onset: s.onset, f: n.f, start: n.start + j * d, dur: d }));
    });
  }
  return out;
}

// 纯乐器音色
function toneNote(freq, t0, dur, vol){
  if (!audioCtx || dur < 0.06) return;
  const osc = audioCtx.createOscillator();
  osc.type = "triangle";
  osc.frequency.value = freq;
  const g = audioCtx.createGain();
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(vol, t0 + 0.03);
  g.gain.setValueAtTime(vol, t0 + dur * 0.7);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  osc.connect(g); g.connect(audioCtx.destination);
  osc.start(t0); osc.stop(t0 + dur);
}

// 贝斯：乐句首音降八度，柔和垫底
function playBass(freq, t0, dur, vol){
  if (!audioCtx || dur < 0.1) return;
  const osc = audioCtx.createOscillator();
  osc.type = "triangle";
  osc.frequency.value = freq;
  const g = audioCtx.createGain();
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(vol, t0 + 0.09);
  g.gain.setValueAtTime(vol, t0 + dur * 0.75);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  osc.connect(g); g.connect(audioCtx.destination);
  osc.start(t0); osc.stop(t0 + dur);
}

// 节拍：短促柔和的木质感
function playClick(t0, vol){
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  osc.type = "sine";
  osc.frequency.setValueAtTime(190, t0);
  osc.frequency.exponentialRampToValueAtTime(85, t0 + 0.05);
  const g = audioCtx.createGain();
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(vol, t0 + 0.008);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.09);
  osc.connect(g); g.connect(audioCtx.destination);
  osc.start(t0); osc.stop(t0 + 0.1);
}

// 逐句学词：用语音念歌词，让孩子听懂意思
function startReadLyrics(){
  if (songPlaying && songMode === "read"){ stopSongPlay(); return; }
  stopSongPlay();
  songMode = "read";
  songPlaying = true;
  $("btnReadSong").textContent = "⏹ 停止";
  speakLyricLine(0);
}

function speakLyricLine(i){
  if (!songPlaying || songMode !== "read" || !currentSong) return;
  const lines = currentSong.lyrics;
  if (i >= lines.length){ stopSongPlay(); return; }
  highlightLyric(i);
  songReadTimer = speakLineAndAdvance(lines[i].en, "en", () => speakLyricLine(i + 1));
}

function stopSongPlay(){
  songPlaying = false;
  if (songReadTimer){ clearTimeout(songReadTimer); songReadTimer = null; }
  stopMelody();
  try { window.speechSynthesis.cancel(); } catch (e) {}
  $("btnPlayAll").textContent = "▶ 完整播放";
  $("btnPlayMelody").textContent = "🎵 只听曲子";
  $("btnReadSong").textContent = "🔊 逐句学词";
  $("songLyrics").querySelectorAll(".lyric").forEach((el) => el.classList.remove("speaking"));
  songMode = "";
}

function stopMelody(){
  songTimers.forEach(clearTimeout);
  songTimers = [];
  if (audioCtx){ try { audioCtx.close(); } catch (e) {} audioCtx = null; }
  melodyPlaying = false;
}

function openSong(id){
  currentSong = SONGS.find((s) => s.id === id);
  if (!currentSong) return;
  stopSongPlay();
  $("songEmoji").textContent = currentSong.emoji;
  $("songTitle").textContent = currentSong.title;
  $("songSub").textContent = currentSong.sub;
  $("songLyrics").innerHTML = currentSong.lyrics.map((l) => '<div class="lyric">' + esc(l.en) + '<span class="lyric-zh">' + esc(l.zh) + "</span></div>").join("");
  const hasMelody = !!currentSong.melody;
  $("btnPlayMelody").style.display = "none";   // 与「完整播放」重复，暂时隐藏
  $("songNote").textContent = hasMelody
    ? "完整播放：把这首完整演奏一遍（旋律+贝斯+节拍），歌词跟着亮。想听词怎么念，点「逐句学词」。"
    : "这首暂无曲调，用「逐句学词」听发音。";
  openPage("song");
}

// ===== 欢迎提示音（Web Audio 合成，无需任何音频文件）=====
let _actx = null;
function getCtx(){
  if (!_actx){
    const AC = window.AudioContext || window.webkitAudioContext;
    if (AC) _actx = new AC();
  }
  return _actx;
}
function _beep(freq, start, dur, type, vol){
  const ctx = getCtx(); if (!ctx) return;
  const t0 = ctx.currentTime + start;
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = type || "triangle";
  osc.frequency.value = freq;
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(vol || 0.2, t0 + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  osc.connect(g); g.connect(ctx.destination);
  osc.start(t0); osc.stop(t0 + dur + 0.02);
}
function playChickSound(){
  const ctx = getCtx(); if (!ctx) return;
  if (ctx.state === "suspended") ctx.resume();
  // "叽—— 叽——" 两声上扬的小鸡叫（频率扫升合成）+ 尾音小铃
  _chirp(0.00);
  _chirp(0.18);
  _beep(1046.5, 0.38, 0.30, "triangle", 0.16);
}
function _chirp(start){
  const ctx = getCtx(); if (!ctx) return;
  const t0 = ctx.currentTime + start;
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(1800, t0);
  osc.frequency.exponentialRampToValueAtTime(3400, t0 + 0.10);
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(0.25, t0 + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.13);
  osc.connect(g); g.connect(ctx.destination);
  osc.start(t0); osc.stop(t0 + 0.15);
}
function initSplash(){
  const splash = document.getElementById("splash");
  if (!splash) return;
  let played = false;
  const playOnce = () => { if (played) return; played = true; try { playChickSound(); } catch (e) {} };
  const unlock = () => {
    playOnce();
    document.removeEventListener("pointerdown", unlock);
    document.removeEventListener("keydown", unlock);
    document.removeEventListener("touchstart", unlock);
  };
  document.addEventListener("pointerdown", unlock);
  document.addEventListener("keydown", unlock);
  document.addEventListener("touchstart", unlock);
  setTimeout(playOnce, 450); // 多数浏览器会拦截自动播放，靠上面首次手势兜底
  const hide = () => { splash.classList.add("hide"); setTimeout(() => { splash.style.display = "none"; }, 500); };
  splash.addEventListener("click", () => { playOnce(); hide(); });
  setTimeout(hide, 3200);
}

function readSongLyrics(){
  if (!currentSong) return;
  const text = currentSong.lyrics.map((l) => l.en).join(" ");
  speak(text, "en");
}

let chatLang = "en";
let listeningTarget = null;
const SR = window.SpeechRecognition || window.webkitSpeechRecognition || null;
let recognition = null;

function setChatLang(lang){
  chatLang = lang;
  $("langEn").classList.toggle("active", lang === "en");
  $("langZh").classList.toggle("active", lang === "zh");
  $("chatInput").placeholder = lang === "zh" ? "打字或按话筒说话…（中文）" : "打字或按话筒说话…（英文）";
}

function startListening(target){
  if (!SR){
    setBearStatus("这个浏览器不支持语音，请用 Chrome / Safari，并通过 localhost 或 HTTPS 打开；也可以直接打字。");
    return;
  }
  if (recognition){
    const old = recognition;
    recognition = null;
    old.onend = old.onresult = old.onerror = null;
    try { old.stop(); } catch (e) {}
  }
  listeningTarget = target;
  const rec = new SR();
  recognition = rec;
  rec.continuous = false;
  rec.interimResults = false;
  rec.lang = (target === "coach" || chatLang === "en") ? "en-US" : "zh-CN";
  rec.onresult = (e) => {
    const text = e.results[0][0].transcript;
    const t = listeningTarget;
    stopListeningUI();
    if (t === "coach") evaluateSpeech(text);
    else sendMessage(text, true);
  };
  rec.onerror = () => {
    const t = listeningTarget;
    stopListeningUI();
    if (t === "coach") coachResultHTML(warnCard("没听清，请再慢一点、大声一点说一遍。", ""));
    else setBearStatus("没听清，请再说一次 😊");
  };
  rec.onend = () => { if (recognition === rec) stopListeningUI(); };
  try {
    rec.start();
    if (target === "chat") $("btnMic").classList.add("listening");
    setBearStatus(target === "coach" ? "我在听，请说上方句子…" : "我在听，请说…");
  } catch (e) {
    stopListeningUI();
    setBearStatus("麦克风没打开，请在浏览器里允许麦克风权限。");
  }
}

function stopListeningUI(){
  $("btnMic").classList.remove("listening");
  const wasChat = listeningTarget === "chat";
  listeningTarget = null;
  if (recognition){
    const r = recognition;
    recognition = null;
    r.onend = r.onresult = r.onerror = null;
    try { r.stop(); } catch (e) {}
  }
  if (wasChat) setBearStatus("你好，我是小鸡叽叽 👋");
}

function setBearStatus(text){
  const el = $("bearStatus");
  if (el) el.textContent = text;
}

function sendMessage(text, spoken){
  text = String(text).trim();
  if (!text) return;
  addBubble("user", text, "");
  $("chatInput").value = "";
  const reply = matchIntent(text);
  const correction = (chatLang === "en" || spoken) ? correctGrammar(text) : null;
  if (correction && correction !== text){
    addBubble("correct", "这样说更好：" + correction, "语法小提示：可以这样说哦");
  }
  addBubble("bear", reply.en, reply.zh);
  speakBilingual(reply.en, reply.zh);
  $("chatMessages").scrollTop = $("chatMessages").scrollHeight;
}

function matchIntent(text){
  const t = normalize(text);
  for (const intent of INTENTS){
    if (intent.re.test(t)) return { en: intent.en, zh: intent.zh };
  }
  return { en: "I'm still learning. Could you say it in simple English or Chinese?", zh: "我还在学习，能用简单的英语或中文再说一次吗？" };
}

function addBubble(type, en, zh){
  const el = document.createElement("div");
  el.className = "bubble " + type;
  el.innerHTML = esc(en) + (zh ? '<span class="bubble-zh">' + esc(zh) + "</span>" : "");
  $("chatMessages").appendChild(el);
}

const COACH_POOL = LESSONS.reduce((acc, l) => acc.concat(l.phrases), []);
let coachIndex = 0;
let coachReturn = "chat";

function pickCoachPhrase(){
  coachIndex = Math.floor(Math.random() * COACH_POOL.length);
  renderCoach();
}

function renderCoach(){
  const p = COACH_POOL[coachIndex];
  $("coachEn").textContent = p.en;
  $("coachZh").textContent = p.zh;
  $("coachResult").innerHTML = "";
  $("btnCoachListen").textContent = "🎙️ 我来说一遍";
}

function evaluateSpeech(heard){
  const target = COACH_POOL[coachIndex].en;
  const h = normalize(heard);
  const t = normalize(target);
  const hw = tokenize(h);
  const tw = tokenize(t);
  if (!hw.length){
    coachResultHTML(warnCard("没听清，请再慢一点、大声一点说一遍。", ""));
    return;
  }
  if (h === t){
    coachResultHTML(goodCard("发音很棒！👏", "你刚才说：「" + esc(heard) + "」，和标准句完全一致。"));
    return;
  }
  const extra = hw.filter((w) => !tw.includes(w));
  const missed = tw.filter((w) => !hw.includes(w));
  const heardHtml = hw.map((w) => extra.includes(w) ? '<span class="diff-word">' + esc(w) + "</span>" : esc(w)).join(" ");
  let body = "你刚才说：" + heardHtml + "<br>标准句：" + esc(target);
  if (missed.length) body += "<br>重点词：" + missed.map((w) => '<span class="diff-word">' + esc(w) + "</span>").join("、");
  body += "<br>点「听标准发音」再试一次。";
  coachResultHTML(warnCard("很接近啦，再练一下", body));
}

function goodCard(title, body){
  return '<div class="result-card good"><div class="result-label">很好</div><b>' + esc(title) + "</b><br>" + body + "</div>";
}

function warnCard(title, body){
  return '<div class="result-card warn"><div class="result-label">再练练</div><b>' + esc(title) + "</b><br>" + body + "</div>";
}

function coachResultHTML(html){
  $("coachResult").innerHTML = html;
}

function renderProfile(){
  const ids = Object.keys(state.lessons);
  const doneCount = ids.filter((id) => state.lessons[id].done).length;
  const starTotal = ids.reduce((sum, id) => sum + starCount(state.lessons[id].quizBest), 0);
  const phraseTotal = ids.reduce((sum, id) => sum + (state.lessons[id].done ? (LESSONS.find((l) => l.id === +id) || { phrases: [] }).phrases.length : 0), 0);
  $("statLessons").textContent = doneCount + "/" + LESSONS.length;
  $("statStars").textContent = starTotal;
  $("statPhrases").textContent = phraseTotal;
  $("stickerWall").innerHTML = LESSONS.map((l) => {
    const got = state.stickers.indexOf(l.id) !== -1;
    return '<div class="sticker' + (got ? "" : " off") + '">' + (got ? l.emoji : "🔒") + "</div>";
  }).join("");
  $("rateSlow").classList.toggle("active", state.settings.rate === "slow");
  $("rateNormal").classList.toggle("active", state.settings.rate === "normal");
  const style = state.settings.voiceStyle || "std";
  // 只保留温柔成人女声，童声/卡通入口隐藏
  const kidBtn = $("styleKid"); if (kidBtn) kidBtn.style.display = "none";
  const cartoonBtn = $("styleCartoon"); if (cartoonBtn) cartoonBtn.style.display = "none";
  $("styleStd").classList.toggle("active", style === "std");
  $("rowCartoonPreset").style.display = "none";
  $("cartoonHint").style.display = "none";
  $("about").textContent = "语芽 · 亲子英语启蒙\n" + LESSONS.length + " 个场景 · " + LESSONS.reduce((n, l) => n + l.phrases.length, 0) + " 个亲子句子 · " + SONGS.length + " 首经典童谣\n数据只保存在本机浏览器，不会上传";
  refreshVoices();
  updateInstallButton();
}

let deferredPrompt = null;

function updateInstallButton(){
  const btn = $("btnInstall");
  const hint = $("installHint");
  if (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches){
    btn.textContent = "已安装到桌面 ✅";
    btn.disabled = true;
    hint.textContent = "应用已作为独立窗口运行。";
  } else if (deferredPrompt){
    btn.textContent = "安装到手机桌面";
    hint.textContent = "点击后按系统提示确认即可。";
  } else {
    btn.textContent = "安装 PWA（需 localhost 或 HTTPS）";
    hint.textContent = "通过浏览器访问后会出现安装入口；iPhone 请用 Safari 的「添加到主屏幕」。";
  }
}

function wireEvents(){
  document.querySelectorAll(".tab").forEach((t) => t.addEventListener("click", () => showScreen(t.dataset.screen)));

  $("btnQuickCoach").addEventListener("click", () => { coachReturn = "home"; pickCoachPhrase(); openPage("coach"); });
  $("btnQuickSongs").addEventListener("click", () => showScreen("songs"));

  $("btnBackLesson").addEventListener("click", () => { stopLessonReading(); closePage("lesson"); });
  $("btnReadAll").addEventListener("click", readAllLesson);
  $("btnStartPractice").addEventListener("click", () => { stopLessonReading(); startPractice(); });
  $("btnGoQuiz2").addEventListener("click", startQuiz);

  $("btnBackPractice").addEventListener("click", () => { $("practiceDone").classList.remove("show"); closePage("practice"); });
  $("btnPlayPhrase").addEventListener("click", () => speak(currentLesson.phrases[practiceIndex].en, "en"));
  $("btnReplay").addEventListener("click", () => speak(currentLesson.phrases[practiceIndex].en, "en"));
  $("btnNext").addEventListener("click", practiceNext);
  $("btnGoQuiz").addEventListener("click", () => { $("practiceDone").classList.remove("show"); startQuiz(); });
  $("btnDoneHome").addEventListener("click", () => { $("practiceDone").classList.remove("show"); closePage("practice"); closePage("lesson"); showScreen("home"); });

  $("btnBackQuiz").addEventListener("click", () => closePage("quiz"));
  $("btnListen").addEventListener("click", () => speak(quizQuestions[quizIndex].correct.en, "en"));
  $("btnQuizAgain").addEventListener("click", () => { $("quizDone").classList.remove("show"); startQuiz(); });
  $("btnQuizHome").addEventListener("click", () => { $("quizDone").classList.remove("show"); closePage("quiz"); closePage("lesson"); showScreen("home"); });

  $("btnBackSong").addEventListener("click", () => { stopSongPlay(); closePage("song"); });
  $("btnPlayAll").addEventListener("click", playAllSong);
  $("btnPlayMelody").addEventListener("click", playMelody);
  $("btnReadSong").addEventListener("click", startReadLyrics);

  $("langEn").addEventListener("click", () => setChatLang("en"));
  $("langZh").addEventListener("click", () => setChatLang("zh"));
  $("btnSend").addEventListener("click", () => sendMessage($("chatInput").value, false));
  $("chatInput").addEventListener("keydown", (e) => { if (e.key === "Enter") sendMessage($("chatInput").value, false); });
  $("btnMic").addEventListener("click", () => { listeningTarget === "chat" ? stopListeningUI() : startListening("chat"); });
  $("btnOpenCoach").addEventListener("click", () => { coachReturn = "chat"; pickCoachPhrase(); openPage("coach"); });

  $("btnBackCoach").addEventListener("click", () => { closePage("coach"); showScreen(coachReturn); });
  $("btnCoachListen").addEventListener("click", () => { listeningTarget === "coach" ? stopListeningUI() : startListening("coach"); });
  $("btnCoachSpeak").addEventListener("click", () => speak(COACH_POOL[coachIndex].en, "en"));
  $("btnCoachNext").addEventListener("click", pickCoachPhrase);

  $("rateSlow").addEventListener("click", () => { state.settings.rate = "slow"; saveState(); renderProfile(); });
  $("rateNormal").addEventListener("click", () => { state.settings.rate = "normal"; saveState(); renderProfile(); });
  $("styleCartoon").addEventListener("click", () => { state.settings.voiceStyle = "cartoon"; saveState(); renderProfile(); speak("Hello!", "en"); });
  $("styleKid").addEventListener("click", () => { state.settings.voiceStyle = "kid"; saveState(); renderProfile(); speak("Hello!", "en"); });
  $("styleStd").addEventListener("click", () => { state.settings.voiceStyle = "std"; saveState(); renderProfile(); speak("Hello!", "en"); });
  ["tender", "soft", "lively"].forEach((k) => {
    const el = $("cp" + k.charAt(0).toUpperCase() + k.slice(1));
    if (el) el.addEventListener("click", () => { state.settings.cartoonPreset = k; saveState(); renderProfile(); speak("Hello!", "en"); });
  });
  $("voiceSelect").addEventListener("change", (e) => { state.settings.voiceURI = e.target.value; saveState(); });
  $("voiceSelectZh").addEventListener("change", (e) => { state.settings.voiceURIzh = e.target.value; saveState(); });
  $("btnInstall").addEventListener("click", async () => {
    if (deferredPrompt){
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
      updateInstallButton();
    } else {
      updateInstallButton();
    }
  });
  $("btnReset").addEventListener("click", () => {
    if (confirm("确定要清空所有学习记录吗？")){
      state = defaultState();
      saveState();
      renderHome();
      renderProfile();
    }
  });
}

function registerSW(){
  if (!("serviceWorker" in navigator)) return;
  const secure = location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1";
  if (!secure) return;
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

function init(){
  if ("speechSynthesis" in window){
    window.speechSynthesis.onvoiceschanged = refreshVoices;
    document.addEventListener("pointerdown", function once(){
      refreshVoices();
      document.removeEventListener("pointerdown", once);
    });
  }
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if ($("screen-profile").classList.contains("active")) updateInstallButton();
  });
  window.addEventListener("appinstalled", () => {
    deferredPrompt = null;
    updateInstallButton();
  });
  // 切后台 / 锁屏 / 来电话：停掉所有声音（iOS 锁屏下 visibilitychange 不一定触发，故补 pagehide）
  document.addEventListener("visibilitychange", () => { if (document.hidden) stopAllAudio(); });
  window.addEventListener("pagehide", () => stopAllAudio());
  refreshVoices();
  renderHome();
  renderSongs();
  renderProfile();
  setChatLang("en");
  addBubble("bear", "Hi! I'm Jiji the chick. Tap the mic and talk to me in English or Chinese!", "你好，我是小鸡叽叽。点话筒，用英语或中文和我说话吧！");
  registerSW();
  initSplash();
}

wireEvents();
init();
