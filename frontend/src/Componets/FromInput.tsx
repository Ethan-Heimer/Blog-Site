import {useState} from "react";

type TInputField = {
    lable?: string;
    type?: string;
    placeholder?: string;
    invisable?: boolean;

    className? :string

    onValueChanged: Function;
}

export default function InputField(props: TInputField){
    const [value, setValue] = useState(""); 

    const updateValue = (value: string) => {
        setValue(value);
        props.onValueChanged(value);
    }

    return (
        <div className="column m-1">
            {
                props.lable && <label className="font-med">{props.lable}</label>
            }
            <input className={(props.invisable ? "bgc-invisable" : "bgc-three") + " " + props.className} type={props.type != undefined ? props.type : "text"} name={props.lable} onChange={e => updateValue(e.target.value)} placeholder={props.placeholder}/>
        </div>
    )
}