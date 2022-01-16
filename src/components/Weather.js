import React, { useState } from "react";
import axios from "axios";

function Weather() {
  const apikey = "c1c1429a9ed323e5f2bb9bbfbb203ad1";

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([{}]);

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    );
    setWeather(response.data);
  };
  return (
    <div class="position-absolute top-50 start-50 translate-middle border border-danger border border-4 shadow-lg p-5 mb-3 bg-body rounded">
      <form>
        <div class="mb-3 ">
          <input
            class="form-control input"
            placeholder="Enter City"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            autoFocus
          />
        </div>
        <button type="submit" class="btn btn-primary" onClick={fetchWeather}>
          Enter
        </button>
      </form>
      {typeof weather.main === "undefined" ? (
        <div>
          <p>Welcome to weather app!Enter in a city to get the weather </p>
        </div>
      ) : (
        <div class='py-4'>
          <p>{weather.name}</p>
          <p>{Math.round(weather.main.temp - 273)}°C</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
