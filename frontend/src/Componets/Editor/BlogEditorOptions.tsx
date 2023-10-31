
import GetContentObject, {THeader, TTextBox } from "./ContentFactory";
import EditorOptionButton from "./EditorOptionButton";
import { TBlogContent, useBlogData } from "./BlogDataProvider";

export default function BlogEditorOptions(){
    const blogData = useBlogData();

    return (
        <div className = "bgc-one w-50 pad-1 center-row m-1">
            <EditorOptionButton IconName="fa-heading" OptionName="Header" Factory={():TBlogContent => GetContentObject<THeader>(THeader)} AddFunc={(data: TBlogContent) => blogData.AddContentData(data)}/>
            <EditorOptionButton IconName="fa-font" OptionName="TextBox" Factory={():TBlogContent => GetContentObject<TTextBox>(TTextBox)} AddFunc={(data: TBlogContent) => blogData.AddContentData(data)}/>
        </div>
    )
}