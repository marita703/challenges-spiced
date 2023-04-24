import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  const players = ["Maria", "Marcin"];

  render(<Navigation players={players} />);

  const play = screen.getByText(/play/i);
  expect(play).toBeInTheDocument();

  const history = screen.getByText(/history/i);
  expect(history).toBeInTheDocument();
});
