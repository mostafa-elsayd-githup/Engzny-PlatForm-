import { Outlet } from "react-router";
import WorkerHeader from "../components/Worker/WoerkerHeader/WorkerHeader";
import { SidebarProvider } from "../context/contextStore";
import WorkerSidebar from "../components/Worker/WorkerSidebar";

export default function WorkerLayout() {
  return (
    <SidebarProvider>
      <div className="flex">
        <WorkerSidebar />
        <main className="flex-1 px-4 overflow-hidden">
          <WorkerHeader />
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
