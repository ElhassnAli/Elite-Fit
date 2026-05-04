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

export const WEATHER_ICONS = {
  1: {
    0: clearDay,
    1: partlyCloudyDay,
    2: partlyCloudyDay,
    3: partlyCloudyDay,
    45: fog,
    48: fog,
    51: drizzle,
    53: drizzle,
    55: drizzle,
    57: drizzle,
    56: drizzle,
    61: sleet,
    65: sleet,
    63: sleet,
    67: sleet,
    66: sleet,
    75: overcastSnow,
    73: overcastSnow,
    71: overcastSnow,
    77: overcastSnow,
    86: overcastSnow,
    85: overcastSnow,
    80: clearDmostlyClearDayRainay,
    81: clearDmostlyClearDayRainay,
    82: clearDmostlyClearDayRainay,
    95: extremeThunderstormsDrizzle,
    96: extremeThunderstormsSleet,
    99: extremeThunderstormsSleet,
  },
  0: {
    0: clearNight,
    1: cloudy,
    2: cloudy,
    3: cloudy,
    45: fog,
    48: fog,
    51: drizzle,
    53: drizzle,
    55: drizzle,
    57: drizzle,
    56: drizzle,
    61: sleet,
    65: sleet,
    63: sleet,
    67: sleet,
    66: sleet,
    75: overcastSnow,
    73: overcastSnow,
    71: overcastSnow,
    77: overcastSnow,
    86: overcastSnow,
    85: overcastSnow,
    80: clearDmostlyClearDayRainay,
    81: clearDmostlyClearDayRainay,
    82: clearDmostlyClearDayRainay,
    95: extremeThunderstormsDrizzle,
    96: extremeThunderstormsSleet,
    99: extremeThunderstormsSleet,
  },
};
