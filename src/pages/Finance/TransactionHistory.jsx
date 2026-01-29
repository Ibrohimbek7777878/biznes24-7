import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  ArrowDownLeft,
  Search,
  Filter,
  Download,
  Calendar,
  Info,
} from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

const TransactionHistory = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get("type") || "chiqim"; // 'chiqim' (to'lovlar) yoki 'kirim'
  const [activeTab, setActiveTab] = useState(typeParam);

  // Demo ma'lumotlar: To'lovlar (Chiqim)
  const payments = [
    {
      id: 1,
      name: "Orient Express MCHJ",
      purpose: "Logistika xizmatlari uchun (INV-88)",
      amount: 45000000,
      fee: 225000,
      feePercent: "0.5%",
      date: "Bugun, 11:20",
      status: "Bajarildi",
    },
    {
      id: 2,
      name: "Soliq to'lovi: QQS",
      purpose: "2024 yil IV-chorak uchun",
      amount: 12000000,
      fee: 0,
      feePercent: "0%",
      date: "Kecha, 18:45",
      status: "Bajarildi",
    },
    {
      id: 3,
      name: "Apex Supply Group",
      purpose: "Ehtiyot qismlar xaridi",
      amount: 8400000,
      fee: 42000,
      feePercent: "0.5%",
      date: "24-yanvar",
      status: "Kutilmoqda",
    },
  ];

  // Demo ma'lumotlar: Kirimlar
  const incomes = [
    {
      id: 1,
      name: "KORZINKA.UZ MCHJ",
      purpose: "Shartnoma №402 bo'yicha to'lov",
      amount: 120000000,
      fee: 1200000,
      feePercent: "1.0%",
      date: "Bugun, 15:30",
      status: "Muvaffaqiyatli",
    },
    {
      id: 2,
      name: "Korporativ karta to'ldirish",
      purpose: "Terminal orqali",
      amount: 45000000,
      fee: 450000,
      feePercent: "1.0%",
      date: "Kecha, 09:12",
      status: "Muvaffaqiyatli",
    },
    {
      id: 3,
      name: "Oasis Tech",
      purpose: "Xizmat ko'rsatish haqi",
      amount: 15600000,
      fee: 156000,
      feePercent: "1.0%",
      date: "22-yanvar",
      status: "Muvaffaqiyatli",
    },
  ];

  const currentData = activeTab === "chiqim" ? payments : incomes;

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20 font-sans">
      {/* 1. Header */}
      <div className="p-6 bg-white border-b border-slate-100 sticky top-0 z-30">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-slate-50 rounded-xl transition-all"
          >
            <ArrowLeft size={24} className="text-slate-600" />
          </button>
          <h1 className="text-lg font-black text-slate-800 uppercase tracking-tighter">
            {activeTab === "chiqim" ? "To'lovlar tarixi" : "Kirimlar tarixi"}
          </h1>
          <button className="p-2 bg-blue-50 text-blue-600 rounded-xl">
            <Download size={20} />
          </button>
        </div>

        {/* 2. Kirim/Chiqim Switcher (Tab) */}
        <div className="flex p-1 bg-slate-100 rounded-2xl">
          <button
            onClick={() => setActiveTab("chiqim")}
            className={`flex-1 py-3 text-xs font-black rounded-xl transition-all uppercase tracking-widest ${activeTab === "chiqim" ? "bg-white text-blue-600 shadow-sm" : "text-slate-400"}`}
          >
            To'lovlar
          </button>
          <button
            onClick={() => setActiveTab("kirim")}
            className={`flex-1 py-3 text-xs font-black rounded-xl transition-all uppercase tracking-widest ${activeTab === "kirim" ? "bg-white text-green-600 shadow-sm" : "text-slate-400"}`}
          >
            Kirimlar
          </button>
        </div>
      </div>
      // Har bir tranzaksiya kartasi ichiga qo'shing:
      <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-50">
        {/* AML Check Indikatori */}
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          <span className="text-[9px] font-black text-slate-400 uppercase">
            AML Tekshiruvi: Xavfsiz
          </span>
        </div>

        {/* Real komissiya */}
        <div className="text-right">
          <p className="text-[9px] font-bold text-rose-500 italic">
            Komissiya: -12,450 UZS
          </p>
        </div>
      </div>
      <div className="p-6 space-y-6">
        {/* 3. Summary Card */}
        <div
          className={`p-6 rounded-[32px] text-white shadow-xl ${activeTab === "chiqim" ? "bg-slate-900" : "bg-emerald-600"}`}
        >
          <div className="flex justify-between items-start opacity-70 mb-4 uppercase text-[10px] font-black tracking-widest">
            <span>
              Umumiy {activeTab === "chiqim" ? "chiqim" : "kirim"} (Yanvar)
            </span>
            <Calendar size={16} />
          </div>
          <h2 className="text-3xl font-black mb-4">
            {activeTab === "chiqim" ? "- 65 400 000" : "+ 180 600 000"}{" "}
            <span className="text-sm font-normal">UZS</span>
          </h2>
          <div className="pt-4 border-t border-white/10 flex justify-between items-center">
            <p className="text-[10px] font-bold opacity-60">
              Jami ushlangan komissiya:
            </p>
            <p className="text-sm font-black text-orange-300">
              {activeTab === "chiqim" ? "267 000" : "1 806 000"} UZS
            </p>
          </div>
        </div>

        {/* 4. Search & Filter */}
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search
              className="absolute left-4 top-3.5 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Qidiruv..."
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 text-sm font-medium"
            />
          </div>
          <button className="p-3.5 bg-white border border-slate-200 rounded-2xl text-slate-600 shadow-sm">
            <Filter size={20} />
          </button>
        </div>

        {/* 5. Transactions List */}
        <div className="space-y-4">
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[3px] ml-1">
            Tranzaksiyalar ro'yxati
          </h3>

          {currentData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-5 rounded-[28px] border border-slate-100 shadow-sm group active:scale-[0.98] transition-all"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-2xl ${activeTab === "chiqim" ? "bg-rose-50 text-rose-600" : "bg-emerald-50 text-emerald-600"}`}
                  >
                    {activeTab === "chiqim" ? (
                      <ArrowUpRight size={22} />
                    ) : (
                      <ArrowDownLeft size={22} />
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-[10px] text-slate-400 font-medium mt-1 uppercase tracking-tighter">
                      {item.date} • {item.status}
                    </p>
                  </div>
                </div>
                <p
                  className={`font-black text-sm ${activeTab === "chiqim" ? "text-slate-800" : "text-emerald-600"}`}
                >
                  {activeTab === "chiqim" ? "-" : "+"}{" "}
                  {item.amount.toLocaleString()}
                </p>
              </div>

              <p className="text-[11px] text-slate-500 italic mb-4 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                "{item.purpose}"
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-dashed border-slate-100">
                <div className="flex items-center gap-1.5 text-orange-600">
                  <Info size={12} />
                  <span className="text-[10px] font-black uppercase">
                    Bank foizi: {item.feePercent}
                  </span>
                </div>
                <p className="text-[11px] font-black text-slate-700 italic">
                  Ushlab qolindi: -{item.fee.toLocaleString()} UZS
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
