import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button, buttonVariants } from "./button";

describe("Button", () => {
  it("renders correctly with default props", () => {
    render(<Button>Click me</Button>);
    
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-primary");
    expect(button).toHaveClass("h-9");
  });

  it("applies the correct variant classes", () => {
    render(
      <>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </>
    );

    expect(screen.getByRole("button", { name: /destructive/i })).toHaveClass("bg-destructive");
    expect(screen.getByRole("button", { name: /outline/i })).toHaveClass("border");
    expect(screen.getByRole("button", { name: /secondary/i })).toHaveClass("bg-secondary");
    expect(screen.getByRole("button", { name: /ghost/i })).toHaveClass("hover:bg-accent");
    expect(screen.getByRole("button", { name: /link/i })).toHaveClass("text-primary");
  });

  it("applies the correct size classes", () => {
    render(
      <>
        <Button size="sm">Small</Button>
        <Button size="lg">Large</Button>
        <Button size="icon">Icon</Button>
      </>
    );

    expect(screen.getByRole("button", { name: /small/i })).toHaveClass("h-8");
    expect(screen.getByRole("button", { name: /large/i })).toHaveClass("h-10");
    expect(screen.getByRole("button", { name: /icon/i })).toHaveClass("h-9");
    expect(screen.getByRole("button", { name: /icon/i })).toHaveClass("w-9");
  });

  it("renders with custom className", () => {
    render(<Button className="custom-class">Custom Button</Button>);

    const button = screen.getByRole("button", { name: /custom button/i });
    expect(button).toHaveClass("custom-class");
  });

  it("is disabled when disabled prop is passed", () => {
    render(<Button disabled>Disabled Button</Button>);

    const button = screen.getByRole("button", { name: /disabled button/i });
    expect(button).toBeDisabled();
    expect(button).toHaveClass("disabled:pointer-events-none");
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable Button</Button>);

    const button = screen.getByRole("button", { name: /clickable button/i });
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders as a child when asChild prop is true", () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    );

    const link = screen.getByRole("link", { name: /link button/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/test");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Ref Button</Button>);

    const button = screen.getByRole("button", { name: /ref button/i });
    expect(ref.current).toBe(button);
  });

  it("applies default variant and size when not specified", () => {
    render(<Button>Default Button</Button>);

    const button = screen.getByRole("button", { name: /default button/i });
    expect(button).toHaveClass("bg-primary");
    expect(button).toHaveClass("h-9");
  });
});

describe("buttonVariants", () => {
  it("returns correct classes for default variant", () => {
    const classes = buttonVariants();
    expect(classes).toContain("bg-primary");
  });

  it("returns correct classes for different variants", () => {
    const defaultClasses = buttonVariants({ variant: "default" });
    expect(defaultClasses).toContain("bg-primary");

    const destructiveClasses = buttonVariants({ variant: "destructive" });
    expect(destructiveClasses).toContain("bg-destructive");

    const outlineClasses = buttonVariants({ variant: "outline" });
    expect(outlineClasses).toContain("border");
  });

  it("returns correct classes for different sizes", () => {
    const defaultSize = buttonVariants({ size: "default" });
    expect(defaultSize).toContain("h-9");

    const smallSize = buttonVariants({ size: "sm" });
    expect(smallSize).toContain("h-8");

    const largeSize = buttonVariants({ size: "lg" });
    expect(largeSize).toContain("h-10");
  });

  it("combines variant and size classes correctly", () => {
    const classes = buttonVariants({ variant: "secondary", size: "sm" });
    expect(classes).toContain("bg-secondary");
    expect(classes).toContain("h-8");
  });
});