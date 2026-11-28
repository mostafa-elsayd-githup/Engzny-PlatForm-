import { Clock, PlusCircle, Wrench } from "lucide-react";
import { useState } from "react";

function Cards() {
  const buttons: string[] = ["الكل", "تكيفات", "كهرباء", "سباكة", "صيانه الومينتال"];
  const [activeBtn, setActiveBtn] = useState<string>(buttons[0]);
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center gap-4 w-full flex-wrap">
        {buttons.map((button: string, index: number) => (
          <button
            key={index}
            value={button}
            onClick={() => setActiveBtn(button)}
            className={`text-sm px-4 py-1 rounded-md cursor-pointer transition-all
              ${
                activeBtn === button
                  ? "bg-(--BrandEmerald-Color) text-(--text-primary)"
                  : "bg-(--card-surface)"
              }`}
          >
            {button}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        <div className="bg-(--card-surface) p-5 rounded-2xl text-start ">
          <div className="flex items-start justify-between ">
            <div className="flex flex-col gap-2">
              <span className="text-(--BrandEmerald-Color) bg-(--Brand-Emerald-Dark)/20 rounded-lg md:rounded-2xl w-fit p-2">
                <Wrench size={20} className="md:hidden" />
                <Wrench size={30} className="hidden md:block" />
              </span>
              <div>
                <h2 className="text-sm md:text-lg leading-8">صيانة وتأسيس تكييف سبليت</h2>
                <p className="text-xs text-(--text-muted)">
                  تنظيف شامل، فحص الفريون، ومعالجة تسريب المياه والأعطال.
                </p>
              </div>
            </div>
            <span className="bg-(--bg-canvas) px-2 rounded-lg text-sm text-(--text-muted)">
              تكيفات
            </span>
          </div>

          <hr className="border-(--border-color) my-3" />
          <div className="flex items-center justify-between mb-2 text-xs">
            <span className="flex items-center gap-2 text-(--text-muted)">
              <Clock size={15} /> 60 - 90 دقيقة
            </span>
            <p className="flex items-center gap-1 text-(--BrandEmerald-Color) text-[16px] md:text-lg font-bold">
              <span className="text-(--text-muted) text-xs font-normal">
                تبدأ من :
              </span>
              400 ج.م
            </p>
          </div>
          <button className="flex items-center justify-center gap-2 bg-(--BrandEmerald-Color) text-sm md:text-lg w-full py-1.5 rounded-2xl hover:bg-(--Brand-Emerald-Dark) cursor-pointer transition-colors mt-5">
            <PlusCircle size={17} className="md:hidden" />{" "}
            <PlusCircle size={20} className="hidden md:block" /> احجز الخدمه
            الان
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
