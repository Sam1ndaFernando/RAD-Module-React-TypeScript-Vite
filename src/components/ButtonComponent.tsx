import * as React from "react";

export default function buttonComponent(props : {childern : React.ReactNode}){

    return(
        <>
            <button>{props.childern}</button>
        </>

    )
}