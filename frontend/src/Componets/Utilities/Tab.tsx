
type TTabProps= {
    label: string;
    pushed: boolean;

    onPressed: () => void;

    className?: string;
}

export default function Tab(props: TTabProps){
    return(
        <button onClick={() => props.onPressed()} className={"block block-color-one tab " + (props.pushed? "pressed " : " ") + props.className}>
            <p className="center text-block-shadow">{props.label}</p>
        </button>
    )
}