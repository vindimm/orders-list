import "./style.css";
import Navigation from "../navigation/navigation";
import Layout from "../layout/layout";

function MainPage() {
  return (
    <Layout>
      <Navigation />
      <h1>This is all orders page</h1>
    </Layout>
  );
}

export default MainPage;
