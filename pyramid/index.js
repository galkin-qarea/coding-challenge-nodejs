/**

Print a pyramid!

    *
   ***
  *****
 *******
*********

ACCEPTANCE CRITERIA:

Write a script to output pyramid of given size to the console (with leading spaces).

*/

const { build } = require("./builder");

function pyramid(size = 5) {
  console.log("A beautiful pyramid!\n\n" + build(size));
}

pyramid(5)
