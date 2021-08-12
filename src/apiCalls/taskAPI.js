
const serverURL = 'http://localhost:3000/tasks'

export const fetchAllTasks = async () => {
    let response = await fetch(serverURL);
    return await response.json(); 
}

export const addTaskToServer = async (task) => {
    let response = await fetch(serverURL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    });
    return await response.json();
}

