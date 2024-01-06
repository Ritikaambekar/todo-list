
// Get references to HTML elements
const todoForm = document.getElementById("todo-form");
const newTaskInput = document.getElementById("newTask");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
  const newTask = newTaskInput.value.trim();
  if (newTask) {
    // Create the task span with the desired structure
    const taskSpan = document.createElement("span");
    taskSpan.classList.add("task-span");

    const taskListItem = document.createElement("li");
    taskListItem.textContent = newTask;

    const closeIcon = document.createElement("i");
    closeIcon.classList.add("cross", "fa-solid", "fa-x", "fa-xs");

    taskSpan.appendChild(taskListItem);
    taskSpan.appendChild(closeIcon);

    // Append the task span to the task list
    taskList.appendChild(taskSpan);

    newTaskInput.value = ""; // Clear input field
    saveTasks(); // Update local storage
  }
}

// Function to save tasks to local storage
function saveTasks() {
  const tasks = Array.from(taskList.children).map(task => task.textContent);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from local storage on page load
function loadTasks() {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    const tasks = JSON.parse(storedTasks);
    tasks.forEach(task => {
      const taskSpan = document.createElement("span");
      taskSpan.classList.add("task-span");

      const taskListItem = document.createElement("li");
      taskListItem.textContent = task;

      const closeIcon = document.createElement("i");
      closeIcon.classList.add("cross", "fa-solid", "fa-x", "fa-xs");

      taskSpan.appendChild(taskListItem);
      taskSpan.appendChild(closeIcon);

        taskList.appendChild(taskSpan);

        closeIcon.addEventListener("click", () => {
        taskSpan.remove();
        saveTasks(); // Update local storage after removal
      });
    });
  }
}

// Load tasks on page load
loadTasks();

// Attach event listener for form submission
todoForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission
  addTask();
});






// -----------------------------------------------


// const userInput = document.getElementById('newTask');
// const taskList = document.getElementById('taskList');

// var storedTask = localStorage.getItem('tasks') || [];



// function addTask() {

//     let userTask = userInput.value;
//     storedTask.push(userTask)
//     localStorage.setItem('use')
// }



// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

// const taskSpans = document.querySelectorAll(".task-span");

// // Loop through each task span
// taskSpans.forEach(taskSpan => {
//   // Find the "i" tag within the task span
//   const closeIcon = taskSpan.querySelector("i");

//   // Add a click event listener to the "i" tag
//   closeIcon.addEventListener("click", () => {
//     // Remove the "i" tag from the task span's children list
//     taskSpan.remove();

//     // Optional: Also remove the task span itself if desired
//     // taskSpan.remove();
//   });
// });



// function addTask() {

//     var input = userInput.value;

//     if(input === ''){
//        alert('You must write something')
//     } else {

//         const tasks = document.createElement('span');
//         tasks.classList.add("task-span");
    

//         const taskListItem = document.createElement("li");
//         taskListItem.textContent = input;

//         const closeIcon = document.createElement("i");
//         closeIcon.classList.add("fa-solid", "fa-x", "fa-xs");

//         tasks.appendChild(taskListItem);
//         tasks.appendChild(closeIcon);

//         taskList.appendChild('tasks');

//         saveTasks();
        

//     }

    
// }

// function saveTasks() {
//     const tasks = Array.from(taskList.children).map(task => task.textContent);
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }

// function saveData() {

//     // localStorage.setItem('data',taskListItem.)

// }


