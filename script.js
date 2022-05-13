let flag = 0;
const controller = function (x) {
  flag = flag + x;
  slider(flag);
};

const slider = function (num) {
  const slideDiv = document.querySelectorAll(".slides");
  if (num === slideDiv.length) {
    num = 0;
    flag = 0;
  }
  if (num < 0) {
    flag = slideDiv.length - 1;
    num = slideDiv.length - 1;
  }

  for (const i of slideDiv) {
    i.style.display = "none";
  }
  slideDiv[num].style.display = "block";
};
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
prevBtn.addEventListener("click", () => {
  controller(-1);
});
nextBtn.addEventListener("click", () => {
  controller(1);
});

slider(flag);
