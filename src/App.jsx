import { useState } from "react";

import Header from "./components/Header";
import { WeatherContext } from "./context/WeatherContext";
WeatherContext;
function App() {
  const [isMetric, setIsMetric] = useState(true);
  const [unitSysOpen, setUnitSysOpen] = useState(false);
  return (
    <WeatherContext.Provider
      value={{ isMetric, setIsMetric, unitSysOpen, setUnitSysOpen }}
    >
      <div className="bg-[#02012b] w-[80%] m-auto">
        <Header />
      </div>
    </WeatherContext.Provider>
  );
}

export default App;
