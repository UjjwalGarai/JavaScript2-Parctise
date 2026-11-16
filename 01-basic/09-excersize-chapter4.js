
function range(startNum, endNum){
    if(startNum < endNum){
        let arr = []
        let startIndex = 0
        const interval = endNum - startNum
        while(startIndex <= interval){
            arr.push(startIndex + startNum)
            startIndex++
        }
        return arr
    }else{
        return 'Please enter valid number to get the list'
    }

}

// console.log(range(1, 10)[0])

function sum(...arr){
    let total = 0
    for (const num of arr){
        console.log(num)
        // total = total +  arr[num]
    }
    // return total
}

console.log(sum(range(1, 10)))
