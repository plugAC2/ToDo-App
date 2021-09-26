import React, {useState} from "react";
import Operations from "./Operations";
import {Link} from "react-router-dom";

export default function TasksElements({tasks, deleteTask}) {

    return (
        <div>
            <ul>
                {tasks.map((e, index) => {

                    const date = new Date(e.addedDate).toUTCString();

                    return (
                        <li key={"tasksList" + e.id + index}>
                            <h2>Title: {e.title}</h2>
                            <h3>Description: {e.description}</h3>
                            <h4>State: {e.status}</h4>
                            <h5>Task added: {date}</h5>
                            <ol>
                                <Operations id={e.id}/>
                            </ol>
                            <Link to={`/tasks/operations/addOperation/${e.id}`}>
                                <button>Add an operation</button>
                            </Link>
                            <button>Finish</button>
                            <Link to={`/tasks/editTask/${e.id}`}>
                                <button>Edit</button>
                            </Link>

                            <button onClick={() => deleteTask(e.id)}>Delete</button>
                            <br/>
                            <br/>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}