import { TBlogContent } from "./BlogDataProvider";
import HeaderInputField from "./input/HeaderInput";
import TextBox from "./input/TextBoxInput";

export class TEditorType{};

export class THeader implements TEditorType{};
export class TTextBox implements TEditorType{};

export default function GetContentObject<T extends TEditorType>(type: (new () => T)) :TBlogContent{
    const content = {} as TBlogContent;
    
    content.dataType = type.name;

    return content
}

type TComponentProps = {
    data: TBlogContent;
}

export function GetContentComponent(props: TComponentProps){
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