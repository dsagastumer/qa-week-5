import { describe, it, expect } from "vitest";
import { isEven } from "../src/isEven.js";

describe("isEven function", () => {
  it("should return true for even numbers", () => {
    expect(isEven(4)).toBe(true);
  });

  it("should return false for odd numbers", () => {
    expect(isEven(5)).toBe(false);
  });
});
