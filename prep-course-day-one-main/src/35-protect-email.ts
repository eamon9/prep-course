export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */
function protectEmail(email) {
  let avg;
  let split;
  let p1;
  let p2;
  split= email.split("@"); // 'secret123 ' and 'codelex.io'
  p1= split[0]; // 'secret123 '
  avg= p1.length/2; // 9/2= 4.5
  p1= p1.slice(0, (p1.length- avg)); // secr
  p2= split[1]; // codelex.io
  return p1+ "...@"+ p2;
}


console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
