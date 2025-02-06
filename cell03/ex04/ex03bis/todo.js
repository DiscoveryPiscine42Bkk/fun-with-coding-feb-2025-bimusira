function getTodos() {
    let a = document.cookie.split(';')[0];
    let b = a.split('=')[1];
    return b
}

function saveTodos() {
    let todos = $('.todo').map(function(){
        return $(this).text();
    }).get();
    document.cookie = `todos=${todos.join(',')};path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT`;
}

function addTodo() {
    let text = prompt("Enter a new TO DO:");
    if (text) {
        let div = $('<div class="todo"></div>').text(text);
        div.click( function() { removeTodo(div); });
        $('#ft_list').prepend(div);
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
    alert(savedTodos);
    if (savedTodos) {
        savedTodos.split(',').forEach(text => {
            let div = $('<div class="todo"></div>').text(text);
            div.on('click', function() { removeTodo(div); });
            $('#ft_list').append(div);
        });
    }
}

$(document).ready(function() {
    loadTodos();
});
