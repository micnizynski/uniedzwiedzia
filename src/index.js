import { scrollTo } from "./scripts/scroll.js";
import { toggleMenu } from "./scripts/menu.js";

const navElements = document.querySelectorAll(".start-section__nav-list-item");
const mainButton = document.querySelector(".start-section__btn");
const menuButton = document.querySelector(".start-section__hamburger-menu");

navElements.forEach((element) => {
  element.addEventListener("click", (e) => {
    scrollTo(e.target.dataset.scrollTo);
  });
});
mainButton.addEventListener("click", (e) => {
  scrollTo(e.target.dataset.scrollTo);
});
menuButton.addEventListener("click", (e) => {
  toggleMenu(e.target);
});
