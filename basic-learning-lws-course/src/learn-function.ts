function sum1(a: number, b: number): number {
    return a + b;
}

console.log(sum1(2, 3));



// optional parameter
function sum2(a:number, b?: number) {
    if(b) {
        return a + b;
    }
    return a;
}

console.log(sum2(3))