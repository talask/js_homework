// Init http
const http = new Http();
// Init UI
const ui = new UI();
// Api
const apiKey = '9c27b0f722b84da5a08312d2b125351b';
// Init Auth
const auth = new Auth();
// Init Favorite News
const news = new FavoriteNews();
// Init News store
const newsStore =  NewsStore.getInstance();

// Create select sources

// Init elements

const select = document.getElementById('country');
const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const category = document.getElementById('category');
const source = document.getElementById('sources');
// const logout = document.querySelector('.logout');
// const newsContainer = document.querySelector('.news-container');


// All events
select.addEventListener('change', onChangeCountry);
searchBtn.addEventListener("click", onSearch);
category.addEventListener('change', onChangeCategory);
sources.addEventListener('change', onChangeSource);
// logout.addEventListener('click', onLogout);
// newsContainer.addEventListener('click', addFavorite);

// Check user
firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
      window.location = 'login-start.html';
    }
});

(function getSources () {
    // Array for choose sources
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'l', 'n', 'o', 'p', 't', 'w'];

    // Делаем запрос на получение новостей по тому что введено в инпут
    http.get(`https://newsapi.org/v2/sources?apiKey=${apiKey}`)
        .then(data => {

            console.log("!!!" + data);

            // Create list sources
            let i=0;
            data.sources.forEach(function(el) {
                if(alphabet[i] == el.id[0]) {
                    i++;
                ui.addOptins(el, source);
                }
            });
            $('select').formSelect(); 
        })
        .catch(err => {
            ui.showError(err);
        }) 
})();

// Events handler

function onChangeCountry (e) {
    // Show  loader
    ui.showLoader();
    // Проверяем выбрана ли категория
    let url = category.value.length ? `https://newsapi.org/v2/top-headlines?country=${select.value}&category=${category.value}&apiKey=${apiKey}` 
                : `https://newsapi.org/v2/top-headlines?country=${select.value}&apiKey=${apiKey}`;
     
    // Делаем запрос на получение новостей по выбранной стране
    http.get(url) 
        .then(data => {
            // Delete content
            ui.clearContainer();
            // scan obj
            data.articles.forEach((news, index) => ui.addNews(news, index));
            // save array news to news store
            newsStore.setNews(data.articles);
        })
        .catch(err => {
            // Show error
            ui.showError(err);
        })
}   


function onSearch(e) {
    // Делаем запрос на получение новостей по тому что введено в инпут
    http.get(`https://newsapi.org/v2/everything?q=${searchInput.value}&apiKey=${apiKey}`) 
        .then(data => {
            if (data.totalResults) {
            // Delete content
            ui.clearContainer();
            // scan obj
            data.articles.forEach(news => ui.addNews(news));
            } else {
            ui.showInfo("По вашему запросу новостей не найдено!");
            }
        })
        .catch(err => {
            ui.showError(err);
        })
}

function onChangeCategory (e) {
    // Show  loader
    ui.showLoader();
    // Проверяем выбрана ли страна
    let url = select.value.length ? `https://newsapi.org/v2/top-headlines?country=${select.value}&category=${category.value}&apiKey=${apiKey}` 
                : `https://newsapi.org/v2/top-headlines?category=${category.value}&apiKey=${apiKey}`;
     
    // Делаем запрос на получение новостей по выбранной стране
    http.get(url) 
        .then(data => {
            if (data.totalResults) {
                // Delete content
                ui.clearContainer();
                // scan obj
                data.articles.forEach(news => ui.addNews(news));
            } else {
                // "Новости по категории такой то по стране такойто не найдены"
                let message = select.value.length ? `Новости по категории ${category.text} по стране ${select.text}  не найдены`
                                : `Новости по категории ${category.text}  не найдены`;
                ui.showInfo(message);
                        }
        })
        .catch(err => {
            //Show error
            ui.showError(err);
        })
}   

function onChangeSource(e) {
    // Делаем запрос на получение новостей по тому что введено в инпут
    http.get(`https://newsapi.org/v2/top-headlines?sources=${sources.value}&apiKey=${apiKey}`) 
        .then(data => {
            if (data.totalResults) {
                // Delete content
                ui.clearContainer();
                // scan obj
                data.articles.forEach(news => ui.addNews(news, index));
            } else {
                ui.showInfo("По вашему запросу новостей не найдено!");
            } 
        })
        .catch(err => {
            ui.showError(err);
        })
}

// function onLogout(){
//     auth.logout()
//         .then(() => window.location = 'login-start.html' )
//         .catch(err => console.log(err));
// }

// function addFavorite(e) {
//     if(e.target.classList.contains('add-favorite')) {
//         const index = e.target.dataset.index;
//         const oneNews = newsStore.getNews()[index];
//         news.addFavoriteNews(oneNews)
//              .then(data => {
//                 //message
//                 M.toast({html: 'News successfully added', classes: 'rounded'})
//              })
//              .catch(err => {
//                  //message
//                 console.log(err);
//              });

//     }
// }