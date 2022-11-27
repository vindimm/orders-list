import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addOrderAction } from "../../../store/api-actions";
import { formatDate } from "../../../utils/format-date";
import { getUser } from "../../../store/selectors";
import Navigation from "../../navigation/navigation";
import Layout from "../../layout/layout";
import "./style.css";

function AddOrderPage() {
  const user = useSelector(getUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [address, setAddress] = useState("");
  const [comment, setComment] = useState("");

  async function postAndNavigate() {
    await dispatch(
      addOrderAction({
        name: name,
        address: address,
        date: formatDate(Date.now()),
        status: "Новый",
        comment: comment,
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
            type="text"
            value={name}
            required
            onChange={(evt) => setName(evt.target.value)}
          />
          <input
            className="add-order__input"
            type="text"
            placeholder="Введите ваш адрес"
            required
            onChange={(evt) => setAddress(evt.target.value)}
          />
          <input
            className="add-order__input"
            type="text"
            placeholder="Комментарий"
            onChange={(evt) => setComment(evt.target.value)}
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
