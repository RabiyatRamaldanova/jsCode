let number = Math.round(Math.random()*100)+1;
let result = "";
let answer = number;
while(number > 0) {
    result += (number % 10).toString();  
    number = Math.floor(number/10)
 }
 console.log(answer);
 console.log(result);