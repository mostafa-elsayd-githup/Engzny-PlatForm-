import TableBody from "./TableComponent/TableBody";
import TableHeader from "./TableComponent/TableHeader";

function AdminTable() {
  return (
    <div className="bg-(--card-surface) p-4 rounded-2xl overflow-x-auto flex flex-col gap-5">
      <TableHeader />
      <TableBody />
    </div>
  );
}

export default AdminTable;
