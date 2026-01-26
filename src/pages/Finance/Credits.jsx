import React from "react";
import {
  PieChart,
  Calculator,
  AlertCircle,
  FileText,
  ChevronRight,
} from "lucide-react";

const Credits = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-black text-bank-dark">Kredit xizmatlari</h1>

      {/* Skoring Paneli */}
      <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100 relative overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-gray-800">
            Sizning Skoring darajangiz
          </h3>
          <div className="bg-green-100 text-green-700 text-[10px] font-black px-2 py-1 rounded-md">
            YAXSHI
          </div>
        </div>

        <div className="relative flex justify-center items-center h-24 mb-6">
          <div className="absolute inset-0 flex justify-center">
            <div className="w-48 h-24 border-[12px] border-gray-100 border-b-0 rounded-t-full relative">
              <div className="absolute inset-0 border-[12px] border-blue-600 border-b-0 rounded-t-full rotate-[120deg] origin-bottom transition-all duration-1000"></div>
            </div>
          </div>
          <div className="text-center mt-4">
            <h2 className="text-3xl font-black text-bank-dark">740</h2>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
              ball
            </p>
          </div>
        </div>

        <p className="text-[11px] text-gray-500 text-center italic">
          Siz uchun 2.5 mlrd so'mgacha imtiyozli kredit ajratilishi mumkin.
        </p>
      </div>

      {/* Kredit takliflari */}
      <div className="space-y-3">
        <CreditOffer title="Aylanma mablag' uchun" limit="500 mln" rate="21%" />
        <CreditOffer title="Avtokredit Biznes" limit="800 mln" rate="18%" />
      </div>
    </div>
  );
};

const CreditOffer = ({ title, limit, rate }) => (
  <div className="bg-white p-5 rounded-[28px] flex items-center justify-between border border-gray-50 shadow-sm active:bg-gray-50">
    <div className="flex items-center gap-4">
      <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
        <Calculator size={20} />
      </div>
      <div>
        <h4 className="text-sm font-bold text-gray-800">{title}</h4>
        <p className="text-[10px] text-gray-400 font-medium">
          Limit: {limit} • {rate} yillik
        </p>
      </div>
    </div>
    <ChevronRight size={18} className="text-gray-300" />
  </div>
);

export default Credits;
