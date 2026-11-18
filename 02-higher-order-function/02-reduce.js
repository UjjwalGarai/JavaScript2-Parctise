

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
console.log(Object.groupBy(fruits, (item) => item))
let tally = {}

for(let fruit of fruits){
    if(tally[fruit]){
        tally[fruit] ++
    }else{
        tally[fruit] = 1
    }
}
// console.log(tally)

const reducer = (accumalator, current) => {
    accumalator[current] = (accumalator[current] || 0) + 1
    return accumalator
}

console.log(fruits.reduce(reducer, {}))

let nums = [10, 20, 30, 40];
let total = 0
for(let num of nums){
    total+=num
}
console.log(total)

console.log(nums.reduce((acc, cur) => acc+=cur, 0))
console.log(Object.groupBy(fruits, (item, index) => index))