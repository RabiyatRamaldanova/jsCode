//Отсортировать массив пузырьком (Bubble)

const massiv = [];
for(let i = 0; i < 10 ; i++) {
    massiv[i] = Math.round(Math.random()*100)+1;
    console.log(massiv[i]);
}
console.log(`отсортированный массив`)

// метод sort 
//  function methodSort(a,b){
//     return a - b;
// }                        
// massiv.sort(methodSort)
// for(let i = 0; i < 10; i++){
//     console.log(massiv[i])
// }


for (let j = 0; j < massiv.length; j++){
        for(let i = massiv.length -1; i > j; i --){
    let k;
    if (massiv[i] > massiv[j]) {
        k = massiv[i];
        massiv[i] = massiv[j];
        massiv[j] = k;
    }
}
}
for(let i = 0; i < massiv.length; i++) {
    console.log(massiv[i]);
}