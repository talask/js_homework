const FirestoreInit =(function (){
    var instance;
    var config = {
        apiKey: "AIzaSyCxysLcpCDP00sq-v3qzHzxY2bPfV_LFhc",
        authDomain: "myproject-news-app.firebaseapp.com",
        databaseURL: "https://myproject-news-app.firebaseio.com",
        projectId: "myproject-news-app",
        storageBucket: "myproject-news-app.appspot.com",
        messagingSenderId: "879579893691"
    };
    firebase.initializeApp(config);
    // Initialize Cloud Firestore through Firebase
    var db = firebase.firestore();
   
    function getDb () {
        return db;
    }
    function createInstance() {
        return {
            getDb
        }
    }
    return {
        getInstance() {
            return instance || (instance = createInstance());
        }
    }
})();


