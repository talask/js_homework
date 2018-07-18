// Init Auth
const auth = new Auth;
// Init UI
const ui = new UI();

//Init Form
const formRegistry = document.forms['registry-form'];
const email = formRegistry.elements['email'];
const password = formRegistry.elements['password'];

  formRegistry.addEventListener('submit', onRegistry);
  formRegistry.addEventListener('click', function(e){
    if(e.target.tagName === 'I') {
        ui.checkMessedge();
    }
  });

  function onRegistry(e) {
      e.preventDefault();
      if(email.value && password.value) {
        auth.register(email.value, password.value)
        .then(() => {
          window.location = 'news-app.html';
        })
        .catch(err => {
          console.log(err);
          // Show error
          ui.showErrorMessage(formRegistry, err);
        });
      }
  }
