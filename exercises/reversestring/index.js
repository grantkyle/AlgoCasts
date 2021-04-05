// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// console.log(typeof(reverse("asdf")))

module.exports = reverse;

// solution 1
// function reverse(str) {
//     return str.split('').reverse().join('')
// }

// solution 2
// function reverse(str) {
//   const array = str.split("");
//   array.reverse();
//   return array.join("");

// solution 3
// function reverse(str) {
//   let reversed = "";

//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// }

// solution 4
// function reverse(str) {
//   return str.split("").reduce((rev, char) => char + rev, "");
// }
