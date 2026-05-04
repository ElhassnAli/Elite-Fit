// fetch city Location (latitude,longitude)

export async function fetchCountryLocation(city) {
  const res = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=4&language=en&format=json`,
  );
  if (!res.ok) throw new Error("Faild to Fetch City Location");
  const data = await res.json();
  return data;
}
