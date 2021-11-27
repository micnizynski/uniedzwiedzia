export const toggleMenu = (menuButton) => {
  const menuList = document.querySelector(".start-section__nav-list");
  menuList.classList.toggle("active");
  menuButton.classList.toggle("active");
};
