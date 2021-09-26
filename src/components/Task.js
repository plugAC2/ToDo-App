import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Operations from "./Operations";
import {getOperations} from "../api/operations";


export default function Task({title, description, id, status, deleteTask}) {

    const [taskStatus, setTaskStatus] = useState(status);
    const [showForm, setShowForm] = useState(true);
    const [operations, setOperations] = useState([]);

    let operationFetched

    useEffect(() => {
        if (typeof id !== "undefined") {
            try {
                getOperations(id, x => setOperations(x));
            } catch (e) {
                console.log("Operations not loaded properly. Details: " + e);
            }
        }
    }, [id]);

    useEffect(() => {

    }, [operations])

    return (
        <li key={"tasksList" + id}>
            <section>
                <h2>{title}</h2>
                <h3>{description}</h3>

                <button onClick={() => setShowForm(prev => !prev)}>Add an operation</button>

                <button>Finish</button>
                {/*metoda zmieniająca status*/}

                <Link to={`/tasks/editTask/${id}`}>
                    <button>Edit</button>
                </Link>

                <button onClick={() => deleteTask(id)}>Delete</button>
                <Operations id={id} form={showForm} setForm={setShowForm} operations={operations}
                            setOperations={setOperations} status={taskStatus}/>
            </section>
        </li>
    )
}