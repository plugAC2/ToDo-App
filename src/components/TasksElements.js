import React, {useState} from "react";
import Operations from "./Operations";
import TaskEditForm from "./TaskEditForm";

export default function TasksElements({tasks}) {

    const [hideListShowForm, setHideListShowForm] = useState(false);
    const [editedTaskId, setEditedTaskId] = useState("");

    function renderEditForm(taskId) {
        setHideListShowForm(true);
        setEditedTaskId(taskId);
    }


    return (
        <div>
            <ul hidden={hideListShowForm}>
                {tasks.map(e => {

                    const date = new Date(e.addedDate);

                    return (
                        <li key={e.id}>
                            <h2>Subject: {e.title}</h2>
                            <h3>Description: {e.description}</h3>
                            <h4>State: {e.status}</h4>
                            <h5>Task added: {date.getDay()}.{date.getMonth()}.{date.getFullYear()}r.</h5>
                            <ol>
                                <Operations id={e.id}/>
                            </ol>
                            <button>Finish</button>
                            <br/>
                            <br/>
                            <br/>
                            <button onClick={() => renderEditForm(e.id)}>Edit</button>
                            <button>Delete</button>
                            <br/>
                            <br/>
                        </li>
                    )
                })}
            </ul>
            <form hidden={!hideListShowForm}>
                <TaskEditForm taskId={editedTaskId} renderEditForm={renderEditForm}/>
            </form>
        </div>
    )
}