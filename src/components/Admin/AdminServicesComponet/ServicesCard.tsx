import { Cog } from "lucide-react";

function ServicesCards() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
      <div className="bg-(--bg-canvas) border border-(--border-color) hover:border-(--BrandEmerald-Color)/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 shadow-lg group">
        <div className="flex flex-col text-start gap-2">
          <div className="flex items-end gap-2">
            <span className="bg-(--Brand-Emerald-Dark) p-2 w-fit rounded-xl inline">
              <Cog size={20} />
            </span>
            <span className="text-xs bg-(--card-surface) w-fit py-1 px-2 rounded-md inline">
              تكييفات
            </span>
          </div>
          <h3 className="text-sm">صيانة وتأسيس تكييف سبليت</h3>
        </div>
        <hr className="text-(--border-color) my-2" />
        <div className="flex items-center justify-between">
          <h4 className="text-xs text-(--text-muted)">السعر الاساسى :</h4>
          <div className="text-(--BrandEmerald-Color)">400ج.م</div>
        </div>
      </div>
    </section>
  );
}

export default ServicesCards;
