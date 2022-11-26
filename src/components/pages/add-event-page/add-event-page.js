import "./style.css";
import Navigation from "../../navigation/navigation";
import Layout from "../../layout/layout";

function AddEventPage() {
  return (
    <Layout>
      <Navigation />
      <div className="add-event__container">
        <h1 className="add-event__title">Добавить заказ</h1>
        <form>
          <input className="add-event__input" type="text" placeholder="Введите ваше имя" required></input>
          <input className="add-event__input" type="text" placeholder="Введите ваш адрес" required></input>
          <input className="add-event__input" type="text" placeholder="Комментарий"></input>
          <button className="add-event__button" type="submit">Добавить заказ</button>
        </form>
      </div>
    </Layout>
  );
}

export default AddEventPage;
