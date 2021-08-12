import { addTaskToServer, fetchAllTasks } from "../apiCalls/taskAPI.js";
import { createTaskDiv } from "../components/task.js";

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
    console.log(taskData);
    taskInput.value = "";

    // console.log(JSON.stringify(task));
}

export const deleteTask = async (event) => {
    console.log(event);
    if(confirm('Do you really want to delete this task?')){
        let taskId = event.target.parentNode.id;
        console.log(taskId);
    }
}

