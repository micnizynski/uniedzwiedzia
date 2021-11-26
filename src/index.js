import {scrollTo} from "./scripts/scroll.js";

const navElements = document.querySelectorAll(".start-section__nav-list-item");
const mainButton = document.querySelector(".start-section__btn");

navElements.forEach((element) => {
  element.addEventListener("click", (e) => {
    scrollTo(e.target.dataset.scrollTo);
  });
});
mainButton.addEventListener("click", (e) => {
  scrollTo(e.target.dataset.scrollTo);
});
