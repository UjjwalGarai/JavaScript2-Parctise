
function sumRange(n){
    // base case
    if(n === 1){
        return 1
    }
    // recursive steps
    return n + sumRange(n - 1)
    // return {
    //     sum: n + sumRange(n-1) ,
    //     formula: `${n} + ${sumRange(n-1)}`
    // } 
}

// console.log(sumRange(4))

function countdown(n){
    // Base Case
    if(n === 0){
        console.log("Done!")
        return "Done!"
    }
    // recursive steps
    console.log(n)
    return n - countdown(n - 1)
}
// countdown(3)

function power(base, exponent){
    // Base Case
    if(exponent === 0){
        return 1
    }
    // recursive steps
    return base * power(base, exponent - 1)
}

// console.log(power(5, 2));

function multiply(a, b){
    // base case
    if(b == 1){
        return a
    }
    // recursive return 
    return a + multiply(a, b - 1)
}

// console.log(multiply(5, 3))

function arrayLength(arr){
    
    // Base consition
    if(arr.length == 0){
        return 0
    }
    // recursive retur 
    return 1 + arrayLength(arr.slice(1))
}

// console.log([1].slice(1)[0])
// console.log(arrayLength([4, 3]))