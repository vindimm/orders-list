// import { useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// import { getAuthStatus, getUser } from "../../store/selectors"
// import { logoutAction } from "../../store/api-actions";
import "./style.css";

function Modal({ isModalOpen, handleDeleteOrder, handleCloseModal }) {
  const handleOkClick = () => {
    handleDeleteOrder();
    handleCloseModal();
  };

  const handleCancelClick = () => {
    handleCloseModal();
  };

  return (
    isModalOpen && (
      <div className="modal-container">
        <div className="modal">
          <h2 className="modal__title">
            Вы действительно хотите удалить заказ?
          </h2>
          <div className="modal__button-wrapper">
            <button
              className="modal__button"
              type="button"
              onClick={handleOkClick}
            >
              Ок
            </button>
            <button
              className="modal__button"
              type="button"
              onClick={handleCancelClick}
            >
              Отмена
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default Modal;
