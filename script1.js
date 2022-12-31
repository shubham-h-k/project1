const todoFormEl = document.querySelector('#todo-form');
const todoInputEl = document.querySelector('#todo-input');
const todoListEl = document.querySelector('#todo-list');

todoInputEl.addEventListener('change', handleInputChange);
todoFormEl.addEventListener('submit', handleFormSubmit);

let inputValue;

function handleInputChange(e) {
  inputValue = e.target.value

}

function handleFormSubmit(e) {
  e.preventDefault();
  const item = document.createElement('li');
  const span = document.createElement('span');
  const text = document.createTextNode(inputValue);
  span.appendChild(text);
  item.appendChild(span);
  item.appendChild(addDeleteBtn());
  todoListEl.appendChild(item);
  
}

function addDeleteBtn() {
  const button = document.createElement('button');
  button.textContent = 'Delete';
  return button;
}