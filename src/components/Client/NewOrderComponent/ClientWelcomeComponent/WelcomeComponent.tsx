import { Search, ShieldCheck } from "lucide-react";

function WelcomeComponent() {
  return (
    <div className="bg-(--Brand-Emerald-Dark)/5 border border-(--border-color) flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 p-5 my-4 rounded-2xl">
      <div className="text-start flex flex-col gap-2">
        <span className="flex items-center gap-1 text-xs text-(--BrandEmerald-Color) bg-(--Brand-Emerald-Dark)/20 w-fit px-4 py-1 rounded-2xl">
          <ShieldCheck  size={16} className="text-(--BrandEmerald-Color)"/> ضمان 30 يوماً على جميع أعمال الصيانة
        </span>
        <h1 className="md:text-xl">فنيون معتمدون عند باب بيتك في أقل من ساعة</h1>
        <p className="text-(--text-muted) text-xs leading-5.5">
          اختر التخصص المطلوب بالأسعار الرسمية المعتمدة بدون مفاجآت، وتابع حالة
          الفني خطوة بخطوة.
        </p>
      </div>
      <div className="relative flex items-center justify-center">
        <Search size={24} className="absolute right-1.5 text-(--text-muted) "/>
        <input type="search" placeholder="ابحث عن خدمة ( تكيفات, كهرباء, ....... )" className="bg-(--bg-canvas) py-1.5 px-9 rounded-2xl outline-0 placeholder:text-xs w-80" />
      </div>
    </div>
  );
}

export default WelcomeComponent;
