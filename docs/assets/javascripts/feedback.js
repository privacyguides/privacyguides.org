var feedback = document.forms.feedback
/* Show feedback */
feedback.hidden = false
feedback.addEventListener("submit", function(ev) {
  ev.preventDefault()

  /* Retrieve page and feedback value */
  var page = document.location.pathname
  var data = ev.submitter.getAttribute("data-md-value")

  /* Send feedback value */
  console.log(page, data)
  plausible(data)

  /* Disable form and show note, if given */
  feedback.firstElementChild.disabled = true
  var note = feedback.querySelector(
    ".md-feedback__note [data-md-value='" + data + "']"
  )

  if (note)
    note.hidden = false
})
