import { Plus } from "lucide-react";
function WorkersHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col items-start gap-1">
        <h1 className="text-md md:text-xl">إدارة شبكة الفنيين المسجلين</h1>
        <p className="text-[12px] md:text-xs text-(--text-muted)">
          إضافة فني جديد، متابعة التقييمات، وتغطية المناطق
        </p>
      </div>
      <button className="flex items-center gap-2 text-xs sm:text-[15px] bg-(--BrandEmerald-Color) hover:bg-(--Brand-Emerald-Dark) transition-all py-1 px-2 rounded-md cursor-pointer">
        اضافه فنى <Plus size={20} />
      </button>
    </div>
  );
}

export default WorkersHeader;
