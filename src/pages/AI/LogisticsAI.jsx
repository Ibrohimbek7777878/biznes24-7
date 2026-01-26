import React, { useState } from "react";
import {
  Truck,
  MapPin,
  Navigation,
  Compass,
  ShieldCheck,
  Zap,
} from "lucide-react";

const LogisticsAI = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-slate-900 italic">
          AI Logistics <span className="text-blue-600">v4.0</span>
        </h1>
        <div className="bg-blue-600 p-2 rounded-xl text-white animate-pulse">
          <Zap size={20} />
        </div>
      </div>

      {/* Marshrut kiritish */}
      <div className="bg-white p-6 rounded-[32px] shadow-sm border border-slate-100 space-y-4">
        <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <MapPin className="text-blue-600" />
          <div className="flex-1">
            <p className="text-[10px] font-bold text-slate-400 uppercase">
              Jo'natish nuqtasi
            </p>
            <input
              className="bg-transparent font-bold text-slate-800 outline-none w-full"
              defaultValue="Toshkent, UZ"
            />
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <MapPin className="text-red-500" />
          <div className="flex-1">
            <p className="text-[10px] font-bold text-slate-400 uppercase">
              Yetkazish nuqtasi
            </p>
            <input
              className="bg-transparent font-bold text-slate-800 outline-none w-full"
              placeholder="Manzilni kiriting..."
            />
          </div>
        </div>
        <button
          onClick={() => {
            setLoading(true);
            setTimeout(() => setLoading(false), 2000);
          }}
          className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl"
        >
          {loading ? "AI tahlil qilmoqda..." : "Optimallashtirish"}
        </button>
      </div>

      {/* AI Natijasi */}
      <div className="bg-blue-600 rounded-[35px] p-7 text-white shadow-2xl relative overflow-hidden">
        <div className="relative z-10 space-y-6">
          <div className="flex justify-between items-center">
            <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-black border border-white/20 uppercase">
              Tavsiya etilgan marshrut
            </span>
            <Compass className="animate-spin-slow" />
          </div>

          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs opacity-60 font-medium">Marshrut ID:</p>
              <h2 className="text-xl font-black">TR-2024-BERLIN</h2>
            </div>
            <div className="text-right">
              <p className="text-xs opacity-60 font-medium">Narx (Est.):</p>
              <h2 className="text-2xl font-black">$3,840.00</h2>
            </div>
          </div>

          <div className="space-y-2">
            <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ duration: 2 }}
                className="h-full bg-green-400"
              />
            </div>
            <p className="text-[10px] font-bold opacity-80 italic">
              Xavfsizlik darajasi: 94% (High Reliability)
            </p>
          </div>
        </div>
        <Truck
          size={150}
          className="absolute -right-10 -bottom-10 opacity-10 -rotate-12"
        />
      </div>
    </div>
  );
};

export default LogisticsAI;
