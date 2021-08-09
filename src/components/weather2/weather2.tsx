import React from "react";
const mykey = `${import.meta.env.VITE_WEATHER_API_KEY}`;
import { useState } from "react";
import { useQuery } from "react-query";

export const Weather2 = () => {
  let [city, setCity] = useState("london");
  const { isLoading, error, data } = useQuery("repoData", (e) =>
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${mykey}&units=metric`
    ).then((res) => res.json())
  );

  console.log(city);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("You clicked submit.");
  };

  if (isLoading) return <h1>"Loading...";</h1>;

  if (error) return <h1>"An error has occurred."</h1>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="city"
          id="cityName"
          onChange={(event) => setCity(event.target.value)}
          value={city}
        />
        <button type="submit">Enter</button>
      </form>
      <p>{data.name}</p>
      <p>{data.sys.country}</p>
      <strong>🌡{Math.round(data.main.temp)}</strong>{" "}
    </div>
  );
};
