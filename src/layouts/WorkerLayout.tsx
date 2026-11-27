import { Outlet } from "react-router";
import WorkerHeader from "../components/Worker/WoerkerHeader/WorkerHeader";
import { SidebarProvider } from "../context/contextStore";
import WorkerSidebar from "../components/Worker/WorkerSidebar";
import WorkerPlatformStatistics from "../components/Worker/WorkerPlatformStatistics/WorkerPlatformStatistics";

export default function WorkerLayout() {
  return (
    <SidebarProvider>
      <div className="flex">
        <WorkerSidebar />
        <main className="flex-1 px-4 overflow-hidden">
          <WorkerHeader />
          <WorkerPlatformStatistics />
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
