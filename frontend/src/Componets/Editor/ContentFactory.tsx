import { TEditorContent } from "./BlogEditor";
import HeaderInputField from "./input/HeaderInput";
import TextBox from "./input/TextBoxInput";

export class TEditorType{};

export class THeader implements TEditorType{};
export class TTextBox implements TEditorType{};

export default function GetContentObject<T extends TEditorType>(type: (new () => T)) :TEditorContent{
    let content = {} as TEditorContent;
    const Type = typeof(content.dataType);
    
    content.dataType = type.name;

    return content
}

type TComponentProps = {
    data: TEditorContent;
}

export function GetContentComponent(props: TComponentProps){
    console.log(props.data.dataType === "THeader", props.data.dataType === "TTextBox");

    if(props.data.dataType === "THeader"){
        return (
            <HeaderInputField data={props.data}/>
        );
    }
    else if(props.data.dataType === "TTextBox"){
        return (
            <TextBox data={props.data}/>
        )
    }
    else{
        return (
            <p>Test</p>
        );
    }

}