console.log("HOMEWORK 4");
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
            new_string += i < (j - 1) ? str.charCodeAt(i) + ' ' 
                                      : str.charCodeAt(i);
        }
        
    return new_string;
}
console.log(getCodeStringFromText);
console.log ('=' + getCodeStringFromText('hello') + '=');

// EditTask
let todos = [
    {
      text: 'Learn JavaScript',
      id: 0
    },
    {
      text: 'Learn Angular',
      id: 1
    }
  ];

function editTask(id, text) {
    if (id !== 0 && !id) return new Error('id required');
    if (isNaN(id)) return new Error('id must be a number');
    id = Number(id);
    if (typeof text !== 'string') return new Error('text is not a string');
    if (!text.length) return new Error('text empty');

    for(el of todos) {
        console.log(el);
    }

    let todo;

    for (let i = 0; i < todos.length; i++ ) {
        if (todos[i].id === id) {
            todo = todos[i];
            todos[i].text = text;    
        break;
        }
    }

    for(el of todos) {
        console.log(el);
    }

  return todo || 'task not found'
}

console.log ( editTask(1, 'Learn React'));