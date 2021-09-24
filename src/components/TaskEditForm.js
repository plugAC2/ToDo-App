import React, {useState} from "react";

export default function TaskEditForm({taskId, renderEditForm}) {

    const [taskEdit, setTaskEdit] = useState({
        title: "",
        description: "",
        status: "open",
        addedDate: new Date()
    })

    function handleTaskForm(event) {
        setTaskEdit(prev => {
            return (
                {
                    ...prev,
                    title: event.target.value
                }
            )
        })
    }


    return (
        <>
            <div>
                <p>Subject of a task: </p>
                <input type="text" placeholder="Subject" value={taskEdit.title}
                       onChange={(e) => handleTaskForm(e)}/>
                <br/>____________________________________________<br/>
                <p>Description of a task: </p>
                <input type="text" placeholder="Description" value={taskEdit.title}
                       onChange={(e) => handleTaskForm(e)}/>
            </div>
            <button onClick={renderEditForm}>Back</button>
            <button onClick={renderEditForm}>Save</button>
        </>
    )
}
// todo: get one task and implement form