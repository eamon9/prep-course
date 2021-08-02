export {};

const books = [
  {
    title: "4 hour work week",
    author: "Tim Ferris"
  },
  {
    title: "Tools of Titans",
    author: "Tim Ferris"
  }
];

const getTheTitles = (arr) => {
  let Titles= [];
  for (let i=0; i< arr.length; i++) {
      Titles.push(arr[i].title);
  }
  return Titles
};

console.log(getTheTitles(books)); // Expected output: ['4 hour work week', 'Tools of Titans']
