import React, {useState} from "react";
import {Link} from "react-router-dom";

export default function NewTask({onNewTask}) {

    const [newTask, setNewTask] = useState({
        title: "",
        description: "",
        status: "open",
        addedDate: ""

    })

    function getDate() {
        const timeStamp = Date.now();
        return new Date(timeStamp).toUTCString();
    }

    function handleTaskForm(event) {
        setNewTask(prev => {
            return (
                {
                    ...prev,
                    [event.target.id]: event.target.value,
                    addedDate: getDate()
                }
            )
        })
    }

    function addTask() {
        onNewTask(newTask);
    }


    return (
        <div>
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
        </div>
    )
}