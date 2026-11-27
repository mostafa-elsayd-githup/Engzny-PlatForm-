import DinamicHeader from "../../components/Worker/PagesDinamicHeader/DinamicHeader";
import TaskCard from "../../components/Worker/WorkerActiveTaskCard/TaskCard";

function WorkerActiveTaskPage() {
  return (
    <section className="p-2 rounded-2xl">
      <div className="flex flex-col gap-5 ">
        <DinamicHeader mainTitle="المهام المسندة إليك حالياً (1)" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <TaskCard />
        </div>
      </div>
    </section>
  );
}

export default WorkerActiveTaskPage;
