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

// Init elements



window.addEventListener('load', onLoad);

function onLoad() {
    console.log('111')
    // get favorite news
    news.getFavoriteNews()
        .then(favoriteNews => {
            // ui 
            if(favoriteNews.docs.length) {
                favoriteNews.forEach((doc) => {
                ui.addFavoriteNews(doc.data(), doc.id);
                }); 
            } else {
                ui.showInfo("No news added");
            }
        })
        .catch(err => {
            console.log(err);
        });
}