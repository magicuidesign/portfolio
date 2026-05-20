import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Mock framer-motion components before importing the component
jest.mock("framer-motion", () => {
  const mockUseInView = jest.fn(() => false);
  return {
    AnimatePresence: ({ children }: any) => <>{children}</>,
    motion: {
      div: (props: any) => {
        const { children } = props;
        const rest = Object.keys(props).reduce((acc, key) => {
          if (key !== 'children') {
            acc[key] = props[key];
          }
          return acc;
        }, {});
        return <div data-testid="motion-div" {...rest}>{children}</div>;
      },
    },
    useInView: mockUseInView,
  };
});

import BlurFade from "./blur-fade";
import { useInView } from "framer-motion";

describe("BlurFade Component", () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
  });

  it("renders children correctly", () => {
    const testId = "test-child";
    render(
      <BlurFade>
        <div data-testid={testId}>Test Content</div>
      </BlurFade>
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  it("applies default props correctly", () => {
    render(
      <BlurFade>
        <div>Test Content</div>
      </BlurFade>
    );

    const motionDiv = screen.getByTestId("motion-div");
    expect(motionDiv).toBeInTheDocument();
  });

  it("uses correct default variants", () => {
    (useInView as any).mockReturnValue(false);

    render(
      <BlurFade>
        <div>Test Content</div>
      </BlurFade>
    );

    const motionDiv = screen.getByTestId("motion-div");
    expect(motionDiv).toHaveAttribute("initial", "hidden");
  });

  it("applies custom className", () => {
    const testClass = "custom-class";
    render(
      <BlurFade className={testClass}>
        <div>Test Content</div>
      </BlurFade>
    );

    const motionDiv = screen.getByTestId("motion-div");
    expect(motionDiv).toHaveClass(testClass);
  });

  it("accepts custom variant prop", () => {
    const customVariant = {
      hidden: { y: 10 },
      visible: { y: -10 },
    };

    render(
      <BlurFade variant={customVariant}>
        <div>Test Content</div>
      </BlurFade>
    );

    const motionDiv = screen.getByTestId("motion-div");
    expect(motionDiv).toBeInTheDocument();
  });

  it("uses default duration when not provided", () => {
    render(
      <BlurFade>
        <div>Test Content</div>
      </BlurFade>
    );

    const motionDiv = screen.getByTestId("motion-div");
    expect(motionDiv).toBeInTheDocument();
    // The component should use the default duration of 0.4
  });

  it("accepts custom duration prop", () => {
    const customDuration = 0.8;

    render(
      <BlurFade duration={customDuration}>
        <div>Test Content</div>
      </BlurFade>
    );

    const motionDiv = screen.getByTestId("motion-div");
    expect(motionDiv).toBeInTheDocument();
  });

  it("accepts custom delay prop", () => {
    const customDelay = 0.2;

    render(
      <BlurFade delay={customDelay}>
        <div>Test Content</div>
      </BlurFade>
    );

    const motionDiv = screen.getByTestId("motion-div");
    expect(motionDiv).toBeInTheDocument();
  });

  it("accepts custom yOffset prop", () => {
    const customYOffset = 10;

    render(
      <BlurFade yOffset={customYOffset}>
        <div>Test Content</div>
      </BlurFade>
    );

    const motionDiv = screen.getByTestId("motion-div");
    expect(motionDiv).toBeInTheDocument();
  });

  it("accepts custom blur prop", () => {
    const customBlur = "8px";

    render(
      <BlurFade blur={customBlur}>
        <div>Test Content</div>
      </BlurFade>
    );

    const motionDiv = screen.getByTestId("motion-div");
    expect(motionDiv).toBeInTheDocument();
  });

  it("handles inView functionality when inView is true", () => {
    (useInView as any).mockReturnValue(true);

    render(
      <BlurFade inView={true}>
        <div>Test Content</div>
      </BlurFade>
    );

    const motionDiv = screen.getByTestId("motion-div");
    expect(motionDiv).toBeInTheDocument();
  });

  it("handles inView functionality when inView is false", () => {
    (useInView as any).mockReturnValue(false);

    render(
      <BlurFade inView={false}>
        <div>Test Content</div>
      </BlurFade>
    );

    const motionDiv = screen.getByTestId("motion-div");
    expect(motionDiv).toBeInTheDocument();
  });

  it("renders with multiple children", () => {
    render(
      <BlurFade>
        <div data-testid="child-1">Child 1</div>
        <div data-testid="child-2">Child 2</div>
      </BlurFade>
    );

    expect(screen.getByTestId("child-1")).toBeInTheDocument();
    expect(screen.getByTestId("child-2")).toBeInTheDocument();
  });

  it("preserves child props", () => {
    const childTestId = "special-child";
    const childClassName = "special-class";

    render(
      <BlurFade>
        <div data-testid={childTestId} className={childClassName}>
          Special Child
        </div>
      </BlurFade>
    );

    const childElement = screen.getByTestId(childTestId);
    expect(childElement).toHaveClass(childClassName);
  });
});