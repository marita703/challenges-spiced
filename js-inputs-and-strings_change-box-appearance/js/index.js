/*

Change the appearance of the box according to the values of the sliders (color, border radius, rotation)

– [ ] Add an event listener for each input element.
– [ ] When the slider control of inputColor is moved, change the background color of the box. Hint: You need to work with the hsl() functional notation for colors.
– [ ] When the slider control of inputRadius is moved, change the border radius of the box. If the control reaches the right end, make the box look like a circle.
– [ ] When the slider control of inputRotation is moved, rotate the box. Hint: You may need to work with the CSS property "transform" and a value that contains "rotate" and "deg".

Hint: You can work with the property "style", just like you worked with the property "classList".

For further information check MDN:
- about inputs of type="range": https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range
- about hsl(): https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
- about transform & rotate: https://developer.mozilla.org/en-US/docs/Web/CSS/transform
- about CSS declarations with "style": https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style

*/

const box = document.querySelector('[data-js="box"]');
const color = document.querySelector('[data-js="input-color"]');
const radius = document.querySelector('[data-js="input-radius"]');
const rotation = document.querySelector('[data-js="input-rotation"]');

color.addEventListener("input", (e) => {
  // In order to get the value of an imput, is not so easy to just say color.value, because is not text, for this reason in this case we need an event (e) as a parameter, and then use e.target.value;
  const slide = e.target.value;

  // Here we use the ` ${} ` so we can use a string in order to change the values of the background color. Using this will allow us to save time and letters, because we do not have to concatenate strings.

  // now we look for the format of the colors they are asking us hsl... and then we see that it is composed of 3 values hsl(74, 30%, 50%) the first one is the one that changes the color, the second one the luminosity and the third one it does not matter... so we need to change the first value with the input recorded from the event, so every time that I move the slider.. the color changes... we can see in the HTML file that the max that the slider can move is till 360, this is like this because this scale of color is also conditioned to move only 360.
  box.style.backgroundColor = `hsl(${slide}, 100%, 50%)`;
  console.log(e.target.value);
});

radius.addEventListener("input", (e) => {
  const slide = e.target.value;

  console.log(e.target.value);

  //   Normally the name of the styles in CSS contents "-" and in JavaScript is written different, so in order to avoid mistakes, we can add next to styles ["name-in-css"] without a space so it matches the real name in CSS.

  //   be careful, between the ${slide} and the % there should be also no space :)
  box.style["border-radius"] = `${slide}%`;
});

rotation.addEventListener("input", (e) => {
  let slide = e.target.value;
  console.log(slide);

  box.style.transform = `rotate(${slide}deg)`;
  box.style.backgroundColor = `hsl(${slide}, 100%, 50%)`;
  box.style["border-radius"] = `${slide}%`;
});
