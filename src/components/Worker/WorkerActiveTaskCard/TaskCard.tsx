import { CircleFadingPlay, MapPinned, User } from "lucide-react";

function TaskCard() {
  return (
    <div className="relative overflow-hidden flex flex-col gap-5 bg-(--card-surface) p-4 rounded-2xl">
      <div className="flex justify-between items-start">
        <div className="text-start">
          <span className="text-(--BrandEmerald-Color)"># 12</span>
          <p>إصلاح تسريب سباكة بالحمام</p>
        </div>
        <span className="absolute left-0 text-(--iconList-color) bg-(--iconList-color)/20 text-xs px-2 py-1 rounded-r-xl">
          جارى التنفيذ
        </span>
      </div>
      <div className="bg-(--bg-canvas) flex flex-col items-start gap-1 border border-(--border-color) p-2 rounded-md">
        <p className="flex items-center gap-3 text-(--text-muted) text-sm">
          <User size={15} className="text-white" />: مطصفى السيد
        </p>
        <p className="flex items-center gap-3 text-(--text-muted) text-sm">
          <MapPinned size={15} className="text-(--BrandEmerald-Color)" />
          التجمع الخامس، الحي الثالث
        </p>
        <span className="w-full bg-(--border-color) h-0.5 my-2" />
        <p className="text-(--text-muted) text-sm">
          تسريب أسفل حوض المغسلة يحتاج تغيير جلبة وخلاط
        </p>
      </div>
      <div className="flex items-center gap-4">
        <button className="flex flex-1 items-center justify-center gap-3 bg-(--BrandEmerald-Color) rounded-2xl py-1 text-(--Primary-color) cursor-pointer">
          <CircleFadingPlay size={17} />
          فتح شاشه التنفيذ والانتهاء
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
