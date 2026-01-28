import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  ShieldCheck,
  Clock,
  Search,
  Filter,
  Download,
  ChevronRight,
  FileCheck,
  History,
} from "lucide-react";

const Documents = () => {
  const [activeTab, setActiveTab] = useState("Imzolashga");

  const docData = {
    Imzolashga: [
      {
        id: "INV-101",
        title: "Logistika shartnomasi №24",
        partner: "Oasis Tech MCHJ",
        amount: "12,500,000",
        date: "Bugun, 10:30",
        type: "Shartnoma",
      },
      {
        id: "INV-102",
        title: "Schyot-faktura №882",
        partner: "Everest Logistics",
        amount: "4,200,000",
        date: "Kecha, 17:45",
        type: "Faktura",
      },
    ],
    Imzolangan: [
      {
        id: "CRD-201",
        title: "Kredit shartnomasi",
        partner: "Bank BRB",
        amount: "500,000,000",
        date: "22-yanvar",
        type: "Bank",
      },
      {
        id: "RNT-012",
        title: "Ijara hujjati №12",
        partner: "BC Tashkent",
        amount: "15,000,000",
        date: "15-yanvar",
        type: "Ijara",
      },
    ],
  };

  return (
    <div className="space-y-6 pb-28 font-sans bg-[#F8FAFC] p-4">
      <header className="flex justify-between items-center pt-4">
        <h1 className="text-2xl font-black text-slate-800 uppercase tracking-tighter">
          Hujjatlar Markazi
        </h1>
        <div className="p-2 bg-white rounded-xl shadow-sm border border-slate-100">
          <History size={20} className="text-slate-400" />
        </div>
      </header>

      {/* SEARCH */}
      <div className="relative">
        <Search className="absolute left-4 top-3.5 text-slate-400" size={18} />
        <input
          type="text"
          placeholder="Hujjatni qidirish..."
          className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 text-sm"
        />
      </div>

      {/* CUSTOM TAB SELECTOR */}
      <div className="flex p-1.5 bg-slate-200/50 rounded-2xl backdrop-blur-md">
        {["Imzolashga", "Imzolangan", "Barchasi"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 text-[10px] font-black rounded-xl transition-all uppercase tracking-widest ${
              activeTab === tab
                ? "bg-white text-blue-600 shadow-sm"
                : "text-slate-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* DOCUMENT LIST */}
      <div className="space-y-4">
        <AnimatePresence mode="wait">
          {(docData[activeTab] || docData["Imzolashga"]).map((doc, i) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-5 rounded-[30px] border border-slate-100 shadow-sm relative overflow-hidden active:scale-[0.98] transition-all"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-4 rounded-2xl ${activeTab === "Imzolashga" ? "bg-orange-50 text-orange-500" : "bg-emerald-50 text-emerald-500"}`}
                >
                  {activeTab === "Imzolashga" ? (
                    <Clock size={24} />
                  ) : (
                    <FileCheck size={24} />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-slate-800 text-sm tracking-tight">
                      {doc.title}
                    </h4>
                    <span className="text-[8px] font-black bg-slate-50 px-2 py-1 rounded uppercase text-slate-400">
                      {doc.type}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 font-medium mt-1">
                    {doc.partner}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-dashed border-slate-100 flex justify-between items-center">
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase">
                    Summa
                  </p>
                  <p className="text-sm font-black text-slate-800">
                    {doc.amount} UZS
                  </p>
                </div>
                {activeTab === "Imzolashga" ? (
                  <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-lg active:bg-blue-700">
                    <ShieldCheck size={14} /> Imzolash
                  </button>
                ) : (
                  <button className="p-2.5 bg-slate-50 text-slate-400 rounded-xl active:bg-slate-100 transition-all">
                    <Download size={18} />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* AUDIT LOG (HARAKATLAR TARIXI) */}
      <section className="mt-8 space-y-4">
        <h3 className="text-xs font-black text-slate-400 uppercase tracking-[2px] ml-1 flex items-center gap-2">
          <History size={16} /> Hujjatlar aylanishi
        </h3>
        <div className="bg-white p-6 rounded-[35px] border border-slate-100 shadow-sm space-y-6 relative overflow-hidden">
          <div className="absolute left-[35px] top-10 bottom-10 w-0.5 bg-slate-100 border-dashed border-l-2"></div>

          {[
            {
              action: "Imzolandi",
              user: "Direktor (Ibragimov O.T.)",
              time: "Bugun, 10:12",
              doc: "INV-101",
            },
            {
              action: "Rad etildi",
              user: "Buxgalter (Samatova M.)",
              time: "Kecha, 16:45",
              doc: "Faktura №12",
            },
          ].map((log, i) => (
            <div key={i} className="flex gap-4 relative z-10">
              <div
                className={`w-4 h-4 rounded-full border-4 border-white shadow-sm mt-1 ${log.action === "Rad etildi" ? "bg-red-500" : "bg-blue-600"}`}
              ></div>
              <div>
                <p className="text-xs font-black text-slate-800 leading-none">
                  {log.action}: {log.doc}
                </p>
                <p className="text-[10px] text-slate-400 mt-1">{log.user}</p>
                <p className="text-[9px] text-blue-600 font-bold mt-1 uppercase italic">
                  {log.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Documents;
