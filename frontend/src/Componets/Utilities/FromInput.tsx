
type TInputField = {
    lable?: string;
    type?: string;
    placeholder?: string;
    invisable?: boolean;

    className? :string

    onValueChanged: Function;
    defaultValue?: string;

    required? :boolean
}

export default function InputField(props: TInputField){
    

    return (
        <div className="column m-1">
            {
                props.lable && <label className="font-med">{props.lable}</label>
            }
            <input className={(props.invisable ? "bgc-invisable" : "bgc-three") + " " + props.className} type={props.type != undefined ? props.type : "text"} name={props.lable} onChange={e => props.onValueChanged(e.target.value)} placeholder={props.placeholder} defaultValue={props.defaultValue} required={props.required}/>
        </div>
    )
}