
import Content from "../ContentPage";
import InputField from "../FromInput";
import UploadFile from "../UploadFile";
import { useBlogData } from "./BlogDataProvider";
import TextBox from "./input/TextBoxInput";

export default function BlogEditorDisplay(){
    const data = useBlogData();
 
    return(
        <>
         <Content
            width="w-90"
             header={
                <div className="center">
                    <InputField required={true} className="font-large text-center" invisable={true} placeholder="Title" onValueChanged={(value: string) => data.EditHeader(value)} defaultValue={data.Header}/>
                </div>
             }
             content={
                <>
                    <TextBox defaultValue={data.Content} onValueChanged={data.EditContent}/>
                    <UploadFile label="Thumbnail" onUpload={(d) => data.SetThumbnail(d)}/>
                </>
             }/>
        </>
    )
}