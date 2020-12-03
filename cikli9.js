//Вычислить факториал числа n. n! = 1*2*…*n-1*n!
let number = Math.round(Math.random()*100) +1;
let count = 1;
for (let i = 1; i <= number; i++) {
    count = count * i; 
}
console.log(`факториал числа ${number} равен ${count}`)