type TContentProperties = {
    header: JSX.Element,
    content: JSX.Element,

    className?: String;
    width: string;
};

export default function Content(props: TContentProperties){
    return(
        <div className={props.width + " " + props.className}>
            <div className="block block-color-one">
                {props.header}
            </div>

            <div className="bgc-one pad-1 fit-max relative">
                {props.content}
            </div>
        </div>
    )
}