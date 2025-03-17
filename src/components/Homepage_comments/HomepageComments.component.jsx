import React from "react";

const HomepageComments = ({ userIcon, rating, comment, isLeft2Right }) => {
  return (
    <div
      className={`homepage-comments flex ${
        isLeft2Right ? "flex-row" : "flex-row-reverse"
      }  overflow-hidden w-full bg-gray-50 rounded-2xl `}
    >
      <div className="left-section p-4">
        <img
          src={userIcon}
          alt="User Icon"
          style={{ aspectRatio: "1 / 1" }}
          className="user-icon object-cover w-[10rem] h-[10rem] rounded-full"
        />
        <div className="rating-bar mt-4">
          <progress value={rating} max="5" className="progress-bar"></progress>
          <span className="rating-text ml-2">{rating}/5</span>
        </div>
      </div>
      <div className="right-section p-4">
        <p className="comment text-lg">{comment}</p>
      </div>
    </div>
  );
};

export default HomepageComments;
