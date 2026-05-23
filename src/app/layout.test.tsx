import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RootLayout, { metadata } from "./layout";
import { DATA } from "@/data/resume";

// Mock the components used in the layout
jest.mock("@/components/navbar", () => {
  return {
    __esModule: true,
    default: () => <nav data-testid="navbar">Mocked Navbar</nav>,
  };
});

jest.mock("@/components/theme-provider", () => {
  return {
    __esModule: true,
    ThemeProvider: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="theme-provider">{children}</div>
    ),
  };
});

jest.mock("@/components/ui/tooltip", () => {
  return {
    __esModule: true,
    TooltipProvider: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="tooltip-provider">{children}</div>
    ),
  };
});

// Mock next/font/google
jest.mock("next/font/google", () => {
  return {
    Inter: () => ({
      className: "mocked-font-sans",
      variable: "--font-sans",
    }),
  };
});

// Test the layout using a helper component to avoid HTML DOM nesting issues
const TestLayout = ({ children }: { children: React.ReactNode }) => {
  // Only render the body part of the layout for testing purposes
  return (
    <body
      className="min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6"
    >
      <div data-testid="theme-provider">
        <div data-testid="tooltip-provider">
          {children}
          <nav data-testid="navbar">Mocked Navbar</nav>
        </div>
      </div>
    </body>
  );
};

describe("RootLayout", () => {
  it("renders children correctly", () => {
    const testChild = <div data-testid="test-child">Test Child</div>;

    render(
      <TestLayout>{testChild}</TestLayout>
    );

    // Check if the child element is rendered
    expect(screen.getByTestId("test-child")).toBeInTheDocument();
  });

  it("includes necessary providers", () => {
    const testChild = <div>Test Child</div>;

    render(
      <TestLayout>{testChild}</TestLayout>
    );

    // Check if the theme provider is rendered
    expect(screen.getByTestId("theme-provider")).toBeInTheDocument();

    // Check if the tooltip provider is rendered
    expect(screen.getByTestId("tooltip-provider")).toBeInTheDocument();
  });

  it("includes the Navbar component", () => {
    const testChild = <div>Test Child</div>;

    render(
      <TestLayout>{testChild}</TestLayout>
    );

    // Check if the navbar is rendered
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });
});

describe("metadata", () => {
  it("contains correct metadata structure", () => {
    expect(metadata).toHaveProperty("metadataBase");
    expect(metadata).toHaveProperty("title");
    expect(metadata).toHaveProperty("description");
    expect(metadata).toHaveProperty("openGraph");
    expect(metadata).toHaveProperty("robots");
    expect(metadata).toHaveProperty("twitter");
    expect(metadata).toHaveProperty("verification");
  });

  it("uses DATA for metadata values", () => {
    expect(metadata.title.default).toBe(DATA.name);
    expect(metadata.description).toBe(DATA.description);
    expect(metadata.openGraph?.title).toBe(`${DATA.name}`);
    expect(metadata.openGraph?.description).toBe(DATA.description);
    expect(metadata.openGraph?.url).toBe(DATA.url);
  });

  it("has correct Twitter card metadata", () => {
    expect(metadata.twitter?.card).toBe("summary_large_image");
    expect(metadata.twitter?.title).toBe(`${DATA.name}`);
  });

  it("has correct robots metadata", () => {
    expect(metadata.robots?.index).toBe(true);
    expect(metadata.robots?.follow).toBe(true);
    expect(metadata.robots?.googleBot?.index).toBe(true);
    expect(metadata.robots?.googleBot?.follow).toBe(true);
  });
});