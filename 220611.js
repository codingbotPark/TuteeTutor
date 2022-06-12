// 자바스크립트는 프로토타입 기반 객체지향 프로그래밍 언어
// javascript = 프로토타입기반 객체지향 프로그래밍 언어
// Java, c++ = 클래스 기반 객체지향 프로그래밍 언어

// 걍 java해보면 차이가 느껴짐
// 웹개발에선 크게 쓸일 없지만 
// 우리가 다 이 프로토타입을 쓰고있는거임!

// --------------------------------

// 객체 생성자
// 도형이라는 객체에 모두 혜당되는 함수를 만들 때는 prototype
// 생성자에서 prototype 지정 가능
function 도형(x,y){

    this.x = x
    this.y = y
    도형.prototype.sayXY = function(){
        return `내x는 ${this.x} 내y는 ${this.y}이다!`
    }
}

// 도형.prototype.sayXY = function(){
//     return `내x는 ${this.x} 내y는 ${this.y}이다!`
// }

const 만들어진도형 = new 도형(10,20)
console.log(만들어진도형.sayXY())

// + 이렇게 프로토타입 하나하나 지정하기 힘들면 class라는 문법의 static을 사용(prototype과 같은 역할을 함)

// --------------------------------

// 우리가 이런 프로토타입을 사용하는 것이다 사실!
const arr = [1,2,3]
console.log(arr)
console.log("type",typeof arr)
console.log("length",arr.length) // 3이 출력되는데,
// 이런 length라는 함수는 arr type의 프로토타입이다

// --------------------------------

// 이렇게 하면?
const arr2 = [2,4,6]
console.log(arr2.length)
arr2.length = arr2.length + 1
arr2.hi = "hi"
console.log(arr2.length)
// 이건 크롬 콘솔
console.log(arr2)

// -------------