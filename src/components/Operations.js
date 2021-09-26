import {useState} from "react";
import {postOperation} from "../api/operations";

import Operation from "./Operation";

export default function Operations({id, operations, setOperations, status, form, setForm}) {

    const [newDescription, setNewDescription] = useState("")

    function handleInput(e) {
        setNewDescription(e.target.value);
    }


    function handleAddOperation(e) {
        e.preventDefault();
        postOperation(id, newDescription)
        setOperations(prev => {
            return [...prev, {
                description: newDescription,
                timeSpent: 0
            }];
        });
        setNewDescription("");
        setForm(prev => !prev);
    }

    function deleteOperation(id) {
        setOperations(prev => {
            return prev.filter(e => {
                if (e.id !== id) {
                    return e;
                }
                return null;
            })
        })
    }

    return (
        <div>
            <ol>
                {operations.map((e, index) => {
                    return (
                        <li key={"operations list" + e.id}>
                            <Operation description={e.description} id={e.id} onRemovalOperation={deleteOperation}
                            timeSpent={e.timeSpent} status={status}/>
                        </li>
                    )
                })}
            </ol>
            <form hidden={form}>
                <input type="text" value={newDescription} onChange={e => handleInput(e)}/>
                <button type="submit" onClick={(e) => handleAddOperation(e)}>Add+</button>
            </form>
        </div>
    )
}