function addTask() {
    var taskTitleInput = document.getElementById("taskTitleInput");
    var taskDescriptionInput = document.getElementById("taskDescriptionInput");
    var taskTitle = taskTitleInput.value.trim();
    var taskDescription = taskDescriptionInput.value.trim();

    if (taskTitle !== "" && taskDescription !== "") {
        var taskList = document.getElementById("taskList");
        var listItem = document.createElement("li");
        listItem.innerHTML = '<strong>' + taskTitle + '</strong>: ' + taskDescription +
            '<div class="button-group">' +
            '<button class="completed-btn" onclick="markCompleted(this)">Mark Completed</button>' +
            '<button class="remove-btn" onclick="removeTask(this)">Remove</button>' +
            '</div>';
        taskList.appendChild(listItem);
        taskTitleInput.value = "";
        taskDescriptionInput.value = "";
    } else {
        alert("Please enter a task title and description.");
    }
}

function markCompleted(element) {
    element.innerHTML = "&#10004; Completed";
    element.disabled = true;
    var removeBtn = element.parentNode.querySelector(".remove-btn");
    removeBtn.style.display = "none";
    element.parentNode.parentNode.classList.add("completed");
}

function removeTask(element) {
    var listItem = element.closest("li");
    listItem.parentNode.removeChild(listItem);
}
