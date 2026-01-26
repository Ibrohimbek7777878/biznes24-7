import React, { useState } from "react";
import { ShieldCheck, X } from "lucide-react";

const SignModal = ({ isOpen, onClose, onConfirm }) => {
  const [pin, setPin] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="w-full max-w-[450px] bg-white rounded-t-[40px] p-8 space-y-6 animate-in slide-in-from-bottom duration-500">
        <div className="flex justify-between items-center">
          <div className="bg-blue-50 p-2 rounded-xl text-blue-600">
            <ShieldCheck size={24} />
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900">E-imzo tasdiqlash</h3>
          <p className="text-sm text-gray-500 mt-2">
            Operatsiyani tasdiqlash uchun 6 xonali ERI parolingizni kiriting
          </p>
        </div>

        <div className="flex justify-center gap-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-full border-2 border-blue-600 ${pin.length >= i ? "bg-blue-600" : "bg-transparent"}`}
            />
          ))}
        </div>

        {/* Numeric Keypad Simulation */}
        <div className="grid grid-cols-3 gap-4 pb-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, "C", 0, "OK"].map((key) => (
            <button
              key={key}
              onClick={() => {
                if (key === "OK") onConfirm();
                else if (key === "C") setPin("");
                else if (pin.length < 6) setPin(pin + key);
              }}
              className="py-4 text-xl font-bold text-gray-700 hover:bg-gray-50 rounded-2xl active:scale-90 transition-all"
            >
              {key}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignModal;
