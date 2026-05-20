import React from "react";
import { render, screen } from "@testing-library/react";
import { ProjectCard } from "./project-card";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Import jest-dom matchers
import "@testing-library/jest-dom";

// Mock the next/image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, width, height, className }: any) => (
    <img src={src} alt={alt} width={width} height={height} className={className} data-testid="mock-image" />
  ),
}));

// Mock the react-markdown component
jest.mock("react-markdown", () => ({
  __esModule: true,
  default: ({ children, className }: any) => (
    <div className={className} data-testid="mock-markdown">{children}</div>
  ),
}));

// Mock the next/link component
jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ href, children, className }: any) => (
    <a href={href} className={className} data-testid="mock-link">{children}</a>
  ),
}));

// Mock React.ReactNode
const MockIcon = () => <span data-testid="mock-icon">Icon</span>;

describe("ProjectCard", () => {
  const defaultProps = {
    title: "Test Project",
    description: "This is a test project description",
    dates: "2023-2024",
    tags: ["react", "typescript"] as const,
  };

  it("renders the project title", () => {
    render(<ProjectCard {...defaultProps} />);

    expect(screen.getByText("Test Project")).toBeInTheDocument();
  });

  it("renders the project description", () => {
    render(<ProjectCard {...defaultProps} />);

    expect(screen.getByText("This is a test project description")).toBeInTheDocument();
  });

  it("renders the project dates", () => {
    render(<ProjectCard {...defaultProps} />);

    expect(screen.getByText("2023-2024")).toBeInTheDocument();
  });

  it("renders the project tags", () => {
    render(<ProjectCard {...defaultProps} />);

    expect(screen.getByText("react")).toBeInTheDocument();
    expect(screen.getByText("typescript")).toBeInTheDocument();
  });

  it("renders an image when image prop is provided", () => {
    render(<ProjectCard {...defaultProps} image="/test-image.jpg" />);

    expect(screen.getByTestId("mock-image")).toBeInTheDocument();
    expect(screen.getByAltText("Test Project")).toBeInTheDocument();
  });

  it("does not render an image when image prop is not provided", () => {
    render(<ProjectCard {...defaultProps} />);

    expect(screen.queryByTestId("mock-image")).not.toBeInTheDocument();
  });

  it("renders a video when video prop is provided", () => {
    render(<ProjectCard {...defaultProps} video="/test-video.mp4" />);

    // Find video element by its src attribute using a custom query
    const videoElement = screen.getByTestId('mock-link').querySelector('video');
    expect(videoElement).not.toBeNull();
    expect(videoElement).toHaveAttribute('src', '/test-video.mp4');
  });

  it("does not render a video when video prop is not provided", () => {
    render(<ProjectCard {...defaultProps} />);

    const linkElement = screen.getByTestId('mock-link');
    const videoElement = linkElement.querySelector('video');
    expect(videoElement).toBeNull();
  });

  it("renders links when links prop is provided", () => {
    const links = [
      {
        icon: <MockIcon />,
        type: "GitHub",
        href: "https://github.com/test",
      },
    ] as const;

    render(<ProjectCard {...defaultProps} links={links} />);

    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
    const linkElement = screen.getByText("GitHub").closest('a');
    expect(linkElement).toHaveAttribute("href", "https://github.com/test");
  });

  it("does not render links when links prop is not provided", () => {
    render(<ProjectCard {...defaultProps} />);

    expect(screen.queryByText("GitHub")).not.toBeInTheDocument();
  });

  it("renders the link domain when link prop is provided", () => {
    render(<ProjectCard {...defaultProps} link="https://www.example.com/path" />);

    const linkText = screen.getByText(/example\.com/);
    expect(linkText).toBeInTheDocument();
  });

  it("handles href prop for the main link", () => {
    render(<ProjectCard {...defaultProps} href="/test-link" />);

    expect(screen.getByTestId("mock-link")).toHaveAttribute("href", "/test-link");
  });

  it("uses default href when href prop is not provided", () => {
    render(<ProjectCard {...defaultProps} />);

    expect(screen.getByTestId("mock-link")).toHaveAttribute("href", "#");
  });

  it("applies additional class names when className prop is provided", () => {
    render(<ProjectCard {...defaultProps} className="custom-class" />);

    expect(screen.getByTestId("mock-link")).toHaveClass("custom-class");
  });
});