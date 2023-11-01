type TContentProperties = {
    header: JSX.Element,
    content: JSX.Element,

    className?: String;
};

export default function Content(props: TContentProperties){
    return(
        <div className={"w-50 " + props.className}>
            <div className="block block-color-one">
                {props.header}
            </div>

            <div className="bgc-one pad-1 fit-max relative">
                {props.content}
            </div>
        </div>
    )
}