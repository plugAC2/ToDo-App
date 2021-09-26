import {Link} from "react-router-dom";

export default function Home() {
    return (
        <ul style={{listStyle: "none"}}>
            <li>
                <Link to="/">
                    <button>Home</button>
                </Link>
            </li>
            <li>
                <Link to="/new">
                    <button>Create a new task.</button>
                </Link>
            </li>
            <li>
                <Link to="/tasks">
                    <button>Show all tasks.</button>
                </Link>
            </li>
        </ul>
    )
}