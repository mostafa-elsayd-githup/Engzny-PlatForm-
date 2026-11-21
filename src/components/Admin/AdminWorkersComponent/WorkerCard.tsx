import { Star } from "lucide-react";
import type { WorkerCardProps } from "../../../Types/Worker";


function WorkerCard({
  name = "مهندس سامح علي",
  specialty = "خبير تكييفات",
  area = "المعادي",
  completedTasks = 142,
  rating = 4.9,
  status = "متاح",
  avatarChar,
}: WorkerCardProps) {
  const displayChar = avatarChar || name.trim().charAt(0);

  const statusStyles = {
    متاح: "bg-(--BrandEmerald-Color)/10 text-(--BrandEmerald-Color) border-(--BrandEmerald-Color)/30",
    مشغول: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    "غير متاح": "bg-rose-500/10 text-rose-400 border-rose-500/30",
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <div className="bg-(--card-surface) border border-(--border-color) hover:border-(--BrandEmerald-Color)/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 shadow-lg group">
        <div className="flex items-start justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-(--border-color) flex items-center justify-center text-xl font-bold text-(--BrandEmerald-Color) group-hover:scale-105 transition-transform">
            {displayChar}
          </div>

          <span
            className={`px-3.5 py-1 rounded-full text-xs font-semibold border ${statusStyles[status]}`}
          >
            {status}
          </span>
        </div>
        <div className="text-right space-y-1.5 mb-6">
          <h3 className="text-lg font-bold text-(--text-primary)">{name}</h3>
          <p className="text-sm font-medium text-(--BrandEmerald-Color)">
            {specialty}
          </p>
          <p className="text-xs text-(--text-muted)">تغطية: {area}</p>
        </div>
        <div className="pt-4 border-t border-(--border-color) flex items-center justify-between text-sm">
          <span className="text-(--text-muted) font-medium">
            عملية مكتملة{" "}
            <strong className="text-(--text-primary) font-semibold">
              {completedTasks}
            </strong>
          </span>

          <div className="flex items-center gap-1.5 font-bold text-amber-400">
            <span>{rating}</span>
            <Star size={16} className="fill-amber-400 text-amber-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkerCard;
