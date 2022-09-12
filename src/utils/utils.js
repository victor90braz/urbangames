const getWords = (word, start, end) =>
  word.fact?.split(" ").slice(start, end).join(" ");

export default getWords;
