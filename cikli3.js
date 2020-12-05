//Найти корень натурального числа с точностью до целого
let number = Math.round(Math.random()*100) + 1;
console.log(`рандомное натуральное число: ${number}`);
console.log(`корень натурального числа с точностью до целого: ${Math.floor(Math.sqrt(number))}`);