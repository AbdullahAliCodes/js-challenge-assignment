// for (let i = 1; i <= 5; i++) {
//   let starStr = "";
//   for (let k = 1; k <= i; k++) {
//     starStr += "*";
//   }
//   console.log(starStr);
// }

for (let i = 1; i <= 5; i++) {
  let spaces = " ".repeat(5 - i);
  let stars = "* ".repeat(i);
  console.log(spaces + stars);
}
