import { screen, render, fireEvent } from "@testing-library/react";
import UserForm from "./UserForm";

describe("user inputs functionaity", () => {
  test("should render the inputs and btn first", () => {
    render(<UserForm />);
    const formInputs = screen.getAllByRole("textbox");
    const button = screen.getByRole("button");
    formInputs.forEach((input) => {
      expect(input).toBeInTheDocument();
    });
    expect(button).toBeInTheDocument();
  });
  test("check add to form in correct", () => {

    
    const mookAddFunc = jest.fn(({ name, email }) => {});
    render(<UserForm onUserAdd={mookAddFunc} />);
    const nameInput = screen.getByLabelText("Name");
    const emailInput = screen.getByLabelText("Email");
    
    //simulate witing in inputs
    fireEvent.change(nameInput, { target: { value: "sahand" } });
    fireEvent.change(emailInput, { target: { value: "saahnd.com" } });

    //simulate clicking the button
    const button = screen.getByRole("button" , {name: 'Add User'});
    fireEvent.click(button);

    // expect(mookAddFunc).toBeCalled()
    expect(mookAddFunc).toBeCalledWith({name:'sahand' , email:'saahnd.com'})
    expect(nameInput.value).toBe("");
    expect(emailInput.value).toBe("");
  });

});
