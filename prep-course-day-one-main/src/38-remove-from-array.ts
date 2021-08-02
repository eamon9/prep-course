export {};

const removeFromArray = function(arr, ...toRemove) {
  for (let i = 0; i < toRemove.length; i++) {
      let index = arr.indexOf(toRemove[i]);
      if (index === -1) continue;
      arr.splice(index, 1);
  }
  return arr;
}

console.log(removeFromArray([1, 2, 3, 4], 3)); // Expected output: [1, 2, 4]
console.log(removeFromArray([1, 2, 3, 4], 7)); // Expected output: [1, 2, 3, 4]
console.log(removeFromArray([1, 2, 3, 4], 7, 2)); // Expected output: [1, 3, 4]