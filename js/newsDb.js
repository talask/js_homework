class FavoriteNews {
    constructor () {
        this.db = FirestoreInit.getInstance().getDb();
        this.collectionName = 'favorite-news';
    }

    getFavoriteNews() {
        return new Promise((resolve, reject) => {
            this.db.collection(this.collectionName).get()
                .then((querySnapshot) => resolve(querySnapshot))
                .catch(err => reject(err));
        });S
    }

    addFavoriteNews(news) {
       // console.dir(news);
        return new Promise((resolve, reject) => {
           // db.collection("users").add
            this.db.collection(this.collectionName).add(news)
                .then(docRef => resolve(docRef))
                .catch(err => reject(err));
        })
    }

    removeFavoriteNews(id) {
       // return new Promise((resolve, reject) => {
        this.db.collection(this.collectionName).doc(id).delete()
                .then(function() {
                console.log("Document successfully deleted!");
                }).catch(function(error) {
                console.error("Error removing document: ", error);
                });
       // })
    }
}

