import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Productos from "../pages/Products";

describe("Productos Component", () => {
  it("should render without crashing", () => {
    render(<Productos />);
    const productosElement = screen.getByTestId("productos");
    expect(productosElement).toBeInTheDocument();
  });

  it("should display a message when no products are available", () => {
    render(<Productos products={[]} />);
    const messageElement = screen.getByText(/No products available/i);
    expect(messageElement).toBeInTheDocument();
  });
});
