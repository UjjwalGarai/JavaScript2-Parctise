//  let num = -5; and prints "Positive", "Negative", or "Zero"
let num = 0.100

if(num > 0){
    console.log("Positive");
}else if(num < 0){
    console.log("Negative");
    
}else{
    console.log("Zero");
}

// for(let num = 1; num <=20; num ++) console.log(num)

// "Liftoff!"
// let num2 = 5
// while(num2 >= 0){
//     if(num2 === 0){
//         console.log("Liftoff!")
//     }else{
//         console.log(num2)
//     }
//     num2--
// }
// let password
// do{
//     password = prompt("Enter Your Password")
// }while(password != "")
let sum = 0
for(let x = 1; x <=100; x++){
    sum+=x
}
console.log(sum)