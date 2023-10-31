
import Content from "../ContentPage";
import InputField from "../FromInput";
import { useEditorData } from "./BlogEditor"
import { GetContentComponent } from "./ContentFactory";
import {useMemo} from "react";

export default function BlogEditorDisplay(){
    const editorData = useEditorData();

    const elements = useMemo(()=>{
        return editorData.Content.map(x => {
        return (<GetContentComponent data={x}/>);
       }) 
    },[editorData])
   
   console.log(editorData)

   
    return(
        <>
         <Content
             header={
                <div className="center">
                    <InputField className="font-large text-center" invisable={true} placeholder="Title" onValueChanged={(value: string) => editorData.EditHeader(value)}/>
                </div>
             }
             content={
                <>
                    {elements}
                </>
             }/>
        </>
    )
}