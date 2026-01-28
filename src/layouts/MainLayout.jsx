import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, CreditCard, Bot, FileText, LayoutGrid } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MainLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Massiv bitta qilindi va path'lar to'g'rilandi
  const menu = [
    { icon: <Home />, label: "Asosiy", path: "/" },
    { icon: <CreditCard />, label: "Moliya", path: "/payments" },
    { icon: <Bot />, label: "AI Biznes", path: "/ai-insights" },
    { icon: <FileText />, label: "Hujjatlar", path: "/documents" },
    { icon: <LayoutGrid />, label: "Servislar", path: "/services" },
  ];

  return (
    <div className="flex justify-center min-h-screen bg-[#E2E8F0]">
      <div className="w-full max-w-[430px] bg-[#F8FAFC] min-h-screen flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.1)] relative overflow-hidden">
        {/* Sahifa almashish animatsiyasi */}
        <main className="flex-1 overflow-y-auto no-scrollbar p-5 pb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Professional Bottom Nav */}
        <nav className="fixed bottom-0 w-full max-w-[430px] bg-white/80 backdrop-blur-xl border-t border-slate-200 flex justify-around py-4 z-50">
          {menu.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center gap-1.5 transition-all relative ${
                  isActive ? "text-blue-600" : "text-slate-400"
                }`}
              >
                {/* Aktiv tab ko'rsatkichi */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -top-4 w-12 h-1 bg-blue-600 rounded-full"
                  />
                )}

                {React.cloneElement(item.icon, {
                  size: isActive ? 24 : 22,
                  strokeWidth: isActive ? 2.5 : 2,
                })}

                <span
                  className={`text-[10px] font-bold uppercase tracking-tighter ${
                    isActive ? "opacity-100" : "opacity-60"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default MainLayout;
