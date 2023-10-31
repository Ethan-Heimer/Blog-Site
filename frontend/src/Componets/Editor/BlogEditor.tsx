import {createContext, useState, useContext} from "react";
import BlogEditorDisplay from "./BlogEditorDisplay";
import BlogEditorOptions from "./BlogEditorOptions";
import SubmitBlog from "./input/SubmitBlog";

type TEditorDataProviderProps = {
    children: any
}

type TEditorData = {
   
}

const editorData: TEditorData = {
    
}

const editorContext = createContext(editorData);

function EditorDataProvider(props: TEditorDataProviderProps){
    return (
        <editorContext.Provider value={editorData}>
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