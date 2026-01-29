import React, { useState } from "react"; // 1. useState import qilindi
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Globe,
  Zap,
  Droplets,
  BarChart3,
  Landmark,
  TrendingUp,
  TrendingDown,
  Flame,
  Award,
  Info,
} from "lucide-react";
// 2. Ishlatilmayotgan chart komponentlari olib tashlandi
import { ResponsiveContainer, BarChart, Bar } from "recharts";
import { useNavigate } from "react-router-dom";

const GlobalMarkets = () => {
  const navigate = useNavigate();
  // Kategoriya nomlari marketData kalitlari bilan bir xil bo'lishi kerak
  const [activeCategory, setActiveCategory] = useState("Valyuta");

  // --- MARKET DATA ---
  const marketData = {
    Valyuta: [
      { pair: "USD/UZS", price: "12,450", change: "+0.2%", trend: "up" },
      { pair: "EUR/UZS", price: "13,520", change: "-0.15%", trend: "down" },
      { pair: "RUB/UZS", price: "138.5", change: "+1.1%", trend: "up" },
      { pair: "CNY/UZS", price: "1,720", change: "0.0%", trend: "neutral" },
      { pair: "GBP/UZS", price: "15,800", change: "+0.4%", trend: "up" },
    ],
    // 3. Kalit so'z "Xom-ashyo"ga o'zgartirildi (UI bilan mos bo'lishi uchun)
    "Xom-ashyo": [
      {
        item: "Oltin (XAU)",
        price: "$2,034",
        change: "+0.8%",
        icon: <Award className="text-yellow-500" />,
      },
      {
        item: "Neft (Brent)",
        price: "$82.4",
        change: "-1.2%",
        icon: <Droplets className="text-blue-500" />,
      },
      {
        item: "Tabiiy Gaz",
        price: "$2.14",
        change: "+2.4%",
        icon: <Flame className="text-orange-500" />,
      },
      {
        item: "Elektr (MWh)",
        price: "$145",
        change: "-0.5%",
        icon: <Zap className="text-yellow-400" />,
      },
    ],
    Sektor: [
      {
        name: "Banklararo Stavka",
        val: "14.2%",
        desc: "Markaziy bank asosiy stavkasi",
      },
      {
        name: "Tizimli Likvidlik",
        val: "Yuqori",
        desc: "Banklararo bozor holati",
      },
      {
        name: "O'rtacha Kredit (%)",
        val: "22.4%",
        desc: "Tijorat banklari o'rtacha foizi",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 font-sans">
      {/* 1. STICKY HEADER */}
      <div className="p-6 bg-white border-b border-slate-100 sticky top-0 z-30 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-slate-50 rounded-xl transition-all"
          >
            <ArrowLeft size={24} className="text-slate-600" />
          </button>
          <h1 className="text-lg font-black text-slate-800 uppercase tracking-tighter">
            Global Bozorlar
          </h1>
        </div>
        <Globe className="text-blue-600 animate-pulse" size={24} />
      </div>

      <div className="p-6 space-y-8">
        {/* 2. CATEGORY TABS */}
        <div className="flex bg-slate-100 p-1 rounded-2xl shadow-inner">
          {["Valyuta", "Xom-ashyo", "Sektor"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-1 py-3 text-[10px] font-black rounded-xl transition-all uppercase tracking-widest ${activeCategory === cat ? "bg-white text-blue-600 shadow-sm" : "text-slate-400"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3. DINAMIK KONTENT */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {/* A. VALYUTA RO'YXATI */}
              {activeCategory === "Valyuta" &&
                marketData.Valyuta.map((item, i) => (
                  <div
                    key={item.pair}
                    className="bg-white p-5 mb-3 rounded-[28px] border border-slate-100 shadow-sm flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl font-bold text-xs">
                        {item.pair.split("/")[0]}
                      </div>
                      <div>
                        <h4 className="font-black text-slate-800 text-sm">
                          {item.pair}
                        </h4>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                          Kurs: {item.price}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`flex items-center justify-end gap-1 font-black text-xs ${item.trend === "up" ? "text-emerald-500" : item.trend === "down" ? "text-rose-500" : "text-slate-400"}`}
                      >
                        {item.trend === "up" ? (
                          <TrendingUp size={14} />
                        ) : (
                          <TrendingDown size={14} />
                        )}
                        {item.change}
                      </div>
                      <p className="text-[9px] text-slate-400 mt-1 uppercase italic">
                        Bashorat: {item.trend === "up" ? "O'sish" : "Tushish"}
                      </p>
                    </div>
                  </div>
                ))}

              {/* B. XOM-ASHYO */}
              {activeCategory === "Xom-ashyo" &&
                marketData["Xom-ashyo"].map((item) => (
                  <div
                    key={item.item}
                    className="bg-white p-6 mb-3 rounded-[32px] border border-slate-100 shadow-sm space-y-4"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-slate-50 rounded-2xl">
                          {item.icon}
                        </div>
                        <h4 className="font-black text-slate-800 text-sm uppercase tracking-tighter">
                          {item.item}
                        </h4>
                      </div>
                      <div className="text-right font-black">
                        <p className="text-lg text-slate-900">{item.price}</p>
                        <span
                          className={`text-[10px] ${item.change.includes("+") ? "text-emerald-500" : "text-rose-500"}`}
                        >
                          {item.change}
                        </span>
                      </div>
                    </div>
                    {/* Sparkline dizayni */}
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "70%" }}
                        className={`h-full ${item.change.includes("+") ? "bg-emerald-400" : "bg-rose-400"}`}
                      />
                    </div>
                  </div>
                ))}

              {/* C. SEKTOR STATISTIKASI */}
              {activeCategory === "Sektor" && (
                <div className="space-y-6">
                  <div className="bg-slate-900 rounded-[35px] p-6 text-white shadow-xl relative overflow-hidden">
                    <h3 className="text-xs font-black uppercase tracking-widest text-blue-400 mb-6 flex items-center gap-2">
                      <Landmark size={16} /> Banklararo Bozor Holati
                    </h3>
                    <div className="space-y-6 relative z-10">
                      {marketData.Sektor.map((s, i) => (
                        <div
                          key={i}
                          className="flex justify-between items-end border-l-2 border-blue-600 pl-4"
                        >
                          <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                              {s.name}
                            </p>
                            <p className="text-xs text-slate-300 mt-1 italic leading-tight">
                              {s.desc}
                            </p>
                          </div>
                          <p className="text-xl font-black text-white">
                            {s.val}
                          </p>
                        </div>
                      ))}
                    </div>
                    <BarChart3
                      size={150}
                      className="absolute -right-10 -bottom-10 opacity-10 -rotate-12"
                    />
                  </div>

                  <div className="p-5 bg-blue-50/50 rounded-3xl border border-blue-100 flex items-start gap-4">
                    <Info size={20} className="text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-[11px] text-slate-600 leading-relaxed italic">
                      AI Tahlili: Banklararo bozorda likvidlik o'tgan haftaga
                      nisbatan 4% ga yaxshilandi.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="text-[9px] text-slate-400 text-center font-bold uppercase tracking-widest italic opacity-60">
          Bloomberg va Markaziy Bank ma'lumotlari asosida tayyorlandi.
        </p>
      </div>
    </div>
  );
};

export default GlobalMarkets;
