//Посчитать сумму элементов массива с нечетными индексами
let massiv = [];
//let index = 0;
let count = 0;
for (let i = 0; i <= 9; i++) {
    massiv[i] = Math.round(Math.random()*100) + 1;
    console.log(massiv[i]);
}
for (let j = 0; j <= 9; j++) {
    if (j % 2 != 0) {
        count += massiv[j];
        console.log(`число ${massiv[j]} под нечётным индексом`)
    }
}
console.log(`сумма элементов массива с нечётными индексами равна ${count}`)