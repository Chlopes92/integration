const burger = document.querySelector(".burgerIcon");
const navMenu = document.querySelector(".navLinks");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


// const slides = document.querySelectorAll(".slide");

// slides.forEach((slide, indx) => {
//   slide.style.transform = `translateX(${indx * 100}%)`;
// });


// let curSlide = 0;

// const nextSlide = document.querySelector(".btn-next");

// nextSlide.addEventListener("click", function () {
//      curSlide++;

//   slides.forEach((slide, indx) => {
//     slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
//   });
// });


const root = document.documentElement;
const logoPartnerElementsDisplayed = getComputedStyle(root).getPropertyValue("--logoPartner-elements-displayed");
const marqueContent = document.querySelector("ul.marqueContent");

root.style.setProperty("--logoPartner-elements", marqueContent.children.length);

for(let i=0; i<logoPartnerElementsDisplayed; i++) {
  marqueContent.appendChild(marqueContent.children[i].cloneNode(true));
}