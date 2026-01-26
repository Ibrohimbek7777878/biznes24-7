import React from "react";
import { Bot, Send, Sparkles } from "lucide-react";

const AIChat = () => {
  return (
    <div className="flex flex-col h-full space-y-4">
      <div className="flex items-center gap-4 bg-gradient-to-r from-indigo-600 to-blue-700 p-6 rounded-[32px] text-white shadow-xl shadow-blue-100">
        <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md">
          <Bot size={28} />
        </div>
        <div>
          <h2 className="font-bold text-lg">Biznes Assistant</h2>
          <p className="text-xs opacity-70">Sizning moliyaviy tahlilchingiz</p>
        </div>
      </div>

      <div className="flex-1 space-y-4 py-4 overflow-y-auto no-scrollbar">
        <div className="flex justify-start">
          <div className="bg-white p-4 rounded-3xl rounded-tl-none border border-gray-100 shadow-sm max-w-[85%]">
            <p className="text-sm text-gray-700 leading-relaxed">
              Assalomu alaykum! Men sizga moliya tahlili, xarajatlar
              optimizatsiyasi yoki depozit tavsiyalari bo'yicha yordam bera
              olaman.
            </p>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-white p-4 rounded-3xl rounded-tl-none border border-gray-100 shadow-sm max-w-[85%] border-l-4 border-l-blue-600">
            <p className="text-xs font-bold text-blue-600 mb-1 flex items-center gap-1">
              <Sparkles size={12} /> Tahlil natijasi:
            </p>
            <p className="text-sm text-gray-700 italic">
              O'tgan oyga nisbatan elektr energiyasi xarajatlari 15% ga oshgan.
              Tarifni tekshirishni maslahat beraman.
            </p>
          </div>
        </div>
      </div>

      <div className="relative pb-4">
        <input
          type="text"
          placeholder="Savolingizni yozing..."
          className="w-full pl-6 pr-14 py-5 bg-white border border-gray-200 rounded-[24px] shadow-lg outline-none focus:ring-2 focus:ring-blue-600 transition-all"
        />
        <button className="absolute right-3 top-3 bg-blue-600 text-white p-3 rounded-xl shadow-lg active:scale-90 transition-all">
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default AIChat;
