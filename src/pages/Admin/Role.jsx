import React from "react";
import { UserCheck, Shield, Key, MoreHorizontal } from "lucide-react";

const Roles = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">
        Xavfsizlik & Rollar
      </h1>

      <div className="space-y-3">
        <RoleItem
          name="Anvarov J."
          role="Bosh Buxgalter"
          access="To'liq"
          color="bg-blue-600"
        />
        <RoleItem
          name="Sodiqova M."
          role="Kassir"
          access="Cheklangan"
          color="bg-orange-500"
        />
        <RoleItem
          name="Pulatov R."
          role="Operator"
          access="Faqat o'qish"
          color="bg-slate-400"
        />
      </div>

      <div className="p-6 bg-amber-50 border border-amber-100 rounded-[32px] space-y-3">
        <div className="flex items-center gap-2 text-amber-700 font-black text-xs uppercase">
          <Shield size={16} /> Audit Log (Oxirgi amallar)
        </div>
        <p className="text-[10px] text-amber-800/70 font-medium italic border-l-2 border-amber-200 pl-3">
          "Bosh buxgalter tomonidan INV-992 hujjati o'chirildi - 24.01.2024,
          14:02"
        </p>
      </div>
    </div>
  );
};

const RoleItem = ({ name, role, access, color }) => (
  <div className="bg-white p-5 rounded-[28px] flex justify-between items-center shadow-sm border border-slate-50">
    <div className="flex items-center gap-4">
      <div
        className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center text-white font-black shadow-lg`}
      >
        {name.charAt(0)}
      </div>
      <div>
        <h4 className="font-black text-slate-800 text-sm leading-none">
          {name}
        </h4>
        <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">
          {role}
        </p>
      </div>
    </div>
    <div className="text-right">
      <span className="text-[9px] font-black text-blue-600 uppercase bg-blue-50 px-2 py-1 rounded-md">
        {access}
      </span>
    </div>
  </div>
);

export default Roles;
