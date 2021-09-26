import React, {useState} from "react";
import {Link} from "react-router-dom";
import {postTask} from "../api/tasks";

export default function NewTask({onNewTask}) {

    const [newTask, setNewTask] = useState({
        title: "",
        description: "",
        status: "open",
    })

    function handleTaskForm(event) {
        setNewTask(prev => {
            return (
                {
                    ...prev,
                    [event.target.id]: event.target.value,
                }
            )
        })
    }

    function addTask() {
        postTask(newTask);
        onNewTask(newTask);
    }


    return (
        <div>
            <h2>New task</h2>
            <form>
                <p>Title of a task: </p>
                <input id="title" type="text" placeholder="Subject" value={newTask.title}
                       onChange={(e) => handleTaskForm(e)}/>
                <br/>____________________________________________<br/>
                <p>Description of a task: </p>
                <input id="description" type="text" placeholder="Description" value={newTask.description}
                       onChange={(e) => handleTaskForm(e)}/>
                <Link to='/tasks'>
                    <button onClick={() => addTask()}>Add task</button>
                </Link>
            </form>
        </div>
    )
}