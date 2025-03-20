import React from "react";
import Rating from "~/components/Rating/Rating.component.jsx";

const HomepageComments = ({ userIcon, rating, comment, isLeft2Right }) => {
  return (
    <div
      className={`homepage-comments flex flex-col lg:flex ${
        isLeft2Right ? "lg:flex-row" : "lg:flex-row-reverse"
      } justify-evenly overflow-hidden w-full bg-gray-50 rounded-2xl `}
    >
      <div className="left-section p-4 min-w-[15vw] flex flex-col items-center">
        <img
          src={userIcon}
          alt="User Icon"
          className="user-icon w-20 h-20 
          sm:w-24 sm:h-24 
          md:w-32 md:h-32 lg:w-40 lg:h-40 aspect-square object-cover rounded-full"
        />

        <Rating rating={rating} />
      </div>
      <div className="right-section p-4 flex items-center">
        <p
          className={`comment text-lg ${isLeft2Right ? "text-left" : "text-right"}`}
        >
          {comment}
        </p>
      </div>
    </div>
  );
};

export default HomepageComments;
