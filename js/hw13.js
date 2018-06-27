// Set value
let url = "https://jsonplaceholder.typicode.com/users";
const button = document.querySelector('a.get-users');
const close = document.querySelector('p.close-info');
const div = document.querySelector('.users-list');
const p = document.querySelector('p.info');
let usersList = [];

// Create classes
class UI { 

    // Create and show users list
    addUsers (resp){
        let li='';
        let bgcolor = ['bg-gray', 'bg-white'];
        let toggle = 0;
        resp.forEach(function(element) { 
            li += '<li class="user ' + bgcolor[toggle] + '" data-id="' + element.id + '">' + element.name + '</li>';
            toggle = toggle ? 0 : 1;
        }); 
        // Create markup
        const ul = '<ul>' + li + '</ul>';
        this.innerText(ul, div)
    }

    // Show information about user
    viewUser (id, setElement) {
        let searchUser = usersList.filter(function(el){
            return el.id == id; 
        });
        // Create table
        let table = `<p class="close-info"><i class="fas fa-times-circle"></i></p><table>
                    <tr><th>Name</th><td>${searchUser[0].name}</td></tr>
                    <tr><th>UserName</th><td>${searchUser[0].username}'</td></tr>
                    <tr><th>Phone</th><td>${searchUser[0].phone}</td></tr>
                    <tr><th>Email</th><td>${searchUser[0].email}</td></tr>
                    <tr><th>Website</th><td>${searchUser[0].website}</td></tr>`;
       
        let info = document.querySelectorAll('.user-info');
        if(info.length > 0) {
            for( let el of info){
                this.deleteEl(el);
            } 
        }
        // Create element
        let divInfo = document.createElement('div');
            this.innerText(table,divInfo);
            divInfo.classList.add('user-info');
        // Insert div information
        setElement.insertAdjacentElement("beforebegin", divInfo);
    }

    // Insert text to element html
    innerText (text, el) {
        el.innerHTML = text;
    }

    // Delete element html
    deleteEl (el) {
        el.remove();
    }
}

class TransformObj { 

    sortArray(arr) {
        return arr.sort(function(prev, next) {
            if (prev.name < next.name) return -1;
            if (prev.name >= next.name) return 1;
        });
    }

    createList(arr) {
        return usersList = arr;
    }

}

button.addEventListener('click',function(e){
    // Create ui
    const ui = new UI();
    const transform = new TransformObj();
    const http = new Http();

    http.get(url, function (err, res) {
        if(err) {
            alert ('ERROR')
        } else {
            let answer = transform.sortArray(JSON.parse(res));
            transform.createList(answer);
            ui.addUsers(answer);
            ui.innerText('Successful work!', p);
        }
    });        
})

div.addEventListener('click', function(e){
    const ui = new UI();

    if(e.target.tagName === 'LI') {
        ui.viewUser(e.target.dataset.id, e.target); 
    }

    if(e.target.tagName === 'I') {
       ui.deleteEl(e.target.closest('div'));
    }
});



