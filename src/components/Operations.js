import {getOperations} from "../api/operationsByTask";
import {useEffect, useState} from "react";

export default function Operations({id}) {

    const [operations, setOperations] = useState([]);

    useEffect(() => {
        try {
            getOperations(id, x => setOperations(x));
        } catch (e) {
            console.log("Operations not loaded properly. Details: " + e);
        }

    }, [id]);

    console.log(operations)

    return (
        <div>
            {operations.map((e, index) => {
                const date = new Date(e.addedDate);
                return (
                    <li key={e.id + index}>
                        <h3>Operation: {e.description}</h3>
                        <h4>Date of creation: {date.getDay()}.{date.getMonth()}.{date.getFullYear()}r.</h4>
                    </li>
                )
            })}
        </div>
    )
}