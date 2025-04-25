// array to store all the todos
let todos = [];

// function to add a new todo
function addTodo() {
    // get the input element
    const input = document.getElementById("todoInput");
    // get the text from the input element
    const text = input.value.trim();
    // if the text is not empty
    if (text) {
        // create a new todo object
        const todo = {
            // set the id of the todo to the current timestamp
            id: Date.now(),
            // set the text of the todo to the text from the input element
            text: text,
            // set the completed property of the todo to false
            completed: false,
        };
        // add the new todo to the todos array
        todos.push(todo);
        // clear the input element
        input.value = "";
        // call the renderTodos() function to update the UI
        renderTodos();
    }
}

// function to toggle the completed property of a todo
function toggleTodo(id) {
    // loop through the todos array and update the completed property of the todo with the matching id
    todos = todos.map((todo) => {
        if (todo.id === id) {
            // toggle the completed property
            return { ...todo, completed: !todo.completed };
        }
        // return the todo as it is
        return todo;
    });
    // call the renderTodos() function to update the UI
    renderTodos();
}

// function to delete a todo
function deleteTodo(id) {
    // loop through the todos array and remove the todo with the matching id
    todos = todos.filter((todo) => todo.id !== id);
    // call the renderTodos() function to update the UI
    renderTodos();
}

// function to render the todos
function renderTodos() {
    // get the element with id "todoList"
    const todoList = document.getElementById("todoList");
    // clear the innerHTML of the element
    todoList.innerHTML = "";

    // if there are no todos
    if (todos.length === 0) {
        // create a new element with the text "No todos yet"
        const noTodos = document.createElement("p");
        noTodos.textContent = "No todos yet";
        // add the new element to the todoList
        todoList.appendChild(noTodos);
        // return from the function
        return;
    }

    // loop through the todos array and create a new element for each todo
    todos.forEach((todo) => {
        // create a new div element
        const div = document.createElement("div");
        // add a class to the div element that depends on the completed property of the todo
        // if the todo is completed, add the class "completed"
        // if the todo is not completed, add no class
        div.className = `todo-item ${todo.completed ? "completed" : ""}`;

        // create a checkbox element
        const checkbox = document.createElement("input");
        // set the type of the element to "checkbox"
        checkbox.type = "checkbox";
        // set the checked property of the element to the completed property of the todo
        checkbox.checked = todo.completed;
        // add an event listener to the checkbox element
        // when the user clicks the checkbox, call the toggleTodo() function with the id of the todo as an argument
        checkbox.onclick = () => toggleTodo(todo.id);

        // create a span element
        const text = document.createElement("span");
        // set the textContent of the element to the text property of the todo
        text.textContent = todo.text;
        // set the flex property of the element to "1"
        // this is necessary because we want the text to take up all the available space in the div
        text.style.flex = "1";
        // set the margin property of the element to "0 10px"
        // this is necessary because we want to add some space between the checkbox and the text
        text.style.margin = "0 10px";

        // create a button element
        const deleteBtn = document.createElement("button");
        // set the textContent of the element to "Delete"
        deleteBtn.textContent = "Delete";
        // add an event listener to the button element
        // when the user clicks the button, call the deleteTodo() function with the id of the todo as an argument
        deleteBtn.onclick = () => deleteTodo(todo.id);

        // append the checkbox, text, and delete button elements to the div element
        div.appendChild(checkbox);
        div.appendChild(text);
        div.appendChild(deleteBtn);

        // append the div element to the todoList
        todoList.appendChild(div);
    });
}

// add an event listener to the input element with id "todoInput"
// when the user presses the Enter key, call the addTodo() function
document.getElementById("todoInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTodo();
    }
});

