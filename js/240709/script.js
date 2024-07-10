// 배열의 요소를 추가하거나 삭제

//[ 배열의 요소를 추가하거나 삭제하는 메서드 ]
// 배열의 요소를 추가하는 메서드 => push
// 배열의 마지막 요소에 값을 추가함
// 길이 값을 반환할 수 있음

// 배열의 요소를 삭제하는 메서드 => pop
// 배열의 마지막 요소에 값을 삭제함
// 마지막 요소를 반환

// 배열의 요소를 추가하는 메서드 => unshift
// 배열의 첫 번째 요소에 값을 추가함
// 길이 값을 반환할 수 있음

// 배열의 요소를 삭제하는 메서드 => shift
// 배열의 첫 번째 요소에 값을 삭제함
// 첫 번째 요소를 반환

const arr = [10, 20, 30];

// push & pop
console.log("--- push & pop");
const length = arr.push(40); // 길이값
console.log(arr);
console.log('length',length);
arr.push(50, 60, 70); // 여러개의 요소도 추가가 가능
console.log(arr);

const element = arr.pop(); // 마지막 요소를 반환
console.log(arr);
console.log('element', element); // 40

console.log("--- unshift & shift");
arr.unshift(50); // 길이 값을 반환
console.log(arr);
arr.shift(); // 첫번째 요소를 반환
console.log(arr);

// splice
console.log('---splice---');
const arr2 = [1, 2, 3];
console.log(arr2.splice(1,0,4,5,6)); // 추가
console.log(arr2); // [1, 4, 5, 6, 2, 3]

// 5, 6을 삭제
arr2.splice(2, 2);
console.log(arr2);

// 변경
arr2.splice(3, 1, 5, 8);
console.log(arr2); // [1, 4, 2, 5, 8]

// slice
console.log("---slice---");
const fruits = ["사과", "바나나", "체리", "블루베리", "두리안"];
console.log(fruits.slice(1, 3));