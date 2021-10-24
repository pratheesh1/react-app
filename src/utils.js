/*  -------- ** -------- | non-specific modules |  -------- ** --------  */
//get day of the week
export const getDayOfWeek = (date) => {
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
export const getMonthName = (date) => {
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

//shuffle array
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export function shuffle(array) {
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

/*  -------- ** -------- | project specific modules |  -------- ** --------  */
//get number of reviews for a paricular rating
export const getNumber = (element, number) => {
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

//get percentage of reviews for a paricular rating
export const getPercentage = (element, number) => {
  const review = element.review ? element.review.length : 0;
  if (review) {
    const numberOfReview = element.review.filter(
      (review) => review.rating === number
    ).length;
    var percentage = (numberOfReview / review) * 100;
    if (percentage > 50) {
      percentage = 65;
    }
    return percentage.toString() + "%";
  } else {
    return "0%";
  }
};

//calculate avg review of given trail
export const getAverageReview = (review) => {
  if (!review.length > 0) {
    return 0;
  } else {
    const numReview = review.length;
    if (numReview === 1) {
      return review[0].rating;
    } else {
      const reviewNumber = review.map((e) => e.rating);
      const avgReview = reviewNumber.reduce((a, b) => a + b) / numReview;
      return avgReview;
    }
  }
};

//compare functions for sorting trail data based on review
const reviewCompareFunc = (a, b) => {
  return getAverageReview(b.review) - getAverageReview(a.review);
};
const completionTimeCompareFunc = (a, b) => {
  return b.timeToComplete - a.timeToComplete;
};
const difficultyCompareFunc = (a, b) => {
  return b.difficulty - a.difficulty;
};

//sort traildata based on review
export const sortTrailData = (data, field) => {
  let inputData = data;
  if (field === "review") {
    inputData.sort(reviewCompareFunc);
  } else if (field === "completionTime") {
    inputData.sort(completionTimeCompareFunc);
  } else if (field === "difficulty") {
    inputData.sort(difficultyCompareFunc);
  }
  return inputData;
};

//filter trails data
export const filterTrailData = (data, filterType) => {
  if (filterType === "photo") {
    return data.filter((trail) => trail.images.length > 0);
  } else if (filterType === "review") {
    return data.filter((trail) => trail.review.length > 0);
  } else {
    return data;
  }
};
