// * FREECODECAMP LAB SCRIPT
let botName = "Echo";
let botLocation = "Alaska";
let favoriteLanguage = "JavaScript";
let codingFact =
  "I love " +
  favoriteLanguage +
  " because it lets me do wonderful things with the HTML and CSS.";

console.log("Hello! I'm your coding fun fact guide!");
console.log("My name is " + botName + " and I live on " + botLocation + ".");
console.log("My favorite programming language is " + favoriteLanguage + ".");
console.log(codingFact);
codingFact =
  "I also love " +
  favoriteLanguage +
  " because it lets me do cool stuffs with my projects.";
console.log(codingFact);
codingFact = "Experimenting with " + favoriteLanguage + " is like magic!";
console.log(codingFact);
console.log(
  "It was fun sharing these facts with you. Goodbye! - " +
    botName +
    " from " +
    botLocation +
    "."
);

// * THEME-TOGGLE SCRIPT
function showIconLight() {
  const iconLight = document.querySelector(".theme__icon--light");
  iconLight.classList.remove("hidden");
}

function hideIconLight() {
  const iconLight = document.querySelector(".theme__icon--light");
  iconLight.classList.add("hidden");
}

function showIconDark() {
  const iconDark = document.querySelector(".theme__icon--dark");
  iconDark.classList.remove("hidden");
}

function hideIconDark() {
  const iconDark = document.querySelector(".theme__icon--dark");
  iconDark.classList.add("hidden");
}

function addActiveTheme() {
  const button = document.querySelector(".theme__button");
  button.classList.add("active");
}

function removeActiveTheme() {
  const button = document.querySelector(".theme__button");
  button.classList.remove("active");
}

function addDarkTheme() {
  const html = document.querySelector("html");
  html.classList.add("dark");
}

function toggleDarkTheme() {
  const html = document.querySelector("html");
  html.classList.toggle("dark");
}

function savedTheme() {
  return localStorage.getItem("theme");
}

function prefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

preLoadDarkTheme();
function preLoadDarkTheme() {
  if (savedTheme() === "dark" || (savedTheme() === null && prefersDark())) {
    addDarkTheme();
    addActiveTheme();
    hideIconLight();
    showIconDark();
  }
}

function isDarkTheme() {
  const html = document.querySelector("html");
  return html.classList.contains("dark");
}

function savePreferredTheme() {
  localStorage.setItem("theme", isDarkTheme() ? "dark" : "light");
}

toggleTheme();
function toggleTheme() {
  const button = document.querySelector(".theme__button");

  button.addEventListener("click", () => {
    toggleDarkTheme();

    if (isDarkTheme()) {
      addActiveTheme();
      hideIconLight();
      showIconDark();
    } else {
      removeActiveTheme();
      showIconLight();
      hideIconDark();
    }

    savePreferredTheme();
  });
}
