import Slide from "./slide.js";
const slide = new Slide(".slide", ".slide-wrapper");
slide.init();
slide.changeSlide(3);
slide.activePrevSlide();
slide.activeNextSlide();

console.log(slide);
