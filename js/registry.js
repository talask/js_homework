// Init Auth
const auth = new Auth;

//Init Form
const formRegistry = document.forms['registry-form'];
const email = formRegistry.elements['email'];
const password = formRegistry.elements['password'];

// //Check auth state
// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       // User is signed in.
//       console.log(user);
//       window.location = 'news-app.html';
//     } 
//   });

  formRegistry.addEventListener('submit', onRegistry);
 

  function onRegistry(e) {
      e.preventDefault();
      if(email.value && password.value) {
        auth.register(email.value, password.value)
        .then(() => {
          window.location = 'news-app.html';
        })
        .catch(err => {
          console.log(err);
        });
      }
  }
