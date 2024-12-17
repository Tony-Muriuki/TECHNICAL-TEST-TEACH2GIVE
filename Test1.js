"use strict";
function capitalizeWords(input) {
  let capitalized = input
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  return capitalized;
}
// console.log(capitalizeWords("my name is tony muriuki"));
// console.log(capitalizeWords("hello"));
