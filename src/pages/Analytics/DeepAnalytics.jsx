import React from "react";
import {
  PieChart,
  TrendingUp,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { motion } from "framer-motion";

const DeepAnalytics = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-black text-slate-900 italic">
        Moliya <span className="text-blue-600">Tahlili</span>
      </h1>

      {/* Main Stats */}
      <div className="grid grid-cols-2 gap-4">
        <StatCard
          label="Daromad"
          value="+124.5 mln"
          color="text-green-600"
          icon={<ArrowUpRight />}
        />
        <StatCard
          label="Xarajat"
          value="-84.2 mln"
          color="text-red-600"
          icon={<ArrowDownRight />}
        />
      </div>

      {/* Interactive Graph Simulation */}
      <div className="bg-white p-6 rounded-[35px] shadow-sm border border-slate-50">
        <div className="flex justify-between items-center mb-8">
          <h3 className="font-bold text-slate-800">Haftalik aylanma</h3>
          <PieChart size={18} className="text-blue-600" />
        </div>

        <div className="flex items-end justify-between h-40 gap-3">
          {[60, 40, 90, 70, 100, 55, 85].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className={`w-full rounded-t-xl ${i === 4 ? "bg-blue-600" : "bg-slate-200"}`}
              />
              <span className="text-[8px] font-black text-slate-400 uppercase">
                {["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"][i]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* AI Insight */}
      <div className="bg-slate-900 p-6 rounded-[32px] text-white shadow-xl">
        <p className="text-[10px] font-black text-blue-400 uppercase tracking-[3px] mb-2">
          AI Bashorati
        </p>
        <p className="text-sm font-medium leading-relaxed italic opacity-90">
          "Keyingi 14 kun ichida kassa uzilishi ehtimoli 2%. Budjetingiz
          barqaror holatda."
        </p>
      </div>
    </div>
  );
};

const StatCard = ({ label, value, color, icon }) => (
  <div className="bg-white p-5 rounded-[28px] border border-slate-100 shadow-sm">
    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">
      {label}
    </p>
    <div className={`flex items-center gap-1 font-black text-lg ${color}`}>
      {value} {icon}
    </div>
  </div>
);

export default DeepAnalytics;
