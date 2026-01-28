import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  Info,
  Calendar,
  DollarSign,
} from "lucide-react";
import { AreaChart, Area, XAxis, ResponsiveContainer, Tooltip } from "recharts";
import { useNavigate } from "react-router-dom";

const data = [
  { day: "Bugun", val: 12450 },
  { day: "05-feb", val: 12480 },
  { day: "10-feb", val: 12420 },
  { day: "15-feb", val: 12510 },
  { day: "20-feb", val: 12560 },
  { day: "25-feb", val: 12600 },
];

const FXForecast = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="p-6 bg-white border-b border-slate-100 flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-slate-50 rounded-xl"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-lg font-black text-slate-800 uppercase tracking-tighter">
          Valyuta Bashorati
        </h1>
      </div>

      <div className="p-6 space-y-6">
        {/* Bashorat Grafigi */}
        <section className="bg-slate-900 rounded-[35px] p-6 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xs font-black uppercase tracking-widest text-indigo-400">
                USD / UZS Bashorati
              </h3>
              <span className="text-[9px] font-black bg-white/10 px-2 py-1 rounded">
                30 Kunlik
              </span>
            </div>
            <div className="h-44 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorFX" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366F1" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="val"
                    stroke="#818CF8"
                    strokeWidth={3}
                    fill="url(#colorFX)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* AI Maslahati */}
        <div className="bg-white p-6 rounded-[30px] border border-slate-100 shadow-sm space-y-4">
          <div className="flex items-center gap-3 text-emerald-600">
            <TrendingUp size={24} />
            <h4 className="font-black text-sm uppercase">AI Tavsiya qiladi</h4>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed italic">
            "AI tahlillari shuni ko'rsatmoqdaki, kurs 10-fevral atrofida 12,420
            gacha tushishi kutilmoqda. Shartnomalar bo'yicha valyuta xaridini
            shu kunga rejalashtirishni maslahat beramiz."
          </p>
          <div className="pt-4 border-t border-slate-50 flex justify-between">
            <div>
              <p className="text-[9px] font-black text-slate-400 uppercase">
                Hozirgi kurs
              </p>
              <p className="text-base font-black text-slate-800">12,450.00</p>
            </div>
            <div className="text-right">
              <p className="text-[9px] font-black text-slate-400 uppercase">
                Kutilayotgan foyda
              </p>
              <p className="text-base font-black text-emerald-500">+$12,400</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FXForecast;
