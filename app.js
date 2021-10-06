//Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
//Event Listenners

todoButton.addEventListener('click', addTodo);

//Functions

function addTodo(event){

    //prevent form from submitting
    event.preventDefault();
    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //CREATE LI
    const newTodo = document.createElement('li');
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

     //trash BUTTON
     const trashButton = document.createElement('button');
     trashButton.innerHTML = '<i class="fas fa-trash"></i>'
     trashButton.classList.add("complete-btn");
     todoDiv.appendChild(trashButton);

     //APPEND TODO LIST
     todoList.appendChild(todoDiv);
}
