// enum Size {Small= 2, Medium, Large}
// let mySize: Size = Size.Medium

// console.log(mySize);

// learn-enum.js file-এর কোড-
// (function (Size) {
//     Size[Size["Small"] = 2] = "Small";
//     Size[Size["Medium"] = 3] = "Medium";
//     Size[Size["Large"] = 4] = "Large";
// })(Size || (Size = {}));
// let mySize = Size.Medium;
// console.log(mySize);

// আর enum-এর পূর্বে const বসালে

const enum Size {Small= 2, Medium, Large}
let mySize: Size = Size.Medium

console.log(mySize);

// learn-enum.js file-এর কোড-
// let mySize = 3 /* Size.Medium */;
// console.log(mySize);

