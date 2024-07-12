"use strict";
function sum1(a, b) {
    return a + b;
}
console.log(sum1(2, 3));
// optional parameter
function sum2(a, b) {
    if (b) {
        return a + b;
    }
    return a;
}
console.log(sum2(3));
