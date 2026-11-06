
// * Triangle using while loop
const totalLopp = 7
let count = 0
let star = "*"
while(count < totalLopp){
    console.log(star);
    star = star + "*"
    count ++
}
// + Triangle using do while loop
let plus = "+"
let countDo = 0
do {
    console.log(plus)
    plus +="+"
    countDo++
}while(countDo < totalLopp)

// Using For loop
let hash = "#"
for(let a = 0; a < totalLopp; a++){
    console.log(hash)
    hash+="#"
}

