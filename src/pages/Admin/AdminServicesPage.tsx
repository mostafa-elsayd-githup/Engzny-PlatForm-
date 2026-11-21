import ServicesCards from "../../components/Admin/AdminServicesComponet/ServicesCard";
import ServicesHeader from "../../components/Admin/AdminServicesComponet/ServicesHeader";

function AdminServicesPage() {
  return (
    <div className="bg-(--card-surface) p-4 rounded-2xl flex flex-col gap-5">
      <ServicesHeader />
      <hr className="text-(--border-color)" />
      <ServicesCards />
    </div>
  );
}

export default AdminServicesPage;
