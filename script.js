document.addEventListener("DOMContentLoaded", event() => {
    const addButton = document.getElementById("add task-button");
    const Taskinput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    function addTask() {
        const taskText = Taskinput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }
        const li = document.createElement("li");
        li.textContent = taskText;


        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            taskList.removeChild(li);
        });

       