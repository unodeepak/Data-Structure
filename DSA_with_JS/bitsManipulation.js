/* Lists of questions for bits manipulation using JavaScript */




/* WAP to swap two number */
let a = 100;
let b = 200;

a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log({ a, b });

/* WAP to find the given number is even of odd */
const checkEvenOdd = (num) => {
  if (num & 1) {
    return "Odd";
  } else {
    return "Even";
  }
};
// console.log(checkEvenOdd(11))
