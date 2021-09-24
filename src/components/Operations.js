import {getOperations} from "../api/operations";
import {useEffect, useState} from "react";

export default function Operations({id}) {

    const [operations, setOperations] = useState([]);

    function saveOperations(data) {
        setOperations(data)
    }

    useEffect(() => {
        getOperations(id, x => saveOperations(x));
    }, [id]);

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