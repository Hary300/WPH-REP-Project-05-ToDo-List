// ===== DARK MODE =====
const darkModeButton = document.querySelector('#dark-mode-button');
const darkIcon = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="white"
  class="size-6"
>
  <path
    fill-rule="evenodd"
    d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
    clip-rule="evenodd"
  />
</svg>


`;
const lightIcon = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="black"
  class="size-6"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
  />
</svg>

`;

let isDark = false;
darkModeButton.addEventListener('click', function () {
  isDark = !isDark;
  const rootClass = document.documentElement.classList;

  if (isDark) {
    rootClass.add('dark');
    darkModeButton.innerHTML = lightIcon;
  } else {
    rootClass.remove('dark');
    darkModeButton.innerHTML = darkIcon;
  }
});

// ==== CLOCK =====
const clock = document.querySelector('#clock');

function runClock() {
  const timeToday = new Date();
  const hour = String(timeToday.getHours()).padStart(2, '0');
  const minute = String(timeToday.getMinutes()).padStart(2, '0');
  const second = String(timeToday.getSeconds()).padStart(2, '0');

  clock.innerText = `${hour}:${minute}:${second}`;
}

document.addEventListener('DOMContentLoaded', runClock);
setInterval(runClock, 1000);

// ===== DATE =====
const date = document.querySelector('#date');
const today = new Date();
const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });
const monthName = today.toLocaleDateString('en-US', { month: 'long' });

date.innerText = `${dayName}, ${today.getDate()} ${monthName} ${today.getFullYear()}`;

// ===== CLASS ======
class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodo(newTodo) {
    this.todos.push(newTodo);
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  getAll() {
    return this.todos;
  }
}

class Todo {
  constructor(todo, completed, id) {
    this.id = id ? id : Date.now() + Math.random().toString(10).slice(2);
    this.todo = todo;
    this.completed = completed ? complete : false;
  }

  toggleTodo() {
    this.completed = !this.completed;
  }

  editTodo(newTodo) {
    this.todo = newTodo;
  }
}

// const todo1 = new Todo('makan', false);
// const todo2 = new Todo('minum', false);
// const todo3 = new Todo('tidur');
// console.log(todo1);
// console.log(todo2);
// console.log(todo3);

// const todoList = new TodoList();
// todoList.addTodo(todo1);
// todoList.addTodo(todo2);
// todoList.addTodo(todo3);

// console.log(todoList.getAll());

// ====== ADD TODO ======
const todoInput = document.querySelector('#input-todo');
const todoAddButton = document.querySelector('#todo-add-button');
const errorText = document.querySelector('#error-text');
let newTodo = '';
todoInput.addEventListener('change', function (event) {
  newTodo = event.target.value.trim();
});

todoAddButton.addEventListener('click', function () {
  if (!newTodo) {
    errorText.classList.remove('invisible');
    todoInput.classList.remove('border-[#3F9CA1]');
    todoInput.classList.add('border-red-500');
    return;
  }
  errorText.classList.add('invisible');
  todoInput.classList.add('border-[#3F9CA1]');
  todoInput.classList.remove('border-red-500');
});

let isComplete = false;

// document.addEventListener('DOMContentLoaded', async function () {
//   const data = await fetchData();
//   const todos = data.todos;
//   const todosList = new TodoList();

//   todos.forEach((t) => {
//     const todo = new Todo(t.id, t.todo, t.completed);
//     todosList.addTodo(todo);
//   });

//   console.log(todosList.getAll());
// });

// async function fetchData() {
//   try {
//     const res = await fetch('https://dummyjson.com/todo');
//     if (!res.ok) {
//       throw new Error(`Status: ${res.status}`);
//     }
//     const data = await res.json();

//     return data;
//   } catch (err) {
//     return err;
//   }
// }
