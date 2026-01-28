import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Sparkles,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  PieChart as PieChartIcon,
  Wallet,
  ArrowRight,
  Zap,
  Briefcase,
  TrendingDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip as ReTooltip,
} from "recharts";

// --- DATA SETS ---
const chartData = [
  { name: "Du", kirim: 4000, chiqim: 2400 },
  { name: "Se", kirim: 3000, chiqim: 1398 },
  { name: "Ch", kirim: 5000, chiqim: 9800 },
  { name: "Pa", kirim: 2780, chiqim: 3908 },
  { name: "Ju", kirim: 1890, chiqim: 4800 },
];

const xarajatlar = [
  { name: "Soliqlar", value: 400, color: "#6366F1" },
  { name: "Ish haqi", value: 300, color: "#10B981" },
  { name: "Logistika", value: 300, color: "#F59E0B" },
  { name: "Ijara", value: 200, color: "#EF4444" },
];

const investments = [
  {
    id: 1,
    name: "Everest Fleet Expansion",
    category: "O'z biznesingizga",
    roi: "+22%",
    risk: "Past",
    match: "98%",
    desc: "AI tahlili: Hozirgi yuk oqimi bilan yangi 2 ta EV-yuk mashinasi sotib olish xarajatlarni 15% ga kamaytiradi.",
    icon: <TrendingUp className="text-emerald-500" />,
  },
  {
    id: 2,
    name: "Green Energy Project",
    category: "Yashil energiya",
    roi: "+18%",
    risk: "O'rta",
    match: "85%",
    desc: "Omborxona tomiga quyosh panellari o'rnatish orqali elektr xarajatlarini nolga tushirish imkoniyati.",
    icon: <Zap className="text-orange-500" />,
  },
  {
    id: 3,
    name: "Bank Term depoziti",
    category: "Likvid aktiv",
    roi: "+24%",
    risk: "Minimal",
    match: "100%",
    desc: "Xavfsiz tanlov: 400 mln so'mni 1 yillik depozitga qo'yib, kafolatlangan 96 mln so'm foyda olish.",
    icon: <Briefcase className="text-blue-500" />,
  },
];

