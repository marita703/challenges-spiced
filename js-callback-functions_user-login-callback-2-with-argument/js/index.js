console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!

function showWelcomeMessage(userName) {
  console.log(
    "user name",
    userName,
    "Welcome Jane Doe! You are logged in now."
  );
}

handleUserLogin(showWelcomeMessage);

handleUserLogin((userName) => {
  console.log(userName, "Welcome Jane Doe! You are logged in now.");
});
