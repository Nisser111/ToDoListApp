// tasks list
let tasks = [];

// get text from input
function addNewTask() {
    const input = document.querySelector(".add_new_task--input");
    let v = input.value; 

    if(v) return v;
    else return false; 
}

// is input empty 
function isInputEmpty() {
    
}

// get text from input
function getText() {
    const input = document.querySelector(".add_new_task--input");
    if(!input.value) 
        return true
    else
        return false;
}

// add new task to list
function addNewTaskToList() {

}

// edit task
function editTask() {

}

// delete task
function deleteTask() {

}

// refreshening task list when changed
function refreshTaskList() {

}

// focus to input when add_task_button clicked
const addTaskBtn = document.querySelector(".add-task-empty-task-list");
addTaskBtn.addEventListener("click", () => {
    const input = document.querySelector(".add_new_task--input");
    input.focus();
});
