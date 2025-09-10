const newTaskInput = document.getElementById("new-task");
const addButton = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Load tasks from localStorage on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach((task) => addTaskToDOM(task));
});

addButton.addEventListener("click", () => {
  const newText = newTaskInput.value.trim();
  if (newText === "") return;

  addTaskToDOM(newText);

  // Save to localStorage
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.push(newText);
  localStorage.setItem("tasks", JSON.stringify(savedTasks));

  newTaskInput.value = "";
});

function addTaskToDOM(task) {
  const taskItem = document.createElement("li");

  const taskText = document.createElement("span");
  taskText.textContent = task;
  taskText.className = "task-text";

  const deleteBtn = document.createElement("i");
  deleteBtn.className = "fas fa-trash delete-btn";

  taskItem.appendChild(taskText).so;
  taskItem.appendChild(deleteBtn);
  taskList.prepend(taskItem);

  // remove task on delete icon click
  deleteBtn.addEventListener("click", () => {
    taskItem.remove();

    let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks = savedTasks.filter((t) => t !== task);
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
  });
}
