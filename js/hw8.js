console.log('HOMEWORK 8');
// 1-я часть
// 1

const retangle = {
    'height': 20,
    'width': 30,
    getSquare: function(){
        return this.height * this.width;
    }
};
console.log(retangle.getSquare());

//2

const price = {
    price: 10,
    discount: '15%',
    getPrice: function(){
        return this.price;
    },
    getPriceWithDiscount: function(){
        return (100 - this.discount.slice(0,this.discount.length - 1)) * this.price / 100;
    }
};
console.log(price.getPrice());
console.log(price.getPriceWithDiscount());

// 3

const user = { name: 'Abraham' };
getUserName = function(){ return this.name; }
user.getName = getUserName;
console.log(user.getName());

// 4

const someObj = {
    height: 10,
    inc: augment
};
    
function augment(){
    let a = this.height;
    delete this.height;
    return ++a; 
    }

someObj.height = someObj.inc()
console.log(someObj.height);

// 5

const numerator = {
    value: 1,
    double: function(){
        let a = this.value;
        delete this.value; 
        return a*2; 
    },
    plusOne: function(){ 
        let a = this.value;
        delete this.value; 
       // this.value + 1; 
        return ++a; },
    minusOne: function(){ 
        let a = this.value;
        delete this.value; 
        //this.value - 1; 
        return --a; 
    }
}

//numerator.value = numerator.double().plusOne();
//console.log(numerator.value);

// 6
const user1 = { name: 'Abraham' },
      otherUser = { 
        name: 'John',
        getName: function(){ return this.name; }
     };
//user1.getName(); // 'undefined' - у объекта user1 нет такого метода
user1.getName = otherUser.getName; // объект user1 одолжил метод getName у объекта otherUser

user1.getName(); // 'Abraham' -  у объекта user1 есть метод getName
otherUser.getName(); // 'John' - getName - метод объекта otherUser

// 2-я часть
// 1

function getList(){ return this.list; }
let userS = {
    length: 4,
    list: ['Abraham', 'James', 'John', 'Steven']
};
console.log(getList() + ' - функция вызвана в глобальном пространстве => undefined'); 
console.log(getList.call(userS) + ' - getList.call(userS) - call вызывает объект для которого будет выполнена функция =>  userS.list');
userS.getList = getList;
console.log(userS.getList() +  ' - userS.getList = getList; userS.getList() - объекту userS добавлен метод  getList =>  userS.list');

// 2

const product = {
    count: 20,
    price: 35,
    getAllCost: function(){ return this.count * this.price; }
};
console.log('product.getAllCost() => ' + product.getAllCost());

// 3

const detal = {
    count: 320,
    price: 29
};
detal.getAllCost = product.getAllCost;
console.log('detal.getAllCost() => ' + detal.getAllCost());

// 4

let sizes = { width: 5, height: 10 };
getSquare = function() { return this.width * this.height; }
console.log(getSquare.call(sizes));

// 5

let numbers = [4, 12, 0, 10, -2, 4];
console.log('min([4, 12, 0, 10, -2, 4])) = ' + Math.min.apply(null,numbers));

// 6

const element = {
    height: '15px',
    marginTop: '5px',
    marginBottom: '5px',
    getFullHeight: function() {
        return sliceSize(this.height) + sliceSize(this.marginTop) + sliceSize(this.marginBottom);
    }
};

function sliceSize(a) { return  Number(a.slice(0, a.length - 2)); }

console.log('element.getFullHeight() = ' + element.getFullHeight());

const block = {
    height: '5px',
    marginTop: '3px',
    marginBottom: '3px'
};
console.log('element.getFullHeight.call(block) = ' + element.getFullHeight.call(block));

// 7 

let elemenT = {
    height: 25,
    getHeight: function() { return this.height;    }
};
let getElementHeight = elemenT.getHeight.bind(elemenT);
console.log(getElementHeight());