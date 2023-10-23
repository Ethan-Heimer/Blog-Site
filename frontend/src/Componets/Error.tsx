type TErrorProps = {
   message: string;
}

export default function ErrorMsg(props: TErrorProps){
    console.log(props.message, "error");
    
    return (
    <div className={props.message == "" ? "hidden" : "bgc-two m-1 pad-half"}>
        <p className={props.message == "" ? "hidden" : "font-color-one font-large"}>{ props.message }</p>
    </div>
    )
}