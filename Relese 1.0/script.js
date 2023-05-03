function createTask(taskIndex) {
    const content = document.getElementById("add-task").value;

    return {
        contetn: content,
        index: taskIndex,
        addDate: new Date().getDate()
    }
}

function newTaskInputIsEmpty() {
    const errorMSG = document.getElementById("errorMSG");
    errorMSG.style.display = "block";
}

function clearNewTaskInputIsEmpty() {
    const errorMSG = document.getElementById("errorMSG");
    errorMSG.style.display = "none";
}

function hideNoTasks() {
    const item = document.getElementById("no-tasks");
    item.style.display = "none";
}

function showTasks(arr) {
    const table = document.getElementById("tasks");
    
    for(let i = 0; i < arr.length; i++) {
        let newTask = document.createElement("div");
        newTask.classList = "task";
        newTask.innerHTML = `<input type="text" name="single-task" class="display-text" value="${arr.content}" disabled>
        <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="delete"><i class="fa-solid fa-trash"></i></button>`;
        table.prepend(newTask);
    }
}


let tasksIndex = 0;
const newTaskButton = document.getElementById("add-button");

tasksList = [];

newTaskButton.addEventListener("click", function(){
    const content = document.getElementById("add-task").value;
    if(!content) {
        taskList.append(createTask());

    }else {
        hideNoTasks()
        clearNewTaskInputIsEmpty();
        tasksIndex = addNewTask(content, tasksIndex);

    }
});