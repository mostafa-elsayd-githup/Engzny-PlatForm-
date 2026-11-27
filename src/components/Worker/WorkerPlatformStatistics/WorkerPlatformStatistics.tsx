import { Briefcase, Star,Wallet } from "lucide-react";
import type { PlatformStatisticsPropType } from "../../../Types/PlatformStatisticsList";

function WorkerPlatformStatistics() {
  const PlatformStatisticsList: PlatformStatisticsPropType[] = [
    {
      id: 1,
      icon: <Briefcase size={25} />,
      mainTitle: "مهام جارية الآن",
      rating: "1000",
      color: "--iconList-color",
    },
    {
      id: 2,
      icon: <Wallet size={25} />,
      mainTitle: "أرباح الأسبوع الصافية",
      rating: "42",
      color: "--BrandEmerald-Color",
    },
    {
      id: 4,
      icon: <Star size={25} />,
      mainTitle: "تقييم العملاء لك",
      rating: "4.9 / 5",
      color: "--iconRate-color",
    },
  ];
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3 gap-4 py-4">
      {PlatformStatisticsList.map((item) => (
        <div
          key={item.id}
          className="bg-(--card-surface) flex items-center justify-around p-4 rounded-2xl"
        >
          <div className="flex flex-col gap-5">
            <span className="w-10 h-10" style={{ color: `var(${item.color})` }}>
              {item.icon}
            </span>
          </div>
          <div className="flex flex-col gap-5">
            <span className="text-[10px] md:text-lg">{item.mainTitle}</span>
            <h5 className="text-2xl md:text-3xl" style={{color:`var(${item.color})`}}>{item.rating}</h5>
          </div>
        </div>
      ))}
    </section>
  );
}

export default WorkerPlatformStatistics;
