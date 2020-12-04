$(function() {
  $("[data-toggle='tooltip']").tooltip();
});
document.querySelectorAll(".onclick-select").forEach(element => {
  element.addEventListener("click", element.select);
});


// Navbar dropdowns
const navSections = document.querySelectorAll(".nav-details");

navSections.forEach(navSection => {
  navSection.addEventListener("toggle", navSectionsToggle);
});
document.addEventListener("click", navSectionsClose);

function navSectionsToggle() {
  // When opening next dropdown, hide previous
  if (this.open) {
    navSections.forEach(navSection => {
      if (navSection != this && navSection.open) navSection.open = !open;
    });
  }
}

function navSectionsClose(event) {
  // Hide all dropdowns when clicking in different place
  if (
    event.target.matches(".nav-summary") ||
    event.target.parentNode.matches(".nav-summary")
  )
    return;
  navSections.forEach(navSection => {
    navSection.open = !open;
  });
}


// Dark/Light color scheme switch button
document.querySelector("#nav-switch-theme").style.display = "inline";
document.querySelector("#nav-switch-theme").addEventListener("click", changeColorScheme);

function changeColorScheme() {
  // Use whatever users want
  if (localStorage.getItem("colorScheme") === "dark") {
    // Change to light theme
    if (window.matchMedia("(prefers-color-scheme: dark)").matches === false) {
      document.querySelector("#dark-css").setAttribute("media", "(prefers-color-scheme: dark)");
      localStorage.removeItem("colorScheme");
    } else {
      // by setting invalid media it will just not apply CSS for anyone
      document.querySelector("#dark-css").setAttribute("media", "invalid");
      localStorage.setItem("colorScheme", "light");
    }
  }
  // Change to dark theme
  else if (localStorage.getItem("colorScheme") === "light") {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches === true) {
      document.querySelector("#dark-css").setAttribute("media", "(prefers-color-scheme: dark)");
      localStorage.removeItem("colorScheme");
    } else {
      // media was set to prefers-color-scheme: dark
      document.querySelector("#dark-css").removeAttribute("media");
      localStorage.setItem("colorScheme", "dark");
    }
  }

  // Just use whatever browsers want
  else if (window.matchMedia("(prefers-color-scheme: dark)").matches === true) {
    // Change to light Theme
    document.querySelector("#dark-css").setAttribute("media", "invalid");
    localStorage.setItem("colorScheme", "light");
  } else {
    // Change to dark theme
    document.querySelector("#dark-css").removeAttribute("media");
    localStorage.setItem("colorScheme", "dark");
  }
  fixThemeImages();
}


// Fix images in dark theme
function fixThemeImages() {
  document.querySelectorAll('[data-theme-src]').forEach(function(image) {
    tempSrc = image.src;
    image.src = image.getAttribute("data-theme-src");
    image.setAttribute("data-theme-src", tempSrc);
  });
}
if (
  (localStorage.getItem("colorScheme") === "dark") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches ^
    localStorage.getItem("colorScheme") === "light")
) {
  fixThemeImages();
}
