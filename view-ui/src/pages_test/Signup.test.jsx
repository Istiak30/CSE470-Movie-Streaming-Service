import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Signup from "../pages/Signup";
import '@testing-library/jest-dom'

jest.mock("../utils/firebase-config", () => ({
  firebaseAuth: {
    createUserWithEmailAndPassword: jest.fn(),
    onAuthStateChanged: jest.fn(),
  },
}));

describe("Signup component", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );
  });

  it("renders the signup form", () => {
    expect(screen.getByPlaceholderText("Email address")).toBeInTheDocument();
    expect(screen.getByText("Get Started")).toBeInTheDocument();
  });

  it("handles input changes", () => {
    const emailInput = screen.getByPlaceholderText("Email address");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    expect(emailInput.value).toBe("test@example.com");
  });

  it('should update the form values when password input is changed', () => {
    const emailInput = screen.getByPlaceholderText("Email address");
    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    const getPasswordInput = () =>
      screen.getByPlaceholderText('Password');

    const showPasswordButton = screen.getByText('Get Started');
    fireEvent.click(showPasswordButton);

    const passwordInput = getPasswordInput();
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(passwordInput.value).toBe('password123');
  });
});