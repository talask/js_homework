// common function

const newsContainer = document.querySelector('.news-container');
const logout = document.querySelector('.logout');

logout.addEventListener('click', onLogout);
newsContainer.addEventListener('click', actionsFavorite);

function onLogout(){
    auth.logout()
        .then(() => window.location = 'login-start.html' )
        .catch(err => console.log(err));
}

function actionsFavorite(e) {
    if(e.target.classList.contains('add-favorite')) {
        const index = e.target.dataset.index;
        const oneNews = newsStore.getNews()[index];
        console.log(index);
        console.log(oneNews);
        news.addFavoriteNews(oneNews)
             .then(data => {
                //message
                M.toast({html: 'News successfully added', classes: 'rounded'});
             })
             .catch(err => {
                 //message
                console.log(err);
             });

    }

    if(e.target.classList.contains('remove-favorite')) {
        const id = e.target.dataset.id;
        news.removeFavoriteNews(id)
            .then(function() {
                //message
                console.log( 'News successfully deleted');
                M.toast({html: 'News successfully deleted', classes: 'rounded'});
                ui.clearContainer();
                onLoad();
            })
             .catch(err => {
                 //message
                console.log(err);
             });

    }
}
