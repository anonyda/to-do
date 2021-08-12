
const serverURL = 'http://localhost:3000/tasks'

export const fetchAllTasks = async () => {
    let data = await fetch(serverURL);
    return await data.json(); 
}

