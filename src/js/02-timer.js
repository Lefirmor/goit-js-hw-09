import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";
const inputRef = document.querySelector("#datetime-picker");
const buttonStartRef = document.querySelector('button[data-start]');
const valueRef = document.querySelectorAll('.value')
// valueRef.textContent = 'asdasasd';
// asd
let options = null;

buttonStartRef.disabled = true;
let timeInterval = null;
let choosenTime = null;
let selectedUserDate = null
let now = Date.now();
buttonStartRef.addEventListener('click', () => {
  const currentTime = new Date();
  let deltaTime = choosenTime - currentTime;
  let timeComponents = convertMs(deltaTime)
  documentTime(timeComponents)
  if (deltaTime <= 0) {
    clearInterval(timeInterval);
    return;
  }
  

  timeInterval = setInterval(() =>{
    const currentTime = new Date();
      deltaTime = choosenTime - currentTime;
      timeComponents = convertMs(deltaTime)
      documentTime(timeComponents)
      console.log(timeComponents) 
      if (deltaTime <= 0) {
        clearInterval(timeInterval);
        return;
      }
      
  }, 1000)
})










flatpickr("input[type=text]", options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      clearInterval(timeInterval)
      console.log(selectedDates[0]);
      if(this.selectedDates[0] < now ){ 
        buttonStartRef.disabled = true;
        alert("Please choose a date in the future")
        return;
        }
      buttonStartRef.disabled = false;
       choosenTime = selectedDates[0];
       
      //  documentTime()
      
    },
    
  });
  // console.log(choosenTime)
  function documentTime ({days, hours, minutes, seconds}){
    valueRef[0].textContent = `${days}`
    valueRef[1].textContent = `${hours}`
    valueRef[2].textContent = `${minutes}`
    valueRef[3].textContent = `${seconds}`
  }

  function pad(value){
    return String(value).padStart(2, '0');
  }
    


  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    if (ms < 0) {
      return { days: '00', hours: '00', minutes: '00', seconds: '00' };
  }
    // Remaining days
    const days = pad(Math.floor(ms / day));
    // Remaining hours
    const hours = pad(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second))
  
    return { days, hours, minutes, seconds };
  }
  // decreasingTimer()

  

