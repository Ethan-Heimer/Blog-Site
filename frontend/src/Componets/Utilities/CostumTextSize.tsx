type TCSC = {
    size: number | string;
    children: any,

    className?: string;
}

export default function CostumeTextSize(props: TCSC){
    return(
        <p className={props.className} style={{fontSize: props.size}}>{props.children}</p>
    )
}