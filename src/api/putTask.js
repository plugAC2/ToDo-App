import {KEY_API, URL_API} from "./const.js";

export const updateTask = async (taskId, task) => {

    try {
        const response = await fetch(`${URL_API}/tasks/${taskId}`, {
            headers: {
                Authorization: KEY_API,
                "Content-Type": 'application/json; charset=UTF-8'
            },
            method:"PUT",
            body: JSON.stringify({
                title: task.title,
                description: task.description,
                status: task.status
            })
        });
        await response.json();

    } catch (err) {
        console.log(err);
    }
};