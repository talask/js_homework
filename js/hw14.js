
// Init http
const http = new Http();
// Init UI
const ui = new UI();
// Api
const apiKey = '9c27b0f722b84da5a08312d2b125351b';

// Create select sources

// Init elements

const select = document.getElementById('country');
const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const category = document.getElementById('category');
const source = document.getElementById('sources');

// All events
select.addEventListener('change', onChangeCountry);
searchBtn.addEventListener("click", onSearch);
category.addEventListener('change', onChangeCategory);
sources.addEventListener('change', onChangeSource);

(function getSources () {
    // Array for choose sources
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'l', 'n', 'o', 'p', 't', 'w'];

    // Делаем запрос на получение новостей по тому что введено в инпут
    http.get(`https://newsapi.org/v2/sources?apiKey=${apiKey}`, function (err, res) {
        if (err) return ui.showError(err);

        const response = JSON.parse(res);
        console.log(response);
        // Create list sources
        let i=0;
         response.sources.forEach(function(el) {
            if(alphabet[i] == el.id[0]) {
                i++;
               ui.addOptins(el, source);
            }
        });
        $('select').formSelect();
          
    });
    
})();

// Events handler

function onChangeCountry (e) {
    // Show  loader
    ui.showLoader();
    // Проверяем выбрана ли категория
    let url = category.value.length ? `https://newsapi.org/v2/top-headlines?country=${select.value}&category=${category.value}&apiKey=${apiKey}` 
                : `https://newsapi.org/v2/top-headlines?country=${select.value}&apiKey=${apiKey}`;
     
    // Делаем запрос на получение новостей по выбранной стране
    http.get(url, function (err, res) {
        if(!err) {
            // JSON => obj
            const response = JSON.parse(res);
            // Delete content
            ui.clearContainer();
            // scan obj
            response.articles.forEach(news => ui.addNews(news));
        }  else {
            // Show error
            ui.showError(err);
        }

    });
}   


function onSearch(e) {
    // Делаем запрос на получение новостей по тому что введено в инпут
    http.get(`https://newsapi.org/v2/everything?q=${searchInput.value}&apiKey=${apiKey}`, function (err, res) {
      if (err) return ui.showError(err);

      const response = JSON.parse(res);

      if (response.totalResults) {
       // Delete content
        ui.clearContainer();
        // scan obj
        response.articles.forEach(news => ui.addNews(news));
      } else {
        ui.showInfo("По вашему запросу новостей не найдено!");
      }
    });
}

function onChangeCategory (e) {
    // Show  loader
    ui.showLoader();
    // Проверяем выбрана ли страна
    let url = select.value.length ? `https://newsapi.org/v2/top-headlines?country=${select.value}&category=${category.value}&apiKey=${apiKey}` 
                : `https://newsapi.org/v2/top-headlines?category=${category.value}&apiKey=${apiKey}`;
     
    // Делаем запрос на получение новостей по выбранной стране
    http.get(url, function (err, res) {
        if(!err) {
            // JSON => obj
            const response = JSON.parse(res);
            if (response.totalResults) {
                // Delete content
                ui.clearContainer();
                // scan obj
                response.articles.forEach(news => ui.addNews(news));
            } else {
                // "Новости по категории такой то по стране такойто не найдены"
                let message = select.value.length ? `Новости по категории ${category.text} по стране ${select.text}  не найдены`
                              : `Новости по категории ${category.text}  не найдены`;
                ui.showInfo(message);
            }
        }  else {
            // Show error
            ui.showError(err);
        }

    });
}   

function onChangeSource(e) {
    // Делаем запрос на получение новостей по тому что введено в инпут
    http.get(`https://newsapi.org/v2/top-headlines?sources=${sources.value}&apiKey=${apiKey}`, function (err, res) {
      if (err) return ui.showError(err);

      const response = JSON.parse(res);

      if (response.totalResults) {
       // Delete content
        ui.clearContainer();
        // scan obj
        response.articles.forEach(news => ui.addNews(news));
      } else {
        ui.showInfo("По вашему запросу новостей не найдено!");
      }
    });
}