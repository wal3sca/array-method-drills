const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
<<<<<<< HEAD
  //
};

const isEveryWordShorterThan7 = () => {
  //
=======
  return nums.every((num) => num >= 2);
};

const isEveryWordShorterThan7 = () => {
  return words.every((word) => word.length < 7);
>>>>>>> a34824d564b377c755f5c2dd05d0244a9e82e68d
};

// Filter

const arrayLessThan5 = () => {
<<<<<<< HEAD
  //
};

const arrayOddLengthWords = () => {
  //
=======
  return nums.filter((num) => num < 5);
};

const arrayOddLengthWords = () => {
  return words.filter((word) => word.length % 2 !== 0);
>>>>>>> a34824d564b377c755f5c2dd05d0244a9e82e68d
};

// Find

const firstValDivisibleBy4 = () => {
<<<<<<< HEAD
  //
};

const firstWordLongerThan4Char = () => {
  //
=======
  return nums.find((num) => num % 4 === 0);
};

const firstWordLongerThan4Char = () => {
  return words.find((word) => word.length > 4);
>>>>>>> a34824d564b377c755f5c2dd05d0244a9e82e68d
};

// For Each

const logValuesTimes3 = () => {
<<<<<<< HEAD
  //
};

const logWordsWithExclamation = () => {
  //
=======
  return nums.forEach((num) => console.log(num * 3));
};

const logWordsWithExclamation = () => {
  return words.forEach((word) => console.log(word + "!"));
>>>>>>> a34824d564b377c755f5c2dd05d0244a9e82e68d
};

// Map

const arrayValuesTimes100TimesIndex = () => {
<<<<<<< HEAD
  //
};

const arrayWordsUpcased = () => {
  //
=======
  return nums.map((num, index) => num * num * index);
};

const arrayWordsUpcased = () => {
  return words.map((word) => word.toUpperCase());
>>>>>>> a34824d564b377c755f5c2dd05d0244a9e82e68d
};

// Some

const areSomeNumsDivisibleBy7 = () => {
<<<<<<< HEAD
  //
};

const doSomeWordsHaveAnA = () => {
  //
=======
  return nums.some((num) => num % 7 === 0);
};

const doSomeWordsHaveAnA = () => {
  return words.some((word) => /a/.test(word));
>>>>>>> a34824d564b377c755f5c2dd05d0244a9e82e68d
};

module.exports = {
  isEveryNumGreaterThan2,
  isEveryWordShorterThan7,
  arrayLessThan5,
  arrayOddLengthWords,
  firstValDivisibleBy4,
  firstWordLongerThan4Char,
  logValuesTimes3,
  logWordsWithExclamation,
  arrayValuesTimes100TimesIndex,
  arrayWordsUpcased,
  areSomeNumsDivisibleBy7,
  doSomeWordsHaveAnA,
};
