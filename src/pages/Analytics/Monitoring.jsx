import React from "react";
import { TrendingUp, TrendingDown, Calendar, Filter } from "lucide-react";

const Monitoring = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-black text-bank-dark">Monitoring</h1>
        <button className="bg-white p-2.5 rounded-xl shadow-sm border border-gray-100 text-gray-500">
          <Filter size={20} />
        </button>
      </div>

      {/* Cash Flow Vizualizatsiyasi (ChTZ 4.2.10.1) */}
      <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-50 overflow-hidden relative">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-gray-800">Pul oqimi (Cash Flow)</h3>
          <div className="flex items-center gap-1 text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md uppercase">
            <Calendar size={12} /> Yanvar
          </div>
        </div>

        <div className="flex items-end justify-between h-32 gap-2 mb-4">
          {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-blue-100 rounded-t-lg relative group"
            >
              <div
                style={{ height: `${h}%` }}
                className="bg-blue-600 rounded-t-lg transition-all duration-1000"
              ></div>
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] font-bold opacity-0 group-hover:opacity-100 transition-opacity bg-bank-dark text-white px-1 rounded italic">
                {h}mln
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 border-t pt-4">
          <div className="flex items-center gap-2">
            <div className="bg-green-50 p-2 rounded-lg text-green-500">
              <TrendingUp size={16} />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase">
                Kirim
              </p>
              <p className="text-sm font-black text-green-600">840.5 mln</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-red-50 p-2 rounded-lg text-red-500">
              <TrendingDown size={16} />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase">
                Chiqim
              </p>
              <p className="text-sm font-black text-red-600">420.2 mln</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitoring;