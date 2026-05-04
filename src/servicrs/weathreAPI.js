export async function fetchWeatherData(lat, lon) {
  const URL = `
https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,weather_code,is_day&current=precipitation,temperature_2m,wind_speed_10m,weather_code,is_day,relative_humidity_2m,apparent_temperature&timezone=auto&past_days=0&forecast_days=7`;
  const res = await fetch(URL);
  if (!res.ok) throw new Error("Faild To Fetch Weather Data");
  const data = await res.json();
  return data;
}
