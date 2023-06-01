import { useState } from "react";

type SingleWeatherData = {
  app_temp: number;
  city_name: string;
  weather: { description: string; icon: string };
};

const useFetchWeather = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<SingleWeatherData | null>(null);
  const abortController = new AbortController();

  const fetchWeatherData = async (cityName: string, countryName: string) => {
    setLoading(true);
    setError("");

    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `https://api.weatherbit.io/v2.0/current?city=${cityName}&country=${countryName}&key=${apiKey}`;
    try {
      const response = await fetch(url, { signal: abortController.signal });
      if (!response.ok)
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      const data = await response.json();
      setLoading(false);
      setData(data.data[0]);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
      setLoading(false);
    }
  };
  return { loading, error, data, fetchWeatherData, abortController };
};

export default useFetchWeather;
