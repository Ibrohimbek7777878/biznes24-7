import React from "react";
import {
  ArrowLeft,
  Calculator,
  PieChart,
  TrendingDown,
  CheckCircle,
  Info,
  AlertTriangle, // Import qo'shildi
  ShieldCheck,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion"; // Animatsiya uchun

const SmartTax = () => {
  return (
    <div className="max-w-md mx-auto p-6 space-y-6 bg-slate-50 min-h-screen">
      {/* Sarlavha qismi */}
      <div className="flex items-center gap-4">
        <button className="p-2 bg-white rounded-full shadow-sm">
          <ArrowLeft size={20} className="text-slate-600" />
        </button>
        <h1 className="font-bold text-xl text-slate-800">Smart Soliq</h1>
      </div>

      {/* Bo'lim vazifasi (Clarification) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-indigo-600 rounded-[30px] p-6 text-white shadow-xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Calculator size={80} />
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-white/20 rounded-lg">
            <ShieldCheck size={20} className="text-white" />
          </div>
          <h2 className="font-bold text-lg">Smart Soliq nima?</h2>
        </div>
        <p className="text-[12px] opacity-90 leading-relaxed relative z-10">
          Ushbu bo'lim kompaniyangizning tranzaksiyalarini tahlil qilib, soliq
          yukini hisoblaydi va qonuniy soliq imtiyozlaridan foydalanish bo'yicha
          AI maslahatlar beradi.
        </p>
      </motion.div>

      {/* Dinamik tahlil ko'rsatkichi */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
          <PieChart className="text-indigo-500 mb-2" size={20} />
          <p className="text-[10px] text-slate-400 font-bold uppercase">
            Soliq yuki
          </p>
          <p className="text-lg font-black text-slate-800">12%</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
          <TrendingDown className="text-emerald-500 mb-2" size={20} />
          <p className="text-[10px] text-slate-400 font-bold uppercase">
            Tejov
          </p>
          <p className="text-lg font-black text-slate-800">4.2 mln</p>
        </div>
      </div>

      {/* Tahlil natijasi */}
      <div className="bg-white p-6 rounded-[30px] border border-slate-100 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <Zap size={16} className="text-amber-500 fill-amber-500" />
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
            AI Tavsiyasi & Tahlil
          </h3>
        </div>

        <ul className="space-y-6">
          <motion.li whileHover={{ x: 5 }} className="flex gap-4 items-start">
            <div className="p-2 bg-emerald-50 rounded-xl">
              <CheckCircle className="text-emerald-500" size={18} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">
                QQS bo'yicha qoplama
              </p>
              <p className="text-[11px] text-slate-500 leading-tight mt-1">
                Joriy chorak uchun 12.4 mln UZS summani qaytarib olish
                imkoniyati aniqlandi.
              </p>
            </div>
          </motion.li>

          <motion.li whileHover={{ x: 5 }} className="flex gap-4 items-start">
            <div className="p-2 bg-orange-50 rounded-xl">
              <AlertTriangle className="text-orange-500" size={18} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">
                Muddat yaqinlashmoqda
              </p>
              <p className="text-[11px] text-slate-500 leading-tight mt-1">
                Soliq hisoboti topshirishga 4 kun qoldi. Hujjatlarni E-imzo
                orqali tasdiqlang.
              </p>
            </div>
          </motion.li>
        </ul>

        <button className="w-full mt-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-xs shadow-lg active:scale-95 transition-all">
          To'liq hisobotni yuklash
        </button>
      </div>

      {/* Yordamchi yozuv */}
      <div className="flex justify-center items-center gap-2 text-slate-400">
        <Info size={14} />
        <p className="text-[10px] italic">
          Ma'lumotlar real vaqt rejimida yangilanmoqda
        </p>
      </div>
    </div>
  );
};

export default SmartTax;
