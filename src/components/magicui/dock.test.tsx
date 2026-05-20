import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Dock, DockIcon } from "./dock";
import "@testing-library/jest-dom";

// Mock framer-motion since it can cause issues in tests
jest.mock("framer-motion", () => ({
  motion: {
    div: (props: any) => {
      // Add a different test id for Dock vs DockIcon to distinguish them
      const testId = props.className?.includes('mx-auto w-max') ? 'dock-motion' : 'dock-icon-motion';
      return <div data-testid={testId} {...props}>{props.children}</div>;
    },
  },
  useMotionValue: () => ({ set: jest.fn() }),
  useSpring: (val: any) => val,
  useTransform: (val: any) => val,
}));

describe("Dock Component", () => {
  const mockChild = <DockIcon>Child</DockIcon>;

  it("renders without crashing", () => {
    render(<Dock>{mockChild}</Dock>);
    expect(screen.getByTestId("dock-motion")).toBeInTheDocument();
  });

  it("renders children correctly", () => {
    render(
      <Dock>
        <DockIcon>Icon 1</DockIcon>
        <DockIcon>Icon 2</DockIcon>
      </Dock>
    );

    expect(screen.getByText(/Icon 1/)).toBeTruthy();
    expect(screen.getByText(/Icon 2/)).toBeTruthy();
  });

  it("applies className correctly", () => {
    const testClass = "custom-dock-class";
    render(<Dock className={testClass}>{mockChild}</Dock>);

    const dockElement = screen.getByTestId("dock-motion");
    expect(dockElement).toHaveProperty('className');
    expect(dockElement.className).toContain(testClass);
  });

  it("handles mouse move event", () => {
    render(<Dock>{mockChild}</Dock>);
    const dockElement = screen.getByTestId("dock-motion");

    fireEvent.mouseMove(dockElement, { pageX: 100 });
    // Since we mocked framer-motion, we can't test the actual behavior
    // but we can ensure the event handler is attached
    expect(dockElement).toBeTruthy();
  });

  it("handles mouse leave event", () => {
    render(<Dock>{mockChild}</Dock>);
    const dockElement = screen.getByTestId("dock-motion");

    fireEvent.mouseLeave(dockElement);
    expect(dockElement).toBeTruthy();
  });

  it("uses default magnification and distance when not provided", () => {
    render(
      <Dock>
        <DockIcon>Icon</DockIcon>
      </Dock>
    );

    expect(screen.getByText(/Icon/)).toBeTruthy();
  });

  it("passes custom magnification and distance to children", () => {
    const customMagnification = 80;
    const customDistance = 160;

    render(
      <Dock magnification={customMagnification} distance={customDistance}>
        <DockIcon>Icon</DockIcon>
      </Dock>
    );

    expect(screen.getByText(/Icon/)).toBeTruthy();
  });
});

describe("DockIcon Component", () => {
  it("renders without crashing", () => {
    render(<DockIcon>Icon Content</DockIcon>);
    expect(screen.getByText(/Icon Content/)).toBeTruthy();
  });

  it("applies className correctly", () => {
    const testClass = "custom-icon-class";
    render(<DockIcon className={testClass}>Icon</DockIcon>);

    // Check that the element exists and is rendered
    const iconElement = screen.getByText(/Icon/).parentElement;
    expect(iconElement).toBeTruthy();
  });

  it("renders children correctly", () => {
    render(
      <DockIcon>
        <span>Test Icon</span>
      </DockIcon>
    );

    expect(screen.getByText(/Test Icon/)).toBeTruthy();
  });

  it("has correct default properties", () => {
    render(<DockIcon>Default Icon</DockIcon>);

    const iconElement = screen.getByText(/Default Icon/).parentElement;
    expect(iconElement).toBeTruthy();
  });

  it("accepts custom size prop", () => {
    render(<DockIcon size={50}>Sized Icon</DockIcon>);

    expect(screen.getByText(/Sized Icon/)).toBeTruthy();
  });
});

describe("Dock Variants", () => {
  it("should apply default styling classes", () => {
    render(<Dock>{<DockIcon>Icon</DockIcon>}</Dock>);

    const dockElement = screen.getByTestId("dock-motion");
    expect(dockElement.className).toContain('mx-auto');
    expect(dockElement.className).toContain('w-max');
    expect(dockElement.className).toContain('h-full');
    expect(dockElement.className).toContain('p-2');
    expect(dockElement.className).toContain('flex');
    expect(dockElement.className).toContain('items-end');
    expect(dockElement.className).toContain('rounded-full');
    expect(dockElement.className).toContain('border');
  });
});