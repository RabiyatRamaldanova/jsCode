//Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.
let number = Math.round(Math.random()*1000) + 1;
let result = "";
console.log(`рандомное число: ${number}`)
while (number > 0) {
    result +=(number % 10).toString()
    number = Math.floor(number/10)
}
console.log(`зеркальное отображение: ${answer}`)