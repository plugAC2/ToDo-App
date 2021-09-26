export default function addNewTaskToTasks(taskBeingAdd, addTasksToArrayFunction) {
    if (typeof taskBeingAdd !== "undefined") {
        addTasksToArrayFunction(prev => {
            return [...prev, taskBeingAdd]
        })
    }
}