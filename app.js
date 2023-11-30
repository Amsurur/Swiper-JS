const slider = document.querySelector(".slider");
const sliderItems = Array.from(slider.children);
const nextButton = document.querySelector(".nextButton");
const prevButton = document.querySelector(".prevButton");

sliderItems.forEach((slide, index) => {
  console.log(slide);

  if (index !== 0) slide.classList.add("hidden");

  slide.dataset.index = index;

  sliderItems[0].setAttribute("data-active", "");

  slide.addEventListener("click", function () {
    slide.classList.add("hidden");
    slide.removeAttribute("data-active");

    const nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1;

    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}" ]`);
    nextSlide.classList.remove("hidden");
    nextSlide.setAttribute("data-active", "");
  });
});

nextButton.onclick = function () {
  console.log("nex slide");
  const currentSlide = slider.querySelector("[data-active]");
  const currentSlideIndex = +currentSlide.dataset.index;
  currentSlide.classList.add("hidden");
  currentSlide.removeAttribute("data-active");
  const nextSlideIndex =
    currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
  const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"`);
  nextSlide.classList.remove("hidden");
  nextSlide.setAttribute("data-active", "");
};
prevButton.onclick = function () {
  console.log("prev slide");
  const currentSlide = slider.querySelector("[data-active]");
  const currentSlideIndex = +currentSlide.dataset.index;
  currentSlide.classList.add("hidden");
  currentSlide.removeAttribute("data-active");
  const nextSlideIndex =
    currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
  const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"`);
  nextSlide.classList.remove("hidden");
  nextSlide.setAttribute("data-active", "");
};
