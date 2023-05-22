const bar = document.querySelector("#bar");
const closeBtn = document.querySelector("#closeBtn");
const nav = document.querySelector("#nav");

bar.addEventListener("click", () => {
  nav.classList.add("nav-show");

  if (nav.classList.contains("nav-show")) {
    closeBtn.addEventListener("click", () => {
      nav.classList.remove("nav-show");
    });
  }
});
