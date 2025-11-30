document.addEventListener("DOMContentLoaded", event() => {
    const addButton = document.getElementById("add-task-btn");
    const taskinput = document.getElementById("task-input");
    const taskInput= document.getElementById("taskInput");
    const taskList = document.getElementById("task-list");

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }
        const li = document.createElement("li");
        li.textContent = taskText;


        constRemoveButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        removeButton.onclick = function() {
        taskList.removeChild(li);
        };
 
        Taskinput.value = "";
    }
        
    addButton.addEventListener("click", addTask);

    taskImput.addEventListener('keypress', finction (event) {
        if (event.key === "Enter") {
            addTask();
        }   
    });


       