import {createContext, useState, useContext, useEffect} from "react";

export type TBlogData = {
    Header: string;
    Content: Array<TBlogContent>;

    BUID: string;
   
    AddContentData: (param: TBlogContent) => void;
    RemoveContentData: (param: TBlogContent) => void;
   
    EditHeader: (param: string) => void;
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
    children?: React.ReactNode; 

    blogId?: string;
}

export default function BlogDataProvider(props: TBlogDataProps){
    const[header, setHeader] = useState(blogData.Header);
    const[content, setContent] = useState(blogData.Content);

    let BUID: string = "";

    const addContent = (data: TBlogContent) => {
       const newContent = [...content];
       newContent.push(data);
       setContent(newContent);
    }

    const removeContent = (data: TBlogContent) => {
        let newContent: TBlogContent[] = [...content];
        newContent = newContent.filter((item)=> item !== data);

        setContent(newContent);
    }

    const editHeader = (value: string) => {
        setHeader(value);
    }

    useEffect(() => {
        fetch("http://localhost:3000/blog/get/"+props.blogId)
        .then(res => res.json())
        .then(res => { 
            console.log(res);
            
            if(res.status == 200){
                setHeader(res.data.Header);
                setContent(res.data.Content);

                BUID = res.data.id;
            }  
        })
        .catch(error => {
            console.warn('Error', error);
            BUID = new Date().getTime().toString();
        })
    })
    
    return(
        <blogContext.Provider value={{Header: header, Content: content, BUID: BUID, AddContentData: addContent, RemoveContentData: removeContent, EditHeader: editHeader }}>
            {props.children};
        </blogContext.Provider>
    )
}

export function useBlogData(){
    return useContext(blogContext);
}