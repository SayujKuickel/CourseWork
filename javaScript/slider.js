const slider = document.getElementById("slider");

const rightBtn = document.getElementById("rightBtn");
const leftBtn = document.getElementById("leftBtn");

rightBtn.addEventListener("click", (event) => {
  slider.scrollBy({
    left: 400,
    behavior: "smooth",
  });
});

leftBtn.addEventListener("click", (event) => {
  slider.scrollBy({
    left: -400,
    behavior: "smooth",
  });
});
