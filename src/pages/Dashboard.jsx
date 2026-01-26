import React from "react";
import {
  Wallet,
  ArrowUpRight,
  ArrowDownLeft,
  Bot,
  Bell,
  Zap,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center pt-2">
        <div>
          <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
            Xayrli kun,
          </p>
          <h1 className="text-xl font-bold text-[#172b4d]">EVEREST MCHJ</h1>
        </div>
        <div className="relative p-2 bg-white rounded-xl shadow-sm border border-gray-100">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </div>
      </div>
      {/* Xavfsizlik Holati (ChTZ 4.1.6 ga muvofiq) */}
      <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full w-fit">
        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
        <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">
          TLS 1.3 Himoyalangan aloqa
        </span>
      </div>
      {/* 4.2.1 Hisob qoldig'i (Bank Card Style) */}
      <div className="bg-gradient-to-br from-[#0052cc] to-[#0747a6] rounded-[32px] p-6 text-white shadow-xl shadow-blue-200 relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex justify-between items-center opacity-70 mb-8">
            <span className="text-xs font-bold uppercase tracking-[2px]">
              Asosiy Hisob
            </span>
            <Wallet size={20} />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter mb-6">
            2 840 500 000.00{" "}
            <span className="text-sm font-normal opacity-60 ml-1">UZS</span>
          </h2>
          <div className="flex gap-3">
            <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold border border-white/10 italic">
              8600 **** **** 1234
            </span>
            <span className="bg-green-400/20 text-green-300 px-3 py-1 rounded-full text-[10px] font-bold border border-green-400/10">
              +14%
            </span>
          </div>
        </div>
        {/* Dekorativ aylana */}
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* 4.5 AI Tavsiyalar */}
      <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 flex gap-4 shadow-sm">
        <div className="bg-indigo-600 p-2.5 rounded-xl text-white shadow-lg shadow-indigo-100 shrink-0 h-fit">
          <Bot size={22} />
        </div>
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-indigo-900">AI Analitika</h4>
          <p className="text-xs text-indigo-700 leading-relaxed italic">
            "Sizning ish haqi to'lovlari uchun zaxirangiz yetarli. Bo'sh turgan
            400 mln so'mni depozitga qo'yib, 2.4 mln so'm foyda olishingiz
            mumkin."
          </p>
        </div>
      </div>

      {/* Tezkor amallar */}
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3 active:scale-95 transition-all">
          <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
            <Zap size={18} />
          </div>
          <span className="font-bold text-sm text-gray-700">To'lov</span>
        </button>
        <button className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3 active:scale-95 transition-all">
          <div className="bg-green-100 p-2 rounded-lg text-green-600">
            <ArrowDownLeft size={18} />
          </div>
          <span className="font-bold text-sm text-gray-700">Kirim</span>
        </button>
      </div>

      {/* 4.2.2 So'nggi operatsiyalar */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-[#172b4d] text-lg">Operatsiyalar</h3>
          <button className="text-blue-600 text-xs font-bold uppercase">
            Barchasi
          </button>
        </div>
        <div className="space-y-3">
          {[
            {
              name: "Orient Express MCHJ",
              date: "Bugun, 11:20",
              amount: "-45,000,000",
              type: "out",
            },
            {
              name: "Soliq to'lovi: QQS",
              date: "Kecha, 18:45",
              amount: "-12,000,000",
              type: "out",
            },
            {
              name: "Kirim: Korporativ karta",
              date: "Kecha, 15:30",
              amount: "+120,000,000",
              type: "in",
            },
          ].map((tx, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-2xl flex items-center justify-between border border-gray-50 shadow-sm active:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-xl ${tx.type === "in" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}
                >
                  {tx.type === "in" ? (
                    <ArrowDownLeft size={20} />
                  ) : (
                    <ArrowUpRight size={20} />
                  )}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">{tx.name}</p>
                  <p className="text-[10px] text-gray-400 font-medium">
                    {tx.date}
                  </p>
                </div>
              </div>
              <p
                className={`text-sm font-extrabold ${tx.type === "in" ? "text-green-600" : "text-gray-800"}`}
              >
                {tx.amount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
