// Navigation Bar
const hamburgurEl = document.getElementById("hamburgur");
const navBarEl = document.getElementById("nav");

hamburgurEl.addEventListener("click", openMenu);

function openMenu() {
  hamburgurEl.classList.toggle("close-menu");
  navBarEl.classList.toggle("show-menu");
}

function handleBtnKeyDown(event) {
  if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
    event.preventDefault();
    openMenu();
  }
}