const AIInsights = () => {
  const navigate = useNavigate();
  const [isAnalyzing, setIsAnalyzing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnalyzing(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // --- SUB-COMPONENT: INVESTMENT SECTION ---
  const InvestmentSection = () => (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between px-1">
        <h3 className="font-black text-slate-800 text-sm uppercase tracking-tighter flex items-center gap-2">
          <Sparkles size={18} className="text-indigo-600" /> AI Sarmoya
          Tavsiyalari
        </h3>
        <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-lg uppercase">
          Sizga moslangan
        </span>
      </div>

      <div className="space-y-4">
        {investments.map((inv) => (
          <div
            key={inv.id}
            className="bg-white rounded-[32px] p-5 shadow-sm border border-slate-100 relative overflow-hidden group active:scale-[0.98] transition-all"
          >
            <div className="absolute top-0 right-0">
              <div className="bg-indigo-600 text-white text-[10px] font-black px-4 py-1.5 rounded-bl-2xl shadow-lg">
                {inv.match} MOS
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-indigo-50 transition-colors">
                {inv.icon}
              </div>
              <div className="flex-1 pr-12">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">
                  {inv.category}
                </p>
                <h4 className="font-bold text-slate-800 text-base">
                  {inv.name}
                </h4>
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-500 leading-relaxed italic border-l-2 border-slate-100 pl-3">
              "{inv.desc}"
            </p>

            <div className="mt-5 pt-4 border-t border-slate-50 flex justify-between items-center">
              <div className="flex gap-4">
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase">
                    ROI
                  </p>
                  <p className="text-sm font-black text-emerald-500">
                    {inv.roi}
                  </p>
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase">
                    Xavf
                  </p>
                  <p className="text-sm font-black text-slate-700">
                    {inv.risk}
                  </p>
                </div>
              </div>
              <button className="bg-slate-900 text-white text-[10px] font-black px-5 py-2.5 rounded-xl hover:bg-indigo-600 transition-colors uppercase tracking-widest shadow-md">
                Investitsiya qilish
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bashorat: Sarmoyadan keyingi natija */}
      <div className="bg-slate-900 rounded-[35px] p-6 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex gap-4 items-center">
          <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center">
            <TrendingUp size={24} className="text-indigo-400" />
          </div>
          <div>
            <p className="text-xs font-bold opacity-60">
              Sarmoyadan keyingi prognoz:
            </p>
            <h4 className="text-lg font-black">Sof foyda +12.4% ga oshadi</h4>
          </div>
        </div>
        <div className="absolute -right-5 -bottom-5 opacity-10">
          <Sparkles size={100} />
        </div>
      </div>
    </motion.section>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 font-sans">
      {/* Header */}
      <div className="p-6 flex items-center gap-4 bg-white border-b border-slate-100 sticky top-0 z-20">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-slate-50 rounded-xl transition-all active:scale-90"
        >
          <ArrowLeft size={24} className="text-slate-600" />
        </button>
        <div>
          <h1 className="text-lg font-bold text-slate-800">AI Analitika</h1>
          <p className="text-[10px] text-indigo-600 font-black uppercase tracking-widest">
            Digital Brain v4.0
          </p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isAnalyzing ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center h-[70vh] p-10 text-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 border-4 border-indigo-100 border-t-indigo-600 rounded-full"
              />
              <Sparkles
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-600 animate-pulse"
                size={32}
              />
            </div>
            <h2 className="mt-8 text-xl font-bold text-slate-800 italic">
              Kompaniya ma'lumotlari skanerlanmoqda...
            </h2>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 space-y-8"
          >
            {/* 1. Moliya sog'lig'i */}
            <div className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100">
              <div className="flex justify-between">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">
                    Kompaniya holati
                  </p>
                  <h2 className="text-xl font-black text-slate-800">
                    Moliya: <span className="text-emerald-500">Barqaror</span>
                  </h2>
                </div>
                <div className="p-3 bg-emerald-50 text-emerald-500 rounded-2xl h-fit">
                  <CheckCircle2 size={24} />
                </div>
              </div>
            </div>

            {/* 2. Cash Flow Chart */}
            <div className="bg-slate-900 rounded-[35px] p-6 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-sm font-bold flex items-center gap-2 mb-6">
                  <TrendingUp size={18} className="text-indigo-400" /> Pul oqimi
                  bashorati
                </h3>
                <div className="h-40 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                      <defs>
                        <linearGradient
                          id="colorKir"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#6366F1"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="#6366F1"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <Area
                        type="monotone"
                        dataKey="kirim"
                        stroke="#818CF8"
                        strokeWidth={3}
                        fill="url(#colorKir)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* 3. Xarajatlar & Alert */}
            <div className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100">
              <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                <PieChartIcon size={18} className="text-rose-500" /> Xarajatlar
                strukturasi
              </h3>
              <div className="flex items-center gap-6">
                <div className="w-1/2 h-32">
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie
                        data={xarajatlar}
                        innerRadius={35}
                        outerRadius={50}
                        dataKey="value"
                      >
                        {xarajatlar.map((entry, index) => (
                          <Cell key={index} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex-1 space-y-2">
                  {xarajatlar.map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between text-[10px] font-bold"
                    >
                      <span className="text-slate-500 uppercase">
                        {item.name}
                      </span>
                      <span className="text-slate-800">{item.value}M</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 p-4 bg-orange-50 border border-orange-100 rounded-2xl flex gap-3 text-orange-700">
                <AlertTriangle size={20} className="shrink-0" />
                <p className="text-[11px] font-medium italic">
                  Logistika xarajatlari me'yordan 12% yuqori.
                </p>
              </div>
            </div>

            {/* --- SARMOYA TAVSIYALARI (YANGI QISMI) --- */}
            <InvestmentSection />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIInsights;
