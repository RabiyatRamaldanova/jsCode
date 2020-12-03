//Сделать реверс массива (массив в обратном направлении)
let massiv = [];
let reversedMassive = 0;
for(let i = 0; i < 10; i++) {
    massiv[i] = Math.round(Math.random()*100) + 1;
    console.log(massiv[i]);
}
console.log(`перевётнутый массив`);
reversedMassive = massiv.reverse();
for(let j = 0; j < 10; j++) {
    console.log(reversedMassive[j]);
}
