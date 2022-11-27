import "./style.css";

function Modal({ isModalOpen, handleDeleteOrder, handleCloseModal }) {
  const handleOkClick = () => {
    handleDeleteOrder();
    handleCloseModal();
  };

  const handleCancelClick = () => {
    handleCloseModal();
  };

  const handleEscKeyDown = (evt) => {
    if (evt.key === "Escape") {
      handleCloseModal();
    }
  };

  const handleOverlayClick = (evt) => {
    if (evt.target.classList.contains("modal-overlay")) {
      handleCloseModal();
    }
  }

  return (
    isModalOpen && (
      <div className="modal-overlay" onKeyDown={handleEscKeyDown} onClick={(evt) => handleOverlayClick(evt)}>
        <div className="modal">
          <h2 className="modal__title">
            Вы действительно хотите удалить заказ?
          </h2>
          <div className="modal__button-wrapper">
            <button className="modal__button" type="button" onClick={handleOkClick}>
              Ок
            </button>
            <button className="modal__button" type="button" onClick={handleCancelClick} autoFocus>
              Отмена
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default Modal;
