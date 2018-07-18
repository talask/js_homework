const NewsStore = (function (){
    let news;

    function getNews(){
        return news.slice;
    }

    function setNews (newsArray) {
        news = newsArray;
        return news.slice;

    }

    function createInstance () {
        return {
            getNews,
            setNews
        }
    }

    return {
        getInstance() {
            return instance || (instance = createInstance());
        }
    }
})();