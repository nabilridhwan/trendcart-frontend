import { useState } from "react";

interface RatingProps {
  rating: number;
  disabled?: boolean;
  onChange?: (rating: number) => void;
}

export default function Rating(props: RatingProps) {
  const { rating, disabled = true, onChange } = props;

  const [rt, setRt] = useState(rating);

  return (
    <div>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          className={"text-orange-400"}
          key={i}
          onClick={() => {
            if (!disabled) {
              setRt(i);
              onChange?.(i);
            }
          }}
        >
          {i <= rt ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}
