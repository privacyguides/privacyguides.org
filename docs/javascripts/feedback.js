var feedback = document.forms.feedback
feedback.removeAttribute("hidden");
feedback.addEventListener("submit", function(ev) {
  ev.preventDefault()

  /* Retrieve page and feedback value */
  var page = document.location.pathname
  var data = ev.submitter.getAttribute("data-md-value")

  /* Send feedback value */
  console.log(page, data)
  plausible(data)
})
