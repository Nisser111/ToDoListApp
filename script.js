// selectors
const addNewTaskInput = document.querySelector(".add_new_task--input");
const addNewTaskBtn = document.querySelector(".add_new_task--btn");
const addTaskBtn = document.querySelector(".add-task-empty-task-list");
const noTaskInfo = document.querySelector("#no-task-info");
const list = document.querySelector(".tasks-list ul");
const tasksSection = document.querySelector(".tasks-list");

// tasks list
let tasks = [];
let usedIndex = [];

// auto focus to add new task input
window.onload = () => {
  addNewTaskInput.focus();
  showNoTaskInfo();
};

// task constructor
function Task(v) {
  this.text = v;
  this.dateOfAdded = new Date();
  this.index = this.generateId();
  this.renderTask = function () {
    let newTask = document.createElement("li");
    newTask.classList.add("task");

    // If browswere support tempalte tag
    if ("content" in document.createElement("template")) {
      const template = document.querySelector("#taskTempalte");
      const clone = template.content.cloneNode(true);

      const input = clone.querySelector(".task-text");
      const deleteBtn = clone.querySelector(".edit--btn");
      const editBtn = clone.querySelector(".delete--btn");
      input.value = this.text;
      deleteBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
      editBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

      newTask.append(clone);
    }

    list.append(newTask);
  };
}

// create task id
Task.prototype.generateId = function () {
  function generate() {
    return (Math.random() + 1).toString(36).substring(7);
  }

  let r = generate();
  while (true) {
    if (usedIndex.includes(r)) r = generate();
    else usedIndex.push(r);
    return r;
  }
};

// is input empty
function isInputEmpty() {
  const input = document.querySelector(".add_new_task--input");
  if (!input.value) return true;
  else return false;
}

// hide info when didn't tasks
function hideNoTaskInfo() {
  if (!document.querySelectorAll(".tasks-list ul li").length)
    noTaskInfo.style.display = "none";
}

// show info when didn't tasks
function showNoTaskInfo() {
  if (!document.querySelectorAll(".tasks-list ul li").length)
    noTaskInfo.style.display = "block";
}

// focus to input when add_task_button clicked
addTaskBtn.addEventListener("click", () => {
  addNewTaskInput.focus();
});

// create task
function createTask() {
  let task = new Task(addNewTaskInput.value);
  addNewTaskInput.value = "";
  tasks.push(task);
  task.renderTask();
}

// When add new task button was clicked
addNewTaskBtn.addEventListener("click", () => {
  if (isInputEmpty()) {
    alert("Please, write what you want to do");
  } else {
    hideNoTaskInfo();
    createTask(tasks);
  }
});

addNewTaskInput.addEventListener("keydown", (e) => {
  if (e.keyCode == 13)
    if (isInputEmpty()) {
      alert("Please, write what you want to do");
    } else {
      hideNoTaskInfo();
      createTask(tasks);
    }
});

// When user delete or edit task
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash")) {
    const itemKey = e.target.parentElement.parentElement;
    itemKey.remove();
    hideNoTaskInfo();
    showNoTaskInfo();
  }

  if (e.target.classList.contains("fa-pen-to-square")) {
    const itemKey = e.target.parentElement.parentElement;
    const editInput = itemKey.querySelector(".task-text");

    // edit enable
    editInput.removeAttribute("readonly");
    editInput.focus();

    // change icon
    const btn = e.target.parentElement;
    btn.innerHTML = '<i class="fa-solid fa-check"></i>';

    // restoration initial state
    btn.addEventListener("click", (e) => {
      if (e.target.classList.contains("fa-check")) {
        btn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
        editInput.setAttribute("readonly", "");
      }
    });

    editInput.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        btn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
        editInput.setAttribute("readonly", "");
      }
    });
  }
});
