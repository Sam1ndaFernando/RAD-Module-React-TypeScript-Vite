
export default function ButtonComponent(props : any){

    return(
        <div>
            <button onClick={() => props.onClick(props.name)}>{props.name}</button>
        </div>

    )
}