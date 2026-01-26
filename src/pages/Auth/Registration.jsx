import React from "react";
import { Camera, ShieldCheck, Fingerprint } from "lucide-react";

const Registration = () => {
  return (
    <div className="min-h-screen bg-white p-8 flex flex-col items-center justify-center space-y-8 max-w-[450px] mx-auto">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-black text-bank-dark tracking-tight">
          Biometrik identifikatsiya
        </h2>
        <p className="text-sm text-gray-400 font-medium">
          ChTZ 4.2.1 talabi bo'yicha MyID orqali shaxsingizni tasdiqlang
        </p>
      </div>

      <div className="w-64 h-64 border-4 border-dashed border-blue-100 rounded-full flex items-center justify-center relative">
        <div className="w-56 h-56 bg-gray-50 rounded-full flex items-center justify-center overflow-hidden">
          <Camera size={48} className="text-gray-200" />
        </div>
        <div className="absolute top-0 right-0 bg-blue-600 p-3 rounded-full text-white shadow-xl shadow-blue-200">
          <ShieldCheck size={24} />
        </div>
      </div>

      <button className="w-full bg-blue-600 text-white font-bold py-5 rounded-[24px] shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-all">
        <Fingerprint size={24} /> Skanerlashni boshlash
      </button>

      <p className="text-[10px] text-gray-300 font-bold uppercase tracking-[3px] text-center">
        Identifikatsiya davlat xizmatlari orqali amalga oshiriladi
      </p>
    </div>
  );
};

export default Registration;
