import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { BrowserRouter } from "react-router-dom";
import Calendar from "../pages/Calendar";

describe("Calendar Page", () => {
  test("renders Calendar component", () => {
    render(
      <BrowserRouter>
        <Calendar />
      </BrowserRouter>
    );
    expect(screen.getByText("Seleccione una fecha")).toBeInTheDocument();
  });

  test("renders navigation components", () => {
    render(
      <BrowserRouter>
        <Calendar />
      </BrowserRouter>
    );
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  test("displays correct footer text when no date is selected", () => {
    render(
      <BrowserRouter>
        <Calendar />
      </BrowserRouter>
    );
    expect(screen.getByText("Seleccione una fecha")).toBeInTheDocument();
  });

  test("button is present and clickable", () => {
    render(
      <BrowserRouter>
        <Calendar />
      </BrowserRouter>
    );
    const button = screen.getByText("Agendar Cita");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
  });
});
