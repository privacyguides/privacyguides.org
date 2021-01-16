document.querySelectorAll(".onclick-select").forEach(element => {
  element.addEventListener("click", element.select);
});
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
