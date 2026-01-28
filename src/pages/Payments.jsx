import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Building2,
  Wallet,
  ArrowUpRight,
  TrendingUp,
  ArrowDownLeft,
  Calendar,
  Info,
  Zap,
  CheckCircle, // Bu import yetishmayotgan edi
  ChevronRight,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  ResponsiveContainer,
  Tooltip as ReTooltip,
} from "recharts";

const Payments = () => {
  const navigate = useNavigate();
  const [period, setPeriod] = useState("Kun");

  // Grafik ma'lumotlari
  const chartData = {
    Kun: [
      { time: "09:00", value: 120 },
      { time: "12:00", value: 450 },
      { time: "15:00", value: 300 },
      { time: "18:00", value: 840 },
      { time: "21:00", value: 200 },
    ],
    Hafta: [
      { time: "Du", value: 400 },
      { time: "Se", value: 600 },
      { time: "Ch", value: 350 },
      { time: "Pa", value: 900 },
      { time: "Ju", value: 500 },
      { time: "Sh", value: 700 },
      { time: "Ya", value: 840 },
    ],
    Oy: [
      { time: "1-h", value: 2100 },
      { time: "2-h", value: 4500 },
      { time: "3-h", value: 3200 },
      { time: "4-h", value: 5800 },
    ],
    Yil: [
      { time: "Yan", value: 15000 },
      { time: "Fev", value: 22000 },
      { time: "Mar", value: 18000 },
      { time: "Apr", value: 35000 },
    ],
  };

  const stats = {
    Kun: { total: "+840,250,000", fee: "-8,402,500" },
    Hafta: { total: "+2,450,000,000", fee: "-24,500,000" },
    Oy: { total: "+9,800,000,000", fee: "-98,000,000" },
    Yil: { total: "+124,500,000,000", fee: "-1,245,000,000" },
  };

  return (
    <div className="space-y-8 pb-28 font-sans bg-[#F8FAFC] p-4">
      <h1 className="text-2xl font-black text-slate-800 uppercase tracking-tighter pt-4">
        Moliya & Analitika
      </h1>

      {/* SECTION 1: HISOBRAQAMLAR */}
      <section className="space-y-4">
        <h3 className="text-xs font-black text-slate-400 uppercase tracking-[2px] ml-1">
          Mening hisoblarim
        </h3>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          {[
            {
              name: "Asosiy (UZS)",
              balance: "2,840.5 mln",
              color: "bg-blue-600",
              acc: "20208...",
            },
            {
              name: "Valyuta (USD)",
              balance: "$45,200.00",
              color: "bg-slate-800",
              acc: "20201...",
            },
          ].map((acc, i) => (
            <div
              key={i}
              className={`${acc.color} min-w-[260px] p-6 rounded-[32px] text-white shadow-xl active:scale-95 transition-all cursor-pointer`}
            >
              <p className="text-[10px] font-bold opacity-60 uppercase">
                {acc.name}
              </p>
              <h4 className="text-xl font-black mt-2 mb-4">{acc.balance}</h4>
              <p className="text-[10px] font-mono opacity-40">{acc.acc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: BYUDJET TUSHUMLARI GRAFIK */}
      <section className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100">
        <div className="flex justify-between items-center mb-8">
          <h3 className="font-bold text-slate-800 text-sm uppercase">
            Byudjet tushumlari
          </h3>
          <div className="flex bg-slate-100 p-1 rounded-xl">
            {["Kun", "Hafta", "Oy", "Yil"].map((t) => (
              <button
                key={t}
                onClick={() => setPeriod(t)}
                className={`px-3 py-1.5 text-[9px] font-black rounded-lg transition-all ${period === t ? "bg-white text-blue-600 shadow-sm" : "text-slate-400"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="h-36 w-full -ml-4">
          <ResponsiveContainer width="110%" height="100%">
            <AreaChart data={chartData[period]}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563EB" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke="#2563EB"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorValue)"
                animationDuration={1000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 gap-4 border-t border-slate-50 pt-6 mt-4">
          <div>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">
              Jami ({period})
            </p>
            <p className="text-base font-black text-emerald-600">
              {stats[period].total}
            </p>
          </div>
          <div>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic">
              Komissiya (1%)
            </p>
            <p className="text-base font-black text-slate-800">
              {stats[period].fee}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: HAMKORLAR */}
      <section className="space-y-4">
        <h3 className="text-xs font-black text-slate-400 uppercase tracking-[2px] ml-1">
          Hamkorlar bo'yicha tahlil
        </h3>
        <div className="space-y-3">
          {[
            {
              id: 1,
              firm: "Orient Express MCHJ",
              category: "Logistika",
              total: "450.0 mln",
              trend: "+5%",
            },
            {
              id: 2,
              firm: "Apex Tech Group",
              category: "IT Xizmatlar",
              total: "120.5 mln",
              trend: "-2%",
            },
          ].map((partner, i) => (
            <div
              key={i}
              onClick={() => navigate(`/partner-detail/${partner.id}`)}
              className="bg-white p-5 rounded-[28px] flex items-center justify-between border border-slate-100 shadow-sm active:scale-95 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Building2 size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">
                    {partner.firm}
                  </h4>
                  <p className="text-[10px] text-slate-400">
                    {partner.category}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-black text-slate-800">
                  {partner.total}
                </p>
                <span
                  className={`text-[9px] font-bold ${partner.trend.includes("+") ? "text-emerald-500" : "text-rose-500"}`}
                >
                  {partner.trend}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: AI DINAMIK TAKLIF */}
      <section className="bg-indigo-600 rounded-[35px] p-6 text-white shadow-xl shadow-indigo-200 relative overflow-hidden group">
        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-white/20 rounded-lg backdrop-blur-sm">
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
            <CheckCircle size={16} className="text-emerald-400" />
          </div>

          <div>
            <h4 className="font-bold text-sm leading-tight">
              Yangi omborxona uchun imtiyozli kredit (4%) aniqlandi.
            </h4>
            <p className="text-[10px] opacity-70 mt-1 italic">
              Sizning logistika oqimingiz 20% ga oshgani sababli taklif
              etilmoqda.
            </p>
          </div>

          <div className="flex justify-between items-center mt-2">
            <div className="flex -space-x-2">
              <div className="w-7 h-7 rounded-full bg-blue-400 border-2 border-indigo-600 flex items-center justify-center text-[8px] font-bold">
                A
              </div>
              <div className="w-7 h-7 rounded-full bg-indigo-400 border-2 border-indigo-600 flex items-center justify-center text-[8px] font-bold">
                B
              </div>
            </div>
            <button
              onClick={() => navigate("/services/tender-bot")}
              className="bg-white text-indigo-600 text-[10px] font-black px-5 py-2.5 rounded-xl uppercase tracking-tighter active:scale-90 transition-all shadow-lg"
            >
              Batafsil
            </button>
          </div>
        </div>
        <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all"></div>
      </section>
    </div>
  );
};

export default Payments;
