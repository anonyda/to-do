
import { getTasks, createNewTask } from "./actions/domOperations.js";

let taskSubmitButton = document.getElementById('taskForm');
taskSubmitButton.onsubmit = createNewTask;

getTasks();