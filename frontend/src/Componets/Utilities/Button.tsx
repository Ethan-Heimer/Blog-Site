type TButtonProps = {
    children: any;
    onClick: React.MouseEventHandler<HTMLButtonElement>;

    className?: string;
    ButtonType?: ButtopnType;
}

export enum ButtopnType{
    Primary,
    Accent,
    Danger,
}

export default function Button(props: TButtonProps){
    var buttonColor: string = ""

    if(props.ButtonType == ButtopnType.Accent)
        buttonColor = "block-color-two"
    else if(props.ButtonType == ButtopnType.Danger)
        buttonColor = "block-color-three"
    else
        buttonColor = "block-color-one"

    return(
        <button className={"block button " + props.className + ` ${buttonColor}`} onClick={(e) => props.onClick(e)}>
            {props.children}
        </button>
    )
}