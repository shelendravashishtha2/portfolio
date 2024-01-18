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
let sideNav = document.querySelectorAll(".sidebar-links li");
let navBar = document.querySelectorAll(".nav .link");

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

let observeConfig = {
  root: null,
  rootMargin: "0px",
  threshold: [0.25, 0.5, 0.75, 1],
};

let myObserver = new IntersectionObserver((elements) => {
  if (elements[0].intersectionRatio >= 0.5) {
    console.log("more than half");
  } else {
    console.log("less than half");
  }
}, observeConfig);

myObserver.observe(document.querySelector("#resume"));

document.addEventListener("scroll", function () {
 
  if (window.pageYOffset > 380 && window.pageYOffset < 1150) {
  
    navBar[1].classList.add("navCurr");
    navBar[2].classList.remove("navCurr");
  } else if (window.pageYOffset > 1150 && window.pageYOffset < 3030) {
    navBar[1].classList.remove("navCurr");
    navBar[3].classList.remove("navCurr");
    navBar[2].classList.add("navCurr");
  } else if (window.pageYOffset > 3030 && window.pageYOffset < 4030) {
    navBar[2].classList.remove("navCurr");
    navBar[4].classList.remove("navCurr");
    navBar[3].classList.add("navCurr");
  } else if (window.pageYOffset > 4030) {
    navBar[3].classList.remove("navCurr");
    navBar[4].classList.add("navCurr");
  } else {
    navBar[1].classList.remove("navCurr");
  }

  if (window.innerWidth > 1024 && window.pageYOffset < 1200) {
    sideNav[0].classList.remove("ocurr");
  } else if (
    window.innerWidth > 1024 &&
    window.pageYOffset > 1280 &&
    window.pageYOffset < 1640
  ) {
    sideNav[0].classList.add("occur");
    sideNav[1].classList.remove("occur");
  } else if (
    window.innerWidth > 1024 &&
    window.innerWidth > 1024 &&
    window.pageYOffset > 1770 &&
    window.pageYOffset < 2080
  ) {
    sideNav[0].classList.remove("occur");
    sideNav[2].classList.remove("occur");
    sideNav[1].classList.add("occur");
  } else if (
    window.innerWidth > 1024 &&
    window.pageYOffset > 2090 &&
    window.pageYOffset < 2550
  ) {
    sideNav[1].classList.remove("occur");
    sideNav[3].classList.remove("occur");
    sideNav[2].classList.add("occur");
  } else if (
    window.innerWidth > 1024 &&
    window.pageYOffset > 2550 &&
    window.pageYOffset < 3120
  ) {
    sideNav[2].classList.remove("occur");
    sideNav[3].classList.add("occur");
    
  } else {
    sideNav[3].classList.remove("occur");
  }

  if (window.innerWidth <= 1024 && window.pageYOffset < 1200) {
    sideNav[0].classList.remove("occur");
  } else if (
    window.innerWidth <= 1024 &&
    window.pageYOffset > 1280 &&
    window.pageYOffset < 2180
  ) {
    sideNav[0].classList.add("occur");
    sideNav[1].classList.remove("occur");
  } else if (
    window.innerWidth <= 1024 &&
    window.pageYOffset > 2180 &&
    window.pageYOffset < 2460
  ) {
    sideNav[0].classList.remove("occur");
    sideNav[2].classList.remove("occur");
    sideNav[1].classList.add("occur");
  } else if (
    window.innerWidth <= 1024 &&
    window.pageYOffset > 2460 &&
    window.pageYOffset < 2930
  ) {
    sideNav[1].classList.remove("occur");
    sideNav[3].classList.remove("occur");
    sideNav[2].classList.add("occur");
  } else if (
    window.innerWidth <= 1024 &&
    window.pageYOffset > 2930 &&
    window.pageYOffset < 3490
  ) {
    sideNav[2].classList.remove("occur");
    sideNav[3].classList.add("occur");
  }
});
