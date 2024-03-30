document.getElementById('add-button').addEventListener('click', function () {
    const textarea_input = document.getElementById('textarea-input').value;
    const node = document.createElement('li');
    
    // add check box
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    node.appendChild(checkbox);

    // wrap the text in a span
    const textSpan = document.createElement('span');
    const textnode = document.createTextNode(textarea_input);
    textSpan.appendChild(textnode);
    node.appendChild(textSpan);

    document.getElementById('tasks').appendChild(node);
    console.log(node);
    document.getElementById('textarea-input').value = '';

    // add delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    node.appendChild(deleteButton);
    deleteButton.addEventListener('click', function () {
        node.remove();
    });
});

// if checkbox is checked, add strikethrough to the span
document.getElementById('tasks').addEventListener('change', function (event) {
    if (event.target.type === 'checkbox') {
        event.target.nextSibling.style.textDecoration = event.target.checked ? 'line-through' : 'none';
    }
});