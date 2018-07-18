// Init Auth
const auth = new Auth;
// Init UI
const ui = new UI();

//Init Form
const form = document.forms['login-form'];
const email = form.elements['email'];
const password = form.elements['password'];
const registry = document.querySelector('.registry');


//Check auth state
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log(user);
      window.location = 'news-app.html';
    } 
  });

  form.addEventListener('submit', onLogin);
  registry.addEventListener('click', onPageRegictration);
  form.addEventListener('click', function(e){
    if(e.target.tagName === 'I') {
        ui.checkMessedge();
    }
  });

  function onLogin(e) {
      e.preventDefault();
      if(email.value && password.value) {
        auth.login(email.value, password.value)
        .then(() => {
          window.location = 'news-app.html';
        })
        .catch(err => {
          console.log(err);
          ui.showErrorMessage(form, err);
        });
      }
  }

  function onPageRegictration() {
    window.location = 'registry.html';
}