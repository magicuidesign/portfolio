import { render, screen } from "@testing-library/react";
import { HackathonCard } from "./hackathon-card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import "@testing-library/jest-dom";

// Mock child components to avoid deep rendering issues
jest.mock("@/components/ui/badge", () => ({
  Badge: ({ children, title, className }: { children: React.ReactNode; title?: string; className?: string }) => (
    <span className={className} title={title}>
      {children}
    </span>
  ),
}));

jest.mock("@/components/ui/avatar", () => ({
  Avatar: ({ className, children }: { className?: string; children: React.ReactNode }) => (
    <div className={className}>
      {children}
    </div>
  ),
  AvatarImage: ({ src, alt, className }: { src?: string; alt: string; className?: string }) => (
    <img src={src} alt={alt} className={className} />
  ),
  AvatarFallback: ({ children }: { children: React.ReactNode }) => (
    <span>{children}</span>
  ),
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

describe("HackathonCard", () => {
  const defaultProps = {
    title: "Test Hackathon",
    description: "Test description",
    dates: "2023-01-01 to 2023-01-02",
    location: "Test Location",
    image: "https://example.com/test-image.jpg",
    links: [
      {
        icon: <span>Icon</span>,
        title: "Website",
        href: "https://example.com",
      },
    ],
  };

  it("renders the hackathon card with all props", () => {
    render(<HackathonCard {...defaultProps} />);

    // Check that all main elements are present
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.dates)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.location)).toBeInTheDocument();
    
    // Check that the image is rendered with correct alt text
    const image = screen.getByRole("img", { name: defaultProps.title });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", defaultProps.image);
  });

  it("renders with only required props", () => {
    const minimalProps = {
      title: "Minimal Hackathon",
      description: "Minimal description",
      dates: "2023-02-01 to 2023-02-02",
      location: "Minimal Location",
    };

    render(<HackathonCard {...minimalProps} />);

    expect(screen.getByText(minimalProps.title)).toBeInTheDocument();
    expect(screen.getByText(minimalProps.description)).toBeInTheDocument();
    expect(screen.getByText(minimalProps.dates)).toBeInTheDocument();
    expect(screen.getByText(minimalProps.location)).toBeInTheDocument();
  });

  it("renders dates when provided", () => {
    render(<HackathonCard {...defaultProps} />);

    const datesElement = screen.getByText(defaultProps.dates);
    expect(datesElement).toBeInTheDocument();
    expect(datesElement).toHaveClass("text-xs");
    expect(datesElement).toHaveClass("text-muted-foreground");
  });

  it("does not render dates element when not provided", () => {
    const propsWithoutDates = { ...defaultProps, dates: undefined };
    render(<HackathonCard {...propsWithoutDates} />);

    expect(screen.queryByText(defaultProps.dates)).not.toBeInTheDocument();
  });

  it("renders location when provided", () => {
    render(<HackathonCard {...defaultProps} />);

    const locationElement = screen.getByText(defaultProps.location);
    expect(locationElement).toBeInTheDocument();
    expect(locationElement).toHaveClass("text-sm");
    expect(locationElement).toHaveClass("text-muted-foreground");
  });

  it("does not render location element when not provided", () => {
    const propsWithoutLocation = { ...defaultProps, location: undefined };
    render(<HackathonCard {...propsWithoutLocation} />);

    expect(screen.queryByText(defaultProps.location)).not.toBeInTheDocument();
  });

  it("renders description when provided", () => {
    render(<HackathonCard {...defaultProps} />);

    const descriptionElement = screen.getByText(defaultProps.description);
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveClass("prose");
    expect(descriptionElement).toHaveClass("dark:prose-invert");
    expect(descriptionElement).toHaveClass("text-sm");
    expect(descriptionElement).toHaveClass("text-muted-foreground");
  });

  it("does not render description element when not provided", () => {
    const propsWithoutDescription = { ...defaultProps, description: undefined };
    render(<HackathonCard {...propsWithoutDescription} />);

    expect(screen.queryByText(defaultProps.description)).not.toBeInTheDocument();
  });

  it("renders avatar with image when provided", () => {
    render(<HackathonCard {...defaultProps} />);

    const imageElement = screen.getByRole("img", { name: defaultProps.title });
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", defaultProps.image);
    expect(imageElement).toHaveClass("object-contain");
  });

  it("renders avatar fallback with first letter of title when no image is provided", () => {
    const propsWithoutImage = { ...defaultProps, image: undefined };
    render(<HackathonCard {...propsWithoutImage} />);

    // The fallback should show the first letter of the title
    expect(screen.getByText(defaultProps.title[0])).toBeInTheDocument();
  });

  it("renders links when provided", () => {
    render(<HackathonCard {...defaultProps} />);

    // Check that the link with the correct title is rendered
    expect(screen.getByText("Website")).toBeInTheDocument();
    
    // Check that the link points to the correct URL
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", "https://example.com");
  });

  it("does not render links section when no links are provided", () => {
    const propsWithoutLinks = { ...defaultProps, links: undefined };
    render(<HackathonCard {...propsWithoutLinks} />);

    // There should be no badges rendered
    expect(screen.queryByText("Website")).not.toBeInTheDocument();
  });

  it("does not render links section when links array is empty", () => {
    const propsWithEmptyLinks = { ...defaultProps, links: [] };
    render(<HackathonCard {...propsWithEmptyLinks} />);

    expect(screen.queryAllByRole("link")).toHaveLength(0);
  });

  it("renders multiple links when provided", () => {
    const multipleLinksProps = {
      ...defaultProps,
      links: [
        {
          icon: <span>Icon1</span>,
          title: "Website",
          href: "https://example.com",
        },
        {
          icon: <span>Icon2</span>,
          title: "GitHub",
          href: "https://github.com",
        },
      ],
    };

    render(<HackathonCard {...multipleLinksProps} />);

    // Both links should be rendered
    expect(screen.getByText("Website")).toBeInTheDocument();
    expect(screen.getByText("GitHub")).toBeInTheDocument();
  });

  it("renders title correctly with proper styling", () => {
    render(<HackathonCard {...defaultProps} />);

    const titleElement = screen.getByText(defaultProps.title);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass("font-semibold");
    expect(titleElement).toHaveClass("leading-none");
  });

  it("has the correct structure with avatar positioned absolutely", () => {
    render(<HackathonCard {...defaultProps} />);

    // Check for the main list item container
    const listItem = screen.getByRole("listitem");
    expect(listItem).toBeInTheDocument();
    expect(listItem).toHaveClass("relative");
    expect(listItem).toHaveClass("ml-10");
    expect(listItem).toHaveClass("py-4");

    // Check for the avatar container (the div with absolute positioning styles)
    const avatarWrapper = screen.getByText(defaultProps.title[0]).closest("div");

    // The Avatar component is inside a div with absolute positioning
    // The structure is: div (absolute positioning) -> Avatar -> AvatarImage/AvatarFallback
    // So we need to go up one more level to get the absolutely positioned div
    const absoluteDiv = avatarWrapper?.parentElement;

    expect(absoluteDiv).toHaveClass("absolute");
    expect(absoluteDiv).toHaveClass("-left-16");
    expect(absoluteDiv).toHaveClass("top-2");
    expect(absoluteDiv).toHaveClass("flex");
    expect(absoluteDiv).toHaveClass("items-center");
    expect(absoluteDiv).toHaveClass("justify-center");
    expect(absoluteDiv).toHaveClass("bg-white");
    expect(absoluteDiv).toHaveClass("rounded-full");
  });
});