import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Navigation from "../navigation/navigation";
import Layout from "../layout/layout";
import { fetchOrdersAction } from "../../store/api-actions";
import "./style.css";

function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrdersAction());
  });

  return (
    <Layout>
      <Navigation />
      <h1>This is all orders page</h1>
    </Layout>
  );
}

export default MainPage;
