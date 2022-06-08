// 모던 js딥다이브 내용
// https://poiemaweb.com/

// 함수는 동일한 작업을 반복적으로 수행해준다
// Code Runner extension깔기
// ctrl + alt + n 으로 실행


// 함수 선언문
function 밥먹기() {
  console.log("쿰척쿰척");
}
밥먹기();


// 함수 표현식
// js에서 함수는 "일급 객체"
const 인사하기 = function (name) {
  console.log(name + "아 안녕");
};

인사하기("병관");

const 따라서인사하기 = 인사하기;
인사하기("현호");
// -------------
const 감사하기 = function 감사하다말하기(name) {
  console.log(name + "아 ㄳ");
};
감사하기("병관");
// 감사하다말하기("병관")


// 생성자 함수
const 불편하게함수만들기 = new Function("arg1", "arg2", "return arg1 * arg2");
console.log(불편하게함수만들기(2, 5));

// 호이스팅
// 선언하는 부분을 먼저읽어

console.log(plus(2, 3));
function plus(a, b) {
  return a + b;
}
// --------
const 변수 = "있다";
console.log(변수);

console.log(없는변수);

console.log(아마도없는변수);
const 아마도없는변수 = "아마도";


// 사생활 침해
var

// 
const
let

// var/const,let

{
  var 참조가능하냐1 = "ㄱㄴ";
}
console.log(참조가능하냐1);


{
  const 참조가능하냐2 = "ㄱㄴ";
  let 참조가능하냐3 = "ㄱㄴ";
}
console.log(참조가능하냐2);
console.log(참조가능하냐3);


// ++
// https://www.hanumoka.net/2018/10/24/javascript-20181024-javascript-callback/
function fn_fakeAsync(callback) {
  callback();
}
console.log("------- fn_fakeAsync 호출 직전 -------");
fn_fakeAsync(function () {
  console.log("이게 동기적으로 동작하길 바래");
});
console.log("------- fn_fakeAsync 호출 이후 -------");

function fn_newCallBack() {
  console.log("비동기적으로 호출되고 싶다.");
}
console.log("-------  호출 직전 -------");
setTimeout(fn_newCallBack, 3 * 1000); // 3초 뒤 콜백 호출
console.log("-------  호출 이후 -------");
