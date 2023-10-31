
import Content from "../ContentPage";
import InputField from "../FromInput";
import { useBlogData } from "./BlogDataProvider";
import { GetContentComponent } from "./ContentFactory";
import {useMemo} from "react";

export default function BlogEditorDisplay(){
    const data = useBlogData();
    console.log(data.BUID, "blog");

    const elements = useMemo(()=>{
        return data.Content.map(x => {
        return (<GetContentComponent data={x}/>);
       }) 
    }, [data])
   
   console.log(data)

    return(
        <>
         <Content
             header={
                <div className="center">
                    <InputField className="font-large text-center" invisable={true} placeholder="Title" onValueChanged={(value: string) => data.EditHeader(value)}/>
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