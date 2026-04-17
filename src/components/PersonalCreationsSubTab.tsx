import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../constants';
import { ProjectCategory } from '../types';
import { ArrowRight, X, ExternalLink } from 'lucide-react';
import ImageWithFallback from './ui/ImageWithFallback';

interface ArticleDetail {
  title: string;
  image: string;
  url: string;
}

const PersonalCreationsSubTab: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleDetail | null>(null);

  const projects = PROJECTS.filter(
    (p) => p.category === ProjectCategory.COPYWRITING && p.subCategory === '个人创作'
  );

  const handleReadMore = (title: string, image: string, url: string) => {
    setSelectedArticle({ title, image, url });
  };

  return (
    <div className="space-y-32 py-20">
      {/* Editorial Header */}
      <div className="max-w-4xl mx-auto text-center mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center gap-6 mb-8"
        >
          {/* Yellow vertical light ray */}
          <div className="relative flex flex-col items-center w-[2px] h-36">
            {/* Smooth fading line */}
            <div className="w-full h-full bg-gradient-to-b from-transparent via-yellow-500/50 to-yellow-400" />
            {/* Glowing bright tip at the bottom */}
            <div className="absolute bottom-[-2px] w-[4px] h-[8px] bg-yellow-200 rounded-full shadow-[0_0_12px_4px_rgba(250,204,21,0.8)]" />
            <div className="absolute bottom-[-1px] w-[2px] h-[4px] bg-white rounded-full" />
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-yellow-500/30" />
            <span className="text-[10px] font-black text-yellow-400 uppercase tracking-[0.5em]">SELECTED WORKS</span>
            <div className="w-12 h-px bg-yellow-500/30" />
          </div>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif italic text-white mb-8"
        >
          文字的温度与质感
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          记录思考与灵感，探索影像、社会与文化的交汇点。
        </motion.p>

        {/* Official Accounts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 mt-28"
        >
          {/* Left Account: TICKTICK BOOM (Image on Left) */}
          <div className="flex items-center gap-6 group cursor-pointer">
            <div className="w-11 h-11 rounded-full bg-yellow-500/5 border border-white/20 overflow-hidden flex-shrink-0 shadow-[0_0_15px_rgba(250,204,21,0.05)] group-hover:border-yellow-400/50 group-hover:shadow-[0_0_20px_rgba(250,204,21,0.2)] transition-all duration-500">
              <img 
                src="/ticktick.jpg" 
                alt="TICKTICK BOOM" 
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>
            <div className="text-left">
              <h3 className="text-white font-serif text-xl tracking-[0.15em] mb-2 group-hover:text-yellow-400 transition-colors duration-500">TICKTICK BOOM</h3>
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono text-white/50 uppercase tracking-[0.2em]"><span className="text-white/80 mr-1">4</span> ARTICLES</span>
                <span className="w-0.5 h-0.5 rounded-full bg-white/20" />
                <span className="text-[10px] font-mono text-white/50 uppercase tracking-[0.2em]"><span className="text-white/80 mr-1">27</span> FOLLOWERS</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <div className="block md:hidden w-20 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Right Account: 九十六号媒介研究所 (Image on Right) */}
          <div className="flex items-center gap-6 group cursor-pointer">
            <div className="text-right">
              <h3 className="text-white font-serif text-xl tracking-[0.1em] mb-2 group-hover:text-yellow-400 transition-colors duration-500">九十六号媒介研究所</h3>
              <div className="flex items-center justify-end gap-4">
                <span className="text-[10px] font-mono text-white/70 uppercase tracking-[0.2em]"><span className="text-white/90 mr-1">18</span> ARTICLES</span>
                <span className="w-0.5 h-0.5 rounded-full bg-white/30" />
                <span className="text-[10px] font-mono text-white/70 uppercase tracking-[0.2em]"><span className="text-white/90 mr-1">15</span> FOLLOWERS</span>
              </div>
            </div>
            <div className="w-11 h-11 rounded-full bg-yellow-500/5 border border-white/20 overflow-hidden flex-shrink-0 shadow-[0_0_15px_rgba(250,204,21,0.05)] group-hover:border-yellow-400/50 group-hover:shadow-[0_0_20px_rgba(250,204,21,0.2)] transition-all duration-500">
              <img 
                src="/jiushiliu.jpg" 
                alt="九十六号媒介研究所" 
                className="w-full h-full object-cover grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://picsum.photos/seed/media/200/200';
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Articles List - Refined Wong Kar-wai Style */}
      <div className="max-w-5xl mx-auto mt-64 px-6 flex flex-col gap-32 md:gap-48">
        
        {/* Article 01: 不三不四 */}
        <motion.article 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="group relative flex flex-col md:flex-row gap-16 md:gap-24 items-center md:items-start"
        >
          {/* Sidebar: Number + Image */}
          <div className="relative w-[300px] h-[240px] shrink-0 flex items-end">
            {/* Large Prominent Number */}
            <div className="absolute top-0 left-0 text-[14rem] md:text-[18rem] font-serif font-black text-[#C73D2E]/[0.12] z-0 pointer-events-none select-none leading-none group-hover:text-[#C73D2E]/[0.2] transition-all duration-700">
              01
            </div>

            {/* Image Box - Positioned at the bottom of the number */}
            <div 
              className="relative z-10 w-[283px] h-[90px] overflow-hidden rounded-sm cursor-pointer border border-white/10 group-hover:border-[#C73D2E]/50 transition-all duration-500 shadow-2xl"
              onClick={() => handleReadMore("“不三不四观影团”影片汇总｜第一期", "/article-movie-detail.jpg", "https://mp.weixin.qq.com/s/NUtSzCxF0uWXtJd5GDl6mw")}
            >
              <ImageWithFallback 
                src="/creation-1.jpg" 
                alt="“不三不四观影团”" 
                className="w-full h-full object-cover filter sepia-[0.3] group-hover:sepia-0 group-hover:scale-110 transition-all duration-1000" 
                containerClassName="w-full h-full"
                showLoader={false}
              />
              <div className="absolute bottom-2 left-3 text-[0.6rem] text-white/80 font-sans tracking-[0.2em] uppercase drop-shadow-md">May 04, 2022</div>
            </div>
          </div>

          {/* Content Area */}
          <div className="relative z-10 flex-1 max-w-xl pt-12 md:pt-20">
            <div className="mb-6">
              <h2 
                className="text-2xl md:text-3xl text-white mb-4 font-serif font-medium tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer leading-snug"
                onClick={() => handleReadMore("“不三不四观影团”影片汇总｜第一期", "/article-movie-detail.jpg", "https://mp.weixin.qq.com/s/NUtSzCxF0uWXtJd5GDl6mw")}
              >
                “不三不四观影团”影片汇总｜第一期
              </h2>
              <div className="flex gap-4">
                <span className="text-[0.65rem] text-[#D4AF37] font-sans uppercase tracking-[0.2em] border border-[#D4AF37]/40 px-2 py-0.5 rounded-sm group-hover:border-[#C73D2E] group-hover:text-[#C73D2E] transition-all duration-300">影评合集</span>
                <span className="text-[0.65rem] text-[#D4AF37] font-sans uppercase tracking-[0.2em] border border-[#D4AF37]/40 px-2 py-0.5 rounded-sm group-hover:border-[#C73D2E] group-hover:text-[#C73D2E] transition-all duration-300">电影推荐</span>
              </div>
            </div>

            <div className="relative mb-8">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#C73D2E] group-hover:bg-[#D4AF37] transition-colors duration-500" />
              <div className="text-[1.1rem] leading-relaxed text-[#F0EAD6] italic pl-6 group-hover:text-white transition-colors duration-500">
                “人们将他们的历史、信仰、态度、欲望和梦想铭记在他们创造的形象里。”
              </div>
            </div>

            <p className="text-[0.95rem] leading-relaxed text-[#D1C7BD] mb-8 line-clamp-3 font-sans font-normal tracking-wide">
              “不三不四观影团”成立于公元2021年10月，成员有北少子Charon、海豹CAkou和卡卡Kathy。观影团名字衍生于原“不三不四小分队”的队名，此外，除了“脑袋一热”的突发奇想外，多少还带点自嘲的意思……我们秉持着“娱乐与严肃并重”的观影态度，坚守“观影期间不嗑瓜子、不吃爆米花，可配咖啡、酒精、甜点等一切不发出任何咀嚼声的食物”的原则。
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-white/10 group-hover:border-[#C73D2E]/40 transition-colors duration-500">
              <div className="text-[0.75rem] text-[#A8998A] font-sans italic">Ticktick Boom</div>
              <motion.button 
                animate={{ 
                  y: [0, -8, 0],
                  scale: [1, 1.05, 1],
                  textShadow: ["0 0 0px rgba(199,61,46,0)", "0 0 10px rgba(199,61,46,0.5)", "0 0 0px rgba(199,61,46,0)"]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="group/btn flex items-center gap-2 text-[#C73D2E] font-sans text-[0.85rem] tracking-[0.2em] uppercase font-black hover:text-[#D4AF37] transition-all duration-300 relative"
                onClick={() => handleReadMore("“不三不四观影团”影片汇总｜第一期", "/article-movie-detail.jpg", "https://mp.weixin.qq.com/s/NUtSzCxF0uWXtJd5GDl6mw")}
              >
                <span className="relative z-10">Read More</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform relative z-10" />
                <div className="absolute -inset-x-4 -inset-y-2 bg-[#C73D2E]/5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </div>
          </div>
        </motion.article>

        {/* Article 02: 明星考编 */}
        <motion.article 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="group relative flex flex-col md:flex-row-reverse gap-16 md:gap-24 items-center md:items-start"
        >
          {/* Sidebar: Number + Image */}
          <div className="relative w-[300px] h-[240px] shrink-0 flex items-end justify-end">
            {/* Large Prominent Number */}
            <div className="absolute top-0 right-0 text-[14rem] md:text-[18rem] font-serif font-black text-[#C73D2E]/[0.12] z-0 pointer-events-none select-none leading-none group-hover:text-[#C73D2E]/[0.2] transition-all duration-700 text-right">
              02
            </div>

            {/* Image Box - Positioned at the bottom of the number */}
            <div 
              className="relative z-10 w-[283px] h-[90px] overflow-hidden rounded-sm cursor-pointer border border-white/10 group-hover:border-[#C73D2E]/50 transition-all duration-500 shadow-2xl"
              onClick={() => handleReadMore("明星“考编”何以惹众怒？", "/article-exam-detail.jpg", "https://mp.weixin.qq.com/s/ZbiSFvKwPF6zvTcCDm37SQ")}
            >
              <ImageWithFallback 
                src="/creation-4.jpg" 
                alt="明星“考编”" 
                className="w-full h-full object-cover filter sepia-[0.3] group-hover:sepia-0 group-hover:scale-110 transition-all duration-1000" 
                containerClassName="w-full h-full"
                showLoader={false}
              />
              <div className="absolute bottom-2 left-3 text-[0.6rem] text-white/80 font-sans tracking-[0.2em] uppercase drop-shadow-md">Aug 06, 2022</div>
            </div>
          </div>

          {/* Content Area */}
          <div className="relative z-10 flex-1 max-w-xl text-right md:text-left pt-12 md:pt-20">
            <div className="mb-6">
              <h2 
                className="text-2xl md:text-3xl text-white mb-4 font-serif font-medium tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer leading-snug"
                onClick={() => handleReadMore("明星“考编”何以惹众怒？", "/article-exam-detail.jpg", "https://mp.weixin.qq.com/s/ZbiSFvKwPF6zvTcCDm37SQ")}
              >
                明星“考编”何以惹众怒？
              </h2>
              <div className="flex gap-4 justify-end md:justify-start">
                <span className="text-[0.65rem] text-[#D4AF37] font-sans uppercase tracking-[0.2em] border border-[#D4AF37]/40 px-2 py-0.5 rounded-sm group-hover:border-[#C73D2E] group-hover:text-[#C73D2E] transition-all duration-300">时事评论</span>
                <span className="text-[0.65rem] text-[#D4AF37] font-sans uppercase tracking-[0.2em] border border-[#D4AF37]/40 px-2 py-0.5 rounded-sm group-hover:border-[#C73D2E] group-hover:text-[#C73D2E] transition-all duration-300">社会观察</span>
              </div>
            </div>

            <div className="relative mb-8">
              <div className="absolute right-0 md:left-0 md:right-auto top-0 bottom-0 w-0.5 bg-[#C73D2E] group-hover:bg-[#D4AF37] transition-colors duration-500" />
              <div className="text-[1.1rem] leading-relaxed text-[#F0EAD6] italic pr-6 md:pr-0 md:pl-6 group-hover:text-white transition-colors duration-500">
                “在特权阶级面前，我们每一个普通人都是小镇做题家，没有先天占据的资源优势，只能靠自己打拼出一条路。”
              </div>
            </div>

            <p className="text-[0.95rem] leading-relaxed text-[#D1C7BD] mb-8 line-clamp-3 font-sans font-normal tracking-wide">
              7月8日，中国新闻周刊发布的一篇相关文章《易烊千玺凭什么不能考编？又为什么要考编？》将这个话题度推向高潮。文章先是用“煞有介事”来讽刺网友们对招录程序的质疑，随后又阴阳怪气了一把“小镇做题家”，并抛出“科学家和演员是平等的”观点，对两者明显的收入差距则以一句“社会收入分配自然有市场去调节，有法治去监督”轻飘飘地带过。
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-white/10 group-hover:border-[#C73D2E]/40 transition-colors duration-500">
              <div className="text-[0.75rem] text-[#A8998A] font-sans italic">九十六号媒介研究所</div>
              <motion.button 
                animate={{ 
                  y: [0, -8, 0],
                  scale: [1, 1.05, 1],
                  textShadow: ["0 0 0px rgba(199,61,46,0)", "0 0 10px rgba(199,61,46,0.5)", "0 0 0px rgba(199,61,46,0)"]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="group/btn flex items-center gap-2 text-[#C73D2E] font-sans text-[0.85rem] tracking-[0.2em] uppercase font-black hover:text-[#D4AF37] transition-all duration-300 relative"
                onClick={() => handleReadMore("明星“考编”何以惹众怒？", "/article-exam-detail.jpg", "https://mp.weixin.qq.com/s/ZbiSFvKwPF6zvTcCDm37SQ")}
              >
                <span className="relative z-10">Read More</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform relative z-10" />
                <div className="absolute -inset-x-4 -inset-y-2 bg-[#C73D2E]/5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </div>
          </div>
        </motion.article>

        {/* Article 03: 快乐机器 */}
        <motion.article 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="group relative flex flex-col md:flex-row gap-16 md:gap-24 items-center md:items-start"
        >
          {/* Sidebar: Number + Image */}
          <div className="relative w-[300px] h-[240px] shrink-0 flex items-end">
            {/* Large Prominent Number */}
            <div className="absolute top-0 left-0 text-[14rem] md:text-[18rem] font-serif font-black text-[#C73D2E]/[0.12] z-0 pointer-events-none select-none leading-none group-hover:text-[#C73D2E]/[0.2] transition-all duration-700">
              03
            </div>

            {/* Image Box - Positioned at the bottom of the number */}
            <div 
              className="relative z-10 w-[283px] h-[90px] overflow-hidden rounded-sm cursor-pointer border border-white/10 group-hover:border-[#C73D2E]/50 transition-all duration-500 shadow-2xl"
              onClick={() => handleReadMore("“快乐机器”实体化：少些高高在上的考量，多些设身处地的关怀", "/article-happiness-detail.jpg", "https://mp.weixin.qq.com/s/_jsUpepV9E2WIXNYoVoZTA")}
            >
              <ImageWithFallback 
                src="/creation-2.jpg" 
                alt="“快乐机器”实体化" 
                className="w-full h-full object-cover filter sepia-[0.3] group-hover:sepia-0 group-hover:scale-110 transition-all duration-1000" 
                containerClassName="w-full h-full"
                showLoader={false}
              />
              <div className="absolute bottom-2 left-3 text-[0.6rem] text-white/80 font-sans tracking-[0.2em] uppercase drop-shadow-md">April, 2022</div>
            </div>
          </div>

          {/* Content Area */}
          <div className="relative z-10 flex-1 max-w-xl pt-12 md:pt-20">
            <div className="mb-6">
              <h2 
                className="text-2xl md:text-3xl text-white mb-4 font-serif font-medium tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer leading-snug"
                onClick={() => handleReadMore("“快乐机器”实体化：少些高高在上的考量，多些设身处地的关怀", "/article-happiness-detail.jpg", "https://mp.weixin.qq.com/s/_jsUpepV9E2WIXNYoVoZTA")}
              >
                “快乐机器”实体化：少些高高在上的考量，多些设身处地的关怀
              </h2>
              <div className="flex gap-4">
                <span className="text-[0.65rem] text-[#D4AF37] font-sans uppercase tracking-[0.2em] border border-[#D4AF37]/40 px-2 py-0.5 rounded-sm group-hover:border-[#C73D2E] group-hover:text-[#C73D2E] transition-all duration-300">科技伦理</span>
                <span className="text-[0.65rem] text-[#D4AF37] font-sans uppercase tracking-[0.2em] border border-[#D4AF37]/40 px-2 py-0.5 rounded-sm group-hover:border-[#C73D2E] group-hover:text-[#C73D2E] transition-all duration-300">人文思考</span>
              </div>
            </div>

            <div className="relative mb-8">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#C73D2E] group-hover:bg-[#D4AF37] transition-colors duration-500" />
              <div className="text-[1.1rem] leading-relaxed text-[#F0EAD6] italic pl-6 group-hover:text-white transition-colors duration-500">
                “在面对弱势群体真实的痛苦面前，我们不妨先抛开‘局外人’姿态的冰冷的顾虑考量，多一些真实的同理心和设身处地的关怀。”
              </div>
            </div>

            <p className="text-[0.95rem] leading-relaxed text-[#D1C7BD] mb-8 line-clamp-3 font-sans font-normal tracking-wide">
              今年4月，上海瑞金医院发布临床研究成果称：运用脑机接口技术对神经进行调控，患者术后抑郁症状平均改善超过60%。这一革命性的技术创新对于久处阴霾中的抑郁症患者来说无异于福音，但也引起了大众对于科技伦理的争议与担忧。与主流媒体报道“脑机接口”技术时不吝称赞、满怀信心的态度不同，大多数网友对此持质疑否定态度……
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-white/10 group-hover:border-[#C73D2E]/40 transition-colors duration-500">
              <div className="text-[0.75rem] text-[#A8998A] font-sans italic">九十六号媒介研究所</div>
              <motion.button 
                animate={{ 
                  y: [0, -8, 0],
                  scale: [1, 1.05, 1],
                  textShadow: ["0 0 0px rgba(199,61,46,0)", "0 0 10px rgba(199,61,46,0.5)", "0 0 0px rgba(199,61,46,0)"]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="group/btn flex items-center gap-2 text-[#C73D2E] font-sans text-[0.85rem] tracking-[0.2em] uppercase font-black hover:text-[#D4AF37] transition-all duration-300 relative"
                onClick={() => handleReadMore("“快乐机器”实体化：少些高高在上的考量，多些设身处地的关怀", "/article-happiness-detail.jpg", "https://mp.weixin.qq.com/s/_jsUpepV9E2WIXNYoVoZTA")}
              >
                <span className="relative z-10">Read More</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform relative z-10" />
                <div className="absolute -inset-x-4 -inset-y-2 bg-[#C73D2E]/5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </div>
          </div>
        </motion.article>

        {/* Article 04: 犬之力 */}
        <motion.article 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="group relative flex flex-col md:flex-row-reverse gap-16 md:gap-24 items-center md:items-start"
        >
          {/* Sidebar: Number + Image */}
          <div className="relative w-[300px] h-[240px] shrink-0 flex items-end justify-end">
            {/* Large Prominent Number */}
            <div className="absolute top-0 right-0 text-[14rem] md:text-[18rem] font-serif font-black text-[#C73D2E]/[0.12] z-0 pointer-events-none select-none leading-none group-hover:text-[#C73D2E]/[0.2] transition-all duration-700 text-right">
              04
            </div>

            {/* Image Box - Positioned at the bottom of the number */}
            <div 
              className="relative z-10 w-[283px] h-[90px] overflow-hidden rounded-sm cursor-pointer border border-white/10 group-hover:border-[#C73D2E]/50 transition-all duration-500 shadow-2xl"
              onClick={() => handleReadMore("《犬之力》：对传统男性气质的颠覆与解构", "/article-dog-detail.jpg", "https://mp.weixin.qq.com/s/66BpNn_jujR7NyJIFGpUQg")}
            >
              <ImageWithFallback 
                src="/creation-3.jpg" 
                alt="《犬之力》" 
                className="w-full h-full object-cover filter sepia-[0.3] group-hover:sepia-0 group-hover:scale-110 transition-all duration-1000" 
                containerClassName="w-full h-full"
                showLoader={false}
              />
              <div className="absolute bottom-2 left-3 text-[0.6rem] text-white/80 font-sans tracking-[0.2em] uppercase drop-shadow-md">2022</div>
            </div>
          </div>

          {/* Content Area */}
          <div className="relative z-10 flex-1 max-w-xl text-right md:text-left pt-12 md:pt-20">
            <div className="mb-6">
              <h2 
                className="text-2xl md:text-3xl text-white mb-4 font-serif font-medium tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer leading-snug"
                onClick={() => handleReadMore("《犬之力》：对传统男性气质的颠覆与解构", "/article-dog-detail.jpg", "https://mp.weixin.qq.com/s/66BpNn_jujR7NyJIFGpUQg")}
              >
                《犬之力》：对传统男性气质的颠覆与解构
              </h2>
              <div className="flex gap-4 justify-end md:justify-start">
                <span className="text-[0.65rem] text-[#D4AF37] font-sans uppercase tracking-[0.2em] border border-[#D4AF37]/40 px-2 py-0.5 rounded-sm group-hover:border-[#C73D2E] group-hover:text-[#C73D2E] transition-all duration-300">影评</span>
                <span className="text-[0.65rem] text-[#D4AF37] font-sans uppercase tracking-[0.2em] border border-[#D4AF37]/40 px-2 py-0.5 rounded-sm group-hover:border-[#C73D2E] group-hover:text-[#C73D2E] transition-all duration-300">性别议题</span>
              </div>
            </div>

            <div className="relative mb-8">
              <div className="absolute right-0 md:left-0 md:right-auto top-0 bottom-0 w-0.5 bg-[#C73D2E] group-hover:bg-[#D4AF37] transition-colors duration-500" />
              <div className="text-[1.1rem] leading-relaxed text-[#F0EAD6] italic pr-6 md:pr-0 md:pl-6 group-hover:text-white transition-colors duration-500">
                “有毒的男子气概往往来源于社会的压抑——他们的阳刚之气里带有表演性质。”
              </div>
            </div>

            <p className="text-[0.95rem] leading-relaxed text-[#D1C7BD] mb-8 line-clamp-3 font-sans font-normal tracking-wide">
              有关“性别气质”的讨论在如今许多文艺作品中并不少见。影片《犬之力》反映的正是性别气质中的男性气质，但并不仅仅局限于展示男性气质的外在形式。导演有意将影片中象征着邪恶的“犬之力”隐喻为传统文化中代表刚正的“男子力”，专注于破除无意识的偏见并对男性话语体系完成解构。
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-white/10 group-hover:border-[#C73D2E]/40 transition-colors duration-500">
              <div className="text-[0.75rem] text-[#A8998A] font-sans italic">九十六号媒介研究所</div>
              <motion.button 
                animate={{ 
                  y: [0, -8, 0],
                  scale: [1, 1.05, 1],
                  textShadow: ["0 0 0px rgba(199,61,46,0)", "0 0 10px rgba(199,61,46,0.5)", "0 0 0px rgba(199,61,46,0)"]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="group/btn flex items-center gap-2 text-[#C73D2E] font-sans text-[0.85rem] tracking-[0.2em] uppercase font-black hover:text-[#D4AF37] transition-all duration-300 relative"
                onClick={() => handleReadMore("《犬之力》：对传统男性气质的颠覆与解构", "/article-dog-detail.jpg", "https://mp.weixin.qq.com/s/66BpNn_jujR7NyJIFGpUQg")}
              >
                <span className="relative z-10">Read More</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform relative z-10" />
                <div className="absolute -inset-x-4 -inset-y-2 bg-[#C73D2E]/5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </div>
          </div>
        </motion.article>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="relative w-full max-w-4xl bg-[#0A0A0A] border border-white/5 rounded-sm shadow-2xl h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Info - Sticky at top */}
              <div className="absolute top-0 left-0 right-0 z-30 p-8 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent pointer-events-none">
                <div className="max-w-[70%]">
                  <h2 className="text-sm md:text-base font-serif text-white/60 leading-tight tracking-widest uppercase">
                    {selectedArticle.title}
                  </h2>
                  <div className="w-8 h-px bg-[#C73D2E] mt-3" />
                </div>
              </div>

              {/* Close Button - Sticky at top right */}
              <button 
                className="absolute top-8 right-8 z-40 p-2 bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-all rounded-full border border-white/10"
                onClick={() => setSelectedArticle(null)}
              >
                <X className="w-4 h-4" />
              </button>

              {/* Scrollable Content Area */}
              <div className="flex-1 overflow-y-auto custom-scrollbar pt-24 pb-12 px-4 md:px-0">
                <div className="flex flex-col items-center">
                  {/* Long Image - Narrower width to reduce scroll height */}
                    <div className="w-full md:w-[60%] lg:w-[50%] relative mb-12">
                      <ImageWithFallback 
                        src={selectedArticle.image} 
                        alt={selectedArticle.title} 
                        className="w-full h-auto shadow-[0_0_100px_rgba(0,0,0,0.5)]"
                        containerClassName="w-full rounded-sm"
                        referrerPolicy="no-referrer"
                      />
                    {/* Subtle inner shadow overlay */}
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none" />
                  </div>

                  {/* Minimal Action Button at the bottom of the image */}
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex flex-col items-center gap-4 py-8"
                    onClick={() => window.open(selectedArticle.url, '_blank')}
                  >
                    <div className="flex items-center gap-3 text-[#C73D2E] font-sans text-sm tracking-[0.4em] uppercase font-black group-hover:text-white transition-colors duration-500">
                      阅读原文
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                    </div>
                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C73D2E] to-transparent group-hover:via-white transition-all duration-500" />
                    <span className="text-[9px] text-white/20 font-sans tracking-[0.2em] uppercase">Open in WeChat Browser</span>
                  </motion.button>
                </div>
              </div>

              {/* Film Grain Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-10" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PersonalCreationsSubTab;
