import React, { FC } from "react";
import Article from "./Article";

let News: FC<newsProps> = ({ data }) => {
  return (
    <div className="news">
      <h1>this is the news!</h1>
      {data.map((item) => (
        <Article src={item} />
      ))}
    </div>
  );
};

export default News;
