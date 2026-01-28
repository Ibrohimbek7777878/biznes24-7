import React from "react";
import {
  Sparkles,
  AlertCircle,
  TrendingUp,
  FileCheck,
  ShieldCheck,
  ArrowRight,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";

// Bashorat ma'lumotlari
const forecastData = [
  { day: "25-yan", bal: 2840 },
  { day: "27-yan", bal: 2600 },
  { day: "29-yan", bal: -120 }, // Kassa uzilishi riski
  { day: "31-yan", bal: 400 },
  { day: "02-fev", bal: 1200 },
];

const BusinessDemoExtended = () => {
  return (
    <div className="space-y-8 p-1">
      {/* 1. AI LIKVIDLIK BAHOSI (Dashboard uchun yangi blok) */}
      <section className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 text-indigo-600">
            <Sparkles size={20} />
            <h3 className="font-bold text-sm uppercase tracking-tighter italic">
              AI Likvidlik Tahlili
            </h3>
          </div>
          <span className="text-2xl font-black text-indigo-600">
            78<span className="text-xs opacity-40">/100</span>
          </span>
        </div>
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div className="bg-indigo-600 h-full w-[78%] rounded-full shadow-[0_0_8px_rgba(99,102,241,0.6)]"></div>
        </div>
        <p className="mt-4 text-[11px] text-slate-500 italic">
          "AI: Kelgusi 7 kun ichida kassa uzilishi xavfi past. Sizda 400 mln
          so‘m ortiqcha likvidlik bor."
        </p>
      </section>

      {/* 2. CASH FLOW BASHORATI (ChTZ 4.5.1) */}
      <section className="bg-slate-900 rounded-[40px] p-6 text-white shadow-2xl overflow-hidden relative">
        <div className="relative z-10">
          <h3 className="text-lg font-bold mb-1 italic">
            AI Cash Flow Predictor
          </h3>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-6">
            14 kunlik bashorat
          </p>

          <div className="h-40 w-full mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={forecastData}>
                <defs>
                  <linearGradient id="colorBal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366F1" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="bal"
                  stroke="#818CF8"
                  fillOpacity={1}
                  fill="url(#colorBal)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-red-500/20 border border-red-500/30 rounded-2xl p-4 flex gap-3 items-start">
            <AlertCircle className="text-red-400 shrink-0" size={18} />
            <p className="text-xs text-red-100">
              <span className="font-bold">Diqqat:</span> 29-yanvar kuni kassa
              uzilishi kutilmoqda. Tavsiya: Overdraft yoqing.
            </p>
          </div>
        </div>
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-600 rounded-full blur-[100px] opacity-20"></div>
      </section>

      {/* 3. IMZOLASH KUTILAYOTGAN HUJJATLAR (ChTZ 4.4) */}
      <section className="space-y-4">
        <div className="flex justify-between items-center px-1">
          <h3 className="font-black text-slate-800 text-sm uppercase">
            Imzolashga tayyor (ERI)
          </h3>
          <span className="bg-orange-100 text-orange-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
            3 ta yangi
          </span>
        </div>

        <div className="bg-white rounded-[28px] p-5 shadow-sm border border-slate-50 flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
              <FileCheck size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800 tracking-tight">
                Schyot-faktura №102
              </p>
              <p className="text-[10px] text-slate-400">
                "KORZINKA.UZ" MCHJ • 45.5 mln
              </p>
            </div>
          </div>
          <button className="bg-blue-600 text-white p-2 rounded-xl shadow-lg shadow-blue-100 active:scale-90 transition-all">
            <ShieldCheck size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default BusinessDemoExtended;
