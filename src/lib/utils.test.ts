import { cn, formatDate } from "./utils";

describe("utils", () => {
  describe("cn", () => {
    it("should merge class names correctly", () => {
      const result = cn("text-red", "bg-blue");
      expect(result).toBe("text-red bg-blue");
    });

    it("should handle conditional classes", () => {
      const result = cn("text-red", false && "bg-blue", true && "text-lg");
      expect(result).toBe("text-red text-lg");
    });

    it("should handle undefined and null values", () => {
      const result = cn("text-red", undefined, null, "bg-blue");
      expect(result).toBe("text-red bg-blue");
    });

    it("should merge Tailwind classes with conflicts", () => {
      // Testing that twMerge properly handles conflicting classes
      const result = cn("text-sm", "text-lg");
      expect(result).toBe("text-lg"); // The latter class should take precedence
    });
  });

  describe("formatDate", () => {
    // Mock the current date to have consistent tests
    beforeEach(() => {
      const mockDate = new Date("2023-10-15T10:00:00Z");
      jest.useFakeTimers();
      jest.setSystemTime(mockDate);
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it("should return 'Today' for the current date", () => {
      const result = formatDate("2023-10-15");
      expect(result).toBe("Today");
    });

    it("should correctly format a date within a week", () => {
      const result = formatDate("2023-10-10"); // 5 days ago
      expect(result).toBe("October 10, 2023 (5d ago)");
    });

    it("should correctly format a date within a week with full datetime", () => {
      const result = formatDate("2023-10-12T10:00:00"); // 3 days ago
      expect(result).toBe("October 12, 2023 (3d ago)");
    });

    it("should correctly format a date within a month", () => {
      const result = formatDate("2023-09-30"); // 2 weeks ago (15 days ago)
      expect(result).toBe("September 30, 2023 (2w ago)");
    });

    it("should correctly format a date within a year", () => {
      const result = formatDate("2023-06-15"); // about 4 months ago
      expect(result).toBe("June 15, 2023 (4mo ago)");
    });

    it("should correctly format a date more than a year ago", () => {
      const result = formatDate("2022-05-15"); // over a year ago
      expect(result).toBe("May 15, 2022 (1y ago)");
    });

    it("should handle dates with different formatting", () => {
      const result = formatDate("2023-08-01");
      expect(result).toBe("August 1, 2023 (2mo ago)"); // ~2 months ago (75 days)
    });

    it("should add time component for date strings without time", () => {
      const result = formatDate("2023-10-14");
      expect(result).toBe("October 14, 2023 (1d ago)");
    });
  });
});