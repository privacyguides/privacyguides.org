if (localStorage.getItem("colorScheme") === "dark") {
  document.querySelector("#dark-css").removeAttribute("media"); // Set dark theme
}
else if (localStorage.getItem("colorScheme") === "light") {
  document.querySelector("#dark-css").setAttribute("media", "invalid"); // Set light theme
}
