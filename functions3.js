// Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число.
let number = "шестьсот пятьдесят четыре";
const massiv = [];
numberString = number.split(" ")
//console.log(numberString[0]);
for (let i = 0; i < numberString.length; i++) {
    massiv.push(numberString[i]);
}
 console.log(number);
 if (massiv.length == 3) {
     console.log(checkFirstDigit() + "" +  checkSecondDigit() + "" +  checkThirdDigit());
 }
 if (massiv.length == 2) {
     if (massiv[0].includes("ста") || massiv[0].includes("сот") || massiv[0].includes("сто")) {
         console.log(checkFirstDigit() + "" + )
     }
 }
 function checkFirstDigit(){
     switch(massiv[0]){
         case "сто":
             return 1
         case "двести":
             return 2
         case "триста":
             return 3
         case "четыреста":
             return 4
         case "пятьсот":
             return 5
         case "шестьсот":
             return 6
         case "семьсот":
             return  7        
         case "восемьсот":
             return  8          
         case "девятьсот":
             return 9
     }
 }
 function checkSecondDigit(){
    switch(massiv[1]){
        case "двадцать":
            return 2
        case "тридцать":
            return 3
        case "сорок":
            return 4
        case "пятьдесят":
            return 5
        case "шестьдесят":
            return 6
        case "семьдесят":
            return  7        
        case "восемьдесят":
            return  8          
        case "девяносто":
            return 9

    }
 }
 function checkSecondDigit2(){
    switch(massiv[1]) {
        case "десять":
            return 10
        case "одиннадцать":
            return 11
        case "двенадцать":
            return 12
        case "тринадцать":
            return 13
        case "четырнадцать":
            return 14
        case "пятнадцать":
            return 15
        case "шестнадцать":
            return 16
        case "семнадцать":
            return  17        
        case "восемнадцать":
            return  18          
        case "девятнадцать":
            return 19

    }
 }
 function checkThirdDigit() {
     switch(massiv[massiv.length-1]) {
         case "один":
             return 1
         case "два":
             return 2
         case "три":
             return 3
         case "четыре":
             return 4
         case "пять":
             return 5
         case "шесть":
             return 6
         case "семь":
             return 7
         case "восемь":
             return 8
         case "девять":
             return 9
     }
 }