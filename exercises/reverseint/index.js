// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// but also can use any of the 'reverse string' methods to produce the same result

// function reverseInt(n) {
//   const reversed = n
//     .toString()
//     .split("")
//     .reduce((character, reversed) => {
//       return reversed + character;
//     });

//   return parseInt(reversed) * Math.sign(n);
// }

module.exports = reverseInt;

// function reverseInt(n) {
//   const reversed = n.toString().split("").reverse().join("");

//   return parseInt(reversed) * Math.sign(n);
// }