import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Send, Bell, Settings, CheckCircle, MessageCircle, ExternalLink, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TenderBot = () => {
  const navigate = useNavigate();
  const [isConnected, setIsConnected] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="p-6 bg-white border-b border-slate-100 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-50 rounded-xl"><ArrowLeft size={24}/></button>
          <h1 className="text-lg font-black text-slate-800 uppercase tracking-tighter">AI Tender Bot</h1>
        </div>
        <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`}></div>
      </div>

      <div className="p-6 space-y-6">
        {/* Telegram Connection Card */}
        <section className="bg-gradient-to-br from-[#0088cc] to-[#00a2ed] rounded-[35px] p-6 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
               <div className="bg-white/20 p-2 rounded-xl backdrop-blur-md">
                 <MessageCircle size={24} fill="currentColor" />
               </div>
               <span className="text-[10px] font-black uppercase tracking-widest">Telegram Integratsiyasi</span>
            </div>
            <h2 className="text-xl font-bold leading-tight">Tenderlarni to'g'ridan-to'g'ri Telegramda kuzating</h2>
            <p className="text-xs opacity-80 mt-2 font-medium">AI botimiz 24/7 davlat xaridlarini skanerlaydi va sizga mosini yuboradi.</p>
            
            <button 
              onClick={() => setIsConnected(!isConnected)}
              className={`mt-6 w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${isConnected ? 'bg-white/20 border border-white/40' : 'bg-white text-[#0088cc] shadow-lg shadow-blue-900/20'}`}
            >
              {isConnected ? 'Ulandi: @biznes247_tender_bot' : 'Telegramga ulash'}
            </button>
          </div>
          <Send size={150} className="absolute -right-10 -bottom-10 opacity-10 -rotate-12" />
        </section>

        {/* Filters / Settings */}
        <div className="bg-white p-6 rounded-[30px] border border-slate-100 shadow-sm space-y-5">
           <h3 className="text-xs font-black text-slate-400 uppercase tracking-[3px]">AI Filtr Sozlamalari</h3>
           <div className="space-y-4">
              <FilterItem label="Faoliyat sohasi" value="Logistika va transport" />
              <FilterItem label="Minimal budjet" value="100 mln UZS" />
              <FilterItem label="Hudud" value="Toshkent va viloyat" />
           </div>
        </div>

        {/* Sample Result */}
        <div className="bg-indigo-50 border border-indigo-100 rounded-[30px] p-5">
           <div className="flex items-center gap-2 mb-3">
              <Zap size={16} className="text-indigo-600" />
              <span className="text-[10px] font-black text-indigo-900 uppercase">Botdan oxirgi xabar:</span>
           </div>
           <div className="bg-white p-4 rounded-2xl shadow-sm italic text-[11px] text-slate-600 leading-relaxed">
             "Logistika xizmati bo'yicha yangi tender №8412 aniqlandi. Sizning yutish ehtimolingiz: 88%. Hujjatlarni tayyorlashni boshlaymizmi?"
           </div>
        </div>
      </div>
    </div>
  );
};

const FilterItem = ({ label, value }) => (
  <div className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
    <span className="text-xs font-bold text-slate-400">{label}</span>
    <span className="text-xs font-black text-slate-800 flex items-center gap-1">{value} <Settings size={12}/></span>
  </div>
);

export default TenderBot;