import React from "react";
import {
  PlayCircle,
  BookOpen,
  Headphones,
  Star,
  ChevronRight,
} from "lucide-react";

const Academy = () => {
  const courses = [
    {
      title: "Soliq qonunchiligi 2024",
      type: "Video",
      dur: "45 daqiqa",
      color: "text-blue-600",
    },
    {
      title: "Eksport shartnomalari",
      type: "Audio",
      dur: "20 daqiqa",
      color: "text-purple-600",
    },
    {
      title: "Buxgalteriya asoslari",
      type: "Kurs",
      dur: "12 ta dars",
      color: "text-orange-600",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <h1 className="text-2xl font-black text-bank-dark leading-none">
          Akademiya
        </h1>
        <div className="flex items-center gap-1 text-xs font-bold text-orange-500">
          <Star size={14} fill="currentColor" /> 1250 ball
        </div>
      </div>

      {/* Featured Lesson */}
      <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100 group cursor-pointer">
        <div className="h-40 bg-slate-200 relative flex items-center justify-center">
          <div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
            <PlayCircle size={40} fill="currentColor" />
          </div>
          <div className="absolute top-4 left-4 bg-red-500 text-white text-[8px] font-black px-2 py-1 rounded uppercase">
            Yangi
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-bold text-bank-dark">
            Biznesni raqamlashtirish strategiyasi
          </h3>
          <p className="text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-widest">
            Spiker: Abror Anvarov
          </p>
        </div>
      </div>

      {/* Course List */}
      <div className="space-y-3">
        {courses.map((c, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-2xl flex items-center gap-4 border border-gray-50 active:bg-gray-50"
          >
            <div className={`p-3 bg-gray-50 rounded-xl ${c.color}`}>
              {c.type === "Video" ? (
                <PlayCircle size={20} />
              ) : c.type === "Audio" ? (
                <Headphones size={20} />
              ) : (
                <BookOpen size={20} />
              )}
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-gray-800 leading-none">
                {c.title}
              </h4>
              <p className="text-[10px] text-gray-400 mt-1 font-medium">
                {c.type} • {c.dur}
              </p>
            </div>
            <ChevronRight size={18} className="text-gray-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Academy;
