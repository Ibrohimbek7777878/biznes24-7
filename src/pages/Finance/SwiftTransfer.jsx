import React from "react";
import { Globe, ShieldCheck, HelpCircle } from "lucide-react";

const SwiftTransfer = () => {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-bank-dark">SWIFT O'tkazma</h1>
        <Globe size={24} className="text-blue-600" />
      </div>

      <div className="space-y-4">
        {/* Beneficiary Info */}
        <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-50 space-y-4">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-400 uppercase ml-1 flex items-center gap-1">
              Qabul qiluvchi bank SWIFT kodi <HelpCircle size={12} />
            </label>
            <input
              type="text"
              placeholder="BIRTUZ2X"
              className="w-full p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 font-mono font-bold"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-400 uppercase ml-1">
              Xalqaro hisob raqam (IBAN)
            </label>
            <input
              type="text"
              placeholder="UZ96 0000 0000 ..."
              className="w-full p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 font-mono"
            />
          </div>
        </div>

        {/* Amount & Currency */}
        <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-50 text-center">
          <div className="flex justify-center gap-4 mb-4">
            {["USD", "EUR", "CNY"].map((curr) => (
              <button
                key={curr}
                className={`px-4 py-2 rounded-xl text-xs font-black ${curr === "USD" ? "bg-blue-600 text-white shadow-lg shadow-blue-100" : "bg-gray-100 text-gray-400"}`}
              >
                {curr}
              </button>
            ))}
          </div>
          <input
            type="number"
            placeholder="0.00"
            className="text-4xl font-black text-bank-dark outline-none w-full text-center"
          />
          <p className="text-[10px] text-gray-400 mt-2 font-bold uppercase tracking-widest">
            Komissiya: $25.00 (SHA)
          </p>
        </div>

        {/* Security Info */}
        <div className="p-4 bg-emerald-50 rounded-2xl flex items-start gap-3 border border-emerald-100">
          <ShieldCheck className="text-emerald-500 shrink-0" size={20} />
          <p className="text-[10px] text-emerald-700 font-medium leading-relaxed italic">
            Valyuta nazorati talablariga muvofiq, INV-2024 raqamli shartnoma PDF
            formatida ilova qilinishi shart.
          </p>
        </div>

        <button className="w-full bg-bank-dark text-white py-5 rounded-[24px] font-bold shadow-xl active:scale-95 transition-all">
          Hujjatlarni ilova qilish va jo'natish
        </button>
      </div>
    </div>
  );
};

export default SwiftTransfer;
