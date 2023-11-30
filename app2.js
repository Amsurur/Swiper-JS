const slider = document.querySelector(".slider");
const sliderItem = Array.from(slider.children);
const prevButton = document.querySelector(".prevButton");
const nextButton = document.querySelector(".nextButton");

sliderItem.forEach((slider, index) => {
  console.log(slider);

  if (index !== 0) slider.classList.add("hidden");

  slider.dataset.index = index;
  sliderItem[0].setAttribute("data-active", "");

  slider.onclick = () => {
    slider.classList.add("hidden");
    slider.removeAttribute("data-active");

    const nextSliderIndex = index + 1 === sliderItem.length ? 0 : index + 1;

    const nextSlider = slider.querySelector(
      `[data-index="${nextSliderIndex}"]`
    );

    nextSlider.classList.remove("hidden");
    nextSlider.setAttribute("data-active", "");
  };
});

nextButton.onclick = () => {
  const currentSlide = slider.querySelector("[data-active]");
  const currentSliderIndex = +currentSlide.dataset.index;
  currentSlide.classList.add("hidden");
  currentSlide.removeAttribute("data-active");
  const nextSliderIndex =
    currentSliderIndex + 1 === sliderItem.length ? 0 : currentSliderIndex + 1;
  const nextSlider = slider.querySelector(`[data-index="${nextSliderIndex}"]`);
  nextSlider.classList.remove("hidden");
  nextSlider.setAttribute("data-active", "");
};
prevButton.onclick = () => {
  const currentSlide = slider.querySelector("[data-active]");
  const currentSliderIndex = +currentSlide.dataset.index;
  currentSlide.classList.add("hidden");
  currentSlide.removeAttribute("data-active");
  const nextSliderIndex =
    currentSliderIndex === 0 ? sliderItem.length - 1 : currentSliderIndex - 1;
  const nextSlider = slider.querySelector(`[data-index="${nextSliderIndex}"]`);
  nextSlider.classList.remove("hidden");
  nextSlider.setAttribute("data-active", "");
};
