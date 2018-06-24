const timer = (function () {

  let countdown,
      timerDisplay,
      endTime,
      alarmSound;

  // Инициализация модуля
  function init(settings) {
    timerDisplay = document.querySelector(settings.timerDisplaySelector);
    endTime = document.querySelector(settings.endTimeSelector);
    alarmSound = new Audio(settings.alarmSound);
  }

  function start(seconds) {
    if(typeof seconds !== "number") return new Error('Please provide seconds!');

    const now = Date.now();
    const then = now + seconds * 1000;

    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
      const secondsLeft = Math.round( (then - Date.now()) / 1000 );
      if (secondsLeft < 0) {
        clearInterval(countdown);
        alarmSound.play();
        return;
      }

      displayTimeLeft(secondsLeft);
    }, 1000);
  }

  function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const reminderSeconds = seconds % 60;
    // my change: add hour, day 
    const hour = minutes % 60;
    const days = hour % 24;

    // my change
    const display = days ? `${days}:${hour < 10 ? '0' : ''}${hour}:${minutes < 10 ? '0' : ''}${minutes}:${reminderSeconds < 10 ? '0' : ''}${reminderSeconds}`
                          : hour ? `${days}:${minutes < 10 ? '0' : ''}${minutes}:${reminderSeconds < 10 ? '0' : ''}${reminderSeconds}`
                          : `${minutes}:${reminderSeconds < 10 ? '0' : ''}${reminderSeconds}`;
    // const display = `${minutes}:${reminderSeconds < 10 ? '0' : ''}${reminderSeconds}`;
    timerDisplay.textContent = display;
    document.title = display;
  }

  function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();

    endTime.textContent = `Be back at ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
  }

  function stop() {
    alarmSound.pause();
    alarmSound.currentTime = 0;
    clearInterval(countdown);
  }

  return {
    init,
    start,
    stop
  }
})();

const buttons = document.querySelectorAll('[data-time]');
// my change
const input = document.querySelector('input');
const form = document.querySelector('form');
console.log(input);
timer.init({
  timerDisplaySelector: '.display__time-left',
  endTimeSelector :'.display__end-time',
  alarmSound: 'audio/bell.mp3'
});

// Start timer on click
function startTimer(e) {
  const seconds = Number(this.dataset.time);
  timer.start(seconds);
}


buttons.forEach(btn => btn.addEventListener('click', startTimer));

// my change
form.addEventListener('submit',function(e) {
  e.preventDefault();
});
input.addEventListener('keyup', function(e){
  console.log(e);
 // const seconds = Number(.getElementByName('minutes').value);
 // timer.start(seconds);
});


// const timerBlock = document.querySelector('.timer');
// const timerControls = document.querySelector('.timer__controls');
// const timerBtn = document.querySelector('.timer__button');
//
// // Погружение
// timerBlock.addEventListener('click', function (e) {
//   console.log(this);
// }, true);
//
// timerControls.addEventListener('click', function (e) {
//   console.log(this);
// }, true);
//
// timerBtn.addEventListener('click', function (e) {
//   console.log(this);
// }, true);
//
// // Всплытие
// timerBlock.addEventListener('click', function (e) {
//   console.log(this);
// });
//
// timerControls.addEventListener('click', function (e) {
//   console.log(this);
// });
//
// timerBtn.addEventListener('click', function (e) {
//   console.log(this);
// });



























