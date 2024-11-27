export function Item({title, desc} : {title :string , desc :string}) {
    return(
        <>
            <h2>{title}</h2>
            <h2>RAD</h2>
            <p>{desc}</p>
        </>


    )
}

export function Item2(props : {title: string, desc : string} ) {
    return(
        <>
            <h2>{props.title}</h2>
            <h2>RAD</h2>
            <p>{props.desc}</p>
        </>
    )
}


