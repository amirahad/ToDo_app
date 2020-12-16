const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const all = document.querySelector('.all');
// const completed = document.querySelector('.completed');
// const uncomplete = document.querySelector('.uncomplete');
const filterOption = document.querySelectorAll('.btn');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
// all.addEventListener('click', showAll);
// completed.addEventListener('click', showCompleted);
// uncomplete.addEventListener('click', showUncomplete);
for (let i = 0; i < filterOption.length; i++) {
    filterOption[i].addEventListener("click", function (e) {
        e.preventDefault();
        const todos = todoList.childNodes;
        for (let i = 1; i < todos.length; i++) {
            switch (e.target.value) {
                case "all":
                    todos[i].style.display = "flex";
                    break;
                case "completed":
                    if (todos[i].classList.contains('completedItem')) {
                        todos[i].style.display = "flex";
                    } else {
                        todos[i].style.display = "none";
                    }
                    break;
                case "uncompleted":
                    if (!todos[i].classList.contains('completedItem')) {
                        todos[i].style.display = "flex";
                    } else {
                        todos[i].style.display = "none";
                    } break;
            }
        }
    })
}


function addTodo(event) {
            //prevent auto submitting form
            event.preventDefault();
            //adding todo div
            const todoDiv = document.createElement('div');
            todoDiv.classList.add('animate__animated', 'animate__zoomInDown', 'todo');
            //Creating li
            const newTodo = document.createElement('li');
            newTodo.innerText = todoInput.value;
            newTodo.classList.add('todo-item');
            todoDiv.appendChild(newTodo);
            // var list = document.getElementsByClassName('todo-list')
            // list.insertBefore(newTodo, list.childNodes[0]);
            if (todoInput.value === "") {
                alert("You must write something!");
                return null;
            }
            //checked button adding
            const completedButton = document.createElement('button');
            completedButton.innerHTML = '<i class="fas fa-check-square"></i>';
            completedButton.classList.add('complete-btn');
            todoDiv.appendChild(completedButton);
            //trash button adding
            const trashButton = document.createElement('button');
            trashButton.innerHTML = '<i class="fas fa-trash"></i>';
            trashButton.classList.add('trash-btn');
            todoDiv.appendChild(trashButton);
            //append to list
            todoList.appendChild(todoDiv);

            todoInput.value = "";
        }

function deleteCheck(e) {
            const item = e.target;
            //DELETE ITEM
            if (item.classList[0] === "trash-btn") {
                const todo = item.parentElement;
                //ANIMATION TRANSITION
                todo.classList.remove('animate__zoomInDown')
                todo.classList.add('animate__zoomOutUp');
                todo.addEventListener('transitionend', function () {
                    todo.remove();
                }
                )
            }
            if (item.classList[0] === "complete-btn") {
                const todo = item.parentElement;
                todo.classList.toggle("completedItem")
            }
        }

// function showAll(e){
//     e.preventDefault();
//     // const todos = todoList.childNodes;
//     // console.log(todos);
// }

// function showCompleted(e){
//     e.preventDefault();
//     const todos = todoList.childNodes;
//     todos.forEach(function(todo){
//         if(todo.classList.contains('completedItem')){
//             todo.style.display = 'flex';
//         }else{
//             todo.style.display = 'none';
//         }
//     })
// }

// function showUncomplete(e){
//     e.preventDefault();
//     const todos = todoList.childNodes;
//     // console.log(todos);
// //     if(todos.classList.contains('completedItem')){
// //         todos.style.display = 'none';
// //     }else{
// //         todos.style.display = 'flex';
// //     }
// }

//FILTERING THE TASKS ACCORDING THE OPTION
// function filterTodo(e) {
//     const todos = todoList.childNodes;
//     for (let i = 1; i < todos.length; i++) {
//         switch (e.target.value) {
//             case "all":
//                 todos[i].style.display = "flex";
//                 break;
//             case "completed":
//                 if (todos[i].classList.contains('completedItem')) {
//                     todos[i].style.display = "flex";
//                 } else {
//                     todos[i].style.display = "none";
//                 }
//                 break;
//             case "uncompleted":
//                 if (!todos[i].classList.contains('completedItem')) {
//                     todos[i].style.display = "flex";
//                 } else {
//                     todos[i].style.display = "none";
//                 } break;
//         }
//     }
// }

// Add active class to the current button (highlight it)
var btnContainer = document.querySelector(".btns");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }

// for select
//FILTERING THE TASKS ACCORDING THE OPTION
// function filterTodo(e) {
//     const todos = todoList.childNodes;
//     todos.forEach(function(todo){
//         switch (e.target.value) {
//             case "all":
//                 todo.style.display = "flex";
//                 break;
//             case "completed":
//                 if (todo.classList.contains('completedItem')) {
//                     todo.style.display = "flex";
//                 } else {
//                     todo.style.display = "none";
//                 } break;
//             case "uncompleted":
//                 if (!todo.classList.contains('completedItem')) {
//                     todo.style.display = "flex";
//                 } else {
//                     todo.style.display = "none";
//                 } break;
//         }
//     })
// }


