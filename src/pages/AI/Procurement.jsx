import React from "react";
import {
  ShoppingBag,
  Search,
  Star,
  ArrowUpDown,
  CheckCircle,
} from "lucide-react";

const ProcurementAI = () => {
  const vendors = [
    {
      name: "Oasis Logistics",
      price: "4,500,000",
      rating: 4.8,
      reliability: "Yuqori",
    },
    {
      name: "Global Trade MCHJ",
      price: "4,200,000",
      rating: 4.5,
      reliability: "O'rta",
    },
    {
      name: "Apex Supply",
      price: "4,800,000",
      rating: 4.9,
      reliability: "Ekspert",
    },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <h1 className="text-2xl font-black text-bank-dark">AI Xaridlar</h1>

      <div className="relative">
        <Search className="absolute left-4 top-4 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Mahsulot yoki xizmat nomi..."
          className="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-[24px] shadow-sm outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center px-1">
          <h3 className="font-bold text-gray-800 text-sm italic">
            AI tavsiya qilgan yetkazib beruvchilar:
          </h3>
          <ArrowUpDown size={16} className="text-gray-400" />
        </div>

        {vendors.map((v, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-[28px] border border-gray-100 shadow-sm relative overflow-hidden group active:bg-gray-50 transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-bold text-bank-dark">{v.name}</h4>
                <div className="flex items-center gap-1 mt-1 text-orange-500">
                  <Star size={12} fill="currentColor" />
                  <span className="text-[10px] font-black">
                    {v.rating} tahlil asosida
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest leading-none">
                  Narx
                </p>
                <p className="text-lg font-black text-blue-600 leading-tight">
                  {v.price} <span className="text-[10px] font-normal">UZS</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-dashed border-gray-50">
              <CheckCircle size={14} className="text-green-500" />
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">
                Ishonchlilik:{" "}
                <span className="text-green-600">{v.reliability}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcurementAI;
