import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
  const handleDecrease = jest.fn();
  const handleIncrease = jest.fn();

  render(
    <Player
      name="name"
      score={0}
      onDecreasePlayerScore={handleDecrease}
      onIncreasePlayerScore={handleIncrease}
    />
  );

  const name = screen.getByText("name");
  expect(name).toBeInTheDocument();
  // the aria label can also be used as name
  const plus = screen.getByRole("button", { name: /Increase Score/i });
  expect(plus).toBeInTheDocument();
  const minus = screen.getByRole("button", { name: /Decrease score/i });
  expect(minus).toBeInTheDocument();
});

test("calls callbacks when increasing or decreasing score", async () => {
  const handleDecrease = jest.fn();
  const handleIncrease = jest.fn();
  const user = userEvent.setup();

  render(
    <Player
      name="name"
      score={0}
      onDecreasePlayerScore={handleDecrease}
      onIncreasePlayerScore={handleIncrease}
    />
  );

  const name = screen.getByText("name");
  expect(name).toBeInTheDocument();
  // the aria label can also be used as name
  const plus = screen.getByRole("button", { name: /Increase Score/i });
  expect(plus).toBeInTheDocument();
  const minus = screen.getByRole("button", { name: /Decrease score/i });
  expect(minus).toBeInTheDocument();

  await user.click(plus);
  await user.click(minus);
});
