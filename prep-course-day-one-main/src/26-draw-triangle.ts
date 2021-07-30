export {};

function draw(multiplyBy) {
    let stars = "";
    for(let i = 1; i <= multiplyBy; i++ ) {
        for(let j = 1; j <= multiplyBy; j++) {
            if(i >= j ) {
                stars = stars.concat("*");
            }
        }
        stars = stars.concat("\n");
    }
    console.log(stars);
}
draw(3);
/* Expected output:

    *
    **
    ***

*/

draw(5);
/* Expected output:

    *
    **
    ***
    ****
    *****

*/
