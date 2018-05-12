// ****************************
// *        ЦИКЛЫ             *
// ****************************
console.log('ЦИКЛЫ');

// 1
let str = "I am in the easycode";
let str_new = "";

for (let i = 0; i < str.length; i++) {
    str_new += str[i] === " " ? str[i] + str[++i].toUpperCase() 
                              : str[i];
}
console.log(str + " - " + str_new);

// 2
let str1 = "tseb eht ma i";
let str_new1 = "";
let j = str1.length;

while (j > 0 ) {
    str_new1 += str1[--j];
}
console.log(str1 + " - " + str_new1);

// 3
let num = 10;
let factorial_num = 1;
while (num) {
    factorial_num *= num--; 
}
console.log("10! = " + factorial_num);

// 4
let string_count = "Считаем до 10и: ";

for(k = 1; k <= 10; k++) {
    string_count += k !== 10 ? k + ", " : k;
}
console.log(string_count);

// 5
let string = "JavaScript is a pretty good language";
let string_camel = "";

while (j < string.length) {
    string_camel += string[j] === " " ? string[++j].toUpperCase()
                                      : string[j];
    j++;                                      

}
console.log("WHILE - " + string + " - " + string_camel);

let string_camel1 = "";
for (let i = 0; i < string.length; i++) {
    string_camel1 += string[i] === " " ? string[++i].toUpperCase() 
                              : string[i];
}
console.log("FOR - " + string + " - " + string_camel1);

// 6
console.log("Нечетные числа от 1 до 15")
for (i = 1; i <= 15; i++) {
    if (i%2 !== 0)  console.log(i);
}
