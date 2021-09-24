var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");
var doubleEl = document.querySelector("exponential");

function setCounterText() {
  countEl.textContent = count++;
}

// TODO: Add event listener to increment button

incrementEl.addEventListener("click", function() {
  count ++;
  console.log(count);
  setCounterText();
})

decrementEl.addEventListener("click", function() {
  if(count>0) {
  count --;
  console.log(count);
  setCounterText();
  }
})

doubleEl.addEventListener("click", function() {
  count *= 2;
  setCounterText();
})



// TODO: Add event listener to decrement button 
