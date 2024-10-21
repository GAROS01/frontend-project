import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/Home";

describe("Home Page", () => {
  it("should render Nav component", () => {
    const { getByRole } = render(
      <Router>
        <Home />
      </Router>
    );
    expect(getByRole("navigation")).toBeInTheDocument();
  });

  it("should render Header component", () => {
    const { getByRole } = render(
      <Router>
        <Home />
      </Router>
    );
    expect(getByRole("banner")).toBeInTheDocument();
  });

  it("should render Footer component", () => {
    const { getByRole } = render(
      <Router>
        <Home />
      </Router>
    );
    expect(getByRole("contentinfo")).toBeInTheDocument();
  });

  it("should render the link to the calendar", () => {
    const { getByText } = render(
      <Router>
        <Home />
      </Router>
    );
    expect(getByText("AGENDA TU CITA")).toBeInTheDocument();
  });

  it("should render nail designs section", () => {
    const { getByText, getAllByAltText } = render(
      <Router>
        <Home />
      </Router>
    );
    expect(getByText("DISEÑOS DE UÑAS")).toBeInTheDocument();
    expect(getAllByAltText("diseños de uñas").length).toBe(3);
  });
});
