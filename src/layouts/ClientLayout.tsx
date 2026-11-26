import { Outlet } from "react-router";
import ClientHeader from "../components/Client/clientHeader/ClientHeader";
import ClientSidebar from "../components/Client/ClientSidebar";
import { SidebarProvider } from "../context/contextStore";

export default function ClientLayout() {
  return (
    <SidebarProvider>
      <div className="flex">
        <ClientSidebar />
        <main className="flex-1 px-4 overflow-hidden">
          <ClientHeader />
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
