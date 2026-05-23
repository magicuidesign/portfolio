import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { globalComponents } from "./mdx";

// Mock Next.js components
jest.mock("next/link", () => {
  return function MockLink(props: any) {
    return <a href={props.href} {...props}>{props.children}</a>;
  };
});

jest.mock("next/image", () => {
  return function MockImage(props: any) {
    return <img alt={props.alt} className={props.className} {...props} />;
  };
});

describe("MDX Components", () => {
  describe("Table", () => {
    it("renders table with headers and rows", () => {
      const data = {
        headers: ["Name", "Age", "City"],
        rows: [
          ["John", "25", "New York"],
          ["Jane", "30", "Los Angeles"],
        ],
      };

      render(React.createElement(globalComponents.Table, { data }));

      // Check headers
      expect(screen.getByText("Name")).toBeInTheDocument();
      expect(screen.getByText("Age")).toBeInTheDocument();
      expect(screen.getByText("City")).toBeInTheDocument();

      // Check rows
      expect(screen.getByText("John")).toBeInTheDocument();
      expect(screen.getByText("25")).toBeInTheDocument();
      expect(screen.getByText("New York")).toBeInTheDocument();
      expect(screen.getByText("Jane")).toBeInTheDocument();
      expect(screen.getByText("30")).toBeInTheDocument();
      expect(screen.getByText("Los Angeles")).toBeInTheDocument();

      // Check table structure
      const table = screen.getByRole("table");
      expect(table).toBeInTheDocument();

      const headers = screen.getAllByRole("columnheader");
      expect(headers).toHaveLength(3);

      const rows = screen.getAllByRole("row");
      expect(rows).toHaveLength(3); // 1 header row + 2 data rows
    });

    it("handles empty table data", () => {
      const data = {
        headers: [],
        rows: [],
      };

      render(React.createElement(globalComponents.Table, { data }));

      const table = screen.getByRole("table");
      expect(table).toBeInTheDocument();
      expect(table.querySelector("thead")).toBeInTheDocument();
      expect(table.querySelector("tbody")).toBeInTheDocument();
    });
  });

  describe("CustomLink", () => {
    it("renders internal links with Next.js Link component", () => {
      const props = {
        href: "/internal-page",
        children: "Internal Link",
      };

      render(React.createElement(globalComponents.a, props));

      const link = screen.getByRole("link", { name: "Internal Link" });
      expect(link).toBeInTheDocument();
      expect(link.getAttribute("href")).toBe("/internal-page");
      // Since we're mocking Link to render as <a>, it should have the href
    });

    it("renders anchor links normally", () => {
      const props = {
        href: "#section",
        children: "Anchor Link",
      };

      render(React.createElement(globalComponents.a, props));

      const link = screen.getByRole("link", { name: "Anchor Link" });
      expect(link).toBeInTheDocument();
      expect(link.getAttribute("href")).toBe("#section");
    });

    it("renders external links with target blank and rel noopener noreferrer", () => {
      const props = {
        href: "https://external-site.com",
        children: "External Link",
      };

      render(React.createElement(globalComponents.a, props));

      const link = screen.getByRole("link", { name: "External Link" });
      expect(link).toBeInTheDocument();
      expect(link.getAttribute("href")).toBe("https://external-site.com");
      expect(link.getAttribute("target")).toBe("_blank");
      expect(link.getAttribute("rel")).toBe("noopener noreferrer");
    });
  });

  describe("RoundedImage", () => {
    it("renders image with rounded class and correct alt text", () => {
      const props = {
        src: "/test-image.jpg",
        alt: "Test Image",
        width: 100,
        height: 100,
      };

      render(React.createElement(globalComponents.Image, props));

      const image = screen.getByRole("img", { name: "Test Image" });
      expect(image).toBeInTheDocument();
      expect(image.getAttribute("src")).toBe("/test-image.jpg");
      expect(image.getAttribute("class")).toContain("rounded-lg");
      expect(image.getAttribute("width")).toBe("100");
      expect(image.getAttribute("height")).toBe("100");
    });

    it("applies rounded-lg class by default", () => {
      const props = {
        src: "/another-image.jpg",
        alt: "Another Image",
      };

      render(React.createElement(globalComponents.Image, props));

      const image = screen.getByRole("img", { name: "Another Image" });
      expect(image.getAttribute("class")).toContain("rounded-lg");
    });
  });

  describe("Headings", () => {
    const testHeading = (level: number, text: string) => {
      it(`renders h${level} with slug and anchor link`, () => {
        const HeadingComponent = globalComponents[`h${level}`] as React.ComponentType<{ children: React.ReactNode }>;

        render(React.createElement(HeadingComponent, {}, text));

        const heading = screen.getByRole("heading", { level });
        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toBe(text);

        // Check that the anchor link is present
        const anchorLink = screen.getByRole("link");
        expect(anchorLink).toBeInTheDocument();
        expect(anchorLink.getAttribute("href")).toBe(`#${text.toLowerCase().replace(/\s+/g, "-")}`);
        expect(anchorLink.getAttribute("class")).toBe("anchor");
      });
    };

    testHeading(1, "Main Title");
    testHeading(2, "Section Header");
    testHeading(3, "Subsection Header");
    testHeading(4, "Fourth Level Header");
    testHeading(5, "Fifth Level Header");
    testHeading(6, "Sixth Level Header");

    it("handles special characters in heading text for slug generation", () => {
      const HeadingComponent = globalComponents.h2 as React.ComponentType<{ children: React.ReactNode }>;

      render(React.createElement(HeadingComponent, {}, "Header with & and symbols!"));

      const heading = screen.getByRole("heading", { level: 2 });
      expect(heading).toBeInTheDocument();
      expect(heading.textContent).toBe("Header with & and symbols!");

      const anchorLink = screen.getByRole("link");
      expect(anchorLink.getAttribute("href")).toBe("#header-with-and-and-symbols");
    });
  });

  describe("Component Registration", () => {
    it("exports all expected components", () => {
      expect(globalComponents.h1).toBeDefined();
      expect(globalComponents.h2).toBeDefined();
      expect(globalComponents.h3).toBeDefined();
      expect(globalComponents.h4).toBeDefined();
      expect(globalComponents.h5).toBeDefined();
      expect(globalComponents.h6).toBeDefined();
      expect(globalComponents.Image).toBeDefined();
      expect(globalComponents.a).toBeDefined();
      expect(globalComponents.Table).toBeDefined();
    });

    it("has correct display names for heading components", () => {
      expect((globalComponents.h1 as any).displayName).toBe("Heading1");
      expect((globalComponents.h2 as any).displayName).toBe("Heading2");
      expect((globalComponents.h3 as any).displayName).toBe("Heading3");
      expect((globalComponents.h4 as any).displayName).toBe("Heading4");
      expect((globalComponents.h5 as any).displayName).toBe("Heading5");
      expect((globalComponents.h6 as any).displayName).toBe("Heading6");
    });
  });
});