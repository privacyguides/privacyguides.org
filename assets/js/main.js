window.onload = function () {
  var navbar = document.querySelector('nav');
  navbar.classList.remove('noscript');
}
document.querySelectorAll(".onclick-select").forEach(element => {
  element.addEventListener("click", element.select);
});
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
