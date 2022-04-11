const slider = document.querySelectorAll(".slider");
const next = document.querySelectorAll(".next");
const prev = document.querySelectorAll(".prev");
for (let i = 0; i < next.length; i++) {
  next[i].addEventListener("click", function () {
    for (let i = 0; i < slider.length; i++) {
      slider[i].style.transform = "translateX(-100vw)";
    }
  });
}
for (let i = 0; i < next.length; i++) {
  prev[i].addEventListener("click", function () {
    for (let i = 0; i < slider.length; i++) {
      slider[i].style.transform = "translateX(0)";
    }
  });
}