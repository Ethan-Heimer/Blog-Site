import Content from "../ContentPage";
import InputField from "../FromInput";
import { useEditorData } from "./BlogEditor"

export default function BlogEditorDisplay(){
    const editorData = useEditorData();
   
    return(
        <form className="w-100 center m-1">
            <Content
             header={
                <div className="center">
                    <InputField className="font-large text-center" invisable={true} placeholder="title" onValueChanged={() => {}}/>
                </div>
             }
             content={<p>test</p>}/>
        </form>
    )
}