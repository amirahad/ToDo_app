const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


function addTodo(event){
    //prevent auto submitting form
    event.preventDefault();
    //adding todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add( 'animate__animated', 'animate__zoomInDown', 'todo');
    //Creating li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add( 'todo-item');
    todoDiv.appendChild(newTodo);
    if(todoInput.value === ""){
        return null;
    }
    //checked button adding
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check-square"></i>';
    completedButton.classList.add( 'complete-btn');
    todoDiv.appendChild(completedButton);
    //trash button adding
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add( 'trash-btn');
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv);

    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    //DELETE ITEM
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        //ANIMATION TRANSITION
        todo.classList.remove( 'animate__animated', 'animate__zoomInDown')
        todo.classList.add('animate__animated','animate__backOutLeft');
        todo.style.setProperty('animate-duration', '0.5s');      
        // todo.style.setProperty('display', 'none');
        todo.addEventListener('transitionend', function() {
            todo.remove();
        } 
        )
    }
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completedItem")
    }
}

