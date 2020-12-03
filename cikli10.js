//Посчитать сумму цифр заданного числа
let number = Math.round(Math.random()*100) + 1;
let result = 0;
let answer = number;
while(number > 0) {
   result += number % 10;  
   number = Math.floor(number/10)
} 
console.log(answer);
console.log(result);