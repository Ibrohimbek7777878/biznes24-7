import React from "react";
import { CheckCircle2, Share2, FileText, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8 space-y-8 animate-in fade-in duration-700">
      <div className="relative">
        <div className="absolute inset-0 bg-green-100 rounded-full scale-150 blur-2xl opacity-50 animate-pulse"></div>
        <CheckCircle2
          size={100}
          className="text-green-500 relative z-10"
          strokeWidth={1.5}
        />
      </div>

      <div className="text-center space-y-2 relative z-10">
        <h1 className="text-3xl font-black text-gray-900 tracking-tight">
          Muvaffaqiyatli!
        </h1>
        <p className="text-gray-500 font-medium">
          To'lov qabul qilindi va ishlovga yuborildi
        </p>
      </div>

      {/* Check Details */}
      <div className="w-full bg-gray-50 border border-gray-100 rounded-[32px] p-6 space-y-4">
        <div className="flex justify-between items-center text-xs text-gray-400 font-bold uppercase tracking-widest">
          <span>Tranzaksiya ID:</span>
          <span className="text-gray-900">#TR-882941</span>
        </div>
        <div className="h-[1px] bg-gray-200 border-dashed border-t"></div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500 italic uppercase">Sana:</span>
          <span className="text-sm font-bold">24.01.2024, 17:45</span>
        </div>
      </div>

      {/* Actions */}
      <div className="w-full grid grid-cols-2 gap-4">
        <button className="flex flex-col items-center justify-center gap-2 p-4 bg-blue-50 text-blue-600 rounded-3xl font-bold text-xs transition-all active:scale-95 shadow-sm shadow-blue-50">
          <Share2 size={20} /> Ulashish
        </button>
        <button className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-50 text-gray-600 rounded-3xl font-bold text-xs transition-all active:scale-95 shadow-sm">
          <FileText size={20} /> Kvitansiya
        </button>
      </div>

      <button
        onClick={() => navigate("/")}
        className="w-full bg-bank-dark text-white font-bold py-5 rounded-[24px] shadow-xl flex items-center justify-center gap-2 active:scale-95 transition-all"
      >
        <Home size={20} /> Asosiy ekranga qaytish
      </button>
    </div>
  );
};

export default SuccessPage;
