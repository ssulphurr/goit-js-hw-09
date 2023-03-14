import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  inputEl: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);

    const deltaTime =
      selectedDates[0].getTime() - options.defaultDate.getTime();

    if (deltaTime <= 0) {
      window.alert('Please choose a date in the future');
    } else {
      const tillTimeObj = convertMs(deltaTime);
      console.log(tillTimeObj);
      refs.startBtn.addEventListener('click', countdown(tillTimeObj));
    }
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
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function countdown({ days, hours, minutes, seconds }) {
  console.log(days, hours, minutes, seconds);
}
