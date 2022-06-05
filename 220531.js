const arr = [
    "banana",
    "stroberry",
    "grape",
    "mango",
    "kiwi",
    "jadu",
    "cherry",
    "apple",
    "orange",
]

arr.map((item,index,array) => console.log(item,index,array)) 

arr.push(123)
//console.log(length(arr))
arr.splice(5,9);
console.log(arr)

arr.map((item) => (console.log(item+"마시썽")))

arr.forEach((item,inde) => console.log(inde+"번째는"+item+"이다."))

console.log(arr.filter((item) => item !== "banana"))
//위, 아래 코드 이거 두 개 다름
console.log(arr)

if (1 === "1") console.log(1)