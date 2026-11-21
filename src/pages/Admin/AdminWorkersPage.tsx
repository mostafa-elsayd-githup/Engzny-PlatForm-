import WorkersHeader from "../../components/Admin/AdminWorkersComponent/WorkersHeader";
import WorkerCard from "../../components/Admin/AdminWorkersComponent/WorkerCard";

function AdminWorkersPage() {
  return (
    <div className="bg-(--card-surface) p-4 rounded-2xl flex flex-col gap-5">
      <WorkersHeader />
      <hr className="text-(--border-color)" />
      <WorkerCard />
    </div>
  );
}

export default AdminWorkersPage;
