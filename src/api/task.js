import {KEY_API, URL_API} from "./const.js";

export const getTask = async (taskId, successCallback) => {
    try {
        const response = await fetch(`${URL_API}/tasks`, {
            headers: {
                Authorization: KEY_API,
            },
        });
        const data = await response.json();
        const task = data.data.filter(element => {
            if (element.id === taskId) {
                return element;
            }
            return null;
        })

        if (data.error || typeof successCallback !== "function") {
            throw new Error("Błąd!");
        }

        successCallback(...task);
    } catch (err) {
        console.log(err);
    }
};
