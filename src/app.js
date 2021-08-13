
import { getTasks, createNewTask } from "./actions/domOperations.js";
import { displayDate } from "./utils/format.js";

let taskSubmitButton = document.getElementById('taskForm');
taskSubmitButton.onsubmit = createNewTask;

displayDate();
getTasks();