import { KEY_API, URL_API } from "./const";

/**
 * Fetch all operations
 * @param {string} id - ID of task
 * @param {function} successCallback - Function that saves incoming data
 */
export const getOperations = async (id, successCallback) => {
    try {
        const response = await fetch(`${URL_API}/tasks/${id}/operations`, {
            headers: {
                Authorization: KEY_API,
            }
        });

        const data = await response.json();

        if (data.error || typeof successCallback !== "function") {
            throw new Error("Not loaded!");
        }

        successCallback(data.data);
    } catch (err) {
        console.log(err);
    }
};
