import DinamicHeader from "../../components/Worker/PagesDinamicHeader/DinamicHeader";
import ProfitsTable from "../../components/Worker/ProfitsTable/ProfitsTable";

function ProfitsPage() {
  return (
    <section className="bg-(--card-surface) p-5 overflow-hidden rounded-2xl">
      <div className="flex flex-col gap-5">
        <DinamicHeader
          mainTitle="سجل العمليات المكتملة والمستحقات"
          someTitle="تفاصيل المهام التي أتممتها بنجاح"
        />
        <div className="w-full overflow-x-auto rounded-2xl">
          <ProfitsTable />
        </div>
      </div>
    </section>
  );
}

export default ProfitsPage;
