// 숫자형 메서드

console.log('---parseInt---'); // Integer
// 문자열 데이터 -> 숫자형
console.log(typeof parseInt("36"));
// 36px
console.log(parseInt("36px"));
console.log(parseInt("12.5px"));
console.log(parseInt("width: 12.5px")); // NaN(Not a Number)

console.log('---parseFloat---'); // Float 실수
console.log(parseFloat("12.5px"));
console.log(parseFloat("12.5.6px")); // 12.5
console.log(parseFloat("12.345.6px")); // 12.345 까지는 유효한 숫자이고 그뒤의 .6은 유효한 숫자가 아니라 12.345만 출력됨

console.log('---isNaN, Nuber.isNaN---');
console.log(isNaN(23)); // true
console.log(isNaN(undefined)); // true
console.log(isNaN("2345")); // false
console.log(isNaN("hello")); // true
// isNaN : 자동으로 숫자로 변환해서 확인합니다. undefined는 숫자로 변환하면 NaN가 됩니다.

console.log('---Number.isNaN');
console.log(Number.isNaN(23)); // false
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN("2345")); // false
console.log(Number.isNaN("hello")); // false
// 전달한 인자가 not a number일때만 true 값이 나온다.
console.log(Number.isNaN(NaN)); // true
// * 3은 숫자로 바꿔서 곱하게 되지만 문자열을 숫자로 바꿀 수 없기 때문에 hello가 NaN로 바뀌게 되고 NaN를 3번 곱하니까 결국 NaN가 출력된다.
console.log(Number.isNaN("hello" * 3));
// Number.isNaN : 형변환X, 숫자형 NaN일 경우에만 true를 반환합니다.

console.log('---toFixed---');
const pi = 3.14159263;
console.log(pi.toFixed(0)); // 3
console.log(pi.toFixed(2)); // 3.14
// 지정해준 값보다 큰 값을 표기해줄 때에는 자릿수 만큼 0이 붙게 된다.
console.log(pi.toFixed(10)); // 3.14159263000
// "toFixed"의 타입은 숫자에서 문자열로 바뀌게 된다.
console.log(typeof pi.toFixed(10)); // String