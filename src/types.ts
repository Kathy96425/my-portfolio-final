
export enum ProjectCategory {
  VIDEO = '视频作品',
  COPYWRITING = '文案作品',
  DESIGN = '排版作品'
}

export interface ProjectDetailSection {
  subtitle?: string;
  content: string;
}

export interface ProjectResource {
  url: string;      // 网盘或在线地址
  pwd?: string;     // 提取码
  qrcode?: string;  // 二维码预览图地址
}

export interface Project {
  id: string;
  title: string;
  role: string;
  category: ProjectCategory;
  subCategory?: string;
  description: string;
  metrics?: string;
  imageUrl: string;
  link?: string;    // 通用外链
  videoUrl?: string; // 视频直链
  resource?: ProjectResource; // 深度资源包
  tags: string[];
  detailedContent?: ProjectDetailSection[];
  gallery?: string[];
  storyboard?: string[]; // 剧本分镜图片
  storyboardDescription?: string; // 分镜设计思路
  storyboards?: string[];
  stills?: string[];
  analysis?: string;     // 内容解析
  honor?: string;
  slogan?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  overview: string;
  description: string;
  achievements: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Content' | 'Video' | 'Data' | 'Tools';
}
