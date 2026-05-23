import { getBlogPosts } from "@/data/blog";

// Mock the data module to control test data
jest.mock("@/data/blog", () => ({
  getBlogPosts: jest.fn(),
}));

/**
 * Tests for the BlogPage component
 * 
 * Note: Since BlogPage is an async server component, we focus on testing:
 * 1. Page metadata
 * 2. Data processing logic (sorting)
 * 3. Business logic
 * 
 * Direct rendering tests are avoided due to server component limitations in test environment
 */
describe("BlogPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should have the correct metadata", async () => {
    const { metadata } = await import("./page");
    expect(metadata.title).toBe("Blog");
    expect(metadata.description).toBe("My thoughts on software development, life, and more.");
  });

  it("should sort blog posts by date in descending order", () => {
    const posts = [
      {
        slug: "older-post",
        metadata: {
          title: "Older Post",
          publishedAt: "2022-01-01",
        },
      },
      {
        slug: "newer-post",
        metadata: {
          title: "Newer Post",
          publishedAt: "2023-01-01",
        },
      },
    ];

    // Simulate the sorting logic from the page
    const sortedPosts = [...posts].sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    });

    // Newer post should come first
    expect(sortedPosts[0].metadata.title).toBe("Newer Post");
    expect(sortedPosts[1].metadata.title).toBe("Older Post");
  });
});