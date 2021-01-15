// Mobile Menu
const menuBars = document.querySelector(".menu-bars");
const mobileList = document
  .querySelector(".mobile-list")
  .querySelectorAll("li");
const mobileNav = document.querySelector(".mobile-menu");

menuBars.addEventListener("click", () => {
  mobileNav.style.width = "100%";
});

for (let i = 0; i < mobileList.length; i++) {
  mobileList[i].addEventListener("click", () => {
    mobileNav.style.width = "0%";
  });
}


