//json 서버는 리다이렉트 되지 않는다.
//라이브 서버 때문에 새로고침 되는 것 뿐이다.
//라이브 서버는 안에 감지하고 있는 파일이 변화하면 알아서 새로고침한다.
//그래서 DB가 바뀌면 = db.json 파일이 바뀌면
//다른 파일이 변경이 되었기 때문에 새로고침 된다.

const $input = document.querySelector("input");
const $button = document.querySelector("button");
const $ul = document.querySelector("ul");
const $form = document.querySelector("form");

const fetchTodos = async function(){
    const res = await fetch("http://localhost:3000/todos");
    const todos = await res.json();
    todos.forEach( todo => {
        const $li = document.createElement('li');
        $ul.appendChild($li);
        $li.innerText = todo.todo;
    });
}
fetchTodos();

const addTodos = function() {
    const todoInput = $input.value;
    const addTodoData = {
        "todo": todoInput,
        "done": false
    }

    fetch("http://localhost:3000/todos",{
        method: "POST",
        header: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(addTodoData)
    })
}

$form.addEventListener("submit",function(e) {
    e.preventDefault();
    addTodos();
})