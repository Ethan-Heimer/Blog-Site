
import Content from "../Profile/ContentPage";
import InputField from "../Utilities/FromInput";
import UploadFile from "../Utilities/UploadFile";
import { useBlogData } from "./BlogDataProvider";
import TextBox from "../Utilities/TextBoxInput";

export default function BlogEditorDisplay(){
    const data = useBlogData();
 
    return(
        <>
         <Content
         className="w-90"
             header={
                <div className="center">
                    <InputField required={true} className="font-large text-center w-80v" invisable={true} placeholder="Title" onValueChanged={(value: string) => data.EditHeader(value)} defaultValue={data.Header}/>
                </div>
             }
             content={
                <>
                    <TextBox defaultHeight={"50vh"} defaultValue={data.Content} onValueChanged={data.EditContent}/>
                    <UploadFile label="Thumbnail" onUpload={(d) => data.SetThumbnail(d)}/>
                </>
             }/>
        </>
    )
}