import React, { FC, useEffect, useState } from "react";
import Article from "./Article";

let News: FC = () => {
  let [news, setNews] = useState<articleProps[]>([]);
  useEffect(() => {
    fetch(
      "https://europe-west2-hackathon-2022-webscraper.cloudfunctions.net/global-news-webscraper"
    )
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
  }, []);

  return (
    <div id="news-container">
      <div id="news">
        <h1>Global News</h1>
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
