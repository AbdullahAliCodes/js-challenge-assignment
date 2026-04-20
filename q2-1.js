// ----- 1 -----

const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Please enter a string number...`, (num) => {
  const toNum = parseInt(num, 10);
  if (isNaN(toNum)) {
    console.log("That wasn't a valid number!");
    rl.close();
  } else {
    console.log(`Your ${typeof toNum} is: ${toNum}`);
    rl.close();
  }
});
