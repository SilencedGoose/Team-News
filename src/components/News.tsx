import React, { FC, useEffect, useState } from "react";
import Article from "./Article";

let News: FC<newsProps> = ({ data }) => {
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
  });

  return (
    <div className="news-container">
      <h1>News Article</h1>
      {news.map((src) => {
        return <Article src={src} />;
      })}
    </div>
  );
};

export default News;
