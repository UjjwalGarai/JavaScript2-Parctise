// console.log(sayHi());
// var sayHi = function() {
//     return "Hello!";
// };


function factorial(value){
    // base case 
    if(value === 1) return 1
    // recursive return 
    return value * factorial(value - 1)
}

console.log(factorial(3))
// console.log(innerVar);

const a = "ujjwal"
a[0] = 'a'
console.log(a[0])