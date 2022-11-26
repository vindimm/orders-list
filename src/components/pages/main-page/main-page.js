import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getOrders } from "../../../store/selectors";
import Navigation from "../../navigation/navigation";
import Layout from "../../layout/layout";
import OrdersTable from "../../orders-table/orders-table";
import { fetchOrdersAction } from "../../../store/api-actions";
import "./style.css";

function MainPage() {
  const dispatch = useDispatch();
  const orders = useSelector(getOrders);

  useEffect(() => {
    dispatch(fetchOrdersAction());
  }, [dispatch]);

  return (
    <Layout>
      <Navigation />
      <OrdersTable orders={orders} />
    </Layout>
  );
}

export default MainPage;
