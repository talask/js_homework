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

// Delete task
function deleteTask(id) {
    // найти по id элемент массива и удалить из массива
    // найти элемент на страницы с таким же id и удалить его из разметки
    
    id = Number(id);
    if(!id && id !== 0) return tasks, message('Element is not a number');
    let lis = document.getElementsByClassName('list-group-item');
    for (let el of tasks) {
        if(el.id == id) {
            tasks.splice(tasks.indexOf(el),1);
            for (let attr of lis) {
                if(attr.dataset.id == id) {
                    attr.remove(); 
                }
            }    
            return tasks, message('Element with id = ' + id + ' has been deleted');
        }
    }
return tasks, message('Element with id = ' + id + ' not found');  
}

// Alert
function message(text) {
    // удалять существующий алерт
    // создать элемент div
    // дать ему класс alert alert-info
    // вставить в алерт текст
    // добавить этот алерт в начало контейнра перед формой
    
    let container = document.querySelector('.container');
    let isAlert =   container.querySelector('div.alert.alert-info');
    
    if(isAlert) { 
        let alerts =  container.getElementsByClassName('alert alert-info');
        container.removeChild(alerts[0]);
    }
    let alert =  document.createElement('div');
        alert.setAttribute('class', 'alert alert-info'); 
        alert.textContent = text;
        container.insertAdjacentElement("afterbegin", alert);
}







