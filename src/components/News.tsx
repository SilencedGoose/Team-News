import { registerVersion } from "firebase/app";
import React, { FC, useEffect, useState } from "react";
import Article from "./Article";

let News: FC<{ location: string }> = ({ location }) => {
  let url = location
    ? "https://europe-west2-hackathon-2022-webscraper.cloudfunctions.net/country-webscraper?country=" +
      location
    : "https://europe-west2-hackathon-2022-webscraper.cloudfunctions.net/global-news-webscraper";

  let [weather, setWeather] = useState("weather here");
  useEffect(() => {
    getWeather(location, setWeather);
  }, [location]);

  let [news, setNews] = useState<articleProps[]>([]);
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setNews(data);
      })
      .catch((error) => {
        console.error("error fetching data: ", error);
      });
  }, [location]);

  return (
    <div id="news-container">
      <h1>
        {location
          ? "News in " + location[0].toUpperCase() + location.slice(1)
          : "Global News"}
      </h1>
      <h2 className="weather">{weather}</h2>
      <br />
      <div id="news-card-container">
        {news.map((src) => {
          return <Article src={src} />;
        })}
      </div>
    </div>
  );
};

export default News;

function getWeather(
  location: string,
  updator: React.Dispatch<React.SetStateAction<string>>
) {
  if (location === "") {
    updator("");
    return;
  }
  let url =
    "https://europe-west2-hackathon-2022-webscraper.cloudfunctions.net/weather-scraper?country=" +
    location;
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      let { region, weather_now, temp_now } = data;
      let template = `Weather in ${region} now: ${weather_now}, ${temp_now}°C`;
      updator(template);
    })
    .catch((error) => {
      console.error("error fetching data: ", error);
    });
}
