export {};

function truncateString(name, firstCh) {
  return name.slice(0, firstCh);
}

console.log(truncateString("CODELEX", 4)); // Expected output: CODE
