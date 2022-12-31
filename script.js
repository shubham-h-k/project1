const todoFormEl = document.querySelector('#todo-form');
const todoInputEl = document.querySelector('#todo-input');
const todoListEl = document.querySelector('#todo-list');

function buildUniqueId(prefix = 'prefix') {
  return prefix + '-' + Math.floor(Math.random() * Date.now());
}

function createTask(name) {
  return {
    name,
    id: buildUniqueId("todo")
  };
}

const state = {
  taskName: "",
  tasks: [
    {
      id: "todo-0",
      name: "Learn some frameworks!"
    }
  ]
};

function init() {
  todoInputEl.addEventListener('change', handleInputChange);
  todoFormEl.addEventListener('submit', handleFormSubmit);
  renderInput();
  renderTodoList();
}

function renderInput() {
  todoInputEl.value = state.taskName;
}

function renderTodoList() {
  const frag = document.createDocumentFragment();
  state.tasks.forEach((task) => {
    const item = buildTodoItemEl(task.id, task.name);
    frag.appendChild(item);
  });
}

document.addEventListener('DOMContentLoaded', init);