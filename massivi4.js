//Найти индекс минимального элемента массива
let massiv = [];
let num;
let index = 0;
for(let i = 0; i < 10; i++) {
    massiv[i] = Math.round(Math.random()*100) + 1;
    console.log(massiv[i]);
}
num = massiv[0];
for(let j = 0; j < 10; j++) {
     
    if(num > massiv[j+1]) {
        num = massiv[j+1]
        index = j+1;
    } 
}
console.log(`максимальный элемент массива ${num}`);
console.log(`индекс максимального элемент массива ${index}`);