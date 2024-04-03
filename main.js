
document.addEventListener('DOMContentLoaded', function () {
    let tasks;

    try {
        tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    } catch (e) {
        tasks = [];
    }

    for (const task of tasks) {
        addTask(task.text, task.completed);
    }
});


function addTask(text, completed = false) {
    const node = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = completed;
    node.appendChild(checkbox);

    const textSpan = document.createElement('span');
    const textnode = document.createTextNode(text);
    textSpan.appendChild(textnode);
    node.appendChild(textSpan);

    document.getElementById('tasks').appendChild(node);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    node.appendChild(deleteButton);
    deleteButton.addEventListener('click', function () {
        node.remove();
        saveTasks();
    });

    checkbox.addEventListener('change', function () {
        textSpan.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
        saveTasks();
    });

    textSpan.style.textDecoration = completed ? 'line-through' : 'none';
}


function saveTasks() {
    const tasks = [];
    const nodes = document.getElementById('tasks').childNodes;

    for (const node of nodes) {
        const text = node.childNodes[1].textContent;
        const completed = node.childNodes[0].checked;
        tasks.push({ text, completed });
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
}


document.getElementById('add-button').addEventListener('click', function () {
    const textarea_input = document.getElementById('textarea-input').value;

    if (textarea_input === '') {
        alert('Please enter a task');
        return;
    }

    addTask(textarea_input);
    document.getElementById('textarea-input').value = '';
    saveTasks();
});