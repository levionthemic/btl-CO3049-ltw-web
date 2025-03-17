import React from "react";

const HomepageCard = ({ imageSrc, title, description }) => {
  return (
    <div className="homepage-card p-2 rounded-lg bg-mainColor1-400 w-[30vw] h-[50vh] overflow-hidden">
      <img
        src={imageSrc}
        alt={title}
        className="homepage-card-image object-cover w-full h-2/3"
      />
      <h3
        className="homepage-card-title 
      mt-3 text-2xl text-center font-bold text-white"
      >
        {title}
      </h3>
      <p
        className="homepage-card-description
      mt-3 text-lg text-center"
      >
        {description}
      </p>
    </div>
  );
};

export default HomepageCard;
