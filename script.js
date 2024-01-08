document.addEventListener("DOMContentLoaded", function () {
  const openMenu = document.getElementById("menuOpen");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("menuClose");

  openMenu.addEventListener("click", function () {
    mobileMenu.style.display = "block";
    console.log(mobileMenu.style.display);
  });

  closeMenu.addEventListener("click", function () {
    mobileMenu.style.display = "none";
  });
});
