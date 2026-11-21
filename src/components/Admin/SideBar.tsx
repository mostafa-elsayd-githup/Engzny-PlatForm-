import { NavLink } from "react-router";
import {
  Layers2,
  LayoutPanelLeft,
  LogOut,
  TrendingUp,
  Users2,
} from "lucide-react";
import type { navBarList } from "../../Types/SidBar";
import { useContext } from "react";
import SidebarContext from "../../context/contextStore";

function AdminSidebar() {
const navList: navBarList[] = [
  {
    id: 1,
    path: "/admin",
    namePage: "إدارة الطلبات والشبكة",
    icon: <LayoutPanelLeft size={20} className="inline ml-2" />,
  },
  {
    id: 2,
    path: "/admin/worker",
    namePage: "إدارة الفنيين",
    icon: <Users2 size={20} className="inline ml-2" />,
  },
  {
    id: 3,
    path: "/admin/services",
    namePage: "كتالوج الخدمات والأسعار",
    icon: <Layers2 size={20} className="inline ml-2" />,
  },
  {
    id: 4,
    path: "/admin/financials",
    namePage: "التقارير والماليات",
    icon: <TrendingUp size={20} className="inline ml-2" />,
  },
];
  const isOpen = useContext(SidebarContext)?.isOpen;

  return (
    <section
      className={`${isOpen ? "translate-x-72 absolute" : "translate-x-0"} duration-200 p-4 bg-(--card-surface)`}
    >
      <div className="w-30 md:w-60">
        <div className="w-30 flex flex-col md:flex-row items-center ">
          <img src="/platformLogo.png" alt="logo" />
          <div className="flex flex-col items-start gap-2">
            <h3 className="text-xs md:text-sm bg-(--Brand-Emerald-Dark) px-2 rounded-2xl">
              Admin
            </h3>
            <p className="text-[10px] w-24 block">لوحه التحكم و الشبكه </p>
          </div>
        </div>
        <hr className="my-4 text-(--border-color)" />
        <div className="flex flex-col items-start gap-10 justify-between h-screen">
          <nav className="w-full">
            <ul className="flex flex-col text-start gap-10">
              {navList.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    end={item.path === "/admin"}
                    className={({ isActive }) =>
                      `text-xs py-1 px-2 leading-5 md:py-2 md:px-4 md:text-lg rounded-2xl block transition-all ${isActive ? "bg-(--BrandEmerald-Color) text-black  shadow-(--shadow)" : "hover:bg-(--card-surface) "}`
                    }
                  >
                    {item.icon}
                    {item.namePage}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col gap-5 items-start w-full">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 md:w-10 md:h-10 flex items-center justify-center text-(--BrandEmerald-Color) bg-(--bg-canvas) rounded-lg border border-(--border-color)">
                م
              </span>
              <h2 className="text-xs md:text-lg">مصطفى السيد</h2>
            </div>
            <button className="bg-(--bg-canvas) w-full py-2 px-2 rounded-2xl text-xs  border-(--border-color) flex items-center justify-center gap-4 cursor-pointer">
              <span>تسجيل خروج</span>
              <LogOut size={12} className="inline ml-2 md:hidden" />
              <LogOut size={20} className="hidden ml-2 md:block" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminSidebar;
