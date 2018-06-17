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
    this.stringBegin = str,
    this.stringEncrypt = '',
    this.runStringEncrypt = function () {
        for (let i = this.stringBegin.length - 1; i >= 0; i--) { 
            this.stringEncrypt += this.stringBegin[i];
        }
        return this.stringEncrypt;
    },
    
    this.allStringDel = function() {
        return this.stringBegin = '', this.stringEncrypt = '';
    }
    this.getString = function() {
        return this.stringBegin;
    }

}

const ex = new Encrypt('Строка');
console.log(ex.getString());
console.log(ex.runStringEncrypt());
console.log(ex.allStringDel());