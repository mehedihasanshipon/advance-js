const numbers = [3,4,5,6,7,8];
// const squares = [];
// // Square in es5 way
// for(let i = 0;i<numbers.length;i++){
//     let element = numbers[i];
//     let square = element * element;
//     squares.push(square);
// }
// console.log(squares);

// Square using map
// const square = element => element * element;
// const result = numbers.map(function(element){
//     return element * element;
// })

// Using arrow function
// map and filter return full array
const result = numbers.map(element => element * element);
const even = numbers.filter(element => element % 2 == 0);
// find return only an element
const isThere = numbers.find(element => element > 6);

console.log(isThere);
