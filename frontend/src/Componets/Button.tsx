type TButtonProps = {
    children: any;
    onClick: Function;

}

export default function Button(props: TButtonProps){
    console.log(props.children);

    return(
        <button className="block m-inline-1 button" onClick={() => props.onClick()}>
            {props.children}
        </button>
    )
}