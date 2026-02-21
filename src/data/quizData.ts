// Scoring dimensions: E(energy), S(social), A(affection), C(curiosity)
// Each answer adds to specific dimensions

export interface QuizOption {
  text: string;
  scores: { E?: number; S?: number; A?: number; C?: number };
}

export interface QuizQuestion {
  id: number;
  question: string;
  emoji: string;
  options: QuizOption[];
}

export const questions: QuizQuestion[] = [
  {
    id: 1, question: "周末早晨你会？", emoji: "🌅",
    options: [
      { text: "赖在被窝里不想动", scores: { E: -2, A: 1 } },
      { text: "早起去探索新地方", scores: { E: 2, C: 2 } },
      { text: "约朋友出去玩", scores: { E: 1, S: 2 } },
      { text: "窝在沙发上看书/追剧", scores: { E: -1, C: 1 } },
    ],
  },
  {
    id: 2, question: "在朋友聚会上你通常？", emoji: "🎉",
    options: [
      { text: "是全场的焦点！", scores: { S: 2, E: 2 } },
      { text: "跟一两个人深聊", scores: { S: 0, A: 1 } },
      { text: "安静地观察大家", scores: { S: -2, C: 1 } },
      { text: "找个角落和猫玩", scores: { S: -1, A: 2 } },
    ],
  },
  {
    id: 3, question: "你喜欢的表达爱的方式？", emoji: "💕",
    options: [
      { text: "疯狂拥抱贴贴！", scores: { A: 2, S: 1 } },
      { text: "默默陪在身边", scores: { A: 1, E: -1 } },
      { text: "送小礼物/写信", scores: { A: 1, C: 1 } },
      { text: "偶尔关心就好", scores: { A: -2 } },
    ],
  },
  {
    id: 4, question: "遇到新事物你会？", emoji: "✨",
    options: [
      { text: "立刻冲上去研究！", scores: { C: 2, E: 2 } },
      { text: "远远观察一下", scores: { C: 1, E: -1 } },
      { text: "等别人试了再说", scores: { C: -1, S: 1 } },
      { text: "完全不感兴趣", scores: { C: -2, E: -1 } },
    ],
  },
  {
    id: 5, question: "你的理想居住环境？", emoji: "🏠",
    options: [
      { text: "热闹的市中心", scores: { E: 2, S: 2 } },
      { text: "温馨的小公寓", scores: { A: 1, E: -1 } },
      { text: "安静的郊外别墅", scores: { S: -2, C: 1 } },
      { text: "能到处旅行就好", scores: { C: 2, E: 1 } },
    ],
  },
  {
    id: 6, question: "你如何处理压力？", emoji: "😤",
    options: [
      { text: "运动发泄！跑步打球", scores: { E: 2, S: 0 } },
      { text: "找朋友倾诉", scores: { S: 2, A: 1 } },
      { text: "一个人安静待着", scores: { S: -2, E: -1 } },
      { text: "研究解决方案", scores: { C: 2, E: 0 } },
    ],
  },
  {
    id: 7, question: "你最喜欢的天气？", emoji: "☀️",
    options: [
      { text: "阳光明媚的晴天", scores: { E: 2, C: 0 } },
      { text: "下雨天窝在家", scores: { E: -2, A: 1 } },
      { text: "微风拂面的春天", scores: { A: 1, C: 1 } },
      { text: "下雪天！可以玩雪", scores: { E: 1, C: 2 } },
    ],
  },
  {
    id: 8, question: "朋友形容你最可能用？", emoji: "🗣️",
    options: [
      { text: "开心果/气氛组", scores: { S: 2, E: 2 } },
      { text: "暖心/贴心", scores: { A: 2, S: 1 } },
      { text: "酷/有个性", scores: { A: -1, S: -1 } },
      { text: "聪明/有想法", scores: { C: 2, S: 0 } },
    ],
  },
  {
    id: 9, question: "你更喜欢哪种运动？", emoji: "🏃",
    options: [
      { text: "团队运动（篮球/足球）", scores: { S: 2, E: 2 } },
      { text: "瑜伽/冥想", scores: { E: -1, A: 1 } },
      { text: "独自跑步/游泳", scores: { E: 1, S: -2 } },
      { text: "我不爱运动...", scores: { E: -2, C: 0 } },
    ],
  },
  {
    id: 10, question: "睡觉时你喜欢？", emoji: "😴",
    options: [
      { text: "抱着人/东西睡", scores: { A: 2, S: 1 } },
      { text: "占满整张床", scores: { E: 1, A: -1 } },
      { text: "缩成一团", scores: { A: 1, E: -1 } },
      { text: "怎么舒服怎么来", scores: { C: 0, E: 0 } },
    ],
  },
  {
    id: 11, question: "看到可爱的东西你会？", emoji: "🥰",
    options: [
      { text: "尖叫冲过去！", scores: { E: 2, A: 2 } },
      { text: "默默拍照收藏", scores: { C: 1, A: 1 } },
      { text: "分享给朋友看", scores: { S: 2, A: 1 } },
      { text: "嗯，还行吧", scores: { A: -1, E: -1 } },
    ],
  },
  {
    id: 12, question: "你的社交媒体风格？", emoji: "📱",
    options: [
      { text: "天天发动态！", scores: { S: 2, E: 2 } },
      { text: "偶尔分享生活", scores: { S: 0, C: 1 } },
      { text: "只看不发", scores: { S: -2, C: 1 } },
      { text: "在评论区活跃", scores: { S: 1, A: 1 } },
    ],
  },
  {
    id: 13, question: "如果你是一种饮料？", emoji: "🧋",
    options: [
      { text: "能量饮料！", scores: { E: 2, C: 1 } },
      { text: "温暖的奶茶", scores: { A: 2, E: -1 } },
      { text: "冰美式咖啡", scores: { E: 1, A: -1 } },
      { text: "气泡水", scores: { C: 1, S: 1 } },
    ],
  },
  {
    id: 14, question: "你怎么对待新认识的人？", emoji: "👋",
    options: [
      { text: "自来熟！秒变朋友", scores: { S: 2, E: 2 } },
      { text: "慢热但真诚", scores: { S: 0, A: 1 } },
      { text: "保持礼貌距离", scores: { S: -1, A: -1 } },
      { text: "观察再决定", scores: { C: 2, S: -1 } },
    ],
  },
  {
    id: 15, question: "你的衣柜里最多的颜色？", emoji: "👕",
    options: [
      { text: "各种鲜艳的颜色", scores: { E: 2, S: 1 } },
      { text: "温柔的粉色/米色", scores: { A: 2, E: -1 } },
      { text: "黑白灰为主", scores: { A: -1, S: -1 } },
      { text: "什么都有！", scores: { C: 2, E: 1 } },
    ],
  },
  {
    id: 16, question: "你最享受的独处方式？", emoji: "🧘",
    options: [
      { text: "我不喜欢独处！", scores: { S: 2, A: 2 } },
      { text: "听音乐发呆", scores: { E: -1, A: 1 } },
      { text: "学习新技能", scores: { C: 2, E: 1 } },
      { text: "整理收纳房间", scores: { C: 1, E: 0 } },
    ],
  },
  {
    id: 17, question: "你对待食物的态度？", emoji: "🍰",
    options: [
      { text: "什么都想尝！", scores: { C: 2, E: 1 } },
      { text: "最爱舒适食物", scores: { A: 1, E: -1 } },
      { text: "和朋友一起吃最香", scores: { S: 2, A: 1 } },
      { text: "吃饱就好", scores: { E: -1, C: -1 } },
    ],
  },
  {
    id: 18, question: "你喜欢的旅行方式？", emoji: "✈️",
    options: [
      { text: "探险！去没人去过的地方", scores: { C: 2, E: 2 } },
      { text: "度假村躺平", scores: { E: -2, A: 1 } },
      { text: "和一大群朋友自驾", scores: { S: 2, E: 1 } },
      { text: "一个人背包旅行", scores: { S: -2, C: 1 } },
    ],
  },
  {
    id: 19, question: "深夜的你在做什么？", emoji: "🌙",
    options: [
      { text: "和朋友聊天/打游戏", scores: { S: 2, E: 1 } },
      { text: "刷手机到天亮", scores: { C: 1, E: -1 } },
      { text: "早就睡了！", scores: { E: 1, A: 0 } },
      { text: "思考人生...", scores: { C: 1, A: 1 } },
    ],
  },
  {
    id: 20, question: "你对惊喜的反应？", emoji: "🎁",
    options: [
      { text: "超级兴奋尖叫！", scores: { E: 2, A: 2 } },
      { text: "感动到想哭", scores: { A: 2, S: 1 } },
      { text: "开心但表面淡定", scores: { A: -1, E: 0 } },
      { text: "有点不知所措", scores: { S: -1, C: 1 } },
    ],
  },
  {
    id: 21, question: "选一个超能力？", emoji: "⚡",
    options: [
      { text: "瞬间移动", scores: { E: 2, C: 2 } },
      { text: "读心术", scores: { S: 1, A: 2 } },
      { text: "隐身", scores: { S: -2, C: 1 } },
      { text: "时间暂停", scores: { E: -1, C: 2 } },
    ],
  },
  {
    id: 22, question: "你养宠物最看重？", emoji: "🐾",
    options: [
      { text: "黏人！要天天贴贴", scores: { A: 2, S: 1 } },
      { text: "聪明有灵性", scores: { C: 2, A: 0 } },
      { text: "活泼好动", scores: { E: 2, S: 1 } },
      { text: "安静乖巧", scores: { E: -2, A: 1 } },
    ],
  },
  {
    id: 23, question: "你的工作/学习节奏？", emoji: "📚",
    options: [
      { text: "说做就做！冲冲冲", scores: { E: 2, C: 1 } },
      { text: "慢慢来比较快", scores: { E: -1, A: 0 } },
      { text: "和同伴一起效率高", scores: { S: 2, E: 1 } },
      { text: "灵感来了通宵干", scores: { C: 2, E: 1 } },
    ],
  },
  {
    id: 24, question: "被误解时你会？", emoji: "😢",
    options: [
      { text: "大声解释清楚！", scores: { E: 2, S: 1 } },
      { text: "委屈巴巴找人倾诉", scores: { A: 2, S: 1 } },
      { text: "算了不解释", scores: { S: -2, A: -1 } },
      { text: "写长文分析原因", scores: { C: 2, S: 0 } },
    ],
  },
  {
    id: 25, question: "你最想住在哪个童话里？", emoji: "🏰",
    options: [
      { text: "爱丽丝梦游仙境", scores: { C: 2, E: 2 } },
      { text: "龙猫的森林", scores: { A: 2, E: -1 } },
      { text: "哈利波特魔法世界", scores: { C: 1, S: 2 } },
      { text: "睡美人的城堡", scores: { E: -2, A: 1 } },
    ],
  },
  {
    id: 26, question: "你收到消息的回复速度？", emoji: "💬",
    options: [
      { text: "秒回！", scores: { S: 2, A: 2 } },
      { text: "看心情...", scores: { A: -1, S: -1 } },
      { text: "打好长文再发", scores: { C: 1, A: 1 } },
      { text: "经常忘记回...", scores: { S: -2, E: 0 } },
    ],
  },
  {
    id: 27, question: "你的房间状态？", emoji: "🛏️",
    options: [
      { text: "乱中有序是我的风格", scores: { C: 1, E: 1 } },
      { text: "温馨整洁", scores: { A: 1, E: 0 } },
      { text: "堆满各种收藏品", scores: { C: 2, A: 1 } },
      { text: "极简风", scores: { E: 0, A: -1 } },
    ],
  },
  {
    id: 28, question: "你更喜欢哪种音乐？", emoji: "🎵",
    options: [
      { text: "欢快的流行乐", scores: { E: 2, S: 1 } },
      { text: "舒缓的轻音乐", scores: { E: -2, A: 1 } },
      { text: "什么小众听什么", scores: { C: 2, S: -1 } },
      { text: "跟着排行榜走", scores: { S: 1, C: -1 } },
    ],
  },
  {
    id: 29, question: "如果明天不用上班/上学？", emoji: "🎊",
    options: [
      { text: "叫上朋友嗨一天！", scores: { S: 2, E: 2 } },
      { text: "终于可以好好睡觉", scores: { E: -2, A: 1 } },
      { text: "去做一直想做的事", scores: { C: 2, E: 1 } },
      { text: "在家享受宅生活", scores: { A: 1, S: -1 } },
    ],
  },
  {
    id: 30, question: "最后一题！你觉得自己像猫吗？", emoji: "🐱",
    options: [
      { text: "超像！我就是猫！", scores: { A: 1, C: 1 } },
      { text: "有点像，独立又粘人", scores: { A: 1, S: 0 } },
      { text: "我更像狗狗吧", scores: { S: 2, E: 2 } },
      { text: "我是独一无二的！", scores: { C: 2, A: -1 } },
    ],
  },
];

