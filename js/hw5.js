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
    let newArray = arr.slice(begin,end);
    return newArray;
}

console.log(makeArray(someArray, 2, 5));

// 8