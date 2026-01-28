import React from "react";
import {
  ArrowLeft,
  Calculator,
  PieChart,
  TrendingDown,
  CheckCircle,
  Info,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const SmartTax = () => {
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
          Smart Soliq
        </h1>
      </div>

      <div className="p-6 space-y-6">
        {/* Tax Load Dashboard */}
        <section className="bg-white p-6 rounded-[35px] border border-slate-100 shadow-sm text-center">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[3px] mb-4">
            Joriy chorakdagi soliq yuki
          </p>
          <div className="relative inline-flex items-center justify-center mb-6">
            <svg className="w-32 h-32 transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="58"
                stroke="currentColor"
                strokeWidth="12"
                fill="transparent"
                className="text-slate-100"
              />
              <circle
                cx="64"
                cy="64"
                r="58"
                stroke="currentColor"
                strokeWidth="12"
                fill="transparent"
                strokeDasharray={364.4}
                strokeDashoffset={364.4 * 0.3}
                className="text-orange-500"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute flex flex-col">
              <span className="text-2xl font-black text-slate-800">12%</span>
              <span className="text-[8px] font-bold text-slate-400 uppercase">
                Optimal
              </span>
            </div>
          </div>
          <h2 className="text-2xl font-black text-slate-800">
            45,800,000 <span className="text-xs font-normal">UZS</span>
          </h2>
        </section>

        {/* AI Optimization Advice */}
        <div className="bg-orange-50 border border-orange-100 rounded-[30px] p-6 space-y-4">
          <div className="flex items-center gap-3 text-orange-600">
            <TrendingDown size={24} />
            <h4 className="font-black text-sm uppercase italic">
              Soliqni optimallashtirish
            </h4>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed italic">
            "AI tahliliga ko'ra, sizda qoplanadigan QQS miqdori 4.2 mln so'mga
            ko'p bo'lishi mumkin edi. Buxgalteriyaga INV-24 hujjatini kiritishni
            eslatamiz."
          </p>
          <button className="w-full bg-orange-500 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-orange-200 active:scale-95 transition-all">
            Tahlilni PDF yuklash
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmartTax;
