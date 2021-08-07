function tidyUpString(str) {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

// You are allowed to edit this function
function capitalise(str) {
  return str.charAt(0).toUpperCase()+ str.slice(1);
}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];

// const map = (arr) => {
//   let result = arr.map(nr => tidyUpString(nr));
//   let result2 = result.map(nr => capitalise(nr));
//   return result2;
// };

const mentorsTidy = function map(mentors) {
  let result = mentors.map(nr => tidyUpString(nr));
  let result2 = result.map(nr => capitalise(nr));
  return result2;
};

//let mentorsTidy = map(mentors); // You are allowed to edit this line

console.log(mentorsTidy(mentors)); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]