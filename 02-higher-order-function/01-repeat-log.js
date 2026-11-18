
function repeat(n, action){
    for(let i = 0; i < n; i++){
        action(i)
    }
}

// repeat(4, console.log)

const labels = []
repeat(12, (n) => {
    labels.push(`Unit - ${n + 1}`)
})
// console.log(labels)

function garterThan(n){
    return m => n < m
}

const graterThan10 = garterThan(10)
console.log(graterThan10(12))

function unless(test, then){
    if(!test) then()
}

repeat(4, n => {
    unless(n % 2 == 1, () => {
        console.log(`${n} is even`)
    })
}
)