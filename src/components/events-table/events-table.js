import "./style.css";

function EventsTable({ events }) {
  console.log(events);

  return (
    <table>
      <thead>
        <tr>
          <td>№</td>
          <td>Имя клиента</td>
          <td>Адрес</td>
          <td>Дата заказа</td>
          <td>Статус</td>
          <td>Комментарий</td>
        </tr>
      </thead>
      <tbody>
        {events.map((event) => (
          <tr key={event.id}>
            <td>{event.id}</td>
            <td>{event.name}</td>
            <td>{event.address}</td>
            <td>{event.date}</td>
            <td>{event.status}</td>
            <td>{event.comment}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EventsTable;
