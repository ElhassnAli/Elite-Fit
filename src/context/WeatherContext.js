import { createContext } from "react";

export const WeatherContext = createContext();

export function convertDate(date) {
  const convertedDate = new Date(date).toLocaleDateString("en-Us", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return convertedDate;
}
export function convertWeatherCodeToIcon(code) {
  if (code == 0) return "☀️";
  if (code == 1 || code == 2 || code == 3) return "⛅";
  if (code == 45 || code == 48) return "🌫️";
  if (code == 51 || code == 55 || code == 53 || code == 57 || code == 56)
    return "🌧️";
  if (code == 61 || code == 65 || code == 63 || code == 67 || code == 66)
    return "🌨️";
  if (
    code == 75 ||
    code == 73 ||
    code == 71 ||
    code == 77 ||
    code == 86 ||
    code == 85
  )
    return "❄️";
  if (code == 82 || code == 81 || code == 80) return "🌦️";
  if (code == 95) return "🌩️";
  if (code == 99 || code == 96) return "⛈️";
  return "☀️";
}
