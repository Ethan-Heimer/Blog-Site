import { useEditorData, TEditorContent } from "./BlogEditor";
import GetContentObject, { TEditorType, THeader, TTextBox } from "./ContentFactory";
import EditorOptionButton from "./EditorOptionButton";

export default function BlogEditorOptions(){
    const context = useEditorData();

    return (
        <div className = "bgc-one w-90 pad-1 center-row">
            <EditorOptionButton IconName="fa-heading" OptionName="Header" Factory={():TEditorContent => GetContentObject<THeader>()} AddFunc={(data: TEditorContent) => context.AddContentData(data)}/>
            <EditorOptionButton IconName="fa-font" OptionName="TextBox" Factory={():TEditorContent => GetContentObject<TTextBox>()} AddFunc={(data: TEditorContent) => context.AddContentData(data)}/>
        </div>
    )
}