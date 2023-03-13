const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

let timerId = null;

function changeColor() {
  refs.startBtn.removeEventListener('click', changeColor);

  // початкова зміна кольору, щоб не було затримки в 1 с.
  refs.body.style.backgroundColor = getRandomHexColor();

  timerId = setInterval(() => {
    color = getRandomHexColor();
    refs.body.style.backgroundColor = color;
  }, 1000);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function stopChangeColor() {
  clearInterval(timerId);
  refs.startBtn.addEventListener('click', changeColor);
}

refs.startBtn.addEventListener('click', changeColor);
refs.stopBtn.addEventListener('click', stopChangeColor);
