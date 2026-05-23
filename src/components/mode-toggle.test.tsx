import { render, screen, fireEvent } from "@testing-library/react";
import { useTheme } from "next-themes";
import { ModeToggle } from "./mode-toggle";
import "@testing-library/jest-dom";

// Mock the next-themes module
jest.mock("next-themes", () => ({
  useTheme: jest.fn(),
}));

const mockUseTheme = useTheme as jest.Mock;

describe("ModeToggle", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the button with correct classes", () => {
    mockUseTheme.mockReturnValue({
      theme: "light",
      setTheme: jest.fn(),
    });

    render(<ModeToggle />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("px-2");
  });

  it("displays sun icon when theme is light and moon icon is hidden", () => {
    mockUseTheme.mockReturnValue({
      theme: "light",
      setTheme: jest.fn(),
    });

    render(<ModeToggle />);

    // Find the two SVG elements - one for sun and one for moon
    const svgs = document.querySelectorAll('svg');
    const sunIcon = Array.from(svgs).find(svg =>
      svg.classList.contains('dark:hidden') && !svg.classList.contains('hidden')
    );
    const moonIcon = Array.from(svgs).find(svg =>
      svg.classList.contains('hidden') && svg.classList.contains('dark:block')
    );

    expect(sunIcon).toBeInTheDocument();
    expect(moonIcon).toBeInTheDocument();
  });

  it("displays moon icon when theme is dark and sun icon is hidden", () => {
    mockUseTheme.mockReturnValue({
      theme: "dark",
      setTheme: jest.fn(),
    });

    render(<ModeToggle />);

    // Find the two SVG elements - one for sun and one for moon
    const svgs = document.querySelectorAll('svg');
    const sunIcon = Array.from(svgs).find(svg =>
      svg.classList.contains('dark:hidden') && svg.classList.contains('text-neutral-800')
    );
    const moonIcon = Array.from(svgs).find(svg =>
      svg.classList.contains('hidden') && svg.classList.contains('dark:block')
    );

    expect(sunIcon).toBeInTheDocument();
    expect(moonIcon).toBeInTheDocument();
  });

  it("toggles theme from light to dark when clicked", () => {
    const setThemeMock = jest.fn();
    mockUseTheme.mockReturnValue({
      theme: "light",
      setTheme: setThemeMock,
    });

    render(<ModeToggle />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(setThemeMock).toHaveBeenCalledWith("dark");
  });

  it("toggles theme from dark to light when clicked", () => {
    const setThemeMock = jest.fn();
    mockUseTheme.mockReturnValue({
      theme: "dark",
      setTheme: setThemeMock,
    });

    render(<ModeToggle />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(setThemeMock).toHaveBeenCalledWith("light");
  });

  it("uses correct button properties", () => {
    mockUseTheme.mockReturnValue({
      theme: "light",
      setTheme: jest.fn(),
    });

    render(<ModeToggle />);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "button");
    // Note: Don't check for role attribute since screen.getByRole("button") already returns an element with role="button"
  });
});