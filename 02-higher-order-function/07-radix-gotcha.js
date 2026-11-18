// console.log(["1", "2", "3"].map(x => parseInt(x)))
// console.log(["1", "2", "3"].map(parseInt))

// ["1", "2", "3"].map(function(val){
//     console.log(`Value: ${val}`)
// })

["1", "2", "1"].map(function(val, index, arr) {
    console.log(parseInt(val, index, arr))
    console.log(`Value: ${val}, Index: ${index}, Array: ${arr}`);
    // return val
});