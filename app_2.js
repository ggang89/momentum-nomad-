// Boolean

const amIFat = false;

console.log(amIFat);

// null 은 아무것도 없음을 뜻한다.(값이 없다는 것)
// variable 안에 어떤 것이 없다는 것을 확실히 하기 위해 씀
//

let something;
//let의 이름을 지어주고 값을 할당하지 않음
console.log(something);
//undefined

// 데이터구조=배열
//배열안의 값은 모두 같은 값을 가진다.(객체와 차이)
//모두 요일이거나, 사야할 목록
const mon = "mon";
const tue = "tue";
const week = [mon, tue];
console.log(week);

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
//배열에서 아이템 가져오기
console.log(daysOfWeek[5]);

//배열안에 요일 더 추가하기
console.log(daysOfWeek);
daysOfWeek.push("sun");
console.log(daysOfWeek);
//const는 배열 추가는 가능하다

//Object
const player = {
  name: "nico",
  points: 10,
  fat: true,
};
console.log(player);
console.log(player.name);

//객체안의 값 수정하기
player.fat = false;
console.log(player);

//객체 안에 새로운 값 추가하기
player.lastname = "kim";
console.log(player);

player.points = player.points + 15;
console.log(player.points);
