// Task model
let tasks = [
    {
        text: 'Learn js',
        id: '1'
    },
    {
        text: 'Learn angular',
        id: '2'
    }
];

// Get element list-group
let ul = document.querySelector('.list-group');

// tasks.forEach(task => {
//     let li = listTemplate(task);
//     // insertAdjacentElement
//     ul.insertAdjacentElement("afterbegin", li);
// });

tasks.forEach(task => ul.insertAdjacentElement("afterbegin", listTemplate(task)));

function listTemplate(task) {
    // Create element
    let li = document.createElement('li');
    // Add task text
    li.textContent = task.text;
    // Set id
    li.setAttribute('data-id', task.id);
    // Add class
    li.classList.add('list-group-item');
    // Return created li
    return li;
}

// AddTask
function addTask(text) {
    // Create task object
    const newTask = {text, id: String(tasks.length+1)};
    // Add task on tasks
    tasks.unshift(newTask);
    // Add li at ul
    ul.insertAdjacentElement("afterbegin", listTemplate(newTask))
}
// ? нужно ли создавать копию массива
// ? нужно ли возвращать массив
// ? нужно ли проверять аргументы
// Delete task
function deleteTask(id, arr) {
    // найти по id элемент массива и удалить из массива
    // найти элемент на страницы с таким же id и удалить его из разметки
   let lis = document.getElementsByClassName('list-group-item');
    for (let el of arr) {
        if(el.id == id) {
           arr.splice(arr.indexOf(el),1);
            for (let attr of lis) {
                if(attr.dataset.id == id) {
                    attr.remove(); 
                }
            }    
            return arr, 'Element with id = ' + id + ' has been deleted';
        }
    }
return arr;  
}
// ? проверка есть ли такой єлемент
// ? есди нет, то создать
// ? если есть, то заменить текст textcontent || innerHTML
// Alert
function message(text) {
    // удалять существующий алерт
    // создать элемент div
    // дать ему класс alert alert-info
    // вставить в алерт текст
    // добавить этот алерт в начало контейнра перед формой

}







