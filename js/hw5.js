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