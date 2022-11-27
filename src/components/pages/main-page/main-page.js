import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getOrders } from "../../../store/selectors";
import Navigation from "../../navigation/navigation";
import Layout from "../../layout/layout";
import OrdersTable from "../../orders-table/orders-table";
import Modal from "../../modal/modal";
import {
  fetchOrdersAction,
  deleteOrderAction,
} from "../../../store/api-actions";
import "./style.css";

function MainPage() {
  const dispatch = useDispatch();
  const orders = useSelector(getOrders);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deletingOrderId, setDeletingOrderId] = useState(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleDeletingOrderId = (id) => {
    setDeletingOrderId(id);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteOrder = (deletingOrderId) => {
    setDeletingOrderId(null);
    setIsModalOpen(false);
    dispatch(deleteOrderAction(deletingOrderId));
  };

  useEffect(() => {
    dispatch(fetchOrdersAction());
  }, [dispatch]);

  return (
    <Layout>
      <Navigation />
      <OrdersTable
        orders={orders}
        handleOpenModal={handleOpenModal}
        handleDeletingOrderId={handleDeletingOrderId}
      />
      <Modal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        handleDeleteOrder={() => handleDeleteOrder(deletingOrderId)}
      />
    </Layout>
  );
}

export default MainPage;
