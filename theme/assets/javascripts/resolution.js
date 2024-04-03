function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var consent = __md_get("__consent")
if (!consent) {
  __md_set("__consent", {"umami":true,"github":true});
  if (getCookie('resolution') == '') {
    const resolution = `${window.screen.width}x${window.screen.height}`;
    setCookie('resolution', resolution, 30);
  }
}

if (consent && consent.umami) {
  if (getCookie('resolution') == '') {
    const resolution = `${window.screen.width}x${window.screen.height}`;
    setCookie('resolution', resolution, 30);
  }
  setCookie('umami', 'true', 0);
} else {
  setCookie('umami', 'false', 365);
  setCookie('resolution', "0x0", 0);
}

var consent = __md_get("__consent")
if (consent) {
  for (var input of document.forms.consent.elements)
    if (input.name)
      input.checked = consent[input.name] || false

/* Show consent with a small delay, but not if browsing locally */
} else if (location.protocol !== "file:") {
setTimeout(function() {
  var el = document.querySelector("[data-md-component=consent]")
  el.hidden = false
}, 250)
}

/* Intercept submission of consent form */
var form = document.forms.consent
for (var action of ["submit", "reset"])
form.addEventListener(action, function(ev) {
  ev.preventDefault()

  /* Reject all cookies */
  if (ev.type === "reset")
    for (var input of document.forms.consent.elements)
      if (input.name)
        input.checked = false

  /* Grab and serialize form data */
  __md_set("__consent", Object.fromEntries(
    Array.from(new FormData(form).keys())
      .map(function(key) { return [key, true] })
  ))

  /* Remove anchor to omit consent from reappearing and reload */
  location.hash = '';
  location.reload()
})
