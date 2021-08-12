import { fetchAllTasks } from "../apiCalls/taskAPI.js";
import { createTask } from "../components/task.js";

export const getTasks = async () => {
    let taskData = await fetchAllTasks();
    taskData.data.forEach((task) => {
        createTask(task);
    })
}