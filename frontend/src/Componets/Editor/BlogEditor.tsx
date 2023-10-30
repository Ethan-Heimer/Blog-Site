import {createContext, useState, useContext} from "react";
import BlogEditorDisplay from "./BlogEditorDisplay";
import BlogEditorOptions from "./BlogEditorOptions";
import { TEditorType } from "./ContentFactory";

type TEditorDataProviderProps = {
    children: any
}

type TEditorData = {
 Content: Array<TEditorContent>;

 AddContentData: Function;
 RemoveContentData: Function;
}

export type TEditorContent = {
    dataType: TEditorType,
    content: String
}

const EditorData: TEditorData = {
  Content: [],

  AddContentData: () => {},
  RemoveContentData: () => {}
}

const editorContext = createContext(EditorData);

function EditorDataProvider(props: TEditorDataProviderProps){
    const [content, SetContent] = useState([] as TEditorContent[]);

    const AddContent = (data: TEditorContent) => {
        let newContent: TEditorContent[] = [...content];
        newContent.push(data);

        SetContent(newContent); 
    }

    const RemoveContent = (data: TEditorContent) => {
        let newContent: TEditorContent[] = [...content];
        newContent = newContent.filter((item)=> item !== data);

        SetContent(newContent);
    }

    return (
        <editorContext.Provider value={{Content: content, AddContentData: AddContent, RemoveContentData: RemoveContent} as TEditorData}>
            {props.children}
        </editorContext.Provider>
    )
}


export default function BlogEditor(){
    return (
        <div className = "center">
            <EditorDataProvider>
                <BlogEditorDisplay/>
                <BlogEditorOptions/>
            </EditorDataProvider>
        </div>
    )
}

export function useEditorData(){
    return useContext(editorContext);
}