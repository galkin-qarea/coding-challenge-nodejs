/**
 *
 * Given is the following FizzBuzz application which counts from 1 to 100 and outputs either the
 * corresponding number or the corresponding text if one of the following rules apply.
 *
 * Rules:
 *  - dividable by 3 without a remainder -> Fizz
 *  - dividable by 5 without a remainder -> Buzz
 *  - dividable by 3 and 5 without a remainder -> FizzBuzz
 *
 * ACCEPTANCE CRITERIA:
 *
 * Please refactor this code so that it can be easily extended with other rules, such as
 * - "if it is dividable by 7 without a remainder output Bar"
 * - "if multiplied by 10 is larger than 100 output Foo"
 */

const { apply_rules } = require("./rule");

const rules = [
  {
    check: x => x % 3 === 0,
    result: "Fizz"
  },
  {
    check: x => x % 5 === 0,
    result: "Buzz"
  },
  {
    check: x => x % 7 === 0,
    result: "Bar"
  },
  {
    check: x => x * 10 > 100,
    result: "Foo"
  }
];

function fizzbuzz(limit = 100) {
  for (let i = 1; i <= limit; i++) {
    let output = apply_rules(rules, i)
    console.log(`${i}: ${output}`)
  }
}

fizzbuzz()
