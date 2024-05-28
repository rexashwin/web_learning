// #### Nullish Coalescing Operator (??)
let val1;

val1 = 5 ?? 10
console.log(val1)

val1 = null ?? 10
console.log(val1)

val1 = undefined ?? 15
console.log(val1)

val1 = null ?? 10 ?? 20
console.log(val1)

val1 = null ?? undefined ?? 20
console.log(val1)