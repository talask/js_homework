// HOMEWORK-9
console.log("HOMEWORK-9");
// 1-я часть
// 1

getBigName(userName);
function getBigName(name) {
    name = name + '';
    return name.toUpperCase();
}

//var userName = 'Ivan';
console.log("Функция getBigName(userName) вернет " + getBigName(userName) +" т.к. переменная userName ещё не определена");

// 2

function test(){
    var name = 'Vasiliy';
    return getBigName(userName);
}

var userName = 'Ivan';
console.log("Функция test() вернет " + test() + " т.к. переменная userName и функция  находятся в global LE ");

// 3

var food = 'cucumber';

(function(){
    var food = 'bread';
    getFood();
})();

function getFood(){
    console.log(food);
}

console.log("Функция getFood() вернет 'cucumber' т.к. переменная food и функция  getFood() находятся в global LE ");

// 2-я часть
// 1

var dollar,
    getDollar;

(function (){
    var dollar = 0;
    getDollar = function(){
        return dollar;
    }
})();

dollar = 30;
console.log("Функция  getDollar() вернет " + getDollar() + " т.к. переменная dollar переопределена через var в самовызывающейся функции она берется из func LE ");

// 2

var greet = 'Hello';

(function(){
    var text = ' World';
    console.log(greet + text + "  т.к. переменные 'greet + text' определены");
})();
console.log(" Ошибка при выводе 'greet + text' т.к. переменная text не видна в global LE" );

// 3

function minus(a){
    a = typeof Number(a) !== 'number' ?  0 : Number(a);
    return function(b) { 
        b = typeof Number(a) !== 'number' || !b ?  0 : Number(b);
        return !a ? b : a - b;
    }
}

console.log("minus(10)(6) = " + minus(10)(6));
console.log("minus(5)(6) = " + minus(5)(6));
console.log("minus(10)() = " + minus(10)());
console.log("minus()(6) = " + minus()(6));
console.log("minus()() = " + minus()());

// 4 

let p;

function MultiplyMaker (a) {
    a = typeof a !== 'number' || !a ? 1 :  Number(a);
    
    return function() {
        console.log(p);
        p = typeof p === 'undefined' ? a : p * a;
        return p;
    }
}

const multiply = MultiplyMaker(2);
console.log("multiply = " + multiply);
console.log("multiply(2) = " + multiply(2));
console.log("multiply(1) = " + multiply(1));
console.log("multiply(3) = " + multiply(3));
console.log("multiply(10) = " + multiply(10));
