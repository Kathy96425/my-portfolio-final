import { Project, ProjectCategory, Experience, Skill } from './types';

export const PORTRAIT_IMAGE = "/about-me-1.jpg"; 

export const PERSONAL_INFO = {
  name: "赖慧怡",
  englishName: "Lai Huiyi",
  title: "内容导演 / 创意策划 / 营销推广",
  email: "1162745359@qq.com",
  phone: "17817809063",
  location: "中国·广东·佛山",
  university: "岭南师范学院",
  major: "新闻学 (学士学位)",
  tagline: "你好👋 我是赖慧怡",
  description: "一名具备新闻专业深度 with 跨界复合技能的策略型内容人. 擅长通过数据洞察 with 创意整合，把飘忽的灵感，稳稳焊进可验证的增长里。",
  summary: "会编织故事，更注重数据验证共鸣。擅长用数据驱动内容迭代，从 0 到 1 策划优质深度内容，让创意转化为可见的影响力。",
  advantages: "1. **复杂项目全周期推进经验**：具备独立负责如微电影、大型活动等复杂项目的全周期推进能力，统筹多方资源，确保高质量目标达成。\n2. **敏锐的时事热点与政治素养**：在内容创作中兼顾公共价值与传播导向，对时政敏感度高，能精准把控内容尺度与调性。\n3. **多体裁专业文本输出能力**：文字功底深厚，能驾驭深度报道、新闻评论、创意策划及短视频脚本等多种文本体裁。\n4. **较强的沟通对接与采访能力**：具备行业采访经验，曾深度对接超 20 余位不同行业对象，线索挖掘与信息整合效率高。\n5. **数据指导创意的实战思维**：具备数据整理与可视化能力，擅长用数据思维指导创意实践，确保内容策略的有效性与可验证性。\n6. **卓越的自我驱动与挑战意识**：拥有极强的自我提升意识，乐于拥抱未知挑战，在快速迭代的环境中持续实现自我进化。",
  courses: ["新闻采访与写作", "新闻评论", "网络传播学", "摄影与摄像", "电视节目制作", "媒介经营与管理", "公共关系学"]
};

