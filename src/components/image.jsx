import React from "react";

export const Image = ({ title, largeImage, smallImage, desc }) => {
  return (
    <div   style={{height: '250px'}} className="portfolio-item">
      <div className="hover-bg">
        {" "}
        <a href={largeImage} title={title} data-lightbox-gallery="gallery1">
          <div className="hover-text">
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
          <img  style={{height: '250px'}} src={smallImage} className="img-responsive" alt={title} />{" "}
        </a>{" "}
      </div>
    </div>
  );
};
