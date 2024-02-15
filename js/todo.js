const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
//const toDoInput = toDoForm.querySelector("input");  2번식과 같은 내용
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];
//todo를 작성해서 넣은 배열
//내용이 계속 업데이트 되므로 let으로 바꿔준다

function saveToDos() {
  //localStorage에 todo를 저장해준다
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  //JSON.stringify=모든 자바스크립트 코드를 string으로 만들어준다
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  //변수 li는 event가 발생한 target의 부모요소
  li.remove();
  //변수 li를 제거한다
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  //button을 click하면 deleteToDo함수가 실행된다
  li.appendChild(span);
  li.appendChild(button);
  //부모객체.appendChild(자식객체)

  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  //nexTodo를 toDos배열에 넣는다
  paintToDo(newTodo);
  //화면에 nexTodo를 그려준다
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  //JSON.parse= javascript object로 만들어준다
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
  //parsedToDos가 가진 각각의 item의 함수를 실행할 때 -> forEach
}
