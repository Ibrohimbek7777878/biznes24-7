import React, { useState } from "react";
import { FileText, PenTool, Search, Filter } from "lucide-react";

const Documents = () => {
  const [filter, setFilter] = useState("pending");

  const allDocuments = [
    {
      id: 1,
      title: "Shartnoma №24-AK",
      partner: "Oasis Tech MCHJ",
      date: "23.01.2024",
      status: "pending",
      amount: "12,500,000 UZS",
    },
    {
      id: 2,
      title: "Schyot-faktura №102",
      partner: "Soliq Servis",
      date: "21.01.2024",
      status: "signed",
      amount: "5,400,000 UZS",
    },
    {
      id: 3,
      title: "Bajarilgan ishlar akti",
      partner: "Apex Logistic",
      date: "20.01.2024",
      status: "rejected",
      amount: "1,200,000 UZS",
    },
  ];

  const filteredDocs = allDocuments.filter((doc) =>
    filter === "all" ? true : doc.status === filter,
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Hujjatlar</h1>

      {/* Tabs */}
      <div className="flex p-1 bg-slate-200/50 rounded-2xl">
        {["pending", "signed", "all"].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`flex-1 py-3 text-[11px] font-bold rounded-xl transition-all uppercase ${
              filter === tab
                ? "bg-white text-blue-600 shadow-sm"
                : "text-slate-500"
            }`}
          >
            {tab === "pending"
              ? "Imzolashga"
              : tab === "signed"
                ? "Imzolangan"
                : "Barchasi"}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="space-y-4">
        {filteredDocs.map((doc) => (
          <div
            key={doc.id}
            className="bg-white p-5 rounded-[24px] border border-slate-100 shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div
                className={`p-3 rounded-2xl ${doc.status === "signed" ? "bg-green-50 text-green-600" : "bg-blue-50 text-blue-600"}`}
              >
                <FileText size={24} />
              </div>
              <span
                className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase border ${
                  doc.status === "signed"
                    ? "bg-green-50 border-green-100 text-green-600"
                    : "bg-orange-50 border-orange-100 text-orange-600"
                }`}
              >
                {doc.status}
              </span>
            </div>
            <h3 className="font-bold text-slate-800 text-sm">{doc.title}</h3>
            <p className="text-xs text-slate-500 mt-1">{doc.partner}</p>
            <div className="mt-4 flex justify-between items-center border-t pt-4">
              <span className="text-sm font-bold text-slate-700">
                {doc.amount}
              </span>
              {doc.status === "pending" && (
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-bold">
                  <PenTool size={14} /> Imzolash
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documents; // MANA SHU QATOR JUDA MUHIM!
