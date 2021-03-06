console.log(' === HOMEWORK 8 ===');
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
        return (100 - parseInt(this.discount)) * this.price / 100;
    }
};
console.log(price.getPrice());
console.log(price.getPriceWithDiscount());

// 3

const user = { name: 'Abraham' };
const getUserName = function(){ return this.name; }
user.getName = getUserName;
console.log(user.getName());

// 4

const someObj = {
    height: 10,
    augment: function() {
        return  ++this.height;
    }
};
console.log('Height before use someObj.augment(); - ' + someObj.height);
someObj.augment();
console.log('Height after someObj.augment(); - ' + someObj.height);

// 5

const numerator = {
    value: 1,
    double: function(){
        this['value'] *= 2; 
        return this;
    },
    plusOne: function(){ 
       this['value'] = ++this.value;
        return this; 
    },
    minusOne: function(){ 
        this['value'] = --this.value; 
        return this; 
    }
}

numerator.double().plusOne().plusOne().minusOne();
console.log('numerator.value = ' + numerator.value);

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
// detal.getAllCost = product.getAllCost;
product.getAllCost.call(detal);
console.log('product.getAllCost.call(detal) => ' + product.getAllCost.call(detal));

// 4

let sizes = { width: 5, height: 10 };
const getSquare = function() { return this.width * this.height; }
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
        return parseInt(this.height) + parseInt(this.marginTop) + parseInt(this.marginBottom);
    }
};

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