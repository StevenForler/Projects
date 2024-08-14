//Select DOM 
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
document.addEventListener("DOMContentLoaded", getTodos); // because of the add on to help this webpage to pull the todos from local storage with the creation of getTodos, an event listener had to be added
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
filterOption.addEventListener("click", filterTodo);

//Functions

function addTodo(e) {
  //Prevent natural behaviour
  e.preventDefault(); //more specifically in this case prevents the page from refreshing.
  //Create todo div
  const todoDiv = document.createElement("div"); //createElement helps create an HTML element with a specific tag name
  todoDiv.classList.add("todo");
  //Create list
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  //Save to local - do this last
  //Save to local
  saveLocalTodos(todoInput.value);
  //
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  todoInput.value = "";
  //Create Completed Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="fas fa-check"></i>`; 
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //Create trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //attach final Todo
  todoList.appendChild(todoDiv);
}

function deleteTodo(e) {
  const item = e.target;
  //delete todo
  if (item.classList[0] === "trash-btn") { //CSS was updated to make the trash&check icons not selectable to allow the full button to be used. Line 84
    // e.target.parentElement.remove();
    const todo = item.parentElement;
    todo.classList.add("fall");
    //at the end
    removeLocalTodos(todo);
    todo.addEventListener("transitionend", e => { //this is to make sure that the transition once ends will remove the todo from the page
      todo.remove(); //without it the todo will remain and just be on the page at 0 opacity
    }); 
  }
  //check mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
    console.log(todo);
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes; // node list allows you to use the forEach loop
  todos.forEach(function(todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "incompleted":
        if (!todo.classList.contains("completed")) { // the exclamation point reverse the goal of the sentence
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

function saveLocalTodos(todo) { //This will save to local storage but this alone doesn't help the UI update to reflect the todo's after refresh. This includes the saveLocalTodos(todoInput.value) on line 26 the Function getTodos on line 114 is where that comes in
  //Check for Todo
  let todos;
  if (localStorage.getItem("todos") === null) { // If we don't have one. it will create an empty array
    todos = [];
  } else {// if we do have any amount of todos in local storage it grabs from local storage and have an array
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
function removeLocalTodos(todo) { // this is for removing items from storage so refreshing the page doesn't bring it back. there is a check in the function deleteTodo for when to remove from local storage
  // talking about the buttons relating to the listItems 
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos; // lines 115-120 are a repeat from lines 93-98
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function(todo) { // this is basically copy and paste from the addTodo function from earlier but we removed the saveLocalStorage function and a minor change on line 127 from "inputTodo.value" to "todo" and omited the line "todoList.appendChild(todoDiv);"
    //Create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create list
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoInput.value = "";
    //Create Completed Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Create trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //attach final Todo
    todoList.appendChild(todoDiv);
  });
}
// If I wanted to have a way of keeping the check mark in place after I refresh the page, I would have to create a local storage in a similar way for the check mark button as was done for the trash button.
// DOM - which means Document Object Model. This allows for dynamic access and update content, structure and style of said document
// classList - is a read-only property that is used to return CSS classes in the form of an array. This allows us to add, remove, replace, toggle, or check if a specified CSS class is there or not.