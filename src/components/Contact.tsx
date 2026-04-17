
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 items-center">
          
          <div className="flex flex-col justify-center">
            <div className="inline-block mb-4">
               <span className="text-xl md:text-2xl font-bold text-blue-400 tracking-wide flex items-center gap-2">
                 一起做点有意思的事吧😉
                 <motion.span 
                   animate={{ y: [0, -5, 0] }} 
                   transition={{ repeat: Infinity, duration: 1.5 }}
                   className="inline-block"
                 >
                   ✨
                 </motion.span>
               </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 leading-[0.9] relative z-10">
              <span className="inline-block mr-4">
                LET'S
              </span>
              <br />
              <div className="relative inline-block whitespace-nowrap">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-rose-400 to-blue-500">
                  COLLABORATE
                </span>
              </div>
            </h2>
            
            <p className="text-xl text-slate-400 font-medium max-w-md leading-relaxed">
              目前开放全职机会与项目合作，期待与你碰撞出不一样的火花。
            </p>
          </div>

          <div className="flex flex-col gap-6 relative">
             <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
             
             <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="group bg-slate-800/50 p-6 rounded-3xl border-2 border-slate-700 hover:border-blue-500 transition-all flex items-center gap-6 shadow-[4px_4px_0px_0px_#0f172a] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#2563eb]"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white border-2 border-slate-900 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Mail size={32} strokeWidth={2} />
                </div>
                <div>
                  <p className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">发送邮件</p>
                  <p className="text-xl sm:text-2xl font-black text-white break-all">{PERSONAL_INFO.email}</p>
                </div>
              </a>
              
              <a 
                href={`tel:${PERSONAL_INFO.phone}`}
                className="group bg-slate-800/50 p-6 rounded-3xl border-2 border-slate-700 hover:border-yellow-400 transition-all flex items-center gap-6 shadow-[4px_4px_0px_0px_#0f172a] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#fbbf24]"
              >
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center text-slate-900 border-2 border-slate-900 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">电话 / 微信</p>
                  <p className="text-xl font-bold text-slate-200">{PERSONAL_INFO.phone}</p>
                </div>
              </a>

              <div className="group bg-slate-800/50 p-6 rounded-3xl border-2 border-slate-700 flex items-center gap-6 shadow-[4px_4px_0px_0px_#0f172a] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#f43f5e] transition-all">
                {/* Location logo changed to rose-500 as requested for color harmony (Blue, Yellow, Pink) */}
                <div className="w-16 h-16 bg-rose-500 rounded-2xl flex items-center justify-center text-white border-2 border-slate-900 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-1">所在地</p>
                  <p className="text-xl font-bold text-slate-200">{PERSONAL_INFO.location}</p>
                </div>
              </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-4">
              {/* Branding Logo with Pink background added back at the bottom position */}
              <div className="w-10 h-10 bg-rose-500 rounded-lg flex items-center justify-center text-white border-2 border-white shadow-sm font-black text-sm">
                LH
              </div>
              <div className="text-slate-500 font-bold">
                © 2026 Lai Huiyi. 设计灵感源自数据与创意。
              </div>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
