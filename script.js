const rating = document.querySelectorAll(".circle");
const btn = document.getElementById("btn");
const thanksWindow = document.querySelector(".thanks-window");
const mainComponent = document.querySelector("main");
const selectedRate = document.querySelector(".selected");

let selectedNumber;

for (let i = 0; i < rating.length; i++) {
  rating[i].addEventListener("click", function () {
    selectedNumber = i + 1;
    console.log(selectedNumber);
  });
}

btn.addEventListener("click", function (event) {
  event.preventDefault();
  mainComponent.style.display = "none";
  thanksWindow.style.display = "block";
  selectedRate.innerHTML = selectedNumber;
});
