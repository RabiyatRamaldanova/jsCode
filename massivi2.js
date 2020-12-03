//Найти максимальный элемент массива

let massiv = [];
let num;
for(let i = 0; i < 10; i++) {
    massiv[i] = Math.round(Math.random()*100) + 1;
    console.log(massiv[i]);
}
num = massiv[0];
for(let j = 0; j < 10; j++) {
     
    if(num < massiv[j+1]) {
        num = massiv[j+1]
    } 
}
console.log(`максимальный элемент массива ${num}`);