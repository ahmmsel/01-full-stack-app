export default function formatDate(date) {
 return new Date(date).toLocaleString("en-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  })
}