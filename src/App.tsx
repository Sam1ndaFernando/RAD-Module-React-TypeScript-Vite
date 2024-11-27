import './App.css';
import {Item} from "./components/item.tsx";


function App() {

    /*    const bool: boolean = true

        return (<div>
                {bool ? 'true' : 'false'}
                <button>click me</button>

            </div>
        );*/


/*    return (

        <>

            <Item title="RAD 1 title" desc="DESC1"/>
            <Item title="RAD 2 title" desc="DESC2"/>
            <Item title="RAD 3 title" desc="DESC3"/>
            <Item2 title={"Title"} desc={"023"}/>
        </>
    )*/
    //
    // return(
    //
    //     <div>
    //
    //         {/*<Item title={itemList.title[0]} desc={itemList.desc[0]}
    //         <Item title={itemList.title[1]} desc={itemList.desc[1]}
    //         <Item title={itemList.title[2]} desc={itemList.desc[2]}*/}
    //
    //         {/*<Item {...itemList[0]}/>*/}
    //         {/*<Item {...itemList[1]}/>*/}
    //         {/*<Item {...itemList[3]}/>*/}
    //
    //         {/*{*/}
    //         {/*    itemList.map((item) => (*/}
    //         {/*        <Item title={item.title} desc={item.desc}/>*/}
    //         {/*    ))*/}
    //         {/*}*/}
    //
    //
    //
    //
    //
    //     </div>
    //
    // )

    const itemArray = [];
    const itemList = [

        {
            title: "RAD 1 title",
            desc: "DESC1",

        },
        {
            title: "RAD 2 title",
            desc: "DESC2",

        },
        {
            title: "RAD 3 title",
            desc: "DESC3",

        }
    ]

    for (const itemArrayElement of itemList) {
        itemArray.push(
            <Item title={itemArrayElement.title} desc={itemArrayElement.desc}/>
        )
    }


    return(
        <div>
            {itemList.map((item) => (
                <Item title={item.title} desc={item.desc}/>
            ))}
            {itemArray}
        </div>

    )

}

// const itemList = [
//
//     {
//         title: "RAD 1 title",
//         desc: "DESC1",
//
//     },
//     {
//         title: "RAD 2 title",
//         desc: "DESC2",
//
//     },
//     {
//         title: "RAD 3 title",
//         desc: "DESC3",
//
//     },
// ]

export default App;


