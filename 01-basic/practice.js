const a = [" ", 0, null, undefined, NaN]

for(let b = 0; b < a.length; b++){
    if(a[b]){
        console.log(`${a[b]} is a Truthy Value`)
    }else{
        console.log(`${a[b]} is a Falsy Value`)

    }

}

console.log(typeof !- (10 / 2));
const d = 10 / 2
const e = -(d)
const f = !e
console.log(typeof f)