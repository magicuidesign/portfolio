import React from "react";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "./navbar";
import { DATA } from "@/data/resume";

// Mock the components that are used in the navbar
jest.mock("./mode-toggle", () => ({
  ModeToggle: () => <div data-testid="mode-toggle" />,
}));

// Mock the magicui components
jest.mock("./magicui/dock", () => ({
  Dock: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="dock">{children}</div>
  ),
  DockIcon: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="dock-icon">{children}</div>
  ),
}));

// Mock the ui components
jest.mock("./ui/button", () => ({
  buttonVariants: jest.fn().mockReturnValue(""),
}));

jest.mock("./ui/separator", () => ({
  Separator: () => <div data-testid="separator" />,
}));

jest.mock("./ui/tooltip", () => ({
  Tooltip: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="tooltip">{children}</div>
  ),
  TooltipContent: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="tooltip-content">{children}</div>
  ),
  TooltipTrigger: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="tooltip-trigger">{children}</div>
  ),
}));

// Mock react icons
jest.mock("lucide-react", () => ({
  HomeIcon: () => <div data-testid="home-icon" />,
  NotebookIcon: () => <div data-testid="notebook-icon" />,
  GlobeIcon: () => <div data-testid="globe-icon" />,
}));

// Mock Link component
jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href} data-testid={`link-${href}`}>
      {children}
    </a>
  ),
}));

// Mock cn function
jest.mock("@/lib/utils", () => ({
  cn: (...classes: string[]) => classes.join(" "),
}));

// Mock Icons to include the missing globe icon
jest.mock("./icons", () => ({
  Icons: {
    github: () => <div data-testid="github-icon" />,
    linkedin: () => <div data-testid="linkedin-icon" />,
    x: () => <div data-testid="x-icon" />,
    youtube: () => <div data-testid="youtube-icon" />,
    email: () => <div data-testid="email-icon" />,
    globe: () => <div data-testid="globe-icon" />,
  },
}));

describe("Navbar", () => {
  beforeEach(() => {
    // Reset any potential mocks or state
    jest.clearAllMocks();
  });

  it("renders without crashing", () => {
    render(<Navbar />);
    const navbar = screen.getByTestId("dock");
    expect(navbar).toBeInTheDocument();
  });

  it("renders navbar items from DATA", () => {
    render(<Navbar />);

    // Check that navbar items are rendered
    DATA.navbar.forEach((item) => {
      const link = screen.getByTestId(`link-${item.href}`);
      expect(link).toBeInTheDocument();

      // Check that the icon is rendered within the link
      const icon = link.querySelector(`[data-testid="${item.icon.name.toLowerCase().replace('icon', '')}-icon"]`);
      expect(icon).toBeInTheDocument();
    });
  });

  it("renders social links with navbar: true", () => {
    render(<Navbar />);

    // Check that social links with navbar: true are rendered
    const socialEntries = Object.entries(DATA.contact.social).filter(
      ([_, social]) => social.navbar
    );

    socialEntries.forEach(([name, social]) => {
      const link = screen.getByTestId(`link-${social.url}`);
      expect(link).toBeInTheDocument();
    });

    // Check that social links with navbar: false are NOT rendered
    const hiddenSocialEntries = Object.entries(DATA.contact.social).filter(
      ([_, social]) => !social.navbar
    );

    hiddenSocialEntries.forEach(([name, social]) => {
      const link = screen.queryByTestId(`link-${social.url}`);
      expect(link).not.toBeInTheDocument();
    });
  });

  it("renders tooltips with correct labels", () => {
    render(<Navbar />);

    // Check navbar tooltips - using getAllByTestId to handle multiple matches
    const tooltipTriggers = screen.getAllByTestId("tooltip-trigger");
    const tooltipContents = screen.getAllByTestId("tooltip-content");

    // The number of tooltip triggers should match the sum of navbar items, social links with navbar: true, and mode toggle
    const expectedTooltipCount =
      DATA.navbar.length + // navbar items
      Object.entries(DATA.contact.social).filter(([_, social]) => social.navbar).length + // social links with navbar: true
      1; // mode toggle

    expect(tooltipTriggers).toHaveLength(expectedTooltipCount);
    expect(tooltipContents).toHaveLength(expectedTooltipCount);

    // Check that the tooltip contents show the correct labels (navbar items + social names + "Theme")
    const tooltipContentElements = screen.getAllByTestId("tooltip-content");

    // Check navbar item labels
    DATA.navbar.forEach((item, index) => {
      expect(tooltipContentElements[index]).toHaveTextContent(item.label);
    });

    // Check social link labels after navbar items
    const socialEntries = Object.entries(DATA.contact.social).filter(
      ([_, social]) => social.navbar
    );

    socialEntries.forEach(([name, social], index) => {
      const navbarItemCount = DATA.navbar.length;
      expect(tooltipContentElements[navbarItemCount + index]).toHaveTextContent(name);
    });

    // The last tooltip should be for the mode toggle with "Theme"
    expect(tooltipContentElements[tooltipContentElements.length - 1]).toHaveTextContent("Theme");
  });

  it("renders the ModeToggle component", () => {
    render(<Navbar />);
    const modeToggle = screen.getByTestId("mode-toggle");
    expect(modeToggle).toBeInTheDocument();
  });

  it("renders separators", () => {
    render(<Navbar />);
    const separators = screen.getAllByTestId("separator");
    expect(separators).toHaveLength(2); // There should be 2 separators in the navbar
  });

  it("renders correct number of navbar items and social links", () => {
    render(<Navbar />);

    // Count the expected number of DockIcon elements
    const expectedDockIcons =
      DATA.navbar.length + // navbar items
      Object.entries(DATA.contact.social).filter(([_, social]) => social.navbar).length + // social links with navbar: true
      1; // mode toggle

    const dockIcons = screen.getAllByTestId("dock-icon");
    expect(dockIcons).toHaveLength(expectedDockIcons);
  });
});