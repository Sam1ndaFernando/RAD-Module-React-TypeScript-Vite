import './App.css';
import {Item, Item2} from "./components/item.tsx";


function App() {

/*    const bool: boolean = true

    return (<div>
            {bool ? 'true' : 'false'}
            <button>click me</button>

        </div>
    );*/




    return(

        <>

        <Item title="RAD 1 title" desc="DESC1"/>
        <Item title="RAD 2 title" desc="DESC2"/>
        <Item title="RAD 3 title" desc="DESC3"/>
        <Item2 title={"Title"} desc={"023"}/>
        </>
    )

}
export default App;


