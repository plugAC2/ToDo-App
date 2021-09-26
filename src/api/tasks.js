import {KEY_API, URL_API} from "./const.js"

/**
 * Fetch all tasks
 * @param {function} successCallback - Function that saves incoming data
 */
export const getTasks = async (successCallback) => {
    try {
        const response = await fetch(`${URL_API}/tasks`, {
            headers: {
                Authorization: KEY_API,
            },
        });

        const data = await response.json();

        if (data.error || typeof successCallback !== "function") {
            throw new Error("Błąd!");
        }

        successCallback(data.data);
    } catch (err) {
        console.log(err);
    }
};

export const postTask =  async (task) => {
    try {
        const response = await fetch(`${URL_API}/tasks`, {
            method: "POST",
            headers: {
                Authorization: KEY_API,
                "Content-Type": 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                title: task.title,
                description: task.description,
                status: task.status
            })
        })
    } catch (err) {
        console.log(err)
    }
}
