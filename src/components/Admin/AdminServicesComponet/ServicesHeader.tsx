import { Plus } from "lucide-react";

function ServicesHeader() {
  return (
    <div className="flex items-center justify-between ">
      <div className="flex flex-col items-start gap-1">
        <h1 className="text-sm md:text-xl">كتالوج الخدمات والأسعار الرسمية</h1>
        <p className="text-[12px] md:text-xs text-start text-(--text-muted)">
          تحديد التكلفة الأساسية لكل تخصص وحزم المعاينة
        </p>
      </div>
      <button className="flex items-center gap-2 text-xs sm:text-[15px] bg-(--BrandEmerald-Color) hover:bg-(--Brand-Emerald-Dark) transition-all py-1 px-2 rounded-md cursor-pointer">
        اضافه خدمه جديده <Plus size={20} />
      </button>
    </div>
  );
}

export default ServicesHeader;
