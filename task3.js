let a = Math.round(Math.random()*200) - 100;
let b = Math.round(Math.random()*200) - 100; 
let c = Math.round(Math.random()*200) - 100;
console.log(a)
console.log(b)
console.log(c)
let result = 0;
let numbers = [a,b,c];
for (let i = 0; i <=2; i++) {
    if (numbers[i] > 0) {
        result += numbers[i];
    }
}
console.log(`result is ${result}`)