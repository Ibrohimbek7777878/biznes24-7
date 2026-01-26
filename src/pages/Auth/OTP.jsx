import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";

export default function OTP() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");

  return (
    <div className="min-h-screen bg-white flex flex-col p-6 max-w-md mx-auto justify-center">
      <h1 className="text-2xl font-bold mb-2">Tasdiqlash</h1>
      <p className="text-slate-500 mb-8 text-sm">
        SMS orqali yuborilgan 6 xonali kodni kiriting
      </p>

      <input
        type="text"
        maxLength="6"
        placeholder="000000"
        className="w-full p-4 text-center text-2xl tracking-[1rem] bg-slate-50 border border-slate-200 rounded-2xl mb-6 outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setCode(e.target.value)}
      />

      <Button onClick={() => navigate("/")}>Tasdiqlash</Button>

      <button className="mt-6 text-blue-600 font-semibold text-sm">
        Kod kelmadimi? Qayta yuborish
      </button>
    </div>
  );
}
