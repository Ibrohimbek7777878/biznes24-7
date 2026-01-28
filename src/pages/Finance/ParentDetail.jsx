import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Building2,
  FileText,
  Download,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const PartnerDetail = () => {
  const navigate = useNavigate();
  // Hamkor ma'lumotlari (Demo)
  const partnerInfo = {
    name: "Orient Express MCHJ",
    inn: "301987654",
    totalSpent: "450,000,000",
    transactions: [
      {
        id: 1,
        contract: "№ 24-AK/2024",
        purpose: "Logistika xizmati (Yanvar)",
        date: "24.01.2024",
        amount: "45,000,000",
        fee: "225,000",
      },
      {
        id: 2,
        contract: "№ 24-AK/2024",
        purpose: "Logistika xizmati (Dekabr)",
        date: "21.12.2023",
        amount: "38,000,000",
        fee: "190,000",
      },
      {
        id: 3,
        contract: "№ 12-B/SH",
        purpose: "Toshkent-Berlin yuk tashish",
        date: "15.11.2023",
        amount: "120,500,000",
        fee: "602,500",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-10 font-sans">
      {/* Header */}
      <div className="p-6 bg-white border-b border-slate-100 sticky top-0 z-30 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-slate-50 rounded-xl transition-all"
        >
          <ArrowLeft size={24} className="text-slate-600" />
        </button>
        <h1 className="text-sm font-black text-slate-800 uppercase tracking-widest">
          Hamkor tafsilotlari
        </h1>
        <div className="w-10"></div>
      </div>

      <div className="p-6 space-y-6">
        {/* Partner Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-[35px] shadow-sm border border-slate-100 text-center"
        >
          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-600 shadow-inner">
            <Building2 size={32} />
          </div>
          <h2 className="text-xl font-black text-slate-800">
            {partnerInfo.name}
          </h2>
          <p className="text-[10px] font-bold text-blue-600 uppercase mt-1">
            INN: {partnerInfo.inn}
          </p>

          <div className="mt-6 pt-6 border-t border-slate-50 flex justify-around">
            <div>
              <p className="text-[9px] font-black text-slate-400 uppercase">
                Jami to'langan
              </p>
              <p className="text-sm font-black text-slate-800">
                {partnerInfo.totalSpent} UZS
              </p>
            </div>
            <div>
              <p className="text-[9px] font-black text-slate-400 uppercase">
                Shartnomalar
              </p>
              <p className="text-sm font-black text-slate-800">2 ta faol</p>
            </div>
          </div>
        </motion.div>

        {/* Transactions List per Contract */}
        <div className="space-y-4">
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[3px] ml-1">
            To'lovlar tarixi
          </h3>

          {partnerInfo.transactions.map((tx, i) => (
            <motion.div
              key={tx.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-5 rounded-[28px] border border-slate-50 shadow-sm space-y-4"
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-slate-50 text-slate-400 rounded-xl">
                    <FileText size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-tighter">
                      Shartnoma {tx.contract}
                    </p>
                    <p className="text-xs font-bold text-slate-800 mt-0.5">
                      {tx.purpose}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-black text-slate-800">
                    -{tx.amount}
                  </p>
                  <p className="text-[9px] text-slate-400 font-medium">
                    {tx.date}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-dashed border-slate-100 flex justify-between items-center text-[10px]">
                <span className="text-orange-500 font-bold uppercase italic tracking-tighter">
                  Ushlangan komissiya (0.5%): -{tx.fee}
                </span>
                <button className="flex items-center gap-1 text-blue-600 font-bold uppercase hover:underline">
                  Kvitansiya <Download size={10} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerDetail;
