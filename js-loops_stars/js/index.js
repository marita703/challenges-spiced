console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

// I set a default to the parameter, so it starts always with 0
function renderStars(filledStars = 0) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--

  for (let i = 1; i < 6; i++) {
    const img = document.createElement("img");

    if (filledStars === 0) {
      img.setAttribute("src", "./assets/star-empty.svg");
    } else if (i > filledStars) {
      img.setAttribute("src", "./assets/star-empty.svg");
    } else {
      img.setAttribute("src", "./assets/star-filled.svg");
    }
    img.addEventListener("click", () => {
      renderStars(i);
    });
    starContainer.append(img);
  }

  //--^-- your code here --^--
}

renderStars();
