// ----- 2 -----

// Zero
if (0) {
  console.log("0 is truthy");
} else {
  console.log("0 is falsy");
}

// Empty String
if ("") {
  console.log(`"" is truthy`);
} else {
  console.log(`"" is falsy`);
}

// Non Empty String
if ("hello") {
  console.log(`"hello" is truthy`);
} else {
  console.log(`"hello" is falsy`);
}

// null
if (null) {
  console.log("null is truthy");
} else {
  console.log("null is falsy");
}

// undefined
if (undefined) {
  console.log("undefined is truthy");
} else {
  console.log("undefined is falsy");
}

// NaN
if (NaN) {
  console.log("NaN is truthy");
} else {
  console.log("NaN is falsy");
}
