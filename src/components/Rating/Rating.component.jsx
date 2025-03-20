import { Star, StarHalf } from "lucide-react";

function Rating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex text-yellow-400">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} fill="currentColor" stroke="none" />
      ))}
      {hasHalfStar && <StarHalf fill="currentColor" stroke="none" />}
    </div>
  );
}

export default Rating;
