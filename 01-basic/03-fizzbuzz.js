
let start = 1;
let finsih = 20
while(start <= finsih){
    // if(start % 3 === 0 && start % 5 === 0){
    //     console.log("FizzFizz")
    // }else if(start % 3 === 0){
    //     console.log("Fizz")
    // }else if(start % 5 === 0){
    //     console.log("Buzz")
    // }else{
    //     console.log(start)
    // }
    // start++
    if(start % 3 === 0 && start % 5 === 0){
        console.log("FizzFizz")
    }
    if(start % 3 === 0){
        console.log("Fizz")
    }
    if(start % 5 === 0){
        console.log("Buzz")
    }
    if(start % 3 !== 0 && start % 5 !== 0){
        console.log(start)
    }
    start++
}