export interface Project {
  id: number;
  title: string;
  subtitle: string;
  year: string;
  cover: string;
  video: string;
  stills: string[];
  storyboard: string[];
  analysis: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "花样年华",
    subtitle: "In the Mood for Love",
    year: "2000",
    cover: "https://picsum.photos/seed/wkw1/800/600",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    stills: [
      "https://picsum.photos/seed/wkw1a/800/600",
      "https://picsum.photos/seed/wkw1b/800/600"
    ],
    storyboard: [
      "https://picsum.photos/seed/sb1a/800/600",
      "https://picsum.photos/seed/sb1b/800/600"
    ],
    analysis: "光影在布宜诺斯艾利斯的街头流转，红黄蓝的浓烈色彩交织出放逐与寻找的母题。手持摄影的晃动感，配合着探戈的节奏，将人物内心的焦灼与迷茫外化。瀑布的空镜头不仅是地理坐标，更是情感宣泄的出口。"
  },
  {
    id: 2,
    title: "重庆森林",
    subtitle: "Chungking Express",
    year: "1994",
    cover: "https://picsum.photos/seed/wkw2/800/600",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    stills: [
      "https://picsum.photos/seed/wkw2a/800/600",
      "https://picsum.photos/seed/wkw2b/800/600"
    ],
    storyboard: [
      "https://picsum.photos/seed/sb2a/800/600",
      "https://picsum.photos/seed/sb2b/800/600"
    ],
    analysis: "抽帧与慢快门的运用，创造出都市人群在拥挤空间中的疏离感。霓虹灯的冷暖对比，罐头的保质期，构成了关于时间与记忆的隐喻。快餐店的局促空间被镜头切割，展现出碎片化的现代情感体验。"
  },
  {
    id: 3,
    title: "堕落天使",
    subtitle: "Fallen Angels",
    year: "1995",
    cover: "https://picsum.photos/seed/wkw3/800/600",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    stills: [
      "https://picsum.photos/seed/wkw3a/800/600",
      "https://picsum.photos/seed/wkw3b/800/600"
    ],
    storyboard: [
      "https://picsum.photos/seed/sb3a/800/600",
      "https://picsum.photos/seed/sb3b/800/600"
    ],
    analysis: "超广角镜头的极度夸张，使得人物面部变形，背景深邃，强化了角色内心的极度孤独与世界的荒诞感。黑白与彩色的交替使用，不仅是视觉节奏的调节，更是现实与心理空间的界限划分。"
  }
];
