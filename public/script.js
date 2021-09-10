let isToggle = false;
let burgerButton = document.querySelector(".burger");
let navlinks = document.querySelector(".nav-links");
let names = ["Coding", "Reading", "Flutter"];
let changingText = document.querySelector(".typewriter");
let isDeleting = false;
let text = "";
let idx = 0;
let word = names[idx];
let transButton = document.querySelector(".trans-button");

navlinks.style.display = "none";

transButton.addEventListener("click", function () {
  document.querySelector(".about").scrollIntoView();
});

window.addEventListener("load", function () {
  typeWords();
});

window.addEventListener("resize", function () {
  if (this.screen.width >= 768) {
    if (isToggle) {
      isToggle = false;
      navlinks.style.display = "none";
    }
  }
});
burgerButton.addEventListener("click", function () {
  isToggle = !isToggle;
  if (isToggle === true) {
    navlinks.style.display = "block";
  } else {
    navlinks.style.display = "none";
  }
});

function typeWords() {
  if (isDeleting && text.length == 0) {
    idx = (idx + 1) % names.length;
    word = names[idx];
    isDeleting = false;
  }

  if (text.length == word.length) {
    isDeleting = true;
  }

  text = isDeleting
    ? word.substring(0, text.length - 1)
    : word.substring(0, text.length + 1);
  changingText.innerHTML = text;
  setTimeout(typeWords, text.length == word.length ? 1500 : 150);
}
