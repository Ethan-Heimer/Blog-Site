import {createContext, useState, useContext} from "react";
import Header from "../Header";

export type TBlogData = {
    Header: string;
    Content: Array<TBlogContent>;

    BUID: string;
   
    AddContentData: (param: TBlogContent) => void;
    RemoveContentData: (param: TBlogContent) => void;
   
    EditHeader: Function;
}

export type TBlogContent = {
    dataType: string,
    content: string
}

const blogData: TBlogData = {
    Header: "",
    Content: [],

    BUID: "" ,

    AddContentData: () => {},
    RemoveContentData: () => {},

    EditHeader: () => {}
}

const blogContext = createContext(blogData);

type TBlogDataProps = {
    children?: React.ReactNode | any; 
}

export default function BlogDataProvider(props: TBlogDataProps){
    const[header, setHeader] = useState(blogData.Header);
    const[content, setContent] = useState(blogData.Content);

    const BUID = new Date().getTime().toString();

    const addContent = (data: TBlogContent) => {
       content.push(data);
       setContent(content);
    }

    const removeContent = (data: TBlogContent) => {
        let newContent: TBlogContent[] = [...content];
        newContent = newContent.filter((item)=> item !== data);

        setContent(newContent);
    }

    const editHeader = (value: string) => {
        setHeader(value);
    }
    
    return(
        <blogContext.Provider value={{Header: header, Content: content, BUID: BUID, AddContentData: addContent, RemoveContentData: removeContent, EditHeader: editHeader }}>
            {props.children};
        </blogContext.Provider>
    )
}

export function useBlogData(){
    return useContext(blogContext);
}