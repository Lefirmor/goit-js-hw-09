const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
stopButton.disabled = true;
startButton.disabled = false;
let timerId = null;
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  startButton.addEventListener("click", () => {
     timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
        startButton.disabled = true;
        stopButton.disabled = false;
    }, 1000)
    
  })

  stopButton.addEventListener("click", () => {
    startButton.disabled = false;
    stopButton.disabled = true;
    clearInterval(timerId)
    
  }) 
  //asd
  