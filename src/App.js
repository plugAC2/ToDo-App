import {getTasks} from "./api/tasks";
import {useEffect, useState} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import addNewTaskToTasks from "./misc/addNewTaskToTasks";
import deleteTask from "./misc/deleteTask";

import Home from "./components/Home";
import NewTask from "./components/NewTask";
import TaskEditForm from "./components/TaskEditForm";
import Task from "./components/Task";

function App() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({});


    useEffect(() => {
        try {
            getTasks(x => setTasks(x));
        } catch (e) {
            console.log("Tasks not loaded properly. Details: " + e)
        }
    }, []);

    useEffect(() => {
        try {
            addNewTaskToTasks(newTask, setTasks);
        } catch (e) {
            console.log("Task not added to the array. Details: " + e)
        }
    }, [newTask])

    function handleDelete(taskId) {
        setTasks(deleteTask(tasks, taskId))
    }

    return (
        <div className="App">
            <BrowserRouter>
                <Route path='/' component={Home}/>
                <Route path='/new'>
                    <NewTask onNewTask={setNewTask}/>
                </Route>
                <Route exact path='/tasks'>
                    {/*<TasksElements tasks={tasks} deleteTask={handleDelete}/>*/}
                    {tasks.map(e => {
                        return (
                            <Task key={"tasks " + e.id} id={e.id} title={e.title} description={e.description} status={e.status} deleteTask={handleDelete}/>
                        )
                    })}
                </Route>
                <Route exact path='/tasks/editTask/:id' render={({match}) => <TaskEditForm tasks={tasks} taskId={match.params.id}/>}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
