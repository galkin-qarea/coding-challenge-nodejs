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

function fizzbuzz(limit = 100) {
  for (let i = 1; i <= limit; i++) {
    let output = ""
    if (i % 3 === 0) {
      output += "Fizz"
    }
    if (i % 5 === 0) {
      output += "Buzz"
    }
    if (output === "") {
      output = `${i}`
    }
    console.log(`${i}: ${output}`)
  }
}

fizzbuzz()
