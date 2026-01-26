import React from "react";
import {
  MessageSquare,
  PhoneCall,
  Clock,
  ChevronRight,
  PlusCircle,
} from "lucide-react";

const HelpCenter = () => {
  const tickets = [
    {
      id: "T-8821",
      subject: "ERI kalitini yangilash",
      status: "Bajarilmoqda",
      color: "text-blue-600 bg-blue-50",
    },
    {
      id: "T-7650",
      subject: "Valyuta operatsiyasi bo'yicha xato",
      status: "Yopilgan",
      color: "text-green-600 bg-green-50",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-black text-bank-dark">Yordam markazi</h1>
        <button className="bg-blue-600 text-white p-2 rounded-xl shadow-lg">
          <PlusCircle size={22} />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-5 rounded-[32px] text-center border border-gray-100 active:scale-95 transition-all">
          <div className="bg-orange-100 text-orange-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
            <PhoneCall size={22} />
          </div>
          <p className="text-xs font-bold text-gray-800">Qayta qo'ng'iroq</p>
        </div>
        <div className="bg-white p-5 rounded-[32px] text-center border border-gray-100 active:scale-95 transition-all">
          <div className="bg-indigo-100 text-indigo-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
            <MessageSquare size={22} />
          </div>
          <p className="text-xs font-bold text-gray-800">Onlayn chat</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-gray-800 ml-1 flex items-center gap-2">
          <Clock size={18} className="text-gray-400" /> Murojaatlar tarixi
        </h3>

        {tickets.map((t, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-[28px] border border-gray-100 flex items-center justify-between shadow-sm"
          >
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                {t.id}
              </p>
              <h4 className="text-sm font-bold text-gray-800 mt-1">
                {t.subject}
              </h4>
              <div
                className={`mt-3 px-3 py-1 rounded-full text-[9px] font-black uppercase inline-block ${t.color}`}
              >
                {t.status}
              </div>
            </div>
            <ChevronRight size={20} className="text-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpCenter;
