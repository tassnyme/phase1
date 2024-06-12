import TopButtons from "./components/TopButtons";
import React, { useEffect, useState } from 'react';
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./weatherService";

function App() {
  const hover ='cursor-pointer transition ease-out hover:scale-125'
  const [query, setQuery] = useState({ q: 'Tunisia' }); // Fixed useState initialization
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);


 

  useEffect(() => { getWeather(); }, [query, units]); 
  
  
  return (
    <div className="mx-auto w-screen mt-4 py-5 px-16 shadow-xl shadow-gray-400 bg-purplee h-100 bg-gradient-to-r from-purplee via-blue-700  "> {/* Fixed class name */}
      
      <TopButtons />
      <Inputs  />
      
      {weather &&
        <div className="grid grid-cols-2 grid-rows-3 gap-4 ">
          <TimeAndLocation  />
          <TempAndDetails />
          <Forecast/> // for 3 hours forecast
          <Forecast/> //daily forecast
        </div>
      }
    </div>
    
  );
}

export default App;
