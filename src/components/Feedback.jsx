// Ma'lumot yuklanayotgan paytdagi skeleton effekti
export const Skeleton = () => (
  <div className="animate-pulse flex space-x-4 p-4 bg-white rounded-2xl">
    <div className="rounded-xl bg-slate-100 h-12 w-12"></div>
    <div className="flex-1 space-y-3 py-1">
      <div className="h-3 bg-slate-100 rounded w-3/4"></div>
      <div className="h-3 bg-slate-100 rounded w-1/2"></div>
    </div>
  </div>
);

// Xatolik xabari
export const ErrorMessage = ({ message }) => (
  <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600">
    <AlertCircle size={20} />
    <p className="text-sm font-bold">
      {message || "Tizimda xatolik yuz berdi"}
    </p>
  </div>
);
