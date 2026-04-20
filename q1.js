const score = 79;

switch (true) {
  case score < 60:
    console.log("F");
    break;
  case score < 70:
    console.log("D");
    break;
  case score < 80:
    console.log("C");
    break;
  case score < 90:
    console.log("B");
    break;
  case score < 100:
    console.log("A");
    break;
  default:
    console.log("Please enter a valid score");
}

console.log(score >= 60 ? "PASS" : "FAIL");
