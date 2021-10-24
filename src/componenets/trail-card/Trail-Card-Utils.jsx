import { getAverageReview } from "../../utils";

// display difficulty
const renderButton = (difficulty) => {
  const diffText =
    difficulty === 1
      ? "easy"
      : difficulty === 2
      ? "medium"
      : difficulty === 3
      ? "hard"
      : difficulty === 4
      ? "challenging"
      : "";
  return (
    <span className={"badge card-badge bg-secondary " + diffText}>
      {diffText}
    </span>
  );
};

// display star based on average review
const renderReview = (review, requireCount = true) => {
  const numReview = review.length;
  const avgReview = getAverageReview(review);

  var maxStars = 5;
  var star = [];
  for (let i = 0; i < avgReview; i++) {
    star.push(<i key={i} className="fas fa-star star-yellow"></i>);
    maxStars--;
  }
  for (let i = 0; i < maxStars; i++) {
    star.push(<i key={i + "grey"} className="fas fa-star star-grey"></i>);
  }

  if (review.length < 1) {
    return;
  } else {
    return (
      <span>
        {star}
        {requireCount ? `(${numReview})` : null}
      </span>
    );
  }
};

export { renderButton, renderReview };
