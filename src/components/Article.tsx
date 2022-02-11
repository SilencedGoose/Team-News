import React, { FC } from "react";

interface props {
  src: articleProps;
}

let Article: FC<props> = ({ src }) => {
  let { headline, url, img, alt } = src;
  return (
    <div className="articleContainer">
      <a href={url}>
        <h2 className="articleHeadline">{headline}</h2>
        <img src={img} alt={alt} className="articlePicture" />
      </a>
    </div>
  );
};

export default Article;
