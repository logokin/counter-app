const counter = document.querySelector(".counter");
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
let count = 0;

increase.addEventListener("click", function () {
  count++;
  if (counter > "0") {
    counter.innerHTML = count++;
  } else {
    counter.style.color = "green";
  }
});

decrease.addEventListener("click", function () {
  count--;
  counter.innerHTML = count--;
});

reset.addEventListener("click", function () {
  counter.innerHTML = "";
});
/*
var time = document.querySelector(".date");

var date = new Date();
console.log(date);
var day = date.getDay();
console.log(day);
var month = date.getMonth();
console.log(month);
var year = date.getFullYear();
console.log(year);
time.textContent = "today date is " + day + "/ " + month + "/ " + year;
*/
