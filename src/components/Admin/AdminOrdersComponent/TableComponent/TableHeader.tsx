import { useState } from "react";

function TableHeader() {
  const clientStatus: string[] = [
    "الكل",
    "قيد الانتظار",
    "جارى التنفيذ",
    "مكتمل",
    "ملغى",
  ];
  const [activeStatus, setActiveStatus] = useState(clientStatus[0]);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start flex-col gap-2">
        <h1 className="text-md md:text-xl">
          جدول الطلبات وتخصيص الفنيين المباشر
        </h1>
        <p className="text-[12px] md:text-xs">
          تتبع حالات الصيانة الحالية والتعديل الفوري على الفني المسند
        </p>
      </div>
      <div className="flex items-center justify-around gap-4">
        <input
          className="flex-1 bg-(--bg-canvas) outline-0 py-2 px-4 rounded-2xl placeholder:text-sm"
          type="search"
          placeholder="بحث برقم الطلب او العميل ......"
        />
        <div className="flex items-center justify-around gap-2 flex-1 bg-(--bg-canvas) py-1.5 px-2 rounded-2xl">
          {clientStatus.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveStatus(item)}
              data-active={activeStatus === item}
              className="w-20 text-xs md:text-sm py-1.5 rounded-lg transition-al transition-colors data-[active=true]:bg-(--BrandEmerald-Color) data-[active=true]:font-bold cursor-pointer"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default TableHeader;
