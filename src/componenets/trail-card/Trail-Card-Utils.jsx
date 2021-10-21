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
  const avgReview =
    numReview > 1
      ? review.reduce((previousValue, currentValue) => ({
          rating: previousValue.rating + currentValue.rating,
        })).rating / numReview
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
        {requireCount ? `(${numReview})` : null}
      </span>
    );
  }
};

//get day of the week
const getDayOfWeek = (date) => {
  const d = new Date(date);
  const day = d.getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[day];
};

//get month of the year
const getMonthName = (date) => {
  const d = new Date(date);
  const month = d.getDay();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[month];
};

//get percentage of reviews for a paricular rating
const getPercentage = (element, number) => {
  const review = element.review ? element.review.length : 0;
  if (review) {
    const numberOfReview = element.review.filter(
      (review) => review.rating === number
    ).length;
    const percentage = (numberOfReview / review) * 100;
    return percentage.toString() + "%";
  } else {
    return "0%";
  }
};

//get number of reviews for a paricular rating
const getNumber = (element, number) => {
  const review = element.review ? element.review.length : 0;
  if (review) {
    const numberOfReview = element.review.filter(
      (review) => review.rating === number
    );
    return `(${numberOfReview.length})`;
  } else {
    return "(0)";
  }
};

//shuffle array
function shuffle(array) {
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

export {
  renderButton,
  renderReview,
  getDayOfWeek,
  getMonthName,
  getPercentage,
  getNumber,
  shuffle,
};
