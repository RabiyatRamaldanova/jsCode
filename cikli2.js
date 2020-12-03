//Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
let number = Math.round(Math.random()*100) - 1;
let bool = false;
for (let i = 2; i < number; i ++) {
    if (number == 2) {
        bool = false;
    } else if (number % i == 0) {
        console.log(`${number} делится на ${i}`);
        bool = true;
    } 
}
if (bool == true) {
    console.log(`${number} составное число`);
}
