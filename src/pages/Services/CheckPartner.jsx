import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Search,
  ShieldCheck,
  AlertTriangle,
  XCircle,
  Info,
  Building2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const CheckPartner = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleScan = () => {
    setLoading(true);
    setTimeout(() => {
      setResult({
        name: "GLOBAL TRADE LOGISTICS MCHJ",
        inn: "301234567",
        status: "Yashil", // Yashil, Sariq, Qizil
        score: 92,
        risks: [
          { type: "Soliq", msg: "Qarzdorlik mavjud emas", safe: true },
          { type: "Sud", msg: "Oxirgi 3 yilda sudlanmagan", safe: true },
          {
            type: "Litsenziya",
            msg: "Litsenziya muddati tugamoqda",
            safe: false,
          },
        ],
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-10">
      <div className="p-6 bg-white border-b border-slate-100 flex items-center gap-4 sticky top-0 z-10">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-slate-50 rounded-xl"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-lg font-black text-slate-800 uppercase tracking-tighter">
          Kontragent Tekshiruvi
        </h1>
      </div>

      <div className="p-6 space-y-6">
        <div className="bg-white p-5 rounded-[30px] shadow-sm border border-slate-100 space-y-4">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
            Hamkor INN raqamini kiriting
          </p>
          <div className="relative">
            <Search
              className="absolute left-4 top-4 text-slate-400"
              size={18}
            />
            <input
              type="number"
              placeholder="301 XXX XXX"
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 transition-all font-bold"
            />
          </div>
          <button
            onClick={handleScan}
            className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[2px] shadow-xl active:scale-95 transition-all"
          >
            AI Skanerlashni boshlash
          </button>
        </div>

        <AnimatePresence>
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center py-10"
            >
              <div className="w-12 h-12 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin"></div>
              <p className="mt-4 text-xs font-bold text-slate-400 uppercase animate-pulse">
                Davlat reestrlaridan qidirilmoqda...
              </p>
            </motion.div>
          )}

          {result && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-[35px] border border-slate-100 shadow-sm text-center">
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-500">
                  <ShieldCheck size={40} />
                </div>
                <h2 className="font-black text-slate-800 leading-tight">
                  {result.name}
                </h2>
                <p className="text-[10px] font-bold text-blue-600 mt-1 uppercase tracking-widest italic">
                  Ishonchlilik darajasi: {result.score}%
                </p>
              </div>

              <div className="space-y-3">
                {result.risks.map((risk, i) => (
                  <div
                    key={i}
                    className="bg-white p-4 rounded-2xl flex items-center justify-between border border-slate-50"
                  >
                    <div className="flex items-center gap-3">
                      {risk.safe ? (
                        <ShieldCheck className="text-emerald-500" size={18} />
                      ) : (
                        <AlertTriangle className="text-orange-500" size={18} />
                      )}
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase">
                          {risk.type}
                        </p>
                        <p className="text-xs font-bold text-slate-700">
                          {risk.msg}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CheckPartner;