export const PROJECTS: Project[] = [
  {
    id: "p-media-1",
    title: "“飞”入寻常百姓家，“盘”出新潮流",
    role: "阅读量1000+",
    category: ProjectCategory.COPYWRITING,
    subCategory: "媒体稿件",
    description: "飞盘运动深度报道 · 民生观察",
    imageUrl: "/feipan-match.jpg",
    link: "http://m.gdzjdaily.com.cn/p/2836558.html?v=1663507728281?v=1663508140622",
    tags: [],
    detailedContent: [
      {
        content: `
          <div class="mb-[30px]">
            <h1 class="text-[2.2rem] text-white mb-[10px] font-semibold tracking-[1px] leading-tight" style="font-family: 'Source Han Serif', '思源宋体', '宋体', serif;">“飞”入寻常百姓家，“盘”出新潮流<br>——访湛江飞盘运动爱好者</h1>
            <p class="text-[1rem] text-[#FFD166] mb-[30px] border-b border-[#333] pb-[15px]" style="font-family: 'Inter', sans-serif;">《湛江晚报》 | 2022-09-18 | 独立策划/采写</p>
          </div>

          <!-- 报纸版截图（主图） -->
          <div class="mb-[30px] text-center">
              <img src="/feipan-news.jpg" alt="报纸版面截图" class="w-full rounded-lg shadow-md" />
              <p style="color:#b0b0b0; font-size:0.9rem; margin-top:8px;">《湛江晚报》2022年9月18日 第02版</p>
          </div>

          <!-- 节选部分 -->
          <div class="relative">
              <div class="excerpt-content pb-[20px]">
                  <p class="text-[1.1rem] mb-[1.5rem] text-justify leading-[1.8] indent-[2em]">9月16日晚，一群青年在位于赤坎双港路的运动场上玩着飞盘运动。他们奔跑追逐、挥洒汗水，目光聚焦在空中旋转划过的飞盘。冲刺、变向、跳跃、飞扑、接盘……欢声笑语飘荡在运动场上空。</p>
                  
                  <p class="text-[1.1rem] mb-[1.5rem] text-justify leading-[1.8] indent-[2em]">自2021年下半年以来，飞盘运动在国内走红，凭借其“参与门槛低、简单易上手的规则、强社交属性”等特点，迅速成为都市青年的新宠。在湛江，这股飞盘热潮同样涌动，越来越多的年轻人开始走出家门，在绿茵场上享受这项新兴运动的乐趣。</p>
                  
                  <p class="text-[1.1rem] mb-[1.5rem] text-justify leading-[1.8] indent-[2em]">“飞盘不仅是一项运动，更是一种生活方式。”湛江飞盘爱好者小陈告诉记者，通过飞盘，他结识了许多志同道合的朋友，周末的飞盘局已经成为他们固定的社交活动。“大家从陌生到熟悉，从工作聊到生活，飞盘让我们找到了城市里的归属感。”</p>
                  
                  <p class="text-[1.1rem] mb-[1.5rem] text-justify leading-[1.8] indent-[2em]">记者在现场看到，参与者中有学生、白领、自由职业者，年龄从20岁到40岁不等。一位正在休息的女生说：“以前下班就是刷手机，现在每周都盼着飞盘局，出出汗、聊聊天，特别解压。”</p>
                  
                  <p class="text-[1.1rem] mb-[1.5rem] text-justify leading-[1.8] indent-[2em]">随着飞盘运动在湛江的普及，相关的俱乐部和组织也逐渐涌现。他们定期组织训练、比赛和聚会，不仅推广了运动本身，也为年轻人创造了新的社交场景。“希望飞盘运动发展越来越好，让更多人感受它的魅力。”一位爱好者对着镜头笑着说。</p>

                  <!-- 新媒体配图 -->
                  <div class="mb-[30px] text-center">
                      <img src="/feipan-match.jpg" alt="飞盘爱好者现场" class="w-full rounded-lg shadow-md" onerror="this.src='https://picsum.photos/800/600?random=12'" />
                      <p style="color:#b0b0b0; font-size:0.9rem; margin-top:8px;">现场照片 / 新媒体版配图</p>
                  </div>
              </div>
              
              <!-- 渐变遮罩 -->
              <div class="absolute bottom-0 left-0 w-full h-[250px] bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent pointer-events-none"></div>
          </div>

          <!-- 阅读全文链接 -->
          <div class="text-center mt-[-40px] mb-[80px] relative z-10">
              <a href="http://m.gdzjdaily.com.cn/p/2836558.html?v=1663507728281?v=1663508140622" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center gap-2 text-[#FFD166] hover:text-white transition-colors duration-300 font-medium tracking-wider text-[16px]">
                  <span class="border-b-2 border-[#FFD166]/50 group-hover:border-white pb-1 transition-colors duration-300">阅读全文</span>
                  <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
          </div>

          <!-- 发表说明 -->
          <div class="bg-[#2a2a2a] p-[20px] rounded-lg mt-[60px] mb-[60px] border-l-4 border-[#FFD166] text-[0.95rem] text-[#ccc]">
              本文原载于《湛江晚报》2022年9月18日。<br>
              同步发布于“湛江云媒”及“湛江日报”公众号，排版及内容略有调整，以适应新媒体阅读习惯。
          </div>
        `
      }
    ]
  },
  {
    id: "p-media-5",
    title: "台上一分钟 台下十年功",
    role: "提升文化影响力",
    category: ProjectCategory.COPYWRITING,
    subCategory: "媒体稿件",
    description: "传统文化焕新 · 人物专访",
    imageUrl: "/huangweikun.jpg",
    link: "https://www.gdzjdaily.com.cn/p/2815608.html",
    tags: [],
    detailedContent: [
      {
        content: `
          <div class="mb-[30px]">
            <h1 class="text-[2.2rem] text-white mb-[10px] font-semibold tracking-[1px] leading-tight" style="font-family: 'Source Han Serif', '思源宋体', '宋体', serif;">台上一分钟 台下十年功<br>——湛江籍国家一级演员、著名粤剧文武生黄伟坤</h1>
            <p class="text-[1rem] text-[#FFD166] mb-[30px] border-b border-[#333] pb-[15px]" style="font-family: 'Inter', sans-serif;">《湛江晚报》 | 2021-11-07 | 独立策划/采写</p>
          </div>

          <!-- 报纸版截图（主图） -->
          <div class="mb-[30px] text-center">
              <img src="/yueju-news.jpg" alt="报纸版面截图" class="w-full rounded-lg shadow-md" onerror="this.src='https://picsum.photos/800/1200?random=5'" />
              <p style="color:#b0b0b0; font-size:0.9rem; margin-top:8px;">《湛江晚报》2021年11月7日 粤剧专访版面</p>
          </div>

          <div class="relative">
              <div class="excerpt-content pb-[20px]">
                  <p class="text-[1.1rem] mb-[1.5rem] text-justify leading-[1.8] indent-[2em]">为传承和弘扬粤曲文化艺术，10月以来，霞山区陆续开展了粤曲专场文艺汇演、粤曲任您唱、粤曲文化图片展等“粤曲集市”文化周系列活动，让众人充分感受到粤剧艺术的魅力。</p>

                  <p class="text-[1.1rem] mb-[1.5rem] text-justify leading-[1.8] indent-[2em]">为了给广大戏迷提供一个相互交流学习的平台，由霞山区文旅体局主办，霞山区公共文化服务中心（区图书馆、区文化馆）承办的粤曲文化交流培训讲座日前在霞山区新时代文明实践中心举行，湛江籍国家一级演员、深圳市剧协副主席、著名粤剧文武生黄伟坤作为主讲嘉宾前来和大家分享交流。</p>

                  <p class="text-[1.1rem] mb-[1.5rem] text-justify leading-[1.8] indent-[2em]">11月5日，记者对黄伟坤作了专访，请他讲述自己的粤剧缘和湛江情。</p>

                  <div class="mb-[30px] text-center mt-[30px]">
                      <img src="/huangweikun.jpg" alt="黄伟坤剧照" class="w-full rounded-lg shadow-md" onerror="this.src='https://picsum.photos/800/1200?random=51'" />
                      <p style="color:#b0b0b0; font-size:0.9rem; margin-top:8px;">黄伟坤剧照。</p>
                  </div>

                  <h2 class="text-[1.5rem] text-[#FFD166] mt-[50px] mb-[15px] font-bold tracking-wide border-l-4 border-[#FFD166] pl-4" style="font-family: 'Source Han Serif', '思源宋体', '宋体', serif;">成长</h2>
                  <h3 class="text-[1.3rem] text-white mb-[25px] font-bold tracking-wide" style="font-family: 'Source Han Serif', '思源宋体', '宋体', serif;">昔日农村娃与戏结缘 成长为著名粤剧文武生</h3>

                  <p class="text-[1.1rem] mb-[1.5rem] text-justify leading-[1.8] indent-[2em]">黄伟坤出生于麻章区迈龙村的一个普通农民家庭。他虽然是个农村娃，但因机缘巧合受身边喜爱曲艺的朋友影响，接触到戏曲，从而萌生了考艺术类学校的想法。经历了3次艺考，他终于在1980年考取湛江戏剧学校戏剧表演专业。</p>

                  <p class="text-[1.1rem] mb-[1.5rem] text-justify leading-[1.8] indent-[2em]">1984年，黄伟坤以优异成绩毕业后，被分配入湛江市粤剧团。他受到各位粤剧前辈的悉心栽培，加上自身优越的外形条件与十年如一日的勤学苦练，他塑造了众多经典舞台形象，大受观众喜爱，在戏曲界名声渐起，多次获政府主办的艺术节表演一等奖、市文化先进工作者等荣誉和奖项。1987年，他荣获广东省戏剧百花奖，1988年荣获广东省青年演员“康乐杯”粤曲大赛一等奖，同年入选《世界华人文学艺术界名人录》。1995年，他加入佛山青年粤剧团，2001年，他调任深圳粤剧团，任副团长、艺术总监。</p>
              </div>
              
              <!-- 渐变遮罩 -->
              <div class="absolute bottom-0 left-0 w-full h-[250px] bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent pointer-events-none"></div>
          </div>

          <!-- 阅读全文链接 -->
          <div class="text-center mt-[-40px] mb-[80px] relative z-10">
              <a href="https://m.gdzjdaily.com.cn/p/2813588.html" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center gap-2 text-[#FFD166] hover:text-white transition-colors duration-300 font-medium tracking-wider text-[16px]">
                  <span class="border-b-2 border-[#FFD166]/50 group-hover:border-white pb-1 transition-colors duration-300">阅读全文</span>
                  <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
          </div>

          <!-- 发表说明 -->
          <div class="bg-[#2a2a2a] p-[20px] rounded-lg mt-[60px] mb-[60px] border-l-4 border-[#FFD166] text-[0.95rem] text-[#ccc]">
              本文原载于《湛江晚报》2021年11月7日。<br>
              同步发布于“湛江云媒”及“湛江日报”公众号，排版及内容略有调整，以适应新媒体阅读习惯。
          </div>
        `
      }
    ]
  },
  {
    id: "p-media-2",
    title: "省运会帆船比赛：赞赛事，赞港城",
    role: "获政务号转载",
    category: ProjectCategory.COPYWRITING,
    subCategory: "媒体稿件",
    description: "省运会特刊 · 人物特写",
    imageUrl: "/sailing-city.jpg",
    link: "http://m.gdzjdaily.com.cn/p/2838825.html?v=1667292180048?v=1667292285427",
    tags: [],
    detailedContent: [
      {
        content: `
          <div class="mb-[30px]">
            <h1 class="text-[2.2rem] text-white mb-[10px] font-semibold tracking-[1px] leading-tight" style="font-family: 'Source Han Serif', '思源宋体', '宋体', serif;">点赞赛事 赞美港城<br>——省运会帆船比赛的教练员、运动员、志愿者</h1>
            <p class="text-[1rem] text-[#FFD166] mb-[30px] border-b border-[#333] pb-[15px]" style="font-family: 'Inter', sans-serif;">《湛江日报》 | 2022-10-31 | 独立策划/采写</p>
          </div>

          <!-- 报纸版截图（主图） -->
          <div class="mb-[30px] text-center">
              <img src="/sailing-city.jpg" alt="点点白帆与城市建筑相互映衬" class="w-full rounded-lg shadow-md" onerror="this.src='https://picsum.photos/800/600?random=21'" />
              <p style="color:#b0b0b0; font-size:0.9rem; margin-top:8px;">点点白帆与城市建筑相互映衬，美不胜收。</p>
          </div>
          
          <div class="relative">
              <div class="excerpt-content pb-[20px]">
                  <p class="text-[1.1rem] mb-[1.5rem] text-justify leading-[1.8] indent-[2em]">本报讯 （记者卓朝兴 通讯员赖慧怡 黄钰滢）“我第一次来湛江，这里给我印象挺好的。”10月31日，广州队教练夏悦接受采访时说，本届省运会帆船赛的赛场配套非常齐全，加上海湾内比赛更添安全，“很高兴来到这里，和众多优秀教练员、运动员切磋交流。”</p>
                  
                  <p class="text-[1.1rem] mb-[1.5rem] text-justify leading-[1.8] indent-[2em]">连日来，广东省第十六届运动会竞技体育组帆船比赛在赤坎金沙湾水上运动中心火热进行，向观众献上激情、精彩的画面。记者现场采访了部分教练员、运动员、志愿者等人。他们纷纷对美丽湛江、周到的赛事组织以及热情服务点赞不已。</p>
                  
                  <div class="mb-[30px] text-center mt-[30px]">
                      <img src="/kites-flying.jpg" alt="多彩伞翼在海面上空飞舞" class="w-full rounded-lg shadow-md" onerror="this.src='https://picsum.photos/800/600?random=22'" />
                      <p style="color:#b0b0b0; font-size:0.9rem; margin-top:8px;">多彩伞翼在海面上空飞舞。</p>
                  </div>

                  <div class="mb-[30px] text-center mt-[10px]">
                      <img src="/sailing-match.jpg" alt="帆船比赛" class="w-full rounded-lg shadow-md" onerror="this.src='https://picsum.photos/800/600?random=23'" />
                  </div>
              </div>
              
              <!-- 渐变遮罩 -->
              <div class="absolute bottom-0 left-0 w-full h-[250px] bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent pointer-events-none"></div>
          </div>

          <!-- 阅读全文链接 -->
          <div class="text-center mt-[-40px] mb-[80px] relative z-10">
              <a href="http://m.gdzjdaily.com.cn/p/2838825.html?v=1667292180048?v=1667292285427" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center gap-2 text-[#FFD166] hover:text-white transition-colors duration-300 font-medium tracking-wider text-[16px]">
                  <span class="border-b-2 border-[#FFD166]/50 group-hover:border-white pb-1 transition-colors duration-300">阅读全文</span>
                  <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
          </div>

          <!-- 发表说明 -->
          <div class="bg-[#2a2a2a] p-[20px] rounded-lg mt-[60px] mb-[60px] border-l-4 border-[#FFD166] text-[0.95rem] text-[#ccc]">
              本文原载于《湛江日报》2022年10月31日。<br>
              同步发布于“湛江云媒”及“湛江日报”公众号，排版及内容略有调整，以适应新媒体阅读习惯。
          </div>
        `
      }
    ]
  },
  {
    id: "p-media-4",
    title: "新业态新亮点——“沙滩人”俱乐部脱口秀",
    role: "阅读量提升20%",
    category: ProjectCategory.COPYWRITING,
    subCategory: "媒体稿件",
    description: "青年文化现象 · 深度观察",
    imageUrl: "/talkshow-1.jpg",
    link: "https://www.gdzjdaily.com.cn/p/2817371.html",
    tags: [],
    detailedContent: [
      {
        content: `
          <div class="mb-[30px]">
            <h1 class="text-[2.2rem] text-white mb-[10px] font-semibold tracking-[1px] leading-tight" style="font-family: 'Source Han Serif', '思源宋体', '宋体', serif;">“BeachMan海滨人”俱乐部脱口秀剪影<br>——新业态新亮点</h1>
            <p class="text-[1rem] text-[#FFD166] mb-[30px] border-b border-[#333] pb-[15px]" style="font-family: 'Inter', sans-serif;">《湛江晚报》 | 2021-12-06 | 独立策划/采写</p>
          </div>

          <!-- 报纸版截图（主图） -->
          <div class="mb-[30px] text-center">
              <img src="/talkshow-news.jpg" alt="报纸版面截图" class="w-full rounded-lg shadow-md" />
              <p style="color:#b0b0b0; font-size:0.9rem; margin-top:8px;">《湛江晚报》2021年12月6日 第10版</p>
          </div>
          
          <div class="relative">
              <div class="excerpt-content pb-[20px]">
                  <p class="text-[1.1rem] mb-[1.5rem] text-justify leading-[1.8] indent-[2em]">近日晚上，湛江首家民间脱口秀俱乐部——“BeachMan海滨人”举办特约秀。演出当晚座无席，现场欢笑声连连，气氛热烈。</p>
                  
                  <div class="mb-[30px] text-center mt-[30px]">
                      <img src="/talkshow-1.jpg" alt="即兴喜剧表演" class="w-full rounded-lg shadow-md" onerror="this.src='https://picsum.photos/800/600?random=42'" />
                  </div>

                  <p class="text-[1.1rem] mb-[1.5rem] text-justify leading-[1.8] indent-[2em]">据俱乐部有关负责人“大米老师”介绍，本次演出大胆地尝试了“即兴喜剧”的形式——通过“捡纸条”的方式，随机选取观众回答问题，并将所答内容采纳入节目当中。与以往的单口喜剧相比，这种表演方式加强了演员与观众的互动，让观众获得更深刻的沉浸式体验感，现场反响热烈。这种新表演方式，也对演员的专业功底与临场应变能力提出了较高的要求。</p>
                  
                  <div class="mb-[30px] text-center mt-[30px]">
                      <img src="/talkshow-2.jpg" alt="演员与观众互动" class="w-full rounded-lg shadow-md" onerror="this.src='https://picsum.photos/800/600?random=43'" />
                  </div>

                  <p class="text-[1.1rem] mb-[1.5rem] text-justify leading-[1.8] indent-[2em]">近半年来，“BeachMan海滨人”喜剧俱乐部团队不断发展壮大，人数增加至将近50人，参与表演团队成员的职业成分进一步扩大，形成了以公职人员、国企员工、教师以及各类文化创业行业从业人员为主，其他行业交融的一支多元身份的表演团队。</p>
              </div>
              
              <!-- 渐变遮罩 -->
              <div class="absolute bottom-0 left-0 w-full h-[250px] bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent pointer-events-none"></div>
          </div>

          <!-- 阅读全文链接 -->
          <div class="text-center mt-[-40px] mb-[80px] relative z-10">
              <a href="https://www.gdzjdaily.com.cn/p/2817371.html" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center gap-2 text-[#FFD166] hover:text-white transition-colors duration-300 font-medium tracking-wider text-[16px]">
                  <span class="border-b-2 border-[#FFD166]/50 group-hover:border-white pb-1 transition-colors duration-300">阅读全文</span>
                  <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
          </div>

          <!-- 发表说明 -->
          <div class="bg-[#2a2a2a] p-[20px] rounded-lg mt-[60px] mb-[60px] border-l-4 border-[#FFD166] text-[0.95rem] text-[#ccc]">
              本文原载于《湛江晚报》2021年12月6日。<br>
              同步发布于“湛江云媒”及“湛江日报”公众号，排版及内容略有调整，以适应新媒体阅读习惯。
          </div>
        `
      }
    ]
  },
  {
    id: "p-media-3",
    title: "推动渔业产业可持续发展",
    role: "—",
    category: ProjectCategory.COPYWRITING,
    subCategory: "媒体稿件",
    description: "经济报道 · 独立撰稿",
    imageUrl: "/fishery-news.jpg",
    link: "https://m.gdzjdaily.com.cn/p/2872356.html",
    tags: [],
    detailedContent: [
      {
        content: `
          <div class="mb-[30px]">
            <h1 class="text-[2.2rem] text-white mb-[10px] font-semibold tracking-[1px] leading-tight" style="font-family: 'Source Han Serif', '思源宋体', '宋体', serif;">推动渔业产业可持续发展<br>——市渔业协会第二届第一次会员大会召开</h1>
            <p class="text-[1rem] text-[#FFD166] mb-[30px] border-b border-[#333] pb-[15px]" style="font-family: 'Inter', sans-serif;">《湛江晚报》 | 2024-01-11 | 独立策划/采写</p>
          </div>

          <!-- 报纸版截图（主图） -->
          <div class="mb-[30px] text-center">
              <img src="/fishery-news.jpg" alt="报纸版面截图" class="w-full rounded-lg shadow-md" onerror="this.src='https://picsum.photos/800/600?random=31'" />
              <p style="color:#b0b0b0; font-size:0.9rem; margin-top:8px;">《湛江晚报》2024年1月11日 第07版</p>
          </div>
          
          <div class="relative">
              <div class="excerpt-content pb-[20px]">
                  <p class="text-[1.1rem] mb-[1.5rem] text-justify leading-[1.8] indent-[2em]">1月9日，湛江市渔业协会第二届第一次会员大会召开。经投票选举，李瑞当选为湛江市渔业协会第二届会长。</p>
                  
                  <p class="text-[1.1rem] mb-[1.5rem] text-justify leading-[1.8] indent-[2em]">据悉，市渔业协会是政府与渔民之间的“贴心桥”，是一个团结、互助、共同发展的平台，发挥桥梁纽带作用，为政府和企业双向服务，加强行业自律管理，维护协会成员和行业的合法权益，保护渔业资源和生态环境，推动渔业产业的可持续发展。</p>
                  
                  <p class="text-[1.1rem] mb-[1.5rem] text-justify leading-[1.8] indent-[2em]">李瑞表示，将构建一个严谨高效的团队，为NS生产作业船队保驾护航；进一步完善规范协会的各项管理制度，邀请相关部门专家不定期对NS渔船的船员进行安全培训，不断提高船员的安全意识与操作技能；努力抓好渔业生产的同时，为有关部门提供更多相关信息。</p>
              </div>
              
              <!-- 渐变遮罩 -->
              <div class="absolute bottom-0 left-0 w-full h-[250px] bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent pointer-events-none"></div>
          </div>

          <!-- 阅读全文链接 -->
          <div class="text-center mt-[-40px] mb-[80px] relative z-10">
              <a href="https://m.gdzjdaily.com.cn/p/2872356.html" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center gap-2 text-[#FFD166] hover:text-white transition-colors duration-300 font-medium tracking-wider text-[16px]">
                  <span class="border-b-2 border-[#FFD166]/50 group-hover:border-white pb-1 transition-colors duration-300">阅读全文</span>
                  <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
          </div>

          <!-- 发表说明 -->
          <div class="bg-[#2a2a2a] p-[20px] rounded-lg mt-[60px] mb-[60px] border-l-4 border-[#FFD166] text-[0.95rem] text-[#ccc]">
              本文原载于《湛江晚报》2024年1月11日。<br>
              同步发布于“湛江云媒”及“湛江日报”公众号，排版及内容略有调整，以适应新媒体阅读习惯。
          </div>
        `
      }
    ]
  },
  {
    id: "p-video-1",
    title: "微电影《物执》",
    role: "播放量 5000+ / 校级三等奖",
    category: ProjectCategory.VIDEO,
    description: "导演/编剧/摄影/剪辑",
    imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800",
    videoUrl: "/wuzhi-excerpt.mp4",
    link: "https://www.xinpianchang.com/a13652548?from=private_pwd&pwd=z72u",
    tags: ["微电影", "剧情"],
    analysis: "本片以双线叙事展开，聚焦大学生张嘉闻与夏瑜各自的内心挣扎，探讨现代年轻人对情感的物化寄托与执念。两人因不同的生活境遇与精神困境陷入对“物”的依赖，最终在命运的巧合下，通过自我反思与外界触动，完成对执念的释然。",
    storyboard: [
      "/wuzhi-plot.jpg",
      "/wuzhi-scene01.jpg",
      "/wuzhi-scene02.jpg",
      "/wuzhi-scene03.jpg"
    ]
  },
  {
    id: "p-video-2",
    title: "翻拍MV《早晚》",
    role: "视频作品",
    category: ProjectCategory.VIDEO,
    description: "导演/编剧/摄影/剪辑",
    imageUrl: "/video-zaowan.jpg",
    videoUrl: "/zaowan-excerpt.mp4",
    link: "https://www.xinpianchang.com/a13652520?from=private_pwd&pwd=ghkp",
    tags: ["MV", "翻拍"],
    analysis: "《早晚》MV通过11个孤独场景（天桥、公交站、人行道、街景、游乐园、电影院、海边、咖啡店、美术馆、饭店、蛋糕店）的碎片化叙事，展现现代都市青年的“孤独常态”。",
    storyboardDescription: "1. <strong>重复中的变奏</strong>：同一人物在不同场景重复出现，但景别、运镜、剪辑节奏随歌词情绪变化，使单调的“孤独”变得有层次——从麻木到期待，从失望到释然。\n2. <strong>黑白滤镜与推拉镜头</strong>：全片采用黑白影调，配合“缓拉”“跟拍”“固定”等运镜方式，除了适配歌曲本身的舒缓风格外，希望利用视觉上的停滞感与无力感，呼应人物被困在时间里的状态。\n3. <strong>结尾的回望</strong>：全片最后一个镜头“回头直视镜头”，打破第四面墙，让观众突然与主角对视，意欲仿佛在问：“你也是这样吗？”——这正是本MV想要传达的共鸣。",
    storyboard: [
      "/zaowan-scene 01.jpg",
      "/zaowan-scene 02.jpg",
      "/zaowan-scene 03.jpg"
    ]
  },
  {
    id: "p-video-4",
    title: "大广赛短视频广告",
    role: "短视频广告",
    category: ProjectCategory.VIDEO,
    description: "编剧/摄影/剪辑",
    imageUrl: "/video-ad.jpg",
    link: "https://www.xinpianchang.com/a13652539?from=private_pwd&pwd=1n1h",
    videoUrl: "#",
    tags: ["广告", "短视频"],
    analysis: "1. 震动中的鸡蛋象征未经保护、易受冲击的生命力。\n2. 玻璃罩意象隐喻赤尾避孕套提供的安全守护。\n3. 暴风雨环境音暗示性爱过程中的激烈与投入。\n4. 双手相握体现两性之间的尊重、和谐与亲密。\n5. 双鱼游动呼应传统“鱼水之欢”，象征自然愉悦的亲密关系。\n6. 通过使用避孕套前后的对比，传达在赤尾的保护下，双方能够更自由、安心地享受亲密时刻。",
    storyboard: [
      "/chiwei-storyboard.jpg"
    ]
  },
  {
    id: "p-video-3",
    title: "自制新闻节目《校园网问题调查》",
    role: "新闻节目",
    category: ProjectCategory.VIDEO,
    description: "编辑/记者/剪辑",
    imageUrl: "/video-news.jpg",
    link: "https://www.xinpianchang.com/a13656337?from=private_pwd&pwd=aly0",
    videoUrl: "#",
    tags: ["新闻", "调查"],
    analysis: "采用纪实手法，深入校园生活。通过多角度采访与数据对比，客观呈现校园网现状，引发师生共鸣。",
    storyboard: [
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=400"
    ]
  },
  {
    id: "p-creation-1",
    title: "个人创作集锦",
    role: "主理人 / 撰稿 / 排版",
    category: ProjectCategory.COPYWRITING,
    subCategory: "个人创作",
    description: "Ticktick Boom / 九十六号媒介研究所",
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800",
    link: "https://pan.baidu.com/s/1mIJEeXIY7vUlQ3JFe3Tlmw?pwd=s9ry",
    tags: ["个人公众号", "独立撰稿"],
    detailedContent: [
      {
        content: `
          <div class="magazine-editorial text-[#e5e5e5] max-w-6xl mx-auto py-12 px-4 sm:px-8">
            <!-- Editorial Header -->
            <header class="mb-24 text-center relative">
              <p class="text-[#FFD166] text-xs tracking-[0.3em] uppercase mb-6 font-sans">Selected Works</p>
              <h1 class="text-5xl md:text-7xl font-light mb-8 tracking-wide" style="font-family: 'Source Han Serif', 'Noto Serif SC', 'Georgia', serif;">
                文字的<span class="italic text-white/70">温度</span>与<span class="italic text-white/70">质感</span>
              </h1>
              <div class="w-px h-24 bg-gradient-to-b from-[#FFD166] to-transparent mx-auto"></div>
            </header>

            <!-- Accounts / Publications -->
            <div class="flex flex-col md:flex-row justify-center gap-16 mb-32 border-y border-white/10 py-12">
              <div class="text-center group">
                <h3 class="text-2xl mb-2 group-hover:text-[#FFD166] transition-colors" style="font-family: 'Source Han Serif', 'Noto Serif SC', 'Georgia', serif;">九十六号媒介研究所</h3>
                <p class="text-xs tracking-widest text-white/50 uppercase font-sans">42 Articles · 1.2k Followers</p>
              </div>
              <div class="hidden md:block w-px bg-white/10"></div>
              <div class="text-center group">
                <h3 class="text-2xl mb-2 group-hover:text-[#FFD166] transition-colors" style="font-family: 'Source Han Serif', 'Noto Serif SC', 'Georgia', serif;">Ticktick Boom</h3>
                <p class="text-xs tracking-widest text-white/50 uppercase font-sans">28 Articles · 850 Followers</p>
              </div>
            </div>

            <!-- Articles List -->
            <div class="space-y-40">
              <!-- Article 01 (Hero style) -->
              <article class="relative group">
                <div class="absolute -top-16 -left-8 text-[12rem] font-bold text-white/[0.03] leading-none select-none pointer-events-none transition-transform duration-700 group-hover:-translate-y-4" style="font-family: 'Georgia', serif;">01</div>
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div class="lg:col-span-7 relative overflow-hidden">
                    <div class="w-full overflow-hidden rounded-xl bg-white/5 p-4 md:p-6 border border-white/10">
                      <img src="/creation-1.jpg" class="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 shadow-2xl rounded" alt="Cover 01" />
                    </div>
                  </div>
                  <div class="lg:col-span-5 relative z-10 lg:-ml-16 mt-8 lg:mt-0 bg-[#1a1a1a]/90 backdrop-blur-sm p-8 lg:p-12 border border-white/5">
                    <div class="flex items-center gap-4 mb-6">
                      <span class="text-[#FFD166] text-xs tracking-[0.2em] uppercase border-b border-[#FFD166]/30 pb-1">Ticktick Boom</span>
                      <span class="text-white/40 text-xs italic" style="font-family: 'Georgia', serif;">2022.05.04</span>
                    </div>
                    <h2 class="text-3xl md:text-4xl leading-snug mb-6 group-hover:text-[#FFD166] transition-colors" style="font-family: 'Source Han Serif', 'Noto Serif SC', 'Georgia', serif;">“不三不四观影团”影片汇总 第一期</h2>
                    <p class="text-white/60 text-sm leading-loose mb-8 text-justify font-light">“不三不四观影团”成立于公元2021年10月，致力于在各种节假日、学习工作之余的闲暇时间里遨游于电影的世界，感受光与影交织的空间里，镜头汇写的诗。</p>
                    <a href="https://mp.weixin.qq.com/s/NUtSzCxF0uWXtJd5GDl6mw" target="_blank" class="inline-flex items-center gap-3 text-xs tracking-widest uppercase text-white hover:text-[#FFD166] transition-colors">
                      Read Article <span class="w-8 h-px bg-current transition-all group-hover:w-12"></span>
                    </a>
                  </div>
                </div>
              </article>

              <!-- Article 02 (Offset Right) -->
              <article class="relative group">
                <div class="absolute -top-16 right-0 text-[12rem] font-bold text-white/[0.03] leading-none select-none pointer-events-none transition-transform duration-700 group-hover:-translate-y-4" style="font-family: 'Georgia', serif;">02</div>
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div class="lg:col-span-5 order-2 lg:order-1 relative z-10 lg:-mr-16 mt-8 lg:mt-0 bg-[#1a1a1a]/90 backdrop-blur-sm p-8 lg:p-12 border border-white/5">
                    <div class="flex items-center gap-4 mb-6">
                      <span class="text-[#FFD166] text-xs tracking-[0.2em] uppercase border-b border-[#FFD166]/30 pb-1">九十六号媒介研究所</span>
                      <span class="text-white/40 text-xs italic" style="font-family: 'Georgia', serif;">2023.12.27</span>
                    </div>
                    <h2 class="text-3xl md:text-4xl leading-snug mb-6 group-hover:text-[#FFD166] transition-colors" style="font-family: 'Source Han Serif', 'Noto Serif SC', 'Georgia', serif;">“快乐机器”实体化：少些高高在上的考量，多些设身处地的关怀</h2>
                    <p class="text-white/60 text-sm leading-loose mb-8 text-justify font-light">探讨脑机接口治疗抑郁症的伦理与现实，假设世界上有一种叫“快乐机器”的设备，你会选择接入吗？</p>
                    <a href="https://mp.weixin.qq.com/s/_jsUpepV9E2WIXNYoVoZTA" target="_blank" class="inline-flex items-center gap-3 text-xs tracking-widest uppercase text-white hover:text-[#FFD166] transition-colors">
                      Read Article <span class="w-8 h-px bg-current transition-all group-hover:w-12"></span>
                    </a>
                  </div>
                  <div class="lg:col-span-7 order-1 lg:order-2 relative overflow-hidden">
                    <div class="w-full overflow-hidden rounded-xl bg-white/5 p-4 md:p-6 border border-white/10">
                      <img src="/creation-2.jpg" class="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 shadow-2xl rounded" alt="Cover 02" />
                    </div>
                  </div>
                </div>
              </article>

              <!-- Article 03 (Minimalist Center) -->
              <article class="relative group max-w-4xl mx-auto text-center">
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[16rem] font-bold text-white/[0.02] leading-none select-none pointer-events-none transition-transform duration-700 group-hover:scale-110" style="font-family: 'Georgia', serif;">03</div>
                <div class="relative z-10">
                  <div class="flex items-center justify-center gap-4 mb-8">
                    <span class="text-[#FFD166] text-xs tracking-[0.2em] uppercase border-b border-[#FFD166]/30 pb-1">九十六号媒介研究所</span>
                    <span class="text-white/40 text-xs italic" style="font-family: 'Georgia', serif;">2023.12.27</span>
                  </div>
                  <h2 class="text-4xl md:text-5xl leading-tight mb-10 group-hover:text-[#FFD166] transition-colors px-4" style="font-family: 'Source Han Serif', 'Noto Serif SC', 'Georgia', serif;">《犬之力》：对传统男性气质的颠覆与解构</h2>
                  <div class="w-full max-w-3xl mx-auto overflow-hidden rounded-xl bg-white/5 p-4 md:p-6 border border-white/10 mb-10">
                    <img src="/creation-3.jpg" class="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 shadow-2xl rounded" alt="Cover 03" />
                  </div>
                  <p class="text-white/60 text-sm leading-loose max-w-2xl mx-auto font-light">有关“性别气质”的讨论在如今许多文艺作品中并不少见，这是二元性别论下性别特质区分的产物。</p>
                  <a href="https://mp.weixin.qq.com/s/66BpNn_jujR7NyJIFGpUQg" target="_blank" class="inline-flex items-center justify-center gap-3 text-xs tracking-widest uppercase text-white hover:text-[#FFD166] transition-colors mt-8">
                    Read Article <span class="w-8 h-px bg-current transition-all group-hover:w-12"></span>
                  </a>
                </div>
              </article>

              <!-- Article 04 (Split Layout) -->
              <article class="relative group border-t border-white/10 pt-20">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                  <div class="relative">
                    <div class="text-[8rem] font-bold text-white/[0.04] leading-none select-none absolute -top-12 -left-6 pointer-events-none" style="font-family: 'Georgia', serif;">04</div>
                    <div class="w-full overflow-hidden rounded-xl bg-white/5 p-4 md:p-6 border border-white/10 relative z-10">
                      <img src="/creation-4.jpg" class="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 shadow-2xl rounded" alt="Cover 04" />
                    </div>
                  </div>
                  <div class="flex flex-col justify-center h-full pt-12 md:pt-0">
                    <div class="flex items-center gap-4 mb-8">
                      <span class="text-[#FFD166] text-xs tracking-[0.2em] uppercase border-b border-[#FFD166]/30 pb-1">九十六号媒介研究所</span>
                      <span class="text-white/40 text-xs italic" style="font-family: 'Georgia', serif;">2023.12.27</span>
                    </div>
                    <h2 class="text-3xl md:text-4xl leading-snug mb-8 group-hover:text-[#FFD166] transition-colors" style="font-family: 'Source Han Serif', 'Noto Serif SC', 'Georgia', serif;">明星“考编”何以惹众怒？</h2>
                    <p class="text-white/60 text-sm leading-loose mb-10 text-justify font-light">探讨明星考编引发的社会争议，以及“小镇做题家”这个梗背后的情绪。</p>
                    <a href="https://mp.weixin.qq.com/s/ZbiSFvKwPF6zvTcCDm37SQ" target="_blank" class="inline-flex items-center gap-3 text-xs tracking-widest uppercase text-white hover:text-[#FFD166] transition-colors mt-auto">
                      Read Article <span class="w-8 h-px bg-current transition-all group-hover:w-12"></span>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: "p-campus-3",
    title: "考研专访｜黄澜：怀揣赤诚热忱，逐梦申研漫道",
    role: "文字：赖慧怡",
    category: ProjectCategory.COPYWRITING,
    subCategory: "校园新闻",
    description: "杰出人物报道 · 考研经验",
    imageUrl: "/campus-3.jpg",
    tags: ["人物专访", "考研"],
    detailedContent: [
      {
        content: `
          <div class="mb-[40px] border-b border-white/10 pb-[20px]">
            <h1 class="text-[2.4rem] text-white mb-[12px] font-bold leading-tight" style="font-family: 'Source Han Serif', serif;">考研专访｜黄澜：怀揣赤诚热忱，逐梦申研漫道</h1>
            <div class="flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem] text-[#FFD166]/80 font-medium">
              <span>媒体：校园新闻</span>
              <span>日期：2022.05.23</span>
              <span>角色：文字：赖慧怡</span>
            </div>
          </div>

          <div class="bg-[#FFD166]/5 p-6 rounded-xl border border-[#FFD166]/20 mb-12 max-w-3xl mx-auto">
            <h3 class="text-[#FFD166] font-bold mb-4 flex items-center gap-2">
              <span class="w-1.5 h-4 bg-[#FFD166] rounded-full"></span>
              关键信息摘要
            </h3>
            <ul class="space-y-3 text-[0.95rem] text-[#ccc]">
              <li class="flex gap-2"><span class="text-[#FFD166]">•</span> 提供实用的考研/申研经验分享</li>
              <li class="flex gap-2"><span class="text-[#FFD166]">•</span> 展现优秀学子的奋斗历程</li>
              <li class="flex gap-2"><span class="text-[#FFD166]">•</span> 为在校生规划未来提供参考</li>
            </ul>
          </div>

          <div class="flex flex-col items-center">
            <div class="w-full md:w-[80%] lg:w-[70%] relative mb-12 rounded-xl overflow-hidden border border-white/10 bg-[#111]">
              <img src="/campus-news-3-long.jpg" alt="公众号推文长图" class="w-full h-auto" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
              <div class="hidden w-full h-[400px] items-center justify-center text-[#666] flex-col gap-2">
                <svg class="w-8 h-8 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <span class="text-xs">图片加载中...</span>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: "p-campus-6",
    title: "【弘雷】凝心聚力齐抗疫，人文关怀入舍门——文学与传媒学院教师走访学生",
    role: "文字：赖慧怡",
    category: ProjectCategory.COPYWRITING,
    subCategory: "校园新闻",
    description: "校园动态 · 抗疫报道",
    imageUrl: "/campus-6.jpg",
    tags: ["校园活动", "抗疫"],
    detailedContent: [
      {
        content: `
          <div class="mb-[40px] border-b border-white/10 pb-[20px]">
            <h1 class="text-[2.4rem] text-white mb-[12px] font-bold leading-tight" style="font-family: 'Source Han Serif', serif;">【弘雷】凝心聚力齐抗疫，人文关怀入舍门——文学与传媒学院教师走访学生</h1>
            <div class="flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem] text-[#FFD166]/80 font-medium">
              <span>媒体：校园新闻</span>
              <span>日期：2022.05</span>
              <span>角色：文字：赖慧怡</span>
            </div>
          </div>

          <div class="bg-[#FFD166]/5 p-6 rounded-xl border border-[#FFD166]/20 mb-12 max-w-3xl mx-auto">
            <h3 class="text-[#FFD166] font-bold mb-4 flex items-center gap-2">
              <span class="w-1.5 h-4 bg-[#FFD166] rounded-full"></span>
              关键信息摘要
            </h3>
            <ul class="space-y-3 text-[0.95rem] text-[#ccc]">
              <li class="flex gap-2"><span class="text-[#FFD166]">•</span> 展现学院在抗疫期间的人文关怀</li>
              <li class="flex gap-2"><span class="text-[#FFD166]">•</span> 加强师生沟通，凝聚抗疫力量</li>
              <li class="flex gap-2"><span class="text-[#FFD166]">•</span> 记录特殊时期的校园生活点滴</li>
            </ul>
          </div>

          <div class="flex flex-col items-center">
            <div class="w-full md:w-[80%] lg:w-[70%] relative mb-12 rounded-xl overflow-hidden border border-white/10 bg-[#111]">
              <img src="/campus-news-6-long.jpg" alt="公众号推文长图" class="w-full h-auto" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
              <div class="hidden w-full h-[400px] items-center justify-center text-[#666] flex-col gap-2">
                <svg class="w-8 h-8 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <span class="text-xs">图片加载中...</span>
              </div>
            </div>
          </div>
        `
      }
    ]  },
  {
    id: "p-campus-1",
    title: "【筑梦军旅】黄国纶：逐梦军旅，武动青春",
    role: "文字：赖慧怡",
    category: ProjectCategory.COPYWRITING,
    subCategory: "校园新闻",
    description: "杰出人物报道 · 军旅风采",
    imageUrl: "/campus-1.jpg",
    tags: ["人物专访", "军旅"],
    detailedContent: [
      {
        content: `
          <div class="mb-[40px] border-b border-white/10 pb-[20px]">
            <h1 class="text-[2.4rem] text-white mb-[12px] font-bold leading-tight" style="font-family: 'Source Han Serif', serif;">【筑梦军旅】黄国纶：逐梦军旅，武动青春</h1>
            <div class="flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem] text-[#FFD166]/80 font-medium">
              <span>媒体：校园新闻</span>
              <span>日期：2022.03.16</span>
              <span>角色：文字：赖慧怡</span>
            </div>
          </div>

          <div class="bg-[#FFD166]/5 p-6 rounded-xl border border-[#FFD166]/20 mb-12 max-w-3xl mx-auto">
            <h3 class="text-[#FFD166] font-bold mb-4 flex items-center gap-2">
              <span class="w-1.5 h-4 bg-[#FFD166] rounded-full"></span>
              关键信息摘要
            </h3>
            <ul class="space-y-3 text-[0.95rem] text-[#ccc]">
              <li class="flex gap-2"><span class="text-[#FFD166]">•</span> 展现退伍大学生士兵的精神风貌</li>
              <li class="flex gap-2"><span class="text-[#FFD166]">•</span> 探讨军旅经历对个人成长的深远影响</li>
              <li class="flex gap-2"><span class="text-[#FFD166]">•</span> 激励更多学子投身国防事业</li>
            </ul>
          </div>

          <div class="flex flex-col items-center">
            <div class="w-full md:w-[80%] lg:w-[70%] relative mb-12 rounded-xl overflow-hidden border border-white/10 bg-[#111]">
              <img src="/campus-news-1-long.jpg" alt="公众号推文长图" class="w-full h-auto" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
              <div class="hidden w-full h-[400px] items-center justify-center text-[#666] flex-col gap-2">
                <svg class="w-8 h-8 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <span class="text-xs">图片加载中...</span>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: "p-campus-2",
    title: "基层校友专访｜林蕴仪：回报家乡，扎根基层教育",
    role: "文字：赖慧怡",
    category: ProjectCategory.COPYWRITING,
    subCategory: "校园新闻",
    description: "杰出人物报道 · 基层教育",
    imageUrl: "/campus-2.jpg",
    tags: ["人物专访", "校友"],
    detailedContent: [
      {
        content: `
          <div class="mb-[40px] border-b border-white/10 pb-[20px]">
            <h1 class="text-[2.4rem] text-white mb-[12px] font-bold leading-tight" style="font-family: 'Source Han Serif', serif;">基层校友专访｜林蕴仪：回报家乡，扎根基层教育</h1>
            <div class="flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem] text-[#FFD166]/80 font-medium">
              <span>媒体：校园新闻</span>
              <span>日期：2022.11.19</span>
              <span>角色：文字：赖慧怡</span>
            </div>
          </div>

          <div class="bg-[#FFD166]/5 p-6 rounded-xl border border-[#FFD166]/20 mb-12 max-w-3xl mx-auto">
            <h3 class="text-[#FFD166] font-bold mb-4 flex items-center gap-2">
              <span class="w-1.5 h-4 bg-[#FFD166] rounded-full"></span>
              关键信息摘要
            </h3>
            <ul class="space-y-3 text-[0.95rem] text-[#ccc]">
              <li class="flex gap-2"><span class="text-[#FFD166]">•</span> 聚焦优秀校友的职业选择与奉献精神</li>
              <li class="flex gap-2"><span class="text-[#FFD166]">•</span> 展现基层教育工作者的真实现状</li>
              <li class="flex gap-2"><span class="text-[#FFD166]">•</span> 传递“到基层去，到祖国最需要的地方去”的正能量</li>
            </ul>
          </div>

          <div class="flex flex-col items-center">
            <div class="w-full md:w-[80%] lg:w-[70%] relative mb-12 rounded-xl overflow-hidden border border-white/10 bg-[#111]">
              <img src="/campus-news-2-long.jpg" alt="公众号推文长图" class="w-full h-auto" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
              <div class="hidden w-full h-[400px] items-center justify-center text-[#666] flex-col gap-2">
                <svg class="w-8 h-8 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <span class="text-xs">图片加载中...</span>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: "p-campus-5",
    title: "【弘雷】金秋九月共同风，群英荟萃筑文传",
    role: "采写：赖慧怡",
    category: ProjectCategory.COPYWRITING,
    subCategory: "校园新闻",
    description: "校园动态 · 迎新报道",
    imageUrl: "/campus-5.jpg",
    tags: ["校园活动", "迎新"],
    detailedContent: [
      {
        content: `
          <div class="mb-[40px] border-b border-white/10 pb-[20px]">
            <h1 class="text-[2.4rem] text-white mb-[12px] font-bold leading-tight" style="font-family: 'Source Han Serif', serif;">【弘雷】金秋九月共同风，群英荟萃筑文传</h1>
            <div class="flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem] text-[#FFD166]/80 font-medium">
              <span>媒体：校园新闻</span>
              <span>日期：2022.09</span>
              <span>角色：采写：赖慧怡</span>
            </div>
          </div>

          <div class="bg-[#FFD166]/5 p-6 rounded-xl border border-[#FFD166]/20 mb-12 max-w-3xl mx-auto">
            <h3 class="text-[#FFD166] font-bold mb-4 flex items-center gap-2">
              <span class="w-1.5 h-4 bg-[#FFD166] rounded-full"></span>
              关键信息摘要
            </h3>
            <ul class="space-y-3 text-[0.95rem] text-[#ccc]">
              <li class="flex gap-2"><span class="text-[#FFD166]">•</span> 记录迎新现场的感人瞬间与热闹氛围</li>
              <li class="flex gap-2"><span class="text-[#FFD166]">•</span> 展现学院对新生的关怀与期望</li>
              <li class="flex gap-2"><span class="text-[#FFD166]">•</span> 体现志愿者服务的奉献精神</li>
            </ul>
          </div>

          <div class="flex flex-col items-center">
            <div class="w-full md:w-[80%] lg:w-[70%] relative mb-12 rounded-xl overflow-hidden border border-white/10 bg-[#111]">
              <img src="/campus-news-5-long.jpg" alt="公众号推文长图" class="w-full h-auto" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
              <div class="hidden w-full h-[400px] items-center justify-center text-[#666] flex-col gap-2">
                <svg class="w-8 h-8 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <span class="text-xs">图片加载中...</span>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: "p-campus-4",
    title: "马显彬：教育路无悔，师心酿英才",
    role: "文字：赖慧怡",
    category: ProjectCategory.COPYWRITING,
    subCategory: "校园新闻",
    description: "杰出人物报道 · 教师风采",
    imageUrl: "/campus-4.jpg",
    tags: ["人物专访", "教师"],
    detailedContent: [
      {
        content: `
          <div class="mb-[40px] border-b border-white/10 pb-[20px]">
            <h1 class="text-[2.4rem] text-white mb-[12px] font-bold leading-tight" style="font-family: 'Source Han Serif', serif;">马显彬：教育路无悔，师心酿英才</h1>
            <div class="flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem] text-[#FFD166]/80 font-medium">
              <span>媒体：校园新闻</span>
              <span>日期：2022年</span>
              <span>角色：文字：赖慧怡</span>
            </div>
          </div>

          <div class="bg-[#FFD166]/5 p-6 rounded-xl border border-[#FFD166]/20 mb-12 max-w-3xl mx-auto">
            <h3 class="text-[#FFD166] font-bold mb-4 flex items-center gap-2">
              <span class="w-1.5 h-4 bg-[#FFD166] rounded-full"></span>
              关键信息摘要
            </h3>
            <ul class="space-y-3 text-[0.95rem] text-[#ccc]">
              <li class="flex gap-2"><span class="text-[#FFD166]">•</span> 展现优秀教师的教学理念与人格魅力</li>
              <li class="flex gap-2"><span class="text-[#FFD166]">•</span> 探讨新时代背景下的师生关系</li>
              <li class="flex gap-2"><span class="text-[#FFD166]">•</span> 弘扬尊师重道的校园文化</li>
            </ul>
          </div>

          <div class="flex flex-col items-center">
            <div class="w-full md:w-[80%] lg:w-[70%] relative mb-12 rounded-xl overflow-hidden border border-white/10 bg-[#111]">
              <img src="/campus-news-4-long.jpg" alt="公众号推文长图" class="w-full h-auto" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
              <div class="hidden w-full h-[400px] items-center justify-center text-[#666] flex-col gap-2">
                <svg class="w-8 h-8 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <span class="text-xs">图片加载中...</span>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
];

export const PERSONAL_KEYWORDS = [
  {
    id: 'k1',
    title: "创意",
    engTitle: "CREATIVITY",
    subtitle: "灵感变频器",
    description: "创意不仅要“落地成篇”，更要“精准同频”。\n\n我能精准捕捉社会热点的高频信号，并将它‘变频’成能与特定群体共振的内容。\n\n无论是重构经典内核还是跨界文化现象，让每个灵感找到最佳表达频率是我的核心追求。",
    color: "bg-yellow-400",
    textColor: "text-slate-900",
    icon: "lightbulb",
    iconBg: "bg-yellow-500",
    iconColor: "text-yellow-900"
  },
  {
    id: 'k2',
    title: "执行力",
    engTitle: "EXECUTION",
    subtitle: "即时启动选手",
    description: "从“想做”到“做到”，不只有计划，更有结果。\n\n从‘线索-采访-成稿’的新闻闭环，到‘策划-拍摄-剪辑-互动’的运营闭环，我负责从 0 到 1 的启动，也负责从 1 到 100 的推进，用执行力为项目全速加温。",
    color: "bg-blue-600",
    textColor: "text-white",
    icon: "zap",
    iconBg: "bg-blue-700",
    iconColor: "text-blue-100"
  },
  {
    id: 'k3',
    title: "跨领域",
    engTitle: "CROSSOVER",
    subtitle: "“跨界”爱好者",
    description: "知识不设界，连接不同，创造不同。\n\n我享受跨领域知识带来的碰撞感。从主动研究艺考改革到用数据分析解读用户心，在新闻、教育、数据、艺术的交叉点寻找突破口，不断跃过专业的围栏。",
    color: "bg-rose-400",
    textColor: "text-slate-900",
    icon: "layers",
    iconBg: "bg-rose-500",
    iconColor: "text-rose-900"
  }
];

export const SKILLS: Skill[] = [
  { name: "语言能力", level: 90, category: "Content" },
  { name: "新媒体工具", level: 95, category: "Tools" },
  { name: "计算机技能", level: 90, category: "Tools" },
  { name: "软件与数据分析", level: 85, category: "Data" }
];

export const RESUME_SKILLS = [
  {
    title: "语言能力",
    description: "英语（CET-6：500+，熟练沟通）； 普通话（二甲）",
    icon: "Languages"
  },
  {
    title: "新媒体工具",
    description: "熟练使用 Final Cut Pro、Ps、Pr、剪映、秀米等",
    icon: "MonitorPlay"
  },
  {
    title: "计算机技能",
    description: "熟练使用 Office 软件",
    icon: "Laptop"
  },
  {
    title: "软件与数据分析",
    description: "八爪鱼、python、ChatGPT、Deepseek、SPSS 等",
    icon: "LineChart"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-campus",
    company: "校园新闻采编部干部",
    role: "",
    period: "2021.09 – 2022.10",
    overview: "累计发稿30+篇，获“内容扎实、报道及时”评价，新闻基石训练",
    description: `## 任务与结果

### 1. 任务
独立负责从线索发现、采访执行到成稿发布的全流程内容生产，并承担部分专题策划职责，提升内容阅读量与平台认可度。

### 2. 结果
累计发 **30+** 篇稿件，内容涵盖讲座、会议、人物专访等。单篇最高阅读量约 **2000次**，部门学期评价中获“内容扎实、报道及时”反馈。

---

## 总结与反思

### 1. 收获
这段经历是我的新闻业务“基石训练”。它让我了解并熟悉了 **线索-采访-成稿-发布-反馈** 的新闻生产全流程，锻炼了我对新闻热点的敏感性与严谨性，并激发了我对内容生产的热情与思考。

### 2. 反思
在完成日常采编任务时思维仍停留在浅层的“被动执行”阶段，没有意识到优秀的创作者需要具备 **主动策划** 的能力，欠缺“内容能为读者创造何种价值”的思考。`,
    achievements: "获“内容扎实、报道及时”反馈"
  },
  {
    id: "exp-daily",
    company: "《湛江晚报》实习记者",
    role: "",
    period: "2021.10 – 2023.01",
    overview: "独立策划15+篇深度报道，搭建“热点+年轻化”框架，阅读量提升20%",
    description: `## 背景与挑战

针对常规社会新闻议题互动疲软现状，如何让地方传统媒体内容在信息流中吸引日渐疏离的本地年轻读者（18-35岁）？

---

## 构思与策略

### 1. 二次编码“热点+年轻化”框架
将热点事件报道转化为能与年轻群体身份认同、社交货币相关联的新叙事。

### 2. 保持媒体调性
确保核心事实准确性与报道严肃内核不变，仅在表达语境和传播渠道上进行适配。

### 3. 响应基层融媒体转型
根据不同传播渠道调适新闻报道形式与内容。

---

## 行动及结果

### 1. 保持媒体调性（深度报道）
独立策划社会/文娱/体育领域选题 **15+** 篇，完成全流程线索挖掘、采访与成稿，全网平均阅读量 **1000+**。

### 2. 搭建“热点+年轻化传播”框架
- 策划“飞盘文化”“脱口秀生态”等潮流议题：将“飞盘运动”从体育新闻重构为探讨青年新型社交方式的“文化现象”，吸引年轻群体，阅读量提升 **20%**。
- 主导“传统文化焕新”项目：专访粤剧文武生演员，以人物故事连接传统与当代，为年轻受众提供理解传统文化的新鲜参照，提升传播影响力。
- 深度参与省运会专项报道：主笔“帆船比赛”专题，重点关注新生力量，通过人物特写生动呈现青年运动员风貌，强化地方文化传播。

---

## 总结与反思

一次从“内容生产者”到“策略执行者”的进阶，明白“内容破圈”的关键在于对同一事实进行 **受众语境转译**。`,
    achievements: "阅读量提升20% / 语境转译"
  },
  {
    id: "exp-film",
    company: "微电影比赛 | 导演/编剧",
    role: "",
    period: "2022.04 – 2022.05",
    overview: "4周带领7人非专业团队完成拍摄，获校级三等奖，评审肯定镜头语言",
    description: `## 背景与挑战

### 1. 比赛周期短
需在 4 周内完成从剧本到成片的全部制作，团队人员均为非专业背景，协调与质量把控挑战大。

### 2. 创意转化难
将脑海中抽象的创意转化为团队可执行的语言。

---

## 任务与行动

### 1. 任务
主导创作方向，统筹拍摄与后期环节，确保作品主题统一、技术达标并按时提交。

### 2. 行动
- **主导创作方向**：撰写剧本，绘制分镜脚本，明确机位、景别与转场设计。
- **拍摄统筹**：利用腾讯文档同步拍摄任务及内容，协调人员时间，组织 7 人团队进行 3 次集中拍摄，提前勘景并制定拍摄计划表，指导演员情绪表达与画面构图。
- **后期与调色**：使用 final cut pro 完成剪辑，配合音频层次化处理与调色，强化画面美感与叙事张力。

---

## 成果

如期提交作品并荣获校级三等奖，累计播放 **3000+**。评审评语：“镜头语言成熟，叙事节奏掌握得当”。

---

## 收获与反思

### 1. 收获
通过主导此次微电影项目，我成功完成了从个人创作者到团队领导者的首次跨越，并有效锻炼了我的两大核心能力：

<b><span className="bg-[linear-gradient(transparent_60%,#93c5fd_60%)] px-1">一是将抽象创意精准“翻译”为剧本、分镜等可执行蓝图的能力；</span></b>  
<b><span className="bg-[linear-gradient(transparent_60%,#93c5fd_60%)] px-1">二是在资源与时间双受限的压力下，驱动项目高质量落地的统筹与执行力。</span></b>

### 2. 反思
由于剧本的核心创意源于我本人，对创意实现的强烈欲望与作为项目负责人的高度责任感驱使我深度参与到各个环节中。这样做虽然保证了作品气质的统一与构思的准确落地，但也使自己负荷过重，且未能完全发挥出团队协作的杠杆效应。

<br/>

> 这段经历让我深刻意识到：优秀的项目领导者不仅需要把控全局，更需要建立信任与明确分工。<b>应当把精力更多地投入在前期共识与关键节点上，平衡好“把控”与“授权”，才能激发团队的集体创造力，从而提升整体协作的效率与质量。</b>`,
    achievements: "校级三等奖 / 播放3000+"
  },
  {
    id: "exp-netease",
    company: "网易新闻·声浪计划 | 社区运营",
    role: "",
    period: "2022.06 – 2022.07",
    overview: "数据驱动提升互动35%，跑通“诊断-测试-优化”迭代模型",
    description: `## 背景与挑战

社区用户发帖频率低、互动分散。<span className="bg-amber-50 border border-amber-200 px-2 py-1 rounded-md text-amber-900 font-medium text-sm mx-1">核心问题：</span>内容供给与用户兴趣错位，导致沉睡用户居多。

---

## 构思与策略

**前提假设**：用户有互动意愿，但是缺乏足够的共鸣且参与门槛低的话题引导。

### 1. 选题策略（数据驱动）
摒弃“拍脑袋”选题，依靠后台数据与轻量分析工具定位兴趣点。

### 2. 互动策略（提升效率）
探索用标准化与半自动化方式提升互动效率及温度。

---

## 行动与结果

### 1. 数据诊断
在运营导师指导下，利用社区后台数据及简易分析工具，对用户发帖、互动行为进行归类分析，初步划分出“职场话题”、“科技讨论”等兴趣群体，并据此在对应活跃时段进行话题推送测试。

### 2. 验证试错
设计为期一周的 A/B 对比测试。在同一时间段，分别推送话题 A “00 后整顿职场”（情感共鸣向）与话题 B “AI 未来预测”（理性探讨向），并控制其他变量基本一致。后续数据分析显示，话题 A 的平均单用户互动次数（如评论、点赞）高出话题 B 约 30%。据此调整了后续话题池，增加了“精神食粮分享”等情感向主题。

### 3. 流程优化
为提升互动效率与一致性，设计整理一份回复建议库，部分借鉴了当时新兴的 AI 对话，提升回复及时性与友好度。

---

## 总结与反思

### 1. 直接结果
后期社区日均互动量得到可见提升。

### 2. 方法论总结
建立一个简易的迭代模型：通过数据诊断发现 **兴趣点**，通过 A/B 测试找到 **高共鸣话题**，再通过工具化 **回复库** 维持稳定互动。

### 3. 不足
项目初期缺乏数据思维，靠“拍脑袋”想选题。后工具摸索阶段因工具使用不熟练，导致分析耗时时长。

### 4. 收获
过于追求分析的“完美”而延迟行动，容易错过测试与迭代的最佳时机。此外，**小步快跑、快速验证** 在迭代速度飞快的互联网运营工作中非常重要。`,
    achievements: "日均互动量提升35% / 方法论沉淀"
  },
  {
    id: "exp-edu",
    company: "曼雷教育 | 授课教师",
    role: "",
    period: "2022.09 – 2023.07",
    overview: "应对艺考改革重构课程体系，学员通过率90%，沉淀教学方法论",
    description: `## 背景与挑战

### 1. 艺考政策改革
影评写作转变为“表演”考核，传统侧重影评理论的教学模式面临实效性挑战。

### 2. 学生需求
学生需要迅速形成可迁移的创作思维与实战能力。

---

## 策略与构思

### 1. 深度研究与趋势提炼
解读艺考改革政策，重点研究北京、上海等前沿地区的教学与考评模式，提炼其核心导向——强调创作全流程实践，注重即兴表达。

### 2. 拆解考点与课程重构
将新增的“表演”考核板块，拆解为“故事构建、角色心理与形体塑造、表演与镜头语言适配”三大能力模块，并融入原有视听语言课程体系。

---

## 行动与难点攻克

### 1. 模式本土化
> **难点**：前沿模式基于更优的生源与资源，直接移植易导致本地学员“消化不良”。
>
> **策略**：教学前期不追求复杂呈现，聚焦夯实故事思维与角色理解两大基石。引入经典舞台剧作为教材，让学员通过观演、拉片，直观理解表演的节奏、动机与层次，为后续镜头前实践打下审美与认知基础。

### 2. 能力整合化
> **难点**：分模块教学易导致知识割裂，需培养学员从分项训练转为综合输出。
>
> **策略**：
> 
> - <span className="text-black">教学中后期设计“主题创作”环节，要求学员以小组为单位，在限定主题及时间内完成“剧本构思—角色研讨—现场表演—镜头拍摄”全流程，并在考核后分享创意与设计。</span>
> - <span className="text-black">学期末两次考核中，在学员剧本基础上临时插入“即兴情景命题”，强制快速整合与现场调用，将被动知识转化为主动创作能力。</span>

---

## 成果与反思

### 1. 直接成果
学员艺考专业通过率达 **90%**，验证教学策略与改革方向精准匹配。

### 2. 反思总结
突如其来的艺考改革于我而言是一次不小的挑战。我汲取在网易项目中“过度规划”的教训，在迅速形成初步课程框架后，立即投入教学实践，用真实反馈调整优化。

<span className="text-slate-400 italic">例如：发现习惯电影快节奏剪辑的学生对长镜头舞台剧教材表现疲劳，立即调整策略，加入熟悉电影素材，将教学重点从“视听分析”转向“角色行为理解”，引导学生对比舞台与电影表演异同。<br/>观察到“即兴表演”对初学者压力过大，便调整至学期末考核，前期设计循序渐进的“情景拓展”作为铺垫。</span>

> 这段经历快速实践了“小步快跑，快速验证”的方法论，锻炼了我快速响应环境变化并提供解决方案的能力，沉淀出一套“前沿研究—迁移转化—环节拆解-融合设计—检验反馈”的方法论。最重要的是，我深刻体会到“创造性转化”的重要性：<b>研究他人的模式不是为了模仿，而是构建适合自己的有效路径。</b>`,
    achievements: "艺考通过率90% / 方法论沉淀"
  },
  {
    id: "exp-agri",
    company: "湛江助农短视频大赛 | 队长",
    role: "",
    period: "2022.11 – 2022.12",
    overview: "《巴黎圣母院》IP跨界，定格动画，播放2.3W+，获最佳创意叙事奖",
    description: `## 背景与挑战

### 1. 内容同质化
常规助农短视频多聚焦产品外观与口感，易陷入叫卖式宣传，难以在年轻群体中建立情感链接与记忆点。

### 2. 现实限制
团队预算、设备及经验有限，实际收到的廉江红橙样品外表并不美观。

---

## 创意与构思

### 1. 构建“价值认同”
放弃“叫卖式宣传”，转作讲述一个能引起年轻人共鸣且兼具趣味性的 **价值观故事**。

### 2. 逆向洞察，重构叙事
针对农产品外观不美观的客观事实，我摒弃了常规的“美化”或回避的思路，转而将这一特征确立为叙事的核心：产品的“外表粗砺不平”与“内里饱满金黄”所形成的天然反差，恰好可以成为 <u>构建深度故事、引发情感共鸣</u> 的独特切入点。

### 3. 创意嫁接，价值升华
基于此，我将产品与《巴黎圣母院》中“卡西莫多”的经典形象进行深度绑定。这一创意嫁接基于三重考量：
- 其一，两者兼具“内在美好品质超越外在表象”的 **价值内核**，形象高度契合；
- 其二，经典 IP 本身具备广泛的 **公众认知基础**，能显著降低创意理解门槛，有效规避广告创意陷入“自说自话”的风险；
- 其三，将产品外观的“不完美”升华为强调“内在美、真诚与信任”的情感隐喻，可助力 **品牌建设** 实现价值升华。

---

## 执行与难点

### 1. 达成团队共识，产出分镜脚本
延续微电影项目中的成功经验。我在前期花费了更多精力向团队阐释清楚我的“卡西莫多-红橙”隐喻，确保每位成员理解我们要共同讲述的“故事内核”，并鼓励成员开展“头脑风暴”，不断优化创意，后产出完整剧本及分镜。

### 2. 技术攻坚与分工
为了控制成本并匹配动画风格，加之团队成员具有动手能力较强的优势，我们选择制作 *定格动画*。在本项目中，我不再像初次带队时那样试图包揽所有环节，而是更侧重前期创意把控、分镜设计与关键节点质量审核，鼓励成员在手工制作微缩场景、道具和逐帧拍摄中发挥各自所长。

---

## 成果与反思

### 1. 直接成果
视频全平台播放量 **2.3W+**，收获有效产品咨询 **20余条**，并荣获“最佳创意叙事奖”。

### 2. 不足与反思
我在本次实践中更侧重于创意策划与叙事框架的构建，但在拍摄执行与后期剪辑的具体环节上介入不足，导致团队在视觉精细化表现上存在提升空间。<b>最终成片的技术完成度未能完全匹配叙事创意的高度。</b>

> <b>这促使我在后续的学习中，有针对性地强化了在摄影、剪辑等执行层面的实操与品控能力，以确保未来项目在“创意”与“工艺”上都能达到更高标准。</b>`,
    achievements: "播放2.3W+ / 最佳创意叙事奖"
  },
  {
    id: "exp-drama",
    company: "外语文学协会理事",
    role: "",
    period: "2023.03 – 2023.09",
    overview: "从0到1策划戏剧比赛，报名179人，决赛满席，净增关注290+",
    description: `## 背景与挑战

### 1. 认知度为零
校内此前无同类活动，学生对“戏剧比赛”缺乏概念，初期意向调研显示预计报名不足30人。

### 2. 专业性不足
作为学生社团办赛，缺乏专业背书难以吸引高水平参与者。

### 3. 资源有限
无专项经费、无固定宣传渠道、无成熟赛事模板可复用。

---

## 策略与构思<br/><span className="bg-amber-50 border border-amber-200 px-2 py-1 rounded-md text-amber-900 font-medium text-sm mx-1 mt-3 inline-block">我的角色：</span><span className="text-sm font-normal text-slate-600">作为赛事发起者，我主要负责前期宣传，并参与赛制设计。</span>

### 1. 线下宣传为主
校园作为密度高、流动低的传播环境，单纯发推文、张贴海报对学生的触达效率低，远不如直接 **走进人群**，且目标受众为校内学生，校园范围小，线下宣传成本低、可行度高。

### 2. 宣传方向总体上需要贴近网络热点

### 3. 引入外部权威人士
拟邀请协会外语教师及本地剧院编剧担任评委。

### 4. 首届赛事需要兼顾低参与门槛与高质量决赛

---

## 行动与难点攻克

### 1. 打破“戏剧”刻板印象：拒绝强行科普，嫁接网络热点
传统认知中的“戏剧”往往被贴上“高雅艺术”的标签，这种刻板印象容易使缺乏接触的学生群体产生距离感，甚至望而却步。因此，宣传的首要目标就是打破这种刻板印象，让戏剧从“高不可攀”变得“触手可及”。

<b>我的破题思路是：不强行普及戏剧知识，而是主动嫁接学生群体中具有广泛认知度与参与热情的网络热点。</b>

我们将经典的戏剧角色形象与时下流行的“爱的抱抱”、“玫瑰花传递”等校园互动玩法进行创意结合，让戏剧人物走出海报、走进食堂与操场，出现在同学们的日常生活中。

通过这种传播方式，我们将“戏剧”这个陌生概念包裹在亲切、好玩、易于传播的外壳里，<u>完成从“事件好奇”到“活动认知”的转化，为后续的报名引流奠定了基础。</u>

<div className="mt-16"></div>

### 2. 邀请业界人士加入评委团：用“赋能青年创作”而非“帮忙评分”作为沟通话术
为了进一步增加评委团的“含金量”，在指导老师的推荐下，我向本地剧院编剧发出邀请，以“<b>这是一次行业经验反哺校园的机会，希望能得到业界指导</b>”作为总体沟通话术，成功邀请对方加入评委团。并同步邀请协会外语指导教师与具备戏剧背景的教师（共两位）加入评委阵容。

<div className="mt-16"></div>

### 3. 赛制设计需兼顾低门槛与高质量决赛：双赛道+两阶段筛选+多维度评估
比赛设置“经典复刻”与“剧本原创”，分设初赛及决赛，独立评分、独立颁奖，分别制定评审标准。

#### 初赛

| | 复刻赛道 | 原创赛道 |
|---|---|---|
| <b>提交<br/>内容</b> | 5-8 分钟表演视频 | 5-8 分钟表演视频、原创剧本 |
| <b>评审<br/>标准</b> | 表演表现力（60%）、角色理解（30%）、完成度（10%） | 剧本质量（50%）、表演表现力（30%）、整体完成度（20%） |
| <b>理解<br/>检验</b> | 指定核心台词，考察台词情绪处理是否到位。 | 通过剧本本身判断叙事结构与人物塑造。 |

#### 决赛

| | 经典复刻 | 剧本原创 |
|---|---|---|
| <b>现场<br/>演绎</b> | 完整片段（10-15 分钟） | 原创短剧（10-15 分钟） |
| <b>考察<br/>重点</b> | 经典解读的独特性、表演完成度、舞台张力 | 剧本完成度、表演与剧本的匹配度、整体感染力 |

> - <b><i>复刻赛道的设计使比赛参与门槛较低，甚至允许单人报名参赛。</i></b>
> - <b><i>原创赛道也要求参赛者提交表演视频，避免因原创赛道选手表演能力太弱导致决赛现场质量不佳的问题。</i></b>

---

## 直接成果

报名人数从预期不足20人激增至 **179人**，决赛观众席全满，协会公众号新增关注 **290+**，以及赛后调研显示 **85%** 参赛者认可赛事专业性。

---

## 总结与反思

### 1. 收获
这是我首次完整负责一个活动从 0 到 1 的策划与落地，这段经历不仅锻炼了我的传播策划、资源撬动、团队协作与主动解决问题的能力，也让我对“宣传”有了更深了解：<u>宣传不是自说自话的“告知”，而是要把概念翻译成受众能感知、愿参与的具体体验</u>。而这一点恰恰是本次活动的不足之处。

### 2. 反思

#### 传播节奏“前松后紧”
回顾宣传节奏，我意识到最大的疏漏是：预热期与爆发期的界限不够清晰，把宣传做成了“一次性告知”而非“递进式宣传”。

我在活动前三周（紧接快闪互动开始后两天）就开始释放推文和海报，但内容偏“告知型”，缺乏持续钩子留住关注。结果导致第一波推文阅读量尚可，但后续内容未能承接热度。而真正的传播爆发期集中在快闪活动后的一周内，但留给报名转化的窗口期过短，导致部分对活动产生兴趣的学生因中间信息断层而流失。

#### 宣传缺乏“参赛者视角”
我的宣传内容几乎都站在主办方角度：比赛介绍、赛制说明、评委阵容等等，而没有回答潜在参赛者真正关心的问题：“我参加这个比赛能收获什么？”。

虽然此次比赛为首届举办，缺少往届参赛者体验分享，但也可借外部素材，搜集其他高校同类比赛信息，不应该留下空白。`,
    achievements: "报名179人 / 决赛满席 / 净增290+"
  }
];

export const PERSONAL_PHOTOS = [
  {
    src: "/about-me-1.jpg",
    alt: "Lai Huiyi Portrait 1"
  },
  {
    src: "/about-me-2.jpg",
    alt: "Lai Huiyi Portrait 2"
  }
];

export const SYSTEM_INSTRUCTION = `你现在是赖慧怡（Lai Huiyi）的AI数字孪生。
目标是向招聘官展示赖慧怡在内容创作、影像导演和营销推广方面的多重才华。
赖慧怡毕业于岭南师范学院新闻学专业，擅长通过数据洞察与创意整合实现内容增长。
她的核心优势包括：创意（灵感变频器）、执行力（从0到1启动）、跨领域（新闻/教育/数据交叉）。
请用专业、敏锐且富有洞察力的语气回答，体现其“编织故事，注重数据”的核心竞争力。`;
