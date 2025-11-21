// arrows
const btnLeft = document.querySelector(".btn--left");
const btnRight = document.querySelector(".btn--right");


const dots = document.querySelectorAll(".dot");

let curSlide = 0;
const maxSlide = dots.length - 1;


function activateDot(slide) {
  dots.forEach((dot, i) =>
    i === slide
      ? dot.classList.add("dot--fill")
      : dot.classList.remove("dot--fill")
  );
}

// Next slide
btnRight.addEventListener("click", () => {
  curSlide = curSlide === maxSlide ? 0 : curSlide + 1;
  activateDot(curSlide);
});

// Prev slide
btnLeft.addEventListener("click", () => {
  curSlide = curSlide === 0 ? maxSlide : curSlide - 1;
  activateDot(curSlide);
});

// Dot navigation
dots.forEach((dot, i) =>
  dot.addEventListener("click", () => {
    curSlide = i;
    activateDot(curSlide);
  })
);
