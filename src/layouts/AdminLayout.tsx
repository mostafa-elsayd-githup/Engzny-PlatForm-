import { Outlet } from "react-router";
import AdminSidebar from "../components/Admin/AdminSidebar";
import PlatformStatistics from "../components/Admin/PlatformStatistics/PlatformStatistics";
import AdminHeader from "../components/Admin/AdminHeader/AdminHeader";
import { SidebarProvider } from "../context/contextStore";


export default function AdminLayout() {
  return (
    <SidebarProvider>
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 px-4 overflow-hidden">
          <AdminHeader />
          <PlatformStatistics />
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
