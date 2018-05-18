// 1
function multiply () {
    let result = 1,
        message = '',
        flag = 0,
        max = arguments.length;
    if (max === 0) return 'Данные не переданы';
    for(let i = 0; i < max; i++) {
        if(typeof(arguments[i]) === 'number') { 
            flag = 1;
            result *= arguments[i];
        } else {
            message += i+ '-й '
        }
    }
    if ((message.length > 0) && (flag === 1)) { 
        return message + 'аргумент(ы) не цифра\n Произведение равно ' + result;
    }

    return 'Произведение равно ' + result;
}
//console.log(multiply);
console.log (multiply(12, 3, 'Hello' , 456));

// 3
function reverseString(str) {
    if(!str) return 'Not found any arguments';
    if(typeof(str) !== 'string') return 'Argument is ' + typeof(str);
    if (!str.length) return 'String is empty';
    
    let new_string = '',
        j = str.length;
    
    while (j--) {
        new_string += str[j];
    }
    return new_string;
}
//console.log(reverseString);
console.log (reverseString(''));

// 4
function getCodeStringFromText (str) {
    if(!str) return 'Not found any arguments';
    if(typeof(str) !== 'string') return 'Argument is ' + typeof(str);
    if (!str) return 'String is empty';

    let new_string = '',
        i = -1;
        j = str.length;

    while (++i < j) {
            new_string += i < (j - 1) ? str.charCodeAt(i) + " " 
                                      : str.charCodeAt(i);
        }
    return new_string;
}
console.log(getCodeStringFromText);
console.log ("=" + getCodeStringFromText('hello') + "=");