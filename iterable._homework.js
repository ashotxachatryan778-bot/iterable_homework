//  1. Make an Object Iterable
// Create an object range with properties start and end.
// Example:




// let obj = {
//     start: 1,
//     end: 50,
//     [Symbol.iterator]() {
//         return {
//             next() {
//                 if (obj.start <= obj.end) {
//                     return { done: false, value: obj.start++ }
//                 } else {
//                     return { done: true }
//                 }
//             }

//         }
//     }


// }
// let key;
// for (key of obj) {
//     console.log(key);

// }

// 2. Reverse Iterable
// Create an iterable object that returns numbers in reverse order.
// Example:

// let obj = {
//     start: 1,
//     end: 50,

//     [Symbol.iterator]() {
//         return {
//             next() {
//                 if (obj.end >= obj.start)
//                     return { done: false, value: obj.end-- }
//                 else {
//                     return { done: true }
//                 }
//             }
//         }
//     }
// }

// let key;
// for (key of obj) {
//     console.log(key);

// }

// function fibonacci() {
//   return {
//     [Symbol.iterator]() {
//       let a = 0;
//       let b = 1;

//       return {
//         next() {
//           const value = a;

//           [a, b] = [b, a + b];

//           return {
//             value,
//             done: false
//           };
//         }
//       };
//     }
//   };
// }

// const fib = fibonacci();

// for (const n of fib) {
//   console.log(n);

//   if (n > 100) break;
// }