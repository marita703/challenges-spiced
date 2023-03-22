// transforming the string that I have in the URL (which in this moment is the only place where I am storing information) so I can work with it.

const query = new URLSearchParams(location.search);

// what we want from the web, is the "name" that we put in each field
const color = query.get("outfit");

const friendsStatus = query.get("item");
const date = query.get("date");

document.body.style.backgroundColor = color;
// we give to this command the constant that we just created before, because the color in our form that the user could choose, and its tag "name" was "outfit" in our HTML file.
