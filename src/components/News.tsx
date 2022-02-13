import React, { FC, useEffect, useState } from "react";
import Article from "./Article";

let News: FC<{ location: string }> = ({ location }) => {
  let url = location
    ? "https://europe-west2-hackathon-2022-webscraper.cloudfunctions.net/country-webscraper?country=" +
      location
    : "https://europe-west2-hackathon-2022-webscraper.cloudfunctions.net/global-news-webscraper";

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
      <div id="news">
        <h1>{location ? "News in " + location[0].toUpperCase()+location.slice(1) : "Global News"}</h1>
        <br />
        <div id="news-content">
          {news.map((src) => {
            return <Article src={src} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default News;