export interface CatResult {
  id: string;
  name: string;
  emoji: string;
  color: string; // tailwind token
  subtitle: string;
  description: string;
  traits: string[];
  compatibility: string;
  percentage: string;
}

export const catResults: CatResult[] = [
  {
    id: "orange",
    name: "活力橘猫",
    emoji: "🧡",
    color: "kawaii-peach",
    subtitle: "社交达人・快乐源泉",
    description: "你就像一只充满活力的橘猫，热情开朗、精力无限！你是朋友圈里的开心果，走到哪里都能带来欢笑。你热爱社交，好奇心旺盛，总是第一个尝试新事物的人。",
    traits: ["热情开朗", "精力充沛", "社交达人", "好奇宝宝"],
    compatibility: "温柔布偶",
    percentage: "12%",
  },
  {
    id: "ragdoll",
    name: "温柔布偶",
    emoji: "🤍",
    color: "kawaii-lavender",
    subtitle: "温暖治愈・小天使",
    description: "你就像一只温柔的布偶猫，柔软、亲人、让人忍不住想抱抱！你是大家的暖心小天使，善于倾听和理解别人，总是给予最温暖的陪伴。",
    traits: ["温柔体贴", "善解人意", "黏人可爱", "治愈系"],
    compatibility: "活力橘猫",
    percentage: "15%",
  },
  {
    id: "british",
    name: "高冷英短",
    emoji: "🩶",
    color: "kawaii-sky",
    subtitle: "优雅独立・神秘魅力",
    description: "你就像一只高贵的英短，优雅淡定、不轻易表露情感。你有自己的节奏和世界，表面高冷内心柔软。不需要太多社交，独处时最自在。",
    traits: ["独立自主", "外冷内热", "品味独特", "淡定从容"],
    compatibility: "好奇缅因",
    percentage: "10%",
  },
  {
    id: "siamese",
    name: "社交暹罗",
    emoji: "💙",
    color: "kawaii-sky",
    subtitle: "话唠担当・忠诚伴侣",
    description: "你就像一只爱说话的暹罗猫，热情、忠诚、超级粘人！你喜欢和人分享一切，表达力超强，是朋友圈里最会聊天的人。一旦认定就全力以赴！",
    traits: ["热情忠诚", "表达力强", "超级粘人", "感情丰富"],
    compatibility: "慵懒加菲",
    percentage: "13%",
  },
  {
    id: "maine",
    name: "好奇缅因",
    emoji: "💚",
    color: "kawaii-mint",
    subtitle: "探索家・独行侠",
    description: "你就像一只聪明的缅因猫，体型虽大但内心温柔，充满探索欲！你独立思考，喜欢按自己的方式探索世界，虽然不太爱社交但很有深度。",
    traits: ["聪明好奇", "独立思考", "勇于探索", "内心温柔"],
    compatibility: "高冷英短",
    percentage: "11%",
  },
  {
    id: "exotic",
    name: "慵懒加菲",
    emoji: "🧡",
    color: "kawaii-peach",
    subtitle: "佛系躺平・可爱本体",
    description: "你就像一只圆滚滚的加菲猫，慵懒可爱、享受生活！你不喜欢太多社交，更享受安静的舒适时光。看起来懒洋洋的你，其实内心超级柔软和依赖亲近的人。",
    traits: ["佛系躺平", "可爱治愈", "享受生活", "闷骚依赖"],
    compatibility: "社交暹罗",
    percentage: "14%",
  },
  {
    id: "persian",
    name: "傲娇波斯",
    emoji: "💜",
    color: "kawaii-lilac",
    subtitle: "傲娇本娇・反差萌",
    description: "你就像一只华丽的波斯猫，外表高贵内心戏超多！你看起来不太好接近，但对喜欢的人会突然变得超级黏，反差萌简直可爱爆！",
    traits: ["傲娇反差", "内心丰富", "颜值担当", "选择性社交"],
    compatibility: "元气美短",
    percentage: "12%",
  },
  {
    id: "american",
    name: "元气美短",
    emoji: "💛",
    color: "kawaii-yellow",
    subtitle: "阳光活泼・万人迷",
    description: "你就像一只阳光的美短猫，活泼可爱又适应力超强！你好奇心满满但不会太冒险，社交自如但也享受独处，是完美的平衡型选手！",
    traits: ["适应力强", "活泼好动", "好奇但稳重", "人见人爱"],
    compatibility: "傲娇波斯",
    percentage: "13%",
  },
];

