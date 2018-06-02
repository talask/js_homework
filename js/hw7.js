document.addEventListener('DOMContentLoaded', function () {
    
    const btnMsg = document.querySelector('#btn-msg');
    const body = document.querySelector('body');
    const divTag = document.getElementById('tag');
    
    //console.log(body);
    // function(evn){ 
    //     if (evn.type === 'onmouseover')
    //         btnMsg.style.backgroundColor = 'red';
    //     else if (evn.type === 'onmouseout') 
    //         btnMsg.style.backgroundColor = '';
    //     if (evn.type === 'onclick')
    //         alert(btnMsg.textContent);
    //     };
    btnMsg.addEventListener('click',function(){ alert(btnMsg.textContent); });

    btnMsg.addEventListener('mouseover',function(){        btnMsg.style.backgroundColor = 'red'; });

    btnMsg.addEventListener('mouseout',function(){  btnMsg.style.backgroundColor = ''; });  

    body.addEventListener('click',function(e){ 
        divTag.innerHTML = e.target.tagName;
       // console.log(e.target.tagName);
     });

    // FORM
    const seasonsArray = [
        {'лето' : 'одень футболку и шорты'},
        {'осень' : 'одень куртку и штаны'},
        {'зима' : 'одень шубу и теплые штаны'},
        {'весна' : 'одень ветровку и джинсы'},
     ]
    
    const selectSeasons = document.getElementById('seasons');
    const input = document.querySelector('input');
    let variable = selectSeasons.options[selectSeasons.selectedIndex].text.toLowerCase();
    // ВАРИАНТ 1 - ЕСЛИ НЕ ИСПОЛЬЗОВАТЬ VALUE B OPTION
    // записываю значение в input при загрузке страницы 
    changeWear(variable);
    
    // функция поиска соответствия выбранного значения select в массиве
    function changeWear(v) {
        seasonsArray.forEach(function(el){
            if (el[v])  return  input.value = el[v];
        })
    }
    
    selectSeasons.addEventListener('change',function(){
        changeWear(selectSeasons.options[selectSeasons.selectedIndex].text.toLowerCase());
     })

    // ВАРИАНТ 2 - ЕСЛИ VALUE B OPTION БУДУТ СООТВЕТСТВОВАТЬ ИНДЕКСУ В МАССИВЕ
     // записываю значение в input при загрузке страницы 
    input.value = seasonsArray[selectSeasons.value][selectSeasons.options[selectSeasons.selectedIndex].text.toLowerCase()];

    selectSeasons.addEventListener('change',function(){
        input.value = seasonsArray[selectSeasons.value][selectSeasons.options[selectSeasons.selectedIndex].text.toLowerCase()];
     })
     
  });
  
  