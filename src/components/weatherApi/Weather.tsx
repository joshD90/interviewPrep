import React, { FC, useEffect, useState } from "react";
import "./weather.css";
import useFetchWeather from "./useFetchWeather";

const Weather: FC = () => {
  const { loading, error, data, fetchWeatherData, abortController } =
    useFetchWeather();
  const [searchParams, setSearchParams] = useState({ city: "", country: "" });

  useEffect(() => {
    return () => abortController.abort();
  }, [abortController]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchParams((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = () => {
    if (searchParams.city === "" || searchParams.country === "") return;
    fetchWeatherData(searchParams.city, searchParams.country);
    setSearchParams({ city: "", country: "" });
  };

  if (loading) return <div className="weather-container">...Loading</div>;
  if (error !== "") return <div className="weather-container">{error}</div>;

  return (
    <div className="weather-container">
      {data ? (
        <div className="weather-data-div">
          <p>Temperature: {data.app_temp}</p>
          <p>City: {data.city_name}</p>
          <p>Description: {data.weather.description}</p>
          <p>{data.weather.icon}</p>
        </div>
      ) : (
        <></>
      )}
      <div>
        <form onSubmit={handleSubmit} className="weather-form">
          <div className="formInput">
            <label htmlFor="cityText">City Name</label>
            <input
              type="text"
              placeholder="Enter city name here"
              name="cityText"
              id="city"
              value={searchParams.city}
              onChange={handleInputChange}
            />
          </div>
          <div className="formInput">
            <label htmlFor="countryText">Country Name</label>
            <input
              type="text"
              placeholder="Enter country name here"
              name="countryText"
              id="country"
              value={searchParams.country}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Get Weather</button>
        </form>
      </div>
    </div>
  );
};

export default Weather;
