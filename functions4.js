let x1 = Math.round(Math.random()*100) + 1;
let y1 = Math.round(Math.random()*100) + 1;
let x2 = Math.round(Math.random()*100) + 1;
let y2 = Math.round(Math.random()*100) + 1;
console.log(`Координаты первой точки (${x1}, ${y1})`);
console.log(`Координаты второй точки (${x2}, ${y2})`);

function getDistance(){
    answer = Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2)
    return Math.sqrt(answer)
}
console.log(`Расстояние между точками равно ${}`);