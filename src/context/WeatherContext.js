import { createContext } from "react";
import clearDay from "@meteocons/svg/fill/clear-day.svg";
import partlyCloudyDay from "@meteocons/svg/fill/partly-cloudy-day.svg";
import fog from "@meteocons/svg/fill/fog.svg";
import drizzle from "@meteocons/svg/fill/drizzle.svg";
import sleet from "@meteocons/svg/fill/sleet.svg";
import overcastSnow from "@meteocons/svg/fill/overcast-snow.svg";
import clearDmostlyClearDayRainay from "@meteocons/svg/fill/mostly-clear-day-rain.svg";
import extremeThunderstormsDrizzle from "@meteocons/svg/fill/extreme-thunderstorms-drizzle.svg";
import extremeThunderstormsSleet from "@meteocons/svg/fill/extreme-thunderstorms-sleet.svg";
import clearNight from "@meteocons/svg/fill/clear-night.svg";
import cloudy from "@meteocons/svg/fill/cloudy.svg";
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

export function convertWeatherCodeToIcon(weatherCode, dayOrNight) {
  if (dayOrNight === 1) {
    if (weatherCode == 0) return clearDay;
    if (weatherCode == 1 || weatherCode == 2 || weatherCode == 3)
      return partlyCloudyDay;
    if (weatherCode == 45 || weatherCode == 48) return fog;
    if (
      weatherCode == 51 ||
      weatherCode == 55 ||
      weatherCode == 53 ||
      weatherCode == 57 ||
      weatherCode == 56
    )
      return drizzle;
    if (
      weatherCode == 61 ||
      weatherCode == 65 ||
      weatherCode == 63 ||
      weatherCode == 67 ||
      weatherCode == 66
    )
      return sleet;
    if (
      weatherCode == 75 ||
      weatherCode == 73 ||
      weatherCode == 71 ||
      weatherCode == 77 ||
      weatherCode == 86 ||
      weatherCode == 85
    )
      return overcastSnow;
    if (weatherCode == 82 || weatherCode == 81 || weatherCode == 80)
      return clearDmostlyClearDayRainay;
    if (weatherCode == 95) return extremeThunderstormsDrizzle;
    if (weatherCode == 99 || weatherCode == 96)
      return extremeThunderstormsSleet;
    return clearDay;
  }
  if (dayOrNight === 0) {
    if (weatherCode == 0) return clearNight;
    if (weatherCode == 1 || weatherCode == 2 || weatherCode == 3) return cloudy;
    if (weatherCode == 45 || weatherCode == 48) return fog;
    if (
      weatherCode == 51 ||
      weatherCode == 55 ||
      weatherCode == 53 ||
      weatherCode == 57 ||
      weatherCode == 56
    )
      return drizzle;
    if (
      weatherCode == 61 ||
      weatherCode == 65 ||
      weatherCode == 63 ||
      weatherCode == 67 ||
      weatherCode == 66
    )
      return sleet;
    if (
      weatherCode == 75 ||
      weatherCode == 73 ||
      weatherCode == 71 ||
      weatherCode == 77 ||
      weatherCode == 86 ||
      weatherCode == 85
    )
      return overcastSnow;
    if (weatherCode == 82 || weatherCode == 81 || weatherCode == 80)
      return clearDmostlyClearDayRainay;
    if (weatherCode == 95) return extremeThunderstormsDrizzle;
    if (weatherCode == 99 || weatherCode == 96)
      return extremeThunderstormsSleet;
    return clearDay;
  }
}
