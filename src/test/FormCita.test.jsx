import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Form from "../pages/FormCitas";

describe("FormCitas Component", () => {
  it("should render the form", () => {
    render(<Form />);
    const formElement = screen.getByTestId("form-citas");
    expect(formElement).toBeInTheDocument();
  });

  it("should update input value when typed into", () => {
    render(<Form />);
    const inputElement = screen.getByLabelText(/name/i);
    fireEvent.change(inputElement, { target: { value: "John Doe" } });
    expect(inputElement.value).toBe("John Doe");
  });
});
