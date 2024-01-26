const a = 10;
const b = 2;
let MyName = "nico";
// 자바스크립트 변수의 이름은 띄어쓰기(공백)를 사용할 수 없다
//대신 camelCase로 작성한다

console.log(a + b);
console.log(a * b);
console.log(a / b);

MyName = "nicolass";
//let 변수는 재선언은 안되고 재할당은 된다
//const 상수는 재선언도 안되고 재할당도 안된다.
console.log("your new name is " + MyName);

//var를 과거에 사용했다.
//var는 재선언,재할당이 모두 가능하다.
