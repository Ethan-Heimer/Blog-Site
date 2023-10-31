import {createContext, useState, useContext} from "react";
import BlogEditorDisplay from "./BlogEditorDisplay";
import BlogEditorOptions from "./BlogEditorOptions";
import SubmitBlog from "./input/SubmitBlog";

type TEditorDataProviderProps = {
    children: any
}

export type TBlogData = {
 Header: string;
 Content: Array<TBlogContent>;

 AddContentData: Function;
 RemoveContentData: Function;

 EditHeader: Function;
}

export type TBlogContent = {
    dataType: string,
    content: string
}

const EditorData: TBlogData = {
  Header: "",  
  Content: [],

  AddContentData: () => {},
  RemoveContentData: () => {},

  EditHeader: () => {}
}

const editorContext = createContext(EditorData);

function EditorDataProvider(props: TEditorDataProviderProps){
    const [content, SetContent] = useState([] as TBlogContent[]);
    const [header, SetHeader] = useState("");

    const AddContent = (data: TBlogContent) => {
        const newContent: TBlogContent[] = [...content];
        newContent.push(data);

        SetContent(newContent);
    }

    const RemoveContent = (data: TBlogContent) => {
        let newContent: TBlogContent[] = [...content];
        newContent = newContent.filter((item)=> item !== data);

        SetContent(newContent);
    }

    const EditHeader = (data: string) => {
        SetHeader(data);
        console.log(data);
    }

    return (
        <editorContext.Provider value={{Header: header, Content: content, AddContentData: AddContent, RemoveContentData: RemoveContent, EditHeader: EditHeader} as TBlogData}>
            {props.children}
        </editorContext.Provider>
    )
}


export default function BlogEditor(){
    return (
        <div className = "center">
            <form className="w-100 center m-1">
                <EditorDataProvider>
                    <BlogEditorDisplay/>
                    <BlogEditorOptions/>
                    <SubmitBlog/>
                </EditorDataProvider>
            </form>
        </div>
    )
}

export function useEditorData(){
    return useContext(editorContext);
}