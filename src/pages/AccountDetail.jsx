import React from "react";
import { ArrowLeft, Download, Filter, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AccountDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 animate-in slide-in-from-right duration-300">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="p-2 bg-white rounded-xl shadow-sm"
        >
          <ArrowLeft size={20} />
        </button>
        <h2 className="font-bold text-lg">Hisob raqam ko'chirmasi</h2>
      </div>

      {/* Account Info Card */}
      <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
          Qoldiq
        </p>
        <h1 className="text-2xl font-black text-bank-dark mb-4">
          1 450 800 250.00 <span className="text-sm font-normal">UZS</span>
        </h1>
        <div className="flex justify-between items-center text-xs text-gray-500 border-t pt-4">
          <span>202080004055...</span>
          <button className="text-blue-600 font-bold flex items-center gap-1 uppercase tracking-tighter">
            <Download size={14} /> PDF Yuklash
          </button>
        </div>
      </div>

      {/* Filter & Search */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Qidiruv..."
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-100 rounded-2xl text-sm outline-none"
          />
        </div>
        <button className="p-3 bg-white border border-gray-100 rounded-2xl text-gray-600">
          <Filter size={20} />
        </button>
      </div>

      {/* Transactions List */}
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="flex justify-between items-center p-2 border-b border-gray-50"
          >
            <div>
              <p className="text-sm font-bold text-gray-800 tracking-tight">
                To'lov: "EnergoShet" MCHJ
              </p>
              <p className="text-[10px] text-gray-400 uppercase font-medium">
                24.01.2024 • 14:00
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-red-600">- 4,250,000</p>
              <p className="text-[9px] text-green-500 font-bold uppercase">
                Muvaffaqiyatli
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountDetail;
