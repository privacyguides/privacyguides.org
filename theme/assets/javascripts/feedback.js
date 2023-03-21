/*
/// Copyright (c) 2022 Jonah Aragon <jonah@triplebit.net>
///
/// Permission is hereby granted, free of charge, to any person obtaining a
/// copy of this software and associated documentation files (the "Software"),
/// to deal in the Software without restriction, including without limitation
/// the rights to use, copy, modify, merge, publish, distribute, sublicense,
/// and/or sell copies of the Software, and to permit persons to whom the
/// Software is furnished to do so, subject to the following conditions:
///
/// The above copyright notice and this permission notice shall be included in
/// all copies or substantial portions of the Software.
///
/// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
/// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
/// FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL
/// THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
/// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
/// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
/// DEALINGS
*/

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
