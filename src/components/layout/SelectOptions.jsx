import Option from "./Option";
import { useWeather } from "../../context/WeatherContext";

function SelectOptions() {
  const { isMetric, setIsMetric, setUnitSysOpen } = useWeather();

  const settingsData = [
    {
      id: 1,
      label: "Temperature",
      options: ["Celsius (°C)", "Fahrenheit (°F)"],
    },
    {
      id: 2,
      label: "Wind Speed",
      options: ["km/h", "mph"],
    },
    {
      id: 3,
      label: "Precipitation",
      options: ["Millimeters (mm)", "Inches (in)"],
    },
  ];

  return (
    <div className="absolute top-12 z-50 w-55 bg-[#25253f] right-0 rounded-2xl text-left p-3 ">
      <button
        className=" cursor-pointer hover:bg-[#2f2f49] w-full flex items-center rounded-xl p-2"
        onClick={() => {
          setIsMetric((e) => !e);
          setUnitSysOpen(false);
        }}
      >
        Switch to {isMetric ? "Imperial" : "Metric"}
      </button>
      <ul>
        {settingsData.map((e) => (
          <Option props={e} key={e.id} />
        ))}
      </ul>
    </div>
  );
}
export default SelectOptions;
// Units Switch to Imperial/Metric Temperature Celsius (°C) Fahrenheit (°F) Wind Speed km/h mph Precipitation Millimeters (mm) Inches (in)
