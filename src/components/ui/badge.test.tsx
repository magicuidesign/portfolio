import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Badge } from "./badge";

// Extend expect with Testing Library matchers
import "@testing-library/jest-dom";

describe("Badge", () => {
  it("renders with default variant when no variant is specified", () => {
    render(<Badge>Default Badge</Badge>);
    const badge = screen.getByText("Default Badge");
    
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("bg-primary");
  });

  it("renders with specified variant", () => {
    render(<Badge variant="secondary">Secondary Badge</Badge>);
    const badge = screen.getByText("Secondary Badge");
    
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("bg-secondary");
  });

  it("renders with destructive variant", () => {
    render(<Badge variant="destructive">Destructive Badge</Badge>);
    const badge = screen.getByText("Destructive Badge");
    
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("bg-destructive");
  });

  it("renders with outline variant", () => {
    render(<Badge variant="outline">Outline Badge</Badge>);
    const badge = screen.getByText("Outline Badge");
    
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("text-foreground");
  });

  it("renders with custom class name", () => {
    render(<Badge className="custom-class">Custom Badge</Badge>);
    const badge = screen.getByText("Custom Badge");
    
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("custom-class");
  });

  it("renders with children", () => {
    render(<Badge>Badge Content</Badge>);
    const badge = screen.getByText("Badge Content");
    
    expect(badge).toBeInTheDocument();
  });

  it("renders as a div element", () => {
    render(<Badge>Test Badge</Badge>);
    const badge = screen.getByText("Test Badge");
    
    expect(badge.tagName).toBe("DIV");
  });

  it("applies default classes", () => {
    render(<Badge>Default Classes Badge</Badge>);
    const badge = screen.getByText("Default Classes Badge");
    
    expect(badge).toHaveClass("inline-flex");
    expect(badge).toHaveClass("items-center");
    expect(badge).toHaveClass("rounded-md");
    expect(badge).toHaveClass("border");
    expect(badge).toHaveClass("px-2.5");
    expect(badge).toHaveClass("py-0.5");
    expect(badge).toHaveClass("text-xs");
    expect(badge).toHaveClass("font-semibold");
  });
});