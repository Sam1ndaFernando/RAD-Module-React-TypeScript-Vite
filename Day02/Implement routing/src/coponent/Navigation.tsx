import {Link} from "react-router-dom";

export function Navigation() {
    return(

        <>

        <header>
            <div>
                <Link to="/">Home</Link>
                <Link to="/add">Add</Link>
                <Link to="/update">Update</Link>
                <Link to="/delete">Delete</Link>
            </div>


        </header>
        </>
    )
}