// SPDX-FileCopyrightText: 2024 Jonah Aragon <jonah@privacyguides.org>
//
// SPDX-License-Identifier: MIT

// Fetch global data from meta tag
let globalData = document.querySelector("#global-data");

if (globalData.dataset.randomizeElement) {
  // Get elements to be randomized from meta tag in HTML
  let randomizeElement = globalData.dataset.randomizeElement;
  console.log("Randomizing child elements of " + randomizeElement);

  // Get all elements to be randomized
  let randomizeChildren = document.querySelectorAll(randomizeElement);
  let randomizeArray = Array.from(randomizeChildren);

  // Handle multiple elements to be randomized
  for (const element of randomizeArray) {
    let selector = " > *";
    if (globalData.dataset.randomizeElementSelector) {
      selector = globalData.dataset.randomizeElementSelector
    }

    // Select all direct children of element
    let children = element.querySelectorAll(randomizeElement + selector);

    // Randomize rows (simple, probably not efficient)
    let randomChildren = Array.from(children)
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    // Replace each element with randomly selected element
    for (let i = 0; i < children.length; i++) {
      let child = randomChildren[i].cloneNode(true);
      child.classList.add("randomized");
      let parent = children[i].parentNode;
      parent.insertBefore(child, children[i]);
      children[i].remove();
    }

  }

}
