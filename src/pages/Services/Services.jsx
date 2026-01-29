import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Gavel,
  Globe,
  Calculator,
  ChevronRight,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// 1. BU KOMPONENTNI ALOHIDA ANIQLASH KERAK (XATONI TUZATISH):
const ServiceCard = ({ icon, name, desc, color, onClick }) => (
  <motion.div
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="bg-white p-5 rounded-[30px] border border-slate-100 shadow-sm flex flex-col gap-4 active:bg-slate-50 transition-all cursor-pointer group"
  >
    <div
      className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}
    >
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <div>
      <h4 className="text-sm font-black text-slate-800 leading-tight">
        {name}
      </h4>
      <p className="text-[9px] text-slate-400 font-bold uppercase mt-1 leading-tight">
        {desc}
      </p>
    </div>
  </motion.div>
);

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-24">
      <header className="px-2 pt-4">
        <h1 className="text-2xl font-black text-slate-800 uppercase tracking-tighter">
          Biznes Servislar
        </h1>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[3px] mt-1 text-blue-600 font-mono">
          Enterprise Ecosystem v4.0
        </p>
      </header>

      {/* 2. KOMPANIYA REYTINGI (IT PARK WOW EFFECT) */}
      <section className="bg-slate-900 rounded-[35px] p-6 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-6">
            <div className="bg-emerald-500 text-[8px] font-black px-2 py-1 rounded uppercase tracking-widest text-white shadow-lg shadow-emerald-500/20">
              Ishonchli Hamkor
            </div>
            <Sparkles size={18} className="text-indigo-400 animate-pulse" />
          </div>
          <p className="text-[10px] font-bold opacity-50 uppercase tracking-[2px]">
            Sizning bankdagi reytingingiz
          </p>
          <div className="flex items-end gap-3 mt-2">
            <h2 className="text-5xl font-black text-emerald-400 tracking-tighter">
              A+
            </h2>
            <div className="mb-1">
              <div className="flex text-orange-400 mb-1 gap-0.5">
                <Star size={10} fill="currentColor" />
                <Star size={10} fill="currentColor" />
                <Star size={10} fill="currentColor" />
                <Star size={10} fill="currentColor" />
                <Star size={10} fill="currentColor" />
              </div>
              <p className="text-[10px] font-bold opacity-70 italic text-white/80">
                94/100 ball
              </p>
            </div>
          </div>
        </div>
        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-blue-600 rounded-full blur-[90px] opacity-30"></div>
      </section>

      {/* 3. SERVISLAR GRIDI (NAVIGATSIYA BILAN) */}
      <div className="grid grid-cols-2 gap-4">
        <ServiceCard
          onClick={() => navigate("/services/partner-check")}
          icon={<ShieldCheck className="text-blue-600" />}
          name="Kontragent"
          desc="Hamkorni tekshirish"
          color="bg-blue-50"
        />
        <ServiceCard
          onClick={() => navigate("/services/tender-bot")}
          icon={<Gavel className="text-indigo-600" />}
          name="Tender Bot"
          desc="Yangi xaridlar"
          color="bg-indigo-50"
        />
        <ServiceCard
          onClick={() => navigate("/services/fx-forecast")}
          icon={<Globe className="text-emerald-600" />}
          name="Global Bozor"
          desc="Valyuta, Oltin, Neft"
          color="bg-emerald-50"
        />
        <ServiceCard
          onClick={() => navigate("/services/tax-calc")}
          icon={<Calculator className="text-orange-600" />}
          name="Smart Soliq"
          desc="Optimallashtirish"
          color="bg-orange-50"
        />
      </div>

      {/* 4. AI DINAMIK TAKLIF (WOW EFFECT) */}
      <section className="bg-indigo-600 rounded-[35px] p-6 text-white shadow-xl relative overflow-hidden group">
        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex justify-between items-center text-white/90">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-white/20 rounded-lg backdrop-blur-sm shadow-inner">
                <Zap
                  size={14}
                  className="text-yellow-300"
                  fill="currentColor"
                />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest">
                AI Sarmoya Taklifi
              </span>
            </div>
            <ChevronRight size={16} className="text-white/40" />
          </div>

          <div>
            <h4 className="font-black text-sm leading-tight">
              Yangi omborxona uchun imtiyozli kredit (4%) aniqlandi.
            </h4>
            <p className="text-[10px] opacity-70 mt-2 italic leading-relaxed">
              Sizning logistika oqimingiz 20% ga oshgani sababli tizim buni
              avtomatik tavsiya qilmoqda.
            </p>
          </div>

          <div className="flex justify-between items-center mt-2 border-t border-white/10 pt-4">
            <div className="flex -space-x-2">
              <div className="w-7 h-7 rounded-full bg-blue-400 border-2 border-indigo-600 flex items-center justify-center text-[8px] font-black shadow-lg">
                BRB
              </div>
              <div className="w-7 h-7 rounded-full bg-indigo-400 border-2 border-indigo-600 flex items-center justify-center text-[8px] font-black shadow-lg">
                AI
              </div>
            </div>
            <button
              onClick={() => navigate("/services/tender-bot")}
              className="bg-white text-indigo-600 text-[10px] font-black px-5 py-2.5 rounded-xl uppercase tracking-tighter active:scale-90 transition-all shadow-xl shadow-indigo-900/20"
            >
              Batafsil ko'rish
            </button>
          </div>
        </div>
        <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
      </section>
    </div>
  );
};

export default Services;
