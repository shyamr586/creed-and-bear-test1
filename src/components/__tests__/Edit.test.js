import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Edit from "./../Edit";


afterEach(() => cleanup());
const handleEdit = jest.fn()

let dummy = [
  {
    id: 1,
    first_name: "First Name",
    last_name: "Last Name",
    email: "Email",
    avatar: "Avatar",
  },
];

test("check if input is rendering", () => {
  render(<Edit dummy={dummy} />);
  const fNameInput = screen.getByTestId("fName");
  const lName = screen.getByTestId("lName");
  const email = screen.getByTestId("email");
  const avatar = screen.getByTestId("avatar");
  const button = screen.getByTestId("button");
  expect(fNameInput).toBeInTheDocument();
  expect(lName).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(avatar).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("check if input has initial value", () => {
  render(<Edit dummy={dummy} />);
  const fNameInput = screen.getByTestId("fName");
  const lName = screen.getByTestId("lName");
  const email = screen.getByTestId("email");
  const avatar = screen.getByTestId("avatar");

  expect(fNameInput).toHaveValue(dummy[0].first_name);
  expect(lName).toHaveValue(dummy[0].last_name);
  expect(email).toHaveValue(dummy[0].email);
  expect(avatar).toHaveValue(dummy[0].avatar);
});

test("check if changes are registering properly", () => {
  render(<Edit dummy={dummy} />);
  const fName = screen.getByTestId("fName");
  const lName = screen.getByTestId("lName");
  const email = screen.getByTestId("email");
  const avatar = screen.getByTestId("avatar");

  fireEvent.change(fName, {target: {value: "New First Name"}})
  fireEvent.change(lName, {target: {value: "New Last Name"}})
  fireEvent.change(email, {target: {value: "New Email"}})
  fireEvent.change(avatar, {target: {value: "New Avatar"}})

  expect(fName).toHaveValue("New First Name");
  expect(lName).toHaveValue("New Last Name");
  expect(email).toHaveValue("New Email");
  expect(avatar).toHaveValue("New Avatar");

});

test("check if action is called on button click", ()=>{
  render(<Edit dummy={dummy} handleEdit={handleEdit}/>);
  const button = screen.getByTestId("button");
  fireEvent.click(button)

  expect(handleEdit).toHaveBeenCalled()
})