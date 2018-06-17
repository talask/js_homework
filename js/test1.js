// Контрольная работа: написать модуль 
// с вопросами и обработкой ответов пользователя

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
        let q;
        for(let val of test) {
            alertText(val);
            q = prompt('Ваш вариант','');
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
