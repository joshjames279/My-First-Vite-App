import React from "react";
import { useQuery } from "react-query";

const mykey = `${import.meta.env.VITE_WEATHER_API_KEY}`;

export const Weather = () => {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=london&appid=${mykey}&units=metric`
    ).then((res) => res.json())
  );

  if (isLoading) return <h1>"Loading...";</h1>;

  if (error) return <h1>"An error has occurred."</h1>;

  return (
    <div>
      <p>{data.name}</p>
      <p>{data.sys.country}</p>
      <strong>🌡{Math.round(data.main.temp)}</strong>{" "}
    </div>
  );
};
