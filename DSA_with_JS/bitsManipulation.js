/* Lists of questions for bits manipulation using JavaScript */

/* WAP to find the given number is even of odd */
const checkEvenOdd = (num) => {
  if (num & 1) {
    return "Odd";
  } else {
    return "Even"
  }
}
console.log(checkEvenOdd(11))