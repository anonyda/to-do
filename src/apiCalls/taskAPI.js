
// const serverURL = 'https://todo-api-express.herokuapp.com/tasks'
const serverURL = 'http://localhost:3000/tasks';

export const fetchAllTasks = async () => {
    try{
        let response = await fetch(serverURL);
        return await response.json(); 
    }catch(error){
        console.log(error);
    }
    
}

export const addTaskToServer = async (task) => {
    try{
        let response = await fetch(serverURL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        });
        return await response.json();
    }catch(error){
        console.log(error);
    }
   
}
// returning a response
// fetching same URL
export const deleteTaskFromServer = async (taskId) => {
    try{
        let response = await fetch(`${serverURL}/${taskId}`, {
            method: 'DELETE',
        });
        if(response.status === 204){
            return true;
        }
        return await response.json();
    }catch(error){
        console.log(error);
    }
    
}

export const updateTaskOnServer = async (taskId, task) => {
    try{

        let response = await fetch(`${serverURL}/${taskId}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        });
        return await response.json();
    }catch(error){
        console.log(error);
    }
}

