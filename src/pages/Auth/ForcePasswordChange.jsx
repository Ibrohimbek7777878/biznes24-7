import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";

export default function ForcePasswordChange() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col p-6 max-w-md mx-auto justify-center">
      <h1 className="text-2xl font-bold mb-2">Parolni yangilash</h1>
      <p className="text-slate-500 mb-8 text-sm">
        Xavfsizlik uchun birinchi kirishda parolni o'zgartirishingiz shart.
      </p>

      <div className="space-y-4 mb-6">
        <input
          type="password"
          placeholder="Yangi parol"
          className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none"
        />
        <input
          type="password"
          placeholder="Yangi parolni tasdiqlang"
          className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none"
        />
      </div>

      <Button onClick={() => navigate("/")}>Saqlash va Kirish</Button>
    </div>
  );
}
