import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addOrderAction } from "../../../store/api-actions";
import Navigation from "../../navigation/navigation";
import Layout from "../../layout/layout";
import { formatDate } from "../../../utils/format-date";
import "./style.css";

function AddOrderPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nameRef = useRef(null);
  const addressRef = useRef(null);
  const commentRef = useRef(null);

  async function postAndNavigate() {
    await dispatch(
      addOrderAction({
        name: nameRef.current.value,
        address: addressRef.current.value,
        date: formatDate(Date.now()),
        status: "Новый",
        comment: commentRef.current.value,
      })
    );
    navigate("/main");
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    postAndNavigate();
  };

  return (
    <Layout>
      <Navigation />
      <div className="add-order__container">
        <h1 className="add-order__title">Добавить заказ</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="add-order__input"
            ref={nameRef}
            type="text"
            placeholder="Введите ваше имя"
            required
          />
          <input
            className="add-order__input"
            ref={addressRef}
            type="text"
            placeholder="Введите ваш адрес"
            required
          />
          <input
            className="add-order__input"
            ref={commentRef}
            type="text"
            placeholder="Комментарий"
          />
          <button className="add-order__button" type="submit">
            Добавить заказ
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default AddOrderPage;
