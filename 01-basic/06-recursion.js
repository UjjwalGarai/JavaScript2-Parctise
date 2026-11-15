
function rescursion(num){
    if(num < 1){
        console.log('Reursion end')
        return 0
    }
    console.log("Recursion start");
    return num + rescursion(num - 1)
}

// const a = rescursion(10)
// console.log(a);

function factorial(value){
    if(value === 1){
        return 1
    }
    return value * factorial(value - 1)
}

// console.log(factorial(115))


function findSolution(target){
    function find(current, history){
        if(current == target){
            return history
        }else if(target < current ){
            return null
        }else{
console.log(find(current + 5, `${history} + 5`) ?? find(current * 3, `${history} * 3`))            // 
            return find(current + 5, `${history} + 5`) ?? find(current * 3, `${history} * 3`)
        }
    }
    return find(1, "1")
}


console.log(findSolution(8))