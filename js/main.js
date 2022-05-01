function closeNav() {
  document.querySelector(".navbar").classList.remove("sidebar__open");
  document.body.style.backgroundColor = "rgba(255,255,255)";
}
function openNav() {
  document.querySelector(".navbar").classList.add("sidebar__open");
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
