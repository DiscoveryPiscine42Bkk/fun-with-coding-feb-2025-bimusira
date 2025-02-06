function getTodos() {
    return decodeURIComponent(document.cookie.split('; ').find(row => row.startsWith('todos='))?.split('=')[1] || '');
}

function saveTodos() {
    let todos = Array.from(document.querySelectorAll('.todo')).map(todo => todo.innerText);
    document.cookie = `todos=${encodeURIComponent(todos.join(','))};path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT`;
}

function addTodo() {
    // get data
    let text = prompt("Enter a new TO DO:");
    if (text) {
        // Create box contain to do list
        let div = document.createElement("div");
        div.className = "todo";
        div.innerText = text;
        div.onclick = function() { removeTodo(div); };
        let list = document.getElementById("ft_list");
        list.insertBefore(div, list.firstChild);
        saveTodos();
    }
}

function removeTodo(todo) {
    if (confirm("Do you want to remove this TO DO?")) {
        todo.remove();
        saveTodos();
    }
}

function loadTodos() {
    let savedTodos = getTodos();
    if (savedTodos) {
        savedTodos.split(',').forEach(text => {
            let div = document.createElement("div");
            div.className = "todo";
            div.innerText = text;
            div.onclick = function() { removeTodo(div); };
            document.getElementById("ft_list").appendChild(div);
        });
    }
}

window.onload = loadTodos;
