// 1. Minimum ----------------------------------------
function minimum(num1, num2){
    if(!Number.isNaN(num1) && !Number.isNaN(num2)){
        if(num1 < num2){
            return num1
        }else{
            return num2
        }
    } else{
        return `Please enter valid number`
    }
}

// console.log(minimum(45, 20))

// 2. Recursion --------------------------------------
function isEven(num){
    if(num <= 0){
        return false
    }else{
        isEven(num - 2) % 2 === 0
        return true
    }
}
// console.log(isEven(30))
// 3. Beancounting --------------------------------------
function countBs(str){
    return countChar(str, "B")
}

console.log(countBs("ABB"))

function countChar(str, letter){
    const strLength = str.length
    let count = 0
    let bCount = 0
    while( count < strLength){
        if(str[count] == letter){
            bCount++
        }
        count++
    }
    return bCount
}

console.log(countChar("ABB", "A"))




