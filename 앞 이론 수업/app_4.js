// 조건문

const age = parseInt(prompt("how old are you?"));

// if (isNaN(age)) {
//   console.log("plaese write a number");
// } else {
//   console.log("thank you for writing your age");
// }

if (isNaN(age) || age < 0) {
  console.log("plaese write a real positive number");
} else if (age < 18) {
  console.log("you are too young.");
} else if (age >= 18 && age <= 50) {
  console.log("you can drink");
} else if (age === 100) {
  console.log("you are wise.");
  //자바스크립트는 순서대로 읽기 때문에 100세면 아래의 80이상의 조건이 읽히지 않음
} else if (age > 80) {
  console.log("you can do whatever you want.");
}

true || true === true;
false || true === true;
true || false === true;
false || false === false;

true && true === true;
false && true === false;
true && false === false;
false && false === false;

//isNaN(value)
// value의 값이 NaN이면 true, 아니면 false 반환

//parseInt(string)
//문자열을 해석해서 정수로 반환함
