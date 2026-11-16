import { Outlet } from "react-router";
import AdminSidebar from "../components/Admin/SideBar";
import PlatformStatistics from "../components/Admin/PlatformStatistics/PlatformStatistics";
import Header from "../components/Admin/HeaderPage/Header";
import { SidebarProvider } from "../context/contextStore";


export default function AdminLayout() {
  return (
    <SidebarProvider>
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1">
          <Header />
          <PlatformStatistics />
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
