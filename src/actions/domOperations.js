import { addTaskToServer, deleteTaskFromServer, fetchAllTasks, updateTaskOnServer } from "../apiCalls/taskAPI.js";
import { createTaskDiv } from "../components/task.js";
import { formatTime } from "../utils/format.js";

let taskInput = document.getElementById('task');



export const getTasks = async () => {
    let tasks = await fetchAllTasks();
    tasks.data.forEach((task) => {
        createTaskDiv(task);
    })
}

export const createNewTask = async (event) => {
    event.preventDefault();
    let task = {
        "content": taskInput.value,
        "createdAt": new Date(),
        "updatedAt": null
    }

    let taskData = await addTaskToServer(task);
    if(taskData.data){
        createTaskDiv(taskData.data)
    }
    taskInput.value = "";

}

export const deleteTask = async (event) => {
    if(confirm('Do you really want to delete this task?')){
        let taskId = event.target.parentNode.id;
        let response = await deleteTaskFromServer(taskId);
        if(response.error){
            console.log(response);
        }
        else{
            document.getElementById(taskId).remove();
        }
    }
}



export const updateTask = async (event) => {

    let selectedItem = event.target.parentNode;

    if(!selectedItem.querySelector('.checkbox').checked){
        let taskData = selectedItem.querySelector('.task-data');
        event.target.style.display = 'none';
        event.target.nextElementSibling.style.display = 'unset';
        taskData.contentEditable = true;
        taskData.classList.add('box-shadow');
    }else{
        alert("Task is already completed! Can't edit :(");
    }
    

}

export const updateTaskContent = async (event) => {
    let selectedItem = event.target.parentNode;
    let taskData = selectedItem.querySelector('.task-data');
    
    event.target.style.display = 'none';
    event.target.previousElementSibling.style.display = 'unset';
    taskData.contentEditable = false;
    taskData.classList.remove('box-shadow');

    if(selectedItem.isEdited){
        let task = {
            content: taskData.innerText,
            createdAt: selectedItem.querySelector('.date-time').innerText,
            updatedAt: new Date(),
            isComplete: selectedItem.querySelector('.checkbox').checked
        }
    
        await updateTaskOnServer(selectedItem.id, task);
        selectedItem.isEdited = false;
        selectedItem.querySelector('.date-time').innerText = formatTime(task.updatedAt);
    }

    

}

export const isCompletedTask = async (event) => {
    let selectedItem = event.target.parentNode;
    selectedItem.querySelector('.checkbox').checked
        ? event.target.nextElementSibling.classList.add('checked') 
        : event.target.nextElementSibling.classList.remove('checked')

    let task = {
        content: selectedItem.querySelector('.task-data').innerText,
        createdAt: selectedItem.querySelector('.date-time').innerText,
        updatedAt: new Date(),
        isComplete: selectedItem.querySelector('.checkbox').checked
    }

    await updateTaskOnServer(selectedItem.id, task);
    selectedItem.querySelector('.date-time').innerText = formatTime(task.updatedAt);
}

