import { useParams } from "react-router-dom";
import BlogDataProvider from "../Componets/Editor/BlogDataProvider";
import BlogEditor from "../Componets/Editor/BlogEditor";
import Header from "../Componets/Header";



export default function CreatePost(){
    const params = useParams()
   
    return(
        <>
            <Header/>

            <BlogDataProvider blogId={params.id}>
                <BlogEditor/>
            </BlogDataProvider>
        </>
    )
}