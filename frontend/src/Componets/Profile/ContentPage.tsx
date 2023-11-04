type TContentProperties = {
    header: JSX.Element,
    content: JSX.Element,

    className?: string;
};

export default function Content(props: TContentProperties){
    return(
        <div className={props.className} >
            <div className="block block-color-one w-100">
                {props.header}
            </div>

            <div className="bgc-one pad-1 relative w-100">
                {props.content}
            </div>
        </div>
    )
}