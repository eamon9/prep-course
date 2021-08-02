export {};

const library = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    isRead: true
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    isRead: true
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    isRead: false
  }
];

function addTicks (place: string) {
  return `'`+place+`'`;
}

const showStatus = (location) => {
  let titleCot;
  for (let i = 0; i < location.length; i++) {
    titleCot= location[i].title;
    if (location[i].isRead) {
      console.log("Already read "+ addTicks(titleCot)+ " by "+ location[i].author+".");
    }
    else {
      console.log("You still need to read "+addTicks(titleCot)+ " by "+ location[i].author+".");
    }
  }
};

showStatus(library);

/*
  Expected output:

  Already read 'Bill Gates' by The Road Ahead.
  Already read 'Steve Jobs' by Walter Isaacson.
  You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

*/