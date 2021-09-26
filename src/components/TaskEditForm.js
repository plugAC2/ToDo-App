import React, {useState} from "react";
import {Link} from "react-router-dom";
import {updateTask} from "../api/putTask";

export default function TaskEditForm({tasks, taskId}) {

    const tasksFiltered = tasks.filter(element => {
        if (element.id === taskId) {
            return element;
        }
        return null;
    })[0];


    const [taskEdit, setTaskEdit] = useState(() => {
        if (typeof tasksFiltered === "undefined") {
            return {
                title: "",
                    description: "",
                status: "open",
                addedDate: new Date()
            }
        }
          return tasksFiltered
    }

    )

    function getDate() {
        const timeStamp = Date.now();
        return  new Date(timeStamp).toUTCString();
    }

    function handleTaskForm(event) {
        setTaskEdit(prev => {
            return (
                {
                    ...prev,
                    [event.target.id]: event.target.value,
                    addedDate: getDate()
                }
            )
        })
    }

    return (
        <form>
            <div>
                <p>Subject of a task: </p>
                <input id="title" type="text" placeholder="Subject" value={taskEdit.title}
                       onChange={(e) => handleTaskForm(e)}/>
                <br/>____________________________________________<br/>
                <p>Description of a task: </p>
                <input id="description" type="text" placeholder="Description" value={taskEdit.description}
                       onChange={(e) => handleTaskForm(e)}/>
            </div>
            <Link to='/tasks'>
                <button>Back</button>
            </Link>

            <button onClick={() => updateTask(taskId, taskEdit)}>Save</button>
            <p>
                {taskEdit.title}
                <br/>
                {taskEdit.description}
                <br/>
                {/*{taskEdit.addedDate.toString()}*/}
            </p>
        </form>
    )
}
// todo: get one task and implement form