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
const renderReview = (review) => {
  const numReview = review.length;
  const avgReview =
    numReview > 1
      ? review.reduce(
          (previousValue, currentValue) =>
            previousValue.rating + currentValue.rating
        ) / numReview
      : numReview === 1
      ? review[0].rating
      : 0;

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
        {`(${numReview})`}
      </span>
    );
  }
};

export { renderButton, renderReview };
