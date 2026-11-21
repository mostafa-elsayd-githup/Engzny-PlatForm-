import { Star, TableProperties, TrendingUp, Users2 } from "lucide-react";
import type { PlatformStatisticsPropType } from "../../../Types/PlatformStatisticsList";

function PlatformStatistics() {
  const PlatformStatisticsList: PlatformStatisticsPropType[] = [
    {
      id: 1,
      icon: <TableProperties size={25} />,
      someTitle: "هذا الشهر 12%+",
      mainTitle: "اجمالى طلبات الشبكه",
      rating: "1000",
      color: "--iconList-color",
    },
    {
      id: 2,
      icon: <Users2 size={25} />,
      someTitle: "من أصل 49 فني",
      mainTitle: "الفنيون النشطون الآن",
      rating: "42",
      color: "--BrandEmerald-Color",
    },
    {
      id: 3,
      icon: <TrendingUp size={25} />,
      someTitle: "+24% نمو",
      mainTitle: "إجمالي الإيرادات (MRR)",
      rating: "128.251",
      color: "--iconRate-color",
    },
    {
      id: 4,
      icon: <Star size={25} />,
      someTitle: "ممتاز جدا",
      mainTitle: "معدل تقييم الخدمة",
      rating: "4.9 / 5",
      color: "--BrandEmerald-Color",
    },
  ];
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 py-4">
      {PlatformStatisticsList.map((item) => (
        <div
          key={item.id}
          className="bg-(--card-surface) flex items-center justify-around text-xs p-4 rounded-2xl"
        >
          <div className="flex flex-col gap-5">
            <span
              className="w-10 h-10"
              style={{ color: `var(${item.color})` }}
            >
              {item.icon}
            </span>
            <span
              className="text-(--BrandEmerald-Color) "
              style={{ color: `var(${item.color})` }}
            >
              {item.someTitle}
            </span>
          </div>
          <div className="flex flex-col gap-5">
            <span className="text-[10px] md:text-lg">{item.mainTitle}</span>
            <h5 className="text-xl md:text-3xl">{item.rating}</h5>
          </div>
        </div>
      ))}
    </section>
  );
}

export default PlatformStatistics;
