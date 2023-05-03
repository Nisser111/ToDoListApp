let tasksIndex = 0;

function addNewTask(content, index) {
    const tasksTable = document.getElementById("tasks");
    let newTask = document.createElement("div");
    newTask.classList = "task";
    index++;
    newTask.id = "task_" + index
    newTask.innerHTML = `<input type="text" name="single-task" class="display-text" value="${content}" readonly>
    <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
    <button class="delete"><i class="fa-solid fa-trash"></i></button>`;
    tasksTable.prepend(newTask);

    return index;
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

const current_tasks = document.querySelectorAll(".delete");
for(let i=0; i<current_tasks.length; i++){
    current_tasks[i].onclick = function(){
        this.parentNode.remove();
    }
}



const newTaskButton = document.getElementById("add-button");

newTaskButton.addEventListener("click", function(){
    const content = document.getElementById("add-task").value;
    if(!content) {
        newTaskInputIsEmpty();
    }else {
        hideNoTasks()
        clearNewTaskInputIsEmpty();
        tasksIndex = addNewTask(content, tasksIndex);

    }
});

const deleteButton = document.querySelector(".delete");

deleteButton.addEventListener("click", function(e){
    let targett = e.target;
    console.log(targett.id);
}, false);