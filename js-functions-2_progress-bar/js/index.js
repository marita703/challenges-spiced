console.clear();
/*
Progress Bar

Build a progress bar that indicates how much the user has scrolled down the page.
For that:
 - change the starting width of the progressBar in the CSS file to 0%
 - write a function "calculateScrollPercentage" which calculates and returns in percent
   how far the user has scrolled down the page.
   Use the following attributes to achieve this:
    - window.scrollY: the Y position of the window on the total webpage
    - window.innerHeight: height of the window
    - document.body.clientHeight: height of the webpage

 - change the width of the progressBar whenever the user scrolls down or up. Use your
   function to calculate the current scroll percentage.

 (HINT: you can add a 'scroll' event listener to the document )
 (HINT: you can change the width of an element like this: element.style.width = '10px')
*/

const progressBar = document.querySelector('[data-js="progress-bar"]');

// Here we just add the listener, not to the progress bar, but to the whole document...
document.addEventListener("scroll", () => {
  console.log("scroling");

  const percentage = calculateScrollPercentage();

  progressBar.style.width = percentage;
});

function calculateScrollPercentage() {
  let yPosition = window.scrollY;
  let windowSize = window.innerHeight;
  let webpageSize = document.body.clientHeight;
  let maxScrollSize = webpageSize - windowSize;

  // I do this console log so I can see it on the web dev tools

  console.log("yPosition:", yPosition, "maxScrollSize", maxScrollSize);

  let percentageScrolled = (yPosition / maxScrollSize) * 100;

  return percentageScrolled + "%";

  // if I add a string to a number it will atomatically will turn into a string completelly
}
