export {};

function truncateString(name, end) {
  return name.slice(0, end);
}

console.log(truncateString("CODELEX", 4)); // Expected output: CODE
