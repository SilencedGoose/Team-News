import React, { FC } from "react";

interface props {
  src: articleProps;
}

let Article: FC<props> = ({ src }) => {
  let { title, link, image, alt } = src;
  return (
    <div className="articleContainer">
      <a href={link}>
        <h2 className="articleHeadline">{title}</h2>
        <img src={image} alt={alt} className="articlePicture" />
      </a>
    </div>
  );
};

export default Article;
