//Вводим число (0-999), получаем строку с прописью числа.
//let number = Math.round(Math.random()*1000);
let number = 90;
let numberString = number.toString();
const massiv = [];
for (let i = 0; i < numberString.length; i++) {
    massiv.push(numberString[i]);
}
console.log(number);
if(massiv.length === 3){
    if(massiv[1] === "1"){
        console.log(checkFirstDigit() + " " + checkSecondDigitv2());
        
    }
    else if(massiv[1] !== "1"){
        console.log(checkFirstDigit() + " " + checkSecondDigit(1) + " " + checkThirdDigit())
    }

}
if(massiv.length == 2){
    if (massiv[0] == "1") {
        console.log(checkSecondDigitv2());
    }else if (massiv[massiv.length -1] == "0"){
        console.log(checkSecondDigit(0));
    } else {
        console.log(checkSecondDigit(0) + " " + checkThirdDigit());
    }

}
if(massiv.length == 1){
   console.log(checkThirdDigit());
}

function checkSecondDigitv2() {
    switch(massiv[massiv.length-1]){
        case "0":
            return "Десять"      
        case "1":
             return "Одиннадцать"    
        case "2":
            return  "Двенадцать"            
        case "3":
            return  "Тринадцать"            
        case "4":
            return  "Четырнадцать"
        case "5":
            return  "Пятнадцать"
        case "6":
            return  "Шестнадцать"
        case "7":
            return  "Семнадцать"        
        case "8":
            return  "Восемнадцать"          
        case "9":
            return  "Девятнадцать"
    }
}
function checkFirstDigit(){
    switch(massiv[0]){ 
        case "1":
            return  "Сто"           
        case "2":
            return  "Двести"            
        case "3":
            return  "Триста"            
        case "4":
            return  "Четыреста"
        case "5":
            return  "Пятьсот"
        case "6":
            return  "Шестьсот"
        case "7":
            return  "Семьсот"        
        case "8":
            return  "Восемьсот"          
        case "9":
            return "Девятьсот"
}
}
function checkSecondDigit(i){
        switch(massiv[i]){    
            case "0":
            return ""     
            case "2":
                return  "Двадцать"            
            case "3":
                return  "Тридцать"            
            case "4":
                return  "Сорок"
            case "5":
                return  "Пятьдесят"
            case "6":
                return  "Шестьдесят"
            case "7":
                return  "Семьдесят"        
            case "8":
                return  "Восемьдесят"          
            case "9":
                return "Девяносто"
        }

}
function checkThirdDigit(){
    switch(massiv[massiv.length-1]){ 
        case "0":
            return "Нуль"   
        case "1":
            return  "один"      
        case "2":
            return  "Два"            
        case "3":
            return  "Три"            
        case "4":
            return  "Четыре"
        case "5":
            return  "Пять"
        case "6":
            return  "Шесть"
        case "7":
            return  "Семь"        
        case "8":
            return  "Восемь"          
        case "9":
            return "Девять"
}
}
