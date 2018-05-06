// ***********************
// *     присваивание    *
// ***********************

//1
let a = 1, b = 2, c = 3, x = 4, y = 5, z = 6, i = 7;
 a += 10, b *= 18,  c -= 10
 x += a, y *= z,  i *= 5 * z
console.log( "a = " + a + ", b = " + b + ", c = " + c + ", x = " + x + ", y = " + y + ", i = " + i );
 //2
 let q = 2;
 q *= q 
 console.log( "q = " + q);

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
  console.log(bb + " - число четное")
}
else {
  console.log(bb + " - число нечетное") 
}

// ****************************
// *    УСЛОВНЫЕ ОПЕРАТОРЫ    *
// ****************************

//1
let variable = 'hidden';
if(variable === 'visible') {
  variable = 'hidden';
}
else {
  variable = 'visible';
}
console.log(variable);

variable = variable === 'visible' ? 'hidden' : 'visible';
console.log(variable);

//2
let v = 2;
if(v === 0) {
  v = 1;
}
else {
  if(v < 0) {
      v = 'less then zero';
  }
  else {
    v *= 10;  
  }
}
console.log(v);

v = v === 0 ? v = 1 :
    v < 0 ? v = 'less then zero' : v *= 10;  
console.log(v);

// ****************************
// *          SWITCH          *
// ****************************

let aaa = 'flex';
switch(a) {
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

