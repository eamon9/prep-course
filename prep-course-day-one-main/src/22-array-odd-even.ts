export {};

function goThroughNumbers(start, end) {
    let arr= [];
    for (let i=start; i<= end;  i++) {
        arr= arr+i;
        isEven(i)
    }
    if (start < end) {
        return arr;
    }
    else {
        return console.log("invalid input");
    }
}
function isEven(value){
    if (value%2 == 0)
        return console.log("> "+value+" - even");
    else {
        return console.log("> "+value+" - odd");
    }
} 


goThroughNumbers(3, 7);
/* Expected output:

    > 3 - odd
    > 4 - even
    > 5 - odd
    > 6 - even
    > 7 - odd

*/

goThroughNumbers(8, 12);
/* Expected output:

    > 8 - even
    > 9 - odd
    > 10 - even
    > 11 - odd
    > 12 - even

*/

goThroughNumbers(4, 3);
// Expected output: 'invalid input'
