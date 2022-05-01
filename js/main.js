document.body.addEventListener("click", function (event) {
   if (event.target.classList.contains("dropdown--link")) {
      event.target.nextElementSibling.classList.toggle("active");
      event.target.firstElementChild.classList.toggle("arrow_active");
   }
});
function closeNav() {
   document.querySelector(".navbar").classList.remove("sidebar__open");
   document.body.style.backgroundColor = "var(--almostWhite)";
}
function openNav() {
   document.querySelector(".navbar").classList.add("sidebar__open");
   document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
