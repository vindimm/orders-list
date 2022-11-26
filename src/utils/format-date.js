// Принимает дату в виде строки из кол-ва мс и возвращает строку в формате "дд месяц гггг"
export const formatDate = (date) => new Intl.DateTimeFormat("ru-RU", {
  day: "2-digit",
  month: "long",
  year: "numeric",
})
  .format(date)
  .slice(0, -3);
