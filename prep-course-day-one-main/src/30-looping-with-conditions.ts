export {};

function onlyTheAces(arr) {
  let mainCard= "Ace"
  let allAces= arr.filter(word => {
    return mainCard.includes(word);
  })
  return allAces;
}
console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']