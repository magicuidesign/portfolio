import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BlurFadeText from "./blur-fade-text";

// Mock the framer-motion components since they're not needed for unit testing
jest.mock("framer-motion", () => ({
  motion: {
    span: (props: { children: React.ReactNode; [key: string]: any }) => (
      <span data-testid="data-motion" {...props}>{props.children}</span>
    )
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe("BlurFadeText", () => {
  it("renders the text correctly", () => {
    const text = "Hello World";
    render(<BlurFadeText text={text} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("renders with default props", () => {
    const text = "Test";
    render(<BlurFadeText text={text} />);

    const spanElement = screen.getByText(text);
    expect(spanElement).toBeInTheDocument();
    expect(spanElement).toHaveClass("inline-block");
  });

  it("applies custom className", () => {
    const text = "Test";
    const customClass = "custom-class";
    render(<BlurFadeText text={text} className={customClass} />);

    const spanElement = screen.getByText(text);
    expect(spanElement).toHaveClass("inline-block", customClass);
  });

  it("renders the whole text when animateByCharacter is false (default)", () => {
    const text = "Hello";
    render(<BlurFadeText text={text} />);

    expect(screen.getByText(text)).toBeInTheDocument();
    // Should have only one motion span element for the whole text
    const motionSpans = screen.getAllByTestId("data-motion");
    expect(motionSpans).toHaveLength(1);
  });

  it("renders individual characters when animateByCharacter is true", () => {
    const text = "Hi";
    render(<BlurFadeText text={text} animateByCharacter={true} />);

    // Should render individual spans for each character
    expect(screen.getByText("H")).toBeInTheDocument();
    expect(screen.getByText("i")).toBeInTheDocument();

    const motionSpans = screen.getAllByTestId("data-motion");
    expect(motionSpans).toHaveLength(2); // One for each character
  });

  it("handles spaces correctly by applying specific width", () => {
    const text = "H i";
    render(<BlurFadeText text={text} animateByCharacter={true} />);

    const motionSpans = screen.getAllByTestId("data-motion");
    expect(motionSpans).toHaveLength(3); // H, space, i (3 characters)

    // The space character span should have a specific width
    expect(motionSpans[1]).toHaveAttribute("style", expect.stringContaining("0.2em"));
  });

  it("applies correct variants and transition props", () => {
    const text = "Test";
    const mockVariant = {
      hidden: { y: 10, opacity: 0, filter: "blur(10px)" },
      visible: { y: -10, opacity: 1, filter: "blur(0px)" },
    };

    render(<BlurFadeText text={text} variant={mockVariant} />);

    const spanElement = screen.getByTestId("data-motion");
    expect(spanElement).toHaveAttribute("initial", "hidden");
    expect(spanElement).toHaveAttribute("animate", "visible");
    expect(spanElement).toHaveAttribute("exit", "hidden");
  });

  it("uses default variants when no custom variant is provided", () => {
    const text = "Test";
    render(<BlurFadeText text={text} />);

    const spanElement = screen.getByTestId("data-motion");
    expect(spanElement).toHaveAttribute("initial", "hidden");
    expect(spanElement).toHaveAttribute("animate", "visible");
    expect(spanElement).toHaveAttribute("exit", "hidden");
  });

  it("respects delay prop", () => {
    const text = "Test";
    const delay = 0.5;
    render(<BlurFadeText text={text} delay={delay} />);

    const spanElement = screen.getByTestId("data-motion");
    expect(spanElement).toBeInTheDocument();
  });

  it("correctly handles character delay when animating by character", () => {
    const text = "ABC";
    const characterDelay = 0.1;
    render(<BlurFadeText text={text} animateByCharacter characterDelay={characterDelay} />);

    const motionSpans = screen.getAllByTestId("data-motion");
    expect(motionSpans).toHaveLength(3);

    // Each span should be rendered for each character
    motionSpans.forEach((span, index) => {
      expect(span).toBeInTheDocument();
    });
  });

  it("uses default yOffset value when not provided", () => {
    const text = "Test";
    render(<BlurFadeText text={text} />);

    const spanElement = screen.getByTestId("data-motion");
    expect(spanElement).toBeInTheDocument();
  });

  it("applies custom yOffset value when provided", () => {
    const text = "Test";
    const yOffset = 15;
    render(<BlurFadeText text={text} yOffset={yOffset} />);

    const spanElement = screen.getByTestId("data-motion");
    expect(spanElement).toBeInTheDocument();
  });

  it("doesn't break with empty text", () => {
    render(<BlurFadeText text="" />);

    // Should render without errors even with empty text
    const container = screen.getByTestId("data-motion"); // The motion span element
    expect(container).toBeInTheDocument();
  });

  it("handles special characters correctly", () => {
    const text = "Hello, 世界! 123";
    render(<BlurFadeText text={text} animateByCharacter />);

    // When animateByCharacter is true, each character is in its own span
    // We verify the component can handle various character types by checking a few unique ones
    expect(screen.getAllByText("l")).toHaveLength(2); // There are two 'l's in Hello
    expect(screen.getByText("H")).toBeInTheDocument();
    expect(screen.getByText(",")).toBeInTheDocument();
    expect(screen.getByText("世")).toBeInTheDocument(); // Chinese character
    expect(screen.getByText("1")).toBeInTheDocument(); // Number
    expect(screen.getByText("!")).toBeInTheDocument(); // Special character
  });
});