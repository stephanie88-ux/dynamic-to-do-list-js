document.AddEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");
    const inputField = document.getElementById("taskInput");

    const addTask = () => {
        const taskText = inputField.value.trim();
        if (taskText) {
            const listItem = document.createElement("li");
            listItem.textContent = taskText;
            taskList.appendChild(listItem);
            inputField.value = ""; // Clear the input field
        } else {
            alert("Please enter a task.");
        }

