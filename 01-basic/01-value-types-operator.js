
console.log(`Value Log ---------------------------`)
console.log(null)
console.log(undefined)
console.log(NaN)

console.log(`Unary Operator output ---------------------------`)
console.log( - (8 + 2))
console.log( !(8 + 2))
console.log( typeof null)
console.log( typeof undefined)
console.log( typeof NaN)


console.log(`Nullish Binary Operator output ---------------------------`)
console.log(null ?? "Ujjwal")
console.log(undefined ?? "Ujjwal")
console.log(NaN ?? "Ujjwal")
console.log("" ?? "Ujjwal")
console.log("" ?? undefined)
console.log(false ?? "Ujjwal")
console.log(false ?? false)
console.log(false ?? true)
console.log(true ?? false)
console.log(true ?? true)


console.log(`OR Operator output ---------------------------`)
console.log(true || false)
console.log(false || true)
console.log(null || "Ujjwal")
console.log(NaN || "Ujjwal")
console.log(undefined || "Ujjwal")
console.log(12 || "Ujjwal")


console.log(`AND Operator output ---------------------------`)
console.log(12 && false)
console.log("" && 12 )
console.log(false && 12 )



