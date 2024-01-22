const slider = document.getElementById("slider");

const rightBtn = document.getElementById("rightBtn");
const leftBtn = document.getElementById("leftBtn");

rightBtn.addEventListener("click", (event) => {
  slider.scroll({
    left: 400,
    behavior: "smooth",
  });
});

leftBtn.addEventListener("click", (event) => {
  slider.scroll({
    left: slider.scrollLeft - 400,
    behavior: "smooth",
  });
});
