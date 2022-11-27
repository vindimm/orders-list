import { useSelector, useDispatch } from "react-redux";

import { completeOrderAction } from "../../store/api-actions";
import { getUser } from "../../store/selectors";
import "./style.css";

function OrdersTable({
  orders,
  handleOpenModal,
  handleDeletingOrderId,
  handleSortingData,
}) {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const handleDeleteButtonClick = (id) => {
    handleOpenModal();
    handleDeletingOrderId(id);
  };

  const handleOrderComplete = (order) => {
    const updatedOrder = Object.assign({}, order);
    updatedOrder.status = "Выполнен";
    dispatch(completeOrderAction(updatedOrder));
  };

  const handleSortingButtonClick = (sortingParams) => {
    handleSortingData(sortingParams);
  };

  return (
    <table>
      <thead>
        <tr>
          <td>№</td>
          <td>Имя клиента</td>
          <td>
            Адрес
            <button
              className="orders-table__button orders-table__button--sorting"
              onClick={() => handleSortingButtonClick(["address", "asc"])}
            >
              &#9650;
            </button>
            <button
              className="orders-table__button orders-table__button--sorting"
              onClick={() => handleSortingButtonClick(["address", "desc"])}
            >
              &#9660;
            </button>
          </td>
          <td>
            Дата заказа
            <button
              className="orders-table__button orders-table__button--sorting"
              onClick={() => handleSortingButtonClick(["date", "asc"])}
            >
              &#9650;
            </button>
            <button
              className="orders-table__button orders-table__button--sorting"
              onClick={() => handleSortingButtonClick(["date", "desc"])}
            >
              &#9660;
            </button>
          </td>
          <td>Статус</td>
          <td>Комментарий</td>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr
            className={`order--${
              order.status === "Выполнен" ? "completed" : "new"
            }`}
            key={order.id}
          >
            <td>{order.id}</td>
            <td>{order.name}</td>
            <td>{order.address}</td>
            <td>{order.date}</td>
            <td>{order.status}</td>
            <td>{order.comment}</td>
            {user.role === "ADMIN" && order.status !== "Выполнен" && (
              <td>
                <button
                  className="orders-table__button orders-table__button--complete"
                  type="button"
                  onClick={() => handleOrderComplete(order)}
                >
                  V
                </button>
              </td>
            )}
            {user.role === "ADMIN" && (
              <td>
                <button
                  className="orders-table__button orders-table__button--delete"
                  type="button"
                  onClick={() => handleDeleteButtonClick(order.id)}
                >
                  X
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default OrdersTable;
