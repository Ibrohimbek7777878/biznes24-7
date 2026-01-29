import React, { useState } from "react"; // useState qo'shildi
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Info, DollarSign } from "lucide-react";
import { AreaChart, Area, XAxis, ResponsiveContainer, Tooltip } from "recharts";

const FXForecast = () => {
  // Tanlangan valyuta holati
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  // Har bir valyuta uchun bashorat ma'lumotlari
  const currencyData = {
    USD: [
      { day: "01-Feb", val: 12450 },
      { day: "05-Feb", val: 12480 },
      { day: "10-Feb", val: 12420 },
      { day: "15-Feb", val: 12510 },
      { day: "20-Feb", val: 12560 },
      { day: "28-Feb", val: 12600 },
    ],
    RUB: [
      { day: "01-Feb", val: 138 },
      { day: "05-Feb", val: 140 },
      { day: "10-Feb", val: 142 },
      { day: "15-Feb", val: 141 },
      { day: "20-Feb", val: 139 },
      { day: "28-Feb", val: 135 },
    ],
    EUR: [
      { day: "01-Feb", val: 13500 },
      { day: "05-Feb", val: 13550 },
      { day: "10-Feb", val: 13600 },
      { day: "15-Feb", val: 13650 },
      { day: "20-Feb", val: 13580 },
      { day: "28-Feb", val: 13400 },
    ],
  };

  // Dinamik ranglar va trendni aniqlash (oddiy misol)
  const isUp =
    currencyData[selectedCurrency][currencyData[selectedCurrency].length - 1]
      .val > currencyData[selectedCurrency][0].val;

  return (
    <div className="max-w-md mx-auto space-y-6 p-6 bg-white min-h-screen">
      {/* Sarlavha */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-800">Valyuta Bashorati</h2>
        <Info size={20} className="text-slate-400" />
      </div>

      {/* Valyuta tanlash (Tabs) */}
      <div className="flex bg-slate-100 p-1 rounded-2xl shadow-inner">
        {["USD", "RUB", "EUR"].map((curr) => (
          <button
            key={curr}
            onClick={() => setSelectedCurrency(curr)}
            className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all duration-300 ${
              selectedCurrency === curr
                ? "bg-white text-blue-600 shadow-md"
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            {curr}
          </button>
        ))}
      </div>

      {/* Grafik Kartochkasi */}
      <motion.section
        key={selectedCurrency}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-900 rounded-[35px] p-6 text-white shadow-2xl relative overflow-hidden"
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-indigo-400 mb-1">
              {selectedCurrency} / UZS Oylik kutilma
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">
                {currencyData[selectedCurrency][
                  currencyData[selectedCurrency].length - 1
                ].val.toLocaleString()}
              </span>
              {isUp ? (
                <TrendingUp size={20} className="text-green-400" />
              ) : (
                <TrendingDown size={20} className="text-red-400" />
              )}
            </div>
          </div>
          <DollarSign className="text-indigo-500 opacity-50" />
        </div>

        <div className="h-48 w-full mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={currencyData[selectedCurrency]}>
              <defs>
                <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#818CF8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#818CF8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "none",
                  borderRadius: "10px",
                  fontSize: "12px",
                }}
                itemStyle={{ color: "#fff" }}
              />
              <XAxis
                dataKey="day"
                hide={false}
                stroke="#475569"
                fontSize={10}
                tickLine={false}
                axisLine={false}
              />
              <Area
                type="monotone"
                dataKey="val"
                stroke="#818CF8"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorVal)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.section>

      {/* Qo'shimcha ma'lumot */}
      <div className="bg-blue-50 p-4 rounded-2xl flex gap-4 items-center">
        <div className="bg-blue-600 p-2 rounded-lg text-white">
          <TrendingUp size={20} />
        </div>
        <div>
          <p className="text-sm font-bold text-slate-800 italic">
            Statistik tahlil
          </p>
          <p className="text-xs text-slate-500">
            Fevral oyi yakuniga ko'ra {selectedCurrency} kursi{" "}
            {isUp ? "ko'tarilishi" : "tushishi"} kutilmoqda.
          </p>
        </div>
      </div>

      <p className="text-[10px] text-slate-400 italic text-center px-4 leading-relaxed">
        *Ushbu bashorat sun'iy intellekt tahliliga asoslangan va investitsion
        maslahat hisoblanmaydi.
      </p>
    </div>
  );
};

export default FXForecast;
