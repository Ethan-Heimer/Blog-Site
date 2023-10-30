import Button from "../Button";
import Content from "../ContentPage";
import InputField from "../FromInput";
import { useEditorData } from "./BlogEditor"
import { GetContentComponent } from "./ContentFactory";
import {useEffect, ReactElement,useMemo} from "react";

export default function BlogEditorDisplay(){
    const editorData = useEditorData();

    let elements = useMemo(()=>{
        return editorData.Content.map(x => {
        return (<GetContentComponent data={x}/>);
       }) 
    },[editorData])
   
   console.log(editorData)

   
    return(
        <form className="w-100 center m-1">
            <Content
             header={
                <div className="center">
                    <InputField className="font-large text-center" invisable={true} placeholder="title" onValueChanged={() => {}}/>
                </div>
             }
             content={
                <>
                    {elements}
                </>
             }/>

             <Button onClick={() => {}}>Publish</Button>
        </form>
    )
}