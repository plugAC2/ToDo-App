import {useEffect, useState} from "react";

export default function Operation({id, description, timeSpent, status, onRemovalOperation}) {

    const [showForm, setShowForm] = useState(true);
    const [inputTime, setInputTime] = useState(0);
    const [time, setTime] = useState(timeSpent);



    function handleAddTimeButton() {
        setShowForm(prev => !prev)
    }

    function handleInput(e) {
        setInputTime(parseInt(e.target.value));
    }

    function handleSave(e) {
        e.preventDefault();
        setTime(prev => prev + inputTime);
        console.log(time);
    }

    function showTime() {
        const hours = Math.floor(time/60);
        const minutes = time%60;
        if (minutes < 10){
            return `${hours}:0${minutes}`
        }
        return `${hours}:${minutes}`
    }
    let textTime =  "00:00";
    textTime=showTime();

    return (
        <div>
            <h4>
            <span>
            Operation: {description} <span> | </span>
            Time: {textTime} |
                <form style={{display:"inline"}}>
                    <input hidden={showForm} type="number" value={inputTime} onChange={e => handleInput(e)}/>
                    <button hidden={showForm} onClick={e => handleSave(e)}>Save</button>
                </form>
                <button hidden={!showForm} onClick={() => handleAddTimeButton()}>Add time</button>
                <button hidden={showForm} onClick={() => setShowForm(prev => !prev)}>Cancel</button>
                <button hidden={!showForm} onClick={() => onRemovalOperation(id)}>Delete</button>

            </span>
            </h4>
        </div>
    )
}