export type Scores = { E: number; S: number; A: number; C: number };

export function calculateResult(scores: Scores): CatResult {
  const { E, S, A, C } = scores;

  // Determine cat type based on dominant trait combinations
  if (E >= 6 && S >= 6) return catResults[0]; // 活力橘猫: high energy + social
  if (A >= 6 && S >= 2 && E < 4) return catResults[1]; // 温柔布偶: high affection + moderate social + low energy
  if (S <= -2 && A <= 0) return catResults[2]; // 高冷英短: antisocial + independent
  if (S >= 4 && A >= 4) return catResults[3]; // 社交暹罗: social + affectionate
  if (C >= 6 && S <= 2) return catResults[4]; // 好奇缅因: curious + introverted
  if (E <= -2 && A >= 2) return catResults[5]; // 慵懒加菲: lazy + clingy
  if (A >= 2 && S <= 0 && C >= 2) return catResults[6]; // 傲娇波斯: affectionate but antisocial
  if (C >= 4 && E >= 2) return catResults[7]; // 元气美短: curious + energetic

  // Fallback: find closest match by highest dimension
  const max = Math.max(E, S, A, C);
  if (max === E) return catResults[0];
  if (max === S) return catResults[3];
  if (max === A) return catResults[1];
  return catResults[7];
}
