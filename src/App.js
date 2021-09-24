import {getTasks} from "./api/tasks";
import {useEffect, useState} from "react";
import TasksElements from "./components/TasksElements";

function App() {

    const [tasks, setTasks] = useState([]);

    function saveTasks(data) {
        setTasks(data)
    }

    useEffect(() => {
        getTasks( x =>  saveTasks(x));
    }, []);

    return (
        <div className="App">
            <TasksElements tasks={tasks}/>

        </div>
    );
}

export default App;
