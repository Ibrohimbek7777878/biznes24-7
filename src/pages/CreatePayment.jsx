import React, { useState } from "react";
import {
  ArrowLeft,
  Landmark,
  User,
  CreditCard,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const CreatePayment = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Form, 2: Confirmation
  const [amount, setAmount] = useState("");

  // Summani chiroyli formatlash (1000 -> 1 000)
  const formatAmount = (val) => {
    return val.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="p-2 bg-white rounded-xl shadow-sm"
        >
          <ArrowLeft size={20} />
        </button>
        <h2 className="font-bold text-lg">To'lov yaratish</h2>
      </div>

      {step === 1 ? (
        <>
          {/* Recipient Details */}
          <div className="bg-white p-6 rounded-[32px] shadow-sm space-y-4 border border-gray-50">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">
                Qabul qiluvchi STIR (INN)
              </label>
              <div className="relative">
                <User
                  className="absolute left-4 top-3.5 text-gray-400"
                  size={18}
                />
                <input
                  type="number"
                  placeholder="301 234 567"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 transition-all font-bold"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">
                Hisob raqami
              </label>
              <div className="relative">
                <CreditCard
                  className="absolute left-4 top-3.5 text-gray-400"
                  size={18}
                />
                <input
                  type="number"
                  placeholder="2020 8000 ..."
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 transition-all font-mono"
                />
              </div>
            </div>
          </div>

          {/* Amount Input */}
          <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-50 text-center">
            <label className="text-[10px] font-bold text-gray-400 uppercase block mb-4">
              O'tkazma summasi
            </label>
            <div className="flex items-center justify-center gap-2">
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(formatAmount(e.target.value))}
                placeholder="0.00"
                className="text-3xl font-black text-bank-dark outline-none w-full text-center placeholder:text-gray-200"
              />
              <span className="text-xl font-bold text-gray-400 font-display">
                UZS
              </span>
            </div>
            <p className="text-[10px] text-gray-400 mt-2 font-medium italic">
              Komissiya: 0 UZS (Bank ichki)
            </p>
          </div>

          {/* Action Button */}
          <button
            onClick={() => setStep(2)}
            className="w-full bg-blue-600 text-white font-bold py-5 rounded-[24px] shadow-xl shadow-blue-100 flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            Davom etish <ChevronRight size={20} />
          </button>
        </>
      ) : (
        /* Confirmation Step */
        <div className="bg-white p-8 rounded-[40px] shadow-sm space-y-6 animate-in zoom-in-95 duration-300">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto text-blue-600 mb-4">
              <Landmark size={32} />
            </div>
            <h3 className="font-bold text-xl text-gray-900">
              To'lovni tasdiqlang
            </h3>
            <p className="text-3xl font-black text-blue-600">{amount} UZS</p>
          </div>

          <div className="space-y-3 pt-4 border-t border-dashed border-gray-100">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Qabul qiluvchi:</span>{" "}
              <span className="font-bold text-right text-gray-800">
                "EVEREST LOGISTIC" MCHJ
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">STIR:</span>{" "}
              <span className="font-bold tracking-widest text-gray-800">
                301987654
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Maqsadi:</span>{" "}
              <span className="font-bold text-right text-gray-800 italic">
                "Shartnoma №12-sonli to'lov"
              </span>
            </div>
          </div>

          <button
            onClick={() => navigate("/payment-success")}
            className="w-full bg-blue-600 text-white font-bold py-5 rounded-[24px] shadow-xl shadow-blue-100 active:scale-95 transition-all"
          >
            Tasdiqlash va Yuborish
          </button>
          <button
            onClick={() => setStep(1)}
            className="w-full text-gray-400 font-bold py-2 text-sm uppercase tracking-widest"
          >
            Orqaga
          </button>
        </div>
      )}
    </div>
  );
};

export default CreatePayment;
