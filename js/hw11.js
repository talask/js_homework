// КОНСТРУКТОРЫ КЛАССЫ
// 1

function Car(name, age) {
    this.name = name || '',
    this.age = age || 0,
    this.getName = function() {
        return this.name[0].toUpperCase() + this.name.slice(1).toLowerCase();
    }
    this.yearOfIssue = function() {
        let date = new Date();
        return date.getFullYear() - Number(this.age);
    }
}

const auto = new Car('porshe', 3);
console.log(auto.getName());
console.log(auto.yearOfIssue());

// 2

function Encrypt(str) {
     let stringBegin = str,
         stringEncrypt = '';
    this.runStringEncrypt = function () {

        for (let i = stringBegin.length - 1; i >= 0; i--) { 
            stringEncrypt += stringBegin[i];
        }
        return stringEncrypt;
    },
    
    this.allStringDel = function() {
        return stringBegin = '', stringEncrypt = '';
    }
    this.getString = function() {
        return stringBegin;
    }

}

const ex = new Encrypt('Строка');
console.log(ex.getString());
console.log(ex.runStringEncrypt());
console.log(ex.allStringDel());
console.log(ex.getString());

// 3
class createString {
    constructor (string) {
        this.str = string
    }
    
    getStr() {
        return this.str;
    }

    setStr(s) {
        return this.str = s;
    }
    getStrLenght () {
        return this.str.length;
    }
    valueOf () { 
        return this.str.length; 
    }
    toString() { 
        return this.str; 
    }
}


let someString = new createString('qwerty');
console.log(someString.getStrLenght());
console.log(someString.toString());
console.log(+someString);
