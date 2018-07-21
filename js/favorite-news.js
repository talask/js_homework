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

window.addEventListener('load', onLoad);

function onLoad() {
    // get favorite news
    news.getFavoriteNews()
        .then(favoriteNews => {
           // ui 
           favoriteNews.forEach((doc) => {
           ui.addNews(doc.data);
        }); 
        })
        .catch(err => {
            console.log(err);
        });
}