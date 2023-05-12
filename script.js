// selectors
const addNewTaskInput = document.querySelector(".add_new_task--input");
const addNewTaskBtn = document.querySelector(".add_new_task--btn");
const addTaskBtn = document.querySelector(".add-task-empty-task-list");
const noTaskInfo = document.querySelector("#no-task-info");
const list = document.querySelector(".tasks-list ul");


// tasks list
let tasks = [];
let usedIndex = [];


// auto focus to add new task input
window.onload = () => {
    addNewTaskInput.focus()
}

// task constructor
function Task(v){
    this.text = v;
    this.dateOfAdded =  new Date();
    this.index = this.generateId();
    this.renderTask = function() {    
        let newTask = document.createElement("li");
        newTask.classList.add("task");
    
        // If browswere support tempalte tag
        if ("content" in document.createElement("template")) {
            const template = document.querySelector("#taskTempalte");
            const clone = template.content.cloneNode(true);
            
            const input = clone.querySelector(".task-text");
            input.value = this.text;
    
            newTask.append(clone);
        }
    
        list.append(newTask)
    };


}

// create task id
Task.prototype.generateId = function() {
    function generate() {
        return (Math.random() + 1).toString(36).substring(7);
    }

    let r = generate();
    while(true) {
        if(usedIndex.includes(r)) 
            r = generate()
        else 
            usedIndex.push(r);
            return r;
    }
}

// edit task
Task.prototype.editTask = function() {

}

// delete task
Task.prototype.deleteTask = function(event) {

}

// is input empty 
function isInputEmpty() {
    const input = document.querySelector(".add_new_task--input");
    if(!input.value) 
        return true;
    else
        return false;
}

// is tasks list empty
function hideNoTaskInfo() {
    if(!tasks.length)
        noTaskInfo.remove();
}

// create task
function createTask() {
    let task = new Task(addNewTaskInput.value);
    addNewTaskInput.value = "";
    tasks.push(task);
    task.renderTask();
}

// focus to input when add_task_button clicked
addTaskBtn.addEventListener("click", () => {
    const input = document.querySelector(".add_new_task--input");
    input.focus();
});


// When add new task button was clicked 
addNewTaskBtn.addEventListener("click", function() {
    if (isInputEmpty()) {
        alert("Please, write what you want to do");
    } else {
        hideNoTaskInfo();
        createTask(tasks);
    }
});

// When user delete task
list.addEventListener("click", e => {
    if(e.target.classList.contains("delete--btn")) {
        e.target.deleteTask(e);
    }
})

