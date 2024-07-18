// 버튼 요소 가져오기
const $button = document.querySelector("button");


// // 버튼 클릭이벤트 등록하기
// // element.addEventListener("이벤트이름", 함수);

// function buttonClickHandler(){
//     console.log("hello world!");
// }

// function buttonMouseOver(){
//     console.log("마우스 올렸음");
// }
// $button.addEventListener("mouseover", buttonMouseOver);
// $button.addEventListener("click", buttonClickHandler);

// // $button.addEventListener("click", function(){
// //     console.log("hello world!");
// // });

const $li =document.querySelector("li.test#초원범");
$button.addEventListener("click", function(){
    $button.classList.toggle("blue");

})

// $button.addEventListener("click", function(){
//     $button.classList.add("blue");
// })

// const myBtn = document.querySelector("button");
// const myUl = document.querySelector("ul");

// myBtn.addEventListener('click', function(){
//     for(let i=0; i < 10; i++){
//         const myLi = document.createElement('li');
//         myLi.innerText = `2 * ${i} = ${2 * i}`;
//         myUl.appendChild(myLi);
//     }
// })