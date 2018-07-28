class UI {

    constructor() {
        this.container = document.querySelector(".news-container .container .row");
        
      }

    addNews(news, index) {
       
        const template = `
            <div class="col s12 m6" id="d${index}">
                <div class="card left-align">
                    <div class="card-image waves-effect waves-block waves-light">
                         <img class="activator" src="${news.urlToImage}">
                    </div>
                  <div class="card-content">
                      <span class="card-title activator grey-text text-darken-4">${news.title}<i class="material-icons right">more_vert</i></span>
                      <p><a href="${news.url}">Read more</a></p>
                 </div>
                 <div class="card-reveal">
                      <span class="card-title grey-text text-darken-4">${news.title}<i class="material-icons right">close</i></span>
                      <p>${news.description}</p>
                  </div>
                  <button class="waves-effect waves-light btn add-favorite" data-index="${index}">Add favorite</button>
                </div>
            </div>   
        `;
        
        this.container.insertAdjacentHTML("beforeend", template);
        let nam = 'd' + index;
        const card = document.getElementById(nam);
        card.style.opacity = 0;
       
        return card;
  }
  

  addFavoriteNews(news, id) {
      
      const template = `
        <div class="col s12 m6">
            <div class="card left-align">
                <div class="card-image waves-effect waves-block waves-light">
                     <img class="activator" src="${news.urlToImage}">
                </div>
              <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">${news.title}<i class="material-icons right">more_vert</i></span>
                  <p><a href="${news.url}">Read more</a></p>
             </div>
             <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">${news.title}<i class="material-icons right">close</i></span>
                  <p>${news.description}</p>
              </div>
              <button class="waves-effect waves-light red darken-1 btn remove-favorite" data-id="${id}">Remove favorite</button>
          </div>
      </div>
    `;
 this.container.insertAdjacentHTML("beforeend", template);
}

    clearContainer() {
        this.container.innerHTML = "";
    }

    showLoader() {
        this.clearContainer();
    
        const template = `
            <div class="preloader-wrapper big active">
              <div class="spinner-layer spinner-blue">
                <div class="circle-clipper left">
                  <div class="circle"></div>
                </div>
                <div class="gap-patch">
                  <div class="circle"></div>
                </div>
                <div class="circle-clipper right">
                  <div class="circle"></div>
                </div>
              </div>
            </div>
        `;
    
        this.container.insertAdjacentHTML("beforeend", template);
      }

      checkMessedge () {
        if(document.querySelector('.message')) {
          document.querySelector('.message').remove();
        }
      }

      showInfo(msg) {
        this.clearContainer();
    
        const template = `
          <div class="card blue lighten-4">
            <div class="card-content">
                <p>${msg}</p>
            </div>
          </div>
        `;
    
        this.container.insertAdjacentHTML("beforeend", template);
      }

      showError(err) {
        this.clearContainer();
    
        const template = `
          <div class="card red lighten-1">
            <div class="card-content">
                <span class="card-title">Error:</span>
                <p>${err}</p>
            </div>
          </div>
        `;
    
        this.container.insertAdjacentHTML("beforeend", template);
      }

    addOptins (item, sel){
        const option = `<option value="${item.id}">${item.name}</option>`;

        sel.insertAdjacentHTML("beforeend", option);
        
      }

      showErrorMessage(obj, err) {
       
        this.checkMessedge();
    
        const template = `
          <div class="card red lighten-1 message">
            <div class="card-content">
            <p class="close-info"><i class="fas fa-times-circle"></i></p>
                <span class="card-title">Error:</span>
                <p>${err}</p>
            </div>
          </div>
        `;
        obj.insertAdjacentHTML("afterbegin", template);
      }

      showNews(arr) {
        
        let timeout = 0;
        arr.forEach((el, index) => {
            const newNews = this.addNews(el, index);
          
            setTimeout (() => {
                this.animateElement(newNews);
            }, timeout);
            timeout += 500;
        });
     }

      animateElement(element) {
        let step = 0;
       
        function animateAction (time) {
            step += 0.02;
            element.style.opacity = step;
            element.style.transform = `translateY(-${step + 10}px)`;
           
            const raf = requestAnimationFrame(animateAction);
       
            if(parseFloat(element.style.opacity) >=  1) {
                    cancelAnimationFrame(raf)
                }
        }

        animateAction(); 
    }

    createAlert(msg) {
      const allAlerts = document.body.querySelectorAll(".alert");
      let fullAlertsHeight = 20;
      console.log(allAlerts.length);
      if(allAlerts.length) {
          allAlerts.forEach(el => {
              fullAlertsHeight += el.offsetHeight + 10;
          

          });
      }
      const alert = document.createElement('div');
      alert.classList.add('alert', `${msg.error ? "alert-danger" : "alert-success"}`);
      let fullAllertsHeight = 50;
      if (allAlerts.length) {
        allAlerts.forEach(al => fullAllertsHeight += al.offsetHeight + 30);
      }
      alert.textContent = msg.html;
      alert.style.opacity = 0;
      alert.style.position = "fixed";
      alert.style.top = `${fullAlertsHeight}px`;
      alert.style.lineHeight = " 1.5em";
      alert.style.right = "10px";
      alert.style.zIndex = "9";
      alert.style.transform = "translateY(100px)";
      this.container.insertAdjacentElement('afterBegin', alert);
    
     this.animateElement(alert);
     setTimeout(() => {
        alert.remove();
      }, 5000);
  }

    };