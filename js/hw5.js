console.log("HOMEWORK 5");
// 1
let array_string = ['i', 'like', 'tea'],
    array_number = ['7', '80', '65'],
    array_object = [{age: 45, name: 'Jhon'},{age: 20, name: 'Aaron'}],
    array_value = ['abc', '123'],
    array_some_number = ['1', '2', '3'];

function arrayToString(arr, handler) {
    if (arr.length === 0) return 'Array is empty' 
    let result = 'New value: ';

    for (let el of arr) {
         result += handler(el);
      //console.log(el);
    }
    return result;
}

function upFirstletter(string){
    return string[0].toUpperCase() + string.slice(1,(string.length));
}

function multiplication(num){
    return num * 10 + ',';
}

function sentence(obj){
    return obj.name + ' is ' + obj.age + ', ';
}

function reverse(string){
    return string.split('').reverse().join('') + ', ';
}

function addition(num){
    return Number(num) + 5 + ', ';
}
console.log(arrayToString(array_string, upFirstletter));
console.log(arrayToString(array_number, multiplication));
console.log(arrayToString(array_object, sentence));
console.log(arrayToString(array_value, reverse));
console.log(arrayToString(array_some_number, addition));
// 2 Переписать ввиде своих фуекций методы every и some
let numberArr = [1, 0, 22, 17, 2, 10, 15];
let users = [
  {
    name: 'Denis',
    age: 29,
    balance: 250
  },
  {
    name: 'Ivan',
    age: 16,
    balance: 100
  }
];

let prov =  (item, el, arr) => item.age <= 10;
 function some(arr, func) {
    for (let i=0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) return 'true';
    }
    return 'false';
 }


 let resultSome = some(users, (item, el, arr) => item.age <= 10);
 
 console.log('some ' + resultSome);

 function every(arr, func) { 
    for (let i=0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)) return 'false';
    }
    return 'true';
 }

 let resultEvery = every(users, (item, el, arr) => item.age >= 10);

 console.log('every ' + resultEvery); 

// 3  из презентации по массивам сделать задачи: 2, 3, 8, 10, 11
// 2
 let someArray = [10,7, 4, 2, 1, -2, -9];

someArray.sort(function(prev, next) {
    if (prev < next) return 1;
    if (prev >= next) return -1;
});

console.log(someArray);

// 3
function makeArray(arr, begin, end){
    let newArray = arr.slice(begin, end+1);
    return newArray;
}

console.log(makeArray(someArray, 2, 5));

// 8
let hash = [[14, 45], [1], ['a', 'd', 'c']];

hash.sort((prev, next) => prev.length - next.length);
console.log(hash);

// 10
let arrayObj = [
    {cpu: 'intel', info: {cores: 2, cache: 3}},
    {cpu: 'intel', info: {cores: 4, cache: 4}},
    {cpu: 'intel', info: {cores: 1, cache: 1}},
    {cpu: 'intel', info: {cores: 3, cache: 2}},
    {cpu: 'intel', info: {cores: 4, cache: 2}}
];

arrayObj.sort((prev, next) => prev.info.cores - next.info.cores);
console.log(arrayObj);

// 11 Приучаю себя к стрелочным функциям, но не совсем 
const products = [
    {title: 'prod1', price: 5.2},  {title: 'prod2', price: 0.19},
    {title: 'prod3', price: 15},  {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9},  {title: 'prod6', price: 8},
    {title: 'prod7', price: 19},  {title: 'prod8', price: 63}
];

function filterCollection(arr, bprice, eprice) {
    return newProducts = arr.filter(item => item.price >= bprice && item.price <= eprice).sort((prev, next) => prev.price - next.price);
}

console.log(filterCollection(products, 10, 50));

let filterArray = (arr, bprice, eprice) =>  arr.filter(item => item.price >= bprice && item.price <= eprice).sort((prev, next) => prev.price - next.price);

console.log(filterArray(products, 5, 50));

// 4 из презентации массивы Es5 задачи: 2 и 5 (пятую задачу можно сделать только  сортировкой и reduce )

// 2

let arrayNumber = [1, 2, 3, 5, 8, 9, 10];

let newNumberArray = arrayNumber.map((item) => item%2 ? {digit: item, odd: false} : {digit: item, odd: true} ); 
console.log(newNumberArray);

// 5

let beginArray = [
    {char: 'a', index: 12}, {char: 'w', index: 8}, {char: 'Y', index: 10},
    {char: 'p', index: 3}, {char: 'p', index: 2}, {char: 'N', index: 6},
    {char: ' ', index: 5}, {char: 'y', index: 4}, {char: 'r', index: 13},
    {char: 'H', index: 0}, {char: 'e', index: 11}, {char: 'a', index: 1},
    {char: ' ', index: 9}, {char: '!', index: 14}, {char: 'e', index: 7}
];
// 1-й вариант
function newString(arr){
    let temp =[];
    
    for(el of arr) {
        temp[el.index] = el.char;
    }
    return temp.join(''); 
}

console.log(newString(beginArray));

// 2-й вариант
let magicString = beginArray.sort((prev, next) => prev.index - next.index).reduce((previous, current) => previous + current.char ,'');
console.log(magicString);
