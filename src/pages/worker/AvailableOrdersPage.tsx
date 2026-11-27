import OrderCard from "../../components/Worker/AvailableOrdersCard/OrderCard";
import DinamicHeader from "../../components/Worker/PagesDinamicHeader/DinamicHeader";

function AvailableOrdersPage() {
  return (
    <section className="p-2 rounded-2xl">
      <div className="flex flex-col gap-5">
        <DinamicHeader
          mainTitle="طلبات جديدة بانتظار فني (2)"
          someTitle="يتم تحديث القائمة تلقائياً حسب منطقتك"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <OrderCard />
        </div>
      </div>
    </section>
  );
}

export default AvailableOrdersPage;
