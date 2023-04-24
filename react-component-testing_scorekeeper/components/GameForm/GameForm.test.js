import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  // Here we create the function that normally should be passed as a prop, to handle the event.
  // This function is fictional... just for test proposes
  const handleCreateGame = jest.fn();
  // Then we render the whole component, and give the prop that it needs the function of event handeler that we created before

  render(<GameForm onCreateGame={handleCreateGame} />);
  const nameOfGame = screen.getByLabelText("Name of game");
  expect(nameOfGame).toBeInTheDocument();

  const playerNames = screen.getByLabelText("Player names, separated by comma");
  expect(playerNames).toBeInTheDocument();

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  const handleCreateGame = jest.fn();
  render(<GameForm onCreateGame={handleCreateGame} />);
  const form = screen.getByRole("form");
  expect(form).toHaveAccessibleName();
});

test("submits the correct form data when every field is filled out", async () => {
  // we create an object that is the dummy data that we are going to pass in order to test.
  const data = {
    nameOfGame: "Game of Thrones",
    playerNames: ["Marcin", "Maria"],
  };

  const handleCreateGame = jest.fn();
  // then we create a fictional user that is going to interact with the button:
  const user = userEvent.setup();

  render(<GameForm onCreateGame={handleCreateGame} />);

  const nameOfGame = screen.getByLabelText("Name of game");
  expect(nameOfGame).toBeInTheDocument();

  const playerNames = screen.getByLabelText("Player names, separated by comma");
  expect(playerNames).toBeInTheDocument();

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();

  // Here we give to every eventlistener objects, a test to see if they do what they are suppouse to do.
  // just click or just to be able to write on them
  await user.type(nameOfGame, "Game of Thrones");
  await user.type(playerNames, "Marcin, Maria");
  await user.click(button);

  // with this function, we comprobe if the data that we submitt from our dummy object is the data that the form is being called with.
  expect(handleCreateGame).toHaveBeenCalledWith(data);
});

test("does not submit form if one input field is left empty", async () => {
  const handleCreateGame = jest.fn();
  const user = userEvent.setup();
  render(<GameForm onCreateGame={handleCreateGame} />);

  const nameOfGame = screen.getByLabelText("Name of game");
  expect(nameOfGame).toBeInTheDocument();

  const playerNames = screen.getByLabelText("Player names, separated by comma");
  expect(playerNames).toBeInTheDocument();

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();

  await user.type(playerNames, "Marcin, Maria");
  await user.click(button);

  expect(handleCreateGame).not.toHaveBeenCalled();
});
