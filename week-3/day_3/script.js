/// DOM = DOCUMENT OBJECT MODEL
///       objecti{} that represents the page you see in the web browser 
///       and provides you with an API to interact with it.
///       Web browser constructs the DOM when it loads an HTML document,
///       and structures all the elements in a tree-like representation.
///       JavaScript can access the DOM to dynamically
///       change the content, structure, and style of a web page. 
/// Example:
const heading = document.getElementById('heading');
heading.textContent = "Todo List"

/// Let's dig deeper into the DOM:
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const addBtn = document.querySelector('button'); // querySelector is a method that returns the first element that matches the specified selector


// - ** Handling Events **: Adding event listeners to respond to user actions.

// add an event listener to the input element with id "todoInput"
// when the user presses the Enter key, call the addTodo() function
todoInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTodo();
    }
})
addTodo = () => {
    const todo = todoInput.value;
    if (todo) { // mean if todo is not empty
        const li = document.createElement('li'); // create a new li element and element mean tag i.e. li 
        li.textContent = todo; // it will set the text content of the li element
        todoList.appendChild(li); // it will append the li element to todoList
        todoInput.value = ''; // it will clear the input field
    }
}

// - ** Manipulating Styles **: Changing CSS styles using JavaScript.

// const todoContainer = document.querySelector('.todo-container');
const todoContainer = document.getElementById('todoList');
todoContainer.style.backgroundColor = 'lightblue';
todoContainer.style.padding = '10px';
todoContainer.style.border = '1px solid #ccc';

const todoItems = document.querySelectorAll('.todo-item');
todoItems.forEach(item => {
    item.style.backgroundColor = 'lightgray';
    item.style.padding = '12px'
    item.style.margin = '16px';
    item.style.border = '5px solid #ccc';

});

