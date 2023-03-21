const { build } = require("./builder");

describe("builder", () => {
  describe("build", () => {
    test("handles invalid height", () => {
      expect(build(0)).toBe("");
      expect(build(-1)).toBe("");
      expect(build(.25)).toBe("");
    });

    test("trivial height", () => {
      expect(build(1)).toBe("*")
    });

    test("even height", () => {
      const expected = ` *
***`;
      expect(build(2)).toBe(expected);
    });

    test("odd height", () => {
      const expected = `  *
 ***
*****`;
      expect(build(3)).toBe(expected);
    });
  });
});
