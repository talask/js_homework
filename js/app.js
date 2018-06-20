// Class Book
class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

// Class UI
class UI {
  addBookToList(book) {
    // Get book list
    const list = document.querySelector('.book-list tbody');
    // Create markup
    const tr = `
      <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.id}</td>
        <td>
            <button class="waves-effect waves-light btn red right">Delete <i class="material-icons right">close</i></button>
        </td>
      </tr>
    `;

    list.insertAdjacentHTML('beforeend', tr);
  }

  delBookToList(tr) {
    tr.remove();
  }

  resetForm() {
    document.forms['addBookForm'].reset(); 
  }

  showAlert(message, type) {

    // Create markup
    const alert = `
      <div class="card alert ${type === 'error' ? 'red' : 'green'}">
        <div class="card-content white-text">
          <span class="card-title">${type === 'error' ? 'Error' : 'Success'}</span>
          <p>${message}</p>
        </div>
      </div>
    `;

    // Get title
    const cardTitle = document.querySelector('.card-title');
    // Get button
    const btn = document.querySelector('form button');
    // Disabled btn
    btn.disabled = true;

    // Insert alert
    cardTitle.insertAdjacentHTML('afterend', alert);

    setTimeout(function () {
      document.querySelector('.alert').remove();
      btn.disabled = false;
    }, 3000);
  }
}

// Class Local Storage
class Store {
  getBooks() {
    let books;
    if(!localStorage.getItem('books')) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books')); // Перегоняем их из json в обычный массив
    }

    return books;
  }

  addBook(book) {
    // Get books from localstorage
    const books = this.getBooks();
    // Add new book
    books.unshift(book);
    // Save localstorage
    localStorage.setItem('books', JSON.stringify(books));
    // 1. Получаем из хранилища книги
    // 2. Перегоняем их из json в обычный массив
    // 3. добавляем в полученный массив новую книгу
    // 4. перегоняем из обычного массива в json
    // 5. сохраняем в хранилище
  }


  delBook(title, author, id) { 
  // Get books from localstorage
  const books = this.getBooks();
  
  // Delete book
    for(let el in books) {
       if((books[el].title === title) && 
       (books[el].author === author) && 
       (books[el].id === id)) books.splice(el, 1);
    }
     // Save localstorage
     localStorage.setItem('books', JSON.stringify(books));
     // 1. Получаем из хранилища книги
     // 2. Перегоняем их из json в обычный массив
     // 3. добавляем в полученный массив новую книгу
     // 4. перегоняем из обычного массива в json
     // 5. сохраняем в хранилище
  }
}

// Event DOMContentLoaded
document.addEventListener('DOMContentLoaded', function (e) {
  // Создаем экземпляр класса Store
  const store = new Store();
  // Create ui
  const ui = new UI();
  // Получаем все книги из хранилища
  const books = store.getBooks();
  // Добавляем книги из хранилища в разметку
  books.forEach(book => ui.addBookToList(book));
});

// Event submit
document.forms['addBookForm'].addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const title = this.elements['book_title'].value,
        author = this.elements['book_author'].value,
        id = this.elements['book_id'].value;

  // Create book
  const book = new Book(title, author, id);
  // Create ui
  const ui = new UI();
  // Get Store
  const store = new Store();

  // Validate
  if (title === '' || author === '' || id === '') {
    // Show error
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // Add book to ui
    ui.addBookToList(book);
    // Show success message
    ui.showAlert('Book added!', 'success');
    // Add book to localstorage
    store.addBook(book);
    // Clear form
    ui.resetForm();
  }
  
});

// Удаление книги 

const table = document.querySelector('.book-list');

table.addEventListener('click', function(e){
  // Create ui
  const ui = new UI();
  // Get Store
  const store = new Store();

  if(e.target.tagName === 'BUTTON') {
    // Get tr where was click
    let tr = e.target.closest('tr');
    // Get array td
    const td = tr.querySelectorAll('td');
    // Delete book to localstorage
    store.delBook(td[0].textContent, td[1].textContent, td[2].textContent);
    // Delete book to ui
    ui.delBookToList(tr);
    // Show success message
    ui.showAlert('Book deleted!', 'success');
  }

})