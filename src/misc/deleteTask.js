export default function deleteTask(tasks, id) {
    return tasks.filter(x => {
        if (x.id !== id) {
            return x;
        }
    })
}