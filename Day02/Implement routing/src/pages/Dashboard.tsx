import {Link} from "react-router-dom";

export function Dashboard() {
    return(
        <>
            Dashboard
            <br/>
            <Link to="/add">Add Customer</Link>
            <Link to="/delete">Delete Customer</Link>
            <Link to="/update">Update Customer</Link>
        </>
    )
}