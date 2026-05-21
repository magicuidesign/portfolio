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
});