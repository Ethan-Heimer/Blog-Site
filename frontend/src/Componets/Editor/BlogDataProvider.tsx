import {createContext, useState, useContext, useEffect} from "react";

export type TBlogData = {
    Header: string;
    Content: string;

    BUID: string;
    Thumbnail: string;
   
    EditContent: (param: string) => void;
    EditHeader: (param: string) => void;
    SetThumbnail: (param: string) => void;
}

export type TBlogContent = {
    dataType: string,
    content: string
}

const blogData: TBlogData = {
    Header: "",
    Content: "",

    BUID: "" ,
    Thumbnail: "",

    EditContent: () => {},
    EditHeader: () => {},
    SetThumbnail: () => {}
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
    const[thumbnail, setThumbnail] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/blog/get/"+props.blogId)
        .then(res => res.json())
        .then(res => { 
            if(res.status == 200){
                console.log(res.data, "data");
                
                setHeader(res.data.Header);
                setContent(res.data.Content);

                setBUID(res.data._id);
                setThumbnail(res.data.ThumbnailURL);
            }  
        })
        .catch(error => {
            console.warn('Error', error);
            setBUID(new Date().getTime().toString());
        })
    }, [])

    
    return(
        <blogContext.Provider value={{Header: header, Content: content, BUID: buid, Thumbnail:thumbnail, EditContent: setContent, EditHeader: setHeader, SetThumbnail: setThumbnail}}>
            {props.children}
        </blogContext.Provider>
    )
}

export function useBlogData(){
    return useContext(blogContext);
}