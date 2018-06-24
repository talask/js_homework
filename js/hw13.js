// Class Responce
// class User {
//     constructor(id, name, username, email, address, geo) {
//         this.id = id,
//         this.name = name,
//         this.username = username,
//         this.email = email,
//         this.address = {
//             street = address.street,
//             suite = address.suite,
//             city = address.city,
//             zipcode = address.zipcode
//         },
//         this.geo = {
//             lat = geo.lat,
//             lng = geo.lng
//         }
//     }
// }
let url = "https://jsonplaceholder.typicode.com/users";
// Create classes
class UI { 
    addUsers(resp){
        // if(resp.lenght > 0) {
        let li='';

        sortArray(resp);
        resp.forEach(function(element) { 
            li += '<li class="user" data-id="' + element.id + '">' + element.name + '</li>';
            console.log('<li class="user" data-id="' + element.id + '">' + element.name + '</li>');
        });
     
            // Create markup
        const ul = '<ul>' + li + '</ul>';
        const div = document.querySelector('.users-list');
        div.innerHTML= ul;
        return;
    }
}
function sortArray(arr) {
    return arr.sort(function(prev, next) {
        if (prev.name < next.name) return -1;
        if (prev.name >= next.name) return 1;
    });
    
}

const button = document.querySelector('button.get-users');

button.addEventListener('click',function(e){
    // Create ui
    const ui = new UI();
   
        // Создать экземпляр класса XMLHttpRequest
        let xhr = new XMLHttpRequest();
    
        // вызвать метод open
        xhr.open("GET", url);
        // Отправляем запрос
        xhr.send();
        // Подписываемся на событие load
        xhr.addEventListener("load", function () {
            if (xhr.status === 200) {
                let response = JSON.parse(xhr.responseText);
                // console.log(response);
                ui.addUsers(response);
                
            } else {
                console.log(xhr.status);
            }
        });
        
})

const div = document.querySelector('.users-list');
console.log(div);
div.addEventListener('click', function(e){
    if(e.target.tagName === 'LI') {

    }
});