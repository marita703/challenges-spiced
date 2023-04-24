import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  const handleCheck = jest.fn();

  render(
    <Input
      labelText="labelText"
      placeholder="placeHolder"
      name="name"
      value="value"
      onChange={handleCheck()}
      required
    />
  );
  const label = screen.getByText("labelText");
  expect(label).toBeInTheDocument();

  const input = screen.getByLabelText("labelText");
  expect(input).toBeInTheDocument();
});

test("calls callback on every user input", async () => {
  const handleCheck = jest.fn();
  const user = userEvent.setup();

  render(
    <Input
      labelText="labelText"
      placeholder="placeHolder"
      name="name"
      value="value"
      onChange={handleCheck()}
      required
    />
  );

  const input = screen.getByLabelText("labelText");
  expect(input).toBeInTheDocument();

  await user.type(input, "Game of Thrones");
});
