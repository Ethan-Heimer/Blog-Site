import InputField from "../../FromInput";
import { TEditorContent } from "../BlogEditor"

type THeaderInput = {
    data: TEditorContent;
}

export default function HeaderInputField(props: THeaderInput){
    const BindData = (value: string) => {
        props.data.content = value;
    }
    
    return (
        <InputField className="w-100 font-large" onValueChanged={BindData}/>
    )
}