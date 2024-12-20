import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

type RatingProps = {
  totalStars?: number;
  onRatingChange?: (rating: number) => void;
};

const Rating: React.FC<RatingProps> = ({ totalStars = 5, onRatingChange }) => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  const handleRating = (rating: number) => {
    setRating(rating);
    if (onRatingChange) {
      onRatingChange(rating);
    }
  };

  return (
    <div>
      {Array.from({ length: totalStars }, (_, index) => {
        const starIndex = index + 1;
        return (
          <label key={starIndex}>
            <input
              type="radio"
              name="rating"
              value={starIndex}
              onClick={() => handleRating(starIndex)}
              style={{ display: 'none' }}
            />
            <FaStar
              color={starIndex <= (hover || rating) ? 'gold' : 'grey'}
              size={30}
              onMouseEnter={() => setHover(starIndex)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
