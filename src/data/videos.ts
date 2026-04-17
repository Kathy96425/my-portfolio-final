export interface VideoWork {
  id: string;
  title: string;
  type: string;
  roles: string[];
  highlight: string;
  thumbnail: string;
  videoUrl?: string;
  duration?: string;
  date?: string;
  theme?: string;
  coreImagery?: string;
  narrative?: string;
  scriptExcerpt?: string;
  honors?: string;
  judgeComment?: string;
  stills?: string[];
  storyboards?: { storyboard: string; finalFrame: string }[];
}

export const videoWorks: VideoWork[] = [
  {
    id: "wuzhi",
    title: "《物执》",
    type: "微电影",
    roles: ["导演", "编剧", "摄影", "剪辑"],
    highlight: "校级三等奖，镜头语言成熟",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    duration: "15分钟",
    date: "2022.04-2022.05",
    theme: "情感依赖、物化执念、自我和解",
    coreImagery: "过期饮品 / 刻字石头 / 记忆回收站",
    narrative: "夏瑜（荣誉物化）+ 张嘉闻（情感依赖）",
    scriptExcerpt: "“2021年11月16日中午11点21分，这是我跟Amanda分手的第230天……”",
    honors: "校级微电影比赛三等奖 · 播放3000+",
    judgeComment: "“镜头语言成熟，叙事节奏得当”",
    stills: [
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800",
      "https://images.unsplash.com/photo-1518131672697-611eb14bf8f6?q=80&w=800",
      "https://images.unsplash.com/photo-1524255684952-d7185b509571?q=80&w=800",
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=800",
    ],
    storyboards: [
      {
        storyboard: "https://images.unsplash.com/photo-1561089489-f13d5e730d72?q=80&w=800&grayscale",
        finalFrame: "https://images.unsplash.com/photo-1561089489-f13d5e730d72?q=80&w=800",
      },
      {
        storyboard: "https://images.unsplash.com/photo-1516280440502-62f54eb5c67f?q=80&w=800&grayscale",
        finalFrame: "https://images.unsplash.com/photo-1516280440502-62f54eb5c67f?q=80&w=800",
      }
    ]
  },
  {
    id: "zaowan",
    title: "《早晚》",
    type: "MV翻拍",
    roles: ["导演", "编剧", "摄影", "剪辑"],
    highlight: "翻拍作品，多场景调度",
    thumbnail: "https://images.unsplash.com/photo-1516280440502-62f54eb5c67f?q=80&w=800",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    duration: "4分钟",
    date: "2023.10",
    theme: "城市节奏、孤独感、时间流逝",
    coreImagery: "天桥车流 / 霓虹灯 / 倒转时钟",
    narrative: "通过快慢镜头的交替，展现都市人在早晚高峰中的心理落差与情绪变化。",
    stills: [
      "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=800",
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=800",
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=800",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800",
    ]
  },
  {
    id: "campus-news",
    title: "校园网问题调查",
    type: "新闻节目",
    roles: ["编辑", "记者", "剪辑"],
    highlight: "独立制作，校园议题",
    thumbnail: "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=800",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    duration: "8分钟",
    date: "2023.05",
    theme: "校园生活、网络基础设施、学生权益",
    coreImagery: "机房服务器 / 采访特写 / 数据图表",
    narrative: "深入调查校园网频繁断线的原因，采访网络中心负责人与受影响学生，多角度呈现问题。",
    stills: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800",
    ]
  },
  {
    id: "chiwei",
    title: "赤尾",
    type: "短视频广告",
    roles: ["编剧", "摄影", "剪辑"],
    highlight: "创意方案，比赛作品",
    thumbnail: "https://images.unsplash.com/photo-1587483166702-bf9aa66bd791?q=80&w=800",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    duration: "1分钟",
    date: "2023.11",
    theme: "安全、亲密、打破常规",
    coreImagery: "鸡蛋 / 避孕套 / 柔软与坚硬的对比",
    narrative: "用鸡蛋的脆弱与避孕套的保护力形成强烈视觉反差，传递产品核心卖点。",
    stills: [
      "https://images.unsplash.com/photo-1587483166702-bf9aa66bd791?q=80&w=800",
      "https://images.unsplash.com/photo-1518727818782-ed5341dbd476?q=80&w=800",
    ]
  },
  {
    id: "documentary",
    title: "《寻迹》",
    type: "纪录片",
    roles: ["导演", "摄影", "剪辑"],
    highlight: "真实记录，人文关怀",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    duration: "20分钟",
    date: "2024.01",
    theme: "传统手工艺、时代变迁、坚守",
    coreImagery: "老茧 / 刻刀 / 斑驳的阳光",
    narrative: "跟随一位老木匠的视角，记录传统木雕工艺在现代社会的生存现状与传承困境。",
    stills: [
      "https://images.unsplash.com/photo-1611078565187-84883311654a?q=80&w=800",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800",
    ]
  }
];
