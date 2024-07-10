// BigInt
// ES2020
// BigInt와 숫자형은 다른 탕비

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

let bigNum1 = 123456n;
console.log(typeof bigNum1);

// bigint 연산
console.log(5n / 2n); // BigInt 2n
console.log(5n / 2); // BigInt와 다른 타입은 섞어서 사용이 불가능하다.
console.log(5n / BigInt(2)); // 그럴때에는 BigInt로 바꿔 주면 됩니다.

// BigInt 변환 시 주의사항
console.log(BigInt(9007199254740992));
// 이 값을 안전하게 전달하고 싶을 때에는 문자열로 전달해주면 된다.
console.log(BigInt("9007199254740992"));