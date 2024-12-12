import * as React from "react";

export default function Subject(props : {name: string, children : React.ReactNode}){

    return(
        <>

            <h2>{props.children}</h2>
            <h1>{props.name}</h1>

        </>

    )
}