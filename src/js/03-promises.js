
const Refs = {
    formSubmit: document.querySelector('.form'), 
    delayFieldRef: document.querySelector("[name = 'delay']"),
    delayStepRef: document.querySelector("[name = 'step']"),
    amountRef: document.querySelector("[name = 'amount']")
}
Refs.formSubmit.addEventListener('click', Submit)

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if(shouldResolve){
        resolve({position, delay});
      }

      else{
        reject({position, delay})
      }
    }, delay)

  })
  
}
function Submit(e){
  e.preventDefault(); 
  getNum(
    Number(Refs.delayFieldRef.value),
    Number(Refs.delayStepRef.value),
    Number(Refs.amountRef.value),
    
  )
  
  function getNum(delay, step, amount)  {
    for(let position = 1; position <= amount; position++){
      createPromise(position, delay)
    .then(({ position, delay }) => {
      console.log(` Fulfilled promise ${position} in ${delay}ms`,
      
      );
    })
    .catch(({ position, delay }) => {
      console.log(` Rejected promise ${position} in ${delay}ms`,
     
      );
    });
    delay += step;
    }

  }
  
}

