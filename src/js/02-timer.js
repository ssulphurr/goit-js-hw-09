import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  inputEl: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  sec: document.querySelector('[data-seconds]'),
};

let timerId = null;
let startTime = null;
let selectedDate = null;

refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0].getTime();
    startTime = selectedDates[0].getTime() - options.defaultDate.getTime();

    if (startTime <= 0) {
      window.alert('Please choose a date in the future');
      return;
    }

    const tillTimeObj = convertMs(startTime);
    console.log(tillTimeObj);

    refs.startBtn.disabled = false;
  },
};

flatpickr(refs.inputEl, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addZeroToTime(Math.floor(ms / day));
  // Remaining hours
  const hours = addZeroToTime(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addZeroToTime(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addZeroToTime(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addZeroToTime(timeValue) {
  return String(timeValue).padStart(2, '0');
}

const timer = {
  start() {
    timerId = setInterval(() => {
      const nowDate = Date.now();
      const deltaTime = selectedDate - nowDate;

      if (startTime > 0) {
        const { days, hours, minutes, seconds } = convertMs(deltaTime);

        refs.days.textContent = days;
        refs.hours.textContent = hours;
        refs.minutes.textContent = minutes;
        refs.sec.textContent = seconds;
      } else {
        clearInterval(timerId);
      }
    }, 1000);
  },
};

refs.startBtn.addEventListener('click', () => {
  timer.start();
});
