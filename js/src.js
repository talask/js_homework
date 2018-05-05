// ***********************
// *     ПЕРЕМЕННЫЕ      *
// ***********************
console.log( "ПЕРЕМЕННЫЕ" );
let price = "";
const max = 999;
const name = "Nafanya";
let age = "";

console.log(test);
var test = 'string';
// Ответ: undefined

var x = 'string';
var x = 'string №2';
console.log(x);
//  Ответ: string №2

// console.log(text);
// let text='string';
// Ответ: Uncaught ReferenceError: text is not defined

// const y = 'string';
//       y = 'string №2';
// console.log(y);
// Ответ: Uncaught TypeError: Assignment to constant variable.

// let someVariable = 15;
// let someVariable = 10;
//  Ответ: Uncaught SyntaxError: Identifier 'someVariable' has already been declared

// ***********************
// *       СТРОКИ        *
// ***********************
console.log( "СТРОКИ" );
let string = 'some test string';
console.log( "STRING - " +  string);
// 1
console.log(string[0] + " " + string.slice(-1));

// 2
console.log(string[0].toUpperCase() + string.slice(1,(string.length - 1)) + string.slice(-1).toUpperCase());

// 3
console.log(string.indexOf('string'));

// 4
let index = string.indexOf(" ") + 1;
console.log(string.indexOf(" ",index));

// 5
console.log("==" + string.substr(5, 4) + "===");

// 6 
console.log("==" + string.slice(5, 9) + "===");

// 7
string = string.slice(0, string.length - 6);
console.log("==" + string + "===");

// 8
let a = 20;
let b = 16;
console.log(a + '' + b);

// ***********************
// *       ЧИСЛА         *
// ***********************
console.log( "ЧИСЛА" );
// 1 
console.log(Math.PI.toFixed(2));

// 2
console.log(Math.min(15,11,16,12,51,12,13,51));
console.log(Math.max(15,11,16,12,51,12,13,51));

// 3
console.log(Math.random().toFixed(2));
let min_random = 0,
    max_random = 987;
console.log(Math.floor(Math.random() * max_random));

// 4
let summa = 0.6 +0.7;
let summa1 = (0.6*10 + 0.7*10)/10;
console.log(summa.toFixed(1));
console.log(summa1);

// 5 
console.log(parseInt('100$'));

// ***********************
// *       ОБЪЕКТЫ        *
// ***********************
console.log( "ОБЪЕКТЫ" );
// 1
let obj = {
	product: 'iphone'
};

// 2
obj['price'] = '1000';
obj['currency'] = 'dollar';

// 3
obj.detalis = {
	model: 'iPhone 7 Plus',
	color: 'white'
}
for (var key in obj) {
  if (typeof(obj[key]) === 'object') {
    console.log( "Ключ: " + key + " значение: " );
    for (var key1 in obj[key]) {
      console.log( key1 + " значение: " + obj[key][key1] );
    }
  }
  else{
    console.log( "Ключ: " + key + " значение: " + obj[key] );
  }
}
  