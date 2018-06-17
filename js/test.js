 const quiz = (function(){

    let test = [

        {

            question: 'Жили у бабуси два весёлых',

            answers: [ 'Енота', 'Гуся', 'Поросёнка' ],

            rigthAnswer: '1'

        },

        {

            question: 'Он от бабушки ушёл, он от дедушки ушёл',

            answers: [ 'Колобок', 'Чебурашка', 'Буратино' ],

            rigthAnswer: '0'

        },

        {

            question: 'Как звали трёх поросят?',

            answers: [ 'Хрум-Хрум, Хрям-Хрям, Хрусь-Хрусь', 'Пух-Пух, Пум-Пум, Пур-Пур', 'Наф-Наф, Ниф-Ниф, Нуф-Нуф' ],

            rigthAnswer: '2'

        }

    ],

    counter = 0;



    function run() {

        rules();

        counter = 0;

        for(let val of test) {

            alertText(val);

            let q = prompt('Ваш вариант','');

            if(!getPrompt(q,val.rigthAnswer)) break;

        }

    }

    function alertText(o) {

        console.log(o.question);

            for(let key in  o.answers) {

                console.log(key + ' - ' + o.answers[key]);

            }

    }

    function getPrompt(a, b) {

        if(a === null || a === '') a = 'jkhk';

        switch(a.toLowerCase()) {

            case b: 

                counter++;

                if(counter === test.length) 

                    console.log( 'У Вас ' + counter + ' балл(а)(ов). Поздравляем! Вы ответили правильно на все вопросы!');

                else

                    console.log('Ваш ответ правильный, у Вас ' + counter + ' балл(а)(ов)');

                    console.log('--------------------------------------');

                return true;

            case 'q': 

                console.log('Вы прервали опрос, у Вас ' + counter + ' балл(а)(ов)');

                return false;

            default: 

                console.log('Ваш ответ не правильный, Вы набрали ' + counter + ' балл(а)(ов)');

                console.log('Давайте попробуем ещё)) , Ваш текущий счёт 0 баллов ))' );

                console.log('--------------------------------------');

                return run();

            }  

        }

    

    function rules() {

        console.log('Правила викторины: ' );

        console.log('1. Внимательно читаете вопрос ' );

        console.log('2. Варианты ответов ниже - выбираете один из вариантов ответа (не торопитесь, подумайте))' );

        console.log('3. Введите номер ответа в выпадающее окошко и нажимите "OK"' );

        console.log('4. Если хотите прекратить игру введите "q" в выпадающее окошко и нажимите "OK"' );

        }
    return {
           run: run
    }
})();

quiz.run();


let stringBegin = 'abcdeuiooplkjhgfrewsartquyoi8909nm oiuoiu88j iuio789nm 8', stringEnd ='';

console.log("resultCompare - общее время проверки");
console.log("resultFor - общий результат проверки 100 повторений цикла for");
console.log("resultMetods - общий результат проверки 100 повторений использования методов");
console.log("result - время выполнения 1 итерации проверки цикла for");
console.log("result1 - время выполнения 1 итерации проверки работы методов");
console.time('resultCompare');
console.time('resultFor');
 for( let k=0; k<= 100; k++){
    console.time('result');
    stringEnd ='';
    for (let i = stringBegin.length - 1; i >= 0; i--) { 
        stringEnd += stringBegin[i];
    }
    console.timeEnd('result');
 }
 console.timeEnd('resultFor'); 
 console.log(stringEnd);
 console.time('resultMetods');
 for( let k=0; k<= 100; k++) {
    console.time('result1');
    stringBegin = stringBegin.split('').reverse().join('');
    console.timeEnd('result1');
 }
 console.timeEnd('resultMetods');
 console.time('resultWhile');
 for( let k=0; k<= 100; k++) {
    console.time('result2');
    i = stringBegin.length, stringEnd ='';
    while(i) { stringEnd += stringBegin[--i]; }
    console.timeEnd('result2');
 }
 console.timeEnd('resultWhile');
 console.timeEnd('resultCompare'); 