import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Gavel,
  BarChart3,
  Calculator,
  ChevronRight,
  Sparkles,
  Globe,
  Search,
  ArrowUpRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const mainServices = [
    {
      id: "partner-check",
      name: "Kontragent Tekshiruvi",
      desc: "Hamkorning ishonchliligini AI tahlil qiladi",
      icon: <ShieldCheck size={28} />,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      id: "tender-bot",
      name: "AI Tender Bot",
      desc: "Sizga mos davlat xaridlari filtri",
      icon: <Gavel size={28} />,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
    {
      id: "fx-forecast",
      name: "Valyuta Bashorati",
      desc: "Kelgusi 30 kunlik kurs o'zgarishi",
      icon: <Globe size={28} />,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      id: "tax-calc",
      name: "Smart Soliq",
      desc: "Xarajatlarni optimallashtirish",
      icon: <Calculator size={28} />,
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 font-sans p-4 space-y-8">
      {/* Header */}
      <header className="px-2 pt-4">
        <h1 className="text-2xl font-black text-slate-800 uppercase tracking-tighter">
          Biznes Servislar
        </h1>
        <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">
          Ekotizim imkoniyatlari
        </p>
      </header>

      {/* 1. KONTUR / REYTING (IT PARK WOW EFFECT) */}
      <section className="bg-slate-900 rounded-[35px] p-6 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col h-full justify-between">
          <div className="flex justify-between items-start">
            <div className="bg-white/10 p-2 rounded-xl border border-white/10 italic">
              <Sparkles size={20} className="text-indigo-300" />
            </div>
            <span className="text-[9px] font-black bg-emerald-500 px-2 py-1 rounded-lg uppercase">
              Premium Access
            </span>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-bold">Kompaniya Reytingi</h2>
            <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest">
              Soliq va moliya intizomi asosida
            </p>
            <div className="flex items-end gap-2 mt-4">
              <span className="text-4xl font-black text-emerald-400">A+</span>
              <span className="text-xs font-bold text-slate-400 mb-1 italic">
                94/100 ball
              </span>
            </div>
          </div>
        </div>
        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-blue-600 rounded-full blur-[90px] opacity-30"></div>
      </section>

      {/* 2. ASOSIY SERVISLAR GRID */}
      <div className="grid grid-cols-1 gap-4">
        {mainServices.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => navigate(`/services/${service.id}`)}
            className="bg-white p-5 rounded-[30px] border border-slate-100 shadow-sm flex items-center justify-between active:scale-[0.98] transition-all cursor-pointer group"
          >
            <motion.div
              onClick={() => navigate(`/services/${service.id}`)} // Marshrutga yo'naltirish
              className="..."
            ></motion.div>
            <div className="flex items-center gap-4">
              <div
                className={`p-4 rounded-2xl ${service.bg} ${service.color} group-hover:scale-110 transition-transform`}
              >
                {service.icon}
              </div>
              <div>
                <h4 className="font-extrabold text-slate-800 text-sm">
                  {service.name}
                </h4>
                <p className="text-[10px] text-slate-400 font-medium mt-0.5">
                  {service.desc}
                </p>
              </div>
            </div>
            <div className="p-2 bg-slate-50 rounded-xl text-slate-300 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all">
              <ChevronRight size={20} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. AI TENDER BILDIRISHNOMASI */}
      <section className="bg-indigo-50 border border-indigo-100 rounded-[30px] p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-indigo-600 text-white rounded-lg animate-pulse">
            <Gavel size={18} />
          </div>
          <h3 className="text-xs font-black text-indigo-900 uppercase italic">
            Tender Taklifi (AI)
          </h3>
        </div>
        <div className="space-y-3">
          <div className="bg-white/60 p-3 rounded-2xl border border-white">
            <p className="text-[11px] font-bold text-slate-800 italic">
              "Logistika xizmati bo'yicha yangi tender aniqlandi (№8412). 92%
              moslik."
            </p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-[9px] font-black text-indigo-600 uppercase">
                Byudjet: 1.2 mlrd
              </span>
              <button className="text-[9px] font-black bg-indigo-600 text-white px-3 py-1 rounded-lg">
                Ko'rish
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
