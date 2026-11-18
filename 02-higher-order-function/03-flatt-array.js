

let arrays = [];


const result1 = arrays.reduce((acc, cur)=>{
    return acc.concat(cur)
},[])
const result2 = arrays.reduce((acc, cur)=>{
    return acc.concat(cur)
})

console.log(result1)
console.log(result2)