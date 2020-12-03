//Получить строковое название дня недели по номеру дня. 
let dayOfWeek = Math.round(Math.random()*7) + 1;
let dayOfWeekInString;
switch(dayOfWeek) {
    case 1:
        dayOfWeekInString = "Понедельник"
        break;
    case 2:
        dayOfWeekInString = "Вторник"
        break;
    case 3: 
        dayOfWeekInString = "Среда"
        break;
    case 4:
        dayOfWeekInString = "Четверг"
        break;
    case 5: 
        dayOfWeekInString = "Пятница"
        break;
    case 6: 
        dayOfWeekInString = "Суббота"
        break;
    default:
        dayOfWeekInString = "Воскресенье"
}
console.log(`номер дня недели ${dayOfWeek}`);
console.log(`название дня недели ${dayOfWeekInString}`);
