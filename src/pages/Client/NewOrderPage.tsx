import WelcomeComponent from "../../components/Client/NewOrderComponent/ClientWelcomeComponent/WelcomeComponent";
import Cards from "../../components/Client/NewOrderComponent/ServicesCardsComponent/Cards";

function NewOrderPage() {
  return (
    <section>
      <WelcomeComponent />
      <hr className="border-(--border-color) my-8"/>
      <Cards />
    </section>
  );
}

export default NewOrderPage;
