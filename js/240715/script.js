function test(){
    // 이렇게 키워드를 넣지 않고 선언하면 전역변수로 선언된다.
    a = 1
}
test()
// 그래서 함수에서 만든 a변수가 사라지지 않고 살아있다~!
console.log(a)