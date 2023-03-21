const { apply_rules } = require("./rule.js");

describe("rule", () => {
  describe("apply_rules", () => {

    test("applies matching rule", () => {
      const rules = [
        {
          check: (x) => x % 2 === 0,
          result: "fizz"
        }
      ];
      expect(apply_rules(rules, 2)).toBe("fizz");
    });

    test("does not apply rules that don't match and defaults to original value", () => {
      const rules = [
        {
          check: (x) => x % 2 === 0,
          result: "fizz"
        }
      ];
      expect(apply_rules(rules, 3)).toBe("3");
    });

    test("applies multiple rules appending multiple matched results in order", () => {
      const rules = [
        {
          check: (x) => x % 2 === 0,
          result: "fizz"
        },
        {
          check: (x) => x % 3 === 0,
          result: "buzz"
        }
      ];

      expect(apply_rules(rules, 2)).toBe("fizz");
      expect(apply_rules(rules, 3)).toBe("buzz");
      expect(apply_rules(rules, 6)).toBe("fizzbuzz");
      expect(apply_rules(rules, 7)).toBe("7");
    });
  });
});
