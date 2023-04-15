window.addEventListener("load", () => {
    const form = document.querySelector(".new-task"); 
    const input = document.getElementById("add-task");
    const tasksList = document.getElementById("tasks");    
    const addTaskFocus = document.getElementById("add-task-focus-button");

    addTaskFocus.addEventListener("click", () => {
        input.focus();
    });

    let tasks = [];

    function Task(content, ) {
        this.content = content,
        this.addedDate = new Date(), 
        // Dodać historie edycji

        this.edit = function(newContent) {
            this.content = newContent
        }
    }

    function addNewTask(content) {
        const task_el = document.createElement("div");
        task_el.classList.add("task");

    }

});


