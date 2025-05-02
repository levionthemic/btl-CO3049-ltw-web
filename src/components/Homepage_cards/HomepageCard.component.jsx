import React from "react";

const HomepageCard = ({ imageSrc, title, description }) => {
  return (
    <div className="homepage-card p-4 rounded-lg bg-mainColor-200 w-full h-auto overflow-hidden">
      <img
        src={imageSrc}
        alt={title}
        className="homepage-card-image object-cover w-full h-3/5 rounded-lg"
      />
      <h3
        className="homepage-card-title 
      mt-3 text-2xl text-center font-bold text-white"
      >
        {title}
      </h3>
      <p
        className="homepage-card-description
      mt-3 mb-1 text-lg text-center"
      >
        {description}
      </p>
    </div>
  );
};

export default HomepageCard;
