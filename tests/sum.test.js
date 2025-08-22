import { describe, it, expect } from "vitest";
import { sum } from "../src/sum.js";

describe("sum function", () => {
  it("should add two numbers", () => {
    expect(sum(3, 3)).toBe(6);
  });
});
