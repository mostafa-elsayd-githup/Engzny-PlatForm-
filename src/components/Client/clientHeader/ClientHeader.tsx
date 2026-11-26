import { Menu, X } from "lucide-react";
import { useContext } from "react";
import { useMatches } from "react-router";
import SidebarContext from "../../../context/contextStore";

function ClientHeader() {
  const matches = useMatches();
  const currentTitle = matches[matches.length - 1]?.handle as { title: string };
  const sidebarContext = useContext(SidebarContext);
  const isOpen = sidebarContext?.isOpen;
  const toggle = sidebarContext?.toggle;
  return (
    <header className="flex items-center justify-between py-4 px-4 bg-(--card-surface)">
      <div className="flex items-center gap-2">
        <span className="p-1.5 rounded-full bg-(--BrandEmerald-Color) animate-pulse"></span>
        <h1 className="tex-xs lg:text-2xl">{currentTitle.title}</h1>
      </div>
      <div className="flex items-center gap-4">
        <button onClick={toggle} className="lg:hidden cursor-pointer ">
          <span className="">
            {isOpen ? <Menu size={20} /> : <X size={20} />}
          </span>
        </button>
      </div>
    </header>
  );
}

export default ClientHeader;
