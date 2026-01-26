import React from "react";
import { Send, Landmark, History, Search, Plus } from "lucide-react";

const Payments = () => {
  const categories = [
    {
      name: "O'z hisoblari",
      icon: <History />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      name: "Hamkorga",
      icon: <Send />,
      color: "bg-orange-100 text-orange-600",
    },
    {
      name: "Byudjetga",
      icon: <Landmark />,
      color: "bg-green-100 text-green-600",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">To'lovlar</h1>
        <button className="bg-blue-600 text-white p-2 rounded-xl shadow-lg">
          <Plus size={24} />
        </button>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-3.5 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="INN yoki Hamkor nomi..."
          className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-100 rounded-2xl outline-none shadow-sm"
        />
      </div>

      <div className="grid grid-cols-3 gap-3">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-3xl flex flex-col items-center gap-3 shadow-sm border border-gray-50"
          >
            <div className={`p-3 rounded-2xl ${cat.color}`}>{cat.icon}</div>
            <span className="text-[10px] font-bold text-center uppercase tracking-tighter text-gray-600 leading-tight">
              {cat.name}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-white p-5 rounded-[32px] shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4">Shablonlar</h3>
        <div className="space-y-4">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="flex items-center justify-between border-b border-gray-50 pb-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-500">
                  S
                </div>
                <div>
                  <p className="text-sm font-bold italic text-gray-800">
                    "Soliq Servis" MCHJ
                  </p>
                  <p className="text-[10px] text-gray-400">
                    123456789 • 20208...
                  </p>
                </div>
              </div>
              <Send size={18} className="text-gray-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Payments;
