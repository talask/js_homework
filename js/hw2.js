// ***********************
// *     присваивание    *
// ***********************

//1
let a = 1, b = 2, c = 3, x = 4, y = 5, z = 6, i = 7;
 a += 10, b *= 18,  c -= 10
 x += a, y *= z,  i *= 5 * z
console.log( 'a = ' + a + ', b = ' + b + ', c = ' + c + ', x = ' + x + ', y = ' + y + ', i = ' + i );
 //2
 let q = 2;
 q *= q 
 console.log( 'q = ' + q);

// ****************************
// * АРИФМЕТИЧЕСКИЕ ОПЕРАТОРЫ *
// ****************************
//1
let aa = 5; 
console.log( aa++ ); // 5
console.log( ++aa ); // 7
//2
let bb=10;
if ( bb%2 === 0) {
  console.log(bb + ' - число четное')
}
else {
  console.log(bb + ' - число нечетное') 
}

// ****************************
// *    УСЛОВНЫЕ ОПЕРАТОРЫ    *
// ****************************
console.log('УСЛОВНЫЕ ОПЕРАТОРЫ');
//1
console.log('let variable = \'hidden\'');
let variable = 'hidden';
if (variable === 'visible') {
  variable = 'hidden';
} else {
  variable = 'visible';
}
console.log('variable = \'' + variable + '\'');

variable = variable === 'visible' ? 'hidden' : 'visible';
console.log('variable = \'' + variable + '\'');

//2
let v = 2;
if (v === 0) {
  v = 1;
} else if (v < 0) {
      v = 'less then zero';
  }
  else {
    v *= 10;  
  }
console.log(v);

v = v === 0 ?  1 :
    v < 0 ? 'less then zero' : v * 10;  
console.log(v);

// ****************************
// *          SWITCH          *
// ****************************
console.log('SWITCH\n aaa = \'flex\'');
let aaa = 'flex';
switch(aaa) {
  case 'block': console.log('block');
    break;
  case 'none':  console.log('none');
        break;
  case 'inline':  console.log('inline');
    break;
  default:  console.log('other');
}

// ****************************
// *   ПРЕОБРАЗОВАНИЕ ТИПОВ   *
// ****************************
console.log(' ПРЕОБРАЗОВАНИЕ ТИПОВ');
//1
console.log(' || запинается на правде');
console.log(' && запинается на лжи');
let ab1 = 0 || 'string';
console.log(' ab1 = 0 || \'string\'');
console.log(ab1 + ' т.к. || запинается на правде');
let ab2 = 1 && 'string';
console.log(' ab2 = 1 && \'string\'');
console.log(ab2 + ' т.к. &&, если все выражения true, возвращает последнее');
let ab3 = null || 25;
console.log(' ab3 = null || 25');
console.log(ab3 + ' т.к. || возвращает то значение, на котором остановились вычисления');
let ab4 = null && 25;
console.log('  ab4 = null && 25');
console.log(ab4 + ' т.к. && запинается на лжи');
let ab5 = null || 0 || 35;
console.log(' ab5 = null || 0 || 35');
console.log(ab5 + ' т.к. || возвращает то значение, на котором остановились вычисления');
let ab6 = null && 0 && 35;
console.log(' ab6 = null && 0 && 35');
console.log(ab6 + ' т.к. && возвращает то значение, на котором остановились вычисления');

//2
console.log(12 + 14 + '12'); 
console.log('12 + 14 + \'12\' первые два операнда складываются как числа, затем преобразуются в строку т.к. третий операнд строка');
console.log(3 + 2 - '1'); 
console.log('3 + 2 - \'1\' все операнды интерпретируются как числа т.к. \'-\' преобразует третий операнд к числу');
console.log('3' + 2 - 1); 
console.log('\'3\' + 2 - 1 первые два операнда складываются как строки, затем преобразовываются к числу т.к. \'-\'');
console.log(true + 2); 
console.log('true + 2  складываются как числа, т.к. второй операнд число, true = 1');
console.log(+'10' + 1); 
console.log('+\'10\' + 1  складываются как числа, т.к. \'+\' перед строкой преобразует строку в число');
console.log(undefined + 2); 
console.log('undefined + 2  NaN, т.к.  \'undefined\' - неопределенное значение не приводится к числу');
console.log(null + 5); 
console.log('null + 5  складываются как числа,  т.к. второй операнд число , null = 0');
console.log(true + undefined); 
console.log('true + undefined  складываются как числа,  т.к.  \'undefined\' - неопределенное значение не приводится к числу ответ NaN');