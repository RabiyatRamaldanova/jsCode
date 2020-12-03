let a = Math.round(Math.random()*100)
let b = Math.round(Math.random()*100)
let c = Math.round(Math.random()*100)
console.log(`a = ${a}`)
console.log(`b = ${b}`)
console.log(`c = ${c}`)
let max;
if (a*b*c > a+b+c) {
    max = a*b*c
} else max = a+b+c

console.log(`max(a*b*c;a+b+c) + 3 = ${max + 3}`)