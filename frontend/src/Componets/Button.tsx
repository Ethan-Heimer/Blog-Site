type TButtonProps = {
    children: any;
    onClick: React.MouseEventHandler<HTMLButtonElement>;

    className?: string;

}

export default function Button(props: TButtonProps){
    console.log(props.children);

    return(
        <button className={"block m-inline-1 button " + props.className} onClick={(e) => props.onClick(e)}>
            {props.children}
        </button>
    )
}