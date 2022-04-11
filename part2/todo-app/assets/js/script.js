let divNumber = 0; 
let checkboxes = document.querySelectorAll('input[type="checkbox"]');
let closeTasks = document.querySelectorAll('.close');
let taskList = document.querySelectorAll('.todo-task');

function addTodoDiv(divNumber, taskContent) {
    const putDivHere = document.querySelector('.todo-list');
    const newDiv = document.createElement("div");
    const newDivLight = document.createElement("div");
    newDiv.className = 'todo-task active';
    newDivLight.className = 'todo-task light active';
    newDiv.innerHTML = "\<input type=\"checkbox\" id=\"check-task-" + divNumber + "\"\> \<label for=\"check-task-" + divNumber + "\"\>\</label\> \<p class=\"todo-task-content\"\> "+ taskContent + " \</p\> \<img class=\"close\" src=\"assets/images/icon-cross.svg\"\>"
    newDivLight.innerHTML = "\<input type=\"checkbox\" id=\"check-task-" + divNumber + "\"\> \<label for=\"check-task-" + divNumber + "\"\>\</label\> \<p class=\"todo-task-content\"\> "+ taskContent + " \</p\> \<img class=\"close\" src=\"assets/images/icon-cross.svg\"\>"
    if (isNight) {
        putDivHere.appendChild(newDiv); 
    }
    else {
        putDivHere.appendChild(newDivLight); 
    }
    
}

function markAsCompleted() {
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', e => {
            if (checkbox.checked) {
                checkbox.parentNode.classList.add('completed');
                checkbox.parentNode.classList.remove('active');
                
            }
            else if (!checkbox.checked) {
                checkbox.parentNode.classList.remove('completed');
                checkbox.parentNode.classList.add('active');
            }
        })
    })
}


function deleteOneTask() {
    closeTasks.forEach(closeTask => {
        closeTask.addEventListener('click', e => {           
            closeTask.parentNode.classList.remove('active'); 
            closeTask.parentNode.classList.remove('completed'); 
            closeTask.parentNode.remove();
            showTasksLeft(); 
        })
    })
}


const clearCompletedBtn = document.getElementById('clear-completed');
clearCompletedBtn.addEventListener('click', e => {
    taskList.forEach(task => {
        if (task.classList.contains('completed')) {
            task.remove();
        }
    })
    taskList = document.querySelectorAll('.todo-task');
    showTasksLeft();
})


const taskLeftNb = document.getElementById('item-nb');
const noTaskLeftDiv = document.querySelector('.nothing');
let nb = 0;
let containsCompleted = false;
function showTasksLeft() {
    containsCompleted = false;
    nb = 0;
    taskList.forEach(task => {
        if (task.classList.contains('active')) {
            nb = nb + 1;
        }
        if (task.classList.contains('completed')) {
            containsCompleted = true;
        }
    })
    taskLeftNb.innerHTML = nb;
    if (nb == 0 && !containsCompleted) {
        noTaskLeftDiv.style.display = "flex";
    }
    else {
        noTaskLeftDiv.style.display = "none";
    }
}


const newTask = document.getElementById('new-todo');
document.addEventListener('keydown', e => {
    if (e.key == "Enter" && newTask.value != "") {
        addTodoDiv(divNumber, newTask.value);
        newTask.value = ""; 
        divNumber = divNumber + 1;
        checkboxes = document.querySelectorAll('input[type="checkbox"]');
        closeTasks = document.querySelectorAll('.close');
        taskList = document.querySelectorAll('.todo-task');
        markAsCompleted();
        deleteOneTask();
        showTasksLeft();
        showAllTasks();
  
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', e => {
                console.log('lu');
                showTasksLeft();
            })
        })
    }
})


const showActiveBtn = document.getElementById('show-active');
showActiveBtn.addEventListener('click', e => {
    showActiveBtn.classList.add('active');
    showCompletedBtn.classList.remove('active');
    showAllBtn.classList.remove('active');
    taskList.forEach(task => {
        if (task.classList.contains('active')) {
            task.style.display = "flex";
        }
        else {
            task.style.display = "none";
        }
    })
})



const showCompletedBtn = document.getElementById('show-completed');
showCompletedBtn.addEventListener('click', e => {
    showCompletedBtn.classList.add('active');
    showActiveBtn.classList.remove('active');
    showAllBtn.classList.remove('active');
    taskList.forEach(task => {
        if (task.classList.contains('completed')) {
            task.style.display = "flex";
        }
        else {
            task.style.display = "none";
        }
    })
})


const showAllBtn = document.getElementById('show-all');

function showAllTasks() {
    showAllBtn.classList.add('active');
    showActiveBtn.classList.remove('active');
    showCompletedBtn.classList.remove('active');
    taskList.forEach(task => {
            task.style.display = "flex";
    })
}

showAllBtn.addEventListener('click', e => {
    showAllTasks();
})


const nightMode = document.querySelector('.night-mode');
let isNight = true;
nightMode.addEventListener('click', e => {
    if (isNight) {
        document.body.classList.add('light');
        nightMode.classList.add('light');
        taskList.forEach(task => {
            task.classList.add('light');
        })
        noTaskLeftDiv.classList.add('light');
        document.querySelector('.bottom-menu').classList.add('light');
        document.querySelector('.add-todo').classList.add('light');
        document.querySelector('.mobile-submenu').classList.add('light');


        isNight = false;
    }
    else {
        document.body.classList.remove('light');
        nightMode.classList.remove('light');
        taskList.forEach(task => {
            task.classList.remove('light');
        })
        noTaskLeftDiv.classList.remove('light');
        document.querySelector('.bottom-menu').classList.remove('light');
        document.querySelector('.add-todo').classList.remove('light');
        document.querySelector('.mobile-submenu').classList.remove('light');


        isNight = true;
    }
})


var group = $(".todo-list").sortable({
    group: 'serialization',
    delay: 500,
    onDrop: function ($item, container, _super) {
      var data = group.sortable("serialize").get();
  
      var jsonString = JSON.stringify(data, null, ' ');
  
      $('#serialize_output2').text(jsonString);
      _super($item, container);
    }
  });
