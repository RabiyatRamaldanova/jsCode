//Поменять местами первую и вторую половину массива, например, для массива 1 2 3  4, результат 3 4 1 2
const massiv = [];
for (let i = 0; i < 4; i ++) {
    massiv[i] = Math.round(Math.random()*100) + 1;
    console.log(massiv[i]);
}
console.log(`новый массив`)
for (let i = 0 ; i <  massiv.length/2; i++) {
    for (let j = massiv.length/2; j < massiv.length ; j++) {
        let k; 
        k = massiv[i];
        massiv[i] = massiv [j];
        massiv[j] = k;
    }
}
 for ( let i = 0; i < massiv.length; i ++) {
    console.log(massiv[i])
 }