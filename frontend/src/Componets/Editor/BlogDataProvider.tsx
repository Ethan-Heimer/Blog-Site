import {createContext, useState, useContext, useEffect} from "react";

export type TBlogData = {
    Header: string;
    Content: string;

    BUID: string;
   
    EditContent: (param: string) => void;
    EditHeader: (param: string) => void;
}

export type TBlogContent = {
    dataType: string,
    content: string
}

const blogData: TBlogData = {
    Header: "",
    Content: "",

    BUID: "" ,

    EditContent: () => {},
    EditHeader: () => {}
}

const blogContext = createContext(blogData);

type TBlogDataProps = {
    children?: React.ReactNode; 

    blogId?: string;
}

export default function BlogDataProvider(props: TBlogDataProps){
    const[header, setHeader] = useState("");
    const[content, setContent] = useState("");
    const[buid, setBUID] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/blog/get/"+props.blogId)
        .then(res => res.json())
        .then(res => { 
            if(res.status == 200){
                console.log(res.data, "data");
                
                setHeader(res.data.Header);
                setContent(res.data.Content);

                setBUID(res.data._id);
            }  
        })
        .catch(error => {
            console.warn('Error', error);
            setBUID(new Date().getTime().toString());
        })
    }, [])

    
    return(
        <blogContext.Provider value={{Header: header, Content: content, BUID: buid, EditContent: setContent, EditHeader: setHeader}}>
            {props.children};
        </blogContext.Provider>
    )
}

export function useBlogData(){
    return useContext(blogContext);
}