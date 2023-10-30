import { TEditorType } from "./ContentFactory";
import {TEditorContent } from "./BlogEditor";

type TOptionsProps = {
    IconName: String;
    OptionName: String;
    
    Factory: <T extends TEditorType>() => TEditorContent;
    AddFunc: (params: TEditorContent) => void;
}

export default function EditorOptionButton(props: TOptionsProps){
    const AddData = () => {
        const data: TEditorContent = props.Factory();
        props.AddFunc(data); 
    }
    
    return(
       <button onClick={AddData}>
            <div className = "bgc-three center pad-1 bind-parent hover-scale">
                <i className={`fa-solid ${props.IconName} font-xlarge parent-hover-tilt`}></i>
                <p>{props.OptionName}</p>
            </div>
       </button>
    )
}