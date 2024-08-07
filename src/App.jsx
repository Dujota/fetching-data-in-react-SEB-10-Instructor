import { useState } from 'react';

// Services
import * as weatherService from './services/weatherService';

// Components
import WeatherSearch from './components/WeatherSearch/WeatherSearch';
// src/App.jsx
import WeatherDetails from './components/WeatherDetails/WeatherDetails';



const App = () => {

  const [weather, setWeather] = useState({})


  const getWeather = async (city) => {
    const data = await weatherService.show(city);

    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_c,
      condition: data.current.condition.text,
    };

    setWeather(newWeatherState);
  }

  console.log(weather)

  return (
    <main>
      <h1>Hello world!</h1>
      <WeatherSearch getWeather={getWeather}/>
      <WeatherDetails weather={weather} />
    </main>
  );
}

export default App