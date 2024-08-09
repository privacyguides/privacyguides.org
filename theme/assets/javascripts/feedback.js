var feedback = document.forms.feedback
feedback.hidden = false

feedback.addEventListener("submit", function(ev) {
  ev.preventDefault()

  var data = ev.submitter.getAttribute("data-md-value")

  if (data == 1) {
    var umamiEventName = "feedback-positive"
  } else if (data == 0) {
    var umamiEventName = "feedback-negative"
  }

  var umamiEvent = {
    payload: {
      hostname: window.location.hostname,
      language: navigator.language,
      referrer: document.referrer,
      screen: `${window.screen.width}x${window.screen.height}`,
      url: window.location.pathname,
      website: '30b92047-7cbb-4800-9815-2e075a293e0a',
      name: umamiEventName,
    },
    type: 'event',
  };

  // remove trailing slash from path
  if (umamiEvent.payload.url.slice(-1) === '/') {
    umamiEvent.payload.url = umamiEvent.payload.url.slice(0, -1);
  }

  console.log(umamiEvent)

  fetch("https://stats.jonaharagon.net/api/send", {
    method: "POST",
    body: JSON.stringify(umamiEvent),
    headers: {
      "Content-type": "application/json",
    }
  })
    .then((response) => console.log(response));

  feedback.firstElementChild.disabled = true

  var note = feedback.querySelector(
    ".md-feedback__note [data-md-value='" + data + "']"
  )
  if (note)
    note.hidden = false
})
