import React from "react";
import {
  Building2,
  FileBarChart,
  Globe,
  MapPin,
  ShieldCheck,
  Download,
} from "lucide-react";

const EnterprisePassport = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <h1 className="text-2xl font-black text-bank-dark">Korxona Pasporti</h1>

      {/* Yuridik ma'lumotlar (ChTZ 4.2.3.1) */}
      <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-2xl text-blue-600">
            <Building2 size={32} />
          </div>
          <div>
            <h2 className="font-bold text-lg leading-tight">
              "EVEREST LOGISTIC" MCHJ
            </h2>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1 text-blue-600">
              INN: 301987654
            </p>
          </div>
        </div>

        <div className="space-y-4 border-t pt-4">
          <DetailRow
            icon={<ShieldCheck size={16} />}
            label="Rahbar"
            value="Ibragimov O.T."
          />
          <DetailRow
            icon={<MapPin size={16} />}
            label="Manzil"
            value="Toshkent sh., Chilonzor t."
          />
          <DetailRow
            icon={<Globe size={16} />}
            label="Holati"
            value="Faol"
            status="success"
          />
        </div>
      </div>

      {/* Moliyaviy tahlil (Forma 1 & Forma 2 - ChTZ 4.2.3.3) */}
      <div className="space-y-4">
        <h3 className="font-bold text-gray-800 ml-1">Moliyaviy hisobotlar</h3>
        <div className="grid grid-cols-2 gap-4">
          <ReportCard title="Buxgalteriya balansi" subtitle="Forma №1" />
          <ReportCard title="Moliyaviy natijalar" subtitle="Forma №2" />
        </div>
      </div>
    </div>
  );
};

const DetailRow = ({ icon, label, value, status }) => (
  <div className="flex justify-between items-center text-sm">
    <div className="flex items-center gap-2 text-gray-400 font-medium">
      {icon} <span>{label}</span>
    </div>
    <span
      className={`font-bold ${status === "success" ? "text-green-500" : "text-bank-dark"}`}
    >
      {value}
    </span>
  </div>
);

const ReportCard = ({ title, subtitle }) => (
  <div className="bg-white p-5 rounded-[28px] border border-gray-100 shadow-sm active:bg-gray-50 transition-all">
    <FileBarChart className="text-blue-600 mb-3" size={24} />
    <h4 className="text-xs font-black text-bank-dark leading-tight">{title}</h4>
    <p className="text-[10px] text-gray-400 mt-1 uppercase font-bold">
      {subtitle}
    </p>
    <button className="mt-4 text-[10px] font-black text-blue-600 flex items-center gap-1 uppercase tracking-tighter">
      <Download size={12} /> Yuklash
    </button>
  </div>
);

export default EnterprisePassport;
