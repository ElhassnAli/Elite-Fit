export function formatDate(date) {
  const convertedDate = new Date(date).toLocaleDateString("en-Us", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return convertedDate;
}
