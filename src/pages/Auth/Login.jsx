import React from "react";
import { ShieldCheck, Lock, User, QrCode } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-between p-8 max-w-[450px] mx-auto shadow-2xl">
      <div className="w-full flex flex-col items-center mt-12">
        <div className="bg-blue-600 p-5 rounded-3xl text-white shadow-xl shadow-blue-200 mb-6">
          <ShieldCheck size={48} strokeWidth={1.5} />
        </div>
        <h1 className="text-3xl font-extrabold text-bank-dark">Biznes 24/7</h1>
        <p className="text-gray-400 mt-2 font-medium">
          Bank rivojlanish biznesi
        </p>
      </div>
      <div className="w-full space-y-5">
        <div className="relative">
          <User className="absolute left-4 top-4 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Foydalanuvchi nomi"
            className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 transition-all"
          />
        </div>
        <div className="relative">
          <Lock className="absolute left-4 top-4 text-gray-400" size={20} />
          <input
            type="password"
            placeholder="Parol"
            className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 transition-all"
          />
        </div>
        <button
          onClick={() => navigate("/otp")}
          className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-200 active:scale-95 transition-all"
        >
          Kirish
        </button>
        <button className="w-full flex items-center justify-center gap-2 py-4 border-2 border-dashed border-gray-200 rounded-2xl text-gray-500 font-bold hover:bg-gray-50 transition-all">
          <QrCode size={20} /> QR orqali kirish
        </button>
      </div>
      <p className="text-xs text-gray-400 font-medium pb-4 uppercase tracking-widest">
        Secure Banking v4.0
      </p>
      // Login.jsx ichidagi FaceID qismidan pastga qo'shing
      <div className="mt-8 text-center space-y-1">
        <p className="text-[10px] text-slate-400 font-medium">
          Oxirgi kirish: 24.01.2024, 14:20
        </p>
        <p className="text-[10px] text-slate-400 font-medium tracking-tighter">
          IP manzil: 178.218.201.14 (Toshkent, UZ)
        </p>
      </div>
    </div>
  );
};

export default Login;
