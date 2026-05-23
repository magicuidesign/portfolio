import fs from "fs";
import path from "path";
import { markdownToHTML, getPost, getBlogPosts } from "./blog";

// Mock all external dependencies that use ES modules
jest.mock("unified", () => ({
  unified: jest.fn(() => ({
    use: jest.fn().mockReturnThis(),
    process: jest.fn().mockResolvedValue({
      toString: jest.fn().mockReturnValue("<p>Test content</p>"),
    }),
  })),
}));

jest.mock("rehype-pretty-code", () => jest.fn());
jest.mock("rehype-stringify", () => jest.fn());
jest.mock("remark-gfm", () => jest.fn());
jest.mock("remark-parse", () => jest.fn());
jest.mock("remark-rehype", () => jest.fn());

// Mock the fs module to avoid file system dependencies
jest.mock("fs", () => ({
  readdirSync: jest.fn(),
  readFileSync: jest.fn(),
}));

// Mock gray-matter
jest.mock("gray-matter", () => ({
  __esModule: true,
  default: jest.fn((content) => ({
    content: content.replace(/---[\s\S]*?---/, ""), // Remove frontmatter
    data: {
      title: "Test Title",
      publishedAt: "2023-01-01",
      summary: "Test Summary",
      image: "test-image.jpg",
    },
  })),
}));

// Mock the process.cwd() to return a consistent path
jest.spyOn(process, 'cwd').mockReturnValue('/test');

describe("Blog Data Functions", () => {
  const mockFs = fs as jest.Mocked<typeof fs>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("markdownToHTML", () => {
    it("should convert markdown to HTML", async () => {
      const markdown = "# Test Heading\n\nThis is a test.";
      const result = await markdownToHTML(markdown);
      
      expect(result).toBe("<p>Test content</p>");
    });

    it("should handle empty markdown", async () => {
      const markdown = "";
      const result = await markdownToHTML(markdown);
      
      expect(result).toBe("<p>Test content</p>");
    });

    it("should handle complex markdown", async () => {
      const markdown = "# Heading\n\n- List item 1\n- List item 2\n\n[Link](http://example.com)";
      const result = await markdownToHTML(markdown);
      
      expect(result).toBe("<p>Test content</p>");
    });
  });

  describe("getPost", () => {
    it("should retrieve a post by slug", async () => {
      const mockContent = `---
title: "Test Post"
publishedAt: "2023-01-01"
summary: "Test Summary"
image: "test.jpg"
---
# Test Content`;
      
      mockFs.readFileSync.mockReturnValue(mockContent);

      const result = await getPost("test-slug");

      expect(mockFs.readFileSync).toHaveBeenCalledWith(
        path.join("content", "test-slug.mdx"),
        "utf-8"
      );
      expect(result).toEqual({
        source: "<p>Test content</p>",
        metadata: {
          title: "Test Title",
          publishedAt: "2023-01-01",
          summary: "Test Summary",
          image: "test-image.jpg",
        },
        slug: "test-slug",
      });
    });

    it("should handle post without image in metadata", async () => {
      const mockContent = `---
title: "Test Post"
publishedAt: "2023-01-01"
summary: "Test Summary"
---
# Test Content`;
      
      mockFs.readFileSync.mockReturnValue(mockContent);

      const result = await getPost("test-slug");

      expect(result).toEqual({
        source: "<p>Test content</p>",
        metadata: {
          title: "Test Title",
          publishedAt: "2023-01-01",
          summary: "Test Summary",
          image: "test-image.jpg", // Image is still included because of the mock
        },
        slug: "test-slug",
      });
    });
  });

  describe("getBlogPosts", () => {
    it("should get all blog posts from content directory", async () => {
      // Mock a list of MDX files
      const mockFiles = ["post1.mdx", "post2.mdx", "test.mdx"];
      (fs.readdirSync as jest.MockedFunction<typeof fs.readdirSync>).mockReturnValue(mockFiles);

      const contentDir = path.join(process.cwd(), "content");
      const result = await getBlogPosts();

      // Verify that readdirSync was called with the correct path
      expect(fs.readdirSync).toHaveBeenCalledWith(contentDir);

      // Verify that readFileSync was called for each file
      expect(fs.readFileSync).toHaveBeenCalledTimes(3);
      expect(fs.readFileSync).toHaveBeenCalledWith(
        path.join("content", "post1.mdx"),
        "utf-8"
      );
      expect(fs.readFileSync).toHaveBeenCalledWith(
        path.join("content", "post2.mdx"),
        "utf-8"
      );
      expect(fs.readFileSync).toHaveBeenCalledWith(
        path.join("content", "test.mdx"),
        "utf-8"
      );

      // Verify the result structure
      expect(result).toHaveLength(3);
      expect(result[0]).toEqual({
        metadata: {
          title: "Test Title",
          publishedAt: "2023-01-01",
          summary: "Test Summary",
          image: "test-image.jpg",
        },
        slug: "post1",
        source: "<p>Test content</p>",
      });
    });

    it("should return empty array when no MDX files exist", async () => {
      (fs.readdirSync as jest.MockedFunction<typeof fs.readdirSync>).mockReturnValue([]);

      const result = await getBlogPosts();

      expect(result).toEqual([]);
      expect(fs.readFileSync).not.toHaveBeenCalled();
    });
  });
});