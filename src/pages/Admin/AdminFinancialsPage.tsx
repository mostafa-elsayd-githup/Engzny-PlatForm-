import AdminFinancialsHeader from "../../components/Admin/AdminFinancialsComponent/AdminFinancialsHeader";
import AverageOrderValue from "../../components/Admin/AdminFinancialsComponent/AverageOrderValue";
import PlatformCommission from "../../components/Admin/AdminFinancialsComponent/PlatformCommission";
import WorkerPayments from "../../components/Admin/AdminFinancialsComponent/WorkerPayments ";

function AdminFinancialsPage() {
  return (
    <div className="bg-(--card-surface) p-4 rounded-2xl flex flex-col gap-5">
      <AdminFinancialsHeader />
      <hr className="text-(--border-color)" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <PlatformCommission />
        <WorkerPayments />
        <AverageOrderValue />
      </div>
    </div>
  );
}

export default AdminFinancialsPage;
