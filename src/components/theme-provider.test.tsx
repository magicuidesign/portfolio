import React from "react";
import { render, waitFor } from "@testing-library/react";
import { ThemeProvider } from "./theme-provider";
import { useTheme } from "next-themes";
import "@testing-library/jest-dom";

// Mock next-themes
jest.mock("next-themes", () => ({
  ...jest.requireActual("next-themes"),
  useTheme: jest.fn(() => ({
    theme: "light",
    setTheme: jest.fn(),
    themes: ["light", "dark"],
  })),
}));

// Mock window.matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe("ThemeProvider", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders children correctly", () => {
    const { getByText } = render(
      <ThemeProvider>
        <div>Test Child</div>
      </ThemeProvider>
    );

    expect(getByText("Test Child")).toBeInTheDocument();
  });

  it("renders with default props", () => {
    const { container } = render(
      <ThemeProvider>
        <div>Content</div>
      </ThemeProvider>
    );

    // The provider should render without errors
    expect(container.firstChild).toBeInTheDocument();
  });

  it("accepts and passes additional props", () => {
    const { container } = render(
      <ThemeProvider defaultTheme="dark" enableSystem={true}>
        <div>Content</div>
      </ThemeProvider>
    );

    // The provider should render without errors with additional props
    expect(container.firstChild).toBeInTheDocument();
  });

  it("supports multiple children", () => {
    const { getByText } = render(
      <ThemeProvider>
        <div>Child 1</div>
        <div>Child 2</div>
      </ThemeProvider>
    );

    expect(getByText("Child 1")).toBeInTheDocument();
    expect(getByText("Child 2")).toBeInTheDocument();
  });

  it("works with nested components", () => {
    const TestComponent = () => {
      return (
        <ThemeProvider>
          <div>
            <span>Nested Content</span>
          </div>
        </ThemeProvider>
      );
    };

    const { getByText } = render(<TestComponent />);

    expect(getByText("Nested Content")).toBeInTheDocument();
  });

  it("preserves component structure", () => {
    const { container } = render(
      <ThemeProvider>
        <div className="test-class">Content</div>
      </ThemeProvider>
    );

    const contentDiv = container.querySelector(".test-class");
    expect(contentDiv).toBeInTheDocument();
    expect(contentDiv?.textContent).toBe("Content");
  });

  it("should not throw when using the theme context", async () => {
    const MockComponent = () => {
      const { theme, setTheme } = useTheme();
      return (
        <div>
          <span>Current Theme: {theme}</span>
          <button onClick={() => setTheme("dark")}>Change Theme</button>
        </div>
      );
    };

    const { getByText } = render(
      <ThemeProvider defaultTheme="light">
        <MockComponent />
      </ThemeProvider>
    );

    // Check if the component renders without errors and shows the initial theme
    await waitFor(() => {
      expect(getByText("Current Theme: light")).toBeInTheDocument();
    });
  });
});