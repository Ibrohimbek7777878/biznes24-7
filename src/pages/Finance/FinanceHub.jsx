import React from "react";
import { Globe, RefreshCcw, Landmark, Receipt, ArrowRight } from "lucide-react";

const FinanceHub = () => {
  const services = [
    {
      title: "SWIFT o'tkazmalar",
      desc: "Xalqaro valyuta amaliyotlari",
      icon: <Globe />,
      color: "bg-blue-600",
    },
    {
      title: "Konvertatsiya",
      desc: "USD/EUR/UZS ayriboshlash",
      icon: <RefreshCcw />,
      color: "bg-emerald-600",
    },
    {
      title: "Kreditlar",
      desc: "Biznes uchun aylanma mablag'",
      icon: <Landmark />,
      color: "bg-orange-600",
    },
    {
      title: "Depozitlar",
      desc: "Ortiqcha mablag'ni ko'paytirish",
      icon: <Receipt />,
      color: "bg-purple-600",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-black text-bank-dark">
        Moliyaviy xizmatlar
      </h1>

      <div className="grid grid-cols-1 gap-4">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-[28px] shadow-sm flex items-center gap-4 border border-gray-50 active:scale-98 transition-all cursor-pointer"
          >
            <div className={`${s.color} p-4 rounded-2xl text-white shadow-lg`}>
              {s.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-bank-dark">{s.title}</h3>
              <p className="text-xs text-gray-400 font-medium">{s.desc}</p>
            </div>
            <ArrowRight size={20} className="text-gray-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinanceHub;
