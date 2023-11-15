const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function () {
        taskList.removeChild(listItem);
    })

    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    taskInput.value = '';
}

// add a task when the buuton is clicke
addTaskButton.addEventListener("click", addTask)

// add a task when the Enter key is pressed. use keydown event
taskInput.addEventListener("keydown", makeText);
function makeText(e) {


    if (e.key == "Enter") {
     addTask()
    }
}