let rating = Math.round(Math.random()*100);
let grade;
if (rating <= 19) {
    grade = "F"
} else if (rating <= 39) {
    grade = "E"
} else if (rating <= 59) {
    grade = "D"
} else if (rating <= 74) {
    grade = "C"
} else if (rating <= 89) {
    grade = "B"
} else if (rating <= 100) {
    grade = "A"
} 
console.log(`рейтинг студента - ${rating}`)
console.log(`оценка студента - ${grade}`)