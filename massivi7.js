//Посчитать количество нечетных элементов массива
let massiv = [];
let counter = 0;
for (let i = 0; i <= 9; i ++) {
    massiv[i] = Math.round(Math.random()*100) + 1;
    console.log(massiv[i]);
}
for (let j = 0; j <= 9; j++) {
    if (massiv[j] % 2 != 0) {
        counter += 1; 
    }
} 
console.log(`количество нечетных элементов массива ${counter}`)