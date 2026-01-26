import React from "react";
import { Bot, Truck, ShoppingCart, TrendingUp, Sparkles } from "lucide-react";

const AISuite = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 rounded-[40px] text-white shadow-xl shadow-blue-100">
        <Bot size={40} className="mb-4 text-blue-200" />
        <h2 className="text-2xl font-black tracking-tight leading-tight">
          AI Biznes Ekotizimi
        </h2>
        <p className="text-sm opacity-80 mt-2 font-medium">
          Barcha jarayonlarni sun'iy intellekt tahlili asosida boshqaring.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <AICard
          icon={<Truck />}
          label="Logistika"
          desc="Marshrut optimizatsiyasi"
        />
        <AICard icon={<ShoppingCart />} label="Xaridlar" desc="Bozor tahlili" />
        <AICard
          icon={<TrendingUp />}
          label="Depozit"
          desc="Likvidlik tavsiyasi"
        />
        <AICard icon={<Sparkles />} label="Prognoz" desc="Cash-flow tahlili" />
      </div>

      <div className="bg-white p-6 rounded-[32px] border border-blue-50">
        <h4 className="font-bold text-gray-800 flex items-center gap-2 mb-2">
          <Sparkles size={16} className="text-blue-600" /> Bugungi xulosa
        </h4>
        <p className="text-xs text-gray-500 leading-relaxed italic">
          "AI tahlili: Joriy oydagi import shartnomalari bo'yicha valyuta xatari
          4.5% ga oshishi kutilmoqda. Xedjirlashni maslahat beraman."
        </p>
      </div>
    </div>
  );
};

const AICard = ({ icon, label, desc }) => (
  <div className="bg-white p-5 rounded-[28px] border border-gray-100 shadow-sm flex flex-col gap-3 active:bg-blue-50 transition-colors cursor-pointer">
    <div className="text-blue-600">
      {React.cloneElement(icon, { size: 28 })}
    </div>
    <div>
      <h3 className="text-sm font-bold text-gray-900 leading-none">{label}</h3>
      <p className="text-[10px] text-gray-400 mt-1 font-medium">{desc}</p>
    </div>
  </div>
);

export default AISuite;
