import { deleteTask } from '../actions/domOperations.js';

let taskList = document.getElementById('task-list');


export const createTaskDiv = (task) => {

    let taskDiv = document.createElement('div');
    taskDiv.id = task.taskId;
    taskDiv.classList.add('task');

    let isCompletedBox = document.createElement('input');
    isCompletedBox.type = 'checkbox';
    isCompletedBox.classList.add('checkbox');
    // isCompletedBox.addEventListener('change', isCompeletedTask);
    

    let taskData = document.createElement('span');
    taskData.classList.add('textarea');
    taskData.role = 'textbox';
    taskData.contentEditable = false;
    taskData.innerText = task.content;
    taskData.spellcheck = false;
    
    taskData.classList.add('task-data')

    if(task.isComplete){
        taskData.classList.add('checked');
        isCompletedBox.checked = true;
    }

    let taskLog = document.createElement('p');

    let updateCheck = document.createElement('i');
    updateCheck.classList.add('deleteBtn', 'fas', 'fa-check');
    updateCheck.style.display = 'none';
    // updateCheck.addEventListener('click', updateTaskContent);

    let updateBtn = document.createElement('i');
    updateBtn.id = task.id;
    updateBtn.classList.add('fas', 'fa-edit', 'deleteBtn');
    // updateBtn.addEventListener('click', updateTask);

    let deleteBtn = document.createElement('i');
    deleteBtn.id = task.id;
    deleteBtn.classList.add('deleteBtn', 'fas', 'fa-trash');
    deleteBtn.addEventListener('click', deleteTask);

    taskData.value = task.data;
    taskLog.innerText = task.createdAt;
    taskLog.classList.add('date-time');

    taskDiv.appendChild(isCompletedBox);
    taskDiv.appendChild(taskData);
    taskDiv.appendChild(taskLog);
    taskDiv.appendChild(updateBtn);
    taskDiv.appendChild(updateCheck);
    
    taskDiv.appendChild(deleteBtn);
    taskList.appendChild(taskDiv);
}
