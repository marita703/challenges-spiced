console.clear();

const cards = [
  {
    id: "1",
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

const onlyCardWithIdTwo = cards.filter((card) => card.id === "2");

const allCardsWith3Tags = cards.filter((card) => card.tags.length === 3);

const allCardsThatAreNotBookmarked = cards.filter((card) => {
  return card.isBookmarked === false;
});

const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter((card) => {
  let hasHtmlOrJs = false;
  let bookmarked = false;

  // this will look for each tag array of every card (card.tags), in the position index (I gave this argument in order to be more readable, not that this argument exists) if it contains a "js" or "html" tag and will change the value of hasHtmlOrJS to true
  card.tags.forEach((index) => {
    if (index === "js" || index === "html") {
      hasHtmlOrJs = true;
    }
  });

  // Here we test if card is bookmarked
  if (card.isBookmarked === true) {
    bookmarked = true;
  }

  // Here we test that it contains the html or js tags and that the card is bookmarked .This has to be true in order to return the card that meets this requirement.
  return bookmarked && hasHtmlOrJs;
});

// export {
//   onlyCardWithIdTwo,
//   allCardsWith3Tags,
//   allCardsThatAreNotBookmarked,
//   allCardsWithTagsHTMLOrJSThatAreBookmarked,
// };

console.log(onlyCardWithIdTwo);
console.log(allCardsWith3Tags);
console.log(allCardsThatAreNotBookmarked);
