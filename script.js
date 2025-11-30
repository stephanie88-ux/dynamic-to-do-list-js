document.addEventListener("DOMContentLoaded", event() => {
    const addButton = document.getElementById("add-task-btn");
    const taskinput = document.getElementById("task-input");
    const taskInput= document.getElementById("taskInput");
    const taskList = document.getElementById("task-list");

    function addTask() {
        const taskText = Taskinput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }
         constRemoveButton = document.createElement("button");
        removeButton.textContent = "Remove";

        removeButton.addEventListener("click", () => {
            taskList.removeChild(taskItem);
        }
        li = document.createElement("li");
        taskItem.textContent = taskText + " ";
        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem); 

        Taskinput.value = "";
    }
        
    addButton.addEventListener("click", addTask);

    taskImput.addEventListener('keypress', finction (event) {
        if (event.key === "Enter") {
            addTask();
        }   
    });


       