import * as React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./card";

describe("Card Components", () => {
  describe("Card", () => {
    it("renders correctly with default props", () => {
      render(<Card data-testid="test-card">Card content</Card>);
      const cardElement = screen.getByTestId("test-card");
      expect(cardElement).toBeInTheDocument();
      expect(cardElement).toHaveClass("rounded-lg");
      expect(cardElement).toHaveClass("bg-card");
      expect(cardElement).toHaveClass("text-card-foreground");
    });

    it("applies custom className", () => {
      render(<Card className="custom-class" data-testid="test-card">Card content</Card>);
      const cardElement = screen.getByTestId("test-card");
      expect(cardElement).toHaveClass("custom-class");
    });

    it("forwards ref correctly", () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<Card ref={ref}>Card content</Card>);
      expect(ref.current).not.toBeNull();
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it("spreads additional props", () => {
      render(
        <Card data-testid="test-card" id="unique-id">
          Card content
        </Card>
      );
      const cardElement = screen.getByTestId("test-card");
      expect(cardElement).toHaveAttribute("id", "unique-id");
    });
  });

  describe("CardHeader", () => {
    it("renders correctly with default props", () => {
      render(<CardHeader>Header content</CardHeader>);
      const headerElement = screen.getByText("Header content");
      expect(headerElement).toBeInTheDocument();
      expect(headerElement).toHaveClass("flex");
      expect(headerElement).toHaveClass("flex-col");
    });

    it("applies custom className", () => {
      render(<CardHeader className="custom-header">Header content</CardHeader>);
      const headerElement = screen.getByText("Header content");
      expect(headerElement).toHaveClass("custom-header");
    });

    it("forwards ref correctly", () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<CardHeader ref={ref}>Header content</CardHeader>);
      expect(ref.current).not.toBeNull();
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it("spreads additional props", () => {
      render(
        <CardHeader data-testid="test-header" id="header-id">
          Header content
        </CardHeader>
      );
      const headerElement = screen.getByTestId("test-header");
      expect(headerElement).toHaveAttribute("id", "header-id");
    });
  });

  describe("CardTitle", () => {
    it("renders as an h3 element with default props", () => {
      render(<CardTitle>Title text</CardTitle>);
      const titleElement = screen.getByRole("heading", { level: 3 });
      expect(titleElement).toBeInTheDocument();
      expect(titleElement.tagName).toBe("H3");
      expect(titleElement).toHaveTextContent("Title text");
    });

    it("applies default title classes", () => {
      render(<CardTitle>Title text</CardTitle>);
      const titleElement = screen.getByRole("heading", { level: 3 });
      expect(titleElement).toHaveClass("text-2xl");
      expect(titleElement).toHaveClass("font-semibold");
      expect(titleElement).toHaveClass("leading-none");
      expect(titleElement).toHaveClass("tracking-tight");
    });

    it("applies custom className", () => {
      render(<CardTitle className="custom-title">Title text</CardTitle>);
      const titleElement = screen.getByRole("heading", { level: 3 });
      expect(titleElement).toHaveClass("custom-title");
    });

    it("forwards ref correctly", () => {
      const ref = React.createRef<HTMLHeadingElement>();
      render(<CardTitle ref={ref}>Title text</CardTitle>);
      expect(ref.current).not.toBeNull();
      expect(ref.current).toBeInstanceOf(HTMLHeadingElement);
    });

    it("spreads additional props", () => {
      render(
        <CardTitle data-testid="test-title" id="title-id">
          Title text
        </CardTitle>
      );
      const titleElement = screen.getByTestId("test-title");
      expect(titleElement).toHaveAttribute("id", "title-id");
    });
  });

  describe("CardDescription", () => {
    it("renders as a p element with default props", () => {
      render(<CardDescription>Description text</CardDescription>);
      const descriptionElement = screen.getByText("Description text");
      expect(descriptionElement).toBeInTheDocument();
      expect(descriptionElement.tagName).toBe("P");
    });

    it("applies default description classes", () => {
      render(<CardDescription>Description text</CardDescription>);
      const descriptionElement = screen.getByText("Description text");
      expect(descriptionElement).toHaveClass("text-sm");
      expect(descriptionElement).toHaveClass("text-muted-foreground");
    });

    it("applies custom className", () => {
      render(
        <CardDescription className="custom-description">
          Description text
        </CardDescription>
      );
      const descriptionElement = screen.getByText("Description text");
      expect(descriptionElement).toHaveClass("custom-description");
    });

    it("forwards ref correctly", () => {
      const ref = React.createRef<HTMLParagraphElement>();
      render(<CardDescription ref={ref}>Description text</CardDescription>);
      expect(ref.current).not.toBeNull();
      expect(ref.current).toBeInstanceOf(HTMLParagraphElement);
    });

    it("spreads additional props", () => {
      render(
        <CardDescription data-testid="test-description" id="desc-id">
          Description text
        </CardDescription>
      );
      const descriptionElement = screen.getByTestId("test-description");
      expect(descriptionElement).toHaveAttribute("id", "desc-id");
    });
  });

  describe("CardContent", () => {
    it("renders correctly with default props", () => {
      render(<CardContent>Content text</CardContent>);
      const contentElement = screen.getByText("Content text");
      expect(contentElement).toBeInTheDocument();
      expect(contentElement).toHaveClass("text-pretty");
      expect(contentElement).toHaveClass("font-sans");
      expect(contentElement).toHaveClass("text-sm");
      expect(contentElement).toHaveClass("text-muted-foreground");
    });

    it("applies custom className", () => {
      render(<CardContent className="custom-content">Content text</CardContent>);
      const contentElement = screen.getByText("Content text");
      expect(contentElement).toHaveClass("custom-content");
    });

    it("forwards ref correctly", () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<CardContent ref={ref}>Content text</CardContent>);
      expect(ref.current).not.toBeNull();
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it("spreads additional props", () => {
      render(
        <CardContent data-testid="test-content" id="content-id">
          Content text
        </CardContent>
      );
      const contentElement = screen.getByTestId("test-content");
      expect(contentElement).toHaveAttribute("id", "content-id");
    });
  });

  describe("CardFooter", () => {
    it("renders correctly with default props", () => {
      render(<CardFooter>Footer content</CardFooter>);
      const footerElement = screen.getByText("Footer content");
      expect(footerElement).toBeInTheDocument();
      expect(footerElement).toHaveClass("flex");
      expect(footerElement).toHaveClass("items-center");
      expect(footerElement).toHaveClass("pt-2");
    });

    it("applies custom className", () => {
      render(<CardFooter className="custom-footer">Footer content</CardFooter>);
      const footerElement = screen.getByText("Footer content");
      expect(footerElement).toHaveClass("custom-footer");
    });

    it("forwards ref correctly", () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<CardFooter ref={ref}>Footer content</CardFooter>);
      expect(ref.current).not.toBeNull();
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it("spreads additional props", () => {
      render(
        <CardFooter data-testid="test-footer" id="footer-id">
          Footer content
        </CardFooter>
      );
      const footerElement = screen.getByTestId("test-footer");
      expect(footerElement).toHaveAttribute("id", "footer-id");
    });
  });

  // Integration test for all components together
  describe("Card Components Integration", () => {
    it("works together in a complete Card", () => {
      render(
        <Card data-testid="complete-card">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>Card Content</CardContent>
          <CardFooter>Card Footer</CardFooter>
        </Card>
      );

      expect(screen.getByTestId("complete-card")).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 3, name: "Card Title" })).toBeInTheDocument();
      expect(screen.getByText("Card Description")).toBeInTheDocument();
      expect(screen.getByText("Card Content")).toBeInTheDocument();
      expect(screen.getByText("Card Footer")).toBeInTheDocument();
    });
  });
});