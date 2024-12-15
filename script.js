const navbar = document.querySelector(".navbar");
const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");
const hamburgerMenu = document.querySelector(".hamburger");

hamburgerMenu.addEventListener("click", () => {
    bars.classList.toggle("active");  // إضافة أو إزالة الكلاس "active" من bars
    xmark.classList.toggle("active"); // إضافة أو إزالة الكلاس "active" من xmark
    navbar.classList.toggle("active"); // إضافة أو إزالة الكلاس "active" من navbar
});

