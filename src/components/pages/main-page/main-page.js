import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getEvents } from "../../../store/selectors";
import Navigation from "../../navigation/navigation";
import Layout from "../../layout/layout";
import EventsTable from "../../events-table/events-table";
import { fetchEventsAction } from "../../../store/api-actions";
import "./style.css";

function MainPage() {
  const dispatch = useDispatch();
  const events = useSelector(getEvents);

  useEffect(() => {
    dispatch(fetchEventsAction());
  }, [dispatch]);

  return (
    <Layout>
      <Navigation />
      <EventsTable events={events} />
    </Layout>
  );
}

export default MainPage;
