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

function MultiplyMaker (a) {
    a = typeof a !== 'number' || !a ? 1 :  Number(a);
    let p = a;
    return function(b) {
        b = typeof b !== 'number' || !b ? 1 :  Number(b);
        p *=  b;
        return p;
    }
}

const multiply = MultiplyMaker(2);
console.log("multiply(2) = " + multiply(2));
console.log("multiply(1) = " +  multiply(1));
console.log("multiply(3) = " + multiply(3));
console.log("multiply(10) = " + multiply(10));

// 5

let StringWork = (function() {
    
    let str;

    function SetString(val) {
        val = !val ? '' :
              typeof val == 'number' ? String(val) : val;
        str = val;
    }

    function GetString () {
        return str;
    }

    function GetStringLen() {
        return str.length;
    }
    function StringReverse() {
       str = str.split('').reverse().join('');
    }

    return {
        setString: SetString,
        getString: GetString,
        getStringLen: GetStringLen,
        stringReverse: StringReverse
    };
})();

StringWork.setString('abcde');
console.log(StringWork.getString());
console.log(StringWork.getStringLen());
StringWork.stringReverse();
console.log(StringWork.getString());

// 6

let kalc = (function() {

    let val;

    function check(a) {
        return Number(a);
    }

    function SetVal(arg) {
        val = check(arg);
        return this;
    }

    function Plus(arg) {
        val += check(arg);
        return val;
    }

    function Minus(arg) {
        val += check(arg);
        return val;
    }

    function Multi(arg) {
        val *= check(arg);
        return val;
    }

    function Division(arg) {
        val /= check(arg);
        return val;
    }

    function Elevate(arg) {
        for(let i=1; i < arg; ++i) val *= val;
        return this;
    }

    function GetValue() {
        return val;
    }

    return {
        getVal: GetValue,
        setVal: SetVal,
        plus: Plus,
        minus: Minus,
        multi: Multi,
        elevate: Elevate,
        division: Division,
    };
})();

kalc.setVal('10');
kalc.elevate('2');
console.log(kalc.getVal());
kalc.plus('5');
kalc.multi('2');
console.log(kalc.getVal());

let z = kalc.setVal(10).elevate(2).getVal();
console.log(z);

let stringBegin = 'abcdeuiooplkjhgfrewsartquyoi8909nm oiuoiu88j iuio789nm 8', stringEnd ='';

console.log("resultCompare - общее время проверки");
console.log("resultFor - общий результат проверки 100 повторений цикла for");
console.log("resultMetods - общий результат проверки 100 повторений использования методов");
console.log("result - время выполнения 1 итерации проверки цикла for");
console.log("result1 - время выполнения 1 итерации проверки работы методов");
console.time('resultCompare');
console.time('resultFor');
 for( let k=0; k<= 100; k++){
    console.time('result');
    stringEnd ='';
    for (let i = stringBegin.length - 1; i >= 0; i--) { 
        stringEnd += stringBegin[i];
    }
    console.timeEnd('result');
 }
 console.timeEnd('resultFor'); 
 console.log(stringEnd);
 console.time('resultMetods');
 for( let k=0; k<= 100; k++) {
    console.time('result1');
    stringBegin = stringBegin.split('').reverse().join('');
    console.timeEnd('result1');
 }
 console.timeEnd('resultMetods');
 console.time('resultWhile');
 for( let k=0; k<= 100; k++) {
    console.time('result2');
    i = stringBegin.length, stringEnd ='';
    while(i) { stringEnd += stringBegin[--i]; }
    console.timeEnd('result2');
 }
 console.timeEnd('resultWhile');
 console.timeEnd('resultCompare'); 
 