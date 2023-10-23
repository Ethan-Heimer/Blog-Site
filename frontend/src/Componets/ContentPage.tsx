type TContentProperties = {
    header: JSX.Element,
    content: JSX.Element
};

export default function Content(props: TContentProperties){
    return(
        <div className="w-50">
            <div className="block">
                {props.header}
            </div>

            <div className="bgc-one pad-1 fit-max relative">
                {props.content}
            </div>
        </div>
    )
}