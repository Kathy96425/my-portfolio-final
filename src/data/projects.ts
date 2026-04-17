export interface Storyboard {
  sketch: string;
  final: string;
  desc: string;
}

export interface Project {
  id: number;
  title: string;
  type: string;
  roles: string[];
  otherRoles: string;
  description: string;
  duration: string;
  year: string;
  period: string;
  cover: string;
  stills: string[];
  storyboards: Storyboard[];
  analysis: string;
  scriptExcerpt: string;
  honors: string;
  views: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "物执",
    type: "剧情短片",
    roles: ["导演", "编剧", "剪辑"],
    otherRoles: "摄影 / 美术",
    description: "在物品的堆砌中寻找存在的痕迹，一段关于执念与放下的视觉诗。",
    duration: "12:30",
    year: "2023",
    period: "3个月",
    cover: "https://picsum.photos/seed/wkw1/800/450",
    stills: [
      "https://picsum.photos/seed/wkw1_1/600/337",
      "https://picsum.photos/seed/wkw1_2/600/337",
      "https://picsum.photos/seed/wkw1_3/600/337"
    ],
    storyboards: [
      {
        sketch: "https://picsum.photos/seed/sb1_1/400/225",
        final: "https://picsum.photos/seed/wkw1_1/400/225",
        desc: "开篇镜头：低角度跟拍，建立疏离感"
      }
    ],
    analysis: "探讨现代人与物质的关系，核心意象为不断堆叠的旧物。叙事结构采用非线性回忆，视觉风格偏向暗调与高对比度。",
    scriptExcerpt: "（内景，昏暗的房间）\n他抚摸着那个缺角的瓷杯，像是抚摸着某段停滞的时间。\n“你总是舍不得扔。”\n声音从背后传来，但他没有回头。",
    honors: "校级微电影节 最佳导演奖",
    views: "5000+"
  },
  {
    id: 2,
    title: "早晚",
    type: "实验影像",
    roles: ["摄影", "调色"],
    otherRoles: "导演 / 编剧",
    description: "清晨与黄昏的交替，城市边缘的两次呼吸。",
    duration: "08:15",
    year: "2024",
    period: "1个月",
    cover: "https://picsum.photos/seed/wkw2/800/450",
    stills: [
      "https://picsum.photos/seed/wkw2_1/600/337",
      "https://picsum.photos/seed/wkw2_2/600/337"
    ],
    storyboards: [
      {
        sketch: "https://picsum.photos/seed/sb2_1/400/225",
        final: "https://picsum.photos/seed/wkw2_1/400/225",
        desc: "转场设计：利用光影变化实现无缝转场"
      }
    ],
    analysis: "通过极简的镜头语言捕捉时间的流逝。大量使用固定长镜头，强调环境音与画面的剥离感。",
    scriptExcerpt: "（外景，天台，黄昏）\n风声盖过了远处的车流。\n光线一点点从她的侧脸褪去。",
    honors: "青年影像展 优秀摄影提名",
    views: "3200+"
  },
  {
    id: 3,
    title: "赤尾",
    type: "纪录短片",
    roles: ["导演", "摄影"],
    otherRoles: "剪辑 / 录音",
    description: "追寻一种罕见鸟类的踪迹，也是一次对内心的放逐。",
    duration: "20:00",
    year: "2023",
    period: "6个月",
    cover: "https://picsum.photos/seed/wkw3/800/450",
    stills: [
      "https://picsum.photos/seed/wkw3_1/600/337",
      "https://picsum.photos/seed/wkw3_2/600/337"
    ],
    storyboards: [],
    analysis: "真实记录与主观情绪的结合。手持摄影带来呼吸感，色彩偏向自然但略带忧郁的冷绿调。",
    scriptExcerpt: "（旁白）\n他们说赤尾只在最深的林子里出现。\n我走了三天，除了自己的心跳，什么也没听见。",
    honors: "独立纪录片展映 评委会特别奖",
    views: "8000+"
  },
  {
    id: 4,
    title: "校园网问题调查",
    type: "新闻纪实",
    roles: ["编导", "剪辑"],
    otherRoles: "出镜 / 摄像",
    description: "聚焦学生日常痛点，以客观视角剖析背后的技术与管理困境。",
    duration: "15:40",
    year: "2022",
    period: "2周",
    cover: "https://picsum.photos/seed/wkw4/800/450",
    stills: [
      "https://picsum.photos/seed/wkw4_1/600/337",
      "https://picsum.photos/seed/wkw4_2/600/337"
    ],
    storyboards: [],
    analysis: "快节奏剪辑，多方采访交叉比对。视觉上采用冷峻的蓝灰调，强调调查的客观与严肃性。",
    scriptExcerpt: "（采访画面）\n“每到晚上八点，网页就打不开了。”\n（切至机房空镜）\n闪烁的指示灯背后，是超负荷运转的服务器。",
    honors: "校园新闻奖 一等奖",
    views: "10000+"
  }
];
