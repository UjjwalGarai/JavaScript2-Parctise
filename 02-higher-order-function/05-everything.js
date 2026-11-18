

function every(arr, test){
    for(let ele of arr){
        if(!test(ele)) return false
    }
    return true
}
const a = [2, 8, 90]

console.log(every(a, n=> n % 2 == 0))