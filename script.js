

const taskInput = document.getElementById('newTask');
const taskList = document.getElementById('taskList');



function loadTask() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if(storedTasks) {
        storedTasks.forEach(task => {

            addTaskToList(task);
            
        });
    }
}


function addTask() {
    const task = taskInput.value.trim();
    if(task) {
        addTaskToList(task);
        saveTask();
        taskInput.value = '';
    }
}

function addTaskToList(task) {

    const listItem = document.createElement('li');
    listItem.textContent = task;
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', () => {
        listItem.remove();
        saveTasks();
    });
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
}

function saveTask() {
    const tasks = Array.from(taskList.querySelectorAll('li')).map(li =>
        li.textContent)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

loadTask();