/**
 * @overview Randomizes the order of an HTML element's children.
 * @author Jonah Aragon <jonah@triplebit.net>
 * @license
 * Copyright (c) 2024 Jonah Aragon
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

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
