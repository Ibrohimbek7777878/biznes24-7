import React from "react";
import { UserPlus, ShieldAlert, MoreVertical } from "lucide-react";

const UserManagement = () => {
  const users = [
    { name: "Samatov Azamat", role: "Buxgalter", access: "To'liq" },
    { name: "Karimov Sherzod", role: "Operator", access: "Faqat ko'rish" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-black text-bank-dark">Xodimlar</h1>
        <button className="bg-bank-dark text-white p-2.5 rounded-xl shadow-lg">
          <UserPlus size={20} />
        </button>
      </div>

      <div className="bg-white rounded-[32px] shadow-sm border border-gray-50 overflow-hidden">
        {users.map((user, i) => (
          <div
            key={i}
            className="p-5 flex justify-between items-center border-b border-gray-50 last:border-0 active:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold">
                {user.name.charAt(0)}
              </div>
              <div>
                <h4 className="text-sm font-bold text-bank-dark leading-none">
                  {user.name}
                </h4>
                <p className="text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-widest">
                  {user.role}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-right">
                <p className="text-[10px] font-black text-orange-600 uppercase italic leading-none">
                  {user.access}
                </p>
              </div>
              <MoreVertical size={18} className="text-gray-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
